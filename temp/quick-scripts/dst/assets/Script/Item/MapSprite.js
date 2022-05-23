
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/MapSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '142fdzx+LBB+Z0RAELmBK7W', 'MapSprite');
// Script/Item/MapSprite.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonMng_1 = require("../Data/base/ButtonMng");
var ComponentBase_1 = require("../Data/base/ComponentBase");
var Commad_1 = require("../Enum/Commad");
var Easing_1 = require("../Enum/Easing");
var GameEvent_1 = require("../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MapSprite = /** @class */ (function (_super) {
    __extends(MapSprite, _super);
    function MapSprite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MapSprite.prototype, "mySprite", {
        get: function () {
            return this._mySprite;
        },
        set: function (v) {
            this._mySprite = v;
        },
        enumerable: false,
        configurable: true
    });
    MapSprite.prototype.onLoad = function () {
        this.mySprite = this.node.getComponent(cc.Sprite);
        this.btn = this.node.getComponent(cc.Button);
        this.btn.target = this.node;
        this.btn.interactable = false;
        this.node.anchorY = 0;
        var getHight = this.node.getContentSize().height;
        this.node.y = this.node.y - (getHight * 0.5);
    };
    MapSprite.prototype.getAction = function () {
        this.node.setScale(0);
        this.isGet = true;
        // console.log(this.type);
        cc.tween(this.node)
            .to(1, { scale: 1 }, { easing: Easing_1.Easing.backOut })
            .call(this.loopShake.bind(this))
            .start();
        if (this.type == 5 ||
            this.type == 11 ||
            this.type == 15)
            return;
        // console.log("我有強化?");
        this.btn.interactable = true;
        ButtonMng_1.default.addEvent(this.node, "MapSprite", "sendEvent", this.btn, this.node.name);
    };
    MapSprite.prototype.sendEvent = function (e, _customEventData) {
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.UpdataUIStart, false);
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.ShowStationInfo, Number(_customEventData));
    };
    MapSprite.prototype.loopShake = function () {
        cc.Tween.stopAllByTarget(this.node);
        this.node.angle = 0;
        var totalTime = 2;
        var setAngle = 15;
        cc.tween(this.node)
            .delay(3)
            .repeatForever(cc.tween()
            .repeat(3, cc.tween()
            .by((totalTime / 4) / 3, { angle: -setAngle })
            .by((totalTime / 4) / 3, { angle: setAngle })
            .by((totalTime / 4) / 3, { angle: setAngle })
            .by((totalTime / 4) / 3, { angle: -setAngle })
            .delay(0.5))
            .delay(6))
            .start();
    };
    MapSprite = __decorate([
        ccclass
    ], MapSprite);
    return MapSprite;
}(ComponentBase_1.default));
exports.default = MapSprite;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxNYXBTcHJpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQStDO0FBQy9DLDREQUF1RDtBQUN2RCx5Q0FBMEM7QUFDMUMseUNBQXdDO0FBQ3hDLCtDQUE4QztBQUN4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBYTtJQUFwRDs7SUFnRUEsQ0FBQztJQTNERyxzQkFBVywrQkFBUTthQUluQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN6QixDQUFDO2FBTkQsVUFBb0IsQ0FBWTtZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUtTLDBCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUE7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFBO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEdB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dXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b25NbmcgZnJvbSAnLi4vRGF0YS9iYXNlL0J1dHRvbk1uZyc7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gJy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlJztcclxuaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tICcuLi9FbnVtL0NvbW1hZCc7XHJcbmltcG9ydCB7IEVhc2luZyB9IGZyb20gJy4uL0VudW0vRWFzaW5nJztcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSAnLi4vRW51bS9HYW1lRXZlbnQnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwU3ByaXRlIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICBpc0dldDogYm9vbGVhbjtcclxuICAgIF9teVNwcml0ZTogY2MuU3ByaXRlO1xyXG4gICAgYnRuOiBjYy5CdXR0b25cclxuICAgIHR5cGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzZXQgbXlTcHJpdGUodjogY2MuU3ByaXRlKSB7XHJcbiAgICAgICAgdGhpcy5fbXlTcHJpdGUgPSB2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbXlTcHJpdGUoKTogY2MuU3ByaXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbXlTcHJpdGVcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5teVNwcml0ZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgIHRoaXMuYnRuID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMuYnRuLnRhcmdldCA9IHRoaXMubm9kZVxyXG4gICAgICAgIHRoaXMuYnRuLmludGVyYWN0YWJsZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ub2RlLmFuY2hvclkgPSAwXHJcbiAgICAgICAgbGV0IGdldEhpZ2h0ID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgPSB0aGlzLm5vZGUueSAtIChnZXRIaWdodCAqIDAuNSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDApXHJcbiAgICAgICAgdGhpcy5pc0dldCA9IHRydWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50eXBlKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8oMSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogRWFzaW5nLmJhY2tPdXQgfSlcclxuICAgICAgICAgICAgLmNhbGwodGhpcy5sb29wU2hha2UuYmluZCh0aGlzKSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICBpZiAodGhpcy50eXBlID09IDUgfHxcclxuICAgICAgICAgICAgdGhpcy50eXBlID09IDExIHx8XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9PSAxNSkgcmV0dXJuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLmiJHmnInlvLfljJY/XCIpO1xyXG4gICAgICAgIHRoaXMuYnRuLmludGVyYWN0YWJsZSA9IHRydWVcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIk1hcFNwcml0ZVwiLCBcInNlbmRFdmVudFwiLCB0aGlzLmJ0biwgdGhpcy5ub2RlLm5hbWUpXHJcblxyXG4gICAgfVxyXG4gICAgc2VuZEV2ZW50KGU6IGNjLkV2ZW50LCBfY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLlVwZGF0YVVJU3RhcnQsIGZhbHNlKVxyXG4gICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuU2hvd1N0YXRpb25JbmZvLCBOdW1iZXIoX2N1c3RvbUV2ZW50RGF0YSkpXHJcbiAgICB9XHJcblxyXG4gICAgbG9vcFNoYWtlKCkge1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gMFxyXG4gICAgICAgIGxldCB0b3RhbFRpbWUgPSAyXHJcbiAgICAgICAgbGV0IHNldEFuZ2xlID0gMTVcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC5kZWxheSgzKVxyXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihjYy50d2VlbigpXHJcbiAgICAgICAgICAgICAgICAucmVwZWF0KDMsIGNjLnR3ZWVuKClcclxuICAgICAgICAgICAgICAgICAgICAuYnkoKHRvdGFsVGltZSAvIDQpIC8gMywgeyBhbmdsZTogLXNldEFuZ2xlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KCh0b3RhbFRpbWUgLyA0KSAvIDMsIHsgYW5nbGU6IHNldEFuZ2xlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KCh0b3RhbFRpbWUgLyA0KSAvIDMsIHsgYW5nbGU6IHNldEFuZ2xlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KCh0b3RhbFRpbWUgLyA0KSAvIDMsIHsgYW5nbGU6IC1zZXRBbmdsZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjUpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkoNilcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG59Il19