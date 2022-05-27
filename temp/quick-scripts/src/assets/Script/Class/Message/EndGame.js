"use strict";
cc._RF.push(module, 'b93a8ws4OpOf4SgGe7Z8w95', 'EndGame');
// Script/Class/Message/EndGame.ts

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
var MusciMng_1 = require("../../Data/base/MusciMng");
var Commad_1 = require("../../Enum/Commad");
var GameEvent_1 = require("../../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EndGame = /** @class */ (function (_super) {
    __extends(EndGame, _super);
    function EndGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EndGame.prototype.onLoad = function () {
        this.animation_Bear = cc.find("Mask/animation_Bear", this.node).getComponent(cc.Animation);
        this.btn_GoLottery = cc.find("Btn_GoLottery", this.node).getComponent(cc.Button);
        this.btn_Again = cc.find("Btn_Again", this.node).getComponent(cc.Button);
        this.btn_BackGame = cc.find("Btn_BackGame", this.node).getComponent(cc.Button);
        this.defaultReset();
    };
    EndGame.prototype.start = function () {
        ButtonMng_1.default.addEvent(this.node, "EndGame", "sendEvent", this.btn_GoLottery, "0");
        ButtonMng_1.default.addEvent(this.node, "EndGame", "sendEvent", this.btn_Again, "1");
        ButtonMng_1.default.addEvent(this.node, "EndGame", "sendEvent", this.btn_BackGame, "2");
    };
    EndGame.prototype.playBearSprite = function (number) {
        // console.log(number);
        if (number == 0)
            this.animation_Bear.node.setPosition(32.351, -1.858);
        else
            this.animation_Bear.node.setPosition(-3.103, -1.858);
        // console.log(AssetMng.data_Animation.get("Bear_Train" + number));
        this.animation_Bear.addClip(AssetMng_1.default.data_Animation.get("Bear_Train" + number));
        this.animation_Bear.play("Bear_Train" + number);
    };
    EndGame.prototype.sendEvent = function (e, _customEventData) {
        MusciMng_1.default.effectPlay("BtnClick");
        switch (_customEventData) {
            case "0": //遊戲結束去抽獎
                this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.GoLottery);
                break;
            case "1": //再玩一次
                this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.AgainGame);
                break;
            case "2": //回到遊戲
                this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndToBackGame);
                break;
        }
    };
    EndGame = __decorate([
        ccclass
    ], EndGame);
    return EndGame;
}(ComponentBase_1.default));
exports.default = EndGame;

cc._RF.pop();