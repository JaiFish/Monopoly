import ComponentBase from '../../../Data/base/ComponentBase';
import { GameEvent } from '../../../Enum/GameEvent';
import EventMng from '../../../Event/EventMng';
export default class Props_Feature extends ComponentBase {
    isGo: boolean;
    start_Stop: cc.Button;
    skip: cc.Button
    protected onLoad(): void {
        this.start_Stop = cc.find("BG_Layout/Start_Stop", this.node).getComponent(cc.Button)
        this.skip = cc.find("BG_Layout/Skip", this.node).getComponent(cc.Button)

    }
    eventStart_Stop(e: cc.Event, _customEventData: string) {
        if (!this.isGo)
            EventMng.emit(GameEvent.ManGO);
        else
            EventMng.emit(GameEvent.ManWait)
        this.isGo = !this.isGo
    }
    eventSkip(e: cc.Event, _customEventData: string) {
        EventMng.emit(GameEvent.ManSkip)
    }
}