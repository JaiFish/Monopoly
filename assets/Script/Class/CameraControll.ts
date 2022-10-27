import { Easing } from "../Enum/Easing";
import { GameEvent } from "../Enum/GameEvent";
import ComponentBase from "../Data/base/ComponentBase";
import GameModle from "../GameModle";
import { CameraState } from "../Enum/CameraState";

export default class CameraControll extends ComponentBase {
    manCamera: cc.Camera;
    mineCamera: cc.Camera;
    manZoomRatio: number = 1.77;
    showAllZoomRatio: number = 0.36;
    stationZoomRatio: number = 3;

    moveSpeed: number = 1;

    cameraState: CameraState;

    isMoveIng: boolean;

    protected onLoad(): void {
        this.mineCamera = this.node.getComponent(cc.Camera)
        this.manCamera = cc.find("Canvas/Panel_Man/nMan/manCamera").getComponent(cc.Camera)
        this.mineCamera.zoomRatio = 1
        this.manCamera.zoomRatio = this.manZoomRatio
        this.mineCamera.node.setPosition(cc.Vec2.ZERO)
        this.initEvent(GameEvent.MoveToStation, this.moveToStation);
        this.initEvent(GameEvent.MoveToManCamera, this.moveToManCamera);
        this.initEvent(GameEvent.ShowAllView, this.showAllView);
    }
    protected start(): void {
        this.cameraState = CameraState.Mine
        // this.showAllView()

    }
    activeManCamera(isboolean: boolean) {
        this.manCamera.node.active = isboolean
    }
    activeMineCamera(isboolean: boolean) {
        this.mineCamera.node.active = isboolean
    }
    async moveToStation(target: cc.Node) {
        return new Promise<void>((resolve, reject) => {
            if (this.cameraState == CameraState.Men) {
                this.asyncMine()
                this.cameraState = CameraState.Mine
            }
            // if (!isJump)
            //     tween = cc.tween()
            //         .to(this.moveSpeed, { zoomRatio: this.manZoomRatio })
            // else
            //     tween = cc.tween()
            //         .to(this.moveSpeed * 0.5, { zoomRatio: 1 }, { easing: Easing.cubicIn })
            //         .to(this.moveSpeed * 0.5, { zoomRatio: this.manZoomRatio }, { easing: Easing.cubicOut })
            let manePos = GameModle.convertOtherNodeSpaceAR(target, this.mineCamera.node)
            cc.tween(this.mineCamera.node)
                .to(this.moveSpeed, { position: manePos }, { easing: Easing.cubicOut })
                .call(resolve)
                .start()
            cc.tween(this.mineCamera)
                .to(this.moveSpeed, { zoomRatio: this.manZoomRatio })
                // .to(this.moveSpeed * 0.5, { zoomRatio: 1 }, { easing: Easing.cubicIn })
                // .to(this.moveSpeed * 0.5, { zoomRatio: this.stationZoomRatio }, { easing: Easing.cubicOut })
                .start()
        })
    }
    asyncMine() {
        let manePos = GameModle.convertOtherNodeSpaceAR(this.manCamera.node, this.mineCamera.node)
        this.mineCamera.node.position = manePos
    }
    async moveToManCamera(_speed: number = this.moveSpeed, isJump: boolean = true) {
        return new Promise<void>((resolve, reject) => {
            if (this.isMoveIng) return reject()
            this.isMoveIng = true
            //有問題所以暫時不用
            // if (!isJump)
            //     tween = cc.tween()
            //         .to(this.moveSpeed, { zoomRatio: this.manZoomRatio })
            // else
            //     tween = cc.tween()
            //         .to(this.moveSpeed * 0.5, { zoomRatio: 1 }, { easing: Easing.cubicIn })
            //         .to(this.moveSpeed * 0.5, { zoomRatio: this.manZoomRatio }, { easing: Easing.cubicOut })

            let manePos = GameModle.convertOtherNodeSpaceAR(this.manCamera.node, this.mineCamera.node)
            cc.tween(this.mineCamera.node)
                .to(_speed, { position: manePos })
                .call(() => {
                    this.cameraState = CameraState.Men
                    this.activeManCamera(true);
                    this.activeMineCamera(false);
                    resolve()
                    this.isMoveIng = false
                })
                .start()
            cc.tween(this.mineCamera)
                .to(_speed, { zoomRatio: this.manZoomRatio })
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
