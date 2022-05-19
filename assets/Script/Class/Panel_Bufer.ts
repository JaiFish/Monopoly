import ComponentBase from '../Data/base/ComponentBase';
import { GameEvent } from '../Enum/GameEvent';
import BuferClass from '../ShaderCamera/BuferClass';
export default class Panel_Bufer extends ComponentBase {
    bufer: cc.Node
    protected onLoad(): void {
        this.bufer = cc.find("Bufer", this.node)
        this.initEvent(GameEvent.OpenBufer, this.openRender)
        this.initEvent(GameEvent.CloseBufer, this.closeRender)
        this.node.opacity = 255
    }
    openRender() {
        console.log("HIHIHIHI");

        this.bufer.active = true

        this.EventEmit(GameEvent.StopCloud)
    }
    closeRender() {
        this.bufer.active = false

        this.EventEmit(GameEvent.StartCloud)
    }
}