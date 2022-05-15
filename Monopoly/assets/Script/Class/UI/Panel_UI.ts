import ComponentBase from "../../Data/base/ComponentBase";
import { GameEvent } from "../../Enum/GameEvent";
import Props_Feature from "./Props_Feature";
import Setting from "./Setting";
import Station from "./Station";

export default class Panel_UI extends ComponentBase {
    props_Feature: Props_Feature;
    station: Station
    setting: Setting
    protected onLoad(): void {
        this.props_Feature = cc.find("Props_Feature", this.node).addComponent(Props_Feature)
        this.station = cc.find("Station", this.node).addComponent(Station)
        this.setting = cc.find("Setting", this.node).addComponent(Setting)

        this.initEvent(GameEvent.UIReset, this.reset)
        this.reset()
    }
    async reset() {
        await this.checkInit()
        this.defaultReset()
        this.station.scroll.node.active = false
        this.station.isOpen = this.station.scroll.node.active
        this.setting.scroll.node.active = false
        this.setting.isOpen = this.setting.scroll.node.active
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

}