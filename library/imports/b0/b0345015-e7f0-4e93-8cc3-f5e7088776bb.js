"use strict";
cc._RF.push(module, 'b0345AV5/BOk4zD9ecIh3a7', 'Choose_Ticket');
// Script/Class/Message/Choose_Ticket.ts

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
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var MusciMng_1 = require("../../Data/base/MusciMng");
var Commad_1 = require("../../Enum/Commad");
var GameEvent_1 = require("../../Enum/GameEvent");
var onClick_1 = require("../../Enum/onClick");
var GameModle_1 = require("../../GameModle");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Choose_Ticket = /** @class */ (function (_super) {
    __extends(Choose_Ticket, _super);
    function Choose_Ticket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Choose_Ticket.prototype.onLoad = function () {
        this.btn_Blue = cc.find("Layout/Blue/btn_Check", this.node);
        this.btn_Red = cc.find("Layout/Red/btn_Check", this.node);
        this.btn_Green = cc.find("Layout/Green/btn_Check", this.node);
        this.btn_Blue.on(onClick_1.onClick.TouchEnd, this.onBtnFuntion, this);
        this.btn_Green.on(onClick_1.onClick.TouchEnd, this.onBtnFuntion, this);
        this.btn_Red.on(onClick_1.onClick.TouchEnd, this.onBtnFuntion, this);
    };
    Choose_Ticket.prototype.start = function () {
        this.node.opacity = 0;
        this.hide();
    };
    Choose_Ticket.prototype.onBtnFuntion = function (e) {
        var _node = e.target;
        MusciMng_1.default.effectPlay("BtnClick");
        switch (_node.parent.name) {
            case "Blue":
                GameModle_1.default.playData.level = 0;
                break;
            case "Green":
                GameModle_1.default.playData.level = 1;
                break;
            case "Red":
                GameModle_1.default.playData.level = 2;
                break;
        }
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndChooseTicket);
        // this.actionHide(() => {
        //     this.EventEmit(GameEvent.SendCommand, Commamnd.EndChooseTicket)
        // });
    };
    Choose_Ticket = __decorate([
        ccclass
    ], Choose_Ticket);
    return Choose_Ticket;
}(ComponentBase_1.default));
exports.default = Choose_Ticket;
var btn = /** @class */ (function () {
    function btn(_node, _level) {
        this.level = _level;
        this.node = _node;
        _node.on(onClick_1.onClick.TouchEnd, function () {
            GameModle_1.default.playData.level = 2;
        });
    }
    return btn;
}());

cc._RF.pop();