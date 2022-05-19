"use strict";
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