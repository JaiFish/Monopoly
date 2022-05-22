import ButtonMng from "../../Data/base/ButtonMng";
import ComponentBase from "../../Data/base/ComponentBase";
import MusciMng from "../../Data/base/MusciMng";
import { Commamnd } from "../../Enum/Commad";
import { GameEvent } from "../../Enum/GameEvent";
import Props_Feature from "./Props_Feature";
import Setting from "./Setting";
import Station from "./Station";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Panel_UI extends ComponentBase {
    bg: cc.Node;
    block: cc.Node
    props_Feature: Props_Feature;
    station: Station
    setting: Setting
    protected onLoad(): void {

        this.node.opacity = 255
        this.bg = cc.find("BG", this.node)
        this.block = cc.find("Block", this.node)
        this.props_Feature = cc.find("Props_Feature", this.node).addComponent(Props_Feature)
        this.station = cc.find("Station", this.node).addComponent(Station)
        this.setting = cc.find("Setting", this.node).addComponent(Setting)

        this.initEvent(GameEvent.UIReset, this.reset)
        this.reset()
    }
    protected start(): void {
//Teach
ButtonMng.addEvent(this.node, "Panel_UI", "eventControll", cc.find("Btn_Close", this.props_Feature.info0).getComponent(cc.Button), "0")
ButtonMng.addEvent(this.node, "Panel_UI", "eventControll", cc.find("Btn_Close", this.props_Feature.info1).getComponent(cc.Button), "1")
ButtonMng.addEvent(this.node, "Panel_UI", "eventControll", cc.find("Btn_Close", this.station.info2).getComponent(cc.Button), "2")
ButtonMng.addEvent(this.node, "Panel_UI", "eventControll", cc.find("Btn_Close", this.setting.info3).getComponent(cc.Button), "3")
    }
    async reset() {
        await this.checkInit()
        this.defaultReset()
        this.station.scroll.node.active = true
        this.station.isOpen = this.station.scroll.node.active
        this.station.icon.angle = 0
        this.setting.scroll.node.active = false
        this.setting.isOpen = this.setting.scroll.node.active
        this.bg.active = false
        this.block.active = false
    }
    setBtnEvent() {
        //Statino
        ButtonMng.addEvent(this.station.node, "Station", "eventControllOpen", this.station.btn_ControllOpen)
        //Setting
        ButtonMng.addEvent(this.setting.node, "Setting", "eventControllOpen", this.setting.btn_ControllOpen)
        //Props_Feature
        ButtonMng.addEvent(this.props_Feature.node, "Props_Feature", "eventClinetClickStart_Stop", this.props_Feature.btn_Start_Stop)
        ButtonMng.addEvent(this.props_Feature.node, "Props_Feature", "eventSkip", this.props_Feature.skip)
        ButtonMng.addEvent(this.props_Feature.node, "Props_Feature", "evetResetView", this.props_Feature.resetView)
        
    }
    async checkInit() {
        return new Promise<void>((resolve, reject) => {
            let repet = setInterval(() => {
                let check = this.station.checkInit()
                if (check) {
                    clearInterval(repet);
                    resolve();
                }
            }, 500)
        })
    }
    openTeaching() {
        this.bg.setSiblingIndex(cc.macro.MAX_ZINDEX)
        this.props_Feature.info0.active = true
        this.bg.active = true
        this.block.active = true
        this.props_Feature.node.setSiblingIndex(cc.macro.MAX_ZINDEX)
    }
    eventControll(e: cc.Event, _customEventData: string) {
        MusciMng.effectPlay("BtnClick")
        switch (Number(_customEventData)) {
            case 0:

                this.props_Feature.info0.active = false
                this.props_Feature.info1.active = true
                break;
            case 1:
                this.station.node.setSiblingIndex(cc.macro.MAX_ZINDEX)
                this.props_Feature.node.setSiblingIndex(cc.macro.MIN_ZINDEX + 1)
                this.props_Feature.info1.active = false
                this.station.info2.active = true
                break;
            case 2:
                this.setting.node.setSiblingIndex(cc.macro.MAX_ZINDEX)
                this.station.node.setSiblingIndex(cc.macro.MIN_ZINDEX + 1)
                this.station.info2.active = false
                this.setting.info3.active = true
                break;
            case 3:
                this.setting.info3.active = false
                this.bg.active = false
                this.block.active = false
                this.EventEmit(GameEvent.SendCommand, Commamnd.EndTeaching)
                break;

        }
    }
}