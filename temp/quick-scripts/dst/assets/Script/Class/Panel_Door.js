
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Panel_Door.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82a59+J8uNDQKgYQmOD2tjv', 'Panel_Door');
// Script/Class/Panel_Door.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonMng_1 = require("../Data/base/ButtonMng");
var ComponentBase_1 = require("../Data/base/ComponentBase");
var Commad_1 = require("../Enum/Commad");
var GameEvent_1 = require("../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Panel_Door = /** @class */ (function (_super) {
    __extends(Panel_Door, _super);
    function Panel_Door() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.distance = 365; //左右的最遠尺
        return _this;
    }
    Panel_Door.prototype.onLoad = function () {
        this.left = cc.find("left", this.node);
        this.right = cc.find("right", this.node);
        this.btn_Start = cc.find("Item_Btn", this.node).getComponent(cc.Button);
        this.initEvent(GameEvent_1.GameEvent.OpenDoor, this.openDoor);
        this.initEvent(GameEvent_1.GameEvent.CloseDoor, this.closeDoor);
        this.defaultReset();
    };
    Panel_Door.prototype.start = function () {
        ButtonMng_1.default.addEvent(this.node, "Panel_Door", "sendMainInit", this.btn_Start);
    };
    Panel_Door.prototype.reset = function () {
        this.left.x = 0;
        this.right.x = 0;
        this.show();
        // this.left.active = false
        // this.right.active = false
        // this.EventEmit(GameEvent.ShowAllView)
    };
    Panel_Door.prototype.sendMainInit = function (e, _customEventData) {
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.MainInit);
    };
    Panel_Door.prototype.sendDoorAgainGame = function (e, _customEventData) {
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.DoorAgainGame);
    };
    Panel_Door.prototype.openDoor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.left.active = true;
                        _this.right.active = true;
                        cc.tween(_this.left)
                            .call(function () {
                            _this.btn_Start.node.active = false;
                            ButtonMng_1.default.reMoveEvent(_this.btn_Start, "sendMainInit");
                        })
                            .by(2, { x: -_this.distance })
                            .start();
                        cc.tween(_this.right)
                            .by(2, { x: _this.distance })
                            .call(resolve)
                            .start();
                    })];
            });
        });
    };
    Panel_Door.prototype.closeDoor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                cc.tween(this.left)
                    .by(1, { x: this.distance })
                    .call(function () {
                    _this.btn_Start.node.active = true;
                    ButtonMng_1.default.addEvent(_this.node, "Panel_Door", "sendDoorAgainGame", _this.btn_Start);
                })
                    .start();
                cc.tween(this.right)
                    .by(1, { x: -this.distance })
                    .start();
                return [2 /*return*/];
            });
        });
    };
    Panel_Door.prototype.scaleAction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cc.tween(_this.node)
                            .to(1, { scale: 1.75 })
                            .call(function () {
                            _this.node.active = false;
                            resolve();
                        })
                            .start();
                    })];
            });
        });
    };
    Panel_Door.prototype.backScaleAction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.node.active = true;
                        cc.tween(_this.node)
                            .to(1, { scale: 1 })
                            .call(function () {
                            resolve();
                        })
                            .start();
                    })];
            });
        });
    };
    Panel_Door = __decorate([
        ccclass
    ], Panel_Door);
    return Panel_Door;
}(ComponentBase_1.default));
exports.default = Panel_Door;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcUGFuZWxfRG9vci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBK0M7QUFDL0MsNERBQXVEO0FBQ3ZELHlDQUEwQztBQUMxQywrQ0FBOEM7QUFDeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQWE7SUFBckQ7UUFBQSxxRUF3RkM7UUFyRkcsY0FBUSxHQUFXLEdBQUcsQ0FBQyxDQUFBLFFBQVE7O0lBcUZuQyxDQUFDO0lBbEZhLDJCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN2RSxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNuRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUNTLDBCQUFLLEdBQWY7UUFDSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFB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QUksQ0FBQzs0QkFDRixLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7NEJBQ3hCLE9BQU8sRUFBRSxDQUFBO3dCQUNiLENBQUMsQ0FBQzs2QkFDRCxLQUFLLEVBQUUsQ0FBQTtvQkFFaEIsQ0FBQyxDQUFDLEVBQUE7OztLQUNMO0lBQ0ssb0NBQWUsR0FBckI7Ozs7Z0JBQ0ksc0JBQU8sSUFBSSxPQUFPLENBQU8sVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDckMsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO3dCQUN2QixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUM7NkJBQ2QsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQzs2QkFDbkIsSUFBSSxDQUFDOzRCQUNGLE9BQU8sRUFBRSxDQUFBO3dCQUNiLENBQUMsQ0FBQzs2QkFDRCxLQUFLLEVBQUUsQ0FBQTtvQkFFaEIsQ0FBQyxDQUFDLEVBQUE7OztLQUNMO0lBdkZnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBd0Y5QjtJQUFELGlCQUFDO0NBeEZELEFBd0ZDLENBeEZ1Qyx1QkFBYSxHQXdGcEQ7a0JBeEZvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbk1uZyBmcm9tICcuLi9EYXRhL2Jhc2UvQnV0dG9uTW5nJztcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSAnLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2UnO1xyXG5pbXBvcnQgeyBDb21tYW1uZCB9IGZyb20gJy4uL0VudW0vQ29tbWFkJztcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSAnLi4vRW51bS9HYW1lRXZlbnQnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxfRG9vciBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgbGVmdDogY2MuTm9kZTtcclxuICAgIHJpZ2h0OiBjYy5Ob2RlO1xyXG4gICAgZGlzdGFuY2U6IG51bWJlciA9IDM2NTsvL+W3puWPs+eahOacgOmBoOWwulxyXG4gICAgYnRuX1N0YXJ0OiBjYy5CdXR0b247XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxlZnQgPSBjYy5maW5kKFwibGVmdFwiLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5yaWdodCA9IGNjLmZpbmQoXCJyaWdodFwiLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5idG5fU3RhcnQgPSBjYy5maW5kKFwiSXRlbV9CdG5cIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5PcGVuRG9vciwgdGhpcy5vcGVuRG9vcilcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuQ2xvc2VEb29yLCB0aGlzLmNsb3NlRG9vcilcclxuICAgICAgICB0aGlzLmRlZmF1bHRSZXNldCgpXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJQYW5lbF9Eb29yXCIsIFwic2VuZE1haW5Jbml0XCIsIHRoaXMuYnRuX1N0YXJ0KVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMubGVmdC54ID0gMFxyXG4gICAgICAgIHRoaXMucmlnaHQueCA9IDBcclxuICAgICAgICB0aGlzLnNob3coKVxyXG4gICAgICAgIC8vIHRoaXMubGVmdC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIC8vIHRoaXMucmlnaHQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAvLyB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2hvd0FsbFZpZXcpXHJcbiAgICB9XHJcbiAgICBzZW5kTWFpbkluaXQoZTogY2MuRXZlbnQsIF9jdXN0b21FdmVudERhdGE6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuTWFpbkluaXQpXHJcbiAgICB9XHJcbiAgICBzZW5kRG9vckFnYWluR2FtZShlOiBjYy5FdmVudCwgX2N1c3RvbUV2ZW50RGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5Eb29yQWdhaW5HYW1lKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgb3BlbkRvb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5yaWdodC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubGVmdClcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bl9TdGFydC5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgQnV0dG9uTW5nLnJlTW92ZUV2ZW50KHRoaXMuYnRuX1N0YXJ0LCBcInNlbmRNYWluSW5pdFwiKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5ieSgyLCB7IHg6IC10aGlzLmRpc3RhbmNlIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnJpZ2h0KVxyXG4gICAgICAgICAgICAgICAgLmJ5KDIsIHsgeDogdGhpcy5kaXN0YW5jZSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwocmVzb2x2ZSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgYXN5bmMgY2xvc2VEb29yKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubGVmdClcclxuICAgICAgICAgICAgLmJ5KDEsIHsgeDogdGhpcy5kaXN0YW5jZSB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9TdGFydC5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIEJ1dHRvbk1uZy5hZGRFdmVudCh0aGlzLm5vZGUsIFwiUGFuZWxfRG9vclwiLCBcInNlbmREb29yQWdhaW5HYW1lXCIsIHRoaXMuYnRuX1N0YXJ0KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucmlnaHQpXHJcbiAgICAgICAgICAgIC5ieSgxLCB7IHg6IC10aGlzLmRpc3RhbmNlIH0pXHJcblxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgc2NhbGVBY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgc2NhbGU6IDEuNzUgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgYXN5bmMgYmFja1NjYWxlQWN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHNjYWxlOiAxIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdfQ==