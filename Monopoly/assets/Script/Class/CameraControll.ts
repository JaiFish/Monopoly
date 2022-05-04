import { Easing } from "../Enum/Easing";
import { GameEvent } from "../Enum/GameEvent";
import ComponentBase from "../Data/base/ComponentBase";
export default class CameraControll extends ComponentBase {
    manCamera: cc.Camera;
    mineCamera: cc.Camera;
    manZoomRatio: number = 3;
    showAllZoomRatio: number = 0.36;
    stationZoomRatio: number = 3;

    moveSpeed: number = 1;

    protected onLoad(): void {
        this.mineCamera = this.node.getComponent(cc.Camera)
        this.manCamera = cc.find("Canvas/Panel_Man/nMan/manCamera").getComponent(cc.Camera)
        this.mineCamera.zoomRatio = 1
        this.mineCamera.node.setPosition(cc.Vec2.ZERO)
        this.initEvent(GameEvent.MoveToStation, this.moveToStation);
        this.initEvent(GameEvent.MoveToManCamera, this.moveToManCamera);
        this.initEvent(GameEvent.ShowAllView, this.showAllView);
    }
    protected start(): void {
        // this.showAllView()

    }
    activeManCamera(isboolean: boolean) {
        this.manCamera.node.active = isboolean
    }
    activeMineCamera(isboolean: boolean) {
        this.mineCamera.node.active = isboolean
    }
    moveToStation(target: cc.Node, model: GameModle) {
        let manePos = model.convertOtherNodeSpaceAR(target, this.mineCamera.node)
        cc.tween(this.mineCamera.node)
            .to(this.moveSpeed, { position: manePos }, { easing: Easing.cubicOut })
            .start()
        cc.tween(this.mineCamera)
            .to(this.moveSpeed * 0.5, { zoomRatio: 1 }, { easing: Easing.cubicIn })
            .to(this.moveSpeed * 0.5, { zoomRatio: this.stationZoomRatio }, { easing: Easing.cubicOut })
            .start()

    }
    async moveToManCamera(model: GameModle, isJump: boolean = true) {
        return new Promise<void>((resolve, reject) => {
            let tween: cc.Tween;
            if (!isJump)
                tween = cc.tween()
                    .to(this.moveSpeed, { zoomRatio: this.manZoomRatio })
            else
                tween = cc.tween()
                    .to(this.moveSpeed * 0.5, { zoomRatio: 1 }, { easing: Easing.cubicIn })
                    .to(this.moveSpeed * 0.5, { zoomRatio: this.manZoomRatio }, { easing: Easing.cubicOut })

            let manePos = model.convertOtherNodeSpaceAR(this.manCamera.node, this.mineCamera.node)
            cc.tween(this.mineCamera.node)
                .to(this.moveSpeed, { position: manePos }, { easing: Easing.cubicOut })
                .call(resolve)
                .start()
            cc.tween(this.mineCamera)
                .then(tween)
                .start()
        })

    }


    async showAllView() {
        return new Promise<void>((resolve, reject) => {
            cc.tween(this.mineCamera.node)
                .to(this.moveSpeed, { position: cc.Vec3.ZERO }, { easing: Easing.cubicOut })
                .start()
            cc.tween(this.mineCamera)
                .to(this.moveSpeed, { zoomRatio: this.showAllZoomRatio }, { easing: Easing.cubicOut })
                .call(resolve)
                .start()
        })
    }
}
