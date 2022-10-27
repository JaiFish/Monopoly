import AssetMng from '../../Asset/AssetMng';
import ButtonMng from '../../Data/base/ButtonMng';
import ComponentBase from '../../Data/base/ComponentBase';
import MusciMng from '../../Data/base/MusciMng';
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

    Props5: cc.Sprite;
    Props11: cc.Sprite;
    Props15: cc.Sprite;

    info0: cc.Node
    info1: cc.Node
    protected onLoad(): void {
        this.btn_Start_Stop = cc.find("BG_Layout/Start_Stop", this.node).getComponent(cc.Button)
        this.sprtie_start_Stop = cc.find("BG_Layout/Start_Stop/icon", this.node).getComponent(cc.Sprite)
        this.skip = cc.find("BG_Layout/Skip", this.node).getComponent(cc.Button)
        this.resetView = cc.find("BG_Layout/ResetView", this.node).getComponent(cc.Button)

        this.info0 = cc.find('Info0', this.node)
        this.info1 = cc.find('Info1', this.node)

        this.Props5 = cc.find("BG_Layout/Props5/icon", this.node).getComponent(cc.Sprite)
        this.Props11 = cc.find("BG_Layout/Props11/icon", this.node).getComponent(cc.Sprite)
        this.Props15 = cc.find("BG_Layout/Props15/icon", this.node).getComponent(cc.Sprite)
        // console.log(this.Props5);


        // ButtonMng.addEvent(this.node, "Props_Feature", "eventClinetClickStart_Stop", this.btn_Start_Stop)
        // ButtonMng.addEvent(this.node, "Props_Feature", "eventSkip", this.skip)
        // ButtonMng.addEvent(this.node, "Props_Feature", "evetResetView", this.resetView)

        this.isGo = false
        this.info0.active = false
        this.info1.active = false
    }
    eventClinetClickStart_Stop(e: cc.Event, _customEventData: string) {
        this.EventEmit(GameEvent.SendCommand, Commamnd.ClinetClickStart_Stop)
    }
    eventSkip(e: cc.Event, _customEventData: string) {
        MusciMng.effectPlay("BtnClick")
        this.EventEmit(GameEvent.SendCommand, Commamnd.ManSkip)
    }
    evetResetView(e: cc.Event, _customEventData: string) {
        MusciMng.effectPlay("BtnClick")
        this.EventEmit(GameEvent.MoveToManCamera)
    }
    /**
     * 
     * @param isboolean isGO?
     */
    setStart_Stop(isboolean?: boolean) {
        // console.error(isboolean);
        this.isGo = isboolean == null || isboolean == undefined ? !this.isGo : isboolean
        let getBoolean = this.isGo ? "Stop" : "Start"//要相反，如果正在走就要顯示停止
        this.sprtie_start_Stop.node.x = this.isGo ? 0 : 4.5
        this.sprtie_start_Stop.spriteFrame = AssetMng.data_SprtieAtlas.get("Feature_" + getBoolean)
    }


    getProps(_num: number) {
        // console.log(AssetMng.data_SprtieAtlas.get("Props_" + _num));

        switch (_num) {
            case 5:
                this.Props5.spriteFrame = AssetMng.data_SprtieAtlas.get("Props_" + _num)
                break;
            case 11:
                this.Props11.spriteFrame = AssetMng.data_SprtieAtlas.get("Props_" + _num)
                break;
            case 15:
                this.Props15.spriteFrame = AssetMng.data_SprtieAtlas.get("Props_" + _num)
                break;
            default:
                break;
        }

    }

}