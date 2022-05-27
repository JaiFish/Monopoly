
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/UI/BackGameUse.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9565dUM+UpPyZdfvHjS8thh', 'BackGameUse');
// Script/Class/UI/BackGameUse.ts

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
var ButtonMng_1 = require("../../Data/base/ButtonMng");
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var MusciMng_1 = require("../../Data/base/MusciMng");
var Commad_1 = require("../../Enum/Commad");
var GameEvent_1 = require("../../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BackGameUse = /** @class */ (function (_super) {
    __extends(BackGameUse, _super);
    function BackGameUse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackGameUse.prototype.onLoad = function () {
        this.btn_GoLottery = cc.find("Btn_GoLottery", this.node).getComponent(cc.Button);
        this.btn_Again = cc.find("Btn_Again", this.node).getComponent(cc.Button);
        this.defaultReset();
    };
    BackGameUse.prototype.start = function () {
        ButtonMng_1.default.addEvent(this.node, "BackGameUse", "sendEvent", this.btn_GoLottery, "0");
        ButtonMng_1.default.addEvent(this.node, "BackGameUse", "sendEvent", this.btn_Again, "1");
    };
    BackGameUse.prototype.sendEvent = function (e, _customEventData) {
        MusciMng_1.default.effectPlay("BtnClick");
        switch (_customEventData) {
            case "0": //遊戲結束去抽獎
                this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.GoLottery);
                break;
            case "1": //再玩一次
                this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.AgainGame);
                break;
        }
    };
    BackGameUse = __decorate([
        ccclass
    ], BackGameUse);
    return BackGameUse;
}(ComponentBase_1.default));
exports.default = BackGameUse;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcVUlcXEJhY2tHYW1lVXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUNsRCwrREFBMEQ7QUFDMUQscURBQWdEO0FBQ2hELDRDQUE2QztBQUM3QyxrREFBaUQ7QUFDM0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQWE7SUFBdEQ7O0lBdUJBLENBQUM7SUFwQmEsNEJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hGLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFDUywyQkFBSyxHQUFmO1FBQ0ksbUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDbEYsbUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDbEYsQ0FBQztJQUNELCtCQUFTLEdBQVQsVUFBVSxDQUFXLEVBQUUsZ0JBQXdCO1FBQzNDLGtCQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQy9CLFFBQVEsZ0JBQWdCLEVBQUU7WUFDdEIsS0FBSyxHQUFHLEVBQUMsU0FBUztnQkFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLGlCQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7Z0JBQ3pELE1BQU07WUFDVixLQUFLLEdBQUcsRUFBQyxNQUFNO2dCQUNYLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDekQsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQXRCZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXVCL0I7SUFBRCxrQkFBQztDQXZCRCxBQXVCQyxDQXZCd0MsdUJBQWEsR0F1QnJEO2tCQXZCb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b25NbmcgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0J1dHRvbk1uZyc7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlJztcclxuaW1wb3J0IE11c2NpTW5nIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9NdXNjaU1uZyc7XHJcbmltcG9ydCB7IENvbW1hbW5kIH0gZnJvbSAnLi4vLi4vRW51bS9Db21tYWQnO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tICcuLi8uLi9FbnVtL0dhbWVFdmVudCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrR2FtZVVzZSBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgYnRuX0FnYWluOiBjYy5CdXR0b247XHJcbiAgICBidG5fR29Mb3R0ZXJ5OiBjYy5CdXR0b247XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYnRuX0dvTG90dGVyeSA9IGNjLmZpbmQoXCJCdG5fR29Mb3R0ZXJ5XCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLmJ0bl9BZ2FpbiA9IGNjLmZpbmQoXCJCdG5fQWdhaW5cIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFJlc2V0KClcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIkJhY2tHYW1lVXNlXCIsIFwic2VuZEV2ZW50XCIsIHRoaXMuYnRuX0dvTG90dGVyeSwgXCIwXCIpXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJCYWNrR2FtZVVzZVwiLCBcInNlbmRFdmVudFwiLCB0aGlzLmJ0bl9BZ2FpbiwgXCIxXCIpXHJcbiAgICB9XHJcbiAgICBzZW5kRXZlbnQoZTogY2MuRXZlbnQsIF9jdXN0b21FdmVudERhdGE6IHN0cmluZykge1xyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJCdG5DbGlja1wiKVxyXG4gICAgICAgIHN3aXRjaCAoX2N1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiMFwiOi8v6YGK5oiy57WQ5p2f5Y675oq9542OXHJcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLkdvTG90dGVyeSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiMVwiOi8v5YaN546p5LiA5qyhXHJcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLkFnYWluR2FtZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==