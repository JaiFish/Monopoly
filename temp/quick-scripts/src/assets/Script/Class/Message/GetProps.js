"use strict";
cc._RF.push(module, '2b25ak+KXFFFrR59nzARIA3', 'GetProps');
// Script/Class/Message/GetProps.ts

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
var Easing_1 = require("../../Enum/Easing");
var GameEvent_1 = require("../../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GetProps = /** @class */ (function (_super) {
    __extends(GetProps, _super);
    function GetProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetProps.prototype.onLoad = function () {
        this.btn = cc.find("Item_Btn", this.node).getComponent(cc.Button);
        this.Props = cc.find("Props", this.node).getComponent(cc.Sprite);
        this.info = cc.find("Info", this.node).getComponent(cc.Label);
        this.defaultReset();
    };
    GetProps.prototype.start = function () {
        ButtonMng_1.default.addEvent(this.node, "GetProps", "end", this.btn);
    };
    GetProps.prototype.reset = function () {
        this.Props.spriteFrame = null;
        this.info.string = "";
    };
    GetProps.prototype.setData = function (_info, _sprite) {
        this.info.string = _info;
        this.Props.spriteFrame = _sprite;
    };
    GetProps.prototype.actionShow = function (callback) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.show();
            var setScale = 1;
            _this.node.opacity = 255;
            _this.node.setPosition(0, 0);
            if (_this.Props.spriteFrame.name.split('_')[1] == "5") //如果是碼表要做特殊處理。因為圖片太大
                setScale = 0.651;
            var action1 = cc.tween()
                .set({ scale: 0.1 })
                .to(0.5, { scale: setScale }, { easing: Easing_1.Easing.backOut });
            callback ?
                action1.call(callback.bind(_this)).call(resolve).clone(_this.Props.node).start() :
                action1.call(resolve).clone(_this.Props.node).start();
        });
    };
    GetProps.prototype.end = function (e, _customEventData) {
        MusciMng_1.default.effectPlay("BtnClick");
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndGetProps);
    };
    GetProps = __decorate([
        ccclass
    ], GetProps);
    return GetProps;
}(ComponentBase_1.default));
exports.default = GetProps;

cc._RF.pop();