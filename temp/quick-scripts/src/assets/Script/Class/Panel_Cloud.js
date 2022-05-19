"use strict";
cc._RF.push(module, 'c0020J7oCVDyYnvRF6bnFBE', 'Panel_Cloud');
// Script/Class/Panel_Cloud.ts

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
var DataCloud_1 = require("../Data/DataCloud");
var GameEvent_1 = require("../Enum/GameEvent");
var CloudItem_1 = require("../Item/CloudItem");
var Panel_Cloud = /** @class */ (function (_super) {
    __extends(Panel_Cloud, _super);
    function Panel_Cloud() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel_Cloud.prototype.onLoad = function () {
        this.cloudContent = cc.find("nContent", this.node);
        this.item = cc.find("item", this.node);
        this.temp_Left = 0;
        this.temp_Right = 0;
        this.tempNumber = 0;
        this.randomTime_Left = 1 + Math.floor(Math.random() * this.rangeTime_Left);
        this.randomTime_Right = 1 + Math.floor(Math.random() * this.rangeTime_Right);
        this.initEvent(GameEvent_1.GameEvent.StopCloud, this.stopCloud);
        this.initEvent(GameEvent_1.GameEvent.StartCloud, this.startCloud);
        this.initEvent(GameEvent_1.GameEvent.DeletCloud, this.deletCloud);
    };
    Panel_Cloud.prototype.start = function () {
        this.isInstanceCloud = true;
        //生成10個雲
        cc.tween(this.node)
            .repeat(10, cc.tween()
            .delay(.1)
            .call(this.instItem.bind(this)))
            .start();
    };
    Panel_Cloud.prototype.update = function (dt) {
        if (this.isInstanceCloud) {
            this.temp_Left += dt;
            this.temp_Right += dt;
            if (this.temp_Left > this.randomTime_Left) {
                this.instItem();
                this.randomTime_Left = 1 + Math.floor(Math.random() * this.rangeTime_Left);
                this.temp_Left = 0;
            }
            if (this.temp_Right > this.randomTime_Right) {
                this.instItem();
                this.randomTime_Right = 1 + Math.floor(Math.random() * this.rangeTime_Right);
                this.temp_Right = 0;
            }
        }
    };
    Panel_Cloud.prototype.instItem = function () {
        var temp = cc.instantiate(this.item);
        this.cloudContent.addChild(temp);
        var _class = temp.addComponent(CloudItem_1.default);
        _class.Speed = this.baseSpeed + (Math.random() * this.rangeSpeed);
        _class.direction = Math.random() > 0.5 ? 1 : -1; //左右方向相反
        temp.setPosition(Math.random() * this.rangeX, Math.random() * this.rangeY);
        _class.isCanGO = true;
        _class.targetX = _class.direction == 1 ? 1280 : -1280;
        _class.cloudNumber = this.tempNumber;
        this.CloudClass.set(this.tempNumber, _class);
        var randomCloud = 1 + Math.floor(Math.random() * 10);
        var format = randomCloud < 9 ? "0" + String(randomCloud) : String(randomCloud);
        temp.getComponent(cc.Sprite).spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("雲-" + format); //隨機1~10的雲
        this.tempNumber++;
    };
    Panel_Cloud.prototype.stopCloud = function () {
        this.isInstanceCloud = false;
        this.CloudClass.forEach(function (val, key) {
            val.isCanGO = false;
        });
    };
    Panel_Cloud.prototype.startCloud = function () {
        this.isInstanceCloud = true;
        this.CloudClass.forEach(function (val, key) {
            val.isCanGO = true;
        });
    };
    Panel_Cloud.prototype.deletCloud = function (_num) {
        this.CloudClass.get(_num).node.destroy();
        this.CloudClass.delete(_num);
    };
    return Panel_Cloud;
}(DataCloud_1.default));
exports.default = Panel_Cloud;

cc._RF.pop();