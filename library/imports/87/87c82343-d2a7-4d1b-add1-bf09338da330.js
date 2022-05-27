"use strict";
cc._RF.push(module, '87c82ND0qdNG63RvwkzjaMw', 'Explain');
// Script/Class/Message/Explain.ts

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
var Explain = /** @class */ (function (_super) {
    __extends(Explain, _super);
    function Explain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Explain.prototype.onLoad = function () {
        this.title = cc.find("Title", this.node).getComponent(cc.Label);
        this.scrollView = cc.find("scroll_Info", this.node).getComponent(cc.ScrollView);
        this.info_Text = cc.find("Mask/con/Text", this.scrollView.node).getComponent(cc.Label);
        this.btn_Next = cc.find("Item_Btn", this.node).getComponent(cc.Button);
        this.defaultReset();
    };
    Explain.prototype.start = function () {
        ButtonMng_1.default.addEvent(this.node, "Explain", "nextProcess", this.btn_Next);
    };
    Explain.prototype.setInfoStr = function (str) {
        this.scrollView.scrollToTop(0.1);
        this.info_Text.string = str;
    };
    Explain.prototype.nextProcess = function (e, _customEventData) {
        MusciMng_1.default.effectPlay("BtnClick");
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndExplain);
    };
    Explain = __decorate([
        ccclass
    ], Explain);
    return Explain;
}(ComponentBase_1.default));
exports.default = Explain;

cc._RF.pop();