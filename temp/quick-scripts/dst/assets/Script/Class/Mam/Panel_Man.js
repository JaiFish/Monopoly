
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
        this.setManState(GameState_1.GameState.Start);
        this.startGO();
        // console.log("開始走囉", this.isCanGo);
    };
    Panel_Man.prototype.manEndSignalLight = function () {
        this.isWaitSingnalLinght = false;
        this.setManState(GameState_1.GameState.Start);
        this.startGO();
    };
    Panel_Man.prototype.manLineWait = function () {
        if (this.isWaitSingnalLinght)
            return;
        this.setManState(GameState_1.GameState.Wait);
        this.stopGo();
    };
    Panel_Man.prototype.manWait = function () {
        if (this.isWaitSingnalLinght)
            return;
        this.setManState(GameState_1.GameState.Wait);
    };
    Panel_Man.prototype.manStop = function () {
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
        console.log("計算數字：" + tryGet);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWFtXFxQYW5lbF9NYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsNENBQXVDO0FBQ3ZDLDRDQUE2QztBQUM3QyxrREFBaUQ7QUFDakQsa0RBQWlEO0FBQ2pELGlEQUE0QztBQUM1QywrQ0FBdUM7QUFFdkM7SUFBdUMsNkJBQVM7SUFBaEQ7O0lBcU9BLENBQUM7SUFwT2EsMEJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQTtJQUNwQyxDQUFDO0lBQ1Ms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R0FxTy9DIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgTXlNYXRoIGZyb20gXCIuLi8uLi9EYXRhL015TWF0aFwiO1xyXG5pbXBvcnQgeyBDb21tYW1uZCB9IGZyb20gXCIuLi8uLi9FbnVtL0NvbW1hZFwiO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tIFwiLi4vLi4vRW51bS9HYW1lRXZlbnRcIjtcclxuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4uLy4uL0VudW0vR2FtZVN0YXRlXCI7XHJcbmltcG9ydCBFdmVudE1uZyBmcm9tIFwiLi4vLi4vRXZlbnQvRXZlbnRNbmdcIjtcclxuaW1wb3J0IE1hbkFjdGlvbiBmcm9tIFwiLi9NYW5BbmltYXRpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsX01hbiBleHRlbmRzIE1hbkFjdGlvbiB7XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubk1hbiA9IGNjLmZpbmQoXCJuTWFuXCIsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoR2FtZUV2ZW50Lk1hbkdPLCB0aGlzLm1hbkdPKVxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5NYW5TdG9wLCB0aGlzLm1hblN0b3ApXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoR2FtZUV2ZW50Lk1hblNraXAsIHRoaXMubWFuU2tpcClcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuU2V0TW9kZWwsIHRoaXMuc2V0R2FtZU1vZGxlKVxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5TZXRNYW5TdGF0ZSwgdGhpcy5zZXRNYW5TdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5ub3dTdGF0aW9uID0gMFxyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMFxyXG4gICAgICAgIHRoaXMuaXNBcnJpdmFsID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuaXNFbmQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNXYWl0U2luZ25hbExpbmdodCA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRNbmcuZW1pdChHYW1lRXZlbnQuU2VuZE1vZGVsLCBHYW1lRXZlbnQuU2V0TW9kZWwpXHJcblxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDYW5Hbykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHggPSAoZHQgKiB0aGlzLnhTcGVlZCAqIHRoaXMubWFuU3BlZWQpICogdGhpcy5kaXJlY3Rpb25YXHJcbiAgICAgICAgICAgIGxldCB5ID0gKGR0ICogdGhpcy55U3BlZWQgKiB0aGlzLm1hblNwZWVkKSAqIHRoaXMuZGlyZWN0aW9uWVxyXG5cclxuICAgICAgICAgICAgeCA9IE15TWF0aC5hZGQodGhpcy5uTWFuLngsIHgpXHJcbiAgICAgICAgICAgIHkgPSBNeU1hdGguYWRkKHRoaXMubk1hbi55LCB5KVxyXG4gICAgICAgICAgICB0aGlzLm5NYW4uc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrWCh4KSAmJiB0aGlzLmNoZWNrWSh5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5za2lwR29Qb3NpdGlvbigpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQXJyaXZhbCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEdvKCk7XHJcbiAgICAgICAgICAgICAgICBFdmVudE1uZy5lbWl0KEdhbWVFdmVudC5HZXRTdGF0aW9uLCB0aGlzLm5vd1N0YXRpb24pXHJcbiAgICAgICAgICAgICAgICBFdmVudE1uZy5lbWl0KEdhbWVFdmVudC5VSUdldFN0YXRpb24sIHRoaXMubm93U3RhdGlvbilcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vd1N0YXRpb24gPT0gOClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhdmVFeGNlcHRpb24oKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tYW5TdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFuU3RvcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5TaG93RW5kR2FtZSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tTdGF0aW9uU3RvcCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFuU3RhdGUgPT0gR2FtZVN0YXRlLlN0YXJ0IHx8IHRoaXMubWFuU3RhdGUgPT0gR2FtZVN0YXRlLlNraXApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFuR08oKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5VcGRhdGFVSVN0YXJ0LCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1hbkdPKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6ZaL5aeL6LWw5ZuJXCIsIHRoaXMuaXNDYW5Hbyk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNXYWl0U2luZ25hbExpbmdodClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgaWYgKHRoaXMubWFuU3RhdGUgPT0gR2FtZVN0YXRlLlNob3dNZXNzYWdlKSByZXR1cm5cclxuICAgICAgICBpZiAodGhpcy5pc0Fycml2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc21vb3RoU3BlZWQoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXROZXh0UG9zaXRpb24odGhpcy5nYW1lTW9kbGUucGF0aFBvc2l0aW9uRGF0YS5nZXQodGhpcy5ub3dTdGF0aW9uKSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBcnJpdmFsID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrU2lnbmFsTGlnaHQoKSAmJiAhdGhpcy5pc1dhaXRTaW5nbmFsTGluZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuV2FpdFNpZ25hbExpZ2h0KVxyXG4gICAgICAgICAgICB0aGlzLmlzV2FpdFNpbmduYWxMaW5naHQgPSB0cnVlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldE1hblN0YXRlKEdhbWVTdGF0ZS5TdGFydClcclxuICAgICAgICB0aGlzLnN0YXJ0R08oKTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLplovlp4votbDlm4lcIiwgdGhpcy5pc0NhbkdvKTtcclxuICAgIH1cclxuICAgIG1hbkVuZFNpZ25hbExpZ2h0KCkge1xyXG4gICAgICAgIHRoaXMuaXNXYWl0U2luZ25hbExpbmdodCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zZXRNYW5TdGF0ZShHYW1lU3RhdGUuU3RhcnQpXHJcbiAgICAgICAgdGhpcy5zdGFydEdPKCk7XHJcbiAgICB9XHJcbiAgICBtYW5MaW5lV2FpdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1dhaXRTaW5nbmFsTGluZ2h0KSByZXR1cm5cclxuICAgICAgICB0aGlzLnNldE1hblN0YXRlKEdhbWVTdGF0ZS5XYWl0KVxyXG4gICAgICAgIHRoaXMuc3RvcEdvKCk7XHJcbiAgICB9XHJcbiAgICBtYW5XYWl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzV2FpdFNpbmduYWxMaW5naHQpIHJldHVyblxyXG4gICAgICAgIHRoaXMuc2V0TWFuU3RhdGUoR2FtZVN0YXRlLldhaXQpXHJcbiAgICB9XHJcbiAgICBtYW5TdG9wKCkge1xyXG4gICAgICAgIHRoaXMuc2V0TWFuU3RhdGUoR2FtZVN0YXRlLlN0b3ApXHJcbiAgICAgICAgdGhpcy5zdG9wR28oKTtcclxuICAgIH1cclxuICAgIG1hblNraXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNXYWl0U2luZ25hbExpbmdodCkgcmV0dXJuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2FuR28pIHRoaXMuc3RhcnRHTygpO1xyXG4gICAgICAgIHRoaXMubWFuU3BlZWQgPSB0aGlzLm1hblNraXBTZWVkO1xyXG4gICAgICAgIHRoaXMuc2V0TWFuU3RhdGUoR2FtZVN0YXRlLlNraXApXHJcbiAgICB9XHJcbiAgICBzZXRTdGF0aW9uKG51bTogbnVtYmVyID0gMSkge1xyXG4gICAgICAgIHRoaXMubm93U3RhdGlvbiArPSBudW07XHJcbiAgICAgICAgaWYgKHRoaXMubm93U3RhdGlvbiA+IDIwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm93U3RhdGlvbiA9IDBcclxuICAgICAgICAgICAgdGhpcy5pc0VuZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmV4dFBvc2l0aW9uKF9wb3M6IGNjLlZlYzIpIHtcclxuICAgICAgICBsZXQgY2hhbmdlUG9zaXRpb246IGNjLlZlYzMgPSB0aGlzLmdhbWVNb2RsZS5jb252ZXJ0T3RoZXJOb2RlU3BhY2VBUih0aGlzLmdhbWVNb2RsZS5tYXBJdGVtLmdldCh0aGlzLm5vd1N0YXRpb24pLm5vZGUsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2hhbmdlUG9zaXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLnRhcmdldFggPSBNeU1hdGgucm91bmQoY2hhbmdlUG9zaXRpb24ueCwgMyk7XHJcbiAgICAgICAgdGhpcy50YXJnZXRZID0gTXlNYXRoLnJvdW5kKGNoYW5nZVBvc2l0aW9uLnksIDMpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRhcmdldFgsIHRoaXMudGFyZ2V0WSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5uTWFuLngsIHRoaXMubk1hbi55KTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uWCA9IHRoaXMudGFyZ2V0WCA+IHRoaXMubk1hbi54ID8gMSA6IC0xXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25ZID0gdGhpcy50YXJnZXRZID4gdGhpcy5uTWFuLnkgPyAxIDogLTFcclxuICAgIH1cclxuICAgIHNraXBHb1Bvc2l0aW9uKCkge1xyXG4gICAgICAgIHRoaXMubk1hbi5zZXRQb3NpdGlvbih0aGlzLnRhcmdldFgsIHRoaXMudGFyZ2V0WSk7XHJcbiAgICB9XHJcblxyXG4gICAgc21vb3RoU3BlZWQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2FtZU1vZGxlLmNvbnZlcnRPdGhlck5vZGVTcGFjZUFSKHRoaXMuZ2FtZU1vZGxlLm1hcEl0ZW0uZ2V0KHRoaXMubm93U3RhdGlvbikubm9kZSwgdGhpcy5ub2RlKTtcclxuICAgICAgICBsZXQgbWFuID0gdGhpcy5uTWFuLmdldFBvc2l0aW9uKClcclxuXHJcbiAgICAgICAgLy/oqIjnrpflhanpu57kuYvplpPot53pm6JcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBwb3Muc3ViU2VsZihjYy52MyhtYW4ueCwgbWFuLnkpKVxyXG5cclxuICAgICAgICAvL+ioiOeul+e1leWwjeWAvFxyXG4gICAgICAgIGxldCBhYnNYID0gTWF0aC5hYnMoZGlzdGFuY2UueClcclxuICAgICAgICBsZXQgYWJzWSA9IE1hdGguYWJzKGRpc3RhbmNlLnkpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWJzWCwgYWJzWSk7XHJcblxyXG4gICAgICAgIC8v6ZaL5aeL55Wi5rCP5a6a55CGfn5+flxyXG5cclxuICAgICAgICAvL+ioiOeul+WQkemHj+i3nemboijmlpzpgoopIHZlY3RvckRpc3RhbmNlPeWQkemHj+i3nembolxyXG4gICAgICAgIGxldCB2ZWN0b3JEaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyhhYnNYLCAyKSArIE1hdGgucG93KGFic1ksIDIpKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFic1ggLyB2ZWN0b3JEaXN0YW5jZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWJzWSAvIHZlY3RvckRpc3RhbmNlKTtcclxuICAgICAgICAvLyjlkJHph4/llq7pgorot53pm6IgLyDlkJHph4/ot53pm6IpICog56e75YuV6YCf546HXHJcbiAgICAgICAgdGhpcy54U3BlZWQgPSAoYWJzWCAvIHZlY3RvckRpc3RhbmNlKTtcclxuICAgICAgICB0aGlzLnlTcGVlZCA9IChhYnNZIC8gdmVjdG9yRGlzdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgc2V0TWFuU3RhdGUoX3N0YXRlOiBHYW1lU3RhdGUpIHtcclxuICAgICAgICB0aGlzLm1hblN0YXRlID0gX3N0YXRlO1xyXG4gICAgICAgIC8vIHN3aXRjaCAoX3N0YXRlKSB7XHJcbiAgICAgICAgLy8gICAgIGNhc2UgR2FtZVN0YXRlLlN0YXJ0OlxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5TdGFydDtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBHYW1lU3RhdGUuV2FpdDpcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm1hblN0YXRlID0gR2FtZVN0YXRlLldhaXQ7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBzZXRNYW5TcHJpdGUoX3Nwcml0ZTogY2MuU3ByaXRlRnJhbWUpIHtcclxuICAgICAgICB0aGlzLm5NYW4uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBfc3ByaXRlXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWbnuWIsOWOn+m7nlxyXG4gICAgICovXHJcbiAgICByZXNldE9lZygpIHtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGlvbigwKTtcclxuICAgICAgICB0aGlzLnNldE5leHRQb3NpdGlvbih0aGlzLmdhbWVNb2RsZS5wYXRoUG9zaXRpb25EYXRhLmdldCh0aGlzLm5vd1N0YXRpb24pKTtcclxuICAgICAgICB0aGlzLnNraXBHb1Bvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5TdG9wO1xyXG4gICAgICAgIHRoaXMubWFuU3BlZWQgPSB0aGlzLm1hbkRlZmF1bHRTcGVlZDtcclxuICAgICAgICB0aGlzLnN0b3BHbygpXHJcbiAgICB9XHJcbiAgICBjaGVja1goeDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IG5vd1ggPSBNeU1hdGgucm91bmQoeCwgMyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uWCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiBub3dYID4gdGhpcy50YXJnZXRYID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbm93WCA8IHRoaXMudGFyZ2V0WCA/IHRydWUgOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY2hlY2tZKHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBub3dZID0gTXlNYXRoLnJvdW5kKHksIDMpO1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblkgPiAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbm93WSA+IHRoaXMudGFyZ2V0WSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG5vd1kgPCB0aGlzLnRhcmdldFkgPyB0cnVlIDogZmFsc2VcclxuICAgIH1cclxuICAgIGNoZWNrU3RhdGlvblN0b3AoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMubm93U3RhdGlvbiA9PSA1IHx8XHJcbiAgICAgICAgICAgIHRoaXMubm93U3RhdGlvbiA9PSAxMSB8fFxyXG4gICAgICAgICAgICB0aGlzLm5vd1N0YXRpb24gPT0gMTUgfHxcclxuICAgICAgICAgICAgdGhpcy5ub3dTdGF0aW9uID09IDEgfHxcclxuICAgICAgICAgICAgdGhpcy5ub3dTdGF0aW9uID09IDIwIHx8XHJcbiAgICAgICAgICAgIHRoaXMubm93U3RhdGlvbiA9PSAyMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BHbygpXHJcbiAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuVXBkYXRhVUlTdGFydCwgZmFsc2UpXHJcbiAgICAgICAgICAgIHRoaXMubWFuU3RhdGUgPSBHYW1lU3RhdGUuU3RvcFxyXG4gICAgICAgICAgICB0aGlzLm1hblNwZWVkID0gdGhpcy5tYW5EZWZhdWx0U3BlZWQ7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5ub3dTdGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAxNTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLlNob3dRQSlcclxuICAgICAgICAgICAgICAgICAgICAvL+WCs+mBnuioiuaBr+mWi+WVn1FB6KaW56qXXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDIwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuU2hvd1ZpZGVvKVxyXG4gICAgICAgICAgICAgICAgICAgIC8v5YKz6YGeU2hvd+W9seeJh+ioiuaBr1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyMTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLlNob3dFbmRHYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcbiAgICBjYXZlRXhjZXB0aW9uKCkge1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvQkdcIikuc2V0U2libGluZ0luZGV4KHRoaXMubm9kZS5nZXRTaWJsaW5nSW5kZXgoKSAtIDEpXHJcbiAgICB9XHJcbiAgICBjaGVja1NpZ25hbExpZ2h0KCkgey8v5Zug54K66YO95pyD5YWI6KiI566X5LiL5LiA5YCL6Lev55qE6bue77yM5Zug5q2k6YO95pyD5YWIKzHvvIzngrrkuoblvoDlm57mjqjpnIDkuI3pnIDopoHlgZzmraLlsLHopoEtMVxyXG4gICAgICAgIGxldCB0cnlHZXQgPSB0aGlzLm5vd1N0YXRpb24gLSAxXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLoqIjnrpfmlbjlrZfvvJpcIiArIHRyeUdldCk7XHJcbiAgICAgICAgaWYgKHRoaXMuV2FpdEFycmF5WzBdID09IHRyeUdldCkge1xyXG4gICAgICAgICAgICB0aGlzLldhaXRBcnJheS5zaGlmdCgpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=