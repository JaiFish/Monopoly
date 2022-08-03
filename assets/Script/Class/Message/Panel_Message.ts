import { GameEvent } from "../../Enum/GameEvent";
import Choose_Ticket from "./Choose_Ticket";
import Choose_Train from "./Choose_Train";
import CloseFrame from "./CloseFrame";
import EndGame from "./EndGame";
import Explain from "./Explain";
import GetProps from "./GetProps";
import MessageAction from "./MessageAction";
import QAAnswer from "./QAAnswer";
import Question from "./Question";
import StationInfo from "./StationInfo";

export default class Panel_Message extends MessageAction {
    block: cc.Node;
    btn_Close: cc.Node;
    bg: cc.Node;
    bgMask: cc.Node
    choose_Train: Choose_Train;
    choose_Ticket: Choose_Ticket;
    question: Question;
    qaAnswer: QAAnswer;
    explain: Explain;
    stationInfo: StationInfo;
    getProps: GetProps
    endGame: EndGame
    closeFrame: CloseFrame;

    protected onLoad(): void {

        this.bg = cc.find("BG", this.node)
        this.bgMask = cc.find("Mask", this.bg)
        this.btn_Close = cc.find("Btn_Close", this.bg)
        this.block = cc.find("Block", this.node)

        this.choose_Train = cc.find("Choose_Train", this.bgMask).addComponent(Choose_Train)
        this.choose_Ticket = cc.find("Choose_Ticket", this.bgMask).addComponent(Choose_Ticket)
        this.question = cc.find("Question", this.bgMask).addComponent(Question)
        this.explain = cc.find("Explain", this.bgMask).addComponent(Explain)
        this.qaAnswer = cc.find("QAAnswer", this.bgMask).addComponent(QAAnswer)
        this.stationInfo = cc.find("StationInfo", this.bgMask).addComponent(StationInfo)
        this.getProps = cc.find("GetProps", this.bgMask).addComponent(GetProps)
        this.endGame = cc.find("EndGame", this.bgMask).addComponent(EndGame)
        this.closeFrame = cc.find("CloseFrame", this.bgMask).addComponent(CloseFrame)

        this.initEvent(GameEvent.ShowMessage, this.show)
        this.initEvent(GameEvent.HideMessage, this.hide)

        this.defaultReset()
        this.bg.setScale(0);
        this.block.active = false
    }
    // protected start(): void {

    // }
    async show() {
        return new Promise<void>((resolve, reject) => {
            if (this.bg.scale == 1) {
                resolve()
                return
            }
            this.EventEmit(GameEvent.OpenBufer)
            this.bg.setScale(0)
            this.block.active = true
            this.outBack(this.bg, 1, resolve)

        })
    }
    async hide() {
        return new Promise<void>((resolve, reject) => {
            if (this.bg.scale == 0) {
                resolve()
                return
            }

            this.inBack(this.bg, 0, () => {
                this.EventEmit(GameEvent.CloseBufer)
                this.block.active = false
                resolve()
            })
        })
    }
}
