"use strict";
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