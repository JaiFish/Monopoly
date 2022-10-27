
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Panel_Test.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db8ccqMMvRCM78kz7EEmJdS', 'Panel_Test');
// Script/Class/Panel_Test.ts

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
var MusciMng_1 = require("../Data/base/MusciMng");
var Commad_1 = require("../Enum/Commad");
var GameEvent_1 = require("../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Panel_Test = /** @class */ (function (_super) {
    __extends(Panel_Test, _super);
    function Panel_Test() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel_Test.prototype.onLoad = function () {
        this._inedx = 0;
        this.btn_FullSceen = cc.find("AllSence", this.node).getComponent(cc.Button);
        this.btn_closeView = cc.find("CloseView", this.node).getComponent(cc.Button);
        this.btn_ShowAll = cc.find("ShowAll", this.node).getComponent(cc.Button);
        ButtonMng_1.default.addEvent(this.node, "Panel_Test", "eventFull", this.btn_FullSceen);
        ButtonMng_1.default.addEvent(this.node, "Panel_Test", "eventCloseView", this.btn_closeView);
        ButtonMng_1.default.addEvent(this.node, "Panel_Test", "eventShowAll", this.btn_ShowAll);
    };
    Panel_Test.prototype.eventShowAll = function (e, _customEventData) {
        MusciMng_1.default.effectPlay("BtnClick");
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.ShowAllView);
    };
    Panel_Test.prototype.eventFull = function (e, _customEventData) {
        // console.log(e);
        //@ts-ignore
        if (cc.screen.fullScreen)
            return;
        this._inedx++;
        cc.find("Background/Label", this.btn_FullSceen.node).getComponent(cc.Label).string = "按下" + this._inedx;
        cc.view.enableAutoFullScreen(true);
        // cc.view.setDesignResolutionSize(1280, 720, cc.ResolutionPolicy.SHOW_ALL)
    };
    Panel_Test.prototype.eventCloseView = function () {
        MusciMng_1.default.effectPlay("BtnClick");
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.CloseVideo);
    };
    Panel_Test = __decorate([
        ccclass
    ], Panel_Test);
    return Panel_Test;
}(ComponentBase_1.default));
exports.default = Panel_Test;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcUGFuZWxfVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBK0M7QUFDL0MsNERBQXVEO0FBQ3ZELGtEQUE2QztBQUM3Qyx5Q0FBMEM7QUFDMUMsK0NBQThDO0FBQ3hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFhO0lBQXJEOztJQW1DQSxDQUFDO0lBOUJhLDJCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7UUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzNFLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDNUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4RSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzVFLG1CQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUVqRixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ2pGLENBQUM7SUFFRCxpQ0FBWSxHQUFaLFVBQWEsQ0FBVyxFQUFFLGdCQUF3QjtRQUM5QyxrQkFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLGlCQUFRLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDL0QsQ0FBQztJQUNELDhCQUFTLEdBQVQsVUFBVSxDQUFXLEVBQUUsZ0JBQXdCO1FBQzNDLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVU7WUFBRSxPQUFNO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUNiLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUN2RyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLDJFQUEyRTtJQUUvRSxDQUFDO0lBQ0QsbUNBQWMsR0FBZDtRQUVJLGtCQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBbENnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBbUM5QjtJQUFELGlCQUFDO0NBbkNELEFBbUNDLENBbkN1Qyx1QkFBYSxHQW1DcEQ7a0JBbkNvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbk1uZyBmcm9tICcuLi9EYXRhL2Jhc2UvQnV0dG9uTW5nJztcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSAnLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2UnO1xyXG5pbXBvcnQgTXVzY2lNbmcgZnJvbSAnLi4vRGF0YS9iYXNlL011c2NpTW5nJztcclxuaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tICcuLi9FbnVtL0NvbW1hZCc7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gJy4uL0VudW0vR2FtZUV2ZW50JztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsX1Rlc3QgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGJ0bl9GdWxsU2NlZW46IGNjLkJ1dHRvblxyXG4gICAgYnRuX2Nsb3NlVmlldzogY2MuQnV0dG9uXHJcbiAgICBidG5fU2hvd0FsbDogY2MuQnV0dG9uXHJcbiAgICBfaW5lZHg6IG51bWJlclxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9pbmVkeCA9IDBcclxuICAgICAgICB0aGlzLmJ0bl9GdWxsU2NlZW4gPSBjYy5maW5kKFwiQWxsU2VuY2VcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlVmlldyA9IGNjLmZpbmQoXCJDbG9zZVZpZXdcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMuYnRuX1Nob3dBbGwgPSBjYy5maW5kKFwiU2hvd0FsbFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJQYW5lbF9UZXN0XCIsIFwiZXZlbnRGdWxsXCIsIHRoaXMuYnRuX0Z1bGxTY2VlbilcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIlBhbmVsX1Rlc3RcIiwgXCJldmVudENsb3NlVmlld1wiLCB0aGlzLmJ0bl9jbG9zZVZpZXcpXHJcblxyXG4gICAgICAgIEJ1dHRvbk1uZy5hZGRFdmVudCh0aGlzLm5vZGUsIFwiUGFuZWxfVGVzdFwiLCBcImV2ZW50U2hvd0FsbFwiLCB0aGlzLmJ0bl9TaG93QWxsKVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50U2hvd0FsbChlOiBjYy5FdmVudCwgX2N1c3RvbUV2ZW50RGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgTXVzY2lNbmcuZWZmZWN0UGxheShcIkJ0bkNsaWNrXCIpXHJcbiAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5TaG93QWxsVmlldylcclxuICAgIH1cclxuICAgIGV2ZW50RnVsbChlOiBjYy5FdmVudCwgX2N1c3RvbUV2ZW50RGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgaWYgKGNjLnNjcmVlbi5mdWxsU2NyZWVuKSByZXR1cm5cclxuICAgICAgICB0aGlzLl9pbmVkeCsrXHJcbiAgICAgICAgY2MuZmluZChcIkJhY2tncm91bmQvTGFiZWxcIiwgdGhpcy5idG5fRnVsbFNjZWVuLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLmjInkuItcIiArIHRoaXMuX2luZWR4XHJcbiAgICAgICAgY2Mudmlldy5lbmFibGVBdXRvRnVsbFNjcmVlbih0cnVlKTtcclxuICAgICAgICAvLyBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKDEyODAsIDcyMCwgY2MuUmVzb2x1dGlvblBvbGljeS5TSE9XX0FMTClcclxuXHJcbiAgICB9XHJcbiAgICBldmVudENsb3NlVmlldygpIHtcclxuXHJcbiAgICAgICAgTXVzY2lNbmcuZWZmZWN0UGxheShcIkJ0bkNsaWNrXCIpXHJcbiAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5DbG9zZVZpZGVvKVxyXG4gICAgfVxyXG59Il19