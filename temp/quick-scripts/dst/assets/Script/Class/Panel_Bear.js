
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcUGFuZWxfQmVhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUM7QUFDekMsNERBQXVEO0FBRXZELCtDQUE4QztBQUM5QywwQ0FBcUM7QUFDckMsSUFBSyxTQUdKO0FBSEQsV0FBSyxTQUFTO0lBQ1YsNEJBQWUsQ0FBQTtJQUNmLHdCQUFXLENBQUE7QUFDZixDQUFDLEVBSEksU0FBUyxLQUFULFNBQVMsUUFHYjtBQUNEO0lBQXdDLDhCQUFhO0lBQXJEO1FBQUEscUVBeUJDO1FBdEJHLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsY0FBUSxHQUFXLENBQUMsQ0FBQTs7SUFxQnhCLENBQUM7SUFuQmEsMkJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRXRFLENBQUM7SUFDRCx5QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLGtCQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNTLDJCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxtQkFBUyxDQUFDLFNBQVMsSUFBSSxxQkFBUyxDQUFDLEtBQUssRUFBRTtZQUN4QyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQTtZQUNqQixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUE7Z0JBQ2hGLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLGtCQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQ2hGLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO2FBQ2xCO1NBQ0o7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQXpCQSxBQXlCQyxDQXpCdUMsdUJBQWEsR0F5QnBEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0TW5nIGZyb20gJy4uL0Fzc2V0L0Fzc2V0TW5nJztcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSAnLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2UnO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tICcuLi9FbnVtL0dhbWVFdmVudCc7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gJy4uL0VudW0vR2FtZVN0YXRlJztcclxuaW1wb3J0IEdhbWVNb2RsZSBmcm9tICcuLi9HYW1lTW9kbGUnO1xyXG5lbnVtIEJlYXJTdGF0ZSB7XHJcbiAgICBHcmVlbiA9IFwiR3JlZW5cIixcclxuICAgIFJlZCA9IFwiUmVkXCIsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxfQmVhciBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgc3ByaXRlOiBjYy5TcHJpdGVcclxuICAgIG5vd1N0YXRlOiBCZWFyU3RhdGU7XHJcbiAgICB0ZW1wRFQ6IG51bWJlciA9IDA7XHJcbiAgICB0YXJnZXREVDogbnVtYmVyID0gM1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBjYy5maW5kKFwic3ByaXRlXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuXHJcbiAgICB9XHJcbiAgICBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm93U3RhdGUgPSBCZWFyU3RhdGUuUmVkXHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIkJlYXJfXCIgKyB0aGlzLm5vd1N0YXRlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiQmVhcl9cIiArIHRoaXMubm93U3RhdGUpKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChHYW1lTW9kbGUuZ2FtZVN0YXRlID09IEdhbWVTdGF0ZS5TdGFydCkge1xyXG4gICAgICAgICAgICB0aGlzLnRlbXBEVCArPSBkdFxyXG4gICAgICAgICAgICBpZiAodGhpcy50ZW1wRFQgPiB0aGlzLnRhcmdldERUKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1N0YXRlID0gdGhpcy5ub3dTdGF0ZSA9PSBCZWFyU3RhdGUuUmVkID8gQmVhclN0YXRlLkdyZWVuIDogQmVhclN0YXRlLlJlZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIkJlYXJfXCIgKyB0aGlzLm5vd1N0YXRlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wRFQgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=