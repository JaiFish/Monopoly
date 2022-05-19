import ComponentBase from "../../Data/base/ComponentBase";
import { Commamnd } from "../../Enum/Commad";
import { GameEvent } from "../../Enum/GameEvent";
import { onClick } from "../../Enum/onClick";
import GameModle from "../../GameModle";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Choose_Ticket extends ComponentBase {
    btn_Blue: cc.Node;
    btn_Red: cc.Node;
    btn_Green: cc.Node;
    protected onLoad(): void {
        this.btn_Blue = cc.find("Layout/Blue/btn_Check", this.node)
        this.btn_Red = cc.find("Layout/Red/btn_Check", this.node)
        this.btn_Green = cc.find("Layout/Green/btn_Check", this.node)
        this.btn_Blue.on(onClick.TouchEnd, this.onBtnFuntion, this)
        this.btn_Green.on(onClick.TouchEnd, this.onBtnFuntion, this)
        this.btn_Red.on(onClick.TouchEnd, this.onBtnFuntion, this)

    }
    protected start(): void {
        this.node.opacity = 0
        this.hide()
    }

    onBtnFuntion(e: cc.Event) {
        let _node: cc.Node = e.target
        switch (_node.parent.name) {
            case "Blue":
                GameModle.playData.level = 0
                break;
            case "Red":
                GameModle.playData.level = 1
                break;
            case "Green":
                GameModle.playData.level = 2
                break;
        }
        this.EventEmit(GameEvent.SendCommand, Commamnd.EndChooseTicket)
        // this.actionHide(() => {
        //     this.EventEmit(GameEvent.SendCommand, Commamnd.EndChooseTicket)
        // });
    }

}
class btn {
    level: number;
    node: cc.Node;
    constructor(_node: cc.Node, _level: number) {
        this.level = _level
        this.node = _node
        _node.on(onClick.TouchEnd, () => {
            GameModle.playData.level = 2
        })
    }

}