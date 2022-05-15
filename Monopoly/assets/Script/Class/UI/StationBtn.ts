import AssetMng from '../../Asset/AssetMng';
import ButtonMng from '../../Data/base/ButtonMng';
import ComponentBase from '../../Data/base/ComponentBase';
import { Commamnd } from '../../Enum/Commad';
import { GameEvent } from '../../Enum/GameEvent';
const { ccclass, property } = cc._decorator;

@ccclass
export default class StationBtn extends ComponentBase {
    sprite: cc.Sprite
    btn: cc.Button
    stationType: number
    isGet: boolean;

    protected onLoad(): void {
        this.sprite = cc.find("icon", this.node).getComponent(cc.Sprite)
        this.btn = this.node.getComponent(cc.Button);
        this.node.setPosition(0, 0)
    }

    chengeStation() {
        this.isGet = true;
        this.sprite.spriteFrame = AssetMng.data_SprtieAtlas.get("Station_" + this.stationType)
    }
    async setEvent(_num: number) {
        await AssetMng.checkState()
        this.sprite.spriteFrame = AssetMng.data_SprtieAtlas.get("UIBtn_Statoin_Gary_" + _num)
        this.stationType = _num
        ButtonMng.addEvent(this.node, "StationBtn", "eventStation", this.btn)

    }
    eventStation() {
        if (!this.isGet) return
        this.EventEmit(GameEvent.SendCommand, Commamnd.MoveTarget, this.stationType)
    }
}