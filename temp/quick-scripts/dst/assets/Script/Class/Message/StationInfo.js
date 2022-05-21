
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Message/StationInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88157t3c0ZIg602k6tJvE0o', 'StationInfo');
// Script/Class/Message/StationInfo.ts

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
var StationInfo = /** @class */ (function (_super) {
    __extends(StationInfo, _super);
    function StationInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StationInfo.prototype.onLoad = function () {
        this.trainName = cc.find("TrainName", this.node).getComponent(cc.Label);
        this.scrollView = cc.find("scroll_Info", this.node).getComponent(cc.ScrollView);
        this.trainInfo = cc.find("Mask/con/TrainInfo", this.scrollView.node).getComponent(cc.Label);
        this.trainSprite = cc.find("TrainSprite", this.node).getComponent(cc.Sprite);
        this.btn_back = cc.find("Item_Btn", this.node).getComponent(cc.Button);
        this.defaultReset();
    };
    StationInfo.prototype.start = function () {
        ButtonMng_1.default.addEvent(this.node, "StationInfo", "sendEvent", this.btn_back);
    };
    StationInfo.prototype.sendEvent = function (e, _customEventData) {
        MusciMng_1.default.effectPlay("BtnClick");
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndtationInfo);
    };
    StationInfo.prototype.reset = function () {
        this.trainSprite.spriteFrame = null;
        this.trainInfo.string = "";
        this.trainName.string = "";
        this.node.opacity = 0;
    };
    StationInfo.prototype.setSprite = function (_spriteFrame) {
        this.trainSprite.spriteFrame = _spriteFrame;
    };
    StationInfo.prototype.setInfo = function (str) {
        this.trainInfo.string = str;
    };
    StationInfo.prototype.setTrainName = function (str) {
        this.trainName.string = str;
    };
    StationInfo = __decorate([
        ccclass
    ], StationInfo);
    return StationInfo;
}(ComponentBase_1.default));
exports.default = StationInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcU3RhdGlvbkluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUMxRCxxREFBZ0Q7QUFDaEQsNENBQTZDO0FBQzdDLGtEQUFpRDtBQUUzQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBYTtJQUF0RDs7SUFxQ0EsQ0FBQztJQS9CYSw0QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0RSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUNTLDJCQUFLLEdBQWY7UUFDSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzVFLENBQUM7SUFDRCwrQkFBUyxHQUFULFVBQVUsQ0FBVyxFQUFFLGdCQUF3QjtRQUMzQyxrQkFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLGlCQUFRLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDakUsQ0FBQztJQUNELDJCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7UUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUNELCtCQUFTLEdBQVQsVUFBVSxZQUE0QjtRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUE7SUFDL0MsQ0FBQztJQUNELDZCQUFPLEdBQVAsVUFBUSxHQUFXO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO0lBQy9CLENBQUM7SUFDRCxrQ0FBWSxHQUFaLFVBQWEsR0FBVztRQUVwQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7SUFDL0IsQ0FBQztJQXBDZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXFDL0I7SUFBRCxrQkFBQztDQXJDRCxBQXFDQyxDQXJDd0MsdUJBQWEsR0FxQ3JEO2tCQXJDb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b25NbmcgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0J1dHRvbk1uZyc7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlJztcclxuaW1wb3J0IE11c2NpTW5nIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9NdXNjaU1uZyc7XHJcbmltcG9ydCB7IENvbW1hbW5kIH0gZnJvbSAnLi4vLi4vRW51bS9Db21tYWQnO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tICcuLi8uLi9FbnVtL0dhbWVFdmVudCc7XHJcbmltcG9ydCBDb250cm9sbCBmcm9tICcuLi8uLi9HYW1lQ29udHJvbGwnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGlvbkluZm8gZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIHRyYWluU3ByaXRlOiBjYy5TcHJpdGU7XHJcbiAgICB0cmFpbk5hbWU6IGNjLkxhYmVsO1xyXG4gICAgdHJhaW5JbmZvOiBjYy5MYWJlbDtcclxuICAgIHNjcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXc7XHJcbiAgICBidG5fYmFjazogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRyYWluTmFtZSA9IGNjLmZpbmQoXCJUcmFpbk5hbWVcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldyA9IGNjLmZpbmQoXCJzY3JvbGxfSW5mb1wiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcclxuICAgICAgICB0aGlzLnRyYWluSW5mbyA9IGNjLmZpbmQoXCJNYXNrL2Nvbi9UcmFpbkluZm9cIiwgdGhpcy5zY3JvbGxWaWV3Lm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy50cmFpblNwcml0ZSA9IGNjLmZpbmQoXCJUcmFpblNwcml0ZVwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHRoaXMuYnRuX2JhY2sgPSBjYy5maW5kKFwiSXRlbV9CdG5cIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFJlc2V0KClcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIlN0YXRpb25JbmZvXCIsIFwic2VuZEV2ZW50XCIsIHRoaXMuYnRuX2JhY2spXHJcbiAgICB9XHJcbiAgICBzZW5kRXZlbnQoZTogY2MuRXZlbnQsIF9jdXN0b21FdmVudERhdGE6IHN0cmluZykge1xyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJCdG5DbGlja1wiKVxyXG4gICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuRW5kdGF0aW9uSW5mbylcclxuICAgIH1cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMudHJhaW5TcHJpdGUuc3ByaXRlRnJhbWUgPSBudWxsXHJcbiAgICAgICAgdGhpcy50cmFpbkluZm8uc3RyaW5nID0gXCJcIlxyXG4gICAgICAgIHRoaXMudHJhaW5OYW1lLnN0cmluZyA9IFwiXCJcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDBcclxuICAgIH1cclxuICAgIHNldFNwcml0ZShfc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgdGhpcy50cmFpblNwcml0ZS5zcHJpdGVGcmFtZSA9IF9zcHJpdGVGcmFtZVxyXG4gICAgfVxyXG4gICAgc2V0SW5mbyhzdHI6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudHJhaW5JbmZvLnN0cmluZyA9IHN0clxyXG4gICAgfVxyXG4gICAgc2V0VHJhaW5OYW1lKHN0cjogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHRoaXMudHJhaW5OYW1lLnN0cmluZyA9IHN0clxyXG4gICAgfVxyXG59Il19