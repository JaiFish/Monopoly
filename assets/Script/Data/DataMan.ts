import ComponentBase from "./base/ComponentBase";
import { GameState } from "../Enum/GameState";

export default class DataMan extends ComponentBase {

    nMan: cc.Node;
    getCount: number;
    nowIndex: number = 0;

    manState: GameState;
    manSkipSeed: number = 150;
    manDefaultSpeed: number = 36;
    manSpeed: number;
    /**
     * X增加速率，撫平每秒速率
     */
    xSpeed: number = 1;
    /**
     * Y增加速率，撫平每秒速率
     */
    ySpeed: number = 1;
    /**
     * 設定每秒速度
     */
    setSpeed: number;

    /**
     * 計時當前秒數
     */
    tempDtCount: number;
    /**
     * 秒
     */

    endDt: number;

    addX: number;
    addY: number;

    targetX: number;
    targetY: number;

    /**
     * X的方向
     */
    directionX: number;
    /**
     * Y方向
     */
    directionY: number;
    /**
     * 目前停靠站位置
     */
    nowStation: number;

    isCanGo: boolean;
    isArrival: boolean;
    /**
     * 遊戲是否準備結束
     */
    isEnd: boolean
    isWaitSingnalLinght: boolean

    gameModle: GameModle;

    WaitArray: number[] = [0, -1]
}