import AssetMng from "../Asset/AssetMng";
import { GameEvent } from "../Enum/GameEvent";
import { StationType } from "../Enum/StationType";
import { TypeClass } from "../Enum/TypeClass";
import MapItem from "../Item/MapItem";
import ComponentBase from "../Data/base/ComponentBase";
import MapSprite from "../Item/MapSprite";
import GameModle from "../GameModle";

export default class Panel_Map extends ComponentBase {
    public tempMapItem: cc.Node;
    public content_Map: cc.Node;
    public content_Station: cc.Node;
    public content_Station2: cc.Node;
    protected onLoad(): void {
        this.tempMapItem = cc.find("mapItem", this.node)
        this.content_Map = cc.find("nContent_Map", this.node)
        this.content_Station = cc.find("nContent_StationSprite", this.node)
        this.content_Station2 = cc.find("Canvas/Panel_Map2/nContent_StationSprite")
        this.initEvent(GameEvent.InitMap, this.initMap)
    }
    protected start(): void {

    }
    async initMap(_path: cc.Animation) {

        let pathData: Array<object> = _path.getClips()[0].curveData.props.position
        //拿取Animation的路徑
        for (let index: number = 0; index < pathData.length; index++) {
            let x: number = pathData[index]["value"][0]
            let y: number = pathData[index]["value"][1]

            GameModle.pathPositionData.set(index, cc.v2(x, y))
            // console.log(pathData[index]);
            if (pathData[index]["motionPath"] != null && pathData[index]["motionPath"].length > 0) { //檢查是否有Bezier
                this.AddBezier(index, pathData, GameModle);
            }
        }
        //生產地圖的點
        await AssetMng.checkState();
        for (let index = 0; index < pathData.length - 1; index++) {//原點跟終點都是一樣的點，內容依樣就不用新增
            let tempItem: cc.Node = cc.instantiate(this.tempMapItem)
            this.content_Map.addChild(tempItem, cc.macro.MAX_ZINDEX)
            tempItem.setPosition(GameModle.pathPositionData.get(index))
            let _class: MapItem = tempItem.addComponent(MapItem);
            _class.myNumber = index;
            _class.myType = this.getStationType(index);
            _class.setSprite(this.getSpriteType(index));
            GameModle.mapItem.set(index, _class)
        }
        for (let index = 2; index <= 19; index++) {
            let _node = this.exceptionSprite(index)
            let spriteClass = _node.addComponent(MapSprite)
            spriteClass.mySprite.spriteFrame = AssetMng.data_SprtieAtlas.get("Station_Gary_" + index.toString())
            spriteClass.type = index
            GameModle.mapSprite.set(index, spriteClass)
        } 
        
        //test
        // cc.find("Canvas/2 copy").addComponent(MapSprite).getAction()
        // console.log(GameModle.pathBezierData);
        // console.log(GameModle.pathPositionData);
    }
    AddBezier(mapNumber: number, pathData: Array<object>, GameModle: GameModle) {
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
        console.log(Arr);

        GameModle.pathBezierData.set(mapNumber + 1, Arr);
    }
    getSpriteType(_number: number) {
        // console.log(_number);

        switch (_number) {
            case 0:
                return AssetMng.data_SprtieAtlas.get("Station_Start");
            case 1:
            case 20:
                return AssetMng.data_SprtieAtlas.get("Station_WaitRad");
            case 5:
            case 11:
            case 15:
            case 18:
                return AssetMng.data_SprtieAtlas.get("Station_Q&A");
            default:
                return AssetMng.data_SprtieAtlas.get("Station_Normal");
        }
        // let getType:StationType = _number
    }
    getStationType(_number: number) {
        switch (_number) {
            case 0:
                return StationType.Start
            case 1:
            case 21:
                return StationType.WaitRad
            case 5:
            case 11:
            case 15:
                return StationType.QandA
            default:
                return StationType.Normal
        }
        // let getType:StationType = _number
    }

    exceptionSprite(_index: number) {
        return _index == 8 ?
            cc.find(_index.toString(), this.content_Station2) :
            cc.find(_index.toString(), this.content_Station)
    }
}