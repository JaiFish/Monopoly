
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
                this.randomTime_Left = this.baseTime_Left + Math.floor(Math.random() * this.rangeTime_Left);
                this.temp_Left = 0;
            }
            if (this.temp_Right > this.randomTime_Right) {
                this.instItem();
                this.randomTime_Right = this.baseTime_Right + Math.floor(Math.random() * this.rangeTime_Right);
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
        if (randomCloud > 0 && randomCloud < 5)
            temp.setScale(0.5); //因為雲為了解析度有放大
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcUGFuZWxfQ2xvdWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXlDO0FBQ3pDLCtDQUEwQztBQUMxQywrQ0FBOEM7QUFDOUMsK0NBQTBDO0FBQzFDO0lBQXlDLCtCQUFTO0lBQWxEOztJQWdGQSxDQUFDO0lBNUVhLDRCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbEQsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUE7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQzFFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBRTVFLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3pELENBQUM7SUFFUywyQkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUE7UUFDM0IsUUFBUTtRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNqQixLQUFLLENBQUMsRUFBRSxDQUFDO2FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ2xDO2FBQ0EsS0FBSyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUNTLDRCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1lBRXRCLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN2QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7Z0JBQzNGLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO2FBQ3JCO1lBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDekMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7Z0JBQzlGLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFBO2FBQ3RCO1NBQ0o7SUFDTCxDQUFDO0lBQ0QsOEJBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2hDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFBO1FBQ3pDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDakUsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsUUFBUTtRQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDMUUsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtRQUNyRCxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUU1QyxJQUFJLFdBQVcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDcEQsSUFBSSxNQUFNLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzlFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxrQkFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUEsQ0FBQSxVQUFVO1FBRWpHLElBQUksV0FBVyxHQUFHLENBQUMsSUFBSSxXQUFXLEdBQUcsQ0FBQztZQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQyxhQUFhO1FBQ3hFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBQ0QsK0JBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFBO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBYyxFQUFFLEdBQVc7WUFDaEQsR0FBRyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsZ0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFBO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBYyxFQUFFLEdBQVc7WUFDaEQsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsZ0NBQVUsR0FBVixVQUFXLElBQVk7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDTCxrQkFBQztBQUFELENBaEZBLEFBZ0ZDLENBaEZ3QyxtQkFBUyxHQWdGakQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXRNbmcgZnJvbSAnLi4vQXNzZXQvQXNzZXRNbmcnO1xyXG5pbXBvcnQgRGF0YUNsb3VkIGZyb20gJy4uL0RhdGEvRGF0YUNsb3VkJztcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSAnLi4vRW51bS9HYW1lRXZlbnQnO1xyXG5pbXBvcnQgQ2xvdWRJdGVtIGZyb20gJy4uL0l0ZW0vQ2xvdWRJdGVtJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxfQ2xvdWQgZXh0ZW5kcyBEYXRhQ2xvdWQge1xyXG4gICAgaXRlbTogY2MuTm9kZTtcclxuICAgIGNsb3VkQ29udGVudDogY2MuTm9kZTtcclxuICAgIGlzSW5zdGFuY2VDbG91ZDogYm9vbGVhbjtcclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jbG91ZENvbnRlbnQgPSBjYy5maW5kKFwibkNvbnRlbnRcIiwgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuaXRlbSA9IGNjLmZpbmQoXCJpdGVtXCIsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLnRlbXBfTGVmdCA9IDBcclxuICAgICAgICB0aGlzLnRlbXBfUmlnaHQgPSAwXHJcbiAgICAgICAgdGhpcy50ZW1wTnVtYmVyID0gMDtcclxuICAgICAgICB0aGlzLnJhbmRvbVRpbWVfTGVmdCA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnJhbmdlVGltZV9MZWZ0KVxyXG4gICAgICAgIHRoaXMucmFuZG9tVGltZV9SaWdodCA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnJhbmdlVGltZV9SaWdodClcclxuXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoR2FtZUV2ZW50LlN0b3BDbG91ZCwgdGhpcy5zdG9wQ2xvdWQpXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoR2FtZUV2ZW50LlN0YXJ0Q2xvdWQsIHRoaXMuc3RhcnRDbG91ZClcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuRGVsZXRDbG91ZCwgdGhpcy5kZWxldENsb3VkKVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzSW5zdGFuY2VDbG91ZCA9IHRydWVcclxuICAgICAgICAvL+eUn+aIkDEw5YCL6ZuyXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAucmVwZWF0KDEwLCBjYy50d2VlbigpXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkoLjEpXHJcbiAgICAgICAgICAgICAgICAuY2FsbCh0aGlzLmluc3RJdGVtLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW5zdGFuY2VDbG91ZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRlbXBfTGVmdCArPSBkdDtcclxuICAgICAgICAgICAgdGhpcy50ZW1wX1JpZ2h0ICs9IGR0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudGVtcF9MZWZ0ID4gdGhpcy5yYW5kb21UaW1lX0xlZnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdEl0ZW0oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFuZG9tVGltZV9MZWZ0ID0gdGhpcy5iYXNlVGltZV9MZWZ0ICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5yYW5nZVRpbWVfTGVmdClcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcF9MZWZ0ID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRlbXBfUmlnaHQgPiB0aGlzLnJhbmRvbVRpbWVfUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdEl0ZW0oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFuZG9tVGltZV9SaWdodCA9IHRoaXMuYmFzZVRpbWVfUmlnaHQgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnJhbmdlVGltZV9SaWdodClcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcF9SaWdodCA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGluc3RJdGVtKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB0ZW1wID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtKVxyXG4gICAgICAgIHRoaXMuY2xvdWRDb250ZW50LmFkZENoaWxkKHRlbXApXHJcbiAgICAgICAgbGV0IF9jbGFzcyA9IHRlbXAuYWRkQ29tcG9uZW50KENsb3VkSXRlbSlcclxuICAgICAgICBfY2xhc3MuU3BlZWQgPSB0aGlzLmJhc2VTcGVlZCArIChNYXRoLnJhbmRvbSgpICogdGhpcy5yYW5nZVNwZWVkKVxyXG4gICAgICAgIF9jbGFzcy5kaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xOy8v5bem5Y+z5pa55ZCR55u45Y+NXHJcbiAgICAgICAgdGVtcC5zZXRQb3NpdGlvbihNYXRoLnJhbmRvbSgpICogdGhpcy5yYW5nZVgsIE1hdGgucmFuZG9tKCkgKiB0aGlzLnJhbmdlWSlcclxuICAgICAgICBfY2xhc3MuaXNDYW5HTyA9IHRydWU7XHJcbiAgICAgICAgX2NsYXNzLnRhcmdldFggPSBfY2xhc3MuZGlyZWN0aW9uID09IDEgPyAxMjgwIDogLTEyODBcclxuICAgICAgICBfY2xhc3MuY2xvdWROdW1iZXIgPSB0aGlzLnRlbXBOdW1iZXI7XHJcbiAgICAgICAgdGhpcy5DbG91ZENsYXNzLnNldCh0aGlzLnRlbXBOdW1iZXIsIF9jbGFzcylcclxuXHJcbiAgICAgICAgbGV0IHJhbmRvbUNsb3VkID0gMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxyXG4gICAgICAgIGxldCBmb3JtYXQgPSByYW5kb21DbG91ZCA8IDkgPyBcIjBcIiArIFN0cmluZyhyYW5kb21DbG91ZCkgOiBTdHJpbmcocmFuZG9tQ2xvdWQpXHJcbiAgICAgICAgdGVtcC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwi6ZuyLVwiICsgZm9ybWF0KS8v6Zqo5qmfMX4xMOeahOmbslxyXG5cclxuICAgICAgICBpZiAocmFuZG9tQ2xvdWQgPiAwICYmIHJhbmRvbUNsb3VkIDwgNSkgdGVtcC5zZXRTY2FsZSgwLjUpIC8v5Zug54K66Zuy54K65LqG6Kej5p6Q5bqm5pyJ5pS+5aSnXHJcbiAgICAgICAgdGhpcy50ZW1wTnVtYmVyKytcclxuICAgIH1cclxuICAgIHN0b3BDbG91ZCgpIHtcclxuICAgICAgICB0aGlzLmlzSW5zdGFuY2VDbG91ZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5DbG91ZENsYXNzLmZvckVhY2goKHZhbDogQ2xvdWRJdGVtLCBrZXk6IE51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICB2YWwuaXNDYW5HTyA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydENsb3VkKCkge1xyXG4gICAgICAgIHRoaXMuaXNJbnN0YW5jZUNsb3VkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuQ2xvdWRDbGFzcy5mb3JFYWNoKCh2YWw6IENsb3VkSXRlbSwga2V5OiBOdW1iZXIpID0+IHtcclxuICAgICAgICAgICAgdmFsLmlzQ2FuR08gPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBkZWxldENsb3VkKF9udW06IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuQ2xvdWRDbGFzcy5nZXQoX251bSkubm9kZS5kZXN0cm95KClcclxuICAgICAgICB0aGlzLkNsb3VkQ2xhc3MuZGVsZXRlKF9udW0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==