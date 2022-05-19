"use strict";
cc._RF.push(module, '8d3fc6vc8FL26iKfbeHKRat', 'Panel_Message');
// Script/Class/Message/Panel_Message.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../Enum/GameEvent");
var Choose_Ticket_1 = require("./Choose_Ticket");
var Choose_Train_1 = require("./Choose_Train");
var EndGame_1 = require("./EndGame");
var Explain_1 = require("./Explain");
var GetProps_1 = require("./GetProps");
var MessageAction_1 = require("./MessageAction");
var QAAnswer_1 = require("./QAAnswer");
var Question_1 = require("./Question");
var StationInfo_1 = require("./StationInfo");
var Panel_Message = /** @class */ (function (_super) {
    __extends(Panel_Message, _super);
    function Panel_Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel_Message.prototype.onLoad = function () {
        this.bg = cc.find("BG", this.node);
        this.bgMask = cc.find("Mask", this.bg);
        this.btn_Close = cc.find("Btn_Close", this.bg);
        this.block = cc.find("Block", this.node);
        this.choose_Train = cc.find("Choose_Train", this.bgMask).addComponent(Choose_Train_1.default);
        this.choose_Ticket = cc.find("Choose_Ticket", this.bgMask).addComponent(Choose_Ticket_1.default);
        this.question = cc.find("Question", this.bgMask).addComponent(Question_1.default);
        this.explain = cc.find("Explain", this.bgMask).addComponent(Explain_1.default);
        this.qaAnswer = cc.find("QAAnswer", this.bgMask).addComponent(QAAnswer_1.default);
        this.stationInfo = cc.find("StationInfo", this.bgMask).addComponent(StationInfo_1.default);
        this.getProps = cc.find("GetProps", this.bgMask).addComponent(GetProps_1.default);
        this.endGame = cc.find("EndGame", this.bgMask).addComponent(EndGame_1.default);
        this.initEvent(GameEvent_1.GameEvent.ShowMessage, this.show);
        this.initEvent(GameEvent_1.GameEvent.HideMessage, this.hide);
        this.defaultReset();
        this.bg.setScale(0);
        this.block.active = false;
    };
    // protected start(): void {
    // }
    Panel_Message.prototype.show = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this.bg.scale == 1) {
                            resolve();
                            return;
                        }
                        _this.EventEmit(GameEvent_1.GameEvent.OpenBufer);
                        _this.bg.setScale(0);
                        _this.block.active = true;
                        _this.outBack(_this.bg, 1, resolve);
                    })];
            });
        });
    };
    Panel_Message.prototype.hide = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this.bg.scale == 0) {
                            resolve();
                            return;
                        }
                        _this.inBack(_this.bg, 0, function () {
                            _this.EventEmit(GameEvent_1.GameEvent.CloseBufer);
                            _this.block.active = false;
                            resolve();
                        });
                    })];
            });
        });
    };
    return Panel_Message;
}(MessageAction_1.default));
exports.default = Panel_Message;

cc._RF.pop();