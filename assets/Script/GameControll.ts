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
import Panel_Version from "./Class/Panel_Version";
import Panel_Test from "./Class/Panel_Test";
import { TrainType } from "./Enum/TrainType";
import { MyDelay } from "./Data/DelayTime";
import Panel_Bufer from "./Class/Panel_Bufer";
import MusciMng from "./Data/base/MusciMng";
import Panel_Loading from "./Class/Panel_Loading";
import EndGame from "./Class/Message/EndGame";


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
    panel_Version: Panel_Version
    panel_Test: Panel_Test
    panel_Bufer: Panel_Bufer
    panel_Loading: Panel_Loading


    onLoad() {

        this.panel_Loading = cc.find("Canvas/Panel_Loading").addComponent(Panel_Loading);
        this.panel_AniPath = cc.find("Canvas/Panel_AniPath").addComponent(Panel_AniPath);
        this.panel_Map = cc.find("Canvas/Panel_Map").addComponent(Panel_Map);
        this.panel_Man = cc.find("Canvas/Panel_Man").addComponent(Panel_Man);
        this.cameraControll = cc.find("Canvas/MainCamera").addComponent(CameraControll);
        this.panel_Door = cc.find("Canvas/Panel_Door").addComponent(Panel_Door);
        this.panel_Cloud = cc.find("Canvas/Panel_Cloud").addComponent(Panel_Cloud);
        this.panel_UI = cc.find("Canvas/Panel_UI").addComponent(Panel_UI);
        this.panel_Bear = cc.find("Canvas/Panel_Bear").addComponent(Panel_Bear);
        this.panel_Bufer = cc.find("Canvas/Panel_Bufer").addComponent(Panel_Bufer);



        this.panel_Message = cc.find("Canvas/Panel_Message").addComponent(Panel_Message);
        this.panel_Version = cc.find("Canvas/Panel_Version").addComponent(Panel_Version);

        this.panel_Test = cc.find("Canvas/Panel_Test").addComponent(Panel_Test);
        if (CC_DEV)
            this.panel_Test.show()
        else
            this.panel_Test.hide()


        this.initEvent(GameEvent.SendModel, this.sendModle)
        this.initEvent(GameEvent.SendCommand, this.sendCommand)
        this.initEvent(GameEvent.GetStation, this.changeStationSprite)

        AssetMng.startLoad();

        fcc.configMgr
            .setFrameWorkDebug(false)
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
        let data = new postCmd()
        data.cmd = "StartLoading"
        //@ts-ignore
        data.isRotated = cc.view._isRotated
        GameModle.webPostMessage.send(data)

        MusciMng.init()
        this.panel_Version.setVersion(GameModle.version);
        this.sendModle(GameEvent.InitMap);
        this.EventEmit(GameEvent.CloseBufer)
        GameModle.gameState = GameState.Wait
        GameModle.webPostMessage.connect()

        this.panel_Message.node.opacity = 255

        this.panel_Door.reset()
        this.checkData()
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
    async checkData() {
        // console.log("初始化檢查資料");

        GameModle.isEndLoadingData = false
        this.panel_Loading.show()
        //Test
        await AssetMng.checkState();
        // this.doorAgainGame()
        GameModle.isEndLoadingData = true
        this.panel_Loading.Actionhide()
    }
    async mainInit() {
        this.panel_Version.node.active = false
        MusciMng.effectPlay("DoorOpen")
        await this.panel_Door.openDoor()
        await this.panel_Door.scaleAction()
        MusciMng.effectPlay("maneyMixSound")
        await this.cameraControll.showAllView()
        MusciMng.musicPlay("gameBG")
        await new MyDelay().setDelay(0.5)
        await this.cameraControll.moveToManCamera()


        // this.panel_Man.nowStation = 20
        // GameModle.playData.level = 0 
        // GameModle.playData.trainTypeNumber = 0
        // GameModle.playData.trainType = TrainType.Type0
        // this.endChoosTrain()
        // return
        this.panel_Man.manState = GameState.ShowMessage
        await this.panel_Message.show()
        this.panel_Message.choose_Ticket.show()

        //test
        // this.panel_Man.nowStation = 20
        // GameModle.playData.level = 1
        // this.endChooseTicket()

        // this.showQA()
        // this.showGetProps()
        // this.panel_Message.question.show()
    }
    async endChooseTicket() {
        GameModle.qaIndex = 0
        GameModle.qaLibrary = new QALibrary(GameModle.playData.level, 3);
        GameModle.chooseLibrary = new ChooseLibrary(GameModle.playData.level, GameModle.qaLibrary.qaLib_num)
        GameModle.answerLibrary = new AnswerLibrary(GameModle.playData.level, GameModle.qaLibrary.qaLib_num)
        GameModle.explainLibrary = new ExplainLibrary(GameModle.playData.level, GameModle.qaLibrary.qaLib_num)

        // console.log("QA題庫：" + GameModle.qaLibrary.qaLib_str);
        // console.log("選向：" + GameModle.chooseLibrary.chooseLib);
        // console.log("問答：" + GameModle.answerLibrary.answerLib_str);
        // console.log("祥解：" + GameModle.explainLibrary.explainLib);
        this.panel_Message.choose_Ticket.hide()
        this.panel_Message.choose_Train.initTrainSprite()
        this.panel_Message.choose_Train.show()

    }
    async endChoosTrain() {
        AssetMng.bearAsset(GameModle.playData.trainTypeNumber)
        await new MyDelay().setDelay(2)

        this.panel_Man.setManSprite(AssetMng.data_SprtieAtlas.get(GameModle.playData.trainType))
        this.panel_Man.resetOeg()
        this.panel_Bear.init()
        // await this.panel_Message.choose_Train.getTrainAciton()
        this.panel_Message.choose_Train.hide()
        await this.panel_Message.hide()
        this.panel_Man.manState = GameState.Wait
        this.showTeaching()
    }
    async showTeaching() {
        this.panel_UI.show()
        this.panel_UI.openTeaching()
    }
    async endTeaching() {
        GameModle.gameState = GameState.Start;
        // this.panel_UI.station.chengeSprit()
        this.panel_UI.setBtnEvent()
        this.cameraControll.activeManCamera(true);
        this.cameraControll.activeMineCamera(false);
        this.panel_UI.props_Feature.setStart_Stop(true)
        this.panel_Man.manGO()
    }
    async waitSignalLight() {
        this.panel_UI.props_Feature.setStart_Stop(false)
        if (this.panel_Man.isWaitSingnalLinght) return
        // if (this.panel_Man.manState == GameState.WaitSignalLight) return;
        // this.panel_Man.manState = GameState.WaitSignalLight

        this.panel_Man.manStop()
        await this.panel_Bear.checkState()
        this.panel_UI.props_Feature.setStart_Stop(true)
        this.panel_Man.manEndSignalLight()

    }
    async showVideo() {
        GameModle.isVideoEnd = true
        this.panel_Man.manState = GameState.ShowMessage
        await this.panel_Message.show();
        let data = new postCmd()
        if (this.panel_UI.setting.itemMap.get(0).nowState) {//暫時這樣寫在另想好方法，指引到SettingBtn
            MusciMng.swichEffect()
            MusciMng.swichMusic()
        }
        switch (this.panel_Man.nowStation) {
            case 1:
                data.cmd = "OpenView"
                data.viewType = 1
                data.kid = false
                GameModle.webPostMessage.send(data)
                // console.log("播放安全影片");
                break
            case 20:
                let getKid = GameModle.playData.level == 0 ? true : false
                data.cmd = "OpenView"
                data.viewType = 2
                data.kid = getKid;
                GameModle.webPostMessage.send(data)
                // console.log("播放廉政影片");
                break
        }
        // this.closeVideo();
        // window.parent.postMessage({}, "*")
    }
    async closeVideo() {
        if (!GameModle.isVideoEnd) return;
        GameModle.isVideoEnd = false
        if (this.panel_UI.setting.itemMap.get(0).nowState) {//暫時這樣寫在另想好方法，指引到SettingBtn
            MusciMng.swichEffect()
            MusciMng.swichMusic()
        }
        await this.panel_Message.hide();
        this.panel_Man.manState = GameState.Wait
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
        this.panel_Man.manState = GameState.ShowMessage
        await this.panel_Message.show();
        this.panel_Message.question.show();
    }
    async showAgainQA() {
        this.panel_Message.qaAnswer.hide();
        this.panel_Message.question.show();
    }
    async endQA() {
        this.panel_Message.question.hide();
        this.showAnswer()
    }
    async showAnswer() {
        let getAnswer = ""
        getAnswer = GameModle.answerLibrary.answerLib_str[GameModle.qaIndex].substring(0, 1)
        this.panel_Message.qaAnswer.reset()
        if (GameModle.chooseAnswer == getAnswer) {
            MusciMng.effectPlay("True")
            this.panel_Message.qaAnswer.trueAnswer()
        }
        else {
            this.panel_Message.qaAnswer.falseAnswer()
            MusciMng.effectPlay("False")
        }

        this.panel_Message.qaAnswer.show();
    }
    async endAnswer() {
        this.panel_Message.qaAnswer.hide();
        this.showGetProps();
    }
    async showExplain() {
        this.panel_Message.qaAnswer.hide();
        this.panel_Message.explain.setInfoStr(GameModle.explainLibrary.explainLib[GameModle.qaIndex]);
        this.panel_Message.explain.show();
    }
    async endExplain() {
        this.panel_Message.explain.hide();
        this.showGetProps();
    }

    async showStationInfo(select: number) {
        if (this.panel_Man.manState == GameState.ShowMessage) return
        if (select == 5 || select == 11 || select == 15) return
        if (this.panel_Man.manState != GameState.Wait)
            this.panel_Man.manLineWait()

        this.panel_Man.manState = GameState.ShowMessage
        await this.panel_Message.show();
        this.panel_Message.stationInfo.setTrainName(TrainInfoLibrary.getName(select))
        this.panel_Message.stationInfo.setSprite(AssetMng.data_SprtieAtlas.get("StationInfo_" + select.toString()))
        this.panel_Message.stationInfo.setInfo(TrainInfoLibrary.getInfo(select))
        this.panel_Message.stationInfo.show(); ``
    }
    async endTationInfo() {
        this.panel_Message.stationInfo.hide();
        await this.panel_Message.hide();
        this.panel_Man.manState = GameState.Wait
    }

    async showGetProps() {
        this.panel_Message.getProps.setData(
            PropsLibrary.lib.get(this.panel_Man.nowStation),
            AssetMng.data_SprtieAtlas.get("GetProps_" + this.panel_Man.nowStation.toString())
        )
        this.panel_Message.getProps.show()

        this.panel_UI.props_Feature.getProps(this.panel_Man.nowStation)
        MusciMng.effectPlay("GetProps")
    }
    async endGetProps() {
        this.panel_Message.getProps.hide()
        await this.panel_Message.hide();
        this.panel_Man.manState = GameState.Wait
        GameModle.qaIndex++//+兩個地方是因為玩家會有分支，因此在分支的末端加1Index

        this.panel_UI.props_Feature.setStart_Stop(true)
        this.panel_Man.manGO()
    }
    async showEndGame() {
        this.panel_Man.manStop()
        this.panel_Man.manState = GameState.ShowMessage

        await this.panel_Message.show();
        await AssetMng.checkState();
        this.panel_Message.endGame.playBearSprite(GameModle.playData.trainTypeNumber);
        this.panel_Message.endGame.show();
    }
    async closeEndGame() {
        this.panel_Message.endGame.hide()
        await this.panel_Message.hide();
        this.panel_Man.manState = GameState.Wait
    }
    againGame() {
        this.closeEndGame()
        cc.director.loadScene("GameSence");
        MusciMng.musicStop()
        MusciMng.effectAllStop()
    }

    async goLottery() {
        this.closeEndGame()
        MusciMng.effectPlay("maneyMixSound")

        await this.cameraControll.showAllView()
        await this.panel_Door.backScaleAction()
        await this.panel_Door.closeDoor()
        MusciMng.musicStop()
        MusciMng.effectAllStop()
        //活動結束拔除
        let data = new postCmd()
        data.cmd = "OpenView"
        data.viewType = -1
        data.kid = false
        GameModle.webPostMessage.send(data)

        setTimeout(() => {
            this.doorAgainGame()//穰遊戲整個重新，因為現在要跟網頁合作關係所以做法改變    
        }, 500);

        // console.log("遊戲結束Show抽獎與問答");

    }

    endToBackGame() {
        this.closeEndGame()
        this.panel_Man.node.active = false
        this.cameraControll.activeMineCamera(true)
        this.cameraControll.activeManCamera(false)
        this.cameraControll.moveToStation(GameModle.mapItem.get(0).node)
        this.panel_UI.show()
        this.panel_UI.props_Feature.hide()
        this.panel_UI.setbtnEvent_Again()
        this.panel_UI.backGameUse.show()
    }
    doorAgainGame() {
        cc.director.loadScene("GameSence");
    }
    async menGo() {
        if (this.cameraControll.cameraState != CameraState.Men) {
            await this.cameraControll.moveToManCamera(0.3)
            this.panel_Man.manGO()
        }
    }
    async manSkip() {
        if (this.cameraControll.cameraState != CameraState.Men) {
            await this.cameraControll.moveToManCamera(0.3)
        }
        this.panel_Man.manSkip()
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
    clinetClickStart_Stop() {
        MusciMng.effectPlay("BtnClick")

        if (this.panel_Man.isWaitSingnalLinght) return
        this.panel_UI.props_Feature.setStart_Stop()
        //正在走
        if (!this.panel_UI.props_Feature.isGo)
            this.panel_Man.manWait()
        else {
            this.panel_Man.manGO()
            this.menGo()
        }
    }
    showAllView() {
        this.cameraControll.activeManCamera(false);
        this.cameraControll.activeMineCamera(true);
        this.panel_Message.hide()
        this.cameraControll.showAllView();
    }
    webCheckData() {
        if (GameModle.isEndLoadingData) {
            GameModle.isEndLoadingData = false //避免重複敲

            let data = new postCmd()
            data.cmd = 'Close'
            //@ts-ignore
            GameModle.webPostMessage.send(data)
            //開始遊戲
            this.mainInit()
        }

    }
    //音樂的處理
    public lateUpdate() {
        //@ts-ignore
        let context = cc.sys.__audioSupport.context;
        if (context.state === 'suspended') {
            context.resume();
            // console.log(context.state);
        }
    }
    protected update(dt: number): void {
        // console.log(cc.audioEngine.getState(MusciMng.musicID));
        // console.log(cc.audioEngine.getState(MusciMng.effectID.get('DoorOpen')));
        // console.log("正在播放嗎?" + cc.audioEngine.isMusicPlaying());

        // cc.find("Panel_長寬測試/視窗").getComponent(cc.Label).string = "寬：" + cc.view.getDesignResolutionSize().width + "\n高：" + cc.view.getDesignResolutionSize().height
        //@ts-ignore
        // cc.find("Panel_長寬測試/旋轉").getComponent(cc.Label).string = cc.view._isRotated.toString()
        // cc.game.
    }


}

class postCmd {
    cmd: string
    viewType: number
    kid: boolean
    isRotated: boolean;
}


