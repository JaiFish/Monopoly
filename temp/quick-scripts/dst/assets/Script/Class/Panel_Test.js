
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
        ButtonMng_1.default.addEvent(this.node, "Panel_Test", "eventFull", this.btn_FullSceen);
        ButtonMng_1.default.addEvent(this.node, "Panel_Test", "eventCloseView", this.btn_closeView);
    };
    Panel_Test.prototype.eventFull = function (e, _customEventData) {
        console.log(e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcUGFuZWxfVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBK0M7QUFDL0MsNERBQXVEO0FBQ3ZELGtEQUE2QztBQUM3Qyx5Q0FBMEM7QUFDMUMsK0NBQThDO0FBQ3hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFhO0lBQXJEOztJQXlCQSxDQUFDO0lBckJhLDJCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7UUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzNFLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDNUUsbUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUM1RSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDckYsQ0FBQztJQUNELDhCQUFTLEdBQVQsVUFBVSxDQUFXLEVBQUUsZ0JBQXdCO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixZQUFZO1FBQ1osSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVU7WUFBRSxPQUFNO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUNiLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUN2RyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLDJFQUEyRTtJQUUvRSxDQUFDO0lBQ0QsbUNBQWMsR0FBZDtRQUNJLGtCQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUMsaUJBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUM3RCxDQUFDO0lBeEJnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBeUI5QjtJQUFELGlCQUFDO0NBekJELEFBeUJDLENBekJ1Qyx1QkFBYSxHQXlCcEQ7a0JBekJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbk1uZyBmcm9tICcuLi9EYXRhL2Jhc2UvQnV0dG9uTW5nJztcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSAnLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2UnO1xyXG5pbXBvcnQgTXVzY2lNbmcgZnJvbSAnLi4vRGF0YS9iYXNlL011c2NpTW5nJztcclxuaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tICcuLi9FbnVtL0NvbW1hZCc7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gJy4uL0VudW0vR2FtZUV2ZW50JztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsX1Rlc3QgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGJ0bl9GdWxsU2NlZW46IGNjLkJ1dHRvblxyXG4gICAgYnRuX2Nsb3NlVmlldzpjYy5CdXR0b25cclxuICAgIF9pbmVkeDogbnVtYmVyXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2luZWR4ID0gMFxyXG4gICAgICAgIHRoaXMuYnRuX0Z1bGxTY2VlbiA9IGNjLmZpbmQoXCJBbGxTZW5jZVwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5idG5fY2xvc2VWaWV3ID0gY2MuZmluZChcIkNsb3NlVmlld1wiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJQYW5lbF9UZXN0XCIsIFwiZXZlbnRGdWxsXCIsIHRoaXMuYnRuX0Z1bGxTY2VlbilcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIlBhbmVsX1Rlc3RcIiwgXCJldmVudENsb3NlVmlld1wiLCB0aGlzLmJ0bl9jbG9zZVZpZXcpXHJcbiAgICB9XHJcbiAgICBldmVudEZ1bGwoZTogY2MuRXZlbnQsIF9jdXN0b21FdmVudERhdGE6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGlmIChjYy5zY3JlZW4uZnVsbFNjcmVlbikgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5faW5lZHgrK1xyXG4gICAgICAgIGNjLmZpbmQoXCJCYWNrZ3JvdW5kL0xhYmVsXCIsIHRoaXMuYnRuX0Z1bGxTY2Vlbi5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5oyJ5LiLXCIgKyB0aGlzLl9pbmVkeFxyXG4gICAgICAgIGNjLnZpZXcuZW5hYmxlQXV0b0Z1bGxTY3JlZW4odHJ1ZSk7XHJcbiAgICAgICAgLy8gY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSgxMjgwLCA3MjAsIGNjLlJlc29sdXRpb25Qb2xpY3kuU0hPV19BTEwpXHJcblxyXG4gICAgfVxyXG4gICAgZXZlbnRDbG9zZVZpZXcoKXtcclxuICAgICAgICBNdXNjaU1uZy5lZmZlY3RQbGF5KFwiQnRuQ2xpY2tcIilcclxuICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsQ29tbWFtbmQuQ2xvc2VWaWRlbylcclxuICAgIH1cclxufSJdfQ==