"use strict";
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