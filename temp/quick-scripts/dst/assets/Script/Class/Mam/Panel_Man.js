
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
                console.log(this.manState);
                if (this.isEnd) {
                    this.manStop();
                    this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.ShowEndGame);
                }
                if (this.manState == GameState_1.GameState.Start || this.manState == GameState_1.GameState.Skip) {
                    if (!this.checkStationStop()) {
                        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.UpdataUIStart, true);
                        this.manGO();
                    }
                    else
                        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.UpdataUIStart, false);
                }
                else {
                    this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.UpdataUIStart, false);
                    this.manState = GameState_1.GameState.Stop;
                }
            }
        }
    };
    Panel_Man.prototype.manGO = function () {
        console.log("開始走囉", this.isCanGo);
        if (!this.isArrival)
            this.startGO();
        else {
            this.setStation();
            this.smoothSpeed();
            this.setNextPosition(this.gameModle.pathPositionData.get(this.nowStation));
            this.setManState(GameState_1.GameState.Start);
            this.isArrival = false;
            this.startGO();
        }
        console.log("開始走囉", this.isCanGo);
    };
    Panel_Man.prototype.manLineWait = function () {
        this.setManState(GameState_1.GameState.Wait);
        this.stopGo();
    };
    Panel_Man.prototype.manWait = function () {
        this.setManState(GameState_1.GameState.Wait);
    };
    Panel_Man.prototype.manStop = function () {
        this.setManState(GameState_1.GameState.Stop);
        this.stopGo();
    };
    Panel_Man.prototype.manSkip = function () {
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
        console.log(changePosition);
        this.targetX = MyMath_1.default.round(changePosition.x, 3);
        this.targetY = MyMath_1.default.round(changePosition.y, 3);
        console.log(this.targetX, this.targetY);
        console.log(this.nMan.x, this.nMan.y);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWFtXFxQYW5lbF9NYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsNENBQXVDO0FBQ3ZDLDRDQUE2QztBQUM3QyxrREFBaUQ7QUFDakQsa0RBQWlEO0FBQ2pELGlEQUE0QztBQUM1QywrQ0FBdUM7QUFFdkM7SUFBdUMsNkJBQVM7SUFBaEQ7O0lBK01BLENBQUM7SUE5TWEsMEJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDdEIsQ0FBQztJQUNTLHlCQUFLLEdBQWY7UUFDSSxrQkFBUSxDQUFDLElBQUksQ0FBQyxx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LEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssRUFBRTtvQkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLGlCQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7b0JBQ3pELFlBQVk7b0JBQ1osTUFBTTtnQkFDVixLQUFLLEVBQUU7b0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxpQkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFBO29CQUMzRCxNQUFNO2FBQ2I7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNmOztZQUVHLE9BQU8sS0FBSyxDQUFDO0lBRXJCLENBQUM7SUFDTCxnQkFBQztBQUFELENBL01BLEFBK01DLENBL01zQyxzQkFBUyxHQStNL0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCBNeU1hdGggZnJvbSBcIi4uLy4uL0RhdGEvTXlNYXRoXCI7XHJcbmltcG9ydCB7IENvbW1hbW5kIH0gZnJvbSBcIi4uLy4uL0VudW0vQ29tbWFkXCI7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gXCIuLi8uLi9FbnVtL0dhbWVFdmVudFwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi4vLi4vRW51bS9HYW1lU3RhdGVcIjtcclxuaW1wb3J0IEV2ZW50TW5nIGZyb20gXCIuLi8uLi9FdmVudC9FdmVudE1uZ1wiO1xyXG5pbXBvcnQgTWFuQWN0aW9uIGZyb20gXCIuL01hbkFuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxfTWFuIGV4dGVuZHMgTWFuQWN0aW9uIHtcclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5uTWFuID0gY2MuZmluZChcIm5NYW5cIiwgdGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuTWFuR08sIHRoaXMubWFuR08pXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoR2FtZUV2ZW50Lk1hblN0b3AsIHRoaXMubWFuU3RvcClcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuTWFuU2tpcCwgdGhpcy5tYW5Ta2lwKVxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5TZXRNb2RlbCwgdGhpcy5zZXRHYW1lTW9kbGUpXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoR2FtZUV2ZW50LlNldE1hblN0YXRlLCB0aGlzLnNldE1hblN0YXRlKTtcclxuICAgICAgICB0aGlzLm5vd1N0YXRpb24gPSAwXHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgdGhpcy5pc0Fycml2YWwgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5pc0VuZCA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRNbmcuZW1pdChHYW1lRXZlbnQuU2VuZE1vZGVsLCBHYW1lRXZlbnQuU2V0TW9kZWwpXHJcblxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDYW5Hbykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHggPSAoZHQgKiB0aGlzLnhTcGVlZCAqIHRoaXMubWFuU3BlZWQpICogdGhpcy5kaXJlY3Rpb25YXHJcbiAgICAgICAgICAgIGxldCB5ID0gKGR0ICogdGhpcy55U3BlZWQgKiB0aGlzLm1hblNwZWVkKSAqIHRoaXMuZGlyZWN0aW9uWVxyXG5cclxuICAgICAgICAgICAgeCA9IE15TWF0aC5hZGQodGhpcy5uTWFuLngsIHgpXHJcbiAgICAgICAgICAgIHkgPSBNeU1hdGguYWRkKHRoaXMubk1hbi55LCB5KVxyXG4gICAgICAgICAgICB0aGlzLm5NYW4uc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrWCh4KSAmJiB0aGlzLmNoZWNrWSh5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5za2lwR29Qb3NpdGlvbigpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQXJyaXZhbCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEdvKCk7XHJcbiAgICAgICAgICAgICAgICBFdmVudE1uZy5lbWl0KEdhbWVFdmVudC5HZXRTdGF0aW9uLCB0aGlzLm5vd1N0YXRpb24pXHJcbiAgICAgICAgICAgICAgICBFdmVudE1uZy5lbWl0KEdhbWVFdmVudC5VSUdldFN0YXRpb24sIHRoaXMubm93U3RhdGlvbilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWFuU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hblN0b3AoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuU2hvd0VuZEdhbWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWFuU3RhdGUgPT0gR2FtZVN0YXRlLlN0YXJ0IHx8IHRoaXMubWFuU3RhdGUgPT0gR2FtZVN0YXRlLlNraXApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tTdGF0aW9uU3RvcCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuVXBkYXRhVUlTdGFydCwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW5HTygpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5VcGRhdGFVSVN0YXJ0LCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuVXBkYXRhVUlTdGFydCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5TdG9wXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtYW5HTygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIumWi+Wni+i1sOWbiVwiLCB0aGlzLmlzQ2FuR28pO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNBcnJpdmFsKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0R08oKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc21vb3RoU3BlZWQoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXROZXh0UG9zaXRpb24odGhpcy5nYW1lTW9kbGUucGF0aFBvc2l0aW9uRGF0YS5nZXQodGhpcy5ub3dTdGF0aW9uKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TWFuU3RhdGUoR2FtZVN0YXRlLlN0YXJ0KVxyXG4gICAgICAgICAgICB0aGlzLmlzQXJyaXZhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0R08oKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIumWi+Wni+i1sOWbiVwiLCB0aGlzLmlzQ2FuR28pO1xyXG4gICAgfVxyXG4gICAgbWFuTGluZVdhaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRNYW5TdGF0ZShHYW1lU3RhdGUuV2FpdClcclxuICAgICAgICB0aGlzLnN0b3BHbygpO1xyXG4gICAgfVxyXG4gICAgbWFuV2FpdCgpIHtcclxuICAgICAgICB0aGlzLnNldE1hblN0YXRlKEdhbWVTdGF0ZS5XYWl0KVxyXG4gICAgfVxyXG4gICAgbWFuU3RvcCgpIHtcclxuICAgICAgICB0aGlzLnNldE1hblN0YXRlKEdhbWVTdGF0ZS5TdG9wKVxyXG4gICAgICAgIHRoaXMuc3RvcEdvKCk7XHJcbiAgICB9XHJcbiAgICBtYW5Ta2lwKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0NhbkdvKSB0aGlzLnN0YXJ0R08oKTtcclxuICAgICAgICB0aGlzLm1hblNwZWVkID0gdGhpcy5tYW5Ta2lwU2VlZDtcclxuICAgICAgICB0aGlzLnNldE1hblN0YXRlKEdhbWVTdGF0ZS5Ta2lwKVxyXG4gICAgfVxyXG4gICAgc2V0U3RhdGlvbihudW06IG51bWJlciA9IDEpIHtcclxuICAgICAgICB0aGlzLm5vd1N0YXRpb24gKz0gbnVtO1xyXG4gICAgICAgIGlmICh0aGlzLm5vd1N0YXRpb24gPiAyMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vd1N0YXRpb24gPSAwXHJcbiAgICAgICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldE5leHRQb3NpdGlvbihfcG9zOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgbGV0IGNoYW5nZVBvc2l0aW9uOiBjYy5WZWMzID0gdGhpcy5nYW1lTW9kbGUuY29udmVydE90aGVyTm9kZVNwYWNlQVIodGhpcy5nYW1lTW9kbGUubWFwSXRlbS5nZXQodGhpcy5ub3dTdGF0aW9uKS5ub2RlLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoYW5nZVBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXRYID0gTXlNYXRoLnJvdW5kKGNoYW5nZVBvc2l0aW9uLngsIDMpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0WSA9IE15TWF0aC5yb3VuZChjaGFuZ2VQb3NpdGlvbi55LCAzKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50YXJnZXRYLCB0aGlzLnRhcmdldFkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubk1hbi54LCB0aGlzLm5NYW4ueSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGlvblggPSB0aGlzLnRhcmdldFggPiB0aGlzLm5NYW4ueCA/IDEgOiAtMVxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uWSA9IHRoaXMudGFyZ2V0WSA+IHRoaXMubk1hbi55ID8gMSA6IC0xXHJcbiAgICB9XHJcbiAgICBza2lwR29Qb3NpdGlvbigpIHtcclxuICAgICAgICB0aGlzLm5NYW4uc2V0UG9zaXRpb24odGhpcy50YXJnZXRYLCB0aGlzLnRhcmdldFkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNtb290aFNwZWVkKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmdhbWVNb2RsZS5jb252ZXJ0T3RoZXJOb2RlU3BhY2VBUih0aGlzLmdhbWVNb2RsZS5tYXBJdGVtLmdldCh0aGlzLm5vd1N0YXRpb24pLm5vZGUsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgbGV0IG1hbiA9IHRoaXMubk1hbi5nZXRQb3NpdGlvbigpXHJcblxyXG4gICAgICAgIC8v6KiI566X5YWp6bue5LmL6ZaT6Led6ZuiXHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gcG9zLnN1YlNlbGYoY2MudjMobWFuLngsIG1hbi55KSlcclxuXHJcbiAgICAgICAgLy/oqIjnrpfntZXlsI3lgLxcclxuICAgICAgICBsZXQgYWJzWCA9IE1hdGguYWJzKGRpc3RhbmNlLngpXHJcbiAgICAgICAgbGV0IGFic1kgPSBNYXRoLmFicyhkaXN0YW5jZS55KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFic1gsIGFic1kpO1xyXG5cclxuICAgICAgICAvL+mWi+Wni+eVouawj+WumueQhn5+fn5cclxuXHJcbiAgICAgICAgLy/oqIjnrpflkJHph4/ot53pm6Io5pac6YKKKSB2ZWN0b3JEaXN0YW5jZT3lkJHph4/ot53pm6JcclxuICAgICAgICBsZXQgdmVjdG9yRGlzdGFuY2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coYWJzWCwgMikgKyBNYXRoLnBvdyhhYnNZLCAyKSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhYnNYIC8gdmVjdG9yRGlzdGFuY2UpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFic1kgLyB2ZWN0b3JEaXN0YW5jZSk7XHJcbiAgICAgICAgLy8o5ZCR6YeP5Zau6YKK6Led6ZuiIC8g5ZCR6YeP6Led6ZuiKSAqIOenu+WLlemAn+eOh1xyXG4gICAgICAgIHRoaXMueFNwZWVkID0gKGFic1ggLyB2ZWN0b3JEaXN0YW5jZSk7XHJcbiAgICAgICAgdGhpcy55U3BlZWQgPSAoYWJzWSAvIHZlY3RvckRpc3RhbmNlKTtcclxuICAgIH1cclxuICAgIHNldE1hblN0YXRlKF9zdGF0ZTogR2FtZVN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5tYW5TdGF0ZSA9IF9zdGF0ZTtcclxuICAgICAgICAvLyBzd2l0Y2ggKF9zdGF0ZSkge1xyXG4gICAgICAgIC8vICAgICBjYXNlIEdhbWVTdGF0ZS5TdGFydDpcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubWFuU3RhdGUgPSBHYW1lU3RhdGUuU3RhcnQ7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgR2FtZVN0YXRlLldhaXQ6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5XYWl0O1xyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgc2V0TWFuU3ByaXRlKF9zcHJpdGU6IGNjLlNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uTWFuLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gX3Nwcml0ZVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlm57liLDljp/pu55cclxuICAgICAqL1xyXG4gICAgcmVzZXRPZWcoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTVcclxuICAgICAgICB0aGlzLnNldFN0YXRpb24oMCk7XHJcbiAgICAgICAgdGhpcy5zZXROZXh0UG9zaXRpb24odGhpcy5nYW1lTW9kbGUucGF0aFBvc2l0aW9uRGF0YS5nZXQodGhpcy5ub3dTdGF0aW9uKSk7XHJcbiAgICAgICAgdGhpcy5za2lwR29Qb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMubWFuU3RhdGUgPSBHYW1lU3RhdGUuU3RvcDtcclxuICAgICAgICB0aGlzLm1hblNwZWVkID0gdGhpcy5tYW5EZWZhdWx0U3BlZWQ7XHJcbiAgICAgICAgdGhpcy5zdG9wR28oKVxyXG4gICAgfVxyXG4gICAgY2hlY2tYKHg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBub3dYID0gTXlNYXRoLnJvdW5kKHgsIDMpO1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblggPiAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbm93WCA+IHRoaXMudGFyZ2V0WCA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG5vd1ggPCB0aGlzLnRhcmdldFggPyB0cnVlIDogZmFsc2VcclxuICAgIH1cclxuICAgIGNoZWNrWSh5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgbm93WSA9IE15TWF0aC5yb3VuZCh5LCAzKTtcclxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25ZID4gMClcclxuICAgICAgICAgICAgcmV0dXJuIG5vd1kgPiB0aGlzLnRhcmdldFkgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBub3dZIDwgdGhpcy50YXJnZXRZID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBjaGVja1N0YXRpb25TdG9wKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLm5vd1N0YXRpb24gPT0gNSB8fFxyXG4gICAgICAgICAgICB0aGlzLm5vd1N0YXRpb24gPT0gMTEgfHxcclxuICAgICAgICAgICAgdGhpcy5ub3dTdGF0aW9uID09IDE1IHx8XHJcbiAgICAgICAgICAgIHRoaXMubm93U3RhdGlvbiA9PSAxIHx8XHJcbiAgICAgICAgICAgIHRoaXMubm93U3RhdGlvbiA9PSAyMCB8fFxyXG4gICAgICAgICAgICB0aGlzLm5vd1N0YXRpb24gPT0gMjFcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wR28oKVxyXG4gICAgICAgICAgICB0aGlzLm1hblN0YXRlID0gR2FtZVN0YXRlLlN0b3BcclxuICAgICAgICAgICAgdGhpcy5tYW5TcGVlZCA9IHRoaXMubWFuRGVmYXVsdFNwZWVkO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMubm93U3RhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgIGNhc2UgMTU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5TaG93UUEpXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lgrPpgZ7oqIrmga/plovllZ9RQeimlueql1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAyMDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLlNob3dWaWRlbylcclxuICAgICAgICAgICAgICAgICAgICAvL+WCs+mBnlNob3flvbHniYfoqIrmga9cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjE6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5TaG93RW5kR2FtZSlcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19