import ComponentBase from '../Data/base/ComponentBase';
export default class Panel_Loading extends ComponentBase {
    point: cc.Label
    PointAction: any
    protected onLoad(): void {
        this.point = cc.find("Message/Layout/Point", this.node).getComponent(cc.Label)
        this.point.string = ""
        this.defaultReset()
    }
    protected start(): void {
        this.startLoading()
    }
    startLoading() {
        this.PointAction = setInterval(() => {
            this.point.string = this.point.string + "."
            if (this.point.string.length > 3)
                this.point.string = ""
        }, 1000);
    }
    Actionhide(): void {
        cc.tween(this.node)
            .to(0.3, { opacity: 0 })
            .call(() => {
                clearInterval(this.PointAction)
                this.hide()

                // this.node.destroy()
            })
            .start()
    }
}