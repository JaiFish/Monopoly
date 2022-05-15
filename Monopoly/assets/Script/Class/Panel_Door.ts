import ButtonMng from '../Data/base/ButtonMng';
import ComponentBase from '../Data/base/ComponentBase';
import { Commamnd } from '../Enum/Commad';
import { GameEvent } from '../Enum/GameEvent';
const { ccclass, property } = cc._decorator;

@ccclass
export default class Panel_Door extends ComponentBase {
    left: cc.Node;
    right: cc.Node;
    distance: number = 365;//左右的最遠尺
    btn_Start: cc.Button;

    protected onLoad(): void {
        this.left = cc.find("left", this.node)
        this.right = cc.find("right", this.node)
        this.btn_Start = cc.find("Item_Btn", this.node).getComponent(cc.Button)
        this.initEvent(GameEvent.OpenDoor, this.openDoor)
        this.initEvent(GameEvent.CloseDoor, this.closeDoor)
        this.defaultReset()
    }
    protected start(): void {
        ButtonMng.addEvent(this.node, "Panel_Door", "sendMainInit", this.btn_Start)
    }

    reset() {
        this.left.x = 0
        this.right.x = 0
        this.show()
        // this.left.active = false
        // this.right.active = false
        // this.EventEmit(GameEvent.ShowAllView)
    }
    sendMainInit(e: cc.Event, _customEventData: string) {
        this.EventEmit(GameEvent.SendCommand, Commamnd.MainInit)
    }
    sendDoorAgainGame(e: cc.Event, _customEventData: string) {
        this.EventEmit(GameEvent.SendCommand, Commamnd.DoorAgainGame)
    }
    async openDoor() {
        return new Promise<void>((resolve, reject) => {
            this.left.active = true
            this.right.active = true
            cc.tween(this.left)
                .call(() => {
                    this.btn_Start.node.active = false
                    ButtonMng.reMoveEvent(this.btn_Start, "sendMainInit")
                })
                .by(2, { x: -this.distance })
                .start()
            cc.tween(this.right)
                .by(2, { x: this.distance })
                .call(resolve)
                .start()

        })

    }
    async closeDoor() {
        cc.tween(this.left)
            .by(1, { x: this.distance })
            .call(() => {
                this.btn_Start.node.active = true
                ButtonMng.addEvent(this.node, "Panel_Door", "sendDoorAgainGame", this.btn_Start)
            })
            .start()
        cc.tween(this.right)
            .by(1, { x: -this.distance })

            .start()
    }
    async scaleAction() {
        return new Promise<void>((resolve, reject) => {
            cc.tween(this.node)
                .to(1, { scale: 1.75 })
                .call(() => {
                    this.node.active = false
                    resolve()
                })
                .start()

        })
    }
}