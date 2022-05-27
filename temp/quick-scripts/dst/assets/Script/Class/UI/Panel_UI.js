
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/UI/Panel_UI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcVUlcXFBhbmVsX1VJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUNsRCwrREFBMEQ7QUFDMUQscURBQWdEO0FBQ2hELDRDQUE2QztBQUM3QyxrREFBaUQ7QUFDakQsNkNBQXdDO0FBQ3hDLGlEQUE0QztBQUM1QyxxQ0FBZ0M7QUFDaEMscUNBQWdDO0FBRTFCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFhO0lBQW5EOztJQW9IQSxDQUFDO0lBN0dhLHlCQUFNLEdBQWhCO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyx1QkFBYSxDQUFDLENBQUE7UUFDcEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsQ0FBQTtRQUNsRSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FB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ImltcG9ydCBCdXR0b25NbmcgZnJvbSBcIi4uLy4uL0RhdGEvYmFzZS9CdXR0b25NbmdcIjtcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSBcIi4uLy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlXCI7XHJcbmltcG9ydCBNdXNjaU1uZyBmcm9tIFwiLi4vLi4vRGF0YS9iYXNlL011c2NpTW5nXCI7XHJcbmltcG9ydCB7IENvbW1hbW5kIH0gZnJvbSBcIi4uLy4uL0VudW0vQ29tbWFkXCI7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gXCIuLi8uLi9FbnVtL0dhbWVFdmVudFwiO1xyXG5pbXBvcnQgQmFja0dhbWVVc2UgZnJvbSBcIi4vQmFja0dhbWVVc2VcIjtcclxuaW1wb3J0IFByb3BzX0ZlYXR1cmUgZnJvbSBcIi4vUHJvcHNfRmVhdHVyZVwiO1xyXG5pbXBvcnQgU2V0dGluZyBmcm9tIFwiLi9TZXR0aW5nXCI7XHJcbmltcG9ydCBTdGF0aW9uIGZyb20gXCIuL1N0YXRpb25cIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbF9VSSBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgYmc6IGNjLk5vZGU7XHJcbiAgICBibG9jazogY2MuTm9kZVxyXG4gICAgcHJvcHNfRmVhdHVyZTogUHJvcHNfRmVhdHVyZTtcclxuICAgIHN0YXRpb246IFN0YXRpb25cclxuICAgIHNldHRpbmc6IFNldHRpbmdcclxuICAgIGJhY2tHYW1lVXNlOiBCYWNrR2FtZVVzZVxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTVcclxuICAgICAgICB0aGlzLmJnID0gY2MuZmluZChcIkJHXCIsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmJsb2NrID0gY2MuZmluZChcIkJsb2NrXCIsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLnByb3BzX0ZlYXR1cmUgPSBjYy5maW5kKFwiUHJvcHNfRmVhdHVyZVwiLCB0aGlzLm5vZGUpLmFkZENvbXBvbmVudChQcm9wc19GZWF0dXJlKVxyXG4gICAgICAgIHRoaXMuc3RhdGlvbiA9IGNjLmZpbmQoXCJTdGF0aW9uXCIsIHRoaXMubm9kZSkuYWRkQ29tcG9uZW50KFN0YXRpb24pXHJcbiAgICAgICAgdGhpcy5zZXR0aW5nID0gY2MuZmluZChcIlNldHRpbmdcIiwgdGhpcy5ub2RlKS5hZGRDb21wb25lbnQoU2V0dGluZylcclxuICAgICAgICB0aGlzLmJhY2tHYW1lVXNlID0gY2MuZmluZChcIkJhY2tHYW1lVXNlXCIsIHRoaXMubm9kZSkuYWRkQ29tcG9uZW50KEJhY2tHYW1lVXNlKTtcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuVUlSZXNldCwgdGhpcy5yZXNldClcclxuICAgICAgICB0aGlzLnJlc2V0KClcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICAvL1RlYWNoXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJQYW5lbF9VSVwiLCBcImV2ZW50Q29udHJvbGxcIiwgY2MuZmluZChcIkJ0bl9DbG9zZVwiLCB0aGlzLnByb3BzX0ZlYXR1cmUuaW5mbzApLmdldENvbXBvbmVudChjYy5CdXR0b24pLCBcIjBcIilcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIlBhbmVsX1VJXCIsIFwiZXZlbnRDb250cm9sbFwiLCBjYy5maW5kKFwiQnRuX0Nsb3NlXCIsIHRoaXMucHJvcHNfRmVhdHVyZS5pbmZvMSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbiksIFwiMVwiKVxyXG4gICAgICAgIEJ1dHRvbk1uZy5hZGRFdmVudCh0aGlzLm5vZGUsIFwiUGFuZWxfVUlcIiwgXCJldmVudENvbnRyb2xsXCIsIGNjLmZpbmQoXCJCdG5fQ2xvc2VcIiwgdGhpcy5zdGF0aW9uLmluZm8yKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSwgXCIyXCIpXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJQYW5lbF9VSVwiLCBcImV2ZW50Q29udHJvbGxcIiwgY2MuZmluZChcIkJ0bl9DbG9zZVwiLCB0aGlzLnNldHRpbmcuaW5mbzMpLmdldENvbXBvbmVudChjYy5CdXR0b24pLCBcIjNcIilcclxuICAgIH1cclxuICAgIGFzeW5jIHJlc2V0KCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY2hlY2tJbml0KClcclxuICAgICAgICB0aGlzLmRlZmF1bHRSZXNldCgpXHJcbiAgICAgICAgdGhpcy5zdGF0aW9uLnNjcm9sbC5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnN0YXRpb24uaXNPcGVuID0gdGhpcy5zdGF0aW9uLnNjcm9sbC5ub2RlLmFjdGl2ZVxyXG4gICAgICAgIHRoaXMuc3RhdGlvbi5pY29uLmFuZ2xlID0gMFxyXG4gICAgICAgIHRoaXMuc2V0dGluZy5zY3JvbGwubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2V0dGluZy5pc09wZW4gPSB0aGlzLnNldHRpbmcuc2Nyb2xsLm5vZGUuYWN0aXZlXHJcbiAgICAgICAgdGhpcy5iZy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYmxvY2suYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuICAgIHNldEJ0bkV2ZW50KCkge1xyXG4gICAgICAgIC8vU3RhdGlub1xyXG4gICAgICAgIEJ1dHRvbk1uZy5hZGRFdmVudCh0aGlzLnN0YXRpb24ubm9kZSwgXCJTdGF0aW9uXCIsIFwiZXZlbnRDb250cm9sbE9wZW5cIiwgdGhpcy5zdGF0aW9uLmJ0bl9Db250cm9sbE9wZW4pXHJcbiAgICAgICAgLy9TZXR0aW5nXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMuc2V0dGluZy5ub2RlLCBcIlNldHRpbmdcIiwgXCJldmVudENvbnRyb2xsT3BlblwiLCB0aGlzLnNldHRpbmcuYnRuX0NvbnRyb2xsT3BlbilcclxuICAgICAgICAvL1Byb3BzX0ZlYXR1cmVcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5wcm9wc19GZWF0dXJlLm5vZGUsIFwiUHJvcHNfRmVhdHVyZVwiLCBcImV2ZW50Q2xpbmV0Q2xpY2tTdGFydF9TdG9wXCIsIHRoaXMucHJvcHNfRmVhdHVyZS5idG5fU3RhcnRfU3RvcClcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5wcm9wc19GZWF0dXJlLm5vZGUsIFwiUHJvcHNfRmVhdHVyZVwiLCBcImV2ZW50U2tpcFwiLCB0aGlzLnByb3BzX0ZlYXR1cmUuc2tpcClcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5wcm9wc19GZWF0dXJlLm5vZGUsIFwiUHJvcHNfRmVhdHVyZVwiLCBcImV2ZXRSZXNldFZpZXdcIiwgdGhpcy5wcm9wc19GZWF0dXJlLnJlc2V0VmlldylcclxuXHJcbiAgICB9XHJcbiAgICBzZXRidG5FdmVudF9BZ2FpbigpIHtcclxuICAgICAgICB0aGlzLnN0YXRpb24uYmxvY2suYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuc3RhdGlvbi5pbmZvMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5zdGF0aW9uLnNjcm9sbC5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnN0YXRpb24uaXNPcGVuID0gdGhpcy5zdGF0aW9uLnNjcm9sbC5ub2RlLmFjdGl2ZVxyXG4gICAgICAgIHRoaXMuc3RhdGlvbi5pY29uLmFuZ2xlID0gMFxyXG4gICAgICAgIHRoaXMuc3RhdGlvbi5jaGVuZ2VJbmZvMkJ0blRleHQoKVxyXG4gICAgICAgIHRoaXMuc2V0dGluZy5ub2RlLnNldFNpYmxpbmdJbmRleChjYy5tYWNyby5NSU5fWklOREVYKVxyXG4gICAgICAgIHRoaXMuYmFja0dhbWVVc2Uubm9kZS5zZXRTaWJsaW5nSW5kZXgoY2MubWFjcm8uTUlOX1pJTkRFWClcclxuICAgICAgICB0aGlzLnN0YXRpb24ubm9kZS5zZXRTaWJsaW5nSW5kZXgoY2MubWFjcm8uTUFYX1pJTkRFWClcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmJnLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmJsb2NrLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBCdXR0b25NbmcucmVNb3ZlRXZlbnQoY2MuZmluZChcIkJ0bl9DbG9zZVwiLCB0aGlzLnN0YXRpb24uaW5mbzIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLCBcImV2ZW50Q29udHJvbGxcIilcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIlBhbmVsX1VJXCIsIFwiZXZlbnRBZ2FpblwiLCBjYy5maW5kKFwiQnRuX0Nsb3NlXCIsIHRoaXMuc3RhdGlvbi5pbmZvMikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikpXHJcbiAgICB9XHJcbiAgICBhc3luYyBjaGVja0luaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlcGV0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5zdGF0aW9uLmNoZWNrSW5pdCgpXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHJlcGV0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDUwMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgb3BlblRlYWNoaW5nKCkge1xyXG4gICAgICAgIHRoaXMuYmcuc2V0U2libGluZ0luZGV4KGNjLm1hY3JvLk1BWF9aSU5ERVgpXHJcbiAgICAgICAgdGhpcy5wcm9wc19GZWF0dXJlLmluZm8wLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmJnLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmJsb2NrLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnByb3BzX0ZlYXR1cmUubm9kZS5zZXRTaWJsaW5nSW5kZXgoY2MubWFjcm8uTUFYX1pJTkRFWClcclxuICAgIH1cclxuICAgIGV2ZW50Q29udHJvbGwoZTogY2MuRXZlbnQsIF9jdXN0b21FdmVudERhdGE6IHN0cmluZykge1xyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJCdG5DbGlja1wiKVxyXG4gICAgICAgIHN3aXRjaCAoTnVtYmVyKF9jdXN0b21FdmVudERhdGEpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHNfRmVhdHVyZS5pbmZvMC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wc19GZWF0dXJlLmluZm8xLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpb24ubm9kZS5zZXRTaWJsaW5nSW5kZXgoY2MubWFjcm8uTUFYX1pJTkRFWClcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHNfRmVhdHVyZS5ub2RlLnNldFNpYmxpbmdJbmRleChjYy5tYWNyby5NSU5fWklOREVYICsgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHNfRmVhdHVyZS5pbmZvMS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aW9uLmluZm8yLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmcubm9kZS5zZXRTaWJsaW5nSW5kZXgoY2MubWFjcm8uTUFYX1pJTkRFWClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGlvbi5ub2RlLnNldFNpYmxpbmdJbmRleChjYy5tYWNyby5NSU5fWklOREVYICsgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGlvbi5pbmZvMi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nLmluZm8zLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmcuaW5mbzMuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYmcuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYmxvY2suYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuRW5kVGVhY2hpbmcpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXZlbnRBZ2FpbigpIHtcclxuICAgICAgICB0aGlzLnN0YXRpb24uaW5mbzIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmJnLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ibG9jay5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc3RhdGlvbi5ibG9jay5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG59Il19