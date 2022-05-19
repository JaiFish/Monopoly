import ButtonMng from '../Data/base/ButtonMng';
import ComponentBase from '../Data/base/ComponentBase';
import { Commamnd } from '../Enum/Commad';
import { GameEvent } from '../Enum/GameEvent';
const { ccclass, property } = cc._decorator;

@ccclass
export default class Panel_Teaching extends ComponentBase {
    info0: cc.Node
    info1: cc.Node
    info2: cc.Node
    info3: cc.Node
    protected onLoad(): void {
        this.info0 = cc.find('Info0', this.node)
        this.info1 = cc.find('Info1', this.node)
        this.info2 = cc.find('Info2', this.node)
        this.info3 = cc.find('Info3', this.node)

        ButtonMng.addEvent(this.node, "Panel_Teaching", "eventControll", cc.find("Btn_Close",this.info0).getComponent(cc.Button), "0")
        ButtonMng.addEvent(this.node, "Panel_Teaching", "eventControll", cc.find("Btn_Close",this.info1).getComponent(cc.Button), "1")
        ButtonMng.addEvent(this.node, "Panel_Teaching", "eventControll", cc.find("Btn_Close",this.info2).getComponent(cc.Button), "2")
        ButtonMng.addEvent(this.node, "Panel_Teaching", "eventControll", cc.find("Btn_Close",this.info3).getComponent(cc.Button), "3")
        this.info0.active = false
        this.info1.active = false
        this.info2.active = false
        this.info3.active = false
        this.defaultReset()
    }
    eventControll(e: cc.Event, _customEventData: string) {
        switch (Number(_customEventData)) {
            case 0:
                this.info0.active = false
                this.info1.active = true
                break;
            case 1:
                this.info1.active = false
                this.info2.active = true
                break;
            case 2:
                this.info2.active = false
                this.info3.active = true
                break;
            case 3:
                this.info3.active = false
                this.EventEmit(GameEvent.SendCommand,Commamnd.EndTeaching)
                break;

        }
    }
}
