import ComponentBase from "../../Data/base/ComponentBase";
import Props_Feature from "./Props_Feature/Props_Feature";

export default class Panel_UI extends ComponentBase {
    props_Feature: Props_Feature;
    protected onLoad(): void {
        this.props_Feature = cc.find("Props_Feature", this.node).addComponent(Props_Feature)
        // this.defaultReset()
    }


}