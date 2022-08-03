import ButtonMng from "../../Data/base/ButtonMng"
import ComponentBase from "../../Data/base/ComponentBase"
import { Commamnd } from "../../Enum/Commad"
import { GameEvent } from "../../Enum/GameEvent"
const { ccclass, property } = cc._decorator;

@ccclass
export default class CloseFrame extends ComponentBase {
    btn_CloseFrame: cc.Button
    protected onLoad(): void {
        this.btn_CloseFrame = cc.find("Btn_CloseFrame", this.node).getComponent(cc.Button)
        this.defaultReset()
    }
    protected start(): void {
        ButtonMng.addEvent(this.node, "CloseFrame", "sendEvent", this.btn_CloseFrame)
    }
    sendEvent(e: cc.Event, _customEventData: string) {
        this.EventEmit(GameEvent.SendCommand, Commamnd.CloseVideo)
    }
}