
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
        this.initEvent(GameEvent_1.GameEvent.UIReset, this.reset);
        this.reset();
    };
    Panel_UI.prototype.start = function () {
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
                        this.setting.scroll.node.active = false;
                        this.setting.isOpen = this.setting.scroll.node.active;
                        this.bg.active = false;
                        this.block.active = false;
                        return [2 /*return*/];
                }
            });
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcVUlcXFBhbmVsX1VJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUNsRCwrREFBMEQ7QUFDMUQscURBQWdEO0FBQ2hELDRDQUE2QztBQUM3QyxrREFBaUQ7QUFDakQsaURBQTRDO0FBQzVDLHFDQUFnQztBQUNoQyxxQ0FBZ0M7QUFFMUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQWE7SUFBbkQ7O0lBaUZBLENBQUM7SUEzRWEseUJBQU0sR0FBaEI7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUE7UUFDdkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQTtRQUNwRixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsaUJBQU8sQ0FBQyxDQUFBO1FBQ2xFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxp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QUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUE7Z0JBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7Z0JBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQ2hDLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtnQkFDakMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO2dCQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDM0QsTUFBTTtTQUViO0lBQ0wsQ0FBQztJQWhGZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlGNUI7SUFBRCxlQUFDO0NBakZELEFBaUZDLENBakZxQyx1QkFBYSxHQWlGbEQ7a0JBakZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbk1uZyBmcm9tIFwiLi4vLi4vRGF0YS9iYXNlL0J1dHRvbk1uZ1wiO1xyXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2VcIjtcclxuaW1wb3J0IE11c2NpTW5nIGZyb20gXCIuLi8uLi9EYXRhL2Jhc2UvTXVzY2lNbmdcIjtcclxuaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tIFwiLi4vLi4vRW51bS9Db21tYWRcIjtcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSBcIi4uLy4uL0VudW0vR2FtZUV2ZW50XCI7XHJcbmltcG9ydCBQcm9wc19GZWF0dXJlIGZyb20gXCIuL1Byb3BzX0ZlYXR1cmVcIjtcclxuaW1wb3J0IFNldHRpbmcgZnJvbSBcIi4vU2V0dGluZ1wiO1xyXG5pbXBvcnQgU3RhdGlvbiBmcm9tIFwiLi9TdGF0aW9uXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxfVUkgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGJnOiBjYy5Ob2RlO1xyXG4gICAgYmxvY2s6IGNjLk5vZGVcclxuICAgIHByb3BzX0ZlYXR1cmU6IFByb3BzX0ZlYXR1cmU7XHJcbiAgICBzdGF0aW9uOiBTdGF0aW9uXHJcbiAgICBzZXR0aW5nOiBTZXR0aW5nXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NVxyXG4gICAgICAgIHRoaXMuYmcgPSBjYy5maW5kKFwiQkdcIiwgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuYmxvY2sgPSBjYy5maW5kKFwiQmxvY2tcIiwgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMucHJvcHNfRmVhdHVyZSA9IGNjLmZpbmQoXCJQcm9wc19GZWF0dXJlXCIsIHRoaXMubm9kZSkuYWRkQ29tcG9uZW50KFByb3BzX0ZlYXR1cmUpXHJcbiAgICAgICAgdGhpcy5zdGF0aW9uID0gY2MuZmluZChcIlN0YXRpb25cIiwgdGhpcy5ub2RlKS5hZGRDb21wb25lbnQoU3RhdGlvbilcclxuICAgICAgICB0aGlzLnNldHRpbmcgPSBjYy5maW5kKFwiU2V0dGluZ1wiLCB0aGlzLm5vZGUpLmFkZENvbXBvbmVudChTZXR0aW5nKVxyXG5cclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuVUlSZXNldCwgdGhpcy5yZXNldClcclxuICAgICAgICB0aGlzLnJlc2V0KClcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIlBhbmVsX1VJXCIsIFwiZXZlbnRDb250cm9sbFwiLCBjYy5maW5kKFwiQnRuX0Nsb3NlXCIsIHRoaXMucHJvcHNfRmVhdHVyZS5pbmZvMCkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbiksIFwiMFwiKVxyXG4gICAgICAgIEJ1dHRvbk1uZy5hZGRFdmVudCh0aGlzLm5vZGUsIFwiUGFuZWxfVUlcIiwgXCJldmVudENvbnRyb2xsXCIsIGNjLmZpbmQoXCJCdG5fQ2xvc2VcIiwgdGhpcy5wcm9wc19GZWF0dXJlLmluZm8xKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSwgXCIxXCIpXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJQYW5lbF9VSVwiLCBcImV2ZW50Q29udHJvbGxcIiwgY2MuZmluZChcIkJ0bl9DbG9zZVwiLCB0aGlzLnN0YXRpb24uaW5mbzIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLCBcIjJcIilcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIlBhbmVsX1VJXCIsIFwiZXZlbnRDb250cm9sbFwiLCBjYy5maW5kKFwiQnRuX0Nsb3NlXCIsIHRoaXMuc2V0dGluZy5pbmZvMykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbiksIFwiM1wiKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgcmVzZXQoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jaGVja0luaXQoKVxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFJlc2V0KClcclxuICAgICAgICB0aGlzLnN0YXRpb24uc2Nyb2xsLm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuc3RhdGlvbi5pc09wZW4gPSB0aGlzLnN0YXRpb24uc2Nyb2xsLm5vZGUuYWN0aXZlXHJcbiAgICAgICAgdGhpcy5zZXR0aW5nLnNjcm9sbC5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zZXR0aW5nLmlzT3BlbiA9IHRoaXMuc2V0dGluZy5zY3JvbGwubm9kZS5hY3RpdmVcclxuICAgICAgICB0aGlzLmJnLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ibG9jay5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgY2hlY2tJbml0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXBldCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGVjayA9IHRoaXMuc3RhdGlvbi5jaGVja0luaXQoKVxyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChyZXBldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA1MDApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIG9wZW5UZWFjaGluZygpIHtcclxuICAgICAgICB0aGlzLmJnLnNldFNpYmxpbmdJbmRleChjYy5tYWNyby5NQVhfWklOREVYKVxyXG4gICAgICAgIHRoaXMucHJvcHNfRmVhdHVyZS5pbmZvMC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5iZy5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5ibG9jay5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5wcm9wc19GZWF0dXJlLm5vZGUuc2V0U2libGluZ0luZGV4KGNjLm1hY3JvLk1BWF9aSU5ERVgpXHJcbiAgICB9XHJcbiAgICBldmVudENvbnRyb2xsKGU6IGNjLkV2ZW50LCBfY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBNdXNjaU1uZy5lZmZlY3RQbGF5KFwiQnRuQ2xpY2tcIilcclxuICAgICAgICBzd2l0Y2ggKE51bWJlcihfY3VzdG9tRXZlbnREYXRhKSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wc19GZWF0dXJlLmluZm8wLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzX0ZlYXR1cmUuaW5mbzEuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGlvbi5ub2RlLnNldFNpYmxpbmdJbmRleChjYy5tYWNyby5NQVhfWklOREVYKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wc19GZWF0dXJlLm5vZGUuc2V0U2libGluZ0luZGV4KGNjLm1hY3JvLk1JTl9aSU5ERVggKyAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wc19GZWF0dXJlLmluZm8xLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpb24uaW5mbzIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZy5ub2RlLnNldFNpYmxpbmdJbmRleChjYy5tYWNyby5NQVhfWklOREVYKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aW9uLm5vZGUuc2V0U2libGluZ0luZGV4KGNjLm1hY3JvLk1JTl9aSU5ERVggKyAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aW9uLmluZm8yLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmcuaW5mbzMuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZy5pbmZvMy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ibG9jay5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5FbmRUZWFjaGluZylcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=