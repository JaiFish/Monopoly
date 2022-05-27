
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/UI/SettingBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43ed1S+sx1BUpPBwcVxQj8L', 'SettingBtn');
// Script/Class/UI/SettingBtn.ts

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
var AssetMng_1 = require("../../Asset/AssetMng");
var ButtonMng_1 = require("../../Data/base/ButtonMng");
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var MusciMng_1 = require("../../Data/base/MusciMng");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SettingBtn = /** @class */ (function (_super) {
    __extends(SettingBtn, _super);
    function SettingBtn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingBtn.prototype.onLoad = function () {
        this.sprite = cc.find("icon", this.node).getComponent(cc.Sprite);
        this.btn = this.node.getComponent(cc.Button);
        this.node.setPosition(0, 0);
        this.nowState = true;
    };
    SettingBtn.prototype.setEvent = function (_num) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = _num;
                        switch (_a) {
                            case 0: return [3 /*break*/, 1];
                        }
                        return [3 /*break*/, 3];
                    case 1: //聲音   
                    return [4 /*yield*/, AssetMng_1.default.checkState()];
                    case 2:
                        _b.sent();
                        this.setSoundSprite();
                        ButtonMng_1.default.addEvent(this.node, "SettingBtn", "eventSwitchSound", this.btn);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SettingBtn.prototype.eventSwitchSound = function () {
        MusciMng_1.default.swichEffect();
        MusciMng_1.default.swichMusic();
        MusciMng_1.default.effectPlay("BtnClick");
        this.setSoundSprite();
    };
    SettingBtn.prototype.setSoundSprite = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getBoolean;
            return __generator(this, function (_a) {
                getBoolean = MusciMng_1.default.isMusicOpen ? "Open" : "Close";
                this.nowState = MusciMng_1.default.isMusicOpen;
                this.sprite.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Sound" + getBoolean);
                return [2 /*return*/];
            });
        });
    };
    SettingBtn = __decorate([
        ccclass
    ], SettingBtn);
    return SettingBtn;
}(ComponentBase_1.default));
exports.default = SettingBtn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcVUlcXFNldHRpbmdCdG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCwrREFBMEQ7QUFDMUQscURBQWdEO0FBQzFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFhO0lBQXJEOztJQThCQSxDQUFDO0lBMUJhLDJCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNoRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7SUFDeEIsQ0FBQztJQUNLLDZCQUFRLEdBQWQsVUFBZSxJQUFZOzs7Ozs7d0JBQ2YsS0FBQSxJQUFJLENBQUE7O2lDQUNILENBQUMsQ0FBQyxDQUFGLHdCQUFDOzs7NEJBQUMsT0FBTztvQkFDVixxQkFBTSxrQkFBUSxDQUFDLFVBQVUsRUFBRSxFQUFBOzt3QkFBM0IsU0FBMkIsQ0FBQTt3QkFDM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO3dCQUNyQixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7d0JBQ3pFLHdCQUFNOzs7OztLQUVqQjtJQUNELHFDQUFnQixHQUFoQjtRQUNJLGtCQUFRLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDdEIsa0JBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNyQixrQkFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDekIsQ0FBQztJQUNLLG1DQUFjLEdBQXBCOzs7O2dCQUNRLFVBQVUsR0FBRyxrQkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsa0JBQVEsQ0FBQyxXQUFXLENBQUE7Z0JBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLGtCQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsQ0FBQTs7OztLQUNoRjtJQTdCZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQThCOUI7SUFBRCxpQkFBQztDQTlCRCxBQThCQyxDQTlCdUMsdUJBQWEsR0E4QnBEO2tCQTlCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3NldE1uZyBmcm9tICcuLi8uLi9Bc3NldC9Bc3NldE1uZyc7XHJcbmltcG9ydCBCdXR0b25NbmcgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0J1dHRvbk1uZyc7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlJztcclxuaW1wb3J0IE11c2NpTW5nIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9NdXNjaU1uZyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nQnRuIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICBzcHJpdGU6IGNjLlNwcml0ZVxyXG4gICAgYnRuOiBjYy5CdXR0b25cclxuICAgIG5vd1N0YXRlOiBib29sZWFuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gY2MuZmluZChcImljb25cIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgIHRoaXMuYnRuID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbigwLCAwKVxyXG4gICAgICAgIHRoaXMubm93U3RhdGUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBhc3luYyBzZXRFdmVudChfbnVtOiBudW1iZXIpIHtcclxuICAgICAgICBzd2l0Y2ggKF9udW0pIHtcclxuICAgICAgICAgICAgY2FzZSAwOi8v6IGy6Z+zICAgXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBBc3NldE1uZy5jaGVja1N0YXRlKClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U291bmRTcHJpdGUoKVxyXG4gICAgICAgICAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJTZXR0aW5nQnRuXCIsIFwiZXZlbnRTd2l0Y2hTb3VuZFwiLCB0aGlzLmJ0bilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGV2ZW50U3dpdGNoU291bmQoKSB7XHJcbiAgICAgICAgTXVzY2lNbmcuc3dpY2hFZmZlY3QoKVxyXG4gICAgICAgIE11c2NpTW5nLnN3aWNoTXVzaWMoKVxyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJCdG5DbGlja1wiKVxyXG4gICAgICAgIHRoaXMuc2V0U291bmRTcHJpdGUoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgc2V0U291bmRTcHJpdGUoKSB7XHJcbiAgICAgICAgbGV0IGdldEJvb2xlYW4gPSBNdXNjaU1uZy5pc011c2ljT3BlbiA/IFwiT3BlblwiIDogXCJDbG9zZVwiO1xyXG4gICAgICAgIHRoaXMubm93U3RhdGUgPSBNdXNjaU1uZy5pc011c2ljT3BlblxyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJTb3VuZFwiICsgZ2V0Qm9vbGVhbilcclxuICAgIH1cclxufSJdfQ==