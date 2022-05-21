import ButtonMng from '../Data/base/ButtonMng';
import ComponentBase from '../Data/base/ComponentBase';
import MusciMng from '../Data/base/MusciMng';
import { Commamnd } from '../Enum/Commad';
import { GameEvent } from '../Enum/GameEvent';
const { ccclass, property } = cc._decorator;

@ccclass
export default class Panel_Test extends ComponentBase {
    btn_FullSceen: cc.Button
    btn_closeView:cc.Button
    _inedx: number
    protected onLoad(): void {
        this._inedx = 0
        this.btn_FullSceen = cc.find("AllSence", this.node).getComponent(cc.Button)
        this.btn_closeView = cc.find("CloseView", this.node).getComponent(cc.Button)
        ButtonMng.addEvent(this.node, "Panel_Test", "eventFull", this.btn_FullSceen)
        ButtonMng.addEvent(this.node, "Panel_Test", "eventCloseView", this.btn_closeView)
    }
    eventFull(e: cc.Event, _customEventData: string) {
        console.log(e);
        //@ts-ignore
        if (cc.screen.fullScreen) return
        this._inedx++
        cc.find("Background/Label", this.btn_FullSceen.node).getComponent(cc.Label).string = "按下" + this._inedx
        cc.view.enableAutoFullScreen(true);
        // cc.view.setDesignResolutionSize(1280, 720, cc.ResolutionPolicy.SHOW_ALL)

    }
    eventCloseView(){
        MusciMng.effectPlay("BtnClick")
        this.EventEmit(GameEvent.SendCommand,Commamnd.CloseVideo)
    }
}