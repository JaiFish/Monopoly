import AssetMng from "./Asset/AssetMng";
import ComponentBase from "./Data/base/ComponentBase";
import CameraControll from "./Class/CameraControll";
import Panel_Man from "./Class/Mam/Panel_Man";
import Panel_AniPath from "./Class/Panel_AniPath";
import Panel_Cloud from "./Class/Panel_Cloud";
import Panel_Door from "./Class/Panel_Door";
import Panel_Map from "./Class/Panel_Map";
import { GameEvent } from "./Enum/GameEvent";
import GameModle from "./GameModle";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Controll extends ComponentBase {

    panel_AniPath: Panel_AniPath;
    panel_Map: Panel_Map;
    panel_Man: Panel_Man;
    cameraControll: CameraControll;
    panel_Door: Panel_Door;
    panel_Cloud: Panel_Cloud;
    gameModle: GameModle;
    onLoad() {
        this.gameModle = GameModle
        this.panel_AniPath = cc.find("Canvas/Panel_AniPath").addComponent(Panel_AniPath);
        this.panel_Map = cc.find("Canvas/Panel_Map").addComponent(Panel_Map);
        this.panel_Man = cc.find("Canvas/Panel_Man").addComponent(Panel_Man);
        this.cameraControll = cc.find("Canvas/MainCamera").addComponent(CameraControll);
        this.panel_Door = cc.find("Canvas/Panel_Door").addComponent(Panel_Door);
        this.panel_Cloud = cc.find("Canvas/Panel_Cloud").addComponent(Panel_Cloud);
        this.initEvent(GameEvent.SendModel, this.sendModle)
        AssetMng.startLoad();
        // console.log(this.mapItem);
        console.log(fcc);
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

}

