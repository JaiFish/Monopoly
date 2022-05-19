
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcU3RhdGlvbkluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUMxRCw0Q0FBNkM7QUFDN0Msa0RBQWlEO0FBRTNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFhO0lBQXREOztJQW9DQSxDQUFDO0lBOUJhLDRCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3RFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBQ1MsMkJBQUssR0FBZjtRQUNJLG1CQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDNUUsQ0FBQztJQUNELCtCQUFTLEdBQVQsVUFBVSxDQUFXLEVBQUUsZ0JBQXdCO1FBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUNqRSxDQUFDO0lBQ0QsMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBQ0QsK0JBQVMsR0FBVCxVQUFVLFlBQTRCO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQTtJQUMvQyxDQUFDO0lBQ0QsNkJBQU8sR0FBUCxVQUFRLEdBQVc7UUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7SUFDL0IsQ0FBQztJQUNELGtDQUFZLEdBQVosVUFBYSxHQUFXO1FBRXBCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtJQUMvQixDQUFDO0lBbkNnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBb0MvQjtJQUFELGtCQUFDO0NBcENELEFBb0NDLENBcEN3Qyx1QkFBYSxHQW9DckQ7a0JBcENvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbk1uZyBmcm9tICcuLi8uLi9EYXRhL2Jhc2UvQnV0dG9uTW5nJztcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2UnO1xyXG5pbXBvcnQgeyBDb21tYW1uZCB9IGZyb20gJy4uLy4uL0VudW0vQ29tbWFkJztcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSAnLi4vLi4vRW51bS9HYW1lRXZlbnQnO1xyXG5pbXBvcnQgQ29udHJvbGwgZnJvbSAnLi4vLi4vR2FtZUNvbnRyb2xsJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpb25JbmZvIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICB0cmFpblNwcml0ZTogY2MuU3ByaXRlO1xyXG4gICAgdHJhaW5OYW1lOiBjYy5MYWJlbDtcclxuICAgIHRyYWluSW5mbzogY2MuTGFiZWw7XHJcbiAgICBzY3JvbGxWaWV3OiBjYy5TY3JvbGxWaWV3O1xyXG4gICAgYnRuX2JhY2s6IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFpbk5hbWUgPSBjYy5maW5kKFwiVHJhaW5OYW1lXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcgPSBjYy5maW5kKFwic2Nyb2xsX0luZm9cIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XHJcbiAgICAgICAgdGhpcy50cmFpbkluZm8gPSBjYy5maW5kKFwiTWFzay9jb24vVHJhaW5JbmZvXCIsIHRoaXMuc2Nyb2xsVmlldy5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMudHJhaW5TcHJpdGUgPSBjYy5maW5kKFwiVHJhaW5TcHJpdGVcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB0aGlzLmJ0bl9iYWNrID0gY2MuZmluZChcIkl0ZW1fQnRuXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLmRlZmF1bHRSZXNldCgpXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJTdGF0aW9uSW5mb1wiLCBcInNlbmRFdmVudFwiLCB0aGlzLmJ0bl9iYWNrKVxyXG4gICAgfVxyXG4gICAgc2VuZEV2ZW50KGU6IGNjLkV2ZW50LCBfY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLkVuZHRhdGlvbkluZm8pXHJcbiAgICB9XHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnRyYWluU3ByaXRlLnNwcml0ZUZyYW1lID0gbnVsbFxyXG4gICAgICAgIHRoaXMudHJhaW5JbmZvLnN0cmluZyA9IFwiXCJcclxuICAgICAgICB0aGlzLnRyYWluTmFtZS5zdHJpbmcgPSBcIlwiXHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwXHJcbiAgICB9XHJcbiAgICBzZXRTcHJpdGUoX3Nwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkge1xyXG4gICAgICAgIHRoaXMudHJhaW5TcHJpdGUuc3ByaXRlRnJhbWUgPSBfc3ByaXRlRnJhbWVcclxuICAgIH1cclxuICAgIHNldEluZm8oc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRyYWluSW5mby5zdHJpbmcgPSBzdHJcclxuICAgIH1cclxuICAgIHNldFRyYWluTmFtZShzdHI6IHN0cmluZykge1xyXG5cclxuICAgICAgICB0aGlzLnRyYWluTmFtZS5zdHJpbmcgPSBzdHJcclxuICAgIH1cclxufSJdfQ==