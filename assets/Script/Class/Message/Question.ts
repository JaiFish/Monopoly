import ButtonMng from "../../Data/base/ButtonMng";
import ComponentBase from "../../Data/base/ComponentBase";
import { Commamnd } from "../../Enum/Commad";
import { GameEvent } from "../../Enum/GameEvent";
import GameModle from "../../GameModle";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Question extends ComponentBase {
    title: cc.Label;
    info_Text: cc.Label;
    info_Choose: cc.Label;
    info_Normal_5: cc.Node
    info_Normal_9: cc.Node
    item_Btn: cc.Node;


    scrollView: cc.ScrollView

    content_Btn: cc.Node;
    protected onLoad(): void {
        this.title = cc.find("Title", this.node).getComponent(cc.Label);
        this.item_Btn = cc.find("item_Btn", this.node)

        this.scrollView = cc.find("scroll_Info", this.node).getComponent(cc.ScrollView);
        this.info_Text = cc.find("Text", this.scrollView.content).getComponent(cc.Label);
        this.info_Choose = cc.find("Choose", this.scrollView.content).getComponent(cc.Label);
        this.info_Normal_5 = cc.find("Normal_5", this.scrollView.content);
        this.info_Normal_9 = cc.find("Normal_9", this.scrollView.content);
        this.content_Btn = cc.find("con_Btn", this.node);
        this.defaultReset()
    }
    protected start(): void {
        // this.info_Text.string = ""
        this.content_Btn.removeAllChildren();
        for (let index = 0; index < 3; index++) {
            let _node = cc.instantiate(this.item_Btn)
            _node.active = true
            let getStr = GameModle.englishLib.returnEnglish(index)
            this.content_Btn.addChild(_node, cc.macro.MIN_ZINDEX, getStr)
            cc.find("Text", _node).getComponent(cc.Label).string = getStr
            _node.y = 0

            let getIndex = GameModle.englishLib.returnEnglish(index)//轉換ABC
            ButtonMng.addEvent(this.node, "Question", "checkAnswer", _node.getComponent(cc.Button), getIndex)
        }
        // this.scrollView.scrollToTop(0.1)
        this.item_Btn.active = false
        this.title.string = "題目"
    }
    reset() {
        this.info_Normal_5.active = false
        this.info_Normal_9.active = false
    }
    setQAInfo(str: string, _level: number, _qaNum: number) {
        console.log(_level, _qaNum);

        if (_level == 1 && (_qaNum == 4 || _qaNum == 8)) {
            switch (_qaNum) {
                case 4:
                    this.info_Normal_5.active = true
                    break;
                case 8:
                    this.info_Normal_9.active = true
                    break;
            }
        }
        this.info_Text.node.active = true
        this.info_Text.string = str

    }
    setChoose(str: string) {
        this.info_Choose.node.active = true
        this.info_Choose.string = str
    }
    checkAnswer(e: cc.Event, _customEventData: string) {
        GameModle.chooseAnswer = _customEventData
        this.EventEmit(GameEvent.SendCommand, Commamnd.EndQA)
        // console.log(e, _customEventData);
        //開始接中央
    }
}


