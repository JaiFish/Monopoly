import ButtonMng from '../Data/base/ButtonMng';
import ComponentBase from '../Data/base/ComponentBase';
import { Commamnd } from '../Enum/Commad';
import { Easing } from '../Enum/Easing';
import { GameEvent } from '../Enum/GameEvent';
const { ccclass, property } = cc._decorator;

@ccclass
export default class MapSprite extends ComponentBase {
    isGet: boolean;
    _mySprite: cc.Sprite;
    btn: cc.Button
    type: number;
    public set mySprite(v: cc.Sprite) {
        this._mySprite = v;
    }

    public get mySprite(): cc.Sprite {
        return this._mySprite
    }
    protected onLoad(): void {
        this.mySprite = this.node.getComponent(cc.Sprite)
        this.btn = this.node.getComponent(cc.Button);
        this.btn.target = this.node
        this.btn.interactable = false
        this.node.anchorY = 0
        let getHight = this.node.getContentSize().height
        this.node.y = this.node.y - (getHight * 0.5)
    }

    getAction() {
        this.node.setScale(0)
        this.isGet = true;
        // console.log(this.type);

        cc.tween(this.node)
            .to(1, { scale: 1 }, { easing: Easing.backOut })
            .call(this.loopShake.bind(this))
            .start()
        if (this.type == 5 ||
            this.type == 11 ||
            this.type == 15) return
        // console.log("我有強化?");
        this.btn.interactable = true
        ButtonMng.addEvent(this.node, "MapSprite", "sendEvent", this.btn, this.node.name)

    }
    sendEvent(e: cc.Event, _customEventData: string) {

        this.EventEmit(GameEvent.SendCommand, Commamnd.UpdataUIStart, false)
        this.EventEmit(GameEvent.SendCommand, Commamnd.ShowStationInfo, Number(_customEventData))
    }

    loopShake() {
        cc.Tween.stopAllByTarget(this.node)
        this.node.angle = 0
        let totalTime = 2
        let setAngle = 15
        cc.tween(this.node)
            .delay(3)
            .repeatForever(cc.tween()
                .repeat(3, cc.tween()
                    .by((totalTime / 4) / 3, { angle: -setAngle })
                    .by((totalTime / 4) / 3, { angle: setAngle })
                    .by((totalTime / 4) / 3, { angle: setAngle })
                    .by((totalTime / 4) / 3, { angle: -setAngle })
                    .delay(0.5)
                )
                .delay(6)
            )
            .start()
    }
}