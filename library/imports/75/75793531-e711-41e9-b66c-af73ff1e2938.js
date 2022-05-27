"use strict";
cc._RF.push(module, '75793Ux5xFB6bZsr3P/Hik4', 'Panel_UI');
// Script/Class/UI/Panel_UI.ts

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
var ButtonMng_1 = require("../../Data/base/ButtonMng");
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var MusciMng_1 = require("../../Data/base/MusciMng");
var Commad_1 = require("../../Enum/Commad");
var GameEvent_1 = require("../../Enum/GameEvent");
var BackGameUse_1 = require("./BackGameUse");
var Props_Feature_1 = require("./Props_Feature");
var Setting_1 = require("./Setting");
var Station_1 = require("./Station");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Panel_UI = /** @class */ (function (_super) {
    __extends(Panel_UI, _super);
    function Panel_UI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel_UI.prototype.onLoad = function () {
        this.node.opacity = 255;
        this.bg = cc.find("BG", this.node);
        this.block = cc.find("Block", this.node);
        this.props_Feature = cc.find("Props_Feature", this.node).addComponent(Props_Feature_1.default);
        this.station = cc.find("Station", this.node).addComponent(Station_1.default);
        this.setting = cc.find("Setting", this.node).addComponent(Setting_1.default);
        this.backGameUse = cc.find("BackGameUse", this.node).addComponent(BackGameUse_1.default);
        this.initEvent(GameEvent_1.GameEvent.UIReset, this.reset);
        this.reset();
    };
    Panel_UI.prototype.start = function () {
        //Teach
        ButtonMng_1.default.addEvent(this.node, "Panel_UI", "eventControll", cc.find("Btn_Close", this.props_Feature.info0).getComponent(cc.Button), "0");
        ButtonMng_1.default.addEvent(this.node, "Panel_UI", "eventControll", cc.find("Btn_Close", this.props_Feature.info1).getComponent(cc.Button), "1");
        ButtonMng_1.default.addEvent(this.node, "Panel_UI", "eventControll", cc.find("Btn_Close", this.station.info2).getComponent(cc.Button), "2");
        ButtonMng_1.default.addEvent(this.node, "Panel_UI", "eventControll", cc.find("Btn_Close", this.setting.info3).getComponent(cc.Button), "3");
    };
    Panel_UI.prototype.reset = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkInit()];
                    case 1:
                        _a.sent();
                        this.defaultReset();
                        this.station.scroll.node.active = true;
                        this.station.isOpen = this.station.scroll.node.active;
                        this.station.icon.angle = 0;
                        this.setting.scroll.node.active = false;
                        this.setting.isOpen = this.setting.scroll.node.active;
                        this.bg.active = false;
                        this.block.active = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    Panel_UI.prototype.setBtnEvent = function () {
        //Statino
        ButtonMng_1.default.addEvent(this.station.node, "Station", "eventControllOpen", this.station.btn_ControllOpen);
        //Setting
        ButtonMng_1.default.addEvent(this.setting.node, "Setting", "eventControllOpen", this.setting.btn_ControllOpen);
        //Props_Feature
        ButtonMng_1.default.addEvent(this.props_Feature.node, "Props_Feature", "eventClinetClickStart_Stop", this.props_Feature.btn_Start_Stop);
        ButtonMng_1.default.addEvent(this.props_Feature.node, "Props_Feature", "eventSkip", this.props_Feature.skip);
        ButtonMng_1.default.addEvent(this.props_Feature.node, "Props_Feature", "evetResetView", this.props_Feature.resetView);
    };
    Panel_UI.prototype.setbtnEvent_Again = function () {
        this.station.block.active = true;
        this.station.info2.active = true;
        this.station.scroll.node.active = true;
        this.station.isOpen = this.station.scroll.node.active;
        this.station.icon.angle = 0;
        this.station.chengeInfo2BtnText();
        this.setting.node.setSiblingIndex(cc.macro.MIN_ZINDEX);
        this.backGameUse.node.setSiblingIndex(cc.macro.MIN_ZINDEX);
        this.station.node.setSiblingIndex(cc.macro.MAX_ZINDEX);
        this.bg.active = true;
        this.block.active = true;
        ButtonMng_1.default.reMoveEvent(cc.find("Btn_Close", this.station.info2).getComponent(cc.Button), "eventControll");
        ButtonMng_1.default.addEvent(this.node, "Panel_UI", "eventAgain", cc.find("Btn_Close", this.station.info2).getComponent(cc.Button));
    };
    Panel_UI.prototype.checkInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var repet = setInterval(function () {
                            var check = _this.station.checkInit();
                            if (check) {
                                clearInterval(repet);
                                resolve();
                            }
                        }, 500);
                    })];
            });
        });
    };
    Panel_UI.prototype.openTeaching = function () {
        this.bg.setSiblingIndex(cc.macro.MAX_ZINDEX);
        this.props_Feature.info0.active = true;
        this.bg.active = true;
        this.block.active = true;
        this.props_Feature.node.setSiblingIndex(cc.macro.MAX_ZINDEX);
    };
    Panel_UI.prototype.eventControll = function (e, _customEventData) {
        MusciMng_1.default.effectPlay("BtnClick");
        switch (Number(_customEventData)) {
            case 0:
                this.props_Feature.info0.active = false;
                this.props_Feature.info1.active = true;
                break;
            case 1:
                this.station.node.setSiblingIndex(cc.macro.MAX_ZINDEX);
                this.props_Feature.node.setSiblingIndex(cc.macro.MIN_ZINDEX + 1);
                this.props_Feature.info1.active = false;
                this.station.info2.active = true;
                break;
            case 2:
                this.setting.node.setSiblingIndex(cc.macro.MAX_ZINDEX);
                this.station.node.setSiblingIndex(cc.macro.MIN_ZINDEX + 1);
                this.station.info2.active = false;
                this.setting.info3.active = true;
                break;
            case 3:
                this.setting.info3.active = false;
                this.bg.active = false;
                this.block.active = false;
                this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndTeaching);
                break;
        }
    };
    Panel_UI.prototype.eventAgain = function () {
        this.station.info2.active = false;
        this.bg.active = false;
        this.block.active = false;
        this.station.block.active = false;
    };
    Panel_UI = __decorate([
        ccclass
    ], Panel_UI);
    return Panel_UI;
}(ComponentBase_1.default));
exports.default = Panel_UI;

cc._RF.pop();