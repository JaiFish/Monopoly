import { TypeClass } from "./@Type";
import CMan from "./CMan";
import CMapItem from "./CMapItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Controll extends cc.Component {
    public static instens: Controll = null
    public static man: CMan = null;
    @property(cc.Node)
    public tempMapItem: cc.Node = null;
    @property(cc.Node)
    public content_Map: cc.Node = null
    public mapItem: Map<number, CMapItem> = new Map();

    onLoad() {
        Controll.instens = this;
        for (let index = 0; index < this.content_Map.childrenCount; index++) {
            this.mapItem.set(index, this.content_Map.children[index].getComponent(TypeClass.MapItem))
        }
        console.log(this.mapItem);
    }
}
