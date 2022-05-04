import ComponentBase from '../../Data/base/ComponentBase';
import { GameEvent } from '../../Enum/GameEvent';
import { onClick } from '../../Enum/onClick';
import EventMng from '../../Event/EventMng';
export default class Skip extends ComponentBase {

    protected onLoad(): void {

        this.node.on(onClick.TouchEnd, () => {
                EventMng.emit(GameEvent.ManSkip)
        }, this)
    }
}