import ComponentBase from "../../Data/base/ComponentBase";
import Props_Feature from "./Props_Feature";
import Setting from "./Setting";
import Train from "./Train";

export default class Panel_UI extends ComponentBase {
    props_Feature: Props_Feature;
    train:Train
    setting:Setting
    protected onLoad(): void {
        this.props_Feature = cc.find("Props_Feature", this.node).addComponent(Props_Feature)
        this.train = cc.find("Train", this.node).addComponent(Train)
        this.setting = cc.find("Setting", this.node).addComponent(Setting)
        
        // this.defaultReset()
    }


}