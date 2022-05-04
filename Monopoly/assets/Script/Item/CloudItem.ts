import ComponentBase from '../Data/base/ComponentBase';
import { GameEvent } from '../Enum/GameEvent';
export default class CloudItem extends ComponentBase {

    cloudNumber: number;
    Speed: number;
    direction: number;
    targetX: number;
    isCanGO: boolean
    protected onLoad(): void {
        this.node.opacity = 0
    }
    protected start(): void {
        cc.tween(this.node)
            .to(1.5, { opacity: 255 })
            .start()
    }
    protected update(dt: number): void {
        if (this.isCanGO) {
            this.node.x += (dt * this.Speed) * this.direction;
            if (this.direction > 0) {
                if (this.node.x > this.targetX)
                    this.EventEmit(GameEvent.DeletCloud, this.cloudNumber)
            }
            else {
                if (this.node.x < this.targetX)
                    this.EventEmit(GameEvent.DeletCloud, this.cloudNumber)
            }

        }

    }
}