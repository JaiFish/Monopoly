import { Easing } from "../Enum/Easing";
import { GameEvent } from "../Enum/GameEvent";
import GameModel from "../GameModel";
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
    moveToStation(number) {
        let manePos = GameModel.convertOtherNodeSpaceAR(GameModel.mapItem.get(number).node, this.mineCamera.node)
        cc.tween(this.mineCamera.node)
            .to(this.moveSpeed, { position: manePos }, { easing: Easing.cubicOut })
            .start()
        cc.tween(this.mineCamera)
            .to(this.moveSpeed * 0.5, { zoomRatio: 1 }, { easing: Easing.cubicIn })
            .to(this.moveSpeed * 0.5, { zoomRatio: this.stationZoomRatio }, { easing: Easing.cubicOut })
            .start()

    }
    moveToManCamera(isShowAll: boolean = false) {
        let tween: cc.Tween;
        if (isShowAll)
            tween = cc.tween()
                .to(this.moveSpeed, { zoomRatio: this.manZoomRatio }, { easing: Easing.cubicOut })
        else
            tween = cc.tween()
                .to(this.moveSpeed * 0.5, { zoomRatio: 1 }, { easing: Easing.cubicIn })
                .to(this.moveSpeed * 0.5, { zoomRatio: this.manZoomRatio }, { easing: Easing.cubicOut })

        let manePos = GameModel.convertOtherNodeSpaceAR(this.manCamera.node, this.mineCamera.node)
        cc.tween(this.mineCamera.node)
            .to(this.moveSpeed, { position: manePos }, { easing: Easing.cubicOut })
            .start()
        cc.tween(this.mineCamera)
            .then(tween)
            .start()
    }


    showAllView() {
        cc.tween(this.mineCamera.node)
            .to(this.moveSpeed, { position: cc.Vec3.ZERO }, { easing: Easing.cubicOut })
            .start()
        cc.tween(this.mineCamera)
            .to(this.moveSpeed, { zoomRatio: this.showAllZoomRatio }, { easing: Easing.cubicOut })
            .start()
    }
}