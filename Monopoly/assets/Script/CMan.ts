import CMapItem from "./CMapItem";
import Controll from "./Controll";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CMan extends cc.Component {
    @property(cc.Node)
    nMan: cc.Node = null;
    getNumber: number;
    nowIndex: number = 0;
    constructor() {
        super();
        Controll.man = this;
    }
    onLoad() {

    }
    start() {

    }
    StartGO(GoCount: number) {
        this.getNumber = GoCount;
        this.nowIndex++;
        this.getNumber--;
        let gettry: cc.Node = Controll.instens.mapItem.get(this.nowIndex).node
        if (gettry == undefined) return;
        let getNextMap: cc.Node = Controll.instens.mapItem.get(this.nowIndex).node
        // let changePosition: cc.Vec3 = this.convertOtherNodeSpaceAR(getNextMap, this.node);
        // console.log(changePosition.x, changePosition.y);

        cc.tween(this.nMan)
            .to(1, { x: getNextMap.x, y: getNextMap.y }, { easing: dt => cc.easeCubicActionOut().easing(dt) })
            .start()
    }
    convertOtherNodeSpaceAR(node: cc.Node, targetNode: cc.Node) {
        let pos = targetNode.position;
        //轉成世界座標
        let worldPoint = node.convertToWorldSpaceAR(pos);
        return targetNode.convertToNodeSpaceAR(worldPoint);
    }
}
