

import MyMath from "../../Data/MyMath";
import { GameEvent } from "../../Enum/GameEvent";
import { GameState } from "../../Enum/GameState";
import EventMng from "../../Event/EventMng";
import GameModel from "../../GameModel";
import ManAction from "./ManAnimation";

export default class Panel_Man extends ManAction {
    protected onLoad(): void {
        this.nMan = cc.find("nMan", this.node);
        this.initEvent(GameEvent.ManGO, this.manGO)
        this.initEvent(GameEvent.ManStop, this.manStop)
        this.initEvent(GameEvent.SetModel, this.setGameModel)
        this.initEvent(GameEvent.SetManState, this.setManState);
        this.nowStation = 0

    }
    protected start(): void {
        EventMng.emit(GameEvent.SendModel, GameEvent.SetModel)
        setTimeout(() => {
            this.resetOeg()
            // this.setStation();
            // this.smoothSpeed();
            // this.setNextPosition(this.gameModle.pathPositionData.get(this.nowStation));
            // this.startGO();
        }, 1000);

    }
    protected update(dt: number): void {
        if (this.isCanGo) {

            let x = (dt * this.xSpeed) * this.directionX
            let y = (dt * this.ySpeed) * this.directionY

            x = MyMath.add(this.nMan.x, x)
            y = MyMath.add(this.nMan.y, y)
            this.nMan.setPosition(x, y);
            if (this.checkX(x) && this.checkY(y)) {
                this.skipGoPosition()
                this.stopGo();
                if (this.manState == GameState.Start)
                    setTimeout(() => {
                        this.setStation();
                        this.smoothSpeed();
                        this.setNextPosition(this.gameModle.pathPositionData.get(this.nowStation));
                        this.startGO();
                    }, 500);
            }
        }
    }
    manGO() {
        this.setStation();
        this.smoothSpeed();
        this.setNextPosition(this.gameModle.pathPositionData.get(this.nowStation));
        this.startGO();
    }
    manStop() {
        this.stopGo();
    }
    setStation(num: number = 1) {
        this.nowStation += num;
    }

    setNextPosition(_pos: cc.Vec2) {
        let changePosition: cc.Vec3 = GameModel.convertOtherNodeSpaceAR(this.gameModle.mapItem.get(this.nowStation).node, this.node);
        console.log(changePosition);

        this.targetX = MyMath.round(changePosition.x, 3);
        this.targetY = MyMath.round(changePosition.y, 3);

        console.log(this.targetX, this.targetY);
        console.log(this.nMan.x, this.nMan.y);


        this.directionX = this.targetX > this.nMan.x ? 1 : -1
        this.directionY = this.targetY > this.nMan.y ? 1 : -1
    }
    skipGoPosition() {
        this.nMan.setPosition(this.targetX, this.targetY);
    }

    smoothSpeed(): void {
        let pos = GameModel.convertOtherNodeSpaceAR(this.gameModle.mapItem.get(this.nowStation).node, this.node);
        let man = this.nMan.getPosition()

        //計算兩點之間距離
        let distance = pos.subSelf(cc.v3(man.x, man.y))

        //計算絕對值
        let absX = Math.abs(distance.x)
        let absY = Math.abs(distance.y)
        // console.log(absX, absY);

        //開始畢氏定理~~~~

        //計算向量距離(斜邊) vectorDistance=向量距離
        let vectorDistance = Math.sqrt(Math.pow(absX, 2) + Math.pow(absY, 2))
        // console.log(absX / vectorDistance);
        // console.log(absY / vectorDistance);
        //(向量單邊距離 / 向量距離) * 移動速率
        this.xSpeed = (absX / vectorDistance) * this.manSpeed;
        this.ySpeed = (absY / vectorDistance) * this.manSpeed;
    }
    setManState(_state: GameState) {
        this.manState = _state;
        // switch (_state) {
        //     case GameState.Start:
        //         this.manState = GameState.Start;
        //         break;
        //         case GameState.Wait:
        //             this.manState = GameState.Wait;
        //         break;
        // }
    }
    /**
     * 回到原點
     */
    resetOeg() {
        this.setStation(0);
        this.setNextPosition(this.gameModle.pathPositionData.get(this.nowStation));
        this.skipGoPosition();
        this.manState = GameState.Wait;
        this.stopGo()
    }
    checkX(x: number): boolean {
        let nowX = MyMath.round(x, 3);
        if (this.directionX > 0)
            return nowX > this.targetX ? true : false
        else
            return nowX < this.targetX ? true : false
    }
    checkY(y: number): boolean {
        let nowY = MyMath.round(y, 3);
        if (this.directionY > 0)
            return nowY > this.targetY ? true : false
        else
            return nowY < this.targetY ? true : false
    }
}


