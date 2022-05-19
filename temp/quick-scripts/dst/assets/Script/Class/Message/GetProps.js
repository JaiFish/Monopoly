
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Message/GetProps.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b25ak+KXFFFrR59nzARIA3', 'GetProps');
// Script/Class/Message/GetProps.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonMng_1 = require("../../Data/base/ButtonMng");
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var Commad_1 = require("../../Enum/Commad");
var Easing_1 = require("../../Enum/Easing");
var GameEvent_1 = require("../../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GetProps = /** @class */ (function (_super) {
    __extends(GetProps, _super);
    function GetProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetProps.prototype.onLoad = function () {
        this.btn = cc.find("Item_Btn", this.node).getComponent(cc.Button);
        this.Props = cc.find("Props", this.node).getComponent(cc.Sprite);
        this.info = cc.find("Info", this.node).getComponent(cc.Label);
        this.defaultReset();
    };
    GetProps.prototype.start = function () {
        ButtonMng_1.default.addEvent(this.node, "GetProps", "end", this.btn);
    };
    GetProps.prototype.reset = function () {
        this.Props.spriteFrame = null;
        this.info.string = "";
    };
    GetProps.prototype.setData = function (_info, _sprite) {
        this.info.string = _info;
        this.Props.spriteFrame = _sprite;
    };
    GetProps.prototype.actionShow = function (callback) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.show();
            var setScale = 1;
            _this.node.opacity = 255;
            _this.node.setPosition(0, 0);
            if (_this.Props.spriteFrame.name.split('_')[1] == "5") //如果是碼表要做特殊處理。因為圖片太大
                setScale = 0.651;
            var action1 = cc.tween()
                .set({ scale: 0.1 })
                .to(0.5, { scale: setScale }, { easing: Easing_1.Easing.backOut });
            callback ?
                action1.call(callback.bind(_this)).call(resolve).clone(_this.Props.node).start() :
                action1.call(resolve).clone(_this.Props.node).start();
        });
    };
    GetProps.prototype.end = function (e, _customEventData) {
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndGetProps);
    };
    GetProps = __decorate([
        ccclass
    ], GetProps);
    return GetProps;
}(ComponentBase_1.default));
exports.default = GetProps;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcR2V0UHJvcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUMxRCw0Q0FBNkM7QUFDN0MsNENBQTJDO0FBQzNDLGtEQUFpRDtBQUMzQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBYTtJQUFuRDs7SUF3Q0EsQ0FBQztJQXBDYSx5QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDakUsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNoRSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzdELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBQ1Msd0JBQUssR0FBZjtRQUNJLG1CQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDOUQsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO0lBQ3pCLENBQUM7SUFDRCwwQkFBTyxHQUFQLFVBQVEsS0FBYSxFQUFFLE9BQXVCO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7SUFDckMsQ0FBQztJQUNELDZCQUFVLEdBQVYsVUFBVyxRQUFtQjtRQUE5QixpQkFlQztRQWRHLE9BQU8sSUFBSSxPQUFPLENBQU8sVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNyQyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDWCxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUE7WUFDaEIsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFBO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUMzQixJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFDLG9CQUFvQjtnQkFDckUsUUFBUSxHQUFHLEtBQUssQ0FBQTtZQUNwQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFO2lCQUNuQixHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7aUJBQ25CLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsZUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7WUFDN0QsUUFBUSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ2hGLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0Qsc0JBQUcsR0FBSCxVQUFJLENBQVcsRUFBRSxnQkFBd0I7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxpQkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQy9ELENBQUM7SUF2Q2dCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F3QzVCO0lBQUQsZUFBQztDQXhDRCxBQXdDQyxDQXhDcUMsdUJBQWEsR0F3Q2xEO2tCQXhDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b25NbmcgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0J1dHRvbk1uZyc7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlJztcclxuaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tICcuLi8uLi9FbnVtL0NvbW1hZCc7XHJcbmltcG9ydCB7IEVhc2luZyB9IGZyb20gJy4uLy4uL0VudW0vRWFzaW5nJztcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSAnLi4vLi4vRW51bS9HYW1lRXZlbnQnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2V0UHJvcHMgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGJ0bjogY2MuQnV0dG9uO1xyXG4gICAgUHJvcHM6IGNjLlNwcml0ZTtcclxuICAgIGluZm86IGNjLkxhYmVsXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYnRuID0gY2MuZmluZChcIkl0ZW1fQnRuXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLlByb3BzID0gY2MuZmluZChcIlByb3BzXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICB0aGlzLmluZm8gPSBjYy5maW5kKFwiSW5mb1wiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICB0aGlzLmRlZmF1bHRSZXNldCgpXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJHZXRQcm9wc1wiLCBcImVuZFwiLCB0aGlzLmJ0bilcclxuICAgIH1cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuUHJvcHMuc3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaW5mby5zdHJpbmcgPSBcIlwiXHJcbiAgICB9XHJcbiAgICBzZXREYXRhKF9pbmZvOiBzdHJpbmcsIF9zcHJpdGU6IGNjLlNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgdGhpcy5pbmZvLnN0cmluZyA9IF9pbmZvXHJcbiAgICAgICAgdGhpcy5Qcm9wcy5zcHJpdGVGcmFtZSA9IF9zcHJpdGU7XHJcbiAgICB9XHJcbiAgICBhY3Rpb25TaG93KGNhbGxiYWNrPzogRnVuY3Rpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3coKVxyXG4gICAgICAgICAgICBsZXQgc2V0U2NhbGUgPSAxXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbigwLCAwKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5Qcm9wcy5zcHJpdGVGcmFtZS5uYW1lLnNwbGl0KCdfJylbMV0gPT0gXCI1XCIpLy/lpoLmnpzmmK/norzooajopoHlgZrnibnmroromZXnkIbjgILlm6DngrrlnJbniYflpKrlpKdcclxuICAgICAgICAgICAgICAgIHNldFNjYWxlID0gMC42NTFcclxuICAgICAgICAgICAgbGV0IGFjdGlvbjEgPSBjYy50d2VlbigpXHJcbiAgICAgICAgICAgICAgICAuc2V0KHsgc2NhbGU6IDAuMSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogc2V0U2NhbGUgfSwgeyBlYXNpbmc6IEVhc2luZy5iYWNrT3V0IH0pXHJcbiAgICAgICAgICAgIGNhbGxiYWNrID9cclxuICAgICAgICAgICAgICAgIGFjdGlvbjEuY2FsbChjYWxsYmFjay5iaW5kKHRoaXMpKS5jYWxsKHJlc29sdmUpLmNsb25lKHRoaXMuUHJvcHMubm9kZSkuc3RhcnQoKSA6XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24xLmNhbGwocmVzb2x2ZSkuY2xvbmUodGhpcy5Qcm9wcy5ub2RlKS5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBlbmQoZTogY2MuRXZlbnQsIF9jdXN0b21FdmVudERhdGE6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuRW5kR2V0UHJvcHMpXHJcbiAgICB9XHJcbn0iXX0=