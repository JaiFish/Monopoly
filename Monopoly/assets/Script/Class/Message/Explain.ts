import ButtonMng from '../../Data/base/ButtonMng';
import ComponentBase from '../../Data/base/ComponentBase';
const { ccclass, property } = cc._decorator;

@ccclass
export default class Explain extends ComponentBase {
    title: cc.Label;
    info_Text: cc.Label;
    btn_Next: cc.Button;
    scrollView: cc.ScrollView
    protected onLoad(): void {
        this.title = cc.find("Title", this.node).getComponent(cc.Label);
        this.scrollView = cc.find("scroll_Info", this.node).getComponent(cc.ScrollView);
        this.info_Text = cc.find("Mask/con/Text", this.scrollView.node).getComponent(cc.Label);
        this.btn_Next = cc.find("Btn_Next", this.node).getComponent(cc.Button)
        this.defaultReset()
    }
    protected start(): void {
        ButtonMng.addEvent(this.node, "Explain", "nextProcess", this.btn_Next)

    }
    setInfoStr(str: string) {
        this.info_Text.string = str
    }
    nextProcess(e: cc.Event, _customEventData: string) {
        //進入關閉畫面流程，記得傳遞自己
    }
}