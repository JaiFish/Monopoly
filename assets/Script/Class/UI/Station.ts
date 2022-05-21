import AssetMng from '../../Asset/AssetMng';
import ButtonMng from '../../Data/base/ButtonMng';
import ComponentBase from '../../Data/base/ComponentBase';
import MusciMng from '../../Data/base/MusciMng';
import { GameEvent } from '../../Enum/GameEvent';
import GameModle from '../../GameModle';
import StationBtn from './StationBtn';
const { ccclass, property } = cc._decorator;

@ccclass
export default class Station extends ComponentBase {
    icon: cc.Node;
    isOpen: boolean
    item: cc.Node
    btn_ControllOpen: cc.Button
    scroll: cc.ScrollView;
    con: cc.Node
    Layout_Mask: cc.Layout;
    Layout_BG1: cc.Layout;
    Layout_BG2: cc.Layout;
    maxIndex: number = 5
    getStationData: number[] = []
    itemCount: number;//火車站總共數量


    info2: cc.Node

    protected onLoad(): void {
        this.btn_ControllOpen = cc.find("Btn_ControllOpen", this.node).getComponent(cc.Button)
        this.icon = cc.find("icon", this.btn_ControllOpen.node);
        this.item = cc.find("item", this.node)
        this.scroll = cc.find("con_Scroll", this.node).getComponent(cc.ScrollView)
        this.con = this.scroll.content
        this.con.removeAllChildren()
        this.con.setContentSize(0, 0)
        this.Layout_BG1 = cc.find("Layout_BG1", this.scroll.node).getComponent(cc.Layout)
        this.Layout_BG2 = cc.find("Layout_BG2", this.Layout_BG1.node).getComponent(cc.Layout)
        this.Layout_Mask = cc.find("Layout_Mask", this.Layout_BG2.node).getComponent(cc.Layout)
        this.info2 = cc.find('Info2', this.node)

        this.initEvent(GameEvent.UIGetStation, this.getStation)
        this.info2.active = false
        //額外處理
        this.sortData()
        this.itemCount = this.getStationData.length
        this.itemInit()

        // for (let index = 0; index < this.itemCount; index++) {
        //     this.itemSop(this.getStationData[index])
        // }

    }
    protected start(): void {
        ButtonMng.addEvent(this.node, "Station", "eventControllOpen", this.btn_ControllOpen)
    }
    itemInit() {
        for (let index = 0; index < this.itemCount; index++) {
            this.itemSop(this.getStationData[index])
        }
 
        //有問題的方法
        // if (this.maxIndex < this.itemCount) {
        //     for (let index = 0; index < this.maxIndex; index++) {
        //         this.itemSop(this.getStationData[index])
        //     }
        //     setTimeout(() => {//給時間渲染
        //         this.closeLayout()
        //         setTimeout(() => {
        //             for (let index = this.maxIndex; index < this.itemCount; index++) {
        //                 this.itemSop(this.getStationData[index])
        //             }
        //             this.item.active = false
        //         }, 100);
        //     }, 100);
        // }
        // else {
        //     for (let index = 0; index < this.itemCount; index++) {
        //         this.itemSop(this.getStationData[index])
        //     }
        //     this.item.active = false
        // }
    }
    chengeSprit() {
        for (let index = 0; index < this.con.childrenCount; index++) {
            let _class = this.con.children[index].getComponent(StationBtn)
            _class.sprite.spriteFrame = AssetMng.data_SprtieAtlas.get("UIBtn_Statoin_Gary_" + _class.stationType)
        }
    }
    checkInit() {
        let isCheck = false

        if (this.con.children[this.itemCount - 1].getComponent(StationBtn) != undefined)
            if (this.con.children[this.itemCount - 1].getComponent(StationBtn).btn != null)
                isCheck = true
        return isCheck
    }
    eventControllOpen(e: cc.Event, _customEventData: string) {
        MusciMng.effectPlay("BtnClick")
        if (this.isOpen) {
            this.scroll.node.active = false
            this.isOpen = this.scroll.node.active
            this.icon.angle = 180

        }
        else {
            this.scroll.node.active = true
            this.isOpen = this.scroll.node.active
            this.icon.angle = 0
        }


    }
    getStation(stationNum: number) {
        if (stationNum < 2 || stationNum > 19) return;
        cc.find(stationNum.toString(), this.con).getComponent(StationBtn).chengeStation()
    }
    async itemSop(index: number) {
        let _item = cc.instantiate(this.item)
        this.con.addChild(_item, cc.macro.MAX_ZINDEX, index.toString());
        let _class = _item.addComponent(StationBtn)
        _class.setEvent(index)
        _item.active = true

    }
    closeLayout() {
        this.Layout_BG1.enabled = false
        this.Layout_BG2.enabled = false
        this.Layout_Mask.enabled = false
    }
    sortData() {
        for (let index = 0; index < GameModle.stationType_Normal.length; index++) {
            this.getStationData.push(GameModle.stationType_Normal[index])
        }
        for (let index = 0; index < GameModle.stationType_QA.length; index++) {
            this.getStationData.push(GameModle.stationType_QA[index])
        }
        this.getStationData.sort((a, b) => a - b)
    }
}