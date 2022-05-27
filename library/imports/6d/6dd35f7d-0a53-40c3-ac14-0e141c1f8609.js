"use strict";
cc._RF.push(module, '6dd3599ClNAw6wUDhQcH4YJ', 'Panel_Man');
// Script/Class/Mam/Panel_Man.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MusciMng_1 = require("../../Data/base/MusciMng");
var MyMath_1 = require("../../Data/MyMath");
var Commad_1 = require("../../Enum/Commad");
var GameEvent_1 = require("../../Enum/GameEvent");
var GameState_1 = require("../../Enum/GameState");
var EventMng_1 = require("../../Event/EventMng");
var ManAnimation_1 = require("./ManAnimation");
var Panel_Man = /** @class */ (function (_super) {
    __extends(Panel_Man, _super);
    function Panel_Man() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel_Man.prototype.onLoad = function () {
        this.nMan = cc.find("nMan", this.node);
        this.initEvent(GameEvent_1.GameEvent.ManGO, this.manGO);
        this.initEvent(GameEvent_1.GameEvent.ManStop, this.manStop);
        this.initEvent(GameEvent_1.GameEvent.ManSkip, this.manSkip);
        this.initEvent(GameEvent_1.GameEvent.SetModel, this.setGameModle);
        this.initEvent(GameEvent_1.GameEvent.SetManState, this.setManState);
        this.nowStation = 0;
        this.node.opacity = 0;
        this.isArrival = true;
        this.isEnd = false;
        this.isWaitSingnalLinght = false;
    };
    Panel_Man.prototype.start = function () {
        EventMng_1.default.emit(GameEvent_1.GameEvent.SendModel, GameEvent_1.GameEvent.SetModel);
    };
    Panel_Man.prototype.update = function (dt) {
        if (this.isCanGo) {
            var x = (dt * this.xSpeed * this.manSpeed) * this.directionX;
            var y = (dt * this.ySpeed * this.manSpeed) * this.directionY;
            x = MyMath_1.default.add(this.nMan.x, x);
            y = MyMath_1.default.add(this.nMan.y, y);
            this.nMan.setPosition(x, y);
            if (this.checkX(x) && this.checkY(y)) {
                this.skipGoPosition();
                this.isArrival = true;
                this.stopGo();
                EventMng_1.default.emit(GameEvent_1.GameEvent.GetStation, this.nowStation);
                EventMng_1.default.emit(GameEvent_1.GameEvent.UIGetStation, this.nowStation);
                if (this.nowStation == 8)
                    this.caveException();
                // console.log(this.manState);
                if (this.isEnd) {
                    this.manStop();
                    this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.ShowEndGame);
                }
                if (!this.checkStationStop()) {
                    if (this.manState == GameState_1.GameState.Start || this.manState == GameState_1.GameState.Skip)
                        this.manGO();
                    else
                        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.UpdataUIStart, false);
                }
            }
        }
    };
    Panel_Man.prototype.manGO = function () {
        // console.log("開始走囉", this.isCanGo);
        if (this.isWaitSingnalLinght)
            return;
        if (this.manState == GameState_1.GameState.ShowMessage)
            return;
        if (this.isArrival) {
            this.setStation();
            this.smoothSpeed();
            this.setNextPosition(this.gameModle.pathPositionData.get(this.nowStation));
            this.isArrival = false;
        }
        if (this.checkSignalLight() && !this.isWaitSingnalLinght) {
            this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.WaitSignalLight);
            this.isWaitSingnalLinght = true;
            return;
        }
        MusciMng_1.default.singleEffectPlay("TrainGoing", true);
        this.setManState(GameState_1.GameState.Start);
        this.startGO();
        // console.log("開始走囉", this.isCanGo);
    };
    Panel_Man.prototype.manEndSignalLight = function () {
        this.isWaitSingnalLinght = false;
        this.setManState(GameState_1.GameState.Start);
        this.startGO();
        MusciMng_1.default.singleEffectPlay("TrainGoing", true);
    };
    Panel_Man.prototype.manLineWait = function () {
        if (this.isWaitSingnalLinght)
            return;
        MusciMng_1.default.effectStop("TrainGoing");
        this.setManState(GameState_1.GameState.Wait);
        this.stopGo();
    };
    Panel_Man.prototype.manWait = function () {
        if (this.isWaitSingnalLinght)
            return;
        MusciMng_1.default.effectStop("TrainGoing");
        this.setManState(GameState_1.GameState.Wait);
    };
    Panel_Man.prototype.manStop = function () {
        MusciMng_1.default.effectStop("TrainGoing");
        this.setManState(GameState_1.GameState.Stop);
        this.stopGo();
    };
    Panel_Man.prototype.manSkip = function () {
        if (this.isWaitSingnalLinght)
            return;
        if (!this.isCanGo)
            this.startGO();
        this.manSpeed = this.manSkipSeed;
        this.setManState(GameState_1.GameState.Skip);
    };
    Panel_Man.prototype.setStation = function (num) {
        if (num === void 0) { num = 1; }
        this.nowStation += num;
        if (this.nowStation > 20) {
            this.nowStation = 0;
            this.isEnd = true;
        }
    };
    Panel_Man.prototype.setNextPosition = function (_pos) {
        var changePosition = this.gameModle.convertOtherNodeSpaceAR(this.gameModle.mapItem.get(this.nowStation).node, this.node);
        // console.log(changePosition);
        this.targetX = MyMath_1.default.round(changePosition.x, 3);
        this.targetY = MyMath_1.default.round(changePosition.y, 3);
        // console.log(this.targetX, this.targetY);
        // console.log(this.nMan.x, this.nMan.y);
        this.directionX = this.targetX > this.nMan.x ? 1 : -1;
        this.directionY = this.targetY > this.nMan.y ? 1 : -1;
    };
    Panel_Man.prototype.skipGoPosition = function () {
        this.nMan.setPosition(this.targetX, this.targetY);
    };
    Panel_Man.prototype.smoothSpeed = function () {
        var pos = this.gameModle.convertOtherNodeSpaceAR(this.gameModle.mapItem.get(this.nowStation).node, this.node);
        var man = this.nMan.getPosition();
        //計算兩點之間距離
        var distance = pos.subSelf(cc.v3(man.x, man.y));
        //計算絕對值
        var absX = Math.abs(distance.x);
        var absY = Math.abs(distance.y);
        // console.log(absX, absY);
        //開始畢氏定理~~~~
        //計算向量距離(斜邊) vectorDistance=向量距離
        var vectorDistance = Math.sqrt(Math.pow(absX, 2) + Math.pow(absY, 2));
        // console.log(absX / vectorDistance);
        // console.log(absY / vectorDistance);
        //(向量單邊距離 / 向量距離) * 移動速率
        this.xSpeed = (absX / vectorDistance);
        this.ySpeed = (absY / vectorDistance);
    };
    Panel_Man.prototype.setManState = function (_state) {
        this.manState = _state;
        // switch (_state) {
        //     case GameState.Start:
        //         this.manState = GameState.Start;
        //         break;
        //         case GameState.Wait:
        //             this.manState = GameState.Wait;
        //         break;
        // }
    };
    Panel_Man.prototype.setManSprite = function (_sprite) {
        this.nMan.getComponent(cc.Sprite).spriteFrame = _sprite;
    };
    /**
     * 回到原點
     */
    Panel_Man.prototype.resetOeg = function () {
        this.node.opacity = 255;
        this.setStation(0);
        this.setNextPosition(this.gameModle.pathPositionData.get(this.nowStation));
        this.skipGoPosition();
        this.manState = GameState_1.GameState.Stop;
        this.manSpeed = this.manDefaultSpeed;
        this.stopGo();
    };
    Panel_Man.prototype.checkX = function (x) {
        var nowX = MyMath_1.default.round(x, 3);
        if (this.directionX > 0)
            return nowX > this.targetX ? true : false;
        else
            return nowX < this.targetX ? true : false;
    };
    Panel_Man.prototype.checkY = function (y) {
        var nowY = MyMath_1.default.round(y, 3);
        if (this.directionY > 0)
            return nowY > this.targetY ? true : false;
        else
            return nowY < this.targetY ? true : false;
    };
    Panel_Man.prototype.checkStationStop = function () {
        if (this.nowStation == 5 ||
            this.nowStation == 11 ||
            this.nowStation == 15 ||
            this.nowStation == 1 ||
            this.nowStation == 20 ||
            this.nowStation == 21) {
            this.stopGo();
            this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.UpdataUIStart, false);
            this.manState = GameState_1.GameState.Stop;
            this.manSpeed = this.manDefaultSpeed;
            switch (this.nowStation) {
                case 5:
                case 11:
                case 15:
                    this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.ShowQA);
                    //傳遞訊息開啟QA視窗
                    break;
                case 1:
                case 20:
                    this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.ShowVideo);
                    //傳遞Show影片訊息
                    break;
                case 21:
                    this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.ShowEndGame);
                    break;
            }
            return true;
        }
        else
            return false;
    };
    Panel_Man.prototype.caveException = function () {
        cc.find("Canvas/BG").setSiblingIndex(this.node.getSiblingIndex() - 1);
    };
    Panel_Man.prototype.checkSignalLight = function () {
        var tryGet = this.nowStation - 1;
        // console.log("計算數字：" + tryGet);
        if (this.WaitArray[0] == tryGet) {
            this.WaitArray.shift();
            return true;
        }
        else
            return false;
    };
    return Panel_Man;
}(ManAnimation_1.default));
exports.default = Panel_Man;

cc._RF.pop();