"use strict";
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
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var MusciMng_1 = require("../../Data/base/MusciMng");
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
        this.info0 = cc.find('Info0', this.node);
        this.info1 = cc.find('Info1', this.node);
        this.Props5 = cc.find("BG_Layout/Props5/icon", this.node).getComponent(cc.Sprite);
        this.Props11 = cc.find("BG_Layout/Props11/icon", this.node).getComponent(cc.Sprite);
        this.Props15 = cc.find("BG_Layout/Props15/icon", this.node).getComponent(cc.Sprite);
        // console.log(this.Props5);
        // ButtonMng.addEvent(this.node, "Props_Feature", "eventClinetClickStart_Stop", this.btn_Start_Stop)
        // ButtonMng.addEvent(this.node, "Props_Feature", "eventSkip", this.skip)
        // ButtonMng.addEvent(this.node, "Props_Feature", "evetResetView", this.resetView)
        this.isGo = false;
        this.info0.active = false;
        this.info1.active = false;
    };
    Props_Feature.prototype.eventClinetClickStart_Stop = function (e, _customEventData) {
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.ClinetClickStart_Stop);
    };
    Props_Feature.prototype.eventSkip = function (e, _customEventData) {
        MusciMng_1.default.effectPlay("BtnClick");
        this.EventEmit(GameEvent_1.GameEvent.ManSkip);
    };
    Props_Feature.prototype.evetResetView = function (e, _customEventData) {
        MusciMng_1.default.effectPlay("BtnClick");
        this.EventEmit(GameEvent_1.GameEvent.MoveToManCamera);
    };
    /**
     *
     * @param isboolean isGO?
     */
    Props_Feature.prototype.setStart_Stop = function (isboolean) {
        // console.error(isboolean);
        this.isGo = isboolean == null || isboolean == undefined ? !this.isGo : isboolean;
        var getBoolean = this.isGo ? "Stop" : "Start"; //要相反，如果正在走就要顯示停止
        this.sprtie_start_Stop.node.x = this.isGo ? 0 : 4.5;
        this.sprtie_start_Stop.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Feature_" + getBoolean);
    };
    Props_Feature.prototype.getProps = function (_num) {
        // console.log(AssetMng.data_SprtieAtlas.get("Props_" + _num));
        switch (_num) {
            case 5:
                this.Props5.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Props_" + _num);
                break;
            case 11:
                this.Props11.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Props_" + _num);
                break;
            case 15:
                this.Props15.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Props_" + _num);
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