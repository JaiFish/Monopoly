
import ComponentBase from "./Data/base/ComponentBase";
import { GameState } from "./Enum/GameState";
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

    mapItem: Map<number, MapItem> = new Map();
    pathPositionData: Map<number, cc.Vec2> = new Map();
    pathBezierData: Map<number, Array<cc.Vec2>> = new Map();

    gameState: GameState;
    convertOtherNodeSpaceAR(node: cc.Node, targetNode: cc.Node) {
        let pos = targetNode.position;
        //轉成世界座標
        let worldPoint = node.convertToWorldSpaceAR(pos);
        return targetNode.convertToNodeSpaceAR(worldPoint);
    }
}
export default new GameModel()
