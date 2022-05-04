import AssetMng from '../Asset/AssetMng';
import ComponentBase from '../Data/base/ComponentBase';
import { GameEvent } from '../Enum/GameEvent';
import { GameState } from '../Enum/GameState';
enum BearState {
    Greee = "Greee",
    Red = "Red",
}
export default class Panel_Bear extends ComponentBase {
    sprite: cc.Sprite
    nowState: BearState;
    tempDT: number;
    targetDT: number = 3

    gameModle: GameModle;
    protected onLoad(): void {
        this.sprite = cc.find("sprite", this.node).getComponent(cc.Sprite)
        this.nowState = BearState.Red
        this.sprite.spriteFrame = AssetMng.Asset.get("餐旅熊-" + this.nowState)
        this.initEvent(GameEvent.BearSetModle, this.setModle)
    }
    setModle(_gameModle: GameModle) {
        this.gameModle = _gameModle
    }

    protected update(dt: number): void {
        if (this.gameModle.gameState == GameState.Start) {
            if (this.tempDT > this.targetDT)
                this.nowState == BearState.Red ? BearState.Greee : BearState.Red
            this.sprite.spriteFrame = AssetMng.Asset.get("餐旅熊-" + this.nowState)
            this.tempDT = 0
        }
    }
}