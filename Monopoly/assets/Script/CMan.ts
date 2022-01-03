import Controll from "./Controll";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CMan extends cc.Component {
    @property(cc.Node)
    nMan: cc.Node = null;
    getCount: number;
    nowIndex: number = 0;
    TweenTime: number = 1;
    isGoin:boolean;

    constructor() {
        super();
        Controll.man = this;
    }
    onLoad() {

    }
    start() {

    }
    StartGO(GoCount: number,SayGO:boolean) {
        console.log(GoCount);

        if (GoCount == 0) return;
        this.nowIndex++
        GoCount--;
        let tryData: Array<cc.Vec2> = Controll.instens.pathBezierData.get(this.nowIndex)
        if (tryData == undefined) this.GoLine(GoCount)
        else {
            // this.GoBezier(GoCount, 0, tryData.length)
        }

    }
    GoBezier(GoCount: number, BezierCount, len: number) {
        // if (BezierCount >= len) {
        //     this.StartGO(GoCount);
        //     return
        // }
        let getPosition: cc.Vec2[] = Controll.instens.pathBezierData.get(this.nowIndex)

        // let getPosition: cc.Vec2 = Controll.instens.pathBezierData.get(this.nowIndex)[BezierCount]

        // BezierCount++;
        console.log(getPosition);
        //起點
        // 中間點
        // 再來終點
        // console.log(getPosition[1]);
        // console.log(getPosition[0]);
        // console.log(getPosition[2]);


        cc.tween(this.nMan)
            // .to(this.TweenTime / len, { x: getPosition.x, y: getPosition.y }, { easing: dt => cc.easeCubicActionOut().easing(dt) })
            .bezierTo(1, getPosition[0], getPosition[1], getPosition[2], 
                { easing: dt => cc.easeCubicActionOut().easing(dt) })
            .call(() => {
                this.StartGO(GoCount);
                // this.GoBezier(GoCount, BezierCount, len);
            })
            .start()
    }
    GoLine(GoCount: number) {
        let getPosition = Controll.instens.pathPositionData.get(this.nowIndex)
        cc.tween(this.nMan)
            .to(this.TweenTime, { x: getPosition.x, y: getPosition.y }, { easing: dt => cc.easeCubicActionOut().easing(dt) })
            .call(() => {
                this.StartGO(GoCount);
            })
            .start()
    }
    // GoLine(GoCount: number) {
    //     this.getCount = GoCount;
    //     this.nowIndex++;
    //     this.getCount--;
    //     let gettry: cc.Node = Controll.instens.mapItem.get(this.nowIndex).node
    //     if (gettry == undefined) return;
    //     let getNextMap: cc.Node = Controll.instens.mapItem.get(this.nowIndex).node
    //     // let changePosition: cc.Vec3 = this.convertOtherNodeSpaceAR(getNextMap, this.node);
    //     // console.log(changePosition.x, changePosition.y);

    //     cc.tween(this.nMan)
    //         .to(1, { x: getNextMap.x, y: getNextMap.y }, { easing: dt => cc.easeCubicActionOut().easing(dt) })
    //         .start()
    // }

    convertOtherNodeSpaceAR(node: cc.Node, targetNode: cc.Node) {
        let pos = targetNode.position;
        //轉成世界座標
        let worldPoint = node.convertToWorldSpaceAR(pos);
        return targetNode.convertToNodeSpaceAR(worldPoint);
    }
}
