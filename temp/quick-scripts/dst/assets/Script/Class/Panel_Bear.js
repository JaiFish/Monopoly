
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Panel_Bear.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b2f2VJSTtNSakKsKrk6rXs', 'Panel_Bear');
// Script/Class/Panel_Bear.ts

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
var AssetMng_1 = require("../Asset/AssetMng");
var ComponentBase_1 = require("../Data/base/ComponentBase");
var BearState_1 = require("../Enum/BearState");
var GameState_1 = require("../Enum/GameState");
var GameModle_1 = require("../GameModle");
var Panel_Bear = /** @class */ (function (_super) {
    __extends(Panel_Bear, _super);
    function Panel_Bear() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tempDT = 0;
        _this.targetDT = 3;
        return _this;
    }
    Panel_Bear.prototype.onLoad = function () {
        this.sprite = cc.find("sprite", this.node).getComponent(cc.Sprite);
    };
    Panel_Bear.prototype.checkState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var loop = setInterval(function () {
                            if (_this.nowState == BearState_1.BearState.Green) {
                                clearInterval(loop);
                                resolve();
                            }
                        }, 50);
                    })];
            });
        });
    };
    Panel_Bear.prototype.init = function () {
        this.nowState = BearState_1.BearState.Red;
        GameModle_1.default.bearState = this.nowState;
        this.sprite.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Bear_" + this.nowState);
        // console.log(AssetMng.data_SprtieAtlas.get("Bear_" + this.nowState));
    };
    Panel_Bear.prototype.update = function (dt) {
        if (GameModle_1.default.gameState == GameState_1.GameState.Start) {
            this.tempDT += dt;
            if (this.tempDT > this.targetDT) {
                this.nowState = this.nowState == BearState_1.BearState.Red ? BearState_1.BearState.Green : BearState_1.BearState.Red;
                GameModle_1.default.bearState = this.nowState;
                this.sprite.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Bear_" + this.nowState);
                this.tempDT = 0;
            }
        }
    };
    return Panel_Bear;
}(ComponentBase_1.default));
exports.default = Panel_Bear;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcUGFuZWxfQmVhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUM7QUFDekMsNERBQXVEO0FBQ3ZELCtDQUE4QztBQUU5QywrQ0FBOEM7QUFDOUMsMENBQXFDO0FBRXJDO0lBQXdDLDhCQUFhO0lBQXJEO1FBQUEscUVBc0NDO1FBbkNHLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsY0FBUSxHQUFXLENBQUMsQ0FBQTs7SUFrQ3hCLENBQUM7SUFoQ2EsMkJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRXRFLENBQUM7SUFDSywrQkFBVSxHQUFoQjs7OztnQkFDSSxzQkFBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUNyQyxJQUFJLElBQUksR0FBRyxXQUFXLENBQUM7NEJBQ25CLElBQUksS0FBSSxDQUFDLFFBQVEsSUFBSSxxQkFBUyxDQUFDLEtBQUssRUFBRTtnQ0FDbEMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO2dDQUNuQixPQUFPLEVBQUUsQ0FBQTs2QkFDWjt3QkFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7b0JBQ1YsQ0FBQyxDQUFDLEVBQUE7OztLQUNMO0lBRUQseUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQVMsQ0FBQyxHQUFHLENBQUE7UUFDN0IsbUJBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQTtRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxrQkFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2hGLHVFQUF1RTtJQUMzRSxDQUFDO0lBQ1MsMkJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLG1CQUFTLENBQUMsU0FBUyxJQUFJLHFCQUFTLENBQUMsS0FBSyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFBO1lBQ2pCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUkscUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLHFCQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxxQkFBUyxDQUFDLEdBQUcsQ0FBQTtnQkFDaEYsbUJBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQTtnQkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsa0JBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDaEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7YUFDbEI7U0FDSjtJQUNMLENBQUM7SUFDTCxpQkFBQztBQUFELENBdENBLEFBc0NDLENBdEN1Qyx1QkFBYSxHQXNDcEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXRNbmcgZnJvbSAnLi4vQXNzZXQvQXNzZXRNbmcnO1xyXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tICcuLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZSc7XHJcbmltcG9ydCB7IEJlYXJTdGF0ZSB9IGZyb20gJy4uL0VudW0vQmVhclN0YXRlJztcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSAnLi4vRW51bS9HYW1lRXZlbnQnO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tICcuLi9FbnVtL0dhbWVTdGF0ZSc7XHJcbmltcG9ydCBHYW1lTW9kbGUgZnJvbSAnLi4vR2FtZU1vZGxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsX0JlYXIgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIHNwcml0ZTogY2MuU3ByaXRlXHJcbiAgICBub3dTdGF0ZTogQmVhclN0YXRlO1xyXG4gICAgdGVtcERUOiBudW1iZXIgPSAwO1xyXG4gICAgdGFyZ2V0RFQ6IG51bWJlciA9IDNcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gY2MuZmluZChcInNwcml0ZVwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcblxyXG4gICAgfVxyXG4gICAgYXN5bmMgY2hlY2tTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbG9vcCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vd1N0YXRlID09IEJlYXJTdGF0ZS5HcmVlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobG9vcClcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgNTApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm93U3RhdGUgPSBCZWFyU3RhdGUuUmVkXHJcbiAgICAgICAgR2FtZU1vZGxlLmJlYXJTdGF0ZSA9IHRoaXMubm93U3RhdGVcclxuICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiQmVhcl9cIiArIHRoaXMubm93U3RhdGUpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJCZWFyX1wiICsgdGhpcy5ub3dTdGF0ZSkpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEdhbWVNb2RsZS5nYW1lU3RhdGUgPT0gR2FtZVN0YXRlLlN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcERUICs9IGR0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRlbXBEVCA+IHRoaXMudGFyZ2V0RFQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm93U3RhdGUgPSB0aGlzLm5vd1N0YXRlID09IEJlYXJTdGF0ZS5SZWQgPyBCZWFyU3RhdGUuR3JlZW4gOiBCZWFyU3RhdGUuUmVkXHJcbiAgICAgICAgICAgICAgICBHYW1lTW9kbGUuYmVhclN0YXRlID0gdGhpcy5ub3dTdGF0ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIkJlYXJfXCIgKyB0aGlzLm5vd1N0YXRlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wRFQgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=