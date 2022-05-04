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
    gameModle: GameModle;
    panel_Message: Panel_Message
    onLoad() {
        this.gameModle = GameModle
        this.panel_AniPath = cc.find("Canvas/Panel_AniPath").addComponent(Panel_AniPath);
        this.panel_Map = cc.find("Canvas/Panel_Map").addComponent(Panel_Map);
        this.panel_Man = cc.find("Canvas/Panel_Man").addComponent(Panel_Man);
        this.cameraControll = cc.find("Canvas/MainCamera").addComponent(CameraControll);
        this.panel_Door = cc.find("Canvas/Panel_Door").addComponent(Panel_Door);
        this.panel_Cloud = cc.find("Canvas/Panel_Cloud").addComponent(Panel_Cloud);
        this.panel_UI = cc.find("Canvas/Panel_UI").addComponent(Panel_UI);
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
        this.mainInit()
    }
    sendModle(type: string) {
        switch (type) {
            case GameEvent.InitMap:
                console.log(this.panel_AniPath.TWPath);

                this.EventEmit(type, this.gameModle, this.panel_AniPath.TWPath);
                break;
            case GameEvent.BearSetModle:
            case GameEvent.SetModel:
                this.EventEmit(type, this.gameModle);
                break;
        }
        // this.EventEmit(type)
    }
    changeStationSprite(_number: number) {
        if (_number < 2 || _number > 19) return;
        let _class = this.gameModle.mapSprite.get(_number)
        if (_class.isGet) return;
        _class.mySprite.spriteFrame = AssetMng.Asset.get("Station_" + _number.toString())
        _class.getAction();
    }
    sendCommand(type: Commamnd) {
        this[type]()
    }
    /**
     * 流程
     */
    async mainInit() {
        await this.panel_Door.reset()
        await this.cameraControll.showAllView()
        await this.cameraControll.moveToManCamera(this.gameModle, false)
        await this.panel_Message.show()
        this.panel_Message.choose_Ticket.actionShow()
    }
    async endChooseTicket() {
        this.panel_Message.choose_Train.initTrainSprite()
        this.panel_Message.choose_Train.actionShow(
            () => {
                this.panel_Message.choose_Train.isRandom = true
            }
        )
    }
    async endChoosTrain() {
        this.panel_Man.setManSprite(AssetMng.Asset.get("test"))
        this.panel_Man.resetOeg()
        await this.panel_Message.choose_Train.getTrainAciton()
        await this.panel_Message.choose_Train.actionHide()
        await this.panel_Message.hide()
        this.cameraControll.activeManCamera(true);
        this.cameraControll.activeMineCamera(false);
        this.panel_Man.manGO()
    }
    

}

