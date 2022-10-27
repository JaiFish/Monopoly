
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Panel_Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be4fb8uT39I/720BKGk45cf', 'Panel_Loading');
// Script/Class/Panel_Loading.ts

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
var ComponentBase_1 = require("../Data/base/ComponentBase");
var Panel_Loading = /** @class */ (function (_super) {
    __extends(Panel_Loading, _super);
    function Panel_Loading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel_Loading.prototype.onLoad = function () {
        this.point = cc.find("Message/Layout/Point", this.node).getComponent(cc.Label);
        this.point.string = "";
        this.defaultReset();
    };
    Panel_Loading.prototype.start = function () {
        this.startLoading();
    };
    Panel_Loading.prototype.startLoading = function () {
        var _this = this;
        this.PointAction = setInterval(function () {
            _this.point.string = _this.point.string + ".";
            if (_this.point.string.length > 3)
                _this.point.string = "";
        }, 1000);
    };
    Panel_Loading.prototype.Actionhide = function () {
        var _this = this;
        cc.tween(this.node)
            .to(0.3, { opacity: 0 })
            .call(function () {
            clearInterval(_this.PointAction);
            _this.hide();
            // this.node.destroy()
        })
            .start();
    };
    return Panel_Loading;
}(ComponentBase_1.default));
exports.default = Panel_Loading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcUGFuZWxfTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBdUQ7QUFDdkQ7SUFBMkMsaUNBQWE7SUFBeEQ7O0lBNkJBLENBQUM7SUExQmEsOEJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBQ1MsNkJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBQ0Qsb0NBQVksR0FBWjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFDM0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO1lBQzNDLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtRQUM5QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0Qsa0NBQVUsR0FBVjtRQUFBLGlCQVVDO1FBVEcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUN2QixJQUFJLENBQUM7WUFDRixhQUFhLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQy9CLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUVYLHNCQUFzQjtRQUMxQixDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQTdCQSxBQTZCQyxDQTdCMEMsdUJBQWEsR0E2QnZEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSAnLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2UnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbF9Mb2FkaW5nIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICBwb2ludDogY2MuTGFiZWxcclxuICAgIFBvaW50QWN0aW9uOiBhbnlcclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wb2ludCA9IGNjLmZpbmQoXCJNZXNzYWdlL0xheW91dC9Qb2ludFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICB0aGlzLnBvaW50LnN0cmluZyA9IFwiXCJcclxuICAgICAgICB0aGlzLmRlZmF1bHRSZXNldCgpXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGFydExvYWRpbmcoKVxyXG4gICAgfVxyXG4gICAgc3RhcnRMb2FkaW5nKCkge1xyXG4gICAgICAgIHRoaXMuUG9pbnRBY3Rpb24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnQuc3RyaW5nID0gdGhpcy5wb2ludC5zdHJpbmcgKyBcIi5cIlxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludC5zdHJpbmcubGVuZ3RoID4gMylcclxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnQuc3RyaW5nID0gXCJcIlxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gICAgQWN0aW9uaGlkZSgpOiB2b2lkIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjMsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuUG9pbnRBY3Rpb24pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxufSJdfQ==