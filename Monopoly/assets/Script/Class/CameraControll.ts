import { Easing } from "../Enum/Easing";
import GameModel from "../GameModel";
import ComponentBase from "./ComponentBase";

export default class CameraControll extends ComponentBase {
    manCamera: cc.Camera;
    mineCamera: cc.Camera;
    manZoomRatio: number = 3;
    showAllZoomRatio: number = 0.36;

    protected onLoad(): void {
        this.mineCamera = this.node.getComponent(cc.Camera)
        this.manCamera = cc.find("Canvas/Panel_Man/nMan/manCamera").getComponent(cc.Camera)
        this.mineCamera.zoomRatio = 1
        this.mineCamera.node.setPosition(cc.Vec2.ZERO)
    }
    protected start(): void {
        this.showAllView()
        setTimeout(() => {
            this.moveToManCamera()
        }, 1000);

    }
    moveToManCamera() {
        let manePos = GameModel.convertOtherNodeSpaceAR(this.manCamera.node, this.mineCamera.node)
        cc.tween(this.mineCamera.node)
            .to(1, { position: manePos }, { easing: Easing.cubicOut })
            .start()
        cc.tween(this.mineCamera)
            .to(1, { zoomRatio: this.manZoomRatio }, { easing: Easing.cubicOut })
            .start()
    }
    showAllView() {
        cc.tween(this.mineCamera.node)
            .to(1, { position: cc.Vec3.ZERO }, { easing: Easing.cubicOut })
            .start()
        cc.tween(this.mineCamera)
            .to(1, { zoomRatio: this.showAllZoomRatio }, { easing: Easing.cubicOut })
            .start()
    }
}
