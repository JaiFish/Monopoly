"use strict";
cc._RF.push(module, '3782fOVeKtAaLdPjwG41Acb', 'Panel_Teaching');
// Script/Class/Panel_Teaching.ts

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
var Commad_1 = require("../Enum/Commad");
var GameEvent_1 = require("../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Panel_Teaching = /** @class */ (function (_super) {
    __extends(Panel_Teaching, _super);
    function Panel_Teaching() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel_Teaching.prototype.onLoad = function () {
        this.info0 = cc.find('Info0', this.node);
        this.info1 = cc.find('Info1', this.node);
        this.info2 = cc.find('Info2', this.node);
        this.info3 = cc.find('Info3', this.node);
        ButtonMng_1.default.addEvent(this.node, "Panel_Teaching", "eventControll", cc.find("Btn_Close", this.info0).getComponent(cc.Button), "0");
        ButtonMng_1.default.addEvent(this.node, "Panel_Teaching", "eventControll", cc.find("Btn_Close", this.info1).getComponent(cc.Button), "1");
        ButtonMng_1.default.addEvent(this.node, "Panel_Teaching", "eventControll", cc.find("Btn_Close", this.info2).getComponent(cc.Button), "2");
        ButtonMng_1.default.addEvent(this.node, "Panel_Teaching", "eventControll", cc.find("Btn_Close", this.info3).getComponent(cc.Button), "3");
        this.info0.active = false;
        this.info1.active = false;
        this.info2.active = false;
        this.info3.active = false;
        this.defaultReset();
    };
    Panel_Teaching.prototype.eventControll = function (e, _customEventData) {
        switch (Number(_customEventData)) {
            case 0:
                this.info0.active = false;
                this.info1.active = true;
                break;
            case 1:
                this.info1.active = false;
                this.info2.active = true;
                break;
            case 2:
                this.info2.active = false;
                this.info3.active = true;
                break;
            case 3:
                this.info3.active = false;
                this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndTeaching);
                break;
        }
    };
    Panel_Teaching = __decorate([
        ccclass
    ], Panel_Teaching);
    return Panel_Teaching;
}(ComponentBase_1.default));
exports.default = Panel_Teaching;

cc._RF.pop();