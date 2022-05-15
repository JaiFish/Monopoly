import AssetMng from '../../Asset/AssetMng';
import ButtonMng from '../../Data/base/ButtonMng';
import ComponentBase from '../../Data/base/ComponentBase';
import { Commamnd } from '../../Enum/Commad';
import { GameEvent } from '../../Enum/GameEvent';
const { ccclass, property } = cc._decorator;

@ccclass
export default class Props_Feature extends ComponentBase {
    isGo: boolean = false;
    btn_Start_Stop: cc.Button;
    sprtie_start_Stop: cc.Sprite
    skip: cc.Button
    resetView: cc.Button

    Props6: cc.Sprite;
    Props11: cc.Sprite;
    Props15: cc.Sprite;
    protected onLoad(): void {
        this.btn_Start_Stop = cc.find("BG_Layout/Start_Stop", this.node).getComponent(cc.Button)
        this.sprtie_start_Stop = cc.find("BG_Layout/Start_Stop/icon", this.node).getComponent(cc.Sprite)
        this.skip = cc.find("BG_Layout/Skip", this.node).getComponent(cc.Button)
        this.resetView = cc.find("BG_Layout/ResetView", this.node).getComponent(cc.Button)

        ButtonMng.addEvent(this.node, "Props_Feature", "eventStart_Stop", this.btn_Start_Stop)
        ButtonMng.addEvent(this.node, "Props_Feature", "eventSkip", this.skip)
        ButtonMng.addEvent(this.node, "Props_Feature", "evetResetView", this.resetView)
    }
    eventStart_Stop(e: cc.Event, _customEventData: string) {
        if (!this.isGo)
            this.EventEmit(GameEvent.SendCommand, Commamnd.MenGO);
        else
            this.EventEmit(GameEvent.SendCommand, Commamnd.ManWait)
        this.setStart_Stop()
    }
    eventSkip(e: cc.Event, _customEventData: string) {
        this.EventEmit(GameEvent.ManSkip)
    }
    evetResetView(e: cc.Event, _customEventData: string) {
        this.EventEmit(GameEvent.MoveToManCamera)
    }
    /**
     * 
     * @param isboolean isGO?
     */
    setStart_Stop(isboolean?: boolean) {
        this.isGo = isboolean ? isboolean : !this.isGo
        let getBoolean = this.isGo ? "Stop" : "Start"//要相反，如果正在走就要顯示停止
        this.sprtie_start_Stop.spriteFrame = AssetMng.data_SprtieAtlas.get("Feature_" + getBoolean)
    }


    getProps(_num: number) {
        switch (_num) {
            case 6:
                this.Props6.spriteFrame = AssetMng.data_SprtieAtlas.get("GetProps_" + _num)
                break;
            case 11:
                this.Props11.spriteFrame = AssetMng.data_SprtieAtlas.get("GetProps_" + _num)
                break;
            case 15:
                this.Props15.spriteFrame = AssetMng.data_SprtieAtlas.get("GetProps_" + _num)
                break;
            default:
                break;
        }

    }
}