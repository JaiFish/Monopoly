import ButtonMng from '../../Data/base/ButtonMng';
import ComponentBase from '../../Data/base/ComponentBase';
import { Commamnd } from '../../Enum/Commad';
import { Easing } from '../../Enum/Easing';
import { GameEvent } from '../../Enum/GameEvent';
const { ccclass, property } = cc._decorator;

@ccclass
export default class GetProps extends ComponentBase {
    btn: cc.Button;
    Props: cc.Sprite;
    info: cc.Label
    protected onLoad(): void {
        this.btn = cc.find("Item_Btn", this.node).getComponent(cc.Button)
        this.Props = cc.find("Props", this.node).getComponent(cc.Sprite)
        this.info = cc.find("Info", this.node).getComponent(cc.Label)
        this.defaultReset()
    }
    protected start(): void {
        ButtonMng.addEvent(this.node, "GetProps", "end", this.btn)
    }
    reset() {
        this.Props.spriteFrame = null;
        this.info.string = ""
    }
    setData(_info: string, _sprite: cc.SpriteFrame) {
        this.info.string = _info
        this.Props.spriteFrame = _sprite;
    }
    actionShow(callback?: Function): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.show()
            let setScale = 1
            this.node.opacity = 255
            this.node.setPosition(0, 0)
            if (this.Props.spriteFrame.name.split('_')[1] == "5")//如果是碼表要做特殊處理。因為圖片太大
                setScale = 0.651
            let action1 = cc.tween()
                .set({ scale: 0.1 })
                .to(0.5, { scale: setScale }, { easing: Easing.backOut })
            callback ?
                action1.call(callback.bind(this)).call(resolve).clone(this.Props.node).start() :
                action1.call(resolve).clone(this.Props.node).start();
        })
    }
    end(e: cc.Event, _customEventData: string) {
        this.EventEmit(GameEvent.SendCommand, Commamnd.EndGetProps)
    }
}