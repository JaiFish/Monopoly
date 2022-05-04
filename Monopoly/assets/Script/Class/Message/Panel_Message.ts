import { GameEvent } from "../../Enum/GameEvent";
import Choose_Ticket from "./Choose_Ticket";
import Choose_Train from "./Choose_Train";
import MessageAction from "./MessageAction";

export default class Panel_Message extends MessageAction {
    btn_Close: cc.Node;
    bg: cc.Node;
    choose_Ticket: Choose_Ticket;
    choose_Train: Choose_Train;
    protected onLoad(): void {

        this.bg = cc.find("BG", this.node)
        this.btn_Close = cc.find("Btn_Close", this.bg)

        this.choose_Train = cc.find("Choose_Train", this.bg).addComponent(Choose_Train)
        this.choose_Ticket = cc.find("Choose_Ticket", this.bg).addComponent(Choose_Ticket)
        this.initEvent(GameEvent.ShowMessage, this.show)
        this.initEvent(GameEvent.HideMessage, this.hide)
        this.hide()
        this.bg.setScale(0);
    }
    // protected start(): void {

    // }
    async show() {
        return new Promise<void>((resolve, reject) => {
            this.EventEmit(GameEvent.OpenBufer)
            this.bg.setScale(0)
            this.outBack(this.bg, 1, resolve)
        })
    }
    async hide() {
        return new Promise<void>((resolve, reject) => {
            this.inBack(this.bg, 0, () => {
                this.EventEmit(GameEvent.CloseBufer)
                resolve()
            })
        })
    }
}
