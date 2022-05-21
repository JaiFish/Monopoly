
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
var GameState_1 = require("../Enum/GameState");
var GameModle_1 = require("../GameModle");
var BearState;
(function (BearState) {
    BearState["Green"] = "Green";
    BearState["Red"] = "Red";
})(BearState || (BearState = {}));
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
                            if (_this.nowState == BearState.Green) {
                                clearInterval(loop);
                                resolve();
                            }
                        }, 50);
                    })];
            });
        });
    };
    Panel_Bear.prototype.init = function () {
        this.nowState = BearState.Red;
        this.sprite.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Bear_" + this.nowState);
        console.log(AssetMng_1.default.data_SprtieAtlas.get("Bear_" + this.nowState));
    };
    Panel_Bear.prototype.update = function (dt) {
        if (GameModle_1.default.gameState == GameState_1.GameState.Start) {
            this.tempDT += dt;
            if (this.tempDT > this.targetDT) {
                this.nowState = this.nowState == BearState.Red ? BearState.Green : BearState.Red;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcUGFuZWxfQmVhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUM7QUFDekMsNERBQXVEO0FBRXZELCtDQUE4QztBQUM5QywwQ0FBcUM7QUFDckMsSUFBSyxTQUdKO0FBSEQsV0FBSyxTQUFTO0lBQ1YsNEJBQWUsQ0FBQTtJQUNmLHdCQUFXLENBQUE7QUFDZixDQUFDLEVBSEksU0FBUyxLQUFULFNBQVMsUUFHYjtBQUNEO0lBQXdDLDhCQUFhO0lBQXJEO1FBQUEscUVBb0NDO1FBakNHLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsY0FBUSxHQUFXLENBQUMsQ0FBQTs7SUFnQ3hCLENBQUM7SUE5QmEsMkJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRXRFLENBQUM7SUFDSywrQkFBVSxHQUFoQjs7OztnQkFDSSxzQkFBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUNyQyxJQUFJLElBQUksR0FBRyxXQUFXLENBQUM7NEJBQ25CLElBQUksS0FBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFO2dDQUNsQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7Z0NBQ25CLE9BQU8sRUFBRSxDQUFBOzZCQUNaO3dCQUNMLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtvQkFDVixDQUFDLENBQUMsRUFBQTs7O0tBQ0w7SUFFRCx5QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLGtCQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNTLDJCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxtQkFBUyxDQUFDLFNBQVMsSUFBSSxxQkFBUyxDQUFDLEtBQUssRUFBRTtZQUN4QyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQTtZQUNqQixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUE7Z0JBQ2hGLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLGtCQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQ2hGLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO2FBQ2xCO1NBQ0o7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQXBDQSxBQW9DQyxDQXBDdUMsdUJBQWEsR0FvQ3BEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0TW5nIGZyb20gJy4uL0Fzc2V0L0Fzc2V0TW5nJztcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSAnLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2UnO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tICcuLi9FbnVtL0dhbWVFdmVudCc7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gJy4uL0VudW0vR2FtZVN0YXRlJztcclxuaW1wb3J0IEdhbWVNb2RsZSBmcm9tICcuLi9HYW1lTW9kbGUnO1xyXG5lbnVtIEJlYXJTdGF0ZSB7XHJcbiAgICBHcmVlbiA9IFwiR3JlZW5cIixcclxuICAgIFJlZCA9IFwiUmVkXCIsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxfQmVhciBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgc3ByaXRlOiBjYy5TcHJpdGVcclxuICAgIG5vd1N0YXRlOiBCZWFyU3RhdGU7XHJcbiAgICB0ZW1wRFQ6IG51bWJlciA9IDA7XHJcbiAgICB0YXJnZXREVDogbnVtYmVyID0gM1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBjYy5maW5kKFwic3ByaXRlXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuXHJcbiAgICB9XHJcbiAgICBhc3luYyBjaGVja1N0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsb29wID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm93U3RhdGUgPT0gQmVhclN0YXRlLkdyZWVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChsb29wKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA1MClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub3dTdGF0ZSA9IEJlYXJTdGF0ZS5SZWRcclxuICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiQmVhcl9cIiArIHRoaXMubm93U3RhdGUpXHJcbiAgICAgICAgY29uc29sZS5sb2coQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJCZWFyX1wiICsgdGhpcy5ub3dTdGF0ZSkpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEdhbWVNb2RsZS5nYW1lU3RhdGUgPT0gR2FtZVN0YXRlLlN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcERUICs9IGR0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRlbXBEVCA+IHRoaXMudGFyZ2V0RFQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm93U3RhdGUgPSB0aGlzLm5vd1N0YXRlID09IEJlYXJTdGF0ZS5SZWQgPyBCZWFyU3RhdGUuR3JlZW4gOiBCZWFyU3RhdGUuUmVkXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiQmVhcl9cIiArIHRoaXMubm93U3RhdGUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBEVCA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==