import ComponentBase from '../Data/base/ComponentBase';
import { Easing } from '../Enum/Easing';
export default class MapSprite extends ComponentBase {
    isGet: boolean;
    _mySprite: cc.Sprite;
    public set mySprite(v: cc.Sprite) {
        this._mySprite = v;
    }

    public get mySprite(): cc.Sprite {
        return this._mySprite
    }
    protected onLoad(): void {
        this.mySprite = this.node.getComponent(cc.Sprite)
    }

    getAction() {
        this.node.setScale(0)
        this.isGet = true;
        cc.tween(this.node)
            .to(1, { scale: 1 }, { easing: Easing.backOut })
            .start()
    }

}