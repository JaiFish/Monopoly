import ButtonMng from '../../Data/base/ButtonMng';
import ComponentBase from '../../Data/base/ComponentBase';
import MusciMng from '../../Data/base/MusciMng';
import SettingBtn from './SettingBtn';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Setting extends ComponentBase {
    isOpen: boolean
    item: cc.Node
    btn_ControllOpen: cc.Button
    scroll: cc.ScrollView;
    con: cc.Node
    Layout_Mask: cc.Layout;
    Layout_BG1: cc.Layout;
    Layout_BG2: cc.Layout;
    maxIndex: number = 4
    itemCount: number = 1;
    info3: cc.Node

    protected onLoad(): void {
        this.btn_ControllOpen = cc.find("Btn_ControllOpen", this.node).getComponent(cc.Button)
        this.item = cc.find("item", this.node)
        this.scroll = cc.find("con_Scroll", this.node).getComponent(cc.ScrollView)
        this.con = this.scroll.content
        this.con.removeAllChildren()
        this.con.setContentSize(0, 0)
        this.Layout_BG1 = cc.find("Layout_BG1", this.scroll.node).getComponent(cc.Layout)
        this.Layout_BG2 = cc.find("Layout_BG2", this.Layout_BG1.node).getComponent(cc.Layout)
        this.Layout_Mask = cc.find("Layout_Mask", this.Layout_BG2.node).getComponent(cc.Layout)
        this.info3 = cc.find('Info3', this.node)

        this.itemInit()
        this.info3.active = false
    }
    protected start(): void {
        ButtonMng.addEvent(this.node, "Setting", "eventControllOpen", this.btn_ControllOpen)
    }
    itemInit() {
        for (let index = 0; index < this.itemCount; index++) {
            this.itemSop(index)
        }


        //有問題的方法
        // if (this.maxIndex < this.itemCount) {
        //     for (let index = 0; index < this.maxIndex; index++) {
        //         this.itemSop(index)
        //     }
        //     setTimeout(() => {//給時間渲染
        //         this.closeLayout()
        //         setTimeout(() => {
        //             for (let index = this.maxIndex; index < this.itemCount; index++) {
        //                 this.itemSop(index)
        //             }
        //         }, 100);
        //     }, 100);
        // }
        // else {
        //     for (let index = 0; index < this.itemCount; index++) {
        //         this.itemSop(index)
        //     }
        // }
    }
    eventControllOpen(e: cc.Event, _customEventData: string) {
        MusciMng.effectPlay("BtnClick")
        if (this.isOpen) {
            this.scroll.node.active = false
            this.isOpen = this.scroll.node.active
        }
        else {
            this.scroll.node.active = true
            this.isOpen = this.scroll.node.active
        }
    }
    itemSop(index: number) {
        let _item = cc.instantiate(this.item)
        this.con.addChild(_item);
        let _class = _item.addComponent(SettingBtn)
        _class.setEvent(index)
        _item.active = true
    }
    closeLayout() {
        this.Layout_BG1.enabled = false
        this.Layout_BG2.enabled = false
        this.Layout_Mask.enabled = false
    }


}