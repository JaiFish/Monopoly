import ComponentBase from "../Class/ComponentBase";
import { StationType } from "../Enum/StationType";

export default class MapItem extends ComponentBase {
    _myNumber: number;
    _myType: StationType;

    
    setSprite(_spriteframe: cc.SpriteFrame) {
        this.node.getComponent(cc.Sprite).spriteFrame = _spriteframe;
    }

    public set myNumber(v: number) {
        this._myNumber = v;
    }

    public get myNumber(): number {
        return this._myNumber
    }

    public set myType(v: StationType) {
        this._myType = v;
    }

    public get myType(): StationType {
        return this._myType
    }

}

