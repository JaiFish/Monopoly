import ComponentBase from '../Data/base/ComponentBase';
export default class extends ComponentBase {

    label: cc.Label
    protected onLoad(): void {
        this.label = cc.find("label",this.node).getComponent(cc.Label)
    }
    setVersion(str:string)
    {
        this.label.string = str
    }
}