
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Panel_Cloud.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcUGFuZWxfQ2xvdWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXlDO0FBQ3pDLCtDQUEwQztBQUMxQywrQ0FBOEM7QUFDOUMsK0NBQTBDO0FBQzFDO0lBQXlDLCtCQUFTO0lBQWxEOztJQThFQSxDQUFDO0lBMUVhLDRCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbEQsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUE7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQzFFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBRTVFLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFB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IEFzc2V0TW5nIGZyb20gJy4uL0Fzc2V0L0Fzc2V0TW5nJztcclxuaW1wb3J0IERhdGFDbG91ZCBmcm9tICcuLi9EYXRhL0RhdGFDbG91ZCc7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gJy4uL0VudW0vR2FtZUV2ZW50JztcclxuaW1wb3J0IENsb3VkSXRlbSBmcm9tICcuLi9JdGVtL0Nsb3VkSXRlbSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsX0Nsb3VkIGV4dGVuZHMgRGF0YUNsb3VkIHtcclxuICAgIGl0ZW06IGNjLk5vZGU7XHJcbiAgICBjbG91ZENvbnRlbnQ6IGNjLk5vZGU7XHJcbiAgICBpc0luc3RhbmNlQ2xvdWQ6IGJvb2xlYW47XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2xvdWRDb250ZW50ID0gY2MuZmluZChcIm5Db250ZW50XCIsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLml0ZW0gPSBjYy5maW5kKFwiaXRlbVwiLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy50ZW1wX0xlZnQgPSAwXHJcbiAgICAgICAgdGhpcy50ZW1wX1JpZ2h0ID0gMFxyXG4gICAgICAgIHRoaXMudGVtcE51bWJlciA9IDA7XHJcbiAgICAgICAgdGhpcy5yYW5kb21UaW1lX0xlZnQgPSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5yYW5nZVRpbWVfTGVmdClcclxuICAgICAgICB0aGlzLnJhbmRvbVRpbWVfUmlnaHQgPSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5yYW5nZVRpbWVfUmlnaHQpXHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5TdG9wQ2xvdWQsIHRoaXMuc3RvcENsb3VkKVxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5TdGFydENsb3VkLCB0aGlzLnN0YXJ0Q2xvdWQpXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoR2FtZUV2ZW50LkRlbGV0Q2xvdWQsIHRoaXMuZGVsZXRDbG91ZClcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0luc3RhbmNlQ2xvdWQgPSB0cnVlXHJcbiAgICAgICAgLy/nlJ/miJAxMOWAi+mbslxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnJlcGVhdCgxMCwgY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KC4xKVxyXG4gICAgICAgICAgICAgICAgLmNhbGwodGhpcy5pbnN0SXRlbS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc0luc3RhbmNlQ2xvdWQpIHtcclxuICAgICAgICAgICAgdGhpcy50ZW1wX0xlZnQgKz0gZHQ7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcF9SaWdodCArPSBkdDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRlbXBfTGVmdCA+IHRoaXMucmFuZG9tVGltZV9MZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmRvbVRpbWVfTGVmdCA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnJhbmdlVGltZV9MZWZ0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wX0xlZnQgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMudGVtcF9SaWdodCA+IHRoaXMucmFuZG9tVGltZV9SaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0SXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5kb21UaW1lX1JpZ2h0ID0gMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucmFuZ2VUaW1lX1JpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wX1JpZ2h0ID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5zdEl0ZW0oKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW0pXHJcbiAgICAgICAgdGhpcy5jbG91ZENvbnRlbnQuYWRkQ2hpbGQodGVtcClcclxuICAgICAgICBsZXQgX2NsYXNzID0gdGVtcC5hZGRDb21wb25lbnQoQ2xvdWRJdGVtKVxyXG4gICAgICAgIF9jbGFzcy5TcGVlZCA9IHRoaXMuYmFzZVNwZWVkICsgKE1hdGgucmFuZG9tKCkgKiB0aGlzLnJhbmdlU3BlZWQpXHJcbiAgICAgICAgX2NsYXNzLmRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTE7Ly/lt6blj7PmlrnlkJHnm7jlj41cclxuICAgICAgICB0ZW1wLnNldFBvc2l0aW9uKE1hdGgucmFuZG9tKCkgKiB0aGlzLnJhbmdlWCwgTWF0aC5yYW5kb20oKSAqIHRoaXMucmFuZ2VZKVxyXG4gICAgICAgIF9jbGFzcy5pc0NhbkdPID0gdHJ1ZTtcclxuICAgICAgICBfY2xhc3MudGFyZ2V0WCA9IF9jbGFzcy5kaXJlY3Rpb24gPT0gMSA/IDEyODAgOiAtMTI4MFxyXG4gICAgICAgIF9jbGFzcy5jbG91ZE51bWJlciA9IHRoaXMudGVtcE51bWJlcjtcclxuICAgICAgICB0aGlzLkNsb3VkQ2xhc3Muc2V0KHRoaXMudGVtcE51bWJlciwgX2NsYXNzKVxyXG5cclxuICAgICAgICBsZXQgcmFuZG9tQ2xvdWQgPSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICAgbGV0IGZvcm1hdCA9IHJhbmRvbUNsb3VkIDwgOSA/IFwiMFwiICsgU3RyaW5nKHJhbmRvbUNsb3VkKSA6IFN0cmluZyhyYW5kb21DbG91ZClcclxuICAgICAgICB0ZW1wLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCLpm7ItXCIgKyBmb3JtYXQpLy/pmqjmqZ8xfjEw55qE6ZuyXHJcbiAgICAgICAgdGhpcy50ZW1wTnVtYmVyKytcclxuICAgIH1cclxuICAgIHN0b3BDbG91ZCgpIHtcclxuICAgICAgICB0aGlzLmlzSW5zdGFuY2VDbG91ZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5DbG91ZENsYXNzLmZvckVhY2goKHZhbDogQ2xvdWRJdGVtLCBrZXk6IE51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICB2YWwuaXNDYW5HTyA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydENsb3VkKCkge1xyXG4gICAgICAgIHRoaXMuaXNJbnN0YW5jZUNsb3VkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuQ2xvdWRDbGFzcy5mb3JFYWNoKCh2YWw6IENsb3VkSXRlbSwga2V5OiBOdW1iZXIpID0+IHtcclxuICAgICAgICAgICAgdmFsLmlzQ2FuR08gPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBkZWxldENsb3VkKF9udW06IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuQ2xvdWRDbGFzcy5nZXQoX251bSkubm9kZS5kZXN0cm95KClcclxuICAgICAgICB0aGlzLkNsb3VkQ2xhc3MuZGVsZXRlKF9udW0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==