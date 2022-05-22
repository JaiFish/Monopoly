
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Panel_Bufer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6d366fwYVKw6ommnEvEA+X', 'Panel_Bufer');
// Script/Class/Panel_Bufer.ts

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
var Panel_Bufer = /** @class */ (function (_super) {
    __extends(Panel_Bufer, _super);
    function Panel_Bufer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel_Bufer.prototype.onLoad = function () {
        this.bufer = cc.find("Bufer", this.node);
        this.initEvent(GameEvent_1.GameEvent.OpenBufer, this.openRender);
        this.initEvent(GameEvent_1.GameEvent.CloseBufer, this.closeRender);
        this.node.opacity = 255;
    };
    Panel_Bufer.prototype.openRender = function () {
        // console.log("HIHIHIHI");
        this.bufer.active = true;
        this.EventEmit(GameEvent_1.GameEvent.StopCloud);
    };
    Panel_Bufer.prototype.closeRender = function () {
        this.bufer.active = false;
        this.EventEmit(GameEvent_1.GameEvent.StartCloud);
    };
    return Panel_Bufer;
}(ComponentBase_1.default));
exports.default = Panel_Bufer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcUGFuZWxfQnVmZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQXVEO0FBQ3ZELCtDQUE4QztBQUU5QztJQUF5QywrQkFBYTtJQUF0RDs7SUFvQkEsQ0FBQztJQWxCYSw0QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQTtJQUMzQixDQUFDO0lBQ0QsZ0NBQVUsR0FBVjtRQUNJLDJCQUEyQjtRQUUzQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFFeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFDRCxpQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBRXpCLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxDQXBCd0MsdUJBQWEsR0FvQnJEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSAnLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2UnO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tICcuLi9FbnVtL0dhbWVFdmVudCc7XHJcbmltcG9ydCBCdWZlckNsYXNzIGZyb20gJy4uL1NoYWRlckNhbWVyYS9CdWZlckNsYXNzJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxfQnVmZXIgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGJ1ZmVyOiBjYy5Ob2RlXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYnVmZXIgPSBjYy5maW5kKFwiQnVmZXJcIiwgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5PcGVuQnVmZXIsIHRoaXMub3BlblJlbmRlcilcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuQ2xvc2VCdWZlciwgdGhpcy5jbG9zZVJlbmRlcilcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NVxyXG4gICAgfVxyXG4gICAgb3BlblJlbmRlcigpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkhJSElISUhJXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1ZmVyLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlN0b3BDbG91ZClcclxuICAgIH1cclxuICAgIGNsb3NlUmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYnVmZXIuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlN0YXJ0Q2xvdWQpXHJcbiAgICB9XHJcbn0iXX0=