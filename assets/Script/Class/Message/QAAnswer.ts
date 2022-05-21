import AssetMng from '../../Asset/AssetMng';
import ButtonMng from '../../Data/base/ButtonMng';
import ComponentBase from '../../Data/base/ComponentBase';
import MusciMng from '../../Data/base/MusciMng';
import { Commamnd } from '../../Enum/Commad';
import { GameEvent } from '../../Enum/GameEvent';
const { ccclass, property } = cc._decorator;

@ccclass
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
        // this.item_Btn.addComponent(Btn)

    }
    protected start(): void {
        this.item_Btn.active = false
        this.defaultReset()
        this.reset()
    }
    reset(): void {
        this.bear.bearAnimation.stop()
        this.bear.bearSprite.spriteFrame = null
        // this.bear.answerSprtie.spriteFrame = null
        this.con_Btn.removeAllChildren();
        this.label_message.string = "";

    }
    trueAnswer() {
        this.label_message.string = "恭喜答對!!";

        let _node = cc.instantiate(this.item_Btn)
        this.con_Btn.addChild(_node, cc.macro.MAX_ZINDEX)
        cc.find("Label", _node).getComponent(cc.Label).string = "詳解"
        ButtonMng.addEvent(this.node, "QAAnswer", "whichGO", _node.getComponent(cc.Button), "0")
        _node.setPosition(0, 0)
        _node.active = true;


        _node = cc.instantiate(this.item_Btn)
        this.con_Btn.addChild(_node, cc.macro.MAX_ZINDEX)
        cc.find("Label", _node).getComponent(cc.Label).string = "繼續"
        ButtonMng.addEvent(this.node, "QAAnswer", "whichGO", _node.getComponent(cc.Button), "1")
        _node.setPosition(0, 0)
        _node.active = true;

        this.bear.bearAnimation.play("Bear_True")
        // this.bear.bearSprite.spriteFrame = AssetMng.data_SprtieAtlas.get("")
        // this.bear.answerSprtie.spriteFrame = AssetMng.data_SprtieAtlas.get("")
    }

    falseAnswer() {
        this.label_message.string = "答案錯誤!\n\r請再接再厲!!!";


        let _node = cc.instantiate(this.item_Btn)
        this.con_Btn.addChild(_node, cc.macro.MAX_ZINDEX)
        cc.find("Label", _node).getComponent(cc.Label).string = "回到題目"
        ButtonMng.addEvent(this.node, "QAAnswer", "whichGO", _node.getComponent(cc.Button), "2")
        _node.setPosition(0, 0)
        _node.active = true;

        this.bear.bearAnimation.play("Bear_False")
        // this.bear.bearSprite.spriteFrame = AssetMng.data_SprtieAtlas.get("")
        // this.bear.answerSprtie.spriteFrame = AssetMng.data_SprtieAtlas.get("")

    }
    async whichGO(e: cc.Event, _customEventData: string) {
        MusciMng.effectPlay("BtnClick")
        this.hide()
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
    bearAnimation: cc.Animation;
    bearSprite: cc.Sprite;
    answerSprtie: cc.Sprite;
    protected onLoad(): void {
        this.bearAnimation = this.node.getComponent(cc.Animation)
        this.bearSprite = this.node.getComponent(cc.Sprite)
        this.answerSprtie = cc.find("Hand/Icon", this.node).getComponent(cc.Sprite)
    }
}

class Btn extends ComponentBase {
    str: cc.Label;
    button: cc.Button;

    protected onLoad(): void {
        this.str = cc.find("Label", this.node).getComponent(cc.Label)
        this.button = this.node.getComponent(cc.Button)
        console.log("!!!!!!!!!?");
    }

}
