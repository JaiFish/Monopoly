import ButtonMng from '../../Data/base/ButtonMng';
import ComponentBase from '../../Data/base/ComponentBase';
import { Commamnd } from '../../Enum/Commad';
import { GameEvent } from '../../Enum/GameEvent';
import Controll from '../../GameControll';
const { ccclass, property } = cc._decorator;

@ccclass
export default class StationInfo extends ComponentBase {
    trainSprite: cc.Sprite;
    trainName: cc.Label;
    trainInfo: cc.Label;
    scrollView: cc.ScrollView;
    btn_back: cc.Button;
    protected onLoad(): void {
        this.trainName = cc.find("TrainName", this.node).getComponent(cc.Label);
        this.scrollView = cc.find("scroll_Info", this.node).getComponent(cc.ScrollView);
        this.trainInfo = cc.find("Mask/con/TrainInfo", this.scrollView.node).getComponent(cc.Label);
        this.trainSprite = cc.find("TrainSprite", this.node).getComponent(cc.Sprite);
        this.btn_back = cc.find("Item_Btn", this.node).getComponent(cc.Button)
        this.defaultReset()
    }
    protected start(): void {
        ButtonMng.addEvent(this.node, "StationInfo", "sendEvent", this.btn_back)
    }
    sendEvent(e: cc.Event, _customEventData: string) {
        this.EventEmit(GameEvent.SendCommand, Commamnd.EndtationInfo)
    }
    reset() {
        this.trainSprite.spriteFrame = null
        this.trainInfo.string = ""
        this.trainName.string = ""
        this.node.opacity = 0
    }
    setSprite(_spriteFrame: cc.SpriteFrame) {
        this.trainSprite.spriteFrame = _spriteFrame
    }
    setInfo(str: string) {
        this.trainInfo.string = str
    }
    setTrainName(str: string) {

        this.trainName.string = str
    }
}