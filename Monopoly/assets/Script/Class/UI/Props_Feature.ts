import AssetMng from '../../Asset/AssetMng';
import ButtonMng from '../../Data/base/ButtonMng';
import ComponentBase from '../../Data/base/ComponentBase';
import { GameEvent } from '../../Enum/GameEvent';
export default class Props_Feature extends ComponentBase {
    isGo: boolean;
    start_Stop: cc.Button;
    skip: cc.Button
    resetView: cc.Button

    Props6: cc.Sprite;
    Props11: cc.Sprite;
    Props15: cc.Sprite;
    protected onLoad(): void {
        this.start_Stop = cc.find("BG_Layout/Start_Stop", this.node).getComponent(cc.Button)
        this.skip = cc.find("BG_Layout/Skip", this.node).getComponent(cc.Button)
        this.resetView = cc.find("BG_Layout/ResetView", this.node).getComponent(cc.Button)

        ButtonMng.addEvent(this.node, "Props_Feature", "eventStart_Stop", this.start_Stop)
        ButtonMng.addEvent(this.node, "Props_Feature", "eventSkip", this.skip)
        ButtonMng.addEvent(this.node, "Props_Feature", "evetResetView", this.resetView)
    }
    eventStart_Stop(e: cc.Event, _customEventData: string) {
        if (!this.isGo)
            this.EventEmit(GameEvent.ManGO);
        else
            this.EventEmit(GameEvent.ManWait)
        this.isGo = !this.isGo
    }
    eventSkip(e: cc.Event, _customEventData: string) {
        this.EventEmit(GameEvent.ManSkip)
    }
    evetResetView(e: cc.Event, _customEventData: string) {
        this.EventEmit(GameEvent.MoveToManCamera)
    }

    getProps(_num: number) {
        switch (_num) {
            case 6:
                this.Props6.spriteFrame = AssetMng.Asset.get("")
                break
            case 11:
                this.Props6.spriteFrame = AssetMng.Asset.get("")
                break
            case 15:
                this.Props6.spriteFrame = AssetMng.Asset.get("")
                break
        }

    }
}