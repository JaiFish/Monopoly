import ComponentBase from "./ComponentBase";

export default class CameraControll extends ComponentBase {
    manCamera: cc.Camera;
    mineCamera: cc.Camera;
    manZoomRatio: number = 3.6;
    showAllZoomRatio: number = 1;

    protected onLoad(): void {
        this.mineCamera.zoomRatio = 1
    }
}