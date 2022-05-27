
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Mam/Panel_Man.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWFtXFxQYW5lbF9NYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEscURBQWdEO0FBQ2hELDRDQUF1QztBQUN2Qyw0Q0FBNkM7QUFDN0Msa0RBQWlEO0FBQ2pELGtEQUFpRDtBQUNqRCxpREFBNEM7QUFDNUMsK0NBQXVDO0FBRXZDO0lBQXVDLDZCQUFTO0lBQWhEOztJQTBPQSxDQUFDO0lBek9hLDBCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUE7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUE7SUFD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QUNoQyxpQ0FBaUM7UUFDakMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sRUFBRTtZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3RCLE9BQU8sSUFBSSxDQUFBO1NBQ2Q7O1lBQ0ksT0FBTyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0ExT0EsQUEwT0MsQ0ExT3NDLHNCQUFTLEdBME8vQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IE11c2NpTW5nIGZyb20gXCIuLi8uLi9EYXRhL2Jhc2UvTXVzY2lNbmdcIjtcclxuaW1wb3J0IE15TWF0aCBmcm9tIFwiLi4vLi4vRGF0YS9NeU1hdGhcIjtcclxuaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tIFwiLi4vLi4vRW51bS9Db21tYWRcIjtcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSBcIi4uLy4uL0VudW0vR2FtZUV2ZW50XCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuLi8uLi9FbnVtL0dhbWVTdGF0ZVwiO1xyXG5pbXBvcnQgRXZlbnRNbmcgZnJvbSBcIi4uLy4uL0V2ZW50L0V2ZW50TW5nXCI7XHJcbmltcG9ydCBNYW5BY3Rpb24gZnJvbSBcIi4vTWFuQW5pbWF0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbF9NYW4gZXh0ZW5kcyBNYW5BY3Rpb24ge1xyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5NYW4gPSBjYy5maW5kKFwibk1hblwiLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5NYW5HTywgdGhpcy5tYW5HTylcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuTWFuU3RvcCwgdGhpcy5tYW5TdG9wKVxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5NYW5Ta2lwLCB0aGlzLm1hblNraXApXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoR2FtZUV2ZW50LlNldE1vZGVsLCB0aGlzLnNldEdhbWVNb2RsZSlcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuU2V0TWFuU3RhdGUsIHRoaXMuc2V0TWFuU3RhdGUpO1xyXG4gICAgICAgIHRoaXMubm93U3RhdGlvbiA9IDBcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLmlzQXJyaXZhbCA9IHRydWVcclxuICAgICAgICB0aGlzLmlzRW5kID0gZmFsc2VcclxuICAgICAgICB0aGlzLmlzV2FpdFNpbmduYWxMaW5naHQgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50TW5nLmVtaXQoR2FtZUV2ZW50LlNlbmRNb2RlbCwgR2FtZUV2ZW50LlNldE1vZGVsKVxyXG5cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2FuR28pIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB4ID0gKGR0ICogdGhpcy54U3BlZWQgKiB0aGlzLm1hblNwZWVkKSAqIHRoaXMuZGlyZWN0aW9uWFxyXG4gICAgICAgICAgICBsZXQgeSA9IChkdCAqIHRoaXMueVNwZWVkICogdGhpcy5tYW5TcGVlZCkgKiB0aGlzLmRpcmVjdGlvbllcclxuXHJcbiAgICAgICAgICAgIHggPSBNeU1hdGguYWRkKHRoaXMubk1hbi54LCB4KVxyXG4gICAgICAgICAgICB5ID0gTXlNYXRoLmFkZCh0aGlzLm5NYW4ueSwgeSlcclxuICAgICAgICAgICAgdGhpcy5uTWFuLnNldFBvc2l0aW9uKHgsIHkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1goeCkgJiYgdGhpcy5jaGVja1koeSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2tpcEdvUG9zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Fycml2YWwgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BHbygpO1xyXG4gICAgICAgICAgICAgICAgRXZlbnRNbmcuZW1pdChHYW1lRXZlbnQuR2V0U3RhdGlvbiwgdGhpcy5ub3dTdGF0aW9uKVxyXG4gICAgICAgICAgICAgICAgRXZlbnRNbmcuZW1pdChHYW1lRXZlbnQuVUlHZXRTdGF0aW9uLCB0aGlzLm5vd1N0YXRpb24pXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub3dTdGF0aW9uID09IDgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXZlRXhjZXB0aW9uKClcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubWFuU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hblN0b3AoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuU2hvd0VuZEdhbWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrU3RhdGlvblN0b3AoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hblN0YXRlID09IEdhbWVTdGF0ZS5TdGFydCB8fCB0aGlzLm1hblN0YXRlID09IEdhbWVTdGF0ZS5Ta2lwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hbkdPKClcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuVXBkYXRhVUlTdGFydCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtYW5HTygpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIumWi+Wni+i1sOWbiVwiLCB0aGlzLmlzQ2FuR28pO1xyXG4gICAgICAgIGlmICh0aGlzLmlzV2FpdFNpbmduYWxMaW5naHQpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIGlmICh0aGlzLm1hblN0YXRlID09IEdhbWVTdGF0ZS5TaG93TWVzc2FnZSkgcmV0dXJuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNBcnJpdmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNtb290aFNwZWVkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TmV4dFBvc2l0aW9uKHRoaXMuZ2FtZU1vZGxlLnBhdGhQb3NpdGlvbkRhdGEuZ2V0KHRoaXMubm93U3RhdGlvbikpO1xyXG4gICAgICAgICAgICB0aGlzLmlzQXJyaXZhbCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jaGVja1NpZ25hbExpZ2h0KCkgJiYgIXRoaXMuaXNXYWl0U2luZ25hbExpbmdodCkge1xyXG4gICAgICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLldhaXRTaWduYWxMaWdodClcclxuICAgICAgICAgICAgdGhpcy5pc1dhaXRTaW5nbmFsTGluZ2h0ID0gdHJ1ZVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgTXVzY2lNbmcuc2luZ2xlRWZmZWN0UGxheShcIlRyYWluR29pbmdcIiwgdHJ1ZSlcclxuICAgICAgICB0aGlzLnNldE1hblN0YXRlKEdhbWVTdGF0ZS5TdGFydClcclxuICAgICAgICB0aGlzLnN0YXJ0R08oKTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLplovlp4votbDlm4lcIiwgdGhpcy5pc0NhbkdvKTtcclxuICAgIH1cclxuICAgIG1hbkVuZFNpZ25hbExpZ2h0KCkge1xyXG4gICAgICAgIHRoaXMuaXNXYWl0U2luZ25hbExpbmdodCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zZXRNYW5TdGF0ZShHYW1lU3RhdGUuU3RhcnQpXHJcbiAgICAgICAgdGhpcy5zdGFydEdPKCk7XHJcbiAgICAgICAgTXVzY2lNbmcuc2luZ2xlRWZmZWN0UGxheShcIlRyYWluR29pbmdcIiwgdHJ1ZSlcclxuICAgIH1cclxuICAgIG1hbkxpbmVXYWl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzV2FpdFNpbmduYWxMaW5naHQpIHJldHVyblxyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFN0b3AoXCJUcmFpbkdvaW5nXCIpXHJcbiAgICAgICAgdGhpcy5zZXRNYW5TdGF0ZShHYW1lU3RhdGUuV2FpdClcclxuICAgICAgICB0aGlzLnN0b3BHbygpO1xyXG4gICAgfVxyXG4gICAgbWFuV2FpdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1dhaXRTaW5nbmFsTGluZ2h0KSByZXR1cm5cclxuICAgICAgICBNdXNjaU1uZy5lZmZlY3RTdG9wKFwiVHJhaW5Hb2luZ1wiKVxyXG4gICAgICAgIHRoaXMuc2V0TWFuU3RhdGUoR2FtZVN0YXRlLldhaXQpXHJcbiAgICB9XHJcbiAgICBtYW5TdG9wKCkge1xyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFN0b3AoXCJUcmFpbkdvaW5nXCIpXHJcbiAgICAgICAgdGhpcy5zZXRNYW5TdGF0ZShHYW1lU3RhdGUuU3RvcClcclxuICAgICAgICB0aGlzLnN0b3BHbygpO1xyXG4gICAgfVxyXG4gICAgbWFuU2tpcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1dhaXRTaW5nbmFsTGluZ2h0KSByZXR1cm5cclxuICAgICAgICBpZiAoIXRoaXMuaXNDYW5HbykgdGhpcy5zdGFydEdPKCk7XHJcbiAgICAgICAgdGhpcy5tYW5TcGVlZCA9IHRoaXMubWFuU2tpcFNlZWQ7XHJcbiAgICAgICAgdGhpcy5zZXRNYW5TdGF0ZShHYW1lU3RhdGUuU2tpcClcclxuICAgIH1cclxuICAgIHNldFN0YXRpb24obnVtOiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgdGhpcy5ub3dTdGF0aW9uICs9IG51bTtcclxuICAgICAgICBpZiAodGhpcy5ub3dTdGF0aW9uID4gMjApIHtcclxuICAgICAgICAgICAgdGhpcy5ub3dTdGF0aW9uID0gMFxyXG4gICAgICAgICAgICB0aGlzLmlzRW5kID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXROZXh0UG9zaXRpb24oX3BvczogY2MuVmVjMikge1xyXG4gICAgICAgIGxldCBjaGFuZ2VQb3NpdGlvbjogY2MuVmVjMyA9IHRoaXMuZ2FtZU1vZGxlLmNvbnZlcnRPdGhlck5vZGVTcGFjZUFSKHRoaXMuZ2FtZU1vZGxlLm1hcEl0ZW0uZ2V0KHRoaXMubm93U3RhdGlvbikubm9kZSwgdGhpcy5ub2RlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjaGFuZ2VQb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMudGFyZ2V0WCA9IE15TWF0aC5yb3VuZChjaGFuZ2VQb3NpdGlvbi54LCAzKTtcclxuICAgICAgICB0aGlzLnRhcmdldFkgPSBNeU1hdGgucm91bmQoY2hhbmdlUG9zaXRpb24ueSwgMyk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGFyZ2V0WCwgdGhpcy50YXJnZXRZKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5NYW4ueCwgdGhpcy5uTWFuLnkpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25YID0gdGhpcy50YXJnZXRYID4gdGhpcy5uTWFuLnggPyAxIDogLTFcclxuICAgICAgICB0aGlzLmRpcmVjdGlvblkgPSB0aGlzLnRhcmdldFkgPiB0aGlzLm5NYW4ueSA/IDEgOiAtMVxyXG4gICAgfVxyXG4gICAgc2tpcEdvUG9zaXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5uTWFuLnNldFBvc2l0aW9uKHRoaXMudGFyZ2V0WCwgdGhpcy50YXJnZXRZKTtcclxuICAgIH1cclxuXHJcbiAgICBzbW9vdGhTcGVlZCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5nYW1lTW9kbGUuY29udmVydE90aGVyTm9kZVNwYWNlQVIodGhpcy5nYW1lTW9kbGUubWFwSXRlbS5nZXQodGhpcy5ub3dTdGF0aW9uKS5ub2RlLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIGxldCBtYW4gPSB0aGlzLm5NYW4uZ2V0UG9zaXRpb24oKVxyXG5cclxuICAgICAgICAvL+ioiOeul+WFqem7nuS5i+mWk+i3nembolxyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IHBvcy5zdWJTZWxmKGNjLnYzKG1hbi54LCBtYW4ueSkpXHJcblxyXG4gICAgICAgIC8v6KiI566X57WV5bCN5YC8XHJcbiAgICAgICAgbGV0IGFic1ggPSBNYXRoLmFicyhkaXN0YW5jZS54KVxyXG4gICAgICAgIGxldCBhYnNZID0gTWF0aC5hYnMoZGlzdGFuY2UueSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhYnNYLCBhYnNZKTtcclxuXHJcbiAgICAgICAgLy/plovlp4vnlaLmsI/lrprnkIZ+fn5+XHJcblxyXG4gICAgICAgIC8v6KiI566X5ZCR6YeP6Led6ZuiKOaWnOmCiikgdmVjdG9yRGlzdGFuY2U95ZCR6YeP6Led6ZuiXHJcbiAgICAgICAgbGV0IHZlY3RvckRpc3RhbmNlID0gTWF0aC5zcXJ0KE1hdGgucG93KGFic1gsIDIpICsgTWF0aC5wb3coYWJzWSwgMikpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWJzWCAvIHZlY3RvckRpc3RhbmNlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhYnNZIC8gdmVjdG9yRGlzdGFuY2UpO1xyXG4gICAgICAgIC8vKOWQkemHj+WWrumCiui3nemboiAvIOWQkemHj+i3nemboikgKiDnp7vli5XpgJ/njodcclxuICAgICAgICB0aGlzLnhTcGVlZCA9IChhYnNYIC8gdmVjdG9yRGlzdGFuY2UpO1xyXG4gICAgICAgIHRoaXMueVNwZWVkID0gKGFic1kgLyB2ZWN0b3JEaXN0YW5jZSk7XHJcbiAgICB9XHJcbiAgICBzZXRNYW5TdGF0ZShfc3RhdGU6IEdhbWVTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMubWFuU3RhdGUgPSBfc3RhdGU7XHJcbiAgICAgICAgLy8gc3dpdGNoIChfc3RhdGUpIHtcclxuICAgICAgICAvLyAgICAgY2FzZSBHYW1lU3RhdGUuU3RhcnQ6XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm1hblN0YXRlID0gR2FtZVN0YXRlLlN0YXJ0O1xyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlIEdhbWVTdGF0ZS5XYWl0OlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMubWFuU3RhdGUgPSBHYW1lU3RhdGUuV2FpdDtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIHNldE1hblNwcml0ZShfc3ByaXRlOiBjYy5TcHJpdGVGcmFtZSkge1xyXG4gICAgICAgIHRoaXMubk1hbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IF9zcHJpdGVcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Zue5Yiw5Y6f6bueXHJcbiAgICAgKi9cclxuICAgIHJlc2V0T2VnKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0aW9uKDApO1xyXG4gICAgICAgIHRoaXMuc2V0TmV4dFBvc2l0aW9uKHRoaXMuZ2FtZU1vZGxlLnBhdGhQb3NpdGlvbkRhdGEuZ2V0KHRoaXMubm93U3RhdGlvbikpO1xyXG4gICAgICAgIHRoaXMuc2tpcEdvUG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLm1hblN0YXRlID0gR2FtZVN0YXRlLlN0b3A7XHJcbiAgICAgICAgdGhpcy5tYW5TcGVlZCA9IHRoaXMubWFuRGVmYXVsdFNwZWVkO1xyXG4gICAgICAgIHRoaXMuc3RvcEdvKClcclxuICAgIH1cclxuICAgIGNoZWNrWCh4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgbm93WCA9IE15TWF0aC5yb3VuZCh4LCAzKTtcclxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25YID4gMClcclxuICAgICAgICAgICAgcmV0dXJuIG5vd1ggPiB0aGlzLnRhcmdldFggPyB0cnVlIDogZmFsc2VcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBub3dYIDwgdGhpcy50YXJnZXRYID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBjaGVja1koeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IG5vd1kgPSBNeU1hdGgucm91bmQoeSwgMyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uWSA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiBub3dZID4gdGhpcy50YXJnZXRZID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbm93WSA8IHRoaXMudGFyZ2V0WSA/IHRydWUgOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY2hlY2tTdGF0aW9uU3RvcCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5ub3dTdGF0aW9uID09IDUgfHxcclxuICAgICAgICAgICAgdGhpcy5ub3dTdGF0aW9uID09IDExIHx8XHJcbiAgICAgICAgICAgIHRoaXMubm93U3RhdGlvbiA9PSAxNSB8fFxyXG4gICAgICAgICAgICB0aGlzLm5vd1N0YXRpb24gPT0gMSB8fFxyXG4gICAgICAgICAgICB0aGlzLm5vd1N0YXRpb24gPT0gMjAgfHxcclxuICAgICAgICAgICAgdGhpcy5ub3dTdGF0aW9uID09IDIxXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEdvKClcclxuICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5VcGRhdGFVSVN0YXJ0LCBmYWxzZSlcclxuICAgICAgICAgICAgdGhpcy5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5TdG9wXHJcbiAgICAgICAgICAgIHRoaXMubWFuU3BlZWQgPSB0aGlzLm1hbkRlZmF1bHRTcGVlZDtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLm5vd1N0YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE1OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuU2hvd1FBKVxyXG4gICAgICAgICAgICAgICAgICAgIC8v5YKz6YGe6KiK5oGv6ZaL5ZWfUUHoppbnqpdcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGNhc2UgMjA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5TaG93VmlkZW8pXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lgrPpgZ5TaG935b2x54mH6KiK5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDIxOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuU2hvd0VuZEdhbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuICAgIGNhdmVFeGNlcHRpb24oKSB7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9CR1wiKS5zZXRTaWJsaW5nSW5kZXgodGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpIC0gMSlcclxuICAgIH1cclxuICAgIGNoZWNrU2lnbmFsTGlnaHQoKSB7Ly/lm6Dngrrpg73mnIPlhYjoqIjnrpfkuIvkuIDlgIvot6/nmoTpu57vvIzlm6DmraTpg73mnIPlhYgrMe+8jOeCuuS6huW+gOWbnuaOqOmcgOS4jemcgOimgeWBnOatouWwseimgS0xXHJcbiAgICAgICAgbGV0IHRyeUdldCA9IHRoaXMubm93U3RhdGlvbiAtIDFcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuioiOeul+aVuOWtl++8mlwiICsgdHJ5R2V0KTtcclxuICAgICAgICBpZiAodGhpcy5XYWl0QXJyYXlbMF0gPT0gdHJ5R2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuV2FpdEFycmF5LnNoaWZ0KClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ==