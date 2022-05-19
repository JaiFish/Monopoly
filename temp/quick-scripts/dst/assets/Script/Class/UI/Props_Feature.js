
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/UI/Props_Feature.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f944L5z/xKur9JQ+f4SeDm', 'Props_Feature');
// Script/Class/UI/Props_Feature.ts

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
var AssetMng_1 = require("../../Asset/AssetMng");
var ButtonMng_1 = require("../../Data/base/ButtonMng");
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var Commad_1 = require("../../Enum/Commad");
var GameEvent_1 = require("../../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Props_Feature = /** @class */ (function (_super) {
    __extends(Props_Feature, _super);
    function Props_Feature() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isGo = false;
        return _this;
    }
    Props_Feature.prototype.onLoad = function () {
        this.btn_Start_Stop = cc.find("BG_Layout/Start_Stop", this.node).getComponent(cc.Button);
        this.sprtie_start_Stop = cc.find("BG_Layout/Start_Stop/icon", this.node).getComponent(cc.Sprite);
        this.skip = cc.find("BG_Layout/Skip", this.node).getComponent(cc.Button);
        this.resetView = cc.find("BG_Layout/ResetView", this.node).getComponent(cc.Button);
        ButtonMng_1.default.addEvent(this.node, "Props_Feature", "eventStart_Stop", this.btn_Start_Stop);
        ButtonMng_1.default.addEvent(this.node, "Props_Feature", "eventSkip", this.skip);
        ButtonMng_1.default.addEvent(this.node, "Props_Feature", "evetResetView", this.resetView);
    };
    Props_Feature.prototype.eventStart_Stop = function (e, _customEventData) {
        if (!this.isGo)
            this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.MenGO);
        else
            this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.ManWait);
        this.setStart_Stop();
    };
    Props_Feature.prototype.eventSkip = function (e, _customEventData) {
        this.EventEmit(GameEvent_1.GameEvent.ManSkip);
    };
    Props_Feature.prototype.evetResetView = function (e, _customEventData) {
        this.EventEmit(GameEvent_1.GameEvent.MoveToManCamera);
    };
    /**
     *
     * @param isboolean isGO?
     */
    Props_Feature.prototype.setStart_Stop = function (isboolean) {
        console.error(isboolean);
        this.isGo = isboolean == null || isboolean == undefined ? !this.isGo : isboolean;
        var getBoolean = this.isGo ? "Stop" : "Start"; //要相反，如果正在走就要顯示停止
        this.sprtie_start_Stop.node.x = this.isGo ? 0 : 4.5;
        this.sprtie_start_Stop.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Feature_" + getBoolean);
    };
    Props_Feature.prototype.getProps = function (_num) {
        switch (_num) {
            case 6:
                this.Props6.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("GetProps_" + _num);
                break;
            case 11:
                this.Props11.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("GetProps_" + _num);
                break;
            case 15:
                this.Props15.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("GetProps_" + _num);
                break;
            default:
                break;
        }
    };
    Props_Feature = __decorate([
        ccclass
    ], Props_Feature);
    return Props_Feature;
}(ComponentBase_1.default));
exports.default = Props_Feature;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcVUlcXFByb3BzX0ZlYXR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCwrREFBMEQ7QUFDMUQsNENBQTZDO0FBQzdDLGtEQUFpRDtBQUMzQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBYTtJQUF4RDtRQUFBLHFFQThEQztRQTdERyxVQUFJLEdBQVksS0FBSyxDQUFDOztJQTZEMUIsQ0FBQztJQXBEYSw4QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4RixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNoRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRWxGLG1CQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUN0RixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3RFLG1CQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbkYsQ0FBQztJQUNELHVDQUFlLEdBQWYsVUFBZ0IsQ0FBVyxFQUFFLGdCQUF3QjtRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLGlCQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBRXRELElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMzRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUNELGlDQUFTLEdBQVQsVUFBVSxDQUFXLEVBQUUsZ0JBQXdCO1FBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBQ0QscUNBQWEsR0FBYixVQUFjLENBQVcsRUFBRSxnQkFBd0I7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFDRDs7O09BR0c7SUFDSCxxQ0FBYSxHQUFiLFVBQWMsU0FBbUI7UUFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUE7UUFDaEYsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUEsQ0FBQSxpQkFBaUI7UUFDOUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDbkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxrQkFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUE7SUFDL0YsQ0FBQztJQUdELGdDQUFRLEdBQVIsVUFBUyxJQUFZO1FBQ2pCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLGtCQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQTtnQkFDM0UsTUFBTTtZQUNWLEtBQUssRUFBRTtnQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxrQkFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUE7Z0JBQzVFLE1BQU07WUFDVixLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsa0JBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFBO2dCQUM1RSxNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTTtTQUNiO0lBRUwsQ0FBQztJQTdEZ0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQThEakM7SUFBRCxvQkFBQztDQTlERCxBQThEQyxDQTlEMEMsdUJBQWEsR0E4RHZEO2tCQTlEb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3NldE1uZyBmcm9tICcuLi8uLi9Bc3NldC9Bc3NldE1uZyc7XHJcbmltcG9ydCBCdXR0b25NbmcgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0J1dHRvbk1uZyc7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlJztcclxuaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tICcuLi8uLi9FbnVtL0NvbW1hZCc7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gJy4uLy4uL0VudW0vR2FtZUV2ZW50JztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BzX0ZlYXR1cmUgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGlzR286IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGJ0bl9TdGFydF9TdG9wOiBjYy5CdXR0b247XHJcbiAgICBzcHJ0aWVfc3RhcnRfU3RvcDogY2MuU3ByaXRlXHJcbiAgICBza2lwOiBjYy5CdXR0b25cclxuICAgIHJlc2V0VmlldzogY2MuQnV0dG9uXHJcblxyXG4gICAgUHJvcHM2OiBjYy5TcHJpdGU7XHJcbiAgICBQcm9wczExOiBjYy5TcHJpdGU7XHJcbiAgICBQcm9wczE1OiBjYy5TcHJpdGU7XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYnRuX1N0YXJ0X1N0b3AgPSBjYy5maW5kKFwiQkdfTGF5b3V0L1N0YXJ0X1N0b3BcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMuc3BydGllX3N0YXJ0X1N0b3AgPSBjYy5maW5kKFwiQkdfTGF5b3V0L1N0YXJ0X1N0b3AvaWNvblwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgdGhpcy5za2lwID0gY2MuZmluZChcIkJHX0xheW91dC9Ta2lwXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLnJlc2V0VmlldyA9IGNjLmZpbmQoXCJCR19MYXlvdXQvUmVzZXRWaWV3XCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJQcm9wc19GZWF0dXJlXCIsIFwiZXZlbnRTdGFydF9TdG9wXCIsIHRoaXMuYnRuX1N0YXJ0X1N0b3ApXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJQcm9wc19GZWF0dXJlXCIsIFwiZXZlbnRTa2lwXCIsIHRoaXMuc2tpcClcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIlByb3BzX0ZlYXR1cmVcIiwgXCJldmV0UmVzZXRWaWV3XCIsIHRoaXMucmVzZXRWaWV3KVxyXG4gICAgfVxyXG4gICAgZXZlbnRTdGFydF9TdG9wKGU6IGNjLkV2ZW50LCBfY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNHbylcclxuICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5NZW5HTyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLk1hbldhaXQpXHJcbiAgICAgICAgdGhpcy5zZXRTdGFydF9TdG9wKClcclxuICAgIH1cclxuICAgIGV2ZW50U2tpcChlOiBjYy5FdmVudCwgX2N1c3RvbUV2ZW50RGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50Lk1hblNraXApXHJcbiAgICB9XHJcbiAgICBldmV0UmVzZXRWaWV3KGU6IGNjLkV2ZW50LCBfY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuTW92ZVRvTWFuQ2FtZXJhKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBpc2Jvb2xlYW4gaXNHTz9cclxuICAgICAqL1xyXG4gICAgc2V0U3RhcnRfU3RvcChpc2Jvb2xlYW4/OiBib29sZWFuKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihpc2Jvb2xlYW4pO1xyXG4gICAgICAgIHRoaXMuaXNHbyA9IGlzYm9vbGVhbiA9PSBudWxsIHx8IGlzYm9vbGVhbiA9PSB1bmRlZmluZWQgPyAhdGhpcy5pc0dvIDogaXNib29sZWFuXHJcbiAgICAgICAgbGV0IGdldEJvb2xlYW4gPSB0aGlzLmlzR28gPyBcIlN0b3BcIiA6IFwiU3RhcnRcIi8v6KaB55u45Y+N77yM5aaC5p6c5q2j5Zyo6LWw5bCx6KaB6aGv56S65YGc5q2iXHJcbiAgICAgICAgdGhpcy5zcHJ0aWVfc3RhcnRfU3RvcC5ub2RlLnggPSB0aGlzLmlzR28gPyAwIDogNC41XHJcbiAgICAgICAgdGhpcy5zcHJ0aWVfc3RhcnRfU3RvcC5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiRmVhdHVyZV9cIiArIGdldEJvb2xlYW4pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFByb3BzKF9udW06IG51bWJlcikge1xyXG4gICAgICAgIHN3aXRjaCAoX251bSkge1xyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICB0aGlzLlByb3BzNi5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiR2V0UHJvcHNfXCIgKyBfbnVtKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLlByb3BzMTEuc3ByaXRlRnJhbWUgPSBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIkdldFByb3BzX1wiICsgX251bSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE1OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5Qcm9wczE1LnNwcml0ZUZyYW1lID0gQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJHZXRQcm9wc19cIiArIF9udW0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iXX0=