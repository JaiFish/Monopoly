
import AnswerLibrary from "./Data/QA/AnswerLibrary";
import ChooseLibrary from "./Data/QA/ChooseLibrary";
import ExplainLibrary from "./Data/QA/ExplainLibrary";
import QALibrary from "./Data/QA/QALibrary";
import { BearState } from "./Enum/BearState";
import { GameState } from "./Enum/GameState";
import { TrainType } from "./Enum/TrainType";
import { WebPostMessage } from "./WebPostMessage";

class Player {
    level: number;
    trainTypeNumber: number;
    trainType: TrainType;

}
class NumberConvertEnglish {
    str = []
    constructor() {
        for (var i = 0; i < 26; i++) {
            this.str.push(String.fromCharCode(i + 65));
        }
    }
    returnEnglish(_num: number) {
        return this.str[_num];
    }
}

class GameModel {
    version: string = "1.1.17";
    chooseAnswer: string;
    playData: Player = new Player();

    //------資料區，無引用到
    // noUseStation: number[] = [8]
    stationType_ShowVideo: number[] = [1, 20];
    stationType_Start: number[] = [0];
    stationType_Normal: number[] = [
        2, 3, 4,
        6, 7, 8, 9, 10,
        12, 13, 14,
        16, 17,
        19
    ];
    stationType_QA: number[] = [5, 11, 15, 18];//19是裝飾用的並無提物，但因為點點生成顏色ˇ關係需要放點
    //------資料區，無引用到
    mapItem: Map<number, MapItem> = new Map();
    mapSprite: Map<number, MapSprite> = new Map();
    pathPositionData: Map<number, cc.Vec2> = new Map();
    pathBezierData: Map<number, Array<cc.Vec2>> = new Map();

    englishLib: NumberConvertEnglish = new NumberConvertEnglish()
    gameState: GameState;
    bearState:BearState

    webPostMessage:WebPostMessage = new WebPostMessage();

    isEndLoadingData:boolean

    //-------題庫-------
    qaLibrary: QALibrary;
    qaIndex: number = 0
    chooseLibrary: ChooseLibrary;
    answerLibrary: AnswerLibrary;
    explainLibrary: ExplainLibrary;
    convertOtherNodeSpaceAR(node: cc.Node, targetNode: cc.Node) {
        let pos = targetNode.position;
        //轉成世界座標
        let worldPoint = node.convertToWorldSpaceAR(pos);
        return targetNode.convertToNodeSpaceAR(worldPoint);
    }
}
export default new GameModel()



