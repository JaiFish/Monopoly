import { TypeClass } from "./@Type";
import AnimationPath from "./AnimationPath";
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
    public pathPositionData: Map<number, cc.Vec2> = new Map();
    public pathBezierData: Map<number, Array<cc.Vec2>> = new Map();

    onLoad() {
        Controll.instens = this;

        // console.log(this.mapItem);

    }
    start() {
        console.log(AnimationPath.instens.aPath);

        let pathData: Array<object> = AnimationPath.instens.aPath.getClips()[0].curveData.props.position
        console.log(pathData);

        for (let index: number = 0; index < pathData.length; index++) {
            let x: number = pathData[index]["value"][0]
            let y: number = pathData[index]["value"][1]
            this.pathPositionData.set(index, cc.v2(x, y))
            // console.log(pathData[index]);

            if (pathData[index]["motionPath"] != null && pathData[index]["motionPath"].length > 0) { //檢查是否有Bezier
                this.AddBezier(index, pathData);
            }
        }
        for (let index = 0; index < pathData.length; index++) {
            let tempItem: cc.Node = cc.instantiate(this.tempMapItem)
            this.content_Map.addChild(tempItem, cc.macro.MAX_ZINDEX)
            tempItem.getChildByName("number").getComponent(cc.Label).string = String(index);
            this.mapItem.set(index, this.content_Map.children[index].getComponent(TypeClass.MapItem))
            tempItem.setPosition(this.pathPositionData.get(index))
        }
        console.log(this.pathBezierData);
        console.log(this.pathPositionData);

    }
    AddBezier(mapNumber: number, pathData: Array<object>) {
        let Arr: Array<cc.Vec2> = []
        //起點
        // 中間點
        // 再來終點
        //因為資料還是被維持在五號.所以要往回拿資料...太麻煩了ㄅ
        let x = pathData[mapNumber]["value"][0];
        let y = pathData[mapNumber]["value"][1];
        Arr.push(cc.v2(x, y))
        console.log(cc.v2(x, y));

        x = pathData[mapNumber]["motionPath"][0][0];
        y = pathData[mapNumber]["motionPath"][0][1];
        Arr.push(cc.v2(x, y))
        // console.log(cc.v2(x, y));
        // for (let index = 0; index < pathData[mapNumber]["motionPath"][0].length; index++) {
        //     // console.log(pathData[mapNumber-1]["motionPath"][0]);
        //     // console.log(pathData[mapNumber-1]["motionPath"][0].length);
        //     let x: number = pathData[mapNumber]["motionPath"][0][index]
        //     index++
        //     let y: number = pathData[mapNumber]["motionPath"][0][index]
        //     Arr.push(cc.v2(x, y))
        // }
        //調整位子  有夠麻煩
        // let getPushOne: cc.Vec2 = Arr.splice(1, 1)[0]
        // console.log(getPushOne.x,getPushOne.y);
        // Arr.unshift(getPushOne);

        //下一個點為終點所以要在這加入
        x = pathData[mapNumber + 1]["value"][0];
        y = pathData[mapNumber + 1]["value"][1];
        Arr.push(cc.v2(x, y))
        // console.log(Arr);

        // this.pathBezierData.set(mapNumber + 1, Arr);
    }
}

