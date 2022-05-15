import AssetMng from "./Asset/AssetMng";
import CameraControll from "./Class/CameraControll";
import Panel_Man from "./Class/Mam/Panel_Man";
import Panel_AniPath from "./Class/Panel_AniPath";
import Panel_Cloud from "./Class/Panel_Cloud";
import Panel_Door from "./Class/Panel_Door";
import Panel_Map from "./Class/Panel_Map";
import { GameEvent } from "./Enum/GameEvent";
import GameModle from "./GameModle";
import Panel_UI from "./Class/UI/Panel_UI";
import Panel_Message from "./Class/Message/Panel_Message";
import ComponentBase from "./Data/base/ComponentBase";
import { Commamnd } from "./Enum/Commad";
import Panel_Bear from "./Class/Panel_Bear";
import { GameState } from "./Enum/GameState";
import QALibrary from "./Data/QA/QALibrary";
import ChooseLibrary from "./Data/QA/ChooseLibrary";
import AnswerLibrary from "./Data/QA/AnswerLibrary";
import ExplainLibrary from "./Data/QA/ExplainLibrary";
import TrainInfoLibrary from "./Data/TrainInfoLibrary";
import PropsLibrary from "./Data/QA/PropsLibrary";
import { CameraState } from "./Enum/CameraState";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Controll extends ComponentBase {

    panel_AniPath: Panel_AniPath;
    panel_Map: Panel_Map;
    panel_Man: Panel_Man;
    cameraControll: CameraControll;
    panel_Door: Panel_Door;
    panel_Cloud: Panel_Cloud;
    panel_UI: Panel_UI;
    panel_Message: Panel_Message
    panel_Bear: Panel_Bear
    onLoad() {
        this.panel_AniPath = cc.find("Canvas/Panel_AniPath").addComponent(Panel_AniPath);
        this.panel_Map = cc.find("Canvas/Panel_Map").addComponent(Panel_Map);
        this.panel_Man = cc.find("Canvas/Panel_Man").addComponent(Panel_Man);
        this.cameraControll = cc.find("Canvas/MainCamera").addComponent(CameraControll);
        this.panel_Door = cc.find("Canvas/Panel_Door").addComponent(Panel_Door);
        this.panel_Cloud = cc.find("Canvas/Panel_Cloud").addComponent(Panel_Cloud);
        this.panel_UI = cc.find("Canvas/Panel_UI").addComponent(Panel_UI);
        this.panel_Bear = cc.find("Canvas/Panel_Bear").addComponent(Panel_Bear);

        this.panel_Message = cc.find("Canvas/Panel_Message").addComponent(Panel_Message);

        this.initEvent(GameEvent.SendModel, this.sendModle)
        this.initEvent(GameEvent.SendCommand, this.sendCommand)
        this.initEvent(GameEvent.GetStation, this.changeStationSprite)
        AssetMng.startLoad();
        // console.log(this.mapItem);
        // console.log(fcc);
        fcc.configMgr
            .build()
        let updateTime = cc.sys.os == cc.sys.OS_IOS ? 500 : 100
        fcc.sceneMgr.sceneDirection = fcc.type.SceneDirectionType.LANDSCAPE
        fcc.sceneMgr
            .setDesignHeight(720)
            .setDesignWidth(1280)
            .updateSize(fcc.type.SceneStyleType.HORIZONTAL)
            .startListener(updateTime)

    }
    start() {
        this.sendModle(GameEvent.InitMap);
        this.EventEmit(GameEvent.CloseBufer)
        GameModle.gameState = GameState.Wait
        this.panel_Message.node.opacity = 255
        this.panel_Door.reset()
        // this.mainInit()
    }
    sendModle(type: string) {
        switch (type) {
            case GameEvent.InitMap:
                this.EventEmit(type, this.panel_AniPath.TWPath);
                break;
            case GameEvent.BearSetModle:
            case GameEvent.SetModel:
                this.EventEmit(type, GameModle);
                break;
        }
        // this.EventEmit(type)
    }
    changeStationSprite(_number: number) {
        if (_number < 2 || _number > 19) return;
        let _class = GameModle.mapSprite.get(_number)
        if (_class.isGet) return;
        _class.mySprite.spriteFrame = AssetMng.data_SprtieAtlas.get("Station_" + _number.toString())
        _class.getAction();
    }
    sendCommand(type: Commamnd, ...any: any[]) {
        this[type](...any)
    }
    /**
     * 流程
     */
    async mainInit() {
        await AssetMng.checkState();
        await this.panel_Door.openDoor()
        await this.panel_Door.scaleAction()
        await this.cameraControll.showAllView()
        // return
        await this.cameraControll.moveToManCamera(false)
        await this.panel_Message.show()
        this.panel_Message.choose_Ticket.actionShow()

        //test
        // this.panel_Man.nowStation = 15
        // GameModle.playData.level = 1
        // this.endChooseTicket()

        // this.showQA()
        // this.showGetProps()
        // this.panel_Message.question.actionShow()
    }
    async endChooseTicket() {
        GameModle.qaLibrary = new QALibrary(GameModle.playData.level, 3);
        GameModle.chooseLibrary = new ChooseLibrary(GameModle.playData.level, GameModle.qaLibrary.qaLib_num)
        GameModle.answerLibrary = new AnswerLibrary(GameModle.playData.level, GameModle.qaLibrary.qaLib_num)
        GameModle.explainLibrary = new ExplainLibrary(GameModle.playData.level, GameModle.qaLibrary.qaLib_num)
        await this.panel_Message.choose_Ticket.actionHide()
        this.panel_Message.choose_Train.initTrainSprite()
        await this.panel_Message.choose_Train.actionShow()

    }
    async endChoosTrain() {
        this.panel_Man.setManSprite(AssetMng.data_SprtieAtlas.get(GameModle.playData.trainType))
        this.panel_Man.resetOeg()
        this.panel_Bear.init()
        // await this.panel_Message.choose_Train.getTrainAciton()
        await this.panel_Message.choose_Train.actionHide()
        await this.panel_Message.hide()
        GameModle.gameState = GameState.Start;
        // this.panel_UI.station.chengeSprit()
        this.panel_UI.show()
        this.cameraControll.activeManCamera(true);
        this.cameraControll.activeMineCamera(false);
        this.panel_UI.props_Feature.setStart_Stop(true)
        this.panel_Man.manGO()
    }
    async showVideo() {
        switch (this.panel_Man.nowStation) {
            case 1:
                console.log("播放安全影片");
                break
            case 20:
                console.log("播放廉政影片");
                break
        }
        await this.panel_Message.show();
        this.closeVideo();
        // window.parent.postMessage({}, "*")
    }
    async closeVideo() {
        await this.panel_Message.hide();
        this.panel_UI.props_Feature.setStart_Stop(true)
        this.panel_Man.manGO()
    }
    async showQA() {
        let getQA = ""
        let getChooese = ""
        getQA = GameModle.qaLibrary.qaLib_str[GameModle.qaIndex]
        getChooese = GameModle.chooseLibrary.chooseLib[GameModle.qaIndex]
        this.panel_Message.question.reset()
        this.panel_Message.question.setQAInfo(getQA, GameModle.playData.level, GameModle.qaLibrary.qaLib_num[GameModle.qaIndex])
        this.panel_Message.question.setChoose(getChooese)
        await this.panel_Message.show();
        this.panel_Message.question.actionShow();
    }
    async showAgainQA() {
        await this.panel_Message.qaAnswer.actionHide();
        this.panel_Message.question.actionShow();
    }
    async endQA() {
        await this.panel_Message.question.actionHide();
        this.showAnswer()
    }
    async showAnswer() {
        let getAnswer = ""
        getAnswer = GameModle.answerLibrary.answerLib_str[GameModle.qaIndex].substring(0, 1)
        this.panel_Message.qaAnswer.reset()
        if (GameModle.chooseAnswer == getAnswer) {
            this.panel_Message.qaAnswer.trueAnswer()
        }
        else
            this.panel_Message.qaAnswer.falseAnswer()
        await this.panel_Message.qaAnswer.actionShow();
    }
    async endAnswer() {
        await this.panel_Message.qaAnswer.actionHide();
        this.showGetProps();
    }
    async showExplain() {
        await this.panel_Message.qaAnswer.actionHide();
        this.panel_Message.explain.setInfoStr(GameModle.explainLibrary.explainLib[GameModle.qaIndex]);
        GameModle.qaIndex++//+兩個地方是因為玩家會有分支，因此在分支的末端加1Index
        this.panel_Message.explain.actionShow();
    }
    async endExplain() {
        await this.panel_Message.explain.actionHide();
        this.showGetProps();
    }

    async showStationInfo(select: number) {
        if (select == 5 || select == 11 || select == 15) return
        if (this.panel_Man.manState != GameState.Wait)
            this.panel_Man.manLineWait()

        await this.panel_Message.show();
        this.panel_Message.stationInfo.setTrainName(TrainInfoLibrary.getName(select))
        this.panel_Message.stationInfo.setSprite(AssetMng.data_SprtieAtlas.get("StationInfo_" + select.toString()))
        this.panel_Message.stationInfo.setInfo(TrainInfoLibrary.getInfo(select))
        await this.panel_Message.stationInfo.actionShow();
    }
    async endTationInfo() {
        await this.panel_Message.stationInfo.actionHide();
        await this.panel_Message.hide();
    }

    async showGetProps() {
        this.panel_Message.getProps.setData(
            PropsLibrary.lib.get(this.panel_Man.nowStation),
            AssetMng.data_SprtieAtlas.get("GetProps_" + this.panel_Man.nowStation.toString())
        )
        await this.panel_Message.getProps.actionShow()
    }
    async endGetProps() {
        await this.panel_Message.getProps.actionHide()
        await this.panel_Message.hide();
        GameModle.qaIndex++//+兩個地方是因為玩家會有分支，因此在分支的末端加1Index
        this.panel_UI.props_Feature.setStart_Stop(true)
        this.panel_Man.manGO()
    }
    async showEndGame() {
        this.panel_Message.endGame.playBearSprite(GameModle.playData.trainTypeNumber);
        await this.panel_Message.show();
        this.panel_Message.endGame.actionShow();

    }
    async closeEndGame() {
        await this.panel_Message.endGame.actionHide()
        await this.panel_Message.hide();
    }
    againGame() {
        this.closeEndGame()
        cc.director.loadScene("GameSence");
    }

    async goLottery() {
        this.closeEndGame()
        await this.cameraControll.showAllView()
        await this.panel_Door.backScaleAction()
        await this.panel_Door.closeDoor()
    }
    doorAgainGame() {
        cc.director.loadScene("GameSence");
    }
    async menGo() {
        if (this.cameraControll.cameraState != CameraState.Men)
            await this.cameraControll.moveToManCamera()
        this.panel_Man.manGO()
    }
    manWait() {
        this.panel_Man.manWait()
    }
    manLineWait() {
        this.panel_Man.manLineWait()
    }
    async moveTarget(select: number) {
        if (this.panel_Man.manState != GameState.Wait) {
            this.panel_UI.props_Feature.setStart_Stop(false)
            this.panel_Man.manLineWait()
        }

        this.panel_Message.stationInfo.reset()
        this.cameraControll.activeManCamera(false);
        this.cameraControll.activeMineCamera(true);
        await this.cameraControll.moveToStation(GameModle.mapItem.get(select).node)

    }
    updataUIStart(setBoolea: boolean) {
        this.panel_UI.props_Feature.setStart_Stop(setBoolea)
    }
}

