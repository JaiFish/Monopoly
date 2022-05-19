
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/MapSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '142fdzx+LBB+Z0RAELmBK7W', 'MapSprite');
// Script/Item/MapSprite.ts

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
var ButtonMng_1 = require("../Data/base/ButtonMng");
var ComponentBase_1 = require("../Data/base/ComponentBase");
var Commad_1 = require("../Enum/Commad");
var Easing_1 = require("../Enum/Easing");
var GameEvent_1 = require("../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MapSprite = /** @class */ (function (_super) {
    __extends(MapSprite, _super);
    function MapSprite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MapSprite.prototype, "mySprite", {
        get: function () {
            return this._mySprite;
        },
        set: function (v) {
            this._mySprite = v;
        },
        enumerable: false,
        configurable: true
    });
    MapSprite.prototype.onLoad = function () {
        this.mySprite = this.node.getComponent(cc.Sprite);
        this.btn = this.node.getComponent(cc.Button);
        this.btn.target = this.node;
        this.btn.interactable = false;
    };
    MapSprite.prototype.getAction = function () {
        this.node.setScale(0);
        this.isGet = true;
        console.log(this.type);
        cc.tween(this.node)
            .to(1, { scale: 1 }, { easing: Easing_1.Easing.backOut })
            .start();
        if (this.type == 5 ||
            this.type == 11 ||
            this.type == 15)
            return;
        console.log("我有強化?");
        this.btn.interactable = true;
        ButtonMng_1.default.addEvent(this.node, "MapSprite", "sendEvent", this.btn, this.node.name);
    };
    MapSprite.prototype.sendEvent = function (e, _customEventData) {
        console.log(this.type);
        console.log(this.isGet);
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.UpdataUIStart, false);
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.ShowStationInfo, Number(_customEventData));
    };
    MapSprite = __decorate([
        ccclass
    ], MapSprite);
    return MapSprite;
}(ComponentBase_1.default));
exports.default = MapSprite;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxNYXBTcHJpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQStDO0FBQy9DLDREQUF1RDtBQUN2RCx5Q0FBMEM7QUFDMUMseUNBQXdDO0FBQ3hDLCtDQUE4QztBQUN4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBYTtJQUFwRDs7SUEyQ0EsQ0FBQztJQXRDRyxzQkFBVywrQkFBUTthQUluQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN6QixDQUFDO2FBTkQsVUFBb0IsQ0FBWTtZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUtTLDBCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUE7SUFDakMsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLGVBQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUMvQyxLQUFLLEVBQUUsQ0FBQTtRQUNaLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQUUsT0FBTTtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtRQUM1QixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRXJGLENBQUM7SUFDRCw2QkFBUyxHQUFULFVBQVUsQ0FBVyxFQUFFLGdCQUF3QjtRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLGlCQUFRLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3BFLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQVEsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQTtJQUM3RixDQUFDO0lBekNnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBMkM3QjtJQUFELGdCQUFDO0NBM0NELEFBMkNDLENBM0NzQyx1QkFBYSxHQTJDbkQ7a0JBM0NvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbk1uZyBmcm9tICcuLi9EYXRhL2Jhc2UvQnV0dG9uTW5nJztcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSAnLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2UnO1xyXG5pbXBvcnQgeyBDb21tYW1uZCB9IGZyb20gJy4uL0VudW0vQ29tbWFkJztcclxuaW1wb3J0IHsgRWFzaW5nIH0gZnJvbSAnLi4vRW51bS9FYXNpbmcnO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tICcuLi9FbnVtL0dhbWVFdmVudCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBTcHJpdGUgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGlzR2V0OiBib29sZWFuO1xyXG4gICAgX215U3ByaXRlOiBjYy5TcHJpdGU7XHJcbiAgICBidG46IGNjLkJ1dHRvblxyXG4gICAgdHlwZTogbnVtYmVyO1xyXG4gICAgcHVibGljIHNldCBteVNwcml0ZSh2OiBjYy5TcHJpdGUpIHtcclxuICAgICAgICB0aGlzLl9teVNwcml0ZSA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBteVNwcml0ZSgpOiBjYy5TcHJpdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9teVNwcml0ZVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm15U3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgdGhpcy5idG4gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5idG4udGFyZ2V0ID0gdGhpcy5ub2RlXHJcbiAgICAgICAgdGhpcy5idG4uaW50ZXJhY3RhYmxlID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDApXHJcbiAgICAgICAgdGhpcy5pc0dldCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50eXBlKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8oMSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogRWFzaW5nLmJhY2tPdXQgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICBpZiAodGhpcy50eXBlID09IDUgfHxcclxuICAgICAgICAgICAgdGhpcy50eXBlID09IDExIHx8XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9PSAxNSkgcmV0dXJuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmiJHmnInlvLfljJY/XCIpO1xyXG4gICAgICAgIHRoaXMuYnRuLmludGVyYWN0YWJsZSA9IHRydWVcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIk1hcFNwcml0ZVwiLCBcInNlbmRFdmVudFwiLCB0aGlzLmJ0biwgdGhpcy5ub2RlLm5hbWUpXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIHNlbmRFdmVudChlOiBjYy5FdmVudCwgX2N1c3RvbUV2ZW50RGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50eXBlKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pc0dldCk7XHJcbiAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5VcGRhdGFVSVN0YXJ0LCBmYWxzZSlcclxuICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLlNob3dTdGF0aW9uSW5mbywgTnVtYmVyKF9jdXN0b21FdmVudERhdGEpKVxyXG4gICAgfVxyXG5cclxufSJdfQ==