import AssetMng from '../../Asset/AssetMng';
import ButtonMng from '../../Data/base/ButtonMng';
import ComponentBase from '../../Data/base/ComponentBase';
import MusciMng from '../../Data/base/MusciMng';
const { ccclass, property } = cc._decorator;

@ccclass
export default class SettingBtn extends ComponentBase {
    sprite: cc.Sprite
    btn: cc.Button
    nowState: boolean
    protected onLoad(): void {
        this.sprite = cc.find("icon", this.node).getComponent(cc.Sprite)
        this.btn = this.node.getComponent(cc.Button);
        this.node.setPosition(0, 0)
        this.nowState = true
    }
    async setEvent(_num: number) {
        switch (_num) {
            case 0://聲音   
                await AssetMng.checkState()
                this.setSoundSprite()
                ButtonMng.addEvent(this.node, "SettingBtn", "eventSwitchSound", this.btn)
                break;
        }
    }
    eventSwitchSound() {
        MusciMng.swichEffect()
        MusciMng.swichMusic()
        MusciMng.effectPlay("BtnClick")
        this.setSoundSprite()
    }
    async setSoundSprite() {
        let getBoolean = MusciMng.isMusicOpen ? "Open" : "Close";
        this.nowState = MusciMng.isMusicOpen
        this.sprite.spriteFrame = AssetMng.data_SprtieAtlas.get("Sound" + getBoolean)
    }
}