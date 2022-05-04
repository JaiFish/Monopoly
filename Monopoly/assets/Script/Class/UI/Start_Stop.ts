import ComponentBase from '../../Data/base/ComponentBase';
import { GameEvent } from '../../Enum/GameEvent';
import { onClick } from '../../Enum/onClick';
import EventMng from '../../Event/EventMng';
export default class Start_Stop extends ComponentBase {
    isGo: boolean;
    protected onLoad(): void {
        this.isGo = false

        this.node.on(onClick.TouchEnd, () => {
            if (!this.isGo)
                EventMng.emit(GameEvent.ManGO);
            else
                EventMng.emit(GameEvent.ManWait)

            this.isGo = !this.isGo
        }, this)
    }

}