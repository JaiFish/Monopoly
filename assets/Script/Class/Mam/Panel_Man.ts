

import MusciMng from "../../Data/base/MusciMng";
import MyMath from "../../Data/MyMath";
import { Commamnd } from "../../Enum/Commad";
import { GameEvent } from "../../Enum/GameEvent";
import { GameState } from "../../Enum/GameState";
import EventMng from "../../Event/EventMng";
import ManAction from "./ManAnimation";

export default class Panel_Man extends ManAction {
    protected onLoad(): void {
        this.nMan = cc.find("nMan", this.node);
        this.initEvent(GameEvent.ManGO, this.manGO)
        this.initEvent(GameEvent.ManStop, this.manStop)
        this.initEvent(GameEvent.ManSkip, this.manSkip)
        this.initEvent(GameEvent.SetModel, this.setGameModle)
        this.initEvent(GameEvent.SetManState, this.setManState);
        this.nowStation = 0
        this.node.opacity = 0
        this.isArrival = true
        this.isEnd = false
        this.isWaitSingnalLinght = false
    }
    protected start(): void {
        EventMng.emit(GameEvent.SendModel, GameEvent.SetModel)

    }
    protected update(dt: number): void {
        if (this.isCanGo) {

            let x = (dt * this.xSpeed * this.manSpeed) * this.directionX
            let y = (dt * this.ySpeed * this.manSpeed) * this.directionY

            x = MyMath.add(this.nMan.x, x)
            y = MyMath.add(this.nMan.y, y)
            this.nMan.setPosition(x, y);
            if (this.checkX(x) && this.checkY(y)) {
                this.skipGoPosition()
                this.isArrival = true
                this.stopGo();
                EventMng.emit(GameEvent.GetStation, this.nowStation)
                EventMng.emit(GameEvent.UIGetStation, this.nowStation)
                if (this.nowStation == 8)
                    this.caveException()
                // console.log(this.manState);
                if (this.isEnd) {
                    this.manStop()
                    this.EventEmit(GameEvent.SendCommand, Commamnd.ShowEndGame)
                }

                if (!this.checkStationStop()) {
                    if (this.manState == GameState.Start || this.manState == GameState.Skip)
                        this.manGO()
                    else
                        this.EventEmit(GameEvent.SendCommand, Commamnd.UpdataUIStart, false)
                }
            }
        }
    }
    manGO() {
        // console.log("開始走囉", this.isCanGo);
        if (this.isWaitSingnalLinght)
            return
        if (this.manState == GameState.ShowMessage) return
        if (this.isArrival) {
            this.setStation();
            this.smoothSpeed();
            this.setNextPosition(this.gameModle.pathPositionData.get(this.nowStation));
            this.isArrival = false;
        }
        if (this.checkSignalLight() && !this.isWaitSingnalLinght) {
            this.EventEmit(GameEvent.SendCommand, Commamnd.WaitSignalLight)
            this.isWaitSingnalLinght = true
            return
        }
        MusciMng.singleEffectPlay("TrainGoing", true)
        this.setManState(GameState.Start)
        this.startGO();

        // console.log("開始走囉", this.isCanGo);
    }
    manEndSignalLight() {
        this.isWaitSingnalLinght = false
        this.setManState(GameState.Start)
        this.startGO();
        MusciMng.singleEffectPlay("TrainGoing", true)
    }
    manLineWait() {
        if (this.isWaitSingnalLinght) return
        MusciMng.effectStop("TrainGoing")
        this.setManState(GameState.Wait)
        this.stopGo();
    }
    manWait() {
        if (this.isWaitSingnalLinght) return
        MusciMng.effectStop("TrainGoing")
        this.setManState(GameState.Wait)
    }
    manStop() {
        MusciMng.effectStop("TrainGoing")
        this.setManState(GameState.Stop)
        this.stopGo();
    }
    manSkip() {
        if (this.isWaitSingnalLinght) return
        if (!this.isCanGo) this.startGO();
        this.manSpeed = this.manSkipSeed;
        this.setManState(GameState.Skip)
    }
    setStation(num: number = 1) {
        this.nowStation += num;
        if (this.nowStation > 20) {
            this.nowStation = 0
            this.isEnd = true
        }
    }

    setNextPosition(_pos: cc.Vec2) {
        let changePosition: cc.Vec3 = this.gameModle.convertOtherNodeSpaceAR(this.gameModle.mapItem.get(this.nowStation).node, this.node);
        // console.log(changePosition);

        this.targetX = MyMath.round(changePosition.x, 3);
        this.targetY = MyMath.round(changePosition.y, 3);

        // console.log(this.targetX, this.targetY);
        // console.log(this.nMan.x, this.nMan.y);


        this.directionX = this.targetX > this.nMan.x ? 1 : -1
        this.directionY = this.targetY > this.nMan.y ? 1 : -1
    }
    skipGoPosition() {
        this.nMan.setPosition(this.targetX, this.targetY);
    }

    smoothSpeed(): void {
        let pos = this.gameModle.convertOtherNodeSpaceAR(this.gameModle.mapItem.get(this.nowStation).node, this.node);
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
        this.xSpeed = (absX / vectorDistance);
        this.ySpeed = (absY / vectorDistance);
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
    setManSprite(_sprite: cc.SpriteFrame) {
        this.nMan.getComponent(cc.Sprite).spriteFrame = _sprite
    }
    /**
     * 回到原點
     */
    resetOeg() {
        this.node.opacity = 255
        this.setStation(0);
        this.setNextPosition(this.gameModle.pathPositionData.get(this.nowStation));
        this.skipGoPosition();
        this.manState = GameState.Stop;
        this.manSpeed = this.manDefaultSpeed;
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
    checkStationStop(): boolean {
        if (this.nowStation == 5 ||
            this.nowStation == 11 ||
            this.nowStation == 15 ||
            this.nowStation == 1 ||
            this.nowStation == 20 ||
            this.nowStation == 21
        ) {
            this.stopGo()
            this.EventEmit(GameEvent.SendCommand, Commamnd.UpdataUIStart, false)
            this.manState = GameState.Stop
            this.manSpeed = this.manDefaultSpeed;
            switch (this.nowStation) {
                case 5:
                case 11:
                case 15:
                    this.EventEmit(GameEvent.SendCommand, Commamnd.ShowQA)
                    //傳遞訊息開啟QA視窗
                    break;
                case 1:
                case 20:
                    this.EventEmit(GameEvent.SendCommand, Commamnd.ShowVideo)
                    //傳遞Show影片訊息
                    break;
                case 21:
                    this.EventEmit(GameEvent.SendCommand, Commamnd.ShowEndGame)
                    break;
            }
            return true;
        }
        else
            return false;

    }
    caveException() {
        cc.find("Canvas/BG").setSiblingIndex(this.node.getSiblingIndex() - 1)
    }
    checkSignalLight() {//因為都會先計算下一個路的點，因此都會先+1，為了往回推需不需要停止就要-1
        let tryGet = this.nowStation - 1
        // console.log("計算數字：" + tryGet);
        if (this.WaitArray[0] == tryGet) {
            this.WaitArray.shift()
            return true
        }
        else return false
    }
}


