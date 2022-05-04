import ComponentBase from '../../Data/base/ComponentBase';
import Skip from './Skip';
import Start_Stop from './Start_Stop';
export default class extends ComponentBase {
    start_Stop: Start_Stop;
    skip: Skip
    protected onLoad(): void {
        this.start_Stop = cc.find("BG_Layout/Start_Stop", this.node).addComponent(Start_Stop)
        this.skip = cc.find("BG_Layout/Skip", this.node).addComponent(Skip)
    }
}