
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/base/ComponentBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7f9adj6GJ9FJ7nhglR8Hmd8', 'ComponentBase');
// Script/Data/base/ComponentBase.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var EventMng_1 = require("../../Event/EventMng");
var ComponentBase = /** @class */ (function (_super) {
    __extends(ComponentBase, _super);
    function ComponentBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentBase.prototype.initEvent = function (name, callback) {
        EventMng_1.default.on(name, callback, this);
    };
    ComponentBase.prototype.defaultReset = function () {
        this.node.opacity = 255;
        this.hide();
    };
    ComponentBase.prototype.unEvent = function (name, callback) {
        EventMng_1.default.off(name, callback, this);
    };
    ComponentBase.prototype.show = function () {
        this.node.active = true;
        this.node.opacity = 255;
    };
    ComponentBase.prototype.hide = function () {
        this.node.active = false;
    };
    ComponentBase.prototype.EventEmit = function (type) {
        var any = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            any[_i - 1] = arguments[_i];
        }
        EventMng_1.default.emit.apply(EventMng_1.default, __spreadArrays([type], any));
    };
    ComponentBase.prototype.actionShow = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cc.Tween.stopAllByTarget(_this.node);
                        _this.show();
                        _this.node.setPosition(0, 0);
                        var action1 = cc.tween()
                            .set({ y: _this.node.y - 30, opacity: 0 })
                            .to(0.5, { y: 0, opacity: 255 });
                        callback ?
                            action1.call(callback.bind(_this)).call(resolve).clone(_this.node).start() :
                            action1.call(resolve).clone(_this.node).start();
                    })];
            });
        });
    };
    ComponentBase.prototype.actionHide = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cc.Tween.stopAllByTarget(_this.node);
                        var action1 = cc.tween().by(1, { y: 30, opacity: -255 }).call(_this.hide.bind(_this));
                        callback ?
                            action1.call(callback.bind(_this)).call(resolve).clone(_this.node).start() :
                            action1.call(resolve).clone(_this.node).start();
                    })];
            });
        });
    };
    return ComponentBase;
}(cc.Component));
exports.default = ComponentBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxiYXNlXFxDb21wb25lbnRCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFFNUM7SUFBMkMsaUNBQVk7SUFBdkQ7O0lBOENBLENBQUM7SUE3Q0csaUNBQVMsR0FBVCxVQUFVLElBQVksRUFBRSxRQUFrQjtRQUN0QyxrQkFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFDRCxvQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNmLENBQUM7SUFDRCwrQkFBTyxHQUFQLFVBQVEsSUFBWSxFQUFFLFFBQWtCO1FBQ3BDLGtCQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNELDRCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFBO0lBQzNCLENBQUM7SUFFRCw0QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxpQ0FBUyxHQUFULFVBQVUsSUFBWTtRQUFFLGFBQVc7YUFBWCxVQUFXLEVBQVgscUJBQVcsRUFBWCxJQUFXO1lBQVgsNEJBQVc7O1FBQy9CLGtCQUFRLENBQUMsSUFBSSxPQUFiLGtCQUFRLGtCQUFNLElBQUksR0FBSyxHQUFHLEdBQUM7SUFDL0IsQ0FBQztJQUNLLGtDQUFVLEdBQWhCLFVBQWlCLFFBQW1COzs7O2dCQUNoQyxzQkFBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUNyQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQ25DLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTt3QkFDWCxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7d0JBQzNCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUU7NkJBQ25CLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDOzZCQUN4QyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQTt3QkFDcEMsUUFBUSxDQUFDLENBQUM7NEJBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzs0QkFDMUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN2RCxDQUFDLENBQUMsRUFBQTs7O0tBRUw7SUFDSyxrQ0FBVSxHQUFoQixVQUFpQixRQUFtQjs7OztnQkFDaEMsc0JBQU8sSUFBSSxPQUFPLENBQU8sVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDckMsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFBO3dCQUNuQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQTt3QkFDbkYsUUFBUSxDQUFDLENBQUM7NEJBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzs0QkFDMUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN2RCxDQUFDLENBQUMsRUFBQTs7O0tBRUw7SUFDTCxvQkFBQztBQUFELENBOUNBLEFBOENDLENBOUMwQyxFQUFFLENBQUMsU0FBUyxHQThDdEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRNbmcgZnJvbSBcIi4uLy4uL0V2ZW50L0V2ZW50TW5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRCYXNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIGluaXRFdmVudChuYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIEV2ZW50TW5nLm9uKG5hbWUsIGNhbGxiYWNrLCB0aGlzKVxyXG4gICAgfVxyXG4gICAgZGVmYXVsdFJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1XHJcbiAgICAgICAgdGhpcy5oaWRlKClcclxuICAgIH1cclxuICAgIHVuRXZlbnQobmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcclxuICAgICAgICBFdmVudE1uZy5vZmYobmFtZSwgY2FsbGJhY2ssIHRoaXMpXHJcbiAgICB9XHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBFdmVudEVtaXQodHlwZTogc3RyaW5nLCAuLi5hbnk6IGFueSkge1xyXG4gICAgICAgIEV2ZW50TW5nLmVtaXQodHlwZSwgLi4uYW55KVxyXG4gICAgfVxyXG4gICAgYXN5bmMgYWN0aW9uU2hvdyhjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSlcclxuICAgICAgICAgICAgdGhpcy5zaG93KClcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKDAsIDApXHJcbiAgICAgICAgICAgIGxldCBhY3Rpb24xID0gY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgLnNldCh7IHk6IHRoaXMubm9kZS55IC0gMzAsIG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeTogMCwgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgIGNhbGxiYWNrID9cclxuICAgICAgICAgICAgICAgIGFjdGlvbjEuY2FsbChjYWxsYmFjay5iaW5kKHRoaXMpKS5jYWxsKHJlc29sdmUpLmNsb25lKHRoaXMubm9kZSkuc3RhcnQoKSA6XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24xLmNhbGwocmVzb2x2ZSkuY2xvbmUodGhpcy5ub2RlKS5zdGFydCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgYXN5bmMgYWN0aW9uSGlkZShjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSlcclxuICAgICAgICAgICAgbGV0IGFjdGlvbjEgPSBjYy50d2VlbigpLmJ5KDEsIHsgeTogMzAsIG9wYWNpdHk6IC0yNTUgfSkuY2FsbCh0aGlzLmhpZGUuYmluZCh0aGlzKSlcclxuICAgICAgICAgICAgY2FsbGJhY2sgP1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uMS5jYWxsKGNhbGxiYWNrLmJpbmQodGhpcykpLmNhbGwocmVzb2x2ZSkuY2xvbmUodGhpcy5ub2RlKS5zdGFydCgpIDpcclxuICAgICAgICAgICAgICAgIGFjdGlvbjEuY2FsbChyZXNvbHZlKS5jbG9uZSh0aGlzLm5vZGUpLnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbn0iXX0=