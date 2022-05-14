import AssetMng from '../../Asset/AssetMng';
import ButtonMng from '../../Data/base/ButtonMng';
import ComponentBase from '../../Data/base/ComponentBase';
import { Commamnd } from '../../Enum/Commad';
import { GameEvent } from '../../Enum/GameEvent';
export default class QAAnswer extends ComponentBase {
    item_Btn: cc.Node;
    bear: Bear;
    label_message: cc.Label;

    con_Btn: cc.Node;

    protected onLoad(): void {
        this.bear = cc.find("Bear", this.node).addComponent(Bear);
        this.label_message = cc.find("Message/Label", this.node).getComponent(cc.Label)
        this.con_Btn = cc.find("Con_Btn", this.node)
        this.item_Btn = cc.find("Item_Btn", this.node)
        this.item_Btn.addComponent(Btn)
    }
    protected start(): void {
        this.defaultReset()
        this.reset()
    }
    reset(): void {
        this.bear.bearSprite.spriteFrame = null
        this.bear.answerSprtie.spriteFrame = null
        this.con_Btn.removeAllChildren();
        this.label_message.string = "";
    }
    trueAnswer() {
        this.label_message.string = "恭喜答對!!";

        let _node = cc.instantiate(this.item_Btn)
        let btnClass = _node.getComponent(Btn)
        btnClass.str.string = "詳解"
        ButtonMng.addEvent(this.node, "QAAnswer", "whichGO", btnClass.button, "0")
        this.con_Btn.addChild(_node, cc.macro.MAX_ZINDEX)

        _node = cc.instantiate(this.item_Btn)
        btnClass = _node.getComponent(Btn)
        btnClass.str.string = "繼續"
        ButtonMng.addEvent(this.node, "QAAnswer", "whichGO", btnClass.button, "1")
        this.con_Btn.addChild(_node, cc.macro.MAX_ZINDEX)

        this.bear.bearSprite.spriteFrame = AssetMng.Asset.get("")
        this.bear.answerSprtie.spriteFrame = AssetMng.Asset.get("")
    }

    async falseAnswer() {
        return new Promise<void>((resolve, reject) => {
            this.label_message.string = "答案錯誤!\n\r請再接再厲!!!";

            let _node = cc.instantiate(this.item_Btn)
            let btnClass = _node.getComponent(Btn)
            btnClass.str.string = "回到題目"
            ButtonMng.addEvent(this.node, "QAAnswer", "whichGO", btnClass.button, "2")
            this.con_Btn.addChild(_node, cc.macro.MAX_ZINDEX)

            this.bear.bearSprite.spriteFrame = AssetMng.Asset.get("")
            this.bear.answerSprtie.spriteFrame = AssetMng.Asset.get("")
        })

    }
    async whichGO(e: cc.Event, _customEventData: string) {
        await this.actionHide()
        switch (Number(_customEventData)) {
            case 0://詳解
                this.EventEmit(GameEvent.SendCommand, Commamnd.ShowExplain)
                break
            case 1://下一流程(關閉畫面後回到火車畫面)
            this.EventEmit(GameEvent.SendCommand, Commamnd.EndAnswer)
                break
            case 2://答錯回到上一個畫面
            this.EventEmit(GameEvent.SendCommand, Commamnd.ShowAgainQA)
                break
        }
    }

}

class Bear extends ComponentBase {
    bearSprite: cc.Sprite;
    answerSprtie: cc.Sprite;
    protected onLoad(): void {
            this.bearSprite =this.node.getComponent(cc.Sprite)
            this.answerSprtie = cc.find("Hand/Icon",this.node).getComponent(cc.Sprite)
    }
}

class Btn extends ComponentBase {
    str: cc.Label;
    button: cc.Button;

    protected onLoad(): void {
        this.str = cc.find("Label", this.node).getComponent(cc.Label)
        this.button = this.node.getComponent(cc.Button)
    }

}
