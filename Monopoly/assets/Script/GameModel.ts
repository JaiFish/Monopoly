import Panel_Map from "./Class/Panel_Map";
import MapItem from "./Item/MapItem";

class GameModel {
    stationType_WaitRad: number[] = [1, 20];
    stationType_Start: number[] = [0];
    stationType_Normal: number[] = [
        2, 3, 4, 5, 6, 7, 8, 9, 10,
        12, 13, 14,
        16, 17, 18, 19
    ];
    stationType_QandA: number[] = [3, 11, 15];

    public mapItem: Map<number, MapItem> = new Map();
    public pathPositionData: Map<number, cc.Vec2> = new Map();
    public pathBezierData: Map<number, Array<cc.Vec2>> = new Map();

    public panel_Map: Panel_Map;
    Request(){
        
    }


}
export default new GameModel();