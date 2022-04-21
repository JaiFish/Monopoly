import ComponentBase from '../Data/base/ComponentBase';
import { GameEvent } from '../Enum/GameEvent';
export default class Panel_Door extends ComponentBase {
    left: cc.Node;
    right: cc.Node;
    distance: number = 2048;//左右的最遠尺

    protected onLoad(): void {
        this.left = cc.find("left", this.node)
        this.right = cc.find("right", this.node)
        this.initEvent(GameEvent.OpenDoor, this.openDoor)
        this.initEvent(GameEvent.CloseDoor, this.closeDoor)

        this.left.active = false
        this.right.active = false
    }
    openDoor() {

        this.left.active = true
        this.right.active = true
        cc.tween(this.left)
            .by(1, { x: -this.distance })
            .start()
        cc.tween(this.right)
            .by(1, { x: this.distance })
            .start()
    }
    closeDoor() {
        cc.tween(this.left)
            .by(1, { x: this.distance })
            .start()
        cc.tween(this.right)
            .by(1, { x: -this.distance })
            .start()
    }
}