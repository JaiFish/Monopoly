import ButtonMng from '../../Data/base/ButtonMng';
import ComponentBase from '../../Data/base/ComponentBase';
import { Commamnd } from '../../Enum/Commad';
import { GameEvent } from '../../Enum/GameEvent';
const { ccclass, property } = cc._decorator;

@ccclass
export default class EndGame extends ComponentBase {
    animation_Bear: cc.Animation;
    btn_Again: cc.Button;
    btn_GoLottery: cc.Button;
    protected onLoad(): void {
        this.animation_Bear = cc.find("Mask/animation_Bear", this.node).getComponent(cc.Animation)
        this.btn_GoLottery = cc.find("Btn_GoLottery", this.node).getComponent(cc.Button)
        this.btn_Again = cc.find("Btn_Again", this.node).getComponent(cc.Button)
        this.defaultReset()
    }
    protected start(): void {
        ButtonMng.addEvent(this.node, "EndGame", "sendEvent", this.btn_GoLottery, "0")
        ButtonMng.addEvent(this.node, "EndGame", "sendEvent", this.btn_Again, "1")
    }
    playBearSprite(number: number) {
        this.animation_Bear.play("Bear_Train" + number)
    }
    sendEvent(e: cc.Event, _customEventData: string) {
        switch (_customEventData) {
            case "0"://遊戲結束去抽獎
                this.EventEmit(GameEvent.SendCommand, Commamnd.GoLottery)
                break;
            case "1"://再玩一次
                this.EventEmit(GameEvent.SendCommand, Commamnd.AgainGame)
                break;
        }
    }
}   