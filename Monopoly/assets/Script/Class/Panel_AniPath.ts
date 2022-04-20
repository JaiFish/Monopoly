import ComponentBase from "./ComponentBase";

export default class Panel_AniPath extends ComponentBase {
    public aPath: cc.Animation ;
    public TWPath:cc.Animation ;
    protected onLoad(): void {
        this.aPath= cc.find("PathAnimation",this.node).getComponent(cc.Animation);
        this.TWPath = cc.find("TaiwanPath",this.node).getComponent(cc.Animation);
    }
}