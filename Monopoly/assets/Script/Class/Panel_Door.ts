import ComponentBase from '../Data/base/ComponentBase';
import { GameEvent } from '../Enum/GameEvent';
export default class Panel_Door extends ComponentBase {
    left: cc.Node;
    right: cc.Node;
    distance: number = 365;//左右的最遠尺

    protected onLoad(): void {
        this.left = cc.find("left", this.node)
        this.right = cc.find("right", this.node)
        this.initEvent(GameEvent.OpenDoor, this.openDoor)
        this.initEvent(GameEvent.CloseDoor, this.closeDoor)
    }
    async reset(): Promise<void> {
        this.left.x = 0
        this.right.x = 0
        await this.openDoor()
        await this.scaleAction()

        // this.left.active = false
        // this.right.active = false
        // this.EventEmit(GameEvent.ShowAllView)
    }
    async openDoor() {
        return new Promise<void>((resolve, reject) => {
            this.left.active = true
            this.right.active = true
            cc.tween(this.left)
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