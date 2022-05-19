
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/CloudItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9177brEGWpJMpLCnZJZv/FU', 'CloudItem');
// Script/Item/CloudItem.ts

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
var GameEvent_1 = require("../Enum/GameEvent");
var CloudItem = /** @class */ (function (_super) {
    __extends(CloudItem, _super);
    function CloudItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloudItem.prototype.onLoad = function () {
        this.node.opacity = 0;
    };
    CloudItem.prototype.start = function () {
        cc.tween(this.node)
            .to(1.5, { opacity: 255 })
            .start();
    };
    CloudItem.prototype.update = function (dt) {
        if (this.isCanGO) {
            this.node.x += (dt * this.Speed) * this.direction;
            if (this.direction > 0) {
                if (this.node.x > this.targetX)
                    this.EventEmit(GameEvent_1.GameEvent.DeletCloud, this.cloudNumber);
            }
            else {
                if (this.node.x < this.targetX)
                    this.EventEmit(GameEvent_1.GameEvent.DeletCloud, this.cloudNumber);
            }
        }
    };
    return CloudItem;
}(ComponentBase_1.default));
exports.default = CloudItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxDbG91ZEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQXVEO0FBQ3ZELCtDQUE4QztBQUM5QztJQUF1Qyw2QkFBYTtJQUFwRDs7SUE4QkEsQ0FBQztJQXZCYSwwQkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBQ1MseUJBQUssR0FBZjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDekIsS0FBSyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUNTLDBCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEQsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtnQkFDcEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTztvQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7YUFDN0Q7aUJBQ0k7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTztvQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7YUFDN0Q7U0FFSjtJQUVMLENBQUM7SUFDTCxnQkFBQztBQUFELENBOUJBLEFBOEJDLENBOUJzQyx1QkFBYSxHQThCbkQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tICcuLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZSc7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gJy4uL0VudW0vR2FtZUV2ZW50JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvdWRJdGVtIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcblxyXG4gICAgY2xvdWROdW1iZXI6IG51bWJlcjtcclxuICAgIFNwZWVkOiBudW1iZXI7XHJcbiAgICBkaXJlY3Rpb246IG51bWJlcjtcclxuICAgIHRhcmdldFg6IG51bWJlcjtcclxuICAgIGlzQ2FuR086IGJvb2xlYW5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8oMS41LCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDYW5HTykge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCArPSAoZHQgKiB0aGlzLlNwZWVkKSAqIHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLnggPiB0aGlzLnRhcmdldFgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LkRlbGV0Q2xvdWQsIHRoaXMuY2xvdWROdW1iZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLnggPCB0aGlzLnRhcmdldFgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LkRlbGV0Q2xvdWQsIHRoaXMuY2xvdWROdW1iZXIpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSJdfQ==