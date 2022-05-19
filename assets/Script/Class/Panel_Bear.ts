import AssetMng from '../Asset/AssetMng';
import ComponentBase from '../Data/base/ComponentBase';
import { GameEvent } from '../Enum/GameEvent';
import { GameState } from '../Enum/GameState';
import GameModle from '../GameModle';
enum BearState {
    Green = "Green",
    Red = "Red",
}
export default class Panel_Bear extends ComponentBase {
    sprite: cc.Sprite
    nowState: BearState;
    tempDT: number = 0;
    targetDT: number = 3

    protected onLoad(): void {
        this.sprite = cc.find("sprite", this.node).getComponent(cc.Sprite)

    }
    init(): void {
        this.nowState = BearState.Red
        this.sprite.spriteFrame = AssetMng.data_SprtieAtlas.get("Bear_" + this.nowState)
        console.log(AssetMng.data_SprtieAtlas.get("Bear_" + this.nowState));
    }
    protected update(dt: number): void {
        if (GameModle.gameState == GameState.Start) {
            this.tempDT += dt
            if (this.tempDT > this.targetDT) {
                this.nowState = this.nowState == BearState.Red ? BearState.Green : BearState.Red
                this.sprite.spriteFrame = AssetMng.data_SprtieAtlas.get("Bear_" + this.nowState)
                this.tempDT = 0
            }
        }
    }
}