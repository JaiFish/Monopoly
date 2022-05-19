
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Asset/AnimationAsset');
require('./assets/Script/Asset/AssetMng');
require('./assets/Script/Asset/MusicAsset');
require('./assets/Script/Asset/PrefabAsset');
require('./assets/Script/Asset/SpineAsset');
require('./assets/Script/Asset/SpriteAsset');
require('./assets/Script/Asset/SpriteAtlasAsset');
require('./assets/Script/Class/CameraControll');
require('./assets/Script/Class/Mam/ManAnimation');
require('./assets/Script/Class/Mam/Panel_Man');
require('./assets/Script/Class/Message/Choose_Ticket');
require('./assets/Script/Class/Message/Choose_Train');
require('./assets/Script/Class/Message/EndGame');
require('./assets/Script/Class/Message/Explain');
require('./assets/Script/Class/Message/GetProps');
require('./assets/Script/Class/Message/MessageAction');
require('./assets/Script/Class/Message/Panel_Message');
require('./assets/Script/Class/Message/QAAnswer');
require('./assets/Script/Class/Message/Question');
require('./assets/Script/Class/Message/StationInfo');
require('./assets/Script/Class/Panel_AniPath');
require('./assets/Script/Class/Panel_Bear');
require('./assets/Script/Class/Panel_Bufer');
require('./assets/Script/Class/Panel_Cloud');
require('./assets/Script/Class/Panel_Door');
require('./assets/Script/Class/Panel_Map');
require('./assets/Script/Class/Panel_Teaching');
require('./assets/Script/Class/Panel_Test');
require('./assets/Script/Class/Panel_Version');
require('./assets/Script/Class/UI/Panel_UI');
require('./assets/Script/Class/UI/Props_Feature');
require('./assets/Script/Class/UI/Setting');
require('./assets/Script/Class/UI/SettingBtn');
require('./assets/Script/Class/UI/Station');
require('./assets/Script/Class/UI/StationBtn');
require('./assets/Script/Data/DataCloud');
require('./assets/Script/Data/DataMan');
require('./assets/Script/Data/DelayTime');
require('./assets/Script/Data/MyMath');
require('./assets/Script/Data/QA/AnswerLibrary');
require('./assets/Script/Data/QA/ChooseLibrary');
require('./assets/Script/Data/QA/ExplainLibrary');
require('./assets/Script/Data/QA/PropsLibrary');
require('./assets/Script/Data/QA/QALibrary');
require('./assets/Script/Data/TrainInfoLibrary');
require('./assets/Script/Data/base/ButtonMng');
require('./assets/Script/Data/base/ComponentBase');
require('./assets/Script/Data/base/MusciMng');
require('./assets/Script/Enum/CameraState');
require('./assets/Script/Enum/Commad');
require('./assets/Script/Enum/Easing');
require('./assets/Script/Enum/GameEvent');
require('./assets/Script/Enum/GameState');
require('./assets/Script/Enum/StationType');
require('./assets/Script/Enum/TrainType');
require('./assets/Script/Enum/TypeClass');
require('./assets/Script/Enum/onClick');
require('./assets/Script/Event/EventMng');
require('./assets/Script/GameControll');
require('./assets/Script/GameModle');
require('./assets/Script/Interface/IAsset');
require('./assets/Script/Item/CloudItem');
require('./assets/Script/Item/MapItem');
require('./assets/Script/Item/MapSprite');
require('./assets/Script/ShaderCamera/BuferClass');
require('./assets/Script/WebPostMessage');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Mam/Panel_Man.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6dd3599ClNAw6wUDhQcH4YJ', 'Panel_Man');
// Script/Class/Mam/Panel_Man.ts

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
var MyMath_1 = require("../../Data/MyMath");
var Commad_1 = require("../../Enum/Commad");
var GameEvent_1 = require("../../Enum/GameEvent");
var GameState_1 = require("../../Enum/GameState");
var EventMng_1 = require("../../Event/EventMng");
var ManAnimation_1 = require("./ManAnimation");
var Panel_Man = /** @class */ (function (_super) {
    __extends(Panel_Man, _super);
    function Panel_Man() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel_Man.prototype.onLoad = function () {
        this.nMan = cc.find("nMan", this.node);
        this.initEvent(GameEvent_1.GameEvent.ManGO, this.manGO);
        this.initEvent(GameEvent_1.GameEvent.ManStop, this.manStop);
        this.initEvent(GameEvent_1.GameEvent.ManSkip, this.manSkip);
        this.initEvent(GameEvent_1.GameEvent.SetModel, this.setGameModle);
        this.initEvent(GameEvent_1.GameEvent.SetManState, this.setManState);
        this.nowStation = 0;
        this.node.opacity = 0;
        this.isArrival = true;
    };
    Panel_Man.prototype.start = function () {
        EventMng_1.default.emit(GameEvent_1.GameEvent.SendModel, GameEvent_1.GameEvent.SetModel);
    };
    Panel_Man.prototype.update = function (dt) {
        if (this.isCanGo) {
            var x = (dt * this.xSpeed * this.manSpeed) * this.directionX;
            var y = (dt * this.ySpeed * this.manSpeed) * this.directionY;
            x = MyMath_1.default.add(this.nMan.x, x);
            y = MyMath_1.default.add(this.nMan.y, y);
            this.nMan.setPosition(x, y);
            if (this.checkX(x) && this.checkY(y)) {
                this.skipGoPosition();
                this.isArrival = true;
                this.stopGo();
                EventMng_1.default.emit(GameEvent_1.GameEvent.GetStation, this.nowStation);
                EventMng_1.default.emit(GameEvent_1.GameEvent.UIGetStation, this.nowStation);
                console.log(this.manState);
                if (this.manState == GameState_1.GameState.Start || this.manState == GameState_1.GameState.Skip) {
                    if (!this.checkStationStop()) {
                        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.UpdataUIStart, true);
                        this.manGO();
                    }
                    else
                        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.UpdataUIStart, false);
                }
                else {
                    this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.UpdataUIStart, false);
                    this.manState = GameState_1.GameState.Stop;
                }
            }
        }
    };
    Panel_Man.prototype.manGO = function () {
        console.log("開始走囉", this.isCanGo);
        if (!this.isArrival)
            this.startGO();
        else {
            this.setStation();
            this.smoothSpeed();
            this.setNextPosition(this.gameModle.pathPositionData.get(this.nowStation));
            this.setManState(GameState_1.GameState.Start);
            this.isArrival = false;
            this.startGO();
        }
        console.log("開始走囉", this.isCanGo);
    };
    Panel_Man.prototype.manLineWait = function () {
        this.setManState(GameState_1.GameState.Wait);
        this.stopGo();
    };
    Panel_Man.prototype.manWait = function () {
        this.setManState(GameState_1.GameState.Wait);
    };
    Panel_Man.prototype.manStop = function () {
        this.setManState(GameState_1.GameState.Stop);
        this.stopGo();
    };
    Panel_Man.prototype.manSkip = function () {
        if (!this.isCanGo)
            this.startGO();
        this.manSpeed = this.manSkipSeed;
        this.setManState(GameState_1.GameState.Skip);
    };
    Panel_Man.prototype.setStation = function (num) {
        if (num === void 0) { num = 1; }
        this.nowStation += num;
        if (this.nowStation > 20)
            this.nowStation = 0;
    };
    Panel_Man.prototype.setNextPosition = function (_pos) {
        var changePosition = this.gameModle.convertOtherNodeSpaceAR(this.gameModle.mapItem.get(this.nowStation).node, this.node);
        console.log(changePosition);
        this.targetX = MyMath_1.default.round(changePosition.x, 3);
        this.targetY = MyMath_1.default.round(changePosition.y, 3);
        console.log(this.targetX, this.targetY);
        console.log(this.nMan.x, this.nMan.y);
        this.directionX = this.targetX > this.nMan.x ? 1 : -1;
        this.directionY = this.targetY > this.nMan.y ? 1 : -1;
    };
    Panel_Man.prototype.skipGoPosition = function () {
        this.nMan.setPosition(this.targetX, this.targetY);
    };
    Panel_Man.prototype.smoothSpeed = function () {
        var pos = this.gameModle.convertOtherNodeSpaceAR(this.gameModle.mapItem.get(this.nowStation).node, this.node);
        var man = this.nMan.getPosition();
        //計算兩點之間距離
        var distance = pos.subSelf(cc.v3(man.x, man.y));
        //計算絕對值
        var absX = Math.abs(distance.x);
        var absY = Math.abs(distance.y);
        // console.log(absX, absY);
        //開始畢氏定理~~~~
        //計算向量距離(斜邊) vectorDistance=向量距離
        var vectorDistance = Math.sqrt(Math.pow(absX, 2) + Math.pow(absY, 2));
        // console.log(absX / vectorDistance);
        // console.log(absY / vectorDistance);
        //(向量單邊距離 / 向量距離) * 移動速率
        this.xSpeed = (absX / vectorDistance);
        this.ySpeed = (absY / vectorDistance);
    };
    Panel_Man.prototype.setManState = function (_state) {
        this.manState = _state;
        // switch (_state) {
        //     case GameState.Start:
        //         this.manState = GameState.Start;
        //         break;
        //         case GameState.Wait:
        //             this.manState = GameState.Wait;
        //         break;
        // }
    };
    Panel_Man.prototype.setManSprite = function (_sprite) {
        this.nMan.getComponent(cc.Sprite).spriteFrame = _sprite;
    };
    /**
     * 回到原點
     */
    Panel_Man.prototype.resetOeg = function () {
        this.node.opacity = 255;
        this.setStation(0);
        this.setNextPosition(this.gameModle.pathPositionData.get(this.nowStation));
        this.skipGoPosition();
        this.manState = GameState_1.GameState.Stop;
        this.manSpeed = this.manDefaultSpeed;
        this.stopGo();
    };
    Panel_Man.prototype.checkX = function (x) {
        var nowX = MyMath_1.default.round(x, 3);
        if (this.directionX > 0)
            return nowX > this.targetX ? true : false;
        else
            return nowX < this.targetX ? true : false;
    };
    Panel_Man.prototype.checkY = function (y) {
        var nowY = MyMath_1.default.round(y, 3);
        if (this.directionY > 0)
            return nowY > this.targetY ? true : false;
        else
            return nowY < this.targetY ? true : false;
    };
    Panel_Man.prototype.checkStationStop = function () {
        if (this.nowStation == 5 ||
            this.nowStation == 11 ||
            this.nowStation == 15 ||
            this.nowStation == 1 ||
            this.nowStation == 20 ||
            this.nowStation == 21) {
            this.stopGo();
            this.manState = GameState_1.GameState.Stop;
            this.manSpeed = this.manDefaultSpeed;
            switch (this.nowStation) {
                case 5:
                case 11:
                case 15:
                    this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.ShowQA);
                    //傳遞訊息開啟QA視窗
                    break;
                case 1:
                case 20:
                    this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.ShowVideo);
                    //傳遞Show影片訊息
                    break;
                case 21:
                    this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.ShowEndGame);
                    break;
            }
            return true;
        }
        else
            return false;
    };
    return Panel_Man;
}(ManAnimation_1.default));
exports.default = Panel_Man;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWFtXFxQYW5lbF9NYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsNENBQXVDO0FBQ3ZDLDRDQUE2QztBQUM3QyxrREFBaUQ7QUFDakQsa0RBQWlEO0FBQ2pELGlEQUE0QztBQUM1QywrQ0FBdUM7QUFFdkM7SUFBdUMsNkJBQVM7SUFBaEQ7O0lBc01BLENBQUM7SUFyTWEsMEJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7SUFDekIsQ0FBQztJQUNTLHlCQUFLLEdBQWY7UUFDSSxrQkFBUSxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDLFFBQVEs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QUFNO2FBQ2I7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNmOztZQUVHLE9BQU8sS0FBSyxDQUFDO0lBRXJCLENBQUM7SUFDTCxnQkFBQztBQUFELENBdE1BLEFBc01DLENBdE1zQyxzQkFBUyxHQXNNL0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCBNeU1hdGggZnJvbSBcIi4uLy4uL0RhdGEvTXlNYXRoXCI7XHJcbmltcG9ydCB7IENvbW1hbW5kIH0gZnJvbSBcIi4uLy4uL0VudW0vQ29tbWFkXCI7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gXCIuLi8uLi9FbnVtL0dhbWVFdmVudFwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi4vLi4vRW51bS9HYW1lU3RhdGVcIjtcclxuaW1wb3J0IEV2ZW50TW5nIGZyb20gXCIuLi8uLi9FdmVudC9FdmVudE1uZ1wiO1xyXG5pbXBvcnQgTWFuQWN0aW9uIGZyb20gXCIuL01hbkFuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxfTWFuIGV4dGVuZHMgTWFuQWN0aW9uIHtcclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5uTWFuID0gY2MuZmluZChcIm5NYW5cIiwgdGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuTWFuR08sIHRoaXMubWFuR08pXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoR2FtZUV2ZW50Lk1hblN0b3AsIHRoaXMubWFuU3RvcClcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuTWFuU2tpcCwgdGhpcy5tYW5Ta2lwKVxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5TZXRNb2RlbCwgdGhpcy5zZXRHYW1lTW9kbGUpXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoR2FtZUV2ZW50LlNldE1hblN0YXRlLCB0aGlzLnNldE1hblN0YXRlKTtcclxuICAgICAgICB0aGlzLm5vd1N0YXRpb24gPSAwXHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgdGhpcy5pc0Fycml2YWwgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRNbmcuZW1pdChHYW1lRXZlbnQuU2VuZE1vZGVsLCBHYW1lRXZlbnQuU2V0TW9kZWwpXHJcblxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDYW5Hbykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHggPSAoZHQgKiB0aGlzLnhTcGVlZCAqIHRoaXMubWFuU3BlZWQpICogdGhpcy5kaXJlY3Rpb25YXHJcbiAgICAgICAgICAgIGxldCB5ID0gKGR0ICogdGhpcy55U3BlZWQgKiB0aGlzLm1hblNwZWVkKSAqIHRoaXMuZGlyZWN0aW9uWVxyXG5cclxuICAgICAgICAgICAgeCA9IE15TWF0aC5hZGQodGhpcy5uTWFuLngsIHgpXHJcbiAgICAgICAgICAgIHkgPSBNeU1hdGguYWRkKHRoaXMubk1hbi55LCB5KVxyXG4gICAgICAgICAgICB0aGlzLm5NYW4uc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrWCh4KSAmJiB0aGlzLmNoZWNrWSh5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5za2lwR29Qb3NpdGlvbigpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQXJyaXZhbCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEdvKCk7XHJcbiAgICAgICAgICAgICAgICBFdmVudE1uZy5lbWl0KEdhbWVFdmVudC5HZXRTdGF0aW9uLCB0aGlzLm5vd1N0YXRpb24pXHJcbiAgICAgICAgICAgICAgICBFdmVudE1uZy5lbWl0KEdhbWVFdmVudC5VSUdldFN0YXRpb24sIHRoaXMubm93U3RhdGlvbilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWFuU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWFuU3RhdGUgPT0gR2FtZVN0YXRlLlN0YXJ0IHx8IHRoaXMubWFuU3RhdGUgPT0gR2FtZVN0YXRlLlNraXApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tTdGF0aW9uU3RvcCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuVXBkYXRhVUlTdGFydCwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW5HTygpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5VcGRhdGFVSVN0YXJ0LCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuVXBkYXRhVUlTdGFydCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5TdG9wXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtYW5HTygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIumWi+Wni+i1sOWbiVwiLCB0aGlzLmlzQ2FuR28pO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNBcnJpdmFsKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0R08oKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc21vb3RoU3BlZWQoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXROZXh0UG9zaXRpb24odGhpcy5nYW1lTW9kbGUucGF0aFBvc2l0aW9uRGF0YS5nZXQodGhpcy5ub3dTdGF0aW9uKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TWFuU3RhdGUoR2FtZVN0YXRlLlN0YXJ0KVxyXG4gICAgICAgICAgICB0aGlzLmlzQXJyaXZhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0R08oKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIumWi+Wni+i1sOWbiVwiLCB0aGlzLmlzQ2FuR28pO1xyXG4gICAgfVxyXG4gICAgbWFuTGluZVdhaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRNYW5TdGF0ZShHYW1lU3RhdGUuV2FpdClcclxuICAgICAgICB0aGlzLnN0b3BHbygpO1xyXG4gICAgfVxyXG4gICAgbWFuV2FpdCgpIHtcclxuICAgICAgICB0aGlzLnNldE1hblN0YXRlKEdhbWVTdGF0ZS5XYWl0KVxyXG4gICAgfVxyXG4gICAgbWFuU3RvcCgpIHtcclxuICAgICAgICB0aGlzLnNldE1hblN0YXRlKEdhbWVTdGF0ZS5TdG9wKVxyXG4gICAgICAgIHRoaXMuc3RvcEdvKCk7XHJcbiAgICB9XHJcbiAgICBtYW5Ta2lwKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0NhbkdvKSB0aGlzLnN0YXJ0R08oKTtcclxuICAgICAgICB0aGlzLm1hblNwZWVkID0gdGhpcy5tYW5Ta2lwU2VlZDtcclxuICAgICAgICB0aGlzLnNldE1hblN0YXRlKEdhbWVTdGF0ZS5Ta2lwKVxyXG4gICAgfVxyXG4gICAgc2V0U3RhdGlvbihudW06IG51bWJlciA9IDEpIHtcclxuICAgICAgICB0aGlzLm5vd1N0YXRpb24gKz0gbnVtO1xyXG4gICAgICAgIGlmICh0aGlzLm5vd1N0YXRpb24gPiAyMCkgdGhpcy5ub3dTdGF0aW9uID0gMFxyXG4gICAgfVxyXG5cclxuICAgIHNldE5leHRQb3NpdGlvbihfcG9zOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgbGV0IGNoYW5nZVBvc2l0aW9uOiBjYy5WZWMzID0gdGhpcy5nYW1lTW9kbGUuY29udmVydE90aGVyTm9kZVNwYWNlQVIodGhpcy5nYW1lTW9kbGUubWFwSXRlbS5nZXQodGhpcy5ub3dTdGF0aW9uKS5ub2RlLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoYW5nZVBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXRYID0gTXlNYXRoLnJvdW5kKGNoYW5nZVBvc2l0aW9uLngsIDMpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0WSA9IE15TWF0aC5yb3VuZChjaGFuZ2VQb3NpdGlvbi55LCAzKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50YXJnZXRYLCB0aGlzLnRhcmdldFkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubk1hbi54LCB0aGlzLm5NYW4ueSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGlvblggPSB0aGlzLnRhcmdldFggPiB0aGlzLm5NYW4ueCA/IDEgOiAtMVxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uWSA9IHRoaXMudGFyZ2V0WSA+IHRoaXMubk1hbi55ID8gMSA6IC0xXHJcbiAgICB9XHJcbiAgICBza2lwR29Qb3NpdGlvbigpIHtcclxuICAgICAgICB0aGlzLm5NYW4uc2V0UG9zaXRpb24odGhpcy50YXJnZXRYLCB0aGlzLnRhcmdldFkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNtb290aFNwZWVkKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmdhbWVNb2RsZS5jb252ZXJ0T3RoZXJOb2RlU3BhY2VBUih0aGlzLmdhbWVNb2RsZS5tYXBJdGVtLmdldCh0aGlzLm5vd1N0YXRpb24pLm5vZGUsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgbGV0IG1hbiA9IHRoaXMubk1hbi5nZXRQb3NpdGlvbigpXHJcblxyXG4gICAgICAgIC8v6KiI566X5YWp6bue5LmL6ZaT6Led6ZuiXHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gcG9zLnN1YlNlbGYoY2MudjMobWFuLngsIG1hbi55KSlcclxuXHJcbiAgICAgICAgLy/oqIjnrpfntZXlsI3lgLxcclxuICAgICAgICBsZXQgYWJzWCA9IE1hdGguYWJzKGRpc3RhbmNlLngpXHJcbiAgICAgICAgbGV0IGFic1kgPSBNYXRoLmFicyhkaXN0YW5jZS55KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFic1gsIGFic1kpO1xyXG5cclxuICAgICAgICAvL+mWi+Wni+eVouawj+WumueQhn5+fn5cclxuXHJcbiAgICAgICAgLy/oqIjnrpflkJHph4/ot53pm6Io5pac6YKKKSB2ZWN0b3JEaXN0YW5jZT3lkJHph4/ot53pm6JcclxuICAgICAgICBsZXQgdmVjdG9yRGlzdGFuY2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coYWJzWCwgMikgKyBNYXRoLnBvdyhhYnNZLCAyKSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhYnNYIC8gdmVjdG9yRGlzdGFuY2UpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFic1kgLyB2ZWN0b3JEaXN0YW5jZSk7XHJcbiAgICAgICAgLy8o5ZCR6YeP5Zau6YKK6Led6ZuiIC8g5ZCR6YeP6Led6ZuiKSAqIOenu+WLlemAn+eOh1xyXG4gICAgICAgIHRoaXMueFNwZWVkID0gKGFic1ggLyB2ZWN0b3JEaXN0YW5jZSk7XHJcbiAgICAgICAgdGhpcy55U3BlZWQgPSAoYWJzWSAvIHZlY3RvckRpc3RhbmNlKTtcclxuICAgIH1cclxuICAgIHNldE1hblN0YXRlKF9zdGF0ZTogR2FtZVN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5tYW5TdGF0ZSA9IF9zdGF0ZTtcclxuICAgICAgICAvLyBzd2l0Y2ggKF9zdGF0ZSkge1xyXG4gICAgICAgIC8vICAgICBjYXNlIEdhbWVTdGF0ZS5TdGFydDpcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubWFuU3RhdGUgPSBHYW1lU3RhdGUuU3RhcnQ7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgR2FtZVN0YXRlLldhaXQ6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5XYWl0O1xyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgc2V0TWFuU3ByaXRlKF9zcHJpdGU6IGNjLlNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uTWFuLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gX3Nwcml0ZVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlm57liLDljp/pu55cclxuICAgICAqL1xyXG4gICAgcmVzZXRPZWcoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTVcclxuICAgICAgICB0aGlzLnNldFN0YXRpb24oMCk7XHJcbiAgICAgICAgdGhpcy5zZXROZXh0UG9zaXRpb24odGhpcy5nYW1lTW9kbGUucGF0aFBvc2l0aW9uRGF0YS5nZXQodGhpcy5ub3dTdGF0aW9uKSk7XHJcbiAgICAgICAgdGhpcy5za2lwR29Qb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMubWFuU3RhdGUgPSBHYW1lU3RhdGUuU3RvcDtcclxuICAgICAgICB0aGlzLm1hblNwZWVkID0gdGhpcy5tYW5EZWZhdWx0U3BlZWQ7XHJcbiAgICAgICAgdGhpcy5zdG9wR28oKVxyXG4gICAgfVxyXG4gICAgY2hlY2tYKHg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBub3dYID0gTXlNYXRoLnJvdW5kKHgsIDMpO1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvblggPiAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbm93WCA+IHRoaXMudGFyZ2V0WCA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG5vd1ggPCB0aGlzLnRhcmdldFggPyB0cnVlIDogZmFsc2VcclxuICAgIH1cclxuICAgIGNoZWNrWSh5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgbm93WSA9IE15TWF0aC5yb3VuZCh5LCAzKTtcclxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25ZID4gMClcclxuICAgICAgICAgICAgcmV0dXJuIG5vd1kgPiB0aGlzLnRhcmdldFkgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBub3dZIDwgdGhpcy50YXJnZXRZID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBjaGVja1N0YXRpb25TdG9wKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLm5vd1N0YXRpb24gPT0gNSB8fFxyXG4gICAgICAgICAgICB0aGlzLm5vd1N0YXRpb24gPT0gMTEgfHxcclxuICAgICAgICAgICAgdGhpcy5ub3dTdGF0aW9uID09IDE1IHx8XHJcbiAgICAgICAgICAgIHRoaXMubm93U3RhdGlvbiA9PSAxIHx8XHJcbiAgICAgICAgICAgIHRoaXMubm93U3RhdGlvbiA9PSAyMCB8fFxyXG4gICAgICAgICAgICB0aGlzLm5vd1N0YXRpb24gPT0gMjFcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wR28oKVxyXG4gICAgICAgICAgICB0aGlzLm1hblN0YXRlID0gR2FtZVN0YXRlLlN0b3BcclxuICAgICAgICAgICAgdGhpcy5tYW5TcGVlZCA9IHRoaXMubWFuRGVmYXVsdFNwZWVkO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMubm93U3RhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgIGNhc2UgMTU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5TaG93UUEpXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lgrPpgZ7oqIrmga/plovllZ9RQeimlueql1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAyMDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLlNob3dWaWRlbylcclxuICAgICAgICAgICAgICAgICAgICAvL+WCs+mBnlNob3flvbHniYfoqIrmga9cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjE6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5TaG93RW5kR2FtZSlcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Message/QAAnswer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d2daVWY9dJUrstc8ERWaIe', 'QAAnswer');
// Script/Class/Message/QAAnswer.ts

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
var ButtonMng_1 = require("../../Data/base/ButtonMng");
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var Commad_1 = require("../../Enum/Commad");
var GameEvent_1 = require("../../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var QAAnswer = /** @class */ (function (_super) {
    __extends(QAAnswer, _super);
    function QAAnswer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QAAnswer.prototype.onLoad = function () {
        this.bear = cc.find("Bear", this.node).addComponent(Bear);
        this.label_message = cc.find("Message/Label", this.node).getComponent(cc.Label);
        this.con_Btn = cc.find("Con_Btn", this.node);
        this.item_Btn = cc.find("Item_Btn", this.node);
        // this.item_Btn.addComponent(Btn)
    };
    QAAnswer.prototype.start = function () {
        this.item_Btn.active = false;
        this.defaultReset();
        this.reset();
    };
    QAAnswer.prototype.reset = function () {
        this.bear.bearAnimation.stop();
        this.bear.bearSprite.spriteFrame = null;
        // this.bear.answerSprtie.spriteFrame = null
        this.con_Btn.removeAllChildren();
        this.label_message.string = "";
    };
    QAAnswer.prototype.trueAnswer = function () {
        this.label_message.string = "恭喜答對!!";
        var _node = cc.instantiate(this.item_Btn);
        this.con_Btn.addChild(_node, cc.macro.MAX_ZINDEX);
        cc.find("Label", _node).getComponent(cc.Label).string = "詳解";
        ButtonMng_1.default.addEvent(this.node, "QAAnswer", "whichGO", _node.getComponent(cc.Button), "0");
        _node.setPosition(0, 0);
        _node.active = true;
        _node = cc.instantiate(this.item_Btn);
        this.con_Btn.addChild(_node, cc.macro.MAX_ZINDEX);
        cc.find("Label", _node).getComponent(cc.Label).string = "繼續";
        ButtonMng_1.default.addEvent(this.node, "QAAnswer", "whichGO", _node.getComponent(cc.Button), "1");
        _node.setPosition(0, 0);
        _node.active = true;
        this.bear.bearAnimation.play("Bear_True");
        // this.bear.bearSprite.spriteFrame = AssetMng.data_SprtieAtlas.get("")
        // this.bear.answerSprtie.spriteFrame = AssetMng.data_SprtieAtlas.get("")
    };
    QAAnswer.prototype.falseAnswer = function () {
        this.label_message.string = "答案錯誤!\n\r請再接再厲!!!";
        var _node = cc.instantiate(this.item_Btn);
        this.con_Btn.addChild(_node, cc.macro.MAX_ZINDEX);
        cc.find("Label", _node).getComponent(cc.Label).string = "回到題目";
        ButtonMng_1.default.addEvent(this.node, "QAAnswer", "whichGO", _node.getComponent(cc.Button), "2");
        _node.setPosition(0, 0);
        _node.active = true;
        this.bear.bearAnimation.play("Bear_False");
        // this.bear.bearSprite.spriteFrame = AssetMng.data_SprtieAtlas.get("")
        // this.bear.answerSprtie.spriteFrame = AssetMng.data_SprtieAtlas.get("")
    };
    QAAnswer.prototype.whichGO = function (e, _customEventData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionHide()];
                    case 1:
                        _a.sent();
                        switch (Number(_customEventData)) {
                            case 0: //詳解
                                this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.ShowExplain);
                                break;
                            case 1: //下一流程(關閉畫面後回到火車畫面)
                                this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndAnswer);
                                break;
                            case 2: //答錯回到上一個畫面
                                this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.ShowAgainQA);
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    QAAnswer = __decorate([
        ccclass
    ], QAAnswer);
    return QAAnswer;
}(ComponentBase_1.default));
exports.default = QAAnswer;
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    function Bear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bear.prototype.onLoad = function () {
        this.bearAnimation = this.node.getComponent(cc.Animation);
        this.bearSprite = this.node.getComponent(cc.Sprite);
        this.answerSprtie = cc.find("Hand/Icon", this.node).getComponent(cc.Sprite);
    };
    return Bear;
}(ComponentBase_1.default));
var Btn = /** @class */ (function (_super) {
    __extends(Btn, _super);
    function Btn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Btn.prototype.onLoad = function () {
        this.str = cc.find("Label", this.node).getComponent(cc.Label);
        this.button = this.node.getComponent(cc.Button);
        console.log("!!!!!!!!!?");
    };
    return Btn;
}(ComponentBase_1.default));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcUUFBbnN3ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUMxRCw0Q0FBNkM7QUFDN0Msa0RBQWlEO0FBQzNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFhO0lBQW5EOztJQWtGQSxDQUFDO0lBM0VhLHlCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDL0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDOUMsa0NBQWtDO0lBRXRDLENBQUM7SUFDUyx3QkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQzVCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFD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Q0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUMvRSxDQUFDO0lBQ0wsV0FBQztBQUFELENBVEEsQUFTQyxDQVRrQix1QkFBYSxHQVMvQjtBQUVEO0lBQWtCLHVCQUFhO0lBQS9COztJQVVBLENBQUM7SUFOYSxvQkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDN0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUwsVUFBQztBQUFELENBVkEsQUFVQyxDQVZpQix1QkFBYSxHQVU5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3NldE1uZyBmcm9tICcuLi8uLi9Bc3NldC9Bc3NldE1uZyc7XHJcbmltcG9ydCBCdXR0b25NbmcgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0J1dHRvbk1uZyc7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlJztcclxuaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tICcuLi8uLi9FbnVtL0NvbW1hZCc7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gJy4uLy4uL0VudW0vR2FtZUV2ZW50JztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFFBQW5zd2VyIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICBpdGVtX0J0bjogY2MuTm9kZTtcclxuICAgIGJlYXI6IEJlYXI7XHJcbiAgICBsYWJlbF9tZXNzYWdlOiBjYy5MYWJlbDtcclxuXHJcbiAgICBjb25fQnRuOiBjYy5Ob2RlO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZWFyID0gY2MuZmluZChcIkJlYXJcIiwgdGhpcy5ub2RlKS5hZGRDb21wb25lbnQoQmVhcik7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9tZXNzYWdlID0gY2MuZmluZChcIk1lc3NhZ2UvTGFiZWxcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgdGhpcy5jb25fQnRuID0gY2MuZmluZChcIkNvbl9CdG5cIiwgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuaXRlbV9CdG4gPSBjYy5maW5kKFwiSXRlbV9CdG5cIiwgdGhpcy5ub2RlKVxyXG4gICAgICAgIC8vIHRoaXMuaXRlbV9CdG4uYWRkQ29tcG9uZW50KEJ0bilcclxuXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtX0J0bi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFJlc2V0KClcclxuICAgICAgICB0aGlzLnJlc2V0KClcclxuICAgIH1cclxuICAgIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmVhci5iZWFyQW5pbWF0aW9uLnN0b3AoKVxyXG4gICAgICAgIHRoaXMuYmVhci5iZWFyU3ByaXRlLnNwcml0ZUZyYW1lID0gbnVsbFxyXG4gICAgICAgIC8vIHRoaXMuYmVhci5hbnN3ZXJTcHJ0aWUuc3ByaXRlRnJhbWUgPSBudWxsXHJcbiAgICAgICAgdGhpcy5jb25fQnRuLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9tZXNzYWdlLnN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgfVxyXG4gICAgdHJ1ZUFuc3dlcigpIHtcclxuICAgICAgICB0aGlzLmxhYmVsX21lc3NhZ2Uuc3RyaW5nID0gXCLmga3llpznrZTlsI0hIVwiO1xyXG5cclxuICAgICAgICBsZXQgX25vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1fQnRuKVxyXG4gICAgICAgIHRoaXMuY29uX0J0bi5hZGRDaGlsZChfbm9kZSwgY2MubWFjcm8uTUFYX1pJTkRFWClcclxuICAgICAgICBjYy5maW5kKFwiTGFiZWxcIiwgX25vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLoqbPop6NcIlxyXG4gICAgICAgIEJ1dHRvbk1uZy5hZGRFdmVudCh0aGlzLm5vZGUsIFwiUUFBbnN3ZXJcIiwgXCJ3aGljaEdPXCIsIF9ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLCBcIjBcIilcclxuICAgICAgICBfbm9kZS5zZXRQb3NpdGlvbigwLCAwKVxyXG4gICAgICAgIF9ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICBfbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbV9CdG4pXHJcbiAgICAgICAgdGhpcy5jb25fQnRuLmFkZENoaWxkKF9ub2RlLCBjYy5tYWNyby5NQVhfWklOREVYKVxyXG4gICAgICAgIGNjLmZpbmQoXCJMYWJlbFwiLCBfbm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIue5vOe6jFwiXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJRQUFuc3dlclwiLCBcIndoaWNoR09cIiwgX25vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbiksIFwiMVwiKVxyXG4gICAgICAgIF9ub2RlLnNldFBvc2l0aW9uKDAsIDApXHJcbiAgICAgICAgX25vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5iZWFyLmJlYXJBbmltYXRpb24ucGxheShcIkJlYXJfVHJ1ZVwiKVxyXG4gICAgICAgIC8vIHRoaXMuYmVhci5iZWFyU3ByaXRlLnNwcml0ZUZyYW1lID0gQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJcIilcclxuICAgICAgICAvLyB0aGlzLmJlYXIuYW5zd2VyU3BydGllLnNwcml0ZUZyYW1lID0gQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJcIilcclxuICAgIH1cclxuXHJcbiAgICBmYWxzZUFuc3dlcigpIHtcclxuICAgICAgICB0aGlzLmxhYmVsX21lc3NhZ2Uuc3RyaW5nID0gXCLnrZTmoYjpjK/oqqQhXFxuXFxy6KuL5YaN5o6l5YaN5Y6yISEhXCI7XHJcblxyXG5cclxuICAgICAgICBsZXQgX25vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1fQnRuKVxyXG4gICAgICAgIHRoaXMuY29uX0J0bi5hZGRDaGlsZChfbm9kZSwgY2MubWFjcm8uTUFYX1pJTkRFWClcclxuICAgICAgICBjYy5maW5kKFwiTGFiZWxcIiwgX25vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLlm57liLDpoYznm65cIlxyXG4gICAgICAgIEJ1dHRvbk1uZy5hZGRFdmVudCh0aGlzLm5vZGUsIFwiUUFBbnN3ZXJcIiwgXCJ3aGljaEdPXCIsIF9ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLCBcIjJcIilcclxuICAgICAgICBfbm9kZS5zZXRQb3NpdGlvbigwLCAwKVxyXG4gICAgICAgIF9ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuYmVhci5iZWFyQW5pbWF0aW9uLnBsYXkoXCJCZWFyX0ZhbHNlXCIpXHJcbiAgICAgICAgLy8gdGhpcy5iZWFyLmJlYXJTcHJpdGUuc3ByaXRlRnJhbWUgPSBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIlwiKVxyXG4gICAgICAgIC8vIHRoaXMuYmVhci5hbnN3ZXJTcHJ0aWUuc3ByaXRlRnJhbWUgPSBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIlwiKVxyXG5cclxuICAgIH1cclxuICAgIGFzeW5jIHdoaWNoR08oZTogY2MuRXZlbnQsIF9jdXN0b21FdmVudERhdGE6IHN0cmluZykge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYWN0aW9uSGlkZSgpXHJcbiAgICAgICAgc3dpdGNoIChOdW1iZXIoX2N1c3RvbUV2ZW50RGF0YSkpIHtcclxuICAgICAgICAgICAgY2FzZSAwOi8v6Kmz6KejXHJcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLlNob3dFeHBsYWluKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAxOi8v5LiL5LiA5rWB56iLKOmXnOmWieeVq+mdouW+jOWbnuWIsOeBq+i7iueVq+mdoilcclxuICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuRW5kQW5zd2VyKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAyOi8v562U6Yyv5Zue5Yiw5LiK5LiA5YCL55Wr6Z2iXHJcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLlNob3dBZ2FpblFBKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBCZWFyIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICBiZWFyQW5pbWF0aW9uOiBjYy5BbmltYXRpb247XHJcbiAgICBiZWFyU3ByaXRlOiBjYy5TcHJpdGU7XHJcbiAgICBhbnN3ZXJTcHJ0aWU6IGNjLlNwcml0ZTtcclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZWFyQW5pbWF0aW9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgdGhpcy5iZWFyU3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgdGhpcy5hbnN3ZXJTcHJ0aWUgPSBjYy5maW5kKFwiSGFuZC9JY29uXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQnRuIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICBzdHI6IGNjLkxhYmVsO1xyXG4gICAgYnV0dG9uOiBjYy5CdXR0b247XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0ciA9IGNjLmZpbmQoXCJMYWJlbFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiISEhISEhISEhP1wiKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/UI/Station.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4043aSytZFKF4LllvZs7QjF', 'Station');
// Script/Class/UI/Station.ts

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
var AssetMng_1 = require("../../Asset/AssetMng");
var ButtonMng_1 = require("../../Data/base/ButtonMng");
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var GameEvent_1 = require("../../Enum/GameEvent");
var GameModle_1 = require("../../GameModle");
var StationBtn_1 = require("./StationBtn");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Station = /** @class */ (function (_super) {
    __extends(Station, _super);
    function Station() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxIndex = 5;
        _this.getStationData = [];
        return _this;
    }
    Station.prototype.onLoad = function () {
        this.btn_ControllOpen = cc.find("Btn_ControllOpen", this.node).getComponent(cc.Button);
        this.icon = cc.find("icon", this.btn_ControllOpen.node);
        this.item = cc.find("item", this.node);
        this.scroll = cc.find("con_Scroll", this.node).getComponent(cc.ScrollView);
        this.con = this.scroll.content;
        this.con.removeAllChildren();
        this.con.setContentSize(0, 0);
        this.Layout_BG1 = cc.find("Layout_BG1", this.scroll.node).getComponent(cc.Layout);
        this.Layout_BG2 = cc.find("Layout_BG2", this.Layout_BG1.node).getComponent(cc.Layout);
        this.Layout_Mask = cc.find("Layout_Mask", this.Layout_BG2.node).getComponent(cc.Layout);
        this.initEvent(GameEvent_1.GameEvent.UIGetStation, this.getStation);
        //額外處理
        this.sortData();
        this.itemCount = this.getStationData.length;
        this.itemInit();
        // for (let index = 0; index < this.itemCount; index++) {
        //     this.itemSop(this.getStationData[index])
        // }
    };
    Station.prototype.start = function () {
        ButtonMng_1.default.addEvent(this.node, "Station", "eventControllOpen", this.btn_ControllOpen);
    };
    Station.prototype.itemInit = function () {
        for (var index = 0; index < this.itemCount; index++) {
            this.itemSop(this.getStationData[index]);
        }
        //有問題的方法
        // if (this.maxIndex < this.itemCount) {
        //     for (let index = 0; index < this.maxIndex; index++) {
        //         this.itemSop(this.getStationData[index])
        //     }
        //     setTimeout(() => {//給時間渲染
        //         this.closeLayout()
        //         setTimeout(() => {
        //             for (let index = this.maxIndex; index < this.itemCount; index++) {
        //                 this.itemSop(this.getStationData[index])
        //             }
        //             this.item.active = false
        //         }, 100);
        //     }, 100);
        // }
        // else {
        //     for (let index = 0; index < this.itemCount; index++) {
        //         this.itemSop(this.getStationData[index])
        //     }
        //     this.item.active = false
        // }
    };
    Station.prototype.chengeSprit = function () {
        for (var index = 0; index < this.con.childrenCount; index++) {
            var _class = this.con.children[index].getComponent(StationBtn_1.default);
            _class.sprite.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("UIBtn_Statoin_Gary_" + _class.stationType);
        }
    };
    Station.prototype.checkInit = function () {
        var isCheck = false;
        if (this.con.children[this.itemCount - 1].getComponent(StationBtn_1.default) != undefined)
            if (this.con.children[this.itemCount - 1].getComponent(StationBtn_1.default).btn != null)
                isCheck = true;
        return isCheck;
    };
    Station.prototype.eventControllOpen = function (e, _customEventData) {
        if (this.isOpen) {
            this.scroll.node.active = false;
            this.isOpen = this.scroll.node.active;
            this.icon.angle = 180;
        }
        else {
            this.scroll.node.active = true;
            this.isOpen = this.scroll.node.active;
            this.icon.angle = 0;
        }
    };
    Station.prototype.getStation = function (stationNum) {
        if (stationNum < 2 || stationNum > 19)
            return;
        cc.find(stationNum.toString(), this.con).getComponent(StationBtn_1.default).chengeStation();
    };
    Station.prototype.itemSop = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var _item, _class;
            return __generator(this, function (_a) {
                _item = cc.instantiate(this.item);
                this.con.addChild(_item, cc.macro.MAX_ZINDEX, index.toString());
                _class = _item.addComponent(StationBtn_1.default);
                _class.setEvent(index);
                _item.active = true;
                return [2 /*return*/];
            });
        });
    };
    Station.prototype.closeLayout = function () {
        this.Layout_BG1.enabled = false;
        this.Layout_BG2.enabled = false;
        this.Layout_Mask.enabled = false;
    };
    Station.prototype.sortData = function () {
        for (var index = 0; index < GameModle_1.default.stationType_Normal.length; index++) {
            this.getStationData.push(GameModle_1.default.stationType_Normal[index]);
        }
        for (var index = 0; index < GameModle_1.default.stationType_QA.length; index++) {
            this.getStationData.push(GameModle_1.default.stationType_QA[index]);
        }
        this.getStationData.sort(function (a, b) { return a - b; });
    };
    Station = __decorate([
        ccclass
    ], Station);
    return Station;
}(ComponentBase_1.default));
exports.default = Station;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcVUlcXFN0YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCwrREFBMEQ7QUFDMUQsa0RBQWlEO0FBQ2pELDZDQUF3QztBQUN4QywyQ0FBc0M7QUFDaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQWE7SUFBbEQ7UUFBQSxxRUEySEM7UUFqSEcsY0FBUSxHQUFXLENBQUMsQ0FBQTtRQUNwQixvQkFBYyxHQUFhLEVBQUUsQ0FBQTs7SUFnSGpDLENBQUM7SUE3R2Esd0JBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0RixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUE7UUFDOUIsSUFB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LEFBMkhDLENBM0hvQyx1QkFBYSxHQTJIakQ7a0JBM0hvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0TW5nIGZyb20gJy4uLy4uL0Fzc2V0L0Fzc2V0TW5nJztcclxuaW1wb3J0IEJ1dHRvbk1uZyBmcm9tICcuLi8uLi9EYXRhL2Jhc2UvQnV0dG9uTW5nJztcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2UnO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tICcuLi8uLi9FbnVtL0dhbWVFdmVudCc7XHJcbmltcG9ydCBHYW1lTW9kbGUgZnJvbSAnLi4vLi4vR2FtZU1vZGxlJztcclxuaW1wb3J0IFN0YXRpb25CdG4gZnJvbSAnLi9TdGF0aW9uQnRuJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpb24gZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGljb246IGNjLk5vZGU7XHJcbiAgICBpc09wZW46IGJvb2xlYW5cclxuICAgIGl0ZW06IGNjLk5vZGVcclxuICAgIGJ0bl9Db250cm9sbE9wZW46IGNjLkJ1dHRvblxyXG4gICAgc2Nyb2xsOiBjYy5TY3JvbGxWaWV3O1xyXG4gICAgY29uOiBjYy5Ob2RlXHJcbiAgICBMYXlvdXRfTWFzazogY2MuTGF5b3V0O1xyXG4gICAgTGF5b3V0X0JHMTogY2MuTGF5b3V0O1xyXG4gICAgTGF5b3V0X0JHMjogY2MuTGF5b3V0O1xyXG4gICAgbWF4SW5kZXg6IG51bWJlciA9IDVcclxuICAgIGdldFN0YXRpb25EYXRhOiBudW1iZXJbXSA9IFtdXHJcbiAgICBpdGVtQ291bnQ6IG51bWJlcjsvL+eBq+i7iuermee4veWFseaVuOmHj1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5idG5fQ29udHJvbGxPcGVuID0gY2MuZmluZChcIkJ0bl9Db250cm9sbE9wZW5cIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMuaWNvbiA9IGNjLmZpbmQoXCJpY29uXCIsIHRoaXMuYnRuX0NvbnRyb2xsT3Blbi5ub2RlKTtcclxuICAgICAgICB0aGlzLml0ZW0gPSBjYy5maW5kKFwiaXRlbVwiLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5zY3JvbGwgPSBjYy5maW5kKFwiY29uX1Njcm9sbFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KVxyXG4gICAgICAgIHRoaXMuY29uID0gdGhpcy5zY3JvbGwuY29udGVudFxyXG4gICAgICAgIHRoaXMuY29uLnJlbW92ZUFsbENoaWxkcmVuKClcclxuICAgICAgICB0aGlzLmNvbi5zZXRDb250ZW50U2l6ZSgwLCAwKVxyXG4gICAgICAgIHRoaXMuTGF5b3V0X0JHMSA9IGNjLmZpbmQoXCJMYXlvdXRfQkcxXCIsIHRoaXMuc2Nyb2xsLm5vZGUpLmdldENvbXBvbmVudChjYy5MYXlvdXQpXHJcbiAgICAgICAgdGhpcy5MYXlvdXRfQkcyID0gY2MuZmluZChcIkxheW91dF9CRzJcIiwgdGhpcy5MYXlvdXRfQkcxLm5vZGUpLmdldENvbXBvbmVudChjYy5MYXlvdXQpXHJcbiAgICAgICAgdGhpcy5MYXlvdXRfTWFzayA9IGNjLmZpbmQoXCJMYXlvdXRfTWFza1wiLCB0aGlzLkxheW91dF9CRzIubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxheW91dClcclxuXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoR2FtZUV2ZW50LlVJR2V0U3RhdGlvbiwgdGhpcy5nZXRTdGF0aW9uKVxyXG5cclxuICAgICAgICAvL+mhjeWkluiZleeQhlxyXG4gICAgICAgIHRoaXMuc29ydERhdGEoKVxyXG4gICAgICAgIHRoaXMuaXRlbUNvdW50ID0gdGhpcy5nZXRTdGF0aW9uRGF0YS5sZW5ndGhcclxuICAgICAgICB0aGlzLml0ZW1Jbml0KClcclxuXHJcbiAgICAgICAgLy8gZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaXRlbUNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXRlbVNvcCh0aGlzLmdldFN0YXRpb25EYXRhW2luZGV4XSlcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIEJ1dHRvbk1uZy5hZGRFdmVudCh0aGlzLm5vZGUsIFwiU3RhdGlvblwiLCBcImV2ZW50Q29udHJvbGxPcGVuXCIsIHRoaXMuYnRuX0NvbnRyb2xsT3BlbilcclxuICAgIH1cclxuICAgIGl0ZW1Jbml0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLml0ZW1Db3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Tb3AodGhpcy5nZXRTdGF0aW9uRGF0YVtpbmRleF0pXHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgLy/mnInllY/poYznmoTmlrnms5VcclxuICAgICAgICAvLyBpZiAodGhpcy5tYXhJbmRleCA8IHRoaXMuaXRlbUNvdW50KSB7XHJcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLm1heEluZGV4OyBpbmRleCsrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLml0ZW1Tb3AodGhpcy5nZXRTdGF0aW9uRGF0YVtpbmRleF0pXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7Ly/ntabmmYLplpPmuLLmn5NcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY2xvc2VMYXlvdXQoKVxyXG4gICAgICAgIC8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSB0aGlzLm1heEluZGV4OyBpbmRleCA8IHRoaXMuaXRlbUNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuaXRlbVNvcCh0aGlzLmdldFN0YXRpb25EYXRhW2luZGV4XSlcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5pdGVtLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgLy8gICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIC8vICAgICB9LCAxMDApO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaXRlbUNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLml0ZW1Tb3AodGhpcy5nZXRTdGF0aW9uRGF0YVtpbmRleF0pXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgdGhpcy5pdGVtLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgY2hlbmdlU3ByaXQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29uLmNoaWxkcmVuQ291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IF9jbGFzcyA9IHRoaXMuY29uLmNoaWxkcmVuW2luZGV4XS5nZXRDb21wb25lbnQoU3RhdGlvbkJ0bilcclxuICAgICAgICAgICAgX2NsYXNzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiVUlCdG5fU3RhdG9pbl9HYXJ5X1wiICsgX2NsYXNzLnN0YXRpb25UeXBlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrSW5pdCgpIHtcclxuICAgICAgICBsZXQgaXNDaGVjayA9IGZhbHNlXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbi5jaGlsZHJlblt0aGlzLml0ZW1Db3VudCAtIDFdLmdldENvbXBvbmVudChTdGF0aW9uQnRuKSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbi5jaGlsZHJlblt0aGlzLml0ZW1Db3VudCAtIDFdLmdldENvbXBvbmVudChTdGF0aW9uQnRuKS5idG4gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGlzQ2hlY2sgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuIGlzQ2hlY2tcclxuICAgIH1cclxuICAgIGV2ZW50Q29udHJvbGxPcGVuKGU6IGNjLkV2ZW50LCBfY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGwubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IHRoaXMuc2Nyb2xsLm5vZGUuYWN0aXZlXHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5hbmdsZSA9IDE4MFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IHRoaXMuc2Nyb2xsLm5vZGUuYWN0aXZlXHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5hbmdsZSA9IDBcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuICAgIGdldFN0YXRpb24oc3RhdGlvbk51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHN0YXRpb25OdW0gPCAyIHx8IHN0YXRpb25OdW0gPiAxOSkgcmV0dXJuO1xyXG4gICAgICAgIGNjLmZpbmQoc3RhdGlvbk51bS50b1N0cmluZygpLCB0aGlzLmNvbikuZ2V0Q29tcG9uZW50KFN0YXRpb25CdG4pLmNoZW5nZVN0YXRpb24oKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgaXRlbVNvcChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IF9pdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtKVxyXG4gICAgICAgIHRoaXMuY29uLmFkZENoaWxkKF9pdGVtLCBjYy5tYWNyby5NQVhfWklOREVYLCBpbmRleC50b1N0cmluZygpKTtcclxuICAgICAgICBsZXQgX2NsYXNzID0gX2l0ZW0uYWRkQ29tcG9uZW50KFN0YXRpb25CdG4pXHJcbiAgICAgICAgX2NsYXNzLnNldEV2ZW50KGluZGV4KVxyXG4gICAgICAgIF9pdGVtLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICB9XHJcbiAgICBjbG9zZUxheW91dCgpIHtcclxuICAgICAgICB0aGlzLkxheW91dF9CRzEuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5MYXlvdXRfQkcyLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuTGF5b3V0X01hc2suZW5hYmxlZCA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBzb3J0RGF0YSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgR2FtZU1vZGxlLnN0YXRpb25UeXBlX05vcm1hbC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRTdGF0aW9uRGF0YS5wdXNoKEdhbWVNb2RsZS5zdGF0aW9uVHlwZV9Ob3JtYWxbaW5kZXhdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgR2FtZU1vZGxlLnN0YXRpb25UeXBlX1FBLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0aGlzLmdldFN0YXRpb25EYXRhLnB1c2goR2FtZU1vZGxlLnN0YXRpb25UeXBlX1FBW2luZGV4XSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRTdGF0aW9uRGF0YS5zb3J0KChhLCBiKSA9PiBhIC0gYilcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/QA/ExplainLibrary.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32b98+/hqhC356q1F7VxKlL', 'ExplainLibrary');
// Script/Data/QA/ExplainLibrary.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExplainLibrary = /** @class */ (function () {
    function ExplainLibrary(level, qaLib_num) {
        this.explainLib = [];
        this.lib = [];
        var libClass = new lib();
        switch (level) {
            case 0:
                this.lib = libClass.easy;
                break;
            case 1:
                this.lib = libClass.normal;
                break;
            case 2:
                this.lib = libClass.hard;
                break;
        }
        for (var index = 0; index < qaLib_num.length; index++) {
            this.explainLib.push(this.lib[qaLib_num[index]]);
        }
    }
    return ExplainLibrary;
}());
exports.default = ExplainLibrary;
var lib = /** @class */ (function () {
    function lib() {
        this.easy = [
            "所謂「陽光是最佳的防腐劑」，政治制度的透明化、公開化是政府清明的表徵，藉由立法將政府施政行為進一步的透明化、公開化，是防止公務人員貪污瀆職的最佳防腐劑。",
            "依「鐵路法」第57條第2項規定，行人、車輛不得在鐵路路線、橋樑、隧道內及站區內非供公眾通行之處所通行，否則將依同法第70條規定，罰新臺幣1萬元以上5萬元以下罰鍰。若物品不慎掉落軌道，應先尋求站務人員協助，站務人員確認暫時不會有列車進站，再使用月臺拾物專用夾夾起，不可逕自入侵軌道。",
            "在車站或列車上撿拾到遺失物，應送交列車長或車站人員協助辦理失物招領，讓失主儘快尋獲失物，若擅自帶回私用，有觸犯刑法第337條侵占遺失物罪嫌疑。",
            "旅客搭乘列車，應依照「旅客運送契約」規定購買符合身分之票種，以符合誠實信用原則，且法定優待票(敬老票或愛心票)是政府照顧弱勢之美意，若不符身分者為節省票價購買，可能有刑法詐欺罪之違法疑慮。",
            "為展現政府打擊貪腐決心，回應民眾期盼，落實《聯合國反貪腐公約》之各項反貪腐措施，我國於100年7月20日成立「法務部廉政署」專責於國家廉政政策規劃，執行反貪、防貪及肅貪業務，以治標（執法）、治本（防貪）及根除（教育）三管齊下策略，達成提高貪瀆犯罪定罪率、降低貪瀆犯罪發生及落實保障人權等三大目標。",
            "疫情期間，配合政府防疫政策落實戴好口罩並配合量測體溫，做好消毒作業，保護自己也保護其他乘客安全，是搭火車的必備禮儀喔！",
            "依據「政風機構人員設置管理條例」，中央、地方及公營事業機構都設有政風單位，由法務部廉政署規劃、協調及指揮監督，政風單位的職掌除了廉政宣導，亦包含機關有關之貪瀆與不法事項之處理。",
            "1933係臺鐵提供民眾緊急通報專線電話，民眾發現危及鐵路運行情事，可以立即撥打。提醒各位『1933』24小時緊急通報電話僅限發現軌道、平交道、橋樑及隧道等有障礙物之通報專用，如果不是遇到緊急事故，一般旅客服務項目請撥打臺鐵客服專線電話，以免影響通報及列車行車。",
            "很多爆裂物會偽裝成不易發覺危險徵候的日常用品，如信件、包裹、手提箱或罐頭等。如在車站內發現包裹或手提箱，長時間無人管，請告知警察或車站人員以進行處理。",
        ];
        this.normal = [
            "1933係臺鐵提供民眾緊急通報專線電話，民眾發現危及鐵路運行情事，可以立即撥打。提醒各位『1933』24小時緊急通報電話僅限發現軌道、平交道、橋樑及隧道等有障礙物之通報專用，如果不是遇到緊急事故，一般旅客服務項目請撥打臺鐵客服專線電話，以免影響通報及列車行車。",
            "今日海線上僅存五座木造車站，從北至南分別是談文、大山、新埔、日南和追分站。五座車站皆列入歷史建築，保存良好。海線木造車站起造年代相同（1922），建築樣式也完全一致，這些於通車當年完成的站房，主體皆為木造結構，頂部覆蓋日本黑瓦。從正面觀之屋頂兩端只有一個斜面，好像被一分為二的半幢建築。由背面望去，則是「歐山式」屋頂，中間還開了一扇文藝復興時代巴洛克風格的牛眼窗。牛眼窗又稱為老虎窗，為西式建築物上一種兼具採光與裝飾性的圓形窗戶。",
            "為鼓勵檢舉貪瀆不法，法務部廉政署設置多元檢舉管道如下，包含現場、電話、書面、傳真或網頁檢舉，其中「電話檢舉」設置「0800」檢舉專線，電話為「0800-286-586」(0800-你爆料-我爆料)。請全民勇於揭弊，共同維護國家清廉！",
            "「道路交通管理處罰條例」第54條規定，汽車駕駛人，駕車在鐵路平交道不遵守看守人員之指示，或警鈴已響、閃光號誌已顯示，或遮斷器開始放下，仍強行闖越者，處新臺幣1萬5,000元以上9萬元以下罰鍰，並吊扣其駕駛執照1年。",
            "當火車經過長距離的行駛後，就必須進入車庫「休養生息」，進行保養及檢修；而當火車在一格一格的車庫裡等待保養時，看起來就像火車在車庫裡面「睡著了」，因此扇形車庫又有著「火車頭旅館」的別名，彰化扇形車庫已有近百年歷史，是全國僅存的扇形火車庫。",
            "旅客購票搭乘列車，應依照旅客運送契約規定購買符合身分之票種，以符合誠實信用原則，且法定優待票(敬老票或愛心票)是政府照顧弱勢之美意，若不符身分者冒用購買以節省票價，可能有詐欺之違法疑慮。",
            "依據「貪污瀆職案件檢舉獎金給獎標準」，法院判決情形為15年以上有期徒刑、無期徒刑、死刑者，給獎金額為新臺幣670萬元以上至1,000萬元。",
            "為展現政府打擊貪腐決心，回應民眾期盼，落實《聯合國反貪腐公約》之各項反貪腐措施，我國於100年7月20日成立「法務部廉政署」專責於國家廉政政策規劃，執行反貪、防貪及肅貪業務，以治標（執法）、治本（防貪）及根除（教育）三管齊下策略，達成提高貪瀆犯罪定罪率、降低貪瀆犯罪發生及落實保障人權等三大目標。",
            "其實這是臺鐵的「臨時手作號誌」，如果列車因故停在中途，或因為路線、電車線故障，需讓前後方駛來列車停車或慢行，需只用臨時手作號誌進行列車防護。舉起紅色、綠色的旗子，則分別代表不同的意思，綠旗舉起來：代表「平安」；紅旗舉起來：代表「險阻」；紅綠旗交叉舉起：代表「注意慢行」。",
        ];
        this.hard = [
            "依「公職人員利益衝突迴避法」第14條第1項但書及第2項規定，依法以公告程序、公平競爭等符合例外規定得採購者，應於投標文件內表明身分關係；並於交易成立後，由機關公開身分關係。依法以公告程序、公平競爭等符合例外規定得採購者，應於投標文件內表明身分關係；並於交易成立後，由機關公開身分關係；此外，採購主管於採購案件公文陳核程序，應依同法第6條規定及第10條第2款規定，自行迴避，停止執行該項職務，並由該職務之代理人執行。",
            "1933係臺鐵提供民眾緊急通報專線電話，民眾發現危及鐵路運行情事，可以立即撥打。提醒各位『1933』24小時緊急通報電話僅限發現軌道、平交道、橋樑及隧道等有障礙物之通報專用，如果不是遇到緊急事故，一般旅客服務項目請撥打臺鐵客服專線電話，以免影響通報及列車行車。",
            "為協助國內鐵道營運機構強化事故預防之安全管理，交通部運輸研究所（以下簡稱運研所）參酌歐盟、美國、日本、澳洲等先進國家作法，已發展出適用我國鐵道營運的「安全管理系統」（Safety Management System, SMS）通用架構，以期提昇我國鐵道運輸系統安全水準。臺鐵局亦於107年年底成立營運安全處專責營運安全事務，同時參考運研所SMS相關研究成果，分3階段著手逐步推動臺鐵局的SMS，第一階段（基礎建置、落差盤點）；第二階段（落差改善執行計畫）；第三階段（有效性提升）。",
            "為鼓勵檢舉貪瀆不法，廉政署設置多元檢舉管道如下，包含現場、電話、書面、傳真或網頁檢舉，其中「電話檢舉」設置「0800」檢舉專線，電話為「0800 - 286 - 586」(0800 - 你爆料 - 我爆料)。請全民勇於揭弊，共同維護國家清廉！",
            "依據「公務員廉政倫理規範」第二(三)點規定，正常社交禮俗標準：指一般人社交往來，市價不超過新臺幣3, 000元者。但同一年度來自同一來源受贈財物以新臺幣1萬元為限。",
            "依據「公務員廉政倫理規範」第11條規定，公務員遇有請託關說時，應於3日內簽報其長官並知會政風機構。",
            "依據「貪污瀆職案件檢舉獎金給獎標準」，法院判決情形為15年以上有期徒刑、無期徒刑、死刑者，給獎金額為新臺幣670萬元以上至1, 000萬元。",
            "為確保公務機密及個資，使用電子郵件時應謹慎，若係不明來源或是夾帶可疑超連結或附件，勿輕易點選，以免造成中毒或是資料外洩之情事發生。",
            "為紀念2003年12月9日《聯合國反貪腐公約》的首次簽署日，喚起國際社會關心並重視貪腐問題，在國際透明組織（Transparency International, TI）倡議下，聯合國決定將每年12月9日訂為「聯合國國際反貪日」（UN International Anti - Corruption Day）。",
        ];
    }
    return lib;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxRQVxcRXhwbGFpbkxpYnJhcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUlJLHdCQUFZLEtBQWEsRUFBRSxTQUFtQjtRQUY5QyxlQUFVLEdBQWEsRUFBRSxDQUFBO1FBQ3pCLFFBQUcsR0FBYSxFQUFFLENBQUE7UUFFZCxJQUFJLFFBQVEsR0FBUSxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQzdCLFFBQVEsS0FBSyxFQUFFO1lBQ1gsS0FBSyxDQUFDO2dCQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQy9CLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUM3QixNQUFNO1NBQ2I7UUFDRCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDbkQ7SUFDTCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBOztBQUNEO0lBQUE7UUFDSSxTQUFJLEdBQWE7WUFDYiw4RUFBOEU7WUFDOUUsOElBQThJO1lBQzlJLHlFQUF5RTtZQUN6RSxnR0FBZ0c7WUFDaEcsc0pBQXNKO1lBQ3RKLDZEQUE2RDtZQUM3RCwwRkFBMEY7WUFDMUYsb0lBQW9JO1lBQ3BJLDZFQUE2RTtTQUNoRixDQUFBO1FBQ0QsV0FBTSxHQUFhO1lBQ2Ysb0lBQW9JO1lBQ3BJLHlOQUF5TjtZQUN6TixzSEFBc0g7WUFDdEgsNkdBQTZHO1lBQzdHLHdIQUF3SDtZQUN4SCwrRkFBK0Y7WUFDL0YsdUVBQXVFO1lBQ3ZFLHNKQUFzSjtZQUN0Six5SUFBeUk7U0FDNUksQ0FBQTtRQUNELFNBQUksR0FBYTtZQUNiLGlOQUFpTjtZQUNqTixvSUFBb0k7WUFDcEksa1BBQWtQO1lBQ2xQLDJIQUEySDtZQUMzSCxvRkFBb0Y7WUFDcEYsbURBQW1EO1lBQ25ELHdFQUF3RTtZQUN4RSxtRUFBbUU7WUFDbkUsNkpBQTZKO1NBQ2hLLENBQUE7SUFDTCxDQUFDO0lBQUQsVUFBQztBQUFELENBbENBLEFBa0NDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBsYWluTGlicmFyeSB7XHJcblxyXG4gICAgZXhwbGFpbkxpYjogc3RyaW5nW10gPSBbXVxyXG4gICAgbGliOiBzdHJpbmdbXSA9IFtdXHJcbiAgICBjb25zdHJ1Y3RvcihsZXZlbDogbnVtYmVyLCBxYUxpYl9udW06IG51bWJlcltdKSB7XHJcbiAgICAgICAgbGV0IGxpYkNsYXNzOiBsaWIgPSBuZXcgbGliKClcclxuICAgICAgICBzd2l0Y2ggKGxldmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogdGhpcy5saWIgPSBsaWJDbGFzcy5lYXN5O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTogdGhpcy5saWIgPSBsaWJDbGFzcy5ub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOiB0aGlzLmxpYiA9IGxpYkNsYXNzLmhhcmQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHFhTGliX251bS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5leHBsYWluTGliLnB1c2godGhpcy5saWJbcWFMaWJfbnVtW2luZGV4XV0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmNsYXNzIGxpYiB7XHJcbiAgICBlYXN5OiBzdHJpbmdbXSA9IFtcclxuICAgICAgICBcIuaJgOisguOAjOmZveWFieaYr+acgOS9s+eahOmYsuiFkOWKkeOAje+8jOaUv+ayu+WItuW6pueahOmAj+aYjuWMluOAgeWFrOmWi+WMluaYr+aUv+W6nOa4heaYjueahOihqOW+te+8jOiXieeUseeri+azleWwh+aUv+W6nOaWveaUv+ihjOeCuumAsuS4gOatpeeahOmAj+aYjuWMluOAgeWFrOmWi+WMlu+8jOaYr+mYsuatouWFrOWLmeS6uuWToeiyquaxoeeAhuiBt+eahOacgOS9s+mYsuiFkOWKkeOAglwiLFxyXG4gICAgICAgIFwi5L6d44CM6ZC16Lev5rOV44CN56ysNTfmop3nrKwy6aCF6KaP5a6a77yM6KGM5Lq644CB6LuK6Lyb5LiN5b6X5Zyo6ZC16Lev6Lev57ea44CB5qmL5qiR44CB6Zqn6YGT5YWn5Y+K56uZ5Y2A5YWn6Z2e5L6b5YWs55y+6YCa6KGM5LmL6JmV5omA6YCa6KGM77yM5ZCm5YmH5bCH5L6d5ZCM5rOV56ysNzDmop3opo/lrprvvIznvbDmlrDoh7rluaMx6JCs5YWD5Lul5LiKNeiQrOWFg+S7peS4i+e9sOmNsOOAguiLpeeJqeWTgeS4jeaFjuaOieiQvei7jOmBk++8jOaHieWFiOWwi+axguermeWLmeS6uuWToeWNlOWKqe+8jOermeWLmeS6uuWToeeiuuiqjeaaq+aZguS4jeacg+acieWIl+i7iumAsuerme+8jOWGjeS9v+eUqOaciOiHuuaLvueJqeWwiOeUqOWkvuWkvui1t++8jOS4jeWPr+mAleiHquWFpeS+tei7jOmBk+OAglwiLFxyXG4gICAgICAgIFwi5Zyo6LuK56uZ5oiW5YiX6LuK5LiK5pK/5ou+5Yiw6YG65aSx54mp77yM5oeJ6YCB5Lqk5YiX6LuK6ZW35oiW6LuK56uZ5Lq65ZOh5Y2U5Yqp6L6m55CG5aSx54mp5oub6aCY77yM6K6T5aSx5Li75YSY5b+r5bCL542y5aSx54mp77yM6Iul5pOF6Ieq5bi25Zue56eB55So77yM5pyJ6Ke454qv5YiR5rOV56ysMzM35qKd5L615Y2g6YG65aSx54mp572q5auM55aR44CCXCIsXHJcbiAgICAgICAgXCLml4XlrqLmkK3kuZjliJfou4rvvIzmh4nkvp3nhafjgIzml4XlrqLpgYvpgIHlpZHntITjgI3opo/lrpros7zosrfnrKblkIjouqvliIbkuYvnpajnqK7vvIzku6XnrKblkIjoqqDlr6bkv6HnlKjljp/liYfvvIzkuJTms5XlrprlhKrlvoXnpago5pWs6ICB56Wo5oiW5oSb5b+D56WoKeaYr+aUv+W6nOeFp+mhp+W8seWLouS5i+e+juaEj++8jOiLpeS4jeespui6q+WIhuiAheeCuuevgOecgeelqOWDueizvOiyt++8jOWPr+iDveacieWIkeazleipkOasuue9quS5i+mBleazleeWkeaFruOAglwiLFxyXG4gICAgICAgIFwi54K65bGV54++5pS/5bqc5omT5pOK6LKq6IWQ5rG65b+D77yM5Zue5oeJ5rCR55y+5pyf55u877yM6JC95a+m44CK6IGv5ZCI5ZyL5Y+N6LKq6IWQ5YWs57SE44CL5LmL5ZCE6aCF5Y+N6LKq6IWQ5o6q5pa977yM5oiR5ZyL5pa8MTAw5bm0N+aciDIw5pel5oiQ56uL44CM5rOV5YuZ6YOo5buJ5pS/572y44CN5bCI6LKs5pa85ZyL5a625buJ5pS/5pS/562W6KaP5YqD77yM5Z+36KGM5Y+N6LKq44CB6Ziy6LKq5Y+K6IKF6LKq5qWt5YuZ77yM5Lul5rK75qiZ77yI5Z+35rOV77yJ44CB5rK75pys77yI6Ziy6LKq77yJ5Y+K5qC56Zmk77yI5pWZ6IKy77yJ5LiJ566h6b2K5LiL562W55Wl77yM6YGU5oiQ5o+Q6auY6LKq54CG54qv572q5a6a572q546H44CB6ZmN5L2O6LKq54CG54qv572q55m855Sf5Y+K6JC95a+m5L+d6Zqc5Lq65qyK562J5LiJ5aSn55uu5qiZ44CCXCIsXHJcbiAgICAgICAgXCLnlqvmg4XmnJ/plpPvvIzphY3lkIjmlL/lupzpmLLnlqvmlL/nrZbokL3lr6bmiLTlpb3lj6PnvankuKbphY3lkIjph4/muKzpq5TmuqvvvIzlgZrlpb3mtojmr5LkvZzmpa3vvIzkv53orbfoh6rlt7HkuZ/kv53orbflhbbku5bkuZjlrqLlronlhajvvIzmmK/mkK3ngavou4rnmoTlv4Xlgpnnpq7lhIDllpTvvIFcIixcclxuICAgICAgICBcIuS+neaTmuOAjOaUv+miqOapn+ani+S6uuWToeioree9rueuoeeQhuaineS+i+OAje+8jOS4reWkruOAgeWcsOaWueWPiuWFrOeHn+S6i+alreapn+ani+mDveioreacieaUv+miqOWWruS9je+8jOeUseazleWLmemDqOW7ieaUv+e9suimj+WKg+OAgeWNlOiqv+WPiuaMh+aPruebo+edo++8jOaUv+miqOWWruS9jeeahOiBt+aOjOmZpOS6huW7ieaUv+Wuo+Wwju+8jOS6puWMheWQq+apn+mXnOaciemXnOS5i+iyqueAhuiIh+S4jeazleS6i+mgheS5i+iZleeQhuOAglwiLFxyXG4gICAgICAgIFwiMTkzM+S/guiHuumQteaPkOS+m+awkeecvue3iuaApemAmuWgseWwiOe3mumbu+ipse+8jOawkeecvueZvOePvuWNseWPiumQtei3r+mBi+ihjOaDheS6i++8jOWPr+S7peeri+WNs+aSpeaJk+OAguaPkOmGkuWQhOS9jeOAjjE5MzPjgI8yNOWwj+aZgue3iuaApemAmuWgsembu+ipseWDhemZkOeZvOePvui7jOmBk+OAgeW5s+S6pOmBk+OAgeapi+aokeWPiumap+mBk+etieaciemanOekmeeJqeS5i+mAmuWgseWwiOeUqO+8jOWmguaenOS4jeaYr+mBh+WIsOe3iuaApeS6i+aVhe+8jOS4gOiIrOaXheWuouacjeWLmemgheebruiri+aSpeaJk+iHuumQteWuouacjeWwiOe3mumbu+ipse+8jOS7peWFjeW9semfv+mAmuWgseWPiuWIl+i7iuihjOi7iuOAglwiLFxyXG4gICAgICAgIFwi5b6I5aSa54iG6KOC54mp5pyD5YG96KOd5oiQ5LiN5piT55m86Ka65Y2x6Zqq5b615YCZ55qE5pel5bi455So5ZOB77yM5aaC5L+h5Lu244CB5YyF6KO544CB5omL5o+Q566x5oiW572Q6aCt562J44CC5aaC5Zyo6LuK56uZ5YWn55m854++5YyF6KO55oiW5omL5o+Q566x77yM6ZW35pmC6ZaT54Sh5Lq6566h77yM6KuL5ZGK55+l6K2m5a+f5oiW6LuK56uZ5Lq65ZOh5Lul6YCy6KGM6JmV55CG44CCXCIsXHJcbiAgICBdXHJcbiAgICBub3JtYWw6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgIFwiMTkzM+S/guiHuumQteaPkOS+m+awkeecvue3iuaApemAmuWgseWwiOe3mumbu+ipse+8jOawkeecvueZvOePvuWNseWPiumQtei3r+mBi+ihjOaDheS6i++8jOWPr+S7peeri+WNs+aSpeaJk+OAguaPkOmGkuWQhOS9jeOAjjE5MzPjgI8yNOWwj+aZgue3iuaApemAmuWgsembu+ipseWDhemZkOeZvOePvui7jOmBk+OAgeW5s+S6pOmBk+OAgeapi+aokeWPiumap+mBk+etieaciemanOekmeeJqeS5i+mAmuWgseWwiOeUqO+8jOWmguaenOS4jeaYr+mBh+WIsOe3iuaApeS6i+aVhe+8jOS4gOiIrOaXheWuouacjeWLmemgheebruiri+aSpeaJk+iHuumQteWuouacjeWwiOe3mumbu+ipse+8jOS7peWFjeW9semfv+mAmuWgseWPiuWIl+i7iuihjOi7iuOAglwiLFxyXG4gICAgICAgIFwi5LuK5pel5rW357ea5LiK5YOF5a2Y5LqU5bqn5pyo6YCg6LuK56uZ77yM5b6e5YyX6Iez5Y2X5YiG5Yil5piv6KuH5paH44CB5aSn5bGx44CB5paw5Z+U44CB5pel5Y2X5ZKM6L+95YiG56uZ44CC5LqU5bqn6LuK56uZ55qG5YiX5YWl5q235Y+y5bu656+J77yM5L+d5a2Y6Imv5aW944CC5rW357ea5pyo6YCg6LuK56uZ6LW36YCg5bm05Luj55u45ZCM77yIMTkyMu+8ie+8jOW7uuevieaoo+W8j+S5n+WujOWFqOS4gOiHtO+8jOmAmeS6m+aWvOmAmui7iueVtuW5tOWujOaIkOeahOermeaIv++8jOS4u+mrlOeahueCuuacqOmAoOe1kOani++8jOmggumDqOimhuiTi+aXpeacrOm7keeTpuOAguW+nuato+mdouingOS5i+Wxi+mgguWFqeerr+WPquacieS4gOWAi+aWnOmdou+8jOWlveWDj+iiq+S4gOWIhueCuuS6jOeahOWNiuW5ouW7uuevieOAgueUseiDjOmdouacm+WOu++8jOWJh+aYr+OAjOatkOWxseW8j+OAjeWxi+mggu+8jOS4remWk+mChOmWi+S6huS4gOaJh+aWh+iXneW+qeiIiOaZguS7o+W3tOa0m+WFi+miqOagvOeahOeJm+ecvOeql+OAgueJm+ecvOeql+WPiOeoseeCuuiAgeiZjueql++8jOeCuuilv+W8j+W7uuevieeJqeS4iuS4gOeoruWFvOWFt+aOoeWFieiIh+ijnemjvuaAp+eahOWck+W9oueql+aItuOAglwiLFxyXG4gICAgICAgIFwi54K66byT5Yu15qqi6IiJ6LKq54CG5LiN5rOV77yM5rOV5YuZ6YOo5buJ5pS/572y6Kit572u5aSa5YWD5qqi6IiJ566h6YGT5aaC5LiL77yM5YyF5ZCr54++5aC044CB6Zu76Kmx44CB5pu46Z2i44CB5YKz55yf5oiW57ay6aCB5qqi6IiJ77yM5YW25Lit44CM6Zu76Kmx5qqi6IiJ44CN6Kit572u44CMMDgwMOOAjeaqouiIieWwiOe3mu+8jOmbu+ipseeCuuOAjDA4MDAtMjg2LTU4NuOAjSgwODAwLeS9oOeIhuaWmS3miJHniIbmlpkp44CC6KuL5YWo5rCR5YuH5pa85o+t5byK77yM5YWx5ZCM57at6K235ZyL5a625riF5buJ77yBXCIsXHJcbiAgICAgICAgXCLjgIzpgZPot6/kuqTpgJrnrqHnkIbomZXnvbDmop3kvovjgI3nrKw1NOaineimj+Wumu+8jOaxvei7iumnlemnm+S6uu+8jOmnlei7iuWcqOmQtei3r+W5s+S6pOmBk+S4jemBteWuiOeci+WuiOS6uuWToeS5i+aMh+ekuu+8jOaIluitpumItOW3sumfv+OAgemWg+WFieiZn+iqjOW3sumhr+ekuu+8jOaIlumBruaWt+WZqOmWi+Wni+aUvuS4i++8jOS7jeW8t+ihjOmXlui2iuiAhe+8jOiZleaWsOiHuuW5ozHokKw1LDAwMOWFg+S7peS4ijnokKzlhYPku6XkuIvnvbDpjbDvvIzkuKblkIrmiaPlhbbpp5Xpp5vln7fnhacx5bm044CCXCIsXHJcbiAgICAgICAgXCLnlbbngavou4rntpPpgY7plbfot53pm6LnmoTooYzpp5vlvozvvIzlsLHlv4XpoIjpgLLlhaXou4rluqvjgIzkvJHppIrnlJ/mga/jgI3vvIzpgLLooYzkv53ppIrlj4rmqqLkv67vvJvogIznlbbngavou4rlnKjkuIDmoLzkuIDmoLznmoTou4rluqvoo6HnrYnlvoXkv53ppIrmmYLvvIznnIvotbfkvoblsLHlg4/ngavou4rlnKjou4rluqvoo6HpnaLjgIznnaHokZfkuobjgI3vvIzlm6DmraTmiYflvaLou4rluqvlj4jmnInokZfjgIzngavou4rpoK3ml4XppKjjgI3nmoTliKXlkI3vvIzlvbDljJbmiYflvaLou4rluqvlt7LmnInov5Hnmb7lubTmrbflj7LvvIzmmK/lhajlnIvlg4XlrZjnmoTmiYflvaLngavou4rluqvjgIJcIixcclxuICAgICAgICBcIuaXheWuouizvOelqOaQreS5mOWIl+i7iu+8jOaHieS+neeFp+aXheWuoumBi+mAgeWlkee0hOimj+WumuizvOiyt+espuWQiOi6q+WIhuS5i+elqOeoru+8jOS7peespuWQiOiqoOWvpuS/oeeUqOWOn+WJh++8jOS4lOazleWumuWEquW+heelqCjmlazogIHnpajmiJbmhJvlv4Pnpagp5piv5pS/5bqc54Wn6aGn5byx5Yui5LmL576O5oSP77yM6Iul5LiN56ym6Lqr5YiG6ICF5YaS55So6LO86LK35Lul56+A55yB56Wo5YO577yM5Y+v6IO95pyJ6KmQ5qy65LmL6YGV5rOV55aR5oWu44CCXCIsXHJcbiAgICAgICAgXCLkvp3mk5rjgIzosqrmsaHngIbogbfmoYjku7bmqqLoiInnjY7ph5HntabnjY7mqJnmupbjgI3vvIzms5XpmaLliKTmsbrmg4XlvaLngroxNeW5tOS7peS4iuacieacn+W+kuWIkeOAgeeEoeacn+W+kuWIkeOAgeatu+WIkeiAhe+8jOe1pueNjumHkemhjeeCuuaWsOiHuuW5ozY3MOiQrOWFg+S7peS4iuiHszEsMDAw6JCs5YWD44CCXCIsXHJcbiAgICAgICAgXCLngrrlsZXnj77mlL/lupzmiZPmk4rosqrohZDmsbrlv4PvvIzlm57mh4nmsJHnnL7mnJ/nm7zvvIzokL3lr6bjgIroga/lkIjlnIvlj43osqrohZDlhazntITjgIvkuYvlkITpoIXlj43osqrohZDmjqrmlr3vvIzmiJHlnIvmlrwxMDDlubQ35pyIMjDml6XmiJDnq4vjgIzms5Xli5npg6jlu4nmlL/nvbLjgI3lsIjosqzmlrzlnIvlrrblu4nmlL/mlL/nrZbopo/lioPvvIzln7fooYzlj43osqrjgIHpmLLosqrlj4rogoXosqrmpa3li5nvvIzku6XmsrvmqJnvvIjln7fms5XvvInjgIHmsrvmnKzvvIjpmLLosqrvvInlj4rmoLnpmaTvvIjmlZnogrLvvInkuInnrqHpvYrkuIvnrZbnlaXvvIzpgZTmiJDmj5Dpq5josqrngIbniq/nvarlrprnvarnjofjgIHpmY3kvY7osqrngIbniq/nvarnmbznlJ/lj4rokL3lr6bkv53pmpzkurrmrIrnrYnkuInlpKfnm67mqJnjgIJcIixcclxuICAgICAgICBcIuWFtuWvpumAmeaYr+iHuumQteeahOOAjOiHqOaZguaJi+S9nOiZn+iqjOOAje+8jOWmguaenOWIl+i7iuWboOaVheWBnOWcqOS4remAlO+8jOaIluWboOeCuui3r+e3muOAgembu+i7iue3muaVhemanO+8jOmcgOiuk+WJjeW+jOaWuemnm+S+huWIl+i7iuWBnOi7iuaIluaFouihjO+8jOmcgOWPqueUqOiHqOaZguaJi+S9nOiZn+iqjOmAsuihjOWIl+i7iumYsuitt+OAguiIiei1t+e0heiJsuOAgee2oOiJsueahOaXl+WtkO+8jOWJh+WIhuWIpeS7o+ihqOS4jeWQjOeahOaEj+aAne+8jOe2oOaXl+iIiei1t+S+hu+8muS7o+ihqOOAjOW5s+WuieOAje+8m+e0heaXl+iIiei1t+S+hu+8muS7o+ihqOOAjOmaqumYu+OAje+8m+e0hee2oOaXl+S6pOWPieiIiei1t++8muS7o+ihqOOAjOazqOaEj+aFouihjOOAjeOAglwiLFxyXG4gICAgXVxyXG4gICAgaGFyZDogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgXCLkvp3jgIzlhazogbfkurrlk6HliKnnm4rooZ3nqoHov7Tpgb/ms5XjgI3nrKwxNOaineesrDHpoIXkvYbmm7jlj4rnrKwy6aCF6KaP5a6a77yM5L6d5rOV5Lul5YWs5ZGK56iL5bqP44CB5YWs5bmz56u254it562J56ym5ZCI5L6L5aSW6KaP5a6a5b6X5o6h6LO86ICF77yM5oeJ5pa85oqV5qiZ5paH5Lu25YWn6KGo5piO6Lqr5YiG6Zec5L+C77yb5Lim5pa85Lqk5piT5oiQ56uL5b6M77yM55Sx5qmf6Zec5YWs6ZaL6Lqr5YiG6Zec5L+C44CC5L6d5rOV5Lul5YWs5ZGK56iL5bqP44CB5YWs5bmz56u254it562J56ym5ZCI5L6L5aSW6KaP5a6a5b6X5o6h6LO86ICF77yM5oeJ5pa85oqV5qiZ5paH5Lu25YWn6KGo5piO6Lqr5YiG6Zec5L+C77yb5Lim5pa85Lqk5piT5oiQ56uL5b6M77yM55Sx5qmf6Zec5YWs6ZaL6Lqr5YiG6Zec5L+C77yb5q2k5aSW77yM5o6h6LO85Li7566h5pa85o6h6LO85qGI5Lu25YWs5paH6Zmz5qC456iL5bqP77yM5oeJ5L6d5ZCM5rOV56ysNuaineimj+WumuWPiuesrDEw5qKd56ysMuasvuimj+Wumu+8jOiHquihjOi/tOmBv++8jOWBnOatouWft+ihjOipsumgheiBt+WLme+8jOS4pueUseipsuiBt+WLmeS5i+S7o+eQhuS6uuWft+ihjOOAglwiLFxyXG4gICAgICAgIFwiMTkzM+S/guiHuumQteaPkOS+m+awkeecvue3iuaApemAmuWgseWwiOe3mumbu+ipse+8jOawkeecvueZvOePvuWNseWPiumQtei3r+mBi+ihjOaDheS6i++8jOWPr+S7peeri+WNs+aSpeaJk+OAguaPkOmGkuWQhOS9jeOAjjE5MzPjgI8yNOWwj+aZgue3iuaApemAmuWgsembu+ipseWDhemZkOeZvOePvui7jOmBk+OAgeW5s+S6pOmBk+OAgeapi+aokeWPiumap+mBk+etieaciemanOekmeeJqeS5i+mAmuWgseWwiOeUqO+8jOWmguaenOS4jeaYr+mBh+WIsOe3iuaApeS6i+aVhe+8jOS4gOiIrOaXheWuouacjeWLmemgheebruiri+aSpeaJk+iHuumQteWuouacjeWwiOe3mumbu+ipse+8jOS7peWFjeW9semfv+mAmuWgseWPiuWIl+i7iuihjOi7iuOAglwiLFxyXG4gICAgICAgIFwi54K65Y2U5Yqp5ZyL5YWn6ZC16YGT54ef6YGL5qmf5qeL5by35YyW5LqL5pWF6aCQ6Ziy5LmL5a6J5YWo566h55CG77yM5Lqk6YCa6YOo6YGL6Ly456CU56m25omA77yI5Lul5LiL57Ch56ix6YGL56CU5omA77yJ5Y+D6YWM5q2Q55uf44CB576O5ZyL44CB5pel5pys44CB5r6z5rSy562J5YWI6YCy5ZyL5a625L2c5rOV77yM5bey55m85bGV5Ye66YGp55So5oiR5ZyL6ZC16YGT54ef6YGL55qE44CM5a6J5YWo566h55CG57O757Wx44CN77yIU2FmZXR5IE1hbmFnZW1lbnQgU3lzdGVtLCBTTVPvvInpgJrnlKjmnrbmp4vvvIzku6XmnJ/mj5DmmIfmiJHlnIvpkLXpgZPpgYvovLjns7vntbHlronlhajmsLTmupbjgILoh7rpkLXlsYDkuqbmlrwxMDflubTlubTlupXmiJDnq4vnh5/pgYvlronlhajomZXlsIjosqznh5/pgYvlronlhajkuovli5nvvIzlkIzmmYLlj4PogIPpgYvnoJTmiYBTTVPnm7jpl5znoJTnqbbmiJDmnpzvvIzliIYz6ZqO5q616JGX5omL6YCQ5q2l5o6o5YuV6Ie66ZC15bGA55qEU01T77yM56ys5LiA6ZqO5q6177yI5Z+656SO5bu6572u44CB6JC95beu55uk6bue77yJ77yb56ys5LqM6ZqO5q6177yI6JC95beu5pS55ZaE5Z+36KGM6KiI55Wr77yJ77yb56ys5LiJ6ZqO5q6177yI5pyJ5pWI5oCn5o+Q5Y2H77yJ44CCXCIsXHJcbiAgICAgICAgXCLngrrpvJPli7XmqqLoiInosqrngIbkuI3ms5XvvIzlu4nmlL/nvbLoqK3nva7lpJrlhYPmqqLoiInnrqHpgZPlpoLkuIvvvIzljIXlkKvnj77loLTjgIHpm7voqbHjgIHmm7jpnaLjgIHlgrPnnJ/miJbntrLpoIHmqqLoiInvvIzlhbbkuK3jgIzpm7voqbHmqqLoiInjgI3oqK3nva7jgIwwODAw44CN5qqi6IiJ5bCI57ea77yM6Zu76Kmx54K644CMMDgwMCAtIDI4NiAtIDU4NuOAjSgwODAwIC0g5L2g54iG5paZIC0g5oiR54iG5paZKeOAguiri+WFqOawkeWLh+aWvOaPreW8iu+8jOWFseWQjOe2reitt+Wci+Wutua4heW7ie+8gVwiLFxyXG4gICAgICAgIFwi5L6d5pOa44CM5YWs5YuZ5ZOh5buJ5pS/5YCr55CG6KaP56+E44CN56ys5LqMKOS4iSnpu57opo/lrprvvIzmraPluLjnpL7kuqTnpq7kv5fmqJnmupbvvJrmjIfkuIDoiKzkurrnpL7kuqTlvoDkvobvvIzluILlg7nkuI3otoXpgY7mlrDoh7rluaMzLCAwMDDlhYPogIXjgILkvYblkIzkuIDlubTluqbkvoboh6rlkIzkuIDkvobmupDlj5fotIjosqHnianku6XmlrDoh7rluaMx6JCs5YWD54K66ZmQ44CCXCIsXHJcbiAgICAgICAgXCLkvp3mk5rjgIzlhazli5nlk6Hlu4nmlL/lgKvnkIbopo/nr4TjgI3nrKwxMeaineimj+Wumu+8jOWFrOWLmeWToemBh+acieiri+iol+mXnOiqquaZgu+8jOaHieaWvDPml6XlhafnsL3loLHlhbbplbflrpjkuKbnn6XmnIPmlL/poqjmqZ/mp4vjgIJcIixcclxuICAgICAgICBcIuS+neaTmuOAjOiyquaxoeeAhuiBt+ahiOS7tuaqouiIieeNjumHkee1pueNjuaomea6luOAje+8jOazlemZouWIpOaxuuaDheW9oueCujE15bm05Lul5LiK5pyJ5pyf5b6S5YiR44CB54Sh5pyf5b6S5YiR44CB5q275YiR6ICF77yM57Wm542O6YeR6aGN54K65paw6Ie65bmjNjcw6JCs5YWD5Lul5LiK6IezMSwgMDAw6JCs5YWD44CCXCIsXHJcbiAgICAgICAgXCLngrrnorrkv53lhazli5nmqZ/lr4blj4rlgIvos4fvvIzkvb/nlKjpm7vlrZDpg7Xku7bmmYLmh4norLnmhY7vvIzoi6Xkv4LkuI3mmI7kvobmupDmiJbmmK/lpL7luLblj6/nlpHotoXpgKPntZDmiJbpmYTku7bvvIzli7/ovJXmmJPpu57pgbjvvIzku6XlhY3pgKDmiJDkuK3mr5LmiJbmmK/os4fmlpnlpJbmtKnkuYvmg4XkuovnmbznlJ/jgIJcIixcclxuICAgICAgICBcIueCuue0gOW/tTIwMDPlubQxMuaciDnml6XjgIroga/lkIjlnIvlj43osqrohZDlhazntITjgIvnmoTpppbmrKHnsL3nvbLml6XvvIzllprotbflnIvpmpvnpL7mnIPpl5zlv4PkuKbph43oppbosqrohZDllY/poYzvvIzlnKjlnIvpmpvpgI/mmI7ntYTnuZTvvIhUcmFuc3BhcmVuY3kgSW50ZXJuYXRpb25hbCwgVEnvvInlgKHorbDkuIvvvIzoga/lkIjlnIvmsbrlrprlsIfmr4/lubQxMuaciDnml6XoqILngrrjgIzoga/lkIjlnIvlnIvpmpvlj43osqrml6XjgI3vvIhVTiBJbnRlcm5hdGlvbmFsIEFudGkgLSBDb3JydXB0aW9uIERhee+8ieOAglwiLFxyXG4gICAgXVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Asset/SpineAsset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0a0f2F7uxVJIpeY38ZvUb/y', 'SpineAsset');
// Script/Asset/SpineAsset.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpineAsset = /** @class */ (function () {
    function SpineAsset() {
    }
    return SpineAsset;
}());
exports.default = new SpineAsset();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBc3NldFxcU3BpbmVBc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBQUE7SUFFQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUNELGtCQUFlLElBQUksVUFBVSxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2xhc3MgU3BpbmVBc3NldCB7XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBTcGluZUFzc2V0KCk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Panel_Map.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca623yotqlIU4gHk8J9XvoG', 'Panel_Map');
// Script/Class/Panel_Map.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var AssetMng_1 = require("../Asset/AssetMng");
var GameEvent_1 = require("../Enum/GameEvent");
var StationType_1 = require("../Enum/StationType");
var MapItem_1 = require("../Item/MapItem");
var ComponentBase_1 = require("../Data/base/ComponentBase");
var MapSprite_1 = require("../Item/MapSprite");
var GameModle_1 = require("../GameModle");
var Panel_Map = /** @class */ (function (_super) {
    __extends(Panel_Map, _super);
    function Panel_Map() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel_Map.prototype.onLoad = function () {
        this.tempMapItem = cc.find("mapItem", this.node);
        this.content_Map = cc.find("nContent_Map", this.node);
        this.content_Station = cc.find("nContent_StationSprite", this.node);
        this.content_Station2 = cc.find("Canvas/Panel_Map2/nContent_StationSprite");
        this.initEvent(GameEvent_1.GameEvent.InitMap, this.initMap);
    };
    Panel_Map.prototype.start = function () {
    };
    Panel_Map.prototype.initMap = function (_path) {
        return __awaiter(this, void 0, void 0, function () {
            var pathData, index, x, y, index, tempItem, _class, index, _node, spriteClass;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pathData = _path.getClips()[0].curveData.props.position;
                        //拿取Animation的路徑
                        for (index = 0; index < pathData.length; index++) {
                            x = pathData[index]["value"][0];
                            y = pathData[index]["value"][1];
                            GameModle_1.default.pathPositionData.set(index, cc.v2(x, y));
                            // console.log(pathData[index]);
                            if (pathData[index]["motionPath"] != null && pathData[index]["motionPath"].length > 0) { //檢查是否有Bezier
                                this.AddBezier(index, pathData, GameModle_1.default);
                            }
                        }
                        //生產地圖的點
                        return [4 /*yield*/, AssetMng_1.default.checkState()];
                    case 1:
                        //生產地圖的點
                        _a.sent();
                        for (index = 0; index < pathData.length - 1; index++) { //原點跟終點都是一樣的點，內容依樣就不用新增
                            tempItem = cc.instantiate(this.tempMapItem);
                            this.content_Map.addChild(tempItem, cc.macro.MAX_ZINDEX);
                            tempItem.setPosition(GameModle_1.default.pathPositionData.get(index));
                            _class = tempItem.addComponent(MapItem_1.default);
                            _class.myNumber = index;
                            _class.myType = this.getStationType(index);
                            _class.setSprite(this.getSpriteType(index));
                            GameModle_1.default.mapItem.set(index, _class);
                        }
                        for (index = 2; index <= 19; index++) {
                            _node = this.exceptionSprite(index);
                            spriteClass = _node.getComponent(cc.Sprite).addComponent(MapSprite_1.default);
                            spriteClass.mySprite.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Station_Gary_" + index.toString());
                            spriteClass.type = index;
                            GameModle_1.default.mapSprite.set(index, spriteClass);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Panel_Map.prototype.AddBezier = function (mapNumber, pathData, GameModle) {
        var Arr = [];
        //起點
        // 中間點
        // 再來終點
        //因為資料還是被維持在五號.所以要往回拿資料...太麻煩了ㄅ
        var x = pathData[mapNumber]["value"][0];
        var y = pathData[mapNumber]["value"][1];
        Arr.push(cc.v2(x, y));
        console.log(cc.v2(x, y));
        x = pathData[mapNumber]["motionPath"][0][0];
        y = pathData[mapNumber]["motionPath"][0][1];
        Arr.push(cc.v2(x, y));
        // console.log(cc.v2(x, y));
        // for (let index = 0; index < pathData[mapNumber]["motionPath"][0].length; index++) {
        //     // console.log(pathData[mapNumber-1]["motionPath"][0]);
        //     // console.log(pathData[mapNumber-1]["motionPath"][0].length);
        //     let x: number = pathData[mapNumber]["motionPath"][0][index]
        //     index++
        //     let y: number = pathData[mapNumber]["motionPath"][0][index]
        //     Arr.push(cc.v2(x, y))
        // }
        //調整位子  有夠麻煩
        // let getPushOne: cc.Vec2 = Arr.splice(1, 1)[0]
        // console.log(getPushOne.x,getPushOne.y);
        // Arr.unshift(getPushOne);
        //下一個點為終點所以要在這加入
        x = pathData[mapNumber + 1]["value"][0];
        y = pathData[mapNumber + 1]["value"][1];
        Arr.push(cc.v2(x, y));
        console.log(Arr);
        GameModle.pathBezierData.set(mapNumber + 1, Arr);
    };
    Panel_Map.prototype.getSpriteType = function (_number) {
        // console.log(_number);
        switch (_number) {
            case 0:
                return AssetMng_1.default.data_SprtieAtlas.get("Station_Start");
            case 1:
            case 20:
                return AssetMng_1.default.data_SprtieAtlas.get("Station_WaitRad");
            case 5:
            case 11:
            case 15:
            case 18:
                return AssetMng_1.default.data_SprtieAtlas.get("Station_Q&A");
            default:
                return AssetMng_1.default.data_SprtieAtlas.get("Station_Normal");
        }
        // let getType:StationType = _number
    };
    Panel_Map.prototype.getStationType = function (_number) {
        switch (_number) {
            case 0:
                return StationType_1.StationType.Start;
            case 1:
            case 21:
                return StationType_1.StationType.WaitRad;
            case 5:
            case 11:
            case 15:
                return StationType_1.StationType.QandA;
            default:
                return StationType_1.StationType.Normal;
        }
        // let getType:StationType = _number
    };
    Panel_Map.prototype.exceptionSprite = function (_index) {
        return _index == 8 ?
            cc.find(_index.toString(), this.content_Station2) :
            cc.find(_index.toString(), this.content_Station);
    };
    return Panel_Map;
}(ComponentBase_1.default));
exports.default = Panel_Map;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcUGFuZWxfTWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUF5QztBQUN6QywrQ0FBOEM7QUFDOUMsbURBQWtEO0FBRWxELDJDQUFzQztBQUN0Qyw0REFBdUQ7QUFDdkQsK0NBQTBDO0FBQzFDLDBDQUFxQztBQUVyQztJQUF1Qyw2QkFBYTtJQUFwRDs7SUFpSUEsQ0FBQztJQTVIYSwwQkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsMENBQTBDLENBQUMsQ0FBQTtRQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNuRCxDQUFDO0lBQ1MseUJBQUssR0FBZjtJQUVBLENBQUM7SUFDSywyQkFBTyxHQUFiLFVBQWMsS0FBbUI7Ozs7Ozt3QkFFekIsUUFBUSxHQUFrQixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUE7d0JBQzFFLGdCQUFnQjt3QkFDaEIsS0FBUyxLQUFLLEdBQVcsQ0FBQyxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMs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QUM7SUFFRCxtQ0FBZSxHQUFmLFVBQWdCLE1BQWM7UUFDMUIsT0FBTyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEIsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUNuRCxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDeEQsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FqSUEsQUFpSUMsQ0FqSXNDLHVCQUFhLEdBaUluRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3NldE1uZyBmcm9tIFwiLi4vQXNzZXQvQXNzZXRNbmdcIjtcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSBcIi4uL0VudW0vR2FtZUV2ZW50XCI7XHJcbmltcG9ydCB7IFN0YXRpb25UeXBlIH0gZnJvbSBcIi4uL0VudW0vU3RhdGlvblR5cGVcIjtcclxuaW1wb3J0IHsgVHlwZUNsYXNzIH0gZnJvbSBcIi4uL0VudW0vVHlwZUNsYXNzXCI7XHJcbmltcG9ydCBNYXBJdGVtIGZyb20gXCIuLi9JdGVtL01hcEl0ZW1cIjtcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSBcIi4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlXCI7XHJcbmltcG9ydCBNYXBTcHJpdGUgZnJvbSBcIi4uL0l0ZW0vTWFwU3ByaXRlXCI7XHJcbmltcG9ydCBHYW1lTW9kbGUgZnJvbSBcIi4uL0dhbWVNb2RsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxfTWFwIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICBwdWJsaWMgdGVtcE1hcEl0ZW06IGNjLk5vZGU7XHJcbiAgICBwdWJsaWMgY29udGVudF9NYXA6IGNjLk5vZGU7XHJcbiAgICBwdWJsaWMgY29udGVudF9TdGF0aW9uOiBjYy5Ob2RlO1xyXG4gICAgcHVibGljIGNvbnRlbnRfU3RhdGlvbjI6IGNjLk5vZGU7XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGVtcE1hcEl0ZW0gPSBjYy5maW5kKFwibWFwSXRlbVwiLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5jb250ZW50X01hcCA9IGNjLmZpbmQoXCJuQ29udGVudF9NYXBcIiwgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuY29udGVudF9TdGF0aW9uID0gY2MuZmluZChcIm5Db250ZW50X1N0YXRpb25TcHJpdGVcIiwgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuY29udGVudF9TdGF0aW9uMiA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfTWFwMi9uQ29udGVudF9TdGF0aW9uU3ByaXRlXCIpXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoR2FtZUV2ZW50LkluaXRNYXAsIHRoaXMuaW5pdE1hcClcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcbiAgICBhc3luYyBpbml0TWFwKF9wYXRoOiBjYy5BbmltYXRpb24pIHtcclxuXHJcbiAgICAgICAgbGV0IHBhdGhEYXRhOiBBcnJheTxvYmplY3Q+ID0gX3BhdGguZ2V0Q2xpcHMoKVswXS5jdXJ2ZURhdGEucHJvcHMucG9zaXRpb25cclxuICAgICAgICAvL+aLv+WPlkFuaW1hdGlvbueahOi3r+W+kVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4OiBudW1iZXIgPSAwOyBpbmRleCA8IHBhdGhEYXRhLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgeDogbnVtYmVyID0gcGF0aERhdGFbaW5kZXhdW1widmFsdWVcIl1bMF1cclxuICAgICAgICAgICAgbGV0IHk6IG51bWJlciA9IHBhdGhEYXRhW2luZGV4XVtcInZhbHVlXCJdWzFdXHJcblxyXG4gICAgICAgICAgICBHYW1lTW9kbGUucGF0aFBvc2l0aW9uRGF0YS5zZXQoaW5kZXgsIGNjLnYyKHgsIHkpKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwYXRoRGF0YVtpbmRleF0pO1xyXG4gICAgICAgICAgICBpZiAocGF0aERhdGFbaW5kZXhdW1wibW90aW9uUGF0aFwiXSAhPSBudWxsICYmIHBhdGhEYXRhW2luZGV4XVtcIm1vdGlvblBhdGhcIl0ubGVuZ3RoID4gMCkgeyAvL+aqouafpeaYr+WQpuaciUJlemllclxyXG4gICAgICAgICAgICAgICAgdGhpcy5BZGRCZXppZXIoaW5kZXgsIHBhdGhEYXRhLCBHYW1lTW9kbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v55Sf55Si5Zyw5ZyW55qE6bueXHJcbiAgICAgICAgYXdhaXQgQXNzZXRNbmcuY2hlY2tTdGF0ZSgpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXRoRGF0YS5sZW5ndGggLSAxOyBpbmRleCsrKSB7Ly/ljp/pu57ot5/ntYLpu57pg73mmK/kuIDmqKPnmoTpu57vvIzlhaflrrnkvp3mqKPlsLHkuI3nlKjmlrDlop5cclxuICAgICAgICAgICAgbGV0IHRlbXBJdGVtOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50ZW1wTWFwSXRlbSlcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50X01hcC5hZGRDaGlsZCh0ZW1wSXRlbSwgY2MubWFjcm8uTUFYX1pJTkRFWClcclxuICAgICAgICAgICAgdGVtcEl0ZW0uc2V0UG9zaXRpb24oR2FtZU1vZGxlLnBhdGhQb3NpdGlvbkRhdGEuZ2V0KGluZGV4KSlcclxuICAgICAgICAgICAgbGV0IF9jbGFzczogTWFwSXRlbSA9IHRlbXBJdGVtLmFkZENvbXBvbmVudChNYXBJdGVtKTtcclxuICAgICAgICAgICAgX2NsYXNzLm15TnVtYmVyID0gaW5kZXg7XHJcbiAgICAgICAgICAgIF9jbGFzcy5teVR5cGUgPSB0aGlzLmdldFN0YXRpb25UeXBlKGluZGV4KTtcclxuICAgICAgICAgICAgX2NsYXNzLnNldFNwcml0ZSh0aGlzLmdldFNwcml0ZVR5cGUoaW5kZXgpKTtcclxuICAgICAgICAgICAgR2FtZU1vZGxlLm1hcEl0ZW0uc2V0KGluZGV4LCBfY2xhc3MpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMjsgaW5kZXggPD0gMTk7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IF9ub2RlID0gdGhpcy5leGNlcHRpb25TcHJpdGUoaW5kZXgpXHJcbiAgICAgICAgICAgIGxldCBzcHJpdGVDbGFzcyA9IF9ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmFkZENvbXBvbmVudChNYXBTcHJpdGUpXHJcbiAgICAgICAgICAgIHNwcml0ZUNsYXNzLm15U3ByaXRlLnNwcml0ZUZyYW1lID0gQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJTdGF0aW9uX0dhcnlfXCIgKyBpbmRleC50b1N0cmluZygpKVxyXG4gICAgICAgICAgICBzcHJpdGVDbGFzcy50eXBlID0gaW5kZXhcclxuICAgICAgICAgICAgR2FtZU1vZGxlLm1hcFNwcml0ZS5zZXQoaW5kZXgsIHNwcml0ZUNsYXNzKVxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEdhbWVNb2RsZS5wYXRoQmV6aWVyRGF0YSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coR2FtZU1vZGxlLnBhdGhQb3NpdGlvbkRhdGEpO1xyXG4gICAgfVxyXG4gICAgQWRkQmV6aWVyKG1hcE51bWJlcjogbnVtYmVyLCBwYXRoRGF0YTogQXJyYXk8b2JqZWN0PiwgR2FtZU1vZGxlOiBHYW1lTW9kbGUpIHtcclxuICAgICAgICBsZXQgQXJyOiBBcnJheTxjYy5WZWMyPiA9IFtdXHJcbiAgICAgICAgLy/otbfpu55cclxuICAgICAgICAvLyDkuK3plpPpu55cclxuICAgICAgICAvLyDlho3kvobntYLpu55cclxuICAgICAgICAvL+WboOeCuuizh+aWmemChOaYr+iiq+e2reaMgeWcqOS6lOiZny7miYDku6XopoHlvoDlm57mi7/os4fmlpkuLi7lpKrpurvnhankuobjhIVcclxuICAgICAgICBsZXQgeCA9IHBhdGhEYXRhW21hcE51bWJlcl1bXCJ2YWx1ZVwiXVswXTtcclxuICAgICAgICBsZXQgeSA9IHBhdGhEYXRhW21hcE51bWJlcl1bXCJ2YWx1ZVwiXVsxXTtcclxuICAgICAgICBBcnIucHVzaChjYy52Mih4LCB5KSlcclxuICAgICAgICBjb25zb2xlLmxvZyhjYy52Mih4LCB5KSk7XHJcblxyXG4gICAgICAgIHggPSBwYXRoRGF0YVttYXBOdW1iZXJdW1wibW90aW9uUGF0aFwiXVswXVswXTtcclxuICAgICAgICB5ID0gcGF0aERhdGFbbWFwTnVtYmVyXVtcIm1vdGlvblBhdGhcIl1bMF1bMV07XHJcbiAgICAgICAgQXJyLnB1c2goY2MudjIoeCwgeSkpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2MudjIoeCwgeSkpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXRoRGF0YVttYXBOdW1iZXJdW1wibW90aW9uUGF0aFwiXVswXS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2cocGF0aERhdGFbbWFwTnVtYmVyLTFdW1wibW90aW9uUGF0aFwiXVswXSk7XHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHBhdGhEYXRhW21hcE51bWJlci0xXVtcIm1vdGlvblBhdGhcIl1bMF0ubGVuZ3RoKTtcclxuICAgICAgICAvLyAgICAgbGV0IHg6IG51bWJlciA9IHBhdGhEYXRhW21hcE51bWJlcl1bXCJtb3Rpb25QYXRoXCJdWzBdW2luZGV4XVxyXG4gICAgICAgIC8vICAgICBpbmRleCsrXHJcbiAgICAgICAgLy8gICAgIGxldCB5OiBudW1iZXIgPSBwYXRoRGF0YVttYXBOdW1iZXJdW1wibW90aW9uUGF0aFwiXVswXVtpbmRleF1cclxuICAgICAgICAvLyAgICAgQXJyLnB1c2goY2MudjIoeCwgeSkpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8v6Kq/5pW05L2N5a2QICDmnInlpKDpurvnhalcclxuICAgICAgICAvLyBsZXQgZ2V0UHVzaE9uZTogY2MuVmVjMiA9IEFyci5zcGxpY2UoMSwgMSlbMF1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhnZXRQdXNoT25lLngsZ2V0UHVzaE9uZS55KTtcclxuICAgICAgICAvLyBBcnIudW5zaGlmdChnZXRQdXNoT25lKTtcclxuXHJcbiAgICAgICAgLy/kuIvkuIDlgIvpu57ngrrntYLpu57miYDku6XopoHlnKjpgJnliqDlhaVcclxuICAgICAgICB4ID0gcGF0aERhdGFbbWFwTnVtYmVyICsgMV1bXCJ2YWx1ZVwiXVswXTtcclxuICAgICAgICB5ID0gcGF0aERhdGFbbWFwTnVtYmVyICsgMV1bXCJ2YWx1ZVwiXVsxXTtcclxuICAgICAgICBBcnIucHVzaChjYy52Mih4LCB5KSlcclxuICAgICAgICBjb25zb2xlLmxvZyhBcnIpO1xyXG5cclxuICAgICAgICBHYW1lTW9kbGUucGF0aEJlemllckRhdGEuc2V0KG1hcE51bWJlciArIDEsIEFycik7XHJcbiAgICB9XHJcbiAgICBnZXRTcHJpdGVUeXBlKF9udW1iZXI6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKF9udW1iZXIpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKF9udW1iZXIpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiU3RhdGlvbl9TdGFydFwiKTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBjYXNlIDIwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiU3RhdGlvbl9XYWl0UmFkXCIpO1xyXG4gICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgIGNhc2UgMTU6XHJcbiAgICAgICAgICAgIGNhc2UgMTg6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJTdGF0aW9uX1EmQVwiKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIlN0YXRpb25fTm9ybWFsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBsZXQgZ2V0VHlwZTpTdGF0aW9uVHlwZSA9IF9udW1iZXJcclxuICAgIH1cclxuICAgIGdldFN0YXRpb25UeXBlKF9udW1iZXI6IG51bWJlcikge1xyXG4gICAgICAgIHN3aXRjaCAoX251bWJlcikge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGlvblR5cGUuU3RhcnRcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBjYXNlIDIxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0YXRpb25UeXBlLldhaXRSYWRcclxuICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgICBjYXNlIDE1OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0YXRpb25UeXBlLlFhbmRBXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGlvblR5cGUuTm9ybWFsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBnZXRUeXBlOlN0YXRpb25UeXBlID0gX251bWJlclxyXG4gICAgfVxyXG5cclxuICAgIGV4Y2VwdGlvblNwcml0ZShfaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBfaW5kZXggPT0gOCA/XHJcbiAgICAgICAgICAgIGNjLmZpbmQoX2luZGV4LnRvU3RyaW5nKCksIHRoaXMuY29udGVudF9TdGF0aW9uMikgOlxyXG4gICAgICAgICAgICBjYy5maW5kKF9pbmRleC50b1N0cmluZygpLCB0aGlzLmNvbnRlbnRfU3RhdGlvbilcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/CameraControll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7361aAQ52BMU589bmg6jtti', 'CameraControll');
// Script/Class/CameraControll.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Easing_1 = require("../Enum/Easing");
var GameEvent_1 = require("../Enum/GameEvent");
var ComponentBase_1 = require("../Data/base/ComponentBase");
var GameModle_1 = require("../GameModle");
var CameraState_1 = require("../Enum/CameraState");
var CameraControll = /** @class */ (function (_super) {
    __extends(CameraControll, _super);
    function CameraControll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.manZoomRatio = 1.77;
        _this.showAllZoomRatio = 0.36;
        _this.stationZoomRatio = 3;
        _this.moveSpeed = 1;
        return _this;
    }
    CameraControll.prototype.onLoad = function () {
        this.mineCamera = this.node.getComponent(cc.Camera);
        this.manCamera = cc.find("Canvas/Panel_Man/nMan/manCamera").getComponent(cc.Camera);
        this.mineCamera.zoomRatio = 1;
        this.manCamera.zoomRatio = this.manZoomRatio;
        this.mineCamera.node.setPosition(cc.Vec2.ZERO);
        this.initEvent(GameEvent_1.GameEvent.MoveToStation, this.moveToStation);
        this.initEvent(GameEvent_1.GameEvent.MoveToManCamera, this.moveToManCamera);
        this.initEvent(GameEvent_1.GameEvent.ShowAllView, this.showAllView);
    };
    CameraControll.prototype.start = function () {
        this.cameraState = CameraState_1.CameraState.Mine;
        // this.showAllView()
    };
    CameraControll.prototype.activeManCamera = function (isboolean) {
        this.manCamera.node.active = isboolean;
    };
    CameraControll.prototype.activeMineCamera = function (isboolean) {
        this.mineCamera.node.active = isboolean;
    };
    CameraControll.prototype.moveToStation = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this.cameraState == CameraState_1.CameraState.Men) {
                            _this.asyncMine();
                            _this.cameraState = CameraState_1.CameraState.Mine;
                        }
                        // if (!isJump)
                        //     tween = cc.tween()
                        //         .to(this.moveSpeed, { zoomRatio: this.manZoomRatio })
                        // else
                        //     tween = cc.tween()
                        //         .to(this.moveSpeed * 0.5, { zoomRatio: 1 }, { easing: Easing.cubicIn })
                        //         .to(this.moveSpeed * 0.5, { zoomRatio: this.manZoomRatio }, { easing: Easing.cubicOut })
                        var manePos = GameModle_1.default.convertOtherNodeSpaceAR(target, _this.mineCamera.node);
                        cc.tween(_this.mineCamera.node)
                            .to(_this.moveSpeed, { position: manePos }, { easing: Easing_1.Easing.cubicOut })
                            .call(resolve)
                            .start();
                        cc.tween(_this.mineCamera)
                            .to(_this.moveSpeed, { zoomRatio: _this.manZoomRatio })
                            // .to(this.moveSpeed * 0.5, { zoomRatio: 1 }, { easing: Easing.cubicIn })
                            // .to(this.moveSpeed * 0.5, { zoomRatio: this.stationZoomRatio }, { easing: Easing.cubicOut })
                            .start();
                    })];
            });
        });
    };
    CameraControll.prototype.asyncMine = function () {
        var manePos = GameModle_1.default.convertOtherNodeSpaceAR(this.manCamera.node, this.mineCamera.node);
        this.mineCamera.node.position = manePos;
    };
    CameraControll.prototype.moveToManCamera = function (isJump) {
        if (isJump === void 0) { isJump = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var tween;
                        // if (!isJump)
                        //     tween = cc.tween()
                        //         .to(this.moveSpeed, { zoomRatio: this.manZoomRatio })
                        // else
                        //     tween = cc.tween()
                        //         .to(this.moveSpeed * 0.5, { zoomRatio: 1 }, { easing: Easing.cubicIn })
                        //         .to(this.moveSpeed * 0.5, { zoomRatio: this.manZoomRatio }, { easing: Easing.cubicOut })
                        var manePos = GameModle_1.default.convertOtherNodeSpaceAR(_this.manCamera.node, _this.mineCamera.node);
                        cc.tween(_this.mineCamera.node)
                            .to(_this.moveSpeed, { position: manePos }, { easing: Easing_1.Easing.cubicOut })
                            .call(function () {
                            _this.cameraState = CameraState_1.CameraState.Men;
                            _this.activeManCamera(true);
                            _this.activeMineCamera(false);
                            resolve();
                        })
                            .start();
                        cc.tween(_this.mineCamera)
                            .to(_this.moveSpeed, { zoomRatio: _this.manZoomRatio })
                            .start();
                    })];
            });
        });
    };
    CameraControll.prototype.showAllView = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cc.tween(_this.mineCamera.node)
                            .to(_this.moveSpeed, { position: cc.Vec3.ZERO }, { easing: Easing_1.Easing.cubicOut })
                            .start();
                        cc.tween(_this.mineCamera)
                            .to(_this.moveSpeed, { zoomRatio: _this.showAllZoomRatio }, { easing: Easing_1.Easing.cubicOut })
                            .call(resolve)
                            .start();
                    })];
            });
        });
    };
    return CameraControll;
}(ComponentBase_1.default));
exports.default = CameraControll;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcQ2FtZXJhQ29udHJvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBQ3hDLCtDQUE4QztBQUM5Qyw0REFBdUQ7QUFDdkQsMENBQXFDO0FBQ3JDLG1EQUFrRDtBQUVsRDtJQUE0QyxrQ0FBYTtJQUF6RDtRQUFBLHFFQXNHQztRQW5HRyxrQkFBWSxHQUFXLElBQUksQ0FBQztRQUM1QixzQkFBZ0IsR0FBVyxJQUFJLENBQUM7UUFDaEMsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBRTdCLGVBQVMsR0FBVyxDQUFDLENBQUM7O0lBK0YxQixDQUFDO0lBM0ZhLCtCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNuRixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQTtRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FB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TyxDQUFDOzZCQUNiLEtBQUssRUFBRSxDQUFBO29CQUNoQixDQUFDLENBQUMsRUFBQTs7O0tBQ0w7SUFDTCxxQkFBQztBQUFELENBdEdBLEFBc0dDLENBdEcyQyx1QkFBYSxHQXNHeEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFYXNpbmcgfSBmcm9tIFwiLi4vRW51bS9FYXNpbmdcIjtcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSBcIi4uL0VudW0vR2FtZUV2ZW50XCI7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZVwiO1xyXG5pbXBvcnQgR2FtZU1vZGxlIGZyb20gXCIuLi9HYW1lTW9kbGVcIjtcclxuaW1wb3J0IHsgQ2FtZXJhU3RhdGUgfSBmcm9tIFwiLi4vRW51bS9DYW1lcmFTdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhQ29udHJvbGwgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIG1hbkNhbWVyYTogY2MuQ2FtZXJhO1xyXG4gICAgbWluZUNhbWVyYTogY2MuQ2FtZXJhO1xyXG4gICAgbWFuWm9vbVJhdGlvOiBudW1iZXIgPSAxLjc3O1xyXG4gICAgc2hvd0FsbFpvb21SYXRpbzogbnVtYmVyID0gMC4zNjtcclxuICAgIHN0YXRpb25ab29tUmF0aW86IG51bWJlciA9IDM7XHJcblxyXG4gICAgbW92ZVNwZWVkOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGNhbWVyYVN0YXRlOiBDYW1lcmFTdGF0ZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWluZUNhbWVyYSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKVxyXG4gICAgICAgIHRoaXMubWFuQ2FtZXJhID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9NYW4vbk1hbi9tYW5DYW1lcmFcIikuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSlcclxuICAgICAgICB0aGlzLm1pbmVDYW1lcmEuem9vbVJhdGlvID0gMVxyXG4gICAgICAgIHRoaXMubWFuQ2FtZXJhLnpvb21SYXRpbyA9IHRoaXMubWFuWm9vbVJhdGlvXHJcbiAgICAgICAgdGhpcy5taW5lQ2FtZXJhLm5vZGUuc2V0UG9zaXRpb24oY2MuVmVjMi5aRVJPKVxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5Nb3ZlVG9TdGF0aW9uLCB0aGlzLm1vdmVUb1N0YXRpb24pO1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5Nb3ZlVG9NYW5DYW1lcmEsIHRoaXMubW92ZVRvTWFuQ2FtZXJhKTtcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuU2hvd0FsbFZpZXcsIHRoaXMuc2hvd0FsbFZpZXcpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhU3RhdGUgPSBDYW1lcmFTdGF0ZS5NaW5lXHJcbiAgICAgICAgLy8gdGhpcy5zaG93QWxsVmlldygpXHJcblxyXG4gICAgfVxyXG4gICAgYWN0aXZlTWFuQ2FtZXJhKGlzYm9vbGVhbjogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMubWFuQ2FtZXJhLm5vZGUuYWN0aXZlID0gaXNib29sZWFuXHJcbiAgICB9XHJcbiAgICBhY3RpdmVNaW5lQ2FtZXJhKGlzYm9vbGVhbjogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMubWluZUNhbWVyYS5ub2RlLmFjdGl2ZSA9IGlzYm9vbGVhblxyXG4gICAgfVxyXG4gICAgYXN5bmMgbW92ZVRvU3RhdGlvbih0YXJnZXQ6IGNjLk5vZGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYW1lcmFTdGF0ZSA9PSBDYW1lcmFTdGF0ZS5NZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXN5bmNNaW5lKClcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhU3RhdGUgPSBDYW1lcmFTdGF0ZS5NaW5lXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmICghaXNKdW1wKVxyXG4gICAgICAgICAgICAvLyAgICAgdHdlZW4gPSBjYy50d2VlbigpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLnRvKHRoaXMubW92ZVNwZWVkLCB7IHpvb21SYXRpbzogdGhpcy5tYW5ab29tUmF0aW8gfSlcclxuICAgICAgICAgICAgLy8gZWxzZVxyXG4gICAgICAgICAgICAvLyAgICAgdHdlZW4gPSBjYy50d2VlbigpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLnRvKHRoaXMubW92ZVNwZWVkICogMC41LCB7IHpvb21SYXRpbzogMSB9LCB7IGVhc2luZzogRWFzaW5nLmN1YmljSW4gfSlcclxuICAgICAgICAgICAgLy8gICAgICAgICAudG8odGhpcy5tb3ZlU3BlZWQgKiAwLjUsIHsgem9vbVJhdGlvOiB0aGlzLm1hblpvb21SYXRpbyB9LCB7IGVhc2luZzogRWFzaW5nLmN1YmljT3V0IH0pXHJcbiAgICAgICAgICAgIGxldCBtYW5lUG9zID0gR2FtZU1vZGxlLmNvbnZlcnRPdGhlck5vZGVTcGFjZUFSKHRhcmdldCwgdGhpcy5taW5lQ2FtZXJhLm5vZGUpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWluZUNhbWVyYS5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKHRoaXMubW92ZVNwZWVkLCB7IHBvc2l0aW9uOiBtYW5lUG9zIH0sIHsgZWFzaW5nOiBFYXNpbmcuY3ViaWNPdXQgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKHJlc29sdmUpXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1pbmVDYW1lcmEpXHJcbiAgICAgICAgICAgICAgICAudG8odGhpcy5tb3ZlU3BlZWQsIHsgem9vbVJhdGlvOiB0aGlzLm1hblpvb21SYXRpbyB9KVxyXG4gICAgICAgICAgICAgICAgLy8gLnRvKHRoaXMubW92ZVNwZWVkICogMC41LCB7IHpvb21SYXRpbzogMSB9LCB7IGVhc2luZzogRWFzaW5nLmN1YmljSW4gfSlcclxuICAgICAgICAgICAgICAgIC8vIC50byh0aGlzLm1vdmVTcGVlZCAqIDAuNSwgeyB6b29tUmF0aW86IHRoaXMuc3RhdGlvblpvb21SYXRpbyB9LCB7IGVhc2luZzogRWFzaW5nLmN1YmljT3V0IH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhc3luY01pbmUoKSB7XHJcbiAgICAgICAgbGV0IG1hbmVQb3MgPSBHYW1lTW9kbGUuY29udmVydE90aGVyTm9kZVNwYWNlQVIodGhpcy5tYW5DYW1lcmEubm9kZSwgdGhpcy5taW5lQ2FtZXJhLm5vZGUpXHJcbiAgICAgICAgdGhpcy5taW5lQ2FtZXJhLm5vZGUucG9zaXRpb24gPSBtYW5lUG9zXHJcbiAgICB9XHJcbiAgICBhc3luYyBtb3ZlVG9NYW5DYW1lcmEoaXNKdW1wOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0d2VlbjogY2MuVHdlZW47XHJcbiAgICAgICAgICAgIC8vIGlmICghaXNKdW1wKVxyXG4gICAgICAgICAgICAvLyAgICAgdHdlZW4gPSBjYy50d2VlbigpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLnRvKHRoaXMubW92ZVNwZWVkLCB7IHpvb21SYXRpbzogdGhpcy5tYW5ab29tUmF0aW8gfSlcclxuICAgICAgICAgICAgLy8gZWxzZVxyXG4gICAgICAgICAgICAvLyAgICAgdHdlZW4gPSBjYy50d2VlbigpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLnRvKHRoaXMubW92ZVNwZWVkICogMC41LCB7IHpvb21SYXRpbzogMSB9LCB7IGVhc2luZzogRWFzaW5nLmN1YmljSW4gfSlcclxuICAgICAgICAgICAgLy8gICAgICAgICAudG8odGhpcy5tb3ZlU3BlZWQgKiAwLjUsIHsgem9vbVJhdGlvOiB0aGlzLm1hblpvb21SYXRpbyB9LCB7IGVhc2luZzogRWFzaW5nLmN1YmljT3V0IH0pXHJcblxyXG4gICAgICAgICAgICBsZXQgbWFuZVBvcyA9IEdhbWVNb2RsZS5jb252ZXJ0T3RoZXJOb2RlU3BhY2VBUih0aGlzLm1hbkNhbWVyYS5ub2RlLCB0aGlzLm1pbmVDYW1lcmEubm9kZSlcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5taW5lQ2FtZXJhLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8odGhpcy5tb3ZlU3BlZWQsIHsgcG9zaXRpb246IG1hbmVQb3MgfSwgeyBlYXNpbmc6IEVhc2luZy5jdWJpY091dCB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhU3RhdGUgPSBDYW1lcmFTdGF0ZS5NZW5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZU1hbkNhbWVyYSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZU1pbmVDYW1lcmEoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWluZUNhbWVyYSlcclxuICAgICAgICAgICAgICAgIC50byh0aGlzLm1vdmVTcGVlZCwgeyB6b29tUmF0aW86IHRoaXMubWFuWm9vbVJhdGlvIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBzaG93QWxsVmlldygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1pbmVDYW1lcmEubm9kZSlcclxuICAgICAgICAgICAgICAgIC50byh0aGlzLm1vdmVTcGVlZCwgeyBwb3NpdGlvbjogY2MuVmVjMy5aRVJPIH0sIHsgZWFzaW5nOiBFYXNpbmcuY3ViaWNPdXQgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWluZUNhbWVyYSlcclxuICAgICAgICAgICAgICAgIC50byh0aGlzLm1vdmVTcGVlZCwgeyB6b29tUmF0aW86IHRoaXMuc2hvd0FsbFpvb21SYXRpbyB9LCB7IGVhc2luZzogRWFzaW5nLmN1YmljT3V0IH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbChyZXNvbHZlKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/WebPostMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d6e6EBSTZB/L/xHih158WW', 'WebPostMessage');
// Script/WebPostMessage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebPostMessage = void 0;
var Commad_1 = require("./Enum/Commad");
var GameEvent_1 = require("./Enum/GameEvent");
var EventMng_1 = require("./Event/EventMng");
var WebPostMessage = /** @class */ (function () {
    function WebPostMessage() {
    }
    // curreVideo: number;
    WebPostMessage.prototype.connect = function () {
        window.addEventListener("message", this.onReceiveMessage, false);
    };
    //  傳給網頁端訊息
    WebPostMessage.prototype.send = function (data) {
        //@ts-ignore
        // this.curreVideo = data.viewType
        console.error(data);
        window.parent.postMessage(data, "*");
        console.log("傳遞封包內容", data);
    };
    //接收到網頁給的訊息
    WebPostMessage.prototype.onReceiveMessage = function (event) {
        var cmd = event.data.cmd;
        var viewType = event.data.viewType;
        console.error(event);
        switch (viewType) {
            case 0:
                EventMng_1.default.emit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.CloseVideo);
                break;
            default:
                break;
        }
        // EventMng.emit(cmd, viewType);
        console.log("收到內容", event);
    };
    return WebPostMessage;
}());
exports.WebPostMessage = WebPostMessage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWJQb3N0TWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBeUM7QUFDekMsOENBQTZDO0FBQzdDLDZDQUF3QztBQUV4QztJQUFBO0lBZ0NBLENBQUM7SUEvQkcsc0JBQXNCO0lBQ3RCLGdDQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsV0FBVztJQUNYLDZCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsWUFBWTtRQUNaLGtDQUFrQztRQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBCLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVoQyxDQUFDO0lBQ0QsV0FBVztJQUNYLHlDQUFnQixHQUFoQixVQUFpQixLQUFLO1FBQ2xCLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsUUFBUSxRQUFRLEVBQUU7WUFDZCxLQUFLLENBQUM7Z0JBQ0Ysa0JBQVEsQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtnQkFDekQsTUFBTTtZQUVWO2dCQUNJLE1BQU07U0FDYjtRQUNELGdDQUFnQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUwscUJBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tIFwiLi9FbnVtL0NvbW1hZFwiO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tIFwiLi9FbnVtL0dhbWVFdmVudFwiO1xyXG5pbXBvcnQgRXZlbnRNbmcgZnJvbSBcIi4vRXZlbnQvRXZlbnRNbmdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJQb3N0TWVzc2FnZSB7XHJcbiAgICAvLyBjdXJyZVZpZGVvOiBudW1iZXI7XHJcbiAgICBjb25uZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLm9uUmVjZWl2ZU1lc3NhZ2UsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIC8vICDlgrPntabntrLpoIHnq6/oqIrmga9cclxuICAgIHNlbmQoZGF0YTogb2JqZWN0KTogdm9pZCB7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZVZpZGVvID0gZGF0YS52aWV3VHlwZVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoZGF0YSwgXCIqXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5YKz6YGe5bCB5YyF5YWn5a65XCIsIGRhdGEpO1xyXG5cclxuICAgIH1cclxuICAgIC8v5o6l5pS25Yiw57ay6aCB57Wm55qE6KiK5oGvXHJcbiAgICBvblJlY2VpdmVNZXNzYWdlKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY21kID0gZXZlbnQuZGF0YS5jbWQ7XHJcbiAgICAgICAgY29uc3Qgdmlld1R5cGUgPSBldmVudC5kYXRhLnZpZXdUeXBlO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXZlbnQpO1xyXG4gICAgICAgIHN3aXRjaCAodmlld1R5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgRXZlbnRNbmcuZW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLkNsb3NlVmlkZW8pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRXZlbnRNbmcuZW1pdChjbWQsIHZpZXdUeXBlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuaUtuWIsOWFp+WuuVwiLCBldmVudCk7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/base/MusciMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16bbfnoMXtGA4a0OP0B56v9', 'MusciMng');
// Script/Data/base/MusciMng.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssetMng_1 = require("../../Asset/AssetMng");
var MusicMng = /** @class */ (function () {
    function MusicMng() {
        this.musicVol = 0.8;
        this.effectVol = 0.8;
        this.isMusicOpen = true;
        this.isEffectOpen = true;
        this.effectID = new Map();
    }
    MusicMng.prototype.swichMusic = function () {
        this.isMusicOpen = !this.isMusicOpen;
        cc.audioEngine.setMusicVolume(this.isMusicOpen ? this.musicVol : 0);
    };
    MusicMng.prototype.setMusicVol = function (vol) {
        this.musicVol = vol ? vol : this.musicVol;
        cc.audioEngine.setMusicVolume(this.isMusicOpen ? this.musicVol : 0);
    };
    MusicMng.prototype.musicPlay = function (str, isLoop) {
        if (isLoop === void 0) { isLoop = true; }
        this.musicStop();
        this.musicID = cc.audioEngine.playMusic(AssetMng_1.default.data_Music.get(str), isLoop);
    };
    MusicMng.prototype.musicStop = function () {
        cc.audioEngine.stopMusic();
    };
    MusicMng.prototype.swichEffect = function () {
        this.isEffectOpen = !this.isEffectOpen;
        cc.audioEngine.setMusicVolume(this.isEffectOpen ? this.effectVol : 0);
    };
    MusicMng.prototype.effectsicVol = function (vol) {
        this.effectVol = vol ? vol : this.effectVol;
        cc.audioEngine.setEffectsVolume(this.isEffectOpen ? this.effectVol : 0);
    };
    MusicMng.prototype.effectPlay = function (str, isLoop) {
        if (isLoop === void 0) { isLoop = false; }
        this.musicStop();
        this.musicID = cc.audioEngine.playMusic(AssetMng_1.default.data_Music.get(str), isLoop);
    };
    MusicMng.prototype.effectStop = function () {
        cc.audioEngine.stopMusic();
    };
    return MusicMng;
}());
exports.default = new MusicMng();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxiYXNlXFxNdXNjaU1uZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUU1QztJQUFBO1FBQ0ksYUFBUSxHQUFXLEdBQUcsQ0FBQztRQUN2QixjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBSzdCLGFBQVEsR0FBd0IsSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQWlDN0MsQ0FBQztJQS9CRyw2QkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUE7UUFDcEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdkUsQ0FBQztJQUNELDhCQUFXLEdBQVgsVUFBWSxHQUFZO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDekMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdkUsQ0FBQztJQUNELDRCQUFTLEdBQVQsVUFBVSxHQUFXLEVBQUUsTUFBc0I7UUFBdEIsdUJBQUEsRUFBQSxhQUFzQjtRQUN6QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxrQkFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDakYsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQzlCLENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUE7UUFDdEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDekUsQ0FBQztJQUNELCtCQUFZLEdBQVosVUFBYSxHQUFZO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDM0MsRUFBRSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBQ0QsNkJBQVUsR0FBVixVQUFXLEdBQVcsRUFBRSxNQUF1QjtRQUF2Qix1QkFBQSxFQUFBLGNBQXVCO1FBQzNDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGtCQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNqRixDQUFDO0lBQ0QsNkJBQVUsR0FBVjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDOUIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQTFDQSxBQTBDQyxJQUFBO0FBQ0Qsa0JBQWUsSUFBSSxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3NldE1uZyBmcm9tIFwiLi4vLi4vQXNzZXQvQXNzZXRNbmdcIjtcclxuXHJcbmNsYXNzIE11c2ljTW5nIHtcclxuICAgIG11c2ljVm9sOiBudW1iZXIgPSAwLjg7XHJcbiAgICBlZmZlY3RWb2w6IG51bWJlciA9IDAuODtcclxuICAgIGlzTXVzaWNPcGVuOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlzRWZmZWN0T3BlbjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG5cclxuICAgIG11c2ljSUQ6IG51bWJlcjtcclxuXHJcbiAgICBlZmZlY3RJRDogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoKVxyXG5cclxuICAgIHN3aWNoTXVzaWMoKSB7XHJcbiAgICAgICAgdGhpcy5pc011c2ljT3BlbiA9ICF0aGlzLmlzTXVzaWNPcGVuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodGhpcy5pc011c2ljT3BlbiA/IHRoaXMubXVzaWNWb2wgOiAwKVxyXG4gICAgfVxyXG4gICAgc2V0TXVzaWNWb2wodm9sPzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpY1ZvbCA9IHZvbCA/IHZvbCA6IHRoaXMubXVzaWNWb2xcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh0aGlzLmlzTXVzaWNPcGVuID8gdGhpcy5tdXNpY1ZvbCA6IDApXHJcbiAgICB9XHJcbiAgICBtdXNpY1BsYXkoc3RyOiBzdHJpbmcsIGlzTG9vcDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLm11c2ljU3RvcCgpXHJcbiAgICAgICAgdGhpcy5tdXNpY0lEID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKEFzc2V0TW5nLmRhdGFfTXVzaWMuZ2V0KHN0ciksIGlzTG9vcClcclxuICAgIH1cclxuICAgIG11c2ljU3RvcCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKVxyXG4gICAgfVxyXG5cclxuICAgIHN3aWNoRWZmZWN0KCkge1xyXG4gICAgICAgIHRoaXMuaXNFZmZlY3RPcGVuID0gIXRoaXMuaXNFZmZlY3RPcGVuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodGhpcy5pc0VmZmVjdE9wZW4gPyB0aGlzLmVmZmVjdFZvbCA6IDApXHJcbiAgICB9XHJcbiAgICBlZmZlY3RzaWNWb2wodm9sPzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RWb2wgPSB2b2wgPyB2b2wgOiB0aGlzLmVmZmVjdFZvbFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodGhpcy5pc0VmZmVjdE9wZW4gPyB0aGlzLmVmZmVjdFZvbCA6IDApXHJcbiAgICB9XHJcbiAgICBlZmZlY3RQbGF5KHN0cjogc3RyaW5nLCBpc0xvb3A6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMubXVzaWNTdG9wKClcclxuICAgICAgICB0aGlzLm11c2ljSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoQXNzZXRNbmcuZGF0YV9NdXNpYy5nZXQoc3RyKSwgaXNMb29wKVxyXG4gICAgfVxyXG4gICAgZWZmZWN0U3RvcCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBNdXNpY01uZygpOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enum/GameEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '757e79L9zNI57Kfgvyze7sn', 'GameEvent');
// Script/Enum/GameEvent.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEvent = void 0;
var GameEvent;
(function (GameEvent) {
    GameEvent["ControllPath"] = "Controll";
    GameEvent["ControllComponent"] = "Controll";
    GameEvent["SetModel"] = "SetModel";
    GameEvent["SendModel"] = "SendModel";
    GameEvent["SendCommand"] = "sendCommand";
    GameEvent["InitMap"] = "InitMap";
    GameEvent["ShowMessage"] = "ShowMessage";
    GameEvent["HideMessage"] = "HideMessage";
    GameEvent["ManGO"] = "ManGO";
    GameEvent["ManStop"] = "ManStop";
    GameEvent["ManWait"] = "ManWait";
    GameEvent["ManSkip"] = "ManSkip";
    GameEvent["SetManState"] = "SetManState";
    GameEvent["MoveToStation"] = "MoveToStation";
    GameEvent["MoveToManCamera"] = "MoveToManCamera";
    GameEvent["ShowAllView"] = "ShowAllView";
    GameEvent["OpenDoor"] = "OpenDoor";
    GameEvent["CloseDoor"] = "CloseDoor";
    GameEvent["BearSetModle"] = "BearSetModle";
    GameEvent["GetStation"] = "GetStation";
    GameEvent["UIGetStation"] = "UIGetStation";
    GameEvent["UIReset"] = "UIReset";
    GameEvent["StopCloud"] = "StopCloud";
    GameEvent["StartCloud"] = "StartCloud";
    GameEvent["DeletCloud"] = "DeletCloud";
    GameEvent["OpenBufer"] = "OpenBufer";
    GameEvent["CloseBufer"] = "CloseBufer";
})(GameEvent = exports.GameEvent || (exports.GameEvent = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbnVtXFxHYW1lRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxTQStCWDtBQS9CRCxXQUFZLFNBQVM7SUFDakIsc0NBQXdCLENBQUE7SUFDeEIsMkNBQTZCLENBQUE7SUFDN0Isa0NBQXFCLENBQUE7SUFDckIsb0NBQXVCLENBQUE7SUFDdkIsd0NBQTJCLENBQUE7SUFDM0IsZ0NBQW1CLENBQUE7SUFDbkIsd0NBQTJCLENBQUE7SUFDM0Isd0NBQTJCLENBQUE7SUFDM0IsNEJBQWUsQ0FBQTtJQUNmLGdDQUFtQixDQUFBO0lBQ25CLGdDQUFtQixDQUFBO0lBQ25CLGdDQUFtQixDQUFBO0lBQ25CLHdDQUEyQixDQUFBO0lBQzNCLDRDQUErQixDQUFBO0lBQy9CLGdEQUFtQyxDQUFBO0lBQ25DLHdDQUEyQixDQUFBO0lBQzNCLGtDQUFxQixDQUFBO0lBQ3JCLG9DQUF1QixDQUFBO0lBQ3ZCLDBDQUE2QixDQUFBO0lBQzdCLHNDQUF5QixDQUFBO0lBQ3pCLDBDQUEyQixDQUFBO0lBRTNCLGdDQUFpQixDQUFBO0lBR2pCLG9DQUF1QixDQUFBO0lBQ3ZCLHNDQUF5QixDQUFBO0lBQ3pCLHNDQUF5QixDQUFBO0lBQ3pCLG9DQUF1QixDQUFBO0lBQ3ZCLHNDQUF5QixDQUFBO0FBQzdCLENBQUMsRUEvQlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUErQnBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gR2FtZUV2ZW50IHtcclxuICAgIENvbnRyb2xsUGF0aCA9XCJDb250cm9sbFwiLFxyXG4gICAgQ29udHJvbGxDb21wb25lbnQgPVwiQ29udHJvbGxcIixcclxuICAgIFNldE1vZGVsID0gXCJTZXRNb2RlbFwiLFxyXG4gICAgU2VuZE1vZGVsID0gXCJTZW5kTW9kZWxcIixcclxuICAgIFNlbmRDb21tYW5kID0gXCJzZW5kQ29tbWFuZFwiLFxyXG4gICAgSW5pdE1hcCA9IFwiSW5pdE1hcFwiLFxyXG4gICAgU2hvd01lc3NhZ2UgPSBcIlNob3dNZXNzYWdlXCIsXHJcbiAgICBIaWRlTWVzc2FnZSA9IFwiSGlkZU1lc3NhZ2VcIixcclxuICAgIE1hbkdPID0gXCJNYW5HT1wiLFxyXG4gICAgTWFuU3RvcCA9IFwiTWFuU3RvcFwiLFxyXG4gICAgTWFuV2FpdCA9IFwiTWFuV2FpdFwiLFxyXG4gICAgTWFuU2tpcCA9IFwiTWFuU2tpcFwiLFxyXG4gICAgU2V0TWFuU3RhdGUgPSBcIlNldE1hblN0YXRlXCIsXHJcbiAgICBNb3ZlVG9TdGF0aW9uID0gXCJNb3ZlVG9TdGF0aW9uXCIsXHJcbiAgICBNb3ZlVG9NYW5DYW1lcmEgPSBcIk1vdmVUb01hbkNhbWVyYVwiLFxyXG4gICAgU2hvd0FsbFZpZXcgPSBcIlNob3dBbGxWaWV3XCIsXHJcbiAgICBPcGVuRG9vciA9IFwiT3BlbkRvb3JcIixcclxuICAgIENsb3NlRG9vciA9IFwiQ2xvc2VEb29yXCIsXHJcbiAgICBCZWFyU2V0TW9kbGUgPSBcIkJlYXJTZXRNb2RsZVwiLFxyXG4gICAgR2V0U3RhdGlvbiA9IFwiR2V0U3RhdGlvblwiLFxyXG4gICAgVUlHZXRTdGF0aW9uPVwiVUlHZXRTdGF0aW9uXCIsXHJcblxyXG4gICAgVUlSZXNldD1cIlVJUmVzZXRcIixcclxuXHJcblxyXG4gICAgU3RvcENsb3VkID0gXCJTdG9wQ2xvdWRcIixcclxuICAgIFN0YXJ0Q2xvdWQgPSBcIlN0YXJ0Q2xvdWRcIixcclxuICAgIERlbGV0Q2xvdWQgPSBcIkRlbGV0Q2xvdWRcIixcclxuICAgIE9wZW5CdWZlciA9IFwiT3BlbkJ1ZmVyXCIsXHJcbiAgICBDbG9zZUJ1ZmVyID0gXCJDbG9zZUJ1ZmVyXCIsXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/QA/AnswerLibrary.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6efb4fcRTVAELtjfktanNfs', 'AnswerLibrary');
// Script/Data/QA/AnswerLibrary.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnswerLib_strrary = /** @class */ (function () {
    function AnswerLib_strrary(level, qaLib_num) {
        this.answerLib_str = [];
        this.lib = [];
        var libClass = new lib();
        switch (level) {
            case 0:
                this.lib = libClass.easy;
                break;
            case 1:
                this.lib = libClass.normal;
                break;
            case 2:
                this.lib = libClass.hard;
                break;
        }
        for (var index = 0; index < qaLib_num.length; index++) {
            this.answerLib_str.push(this.lib[qaLib_num[index]]);
        }
    }
    return AnswerLib_strrary;
}());
exports.default = AnswerLib_strrary;
var lib = /** @class */ (function () {
    function lib() {
        this.easy = [
            "C. 陽光。",
            "B. 不可以。 ",
            "A. 帶回家裡使用。",
            "B. 依規定買車票。",
            "C. 法務部廉政署。",
            "C. 以上皆是。",
            "C. 政風單位。 ",
            "B. 1933。",
            "B. 告知警察或車站人員。",
        ];
        this.normal = [
            "B. 1933。",
            "C. 通霄。",
            "B. 0800-286-586。",
            "C. 9萬元。",
            "A. 扇形車庫。",
            "B. 購買合乎身分之全票車票。",
            "C. 1,000萬元。",
            "C. 法務部廉政署。",
            "A. 險阻、平安、注意慢行。",
        ];
        this.hard = [
            "C. 原則不行，但符合利衝法規定辦理之採購不在此限。",
            "B. 1933。",
            "A. SMS。",
            "B. 0800-286-586。",
            "A. 3,000元。",
            "A. 3日。",
            "C. 1,000萬元。",
            "B. 直接開啟郵件超連結及附件。  ",
            "B. 12月9日。",
        ];
    }
    return lib;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxRQVxcQW5zd2VyTGlicmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBR0ksMkJBQVksS0FBYSxFQUFFLFNBQW1CO1FBRjlDLGtCQUFhLEdBQWEsRUFBRSxDQUFBO1FBQzVCLFFBQUcsR0FBYSxFQUFFLENBQUE7UUFFZCxJQUFJLFFBQVEsR0FBUSxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQzdCLFFBQVEsS0FBSyxFQUFFO1lBQ1gsS0FBSyxDQUFDO2dCQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQy9CLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUM3QixNQUFNO1NBQ2I7UUFDRCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDdEQ7SUFDTCxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBOztBQUNEO0lBQUE7UUFDSSxTQUFJLEdBQWE7WUFDYixRQUFRO1lBQ1IsVUFBVTtZQUNWLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtZQUNaLFVBQVU7WUFDVixXQUFXO1lBQ1gsVUFBVTtZQUNWLGVBQWU7U0FDbEIsQ0FBQTtRQUNELFdBQU0sR0FBYTtZQUNmLFVBQVU7WUFDVixRQUFRO1lBQ1Isa0JBQWtCO1lBQ2xCLFNBQVM7WUFDVCxVQUFVO1lBQ1YsaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYixZQUFZO1lBQ1osZ0JBQWdCO1NBQ25CLENBQUE7UUFDRCxTQUFJLEdBQWE7WUFDYiw0QkFBNEI7WUFDNUIsVUFBVTtZQUNWLFNBQVM7WUFDVCxrQkFBa0I7WUFDbEIsWUFBWTtZQUNaLFFBQVE7WUFDUixhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLFdBQVc7U0FDZCxDQUFBO0lBQ0wsQ0FBQztJQUFELFVBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5zd2VyTGliX3N0cnJhcnkge1xyXG4gICAgYW5zd2VyTGliX3N0cjogc3RyaW5nW10gPSBbXVxyXG4gICAgbGliOiBzdHJpbmdbXSA9IFtdXHJcbiAgICBjb25zdHJ1Y3RvcihsZXZlbDogbnVtYmVyLCBxYUxpYl9udW06IG51bWJlcltdKSB7XHJcbiAgICAgICAgbGV0IGxpYkNsYXNzOiBsaWIgPSBuZXcgbGliKClcclxuICAgICAgICBzd2l0Y2ggKGxldmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogdGhpcy5saWIgPSBsaWJDbGFzcy5lYXN5O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTogdGhpcy5saWIgPSBsaWJDbGFzcy5ub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOiB0aGlzLmxpYiA9IGxpYkNsYXNzLmhhcmQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHFhTGliX251bS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5hbnN3ZXJMaWJfc3RyLnB1c2godGhpcy5saWJbcWFMaWJfbnVtW2luZGV4XV0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmNsYXNzIGxpYiB7XHJcbiAgICBlYXN5OiBzdHJpbmdbXSA9IFtcclxuICAgICAgICBcIkMuIOmZveWFieOAglwiLFxyXG4gICAgICAgIFwiQi4g5LiN5Y+v5Lul44CCIFwiLFxyXG4gICAgICAgIFwiQS4g5bi25Zue5a626KOh5L2/55So44CCXCIsXHJcbiAgICAgICAgXCJCLiDkvp3opo/lrprosrfou4rnpajjgIJcIixcclxuICAgICAgICBcIkMuIOazleWLmemDqOW7ieaUv+e9suOAglwiLFxyXG4gICAgICAgIFwiQy4g5Lul5LiK55qG5piv44CCXCIsXHJcbiAgICAgICAgXCJDLiDmlL/poqjllq7kvY3jgIIgXCIsXHJcbiAgICAgICAgXCJCLiAxOTMz44CCXCIsXHJcbiAgICAgICAgXCJCLiDlkYrnn6Xorablr5/miJbou4rnq5nkurrlk6HjgIJcIixcclxuICAgIF1cclxuICAgIG5vcm1hbDogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgXCJCLiAxOTMz44CCXCIsXHJcbiAgICAgICAgXCJDLiDpgJrpnITjgIJcIixcclxuICAgICAgICBcIkIuIDA4MDAtMjg2LTU4NuOAglwiLFxyXG4gICAgICAgIFwiQy4gOeiQrOWFg+OAglwiLFxyXG4gICAgICAgIFwiQS4g5omH5b2i6LuK5bqr44CCXCIsXHJcbiAgICAgICAgXCJCLiDos7zosrflkIjkuY7ouqvliIbkuYvlhajnpajou4rnpajjgIJcIixcclxuICAgICAgICBcIkMuIDEsMDAw6JCs5YWD44CCXCIsXHJcbiAgICAgICAgXCJDLiDms5Xli5npg6jlu4nmlL/nvbLjgIJcIixcclxuICAgICAgICBcIkEuIOmaqumYu+OAgeW5s+WuieOAgeazqOaEj+aFouihjOOAglwiLFxyXG4gICAgXVxyXG4gICAgaGFyZDogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgXCJDLiDljp/liYfkuI3ooYzvvIzkvYbnrKblkIjliKnooZ3ms5Xopo/lrprovqbnkIbkuYvmjqHos7zkuI3lnKjmraTpmZDjgIJcIixcclxuICAgICAgICBcIkIuIDE5MzPjgIJcIixcclxuICAgICAgICBcIkEuIFNNU+OAglwiLFxyXG4gICAgICAgIFwiQi4gMDgwMC0yODYtNTg244CCXCIsXHJcbiAgICAgICAgXCJBLiAzLDAwMOWFg+OAglwiLFxyXG4gICAgICAgIFwiQS4gM+aXpeOAglwiLFxyXG4gICAgICAgIFwiQy4gMSwwMDDokKzlhYPjgIJcIixcclxuICAgICAgICBcIkIuIOebtOaOpemWi+WVn+mDteS7tui2hemAo+e1kOWPiumZhOS7tuOAgiAgXCIsXHJcbiAgICAgICAgXCJCLiAxMuaciDnml6XjgIJcIixcclxuICAgIF1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Event/EventMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '303c9igcvdC9asglGcZZKA6', 'EventMng');
// Script/Event/EventMng.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new cc.EventTarget();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFdmVudFxcRXZlbnRNbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrQkFBZSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IG5ldyBjYy5FdmVudFRhcmdldCgpOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Interface/IAsset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '844ceSmhcJPyIxXbIDU3LIx', 'IAsset');
// Script/Interface/IAsset.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJbnRlcmZhY2VcXElBc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIElBc3NldHtcclxuICAgIGNoZWNrQXNzZXRTdGF0ZTogYm9vbGVhbjtcclxuICAgIHR5cGVQYXRoOiBzdHJpbmcgO1xyXG4gICAgZmlsZVBhdGg6IHN0cmluZ1tdO1xyXG4gICAgbG9hZEFzc2V0KF9Bc3NldDogTWFwPHN0cmluZywgYW55Pik6dm9pZFxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ShaderCamera/BuferClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb185egUm1JJrNVRiqN9HB3', 'BuferClass');
// Script/ShaderCamera/BuferClass.ts

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
var ComponentBase_1 = require("../Data/base/ComponentBase");
var GameEvent_1 = require("../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BuferClass = /** @class */ (function (_super) {
    __extends(BuferClass, _super);
    function BuferClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.texture = null;
        _this.spriteFrame = null;
        _this.sprite = null;
        _this._lastSize = new cc.Size(0, 0);
        _this.material = null;
        _this.ignoredNodes = [];
        _this.bightness = 0.5;
        _this.blurAmount = 0.5;
        return _this;
        // update (dt) {}
    }
    BuferClass.prototype.start = function () {
        // 截图图像是翻转的，所以y轴镜像
        // this.node.scaleY = -1;
        // this.block = this.node.addComponent(cc.BlockInputEvents)
        // 创建渲染贴图对象
        // this.texture = new cc.RenderTexture();
        // //@ts-ignore
        // this.texture.initWithSize(this.node.width, this.node.height, cc.gfx.RB_FMT_S8);
        // // 在node上创建摄影机
        // this.camera = this.node.getComponent(cc.Camera);
        // // 不渲染0x10的cullingMask对象
        // // this.camera.cullingMask = 0xffffffff ^ 0x10000000;
        // this.camera.targetTexture = this.texture;
        // // 关闭摄影机，否则每一帧它会自动进行渲染
        // this.camera.enabled = false;
        // // 将自身与忽略对象排除渲染
        // this.node['_cullingMask'] = 0x10000000;
        // console.log(this.node['_cullingMask']);
        // console.log(this.ignoredNodes);
        // this.ignoredNodes.map((node) => (node['_cullingMask'] = 0x10000000));
        // // 创建一个sprite组件，由其进行渲染
        // this.spriteFrame = new cc.SpriteFrame();
        // this.sprite = this.node.addComponent(cc.Sprite);
        // this.sprite.spriteFrame = this.spriteFrame;
        // this.sprite.type = cc.Sprite.Type.SIMPLE;
        // this.sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        // this.sprite.trim = true;
        // // this.camera.zoomRatio = 0.35
        // this.material.setProperty('bightness', this.bightness);
        // this.material.setProperty('blurAmount', this.blurAmount);
        // // @ts-ignore
        // this.sprite.setMaterial(0, this.material);
        // this.block.enabled = false
        // this.initEvent(GameEvent.OpenBufer, this.openRender)
        // this.initEvent(GameEvent.CloseBufer, this.closeRender)
        this.hide();
    };
    BuferClass.prototype.openRender = function () {
        // this.block.enabled = true
        this.EventEmit(GameEvent_1.GameEvent.StopCloud);
        // cc.tween(this.node)
        // .to(0.1, { scaleX: 1, scaleY: -1 }, { easing: Easing.expoOut })
        // .to(2, { opacity: 255 }, { easing: Easing.expoOut })
        // .start()
        this.isRender = true;
        // this.snapshot()
    };
    BuferClass.prototype.closeRender = function () {
        // this.block.enabled = false
        this.EventEmit(GameEvent_1.GameEvent.StartCloud);
        // cc.tween(this.node)
        // .to(0.5, { scale: 0 }, { easing: Easing.backOut })
        // .to(0.5, { opacity: 0 }, { easing: Easing.backOut })
        // .start()
        // this.isRender = false;
    };
    BuferClass.prototype.snapshot = function () {
        var size = this.node.getContentSize();
        // 大小发生改变，重新设置texture大小
        if (size.width !== this._lastSize.width || size.height !== this._lastSize.height) {
            //@ts-ignore
            this.texture.initWithSize(this.node.width, this.node.height, cc.gfx.RB_FMT_S8);
            this.camera.targetTexture = this.texture;
        }
        this._lastSize.width = size.width;
        this._lastSize.height = size.height;
        // 手动渲染摄影机，保存截图
        this.camera.render(cc.Canvas.instance.node);
        // 应用刚刚截图的贴图到sprite身上进行渲染
        this.spriteFrame.setTexture(this.texture);
        this.node.setScale(cc.find("Canvas/MainCamera").getComponent(cc.Camera).zoomRatio);
    };
    BuferClass.prototype.update = function (dt) {
        // if (this.isRender)
        // 每一帧都进行截图处理，可以换成需要的时候再调用，比较省资源
        // this.snapshot();
    };
    __decorate([
        property({
            // @ts-ignore
            type: cc.Material,
            displayName: '模糊材质',
            tooltip: '用于应用模糊所用的材质，如无特殊需求请保持默认',
        })
    ], BuferClass.prototype, "material", void 0);
    __decorate([
        property({
            type: [cc.Node],
            displayName: '忽略节点列表',
            tooltip: '在此列表内的节点将不会被模糊遮罩渲染',
        })
    ], BuferClass.prototype, "ignoredNodes", void 0);
    __decorate([
        property({
            type: cc.Float,
            displayName: '亮度',
            tooltip: '降低背景的亮度',
            min: 0,
            max: 1,
        })
    ], BuferClass.prototype, "bightness", void 0);
    __decorate([
        property({
            type: cc.Float,
            displayName: '模糊度',
            tooltip: '背景的模糊程度',
            min: 0,
            max: 1,
        })
    ], BuferClass.prototype, "blurAmount", void 0);
    BuferClass = __decorate([
        ccclass
    ], BuferClass);
    return BuferClass;
}(ComponentBase_1.default));
exports.default = BuferClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTaGFkZXJDYW1lcmFcXEJ1ZmVyQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQXVEO0FBRXZELCtDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBYTtJQUFyRDtRQUFBLHFFQTJJQztRQXZJRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBQ3pCLGFBQU8sR0FBcUIsSUFBSSxDQUFDO1FBQ2pDLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUNuQyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBUTlCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFPaEIsa0JBQVksR0FBRyxFQUFFLENBQUM7UUFTbEIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQVN4QixnQkFBVSxHQUFXLEdBQUcsQ0FBQzs7UUFnR3pCLGlCQUFpQjtJQUNyQixDQUFDO0lBL0ZHLDBCQUFLLEdBQUw7UUFJSSxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLDJEQUEyRDtRQUMzRCxXQUFXO1FBQ1gseUNBQXlDO1FBQ3pDLGVBQWU7UUFDZixrRkFBa0Y7UUFFbEYsaUJBQWlCO1FBQ2pCLG1EQUFtRDtRQUNuRCwyQkFBMkI7UUFDM0Isd0RBQXdEO1FBQ3hELDRDQUE0QztRQUM1Qyx5QkFBeUI7UUFDekIsK0JBQStCO1FBRS9CLGtCQUFrQjtRQUNsQiwwQ0FBMEM7UUFDMUMsMENBQTBDO1FBQzFDLGtDQUFrQztRQUNsQyx3RUFBd0U7UUFFeEUseUJBQXlCO1FBQ3pCLDJDQUEyQztRQUMzQyxtREFBbUQ7UUFDbkQsOENBQThDO1FBRTlDLDRDQUE0QztRQUM1QyxvREFBb0Q7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Q04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLO1lBQ2QsV0FBVyxFQUFFLEtBQUs7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsQ0FBQztTQUNULENBQUM7a0RBQ3VCO0lBMUNSLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0EySTlCO0lBQUQsaUJBQUM7Q0EzSUQsQUEySUMsQ0EzSXVDLHVCQUFhLEdBMklwRDtrQkEzSW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2VcIjtcclxuaW1wb3J0IHsgRWFzaW5nIH0gZnJvbSBcIi4uL0VudW0vRWFzaW5nXCI7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gXCIuLi9FbnVtL0dhbWVFdmVudFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1ZmVyQ2xhc3MgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGlzUmVuZGVyOiBib29sZWFuO1xyXG4gICAgYmxvY2s6IGNjLkJsb2NrSW5wdXRFdmVudHNcclxuXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICB0ZXh0dXJlOiBjYy5SZW5kZXJUZXh0dXJlID0gbnVsbDtcclxuICAgIHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBzcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgX2xhc3RTaXplID0gbmV3IGNjLlNpemUoMCwgMCk7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdHlwZTogY2MuTWF0ZXJpYWwsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICfmqKHns4rmnZDotKgnLFxyXG4gICAgICAgIHRvb2x0aXA6ICfnlKjkuo7lupTnlKjmqKHns4rmiYDnlKjnmoTmnZDotKjvvIzlpoLml6DnibnmrorpnIDmsYLor7fkv53mjIHpu5jorqQnLFxyXG4gICAgfSlcclxuICAgIG1hdGVyaWFsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IFtjYy5Ob2RlXSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ+W/veeVpeiKgueCueWIl+ihqCcsXHJcbiAgICAgICAgdG9vbHRpcDogJ+WcqOatpOWIl+ihqOWGheeahOiKgueCueWwhuS4jeS8muiiq+aooeeziumBrue9qea4suafkycsXHJcbiAgICB9KVxyXG4gICAgaWdub3JlZE5vZGVzID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5GbG9hdCxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ+S6ruW6picsXHJcbiAgICAgICAgdG9vbHRpcDogJ+mZjeS9juiDjOaZr+eahOS6ruW6picsXHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICAgIG1heDogMSxcclxuICAgIH0pXHJcbiAgICBiaWdodG5lc3M6IG51bWJlciA9IDAuNTtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkZsb2F0LFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiAn5qih57OK5bqmJyxcclxuICAgICAgICB0b29sdGlwOiAn6IOM5pmv55qE5qih57OK56iL5bqmJyxcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgbWF4OiAxLFxyXG4gICAgfSlcclxuICAgIGJsdXJBbW91bnQ6IG51bWJlciA9IDAuNTtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAvLyDmiKrlm77lm77lg4/mmK/nv7vovaznmoTvvIzmiYDku6V56L206ZWc5YOPXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnNjYWxlWSA9IC0xO1xyXG4gICAgICAgIC8vIHRoaXMuYmxvY2sgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpXHJcbiAgICAgICAgLy8g5Yib5bu65riy5p+T6LS05Zu+5a+56LGhXHJcbiAgICAgICAgLy8gdGhpcy50ZXh0dXJlID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcclxuICAgICAgICAvLyAvL0B0cy1pZ25vcmVcclxuICAgICAgICAvLyB0aGlzLnRleHR1cmUuaW5pdFdpdGhTaXplKHRoaXMubm9kZS53aWR0aCwgdGhpcy5ub2RlLmhlaWdodCwgY2MuZ2Z4LlJCX0ZNVF9TOCk7XHJcblxyXG4gICAgICAgIC8vIC8vIOWcqG5vZGXkuIrliJvlu7rmkYTlvbHmnLpcclxuICAgICAgICAvLyB0aGlzLmNhbWVyYSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKTtcclxuICAgICAgICAvLyAvLyDkuI3muLLmn5MweDEw55qEY3VsbGluZ01hc2vlr7nosaFcclxuICAgICAgICAvLyAvLyB0aGlzLmNhbWVyYS5jdWxsaW5nTWFzayA9IDB4ZmZmZmZmZmYgXiAweDEwMDAwMDAwO1xyXG4gICAgICAgIC8vIHRoaXMuY2FtZXJhLnRhcmdldFRleHR1cmUgPSB0aGlzLnRleHR1cmU7XHJcbiAgICAgICAgLy8gLy8g5YWz6Zet5pGE5b2x5py677yM5ZCm5YiZ5q+P5LiA5bin5a6D5Lya6Ieq5Yqo6L+b6KGM5riy5p+TXHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyAvLyDlsIboh6rouqvkuI7lv73nlaXlr7nosaHmjpLpmaTmuLLmn5NcclxuICAgICAgICAvLyB0aGlzLm5vZGVbJ19jdWxsaW5nTWFzayddID0gMHgxMDAwMDAwMDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGVbJ19jdWxsaW5nTWFzayddKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlnbm9yZWROb2Rlcyk7XHJcbiAgICAgICAgLy8gdGhpcy5pZ25vcmVkTm9kZXMubWFwKChub2RlKSA9PiAobm9kZVsnX2N1bGxpbmdNYXNrJ10gPSAweDEwMDAwMDAwKSk7XHJcblxyXG4gICAgICAgIC8vIC8vIOWIm+W7uuS4gOS4qnNwcml0Zee7hOS7tu+8jOeUseWFtui/m+ihjOa4suafk1xyXG4gICAgICAgIC8vIHRoaXMuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcclxuICAgICAgICAvLyB0aGlzLnNwcml0ZSA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAvLyB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlRnJhbWU7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc3ByaXRlLnR5cGUgPSBjYy5TcHJpdGUuVHlwZS5TSU1QTEU7XHJcbiAgICAgICAgLy8gdGhpcy5zcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgICAgIC8vIHRoaXMuc3ByaXRlLnRyaW0gPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjM1XHJcblxyXG4gICAgICAgIC8vIHRoaXMubWF0ZXJpYWwuc2V0UHJvcGVydHkoJ2JpZ2h0bmVzcycsIHRoaXMuYmlnaHRuZXNzKTtcclxuICAgICAgICAvLyB0aGlzLm1hdGVyaWFsLnNldFByb3BlcnR5KCdibHVyQW1vdW50JywgdGhpcy5ibHVyQW1vdW50KTtcclxuXHJcbiAgICAgICAgLy8gLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIC8vIHRoaXMuc3ByaXRlLnNldE1hdGVyaWFsKDAsIHRoaXMubWF0ZXJpYWwpO1xyXG4gICAgICAgIC8vIHRoaXMuYmxvY2suZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAvLyB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuT3BlbkJ1ZmVyLCB0aGlzLm9wZW5SZW5kZXIpXHJcbiAgICAvLyB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuQ2xvc2VCdWZlciwgdGhpcy5jbG9zZVJlbmRlcilcclxuICAgICAgICB0aGlzLmhpZGUoKVxyXG5cclxuICAgIH1cclxuICAgIG9wZW5SZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ibG9jay5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TdG9wQ2xvdWQpXHJcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAvLyAudG8oMC4xLCB7IHNjYWxlWDogMSwgc2NhbGVZOiAtMSB9LCB7IGVhc2luZzogRWFzaW5nLmV4cG9PdXQgfSlcclxuICAgICAgICAgICAgLy8gLnRvKDIsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBFYXNpbmcuZXhwb091dCB9KVxyXG4gICAgICAgICAgICAvLyAuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuaXNSZW5kZXIgPSB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMuc25hcHNob3QoKVxyXG4gICAgfVxyXG4gICAgY2xvc2VSZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ibG9jay5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU3RhcnRDbG91ZClcclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC8vIC50bygwLjUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IEVhc2luZy5iYWNrT3V0IH0pXHJcbiAgICAgICAgICAgIC8vIC50bygwLjUsIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogRWFzaW5nLmJhY2tPdXQgfSlcclxuICAgICAgICAgICAgLy8gLnN0YXJ0KClcclxuICAgICAgICAvLyB0aGlzLmlzUmVuZGVyID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc25hcHNob3QoKSB7XHJcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKTtcclxuXHJcbiAgICAgICAgLy8g5aSn5bCP5Y+R55Sf5pS55Y+Y77yM6YeN5paw6K6+572udGV4dHVyZeWkp+Wwj1xyXG4gICAgICAgIGlmIChzaXplLndpZHRoICE9PSB0aGlzLl9sYXN0U2l6ZS53aWR0aCB8fCBzaXplLmhlaWdodCAhPT0gdGhpcy5fbGFzdFNpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUuaW5pdFdpdGhTaXplKHRoaXMubm9kZS53aWR0aCwgdGhpcy5ub2RlLmhlaWdodCwgY2MuZ2Z4LlJCX0ZNVF9TOCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnRhcmdldFRleHR1cmUgPSB0aGlzLnRleHR1cmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9sYXN0U2l6ZS53aWR0aCA9IHNpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5fbGFzdFNpemUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIOaJi+WKqOa4suafk+aRhOW9seacuu+8jOS/neWtmOaIquWbvlxyXG4gICAgICAgIHRoaXMuY2FtZXJhLnJlbmRlcihjYy5DYW52YXMuaW5zdGFuY2Uubm9kZSk7XHJcbiAgICAgICAgLy8g5bqU55So5Yia5Yia5oiq5Zu+55qE6LS05Zu+5Yiwc3ByaXRl6Lqr5LiK6L+b6KGM5riy5p+TXHJcbiAgICAgICAgdGhpcy5zcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHRoaXMudGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKGNjLmZpbmQoXCJDYW52YXMvTWFpbkNhbWVyYVwiKS5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKS56b29tUmF0aW8pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNSZW5kZXIpXHJcbiAgICAgICAgICAgIC8vIOavj+S4gOW4p+mDvei/m+ihjOaIquWbvuWkhOeQhu+8jOWPr+S7peaNouaIkOmcgOimgeeahOaXtuWAmeWGjeiwg+eUqO+8jOavlOi+g+ecgei1hOa6kFxyXG4gICAgICAgICAgICAvLyB0aGlzLnNuYXBzaG90KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Asset/SpriteAsset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8054pchZ1JKIhfT6VDOWEl', 'SpriteAsset');
// Script/Asset/SpriteAsset.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpriteAsset = /** @class */ (function () {
    function SpriteAsset() {
        this.typePath = "Image/";
        this.filePath = [];
    }
    SpriteAsset.prototype.loadAsset = function (_Asset) {
        var _this = this;
        this.checkAssetState = false;
        var formatArr = [];
        for (var index = 0; index < this.filePath.length; index++) {
            formatArr.push(this.typePath + this.filePath[index]);
        }
        cc.resources.load(formatArr, cc.SpriteFrame, function (err, data) {
            data.forEach(function (_Sprite) {
                _Asset.set(_Sprite.name, _Sprite);
            });
            _this.checkAssetState = true;
            console.log(_Asset);
        });
        return this;
    };
    return SpriteAsset;
}());
exports.default = new SpriteAsset();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBc3NldFxcU3ByaXRlQXNzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUFBO1FBRUksYUFBUSxHQUFXLFFBQVEsQ0FBQztRQUM1QixhQUFRLEdBQWEsRUFHcEIsQ0FBQztJQWtCTixDQUFDO0lBakJHLCtCQUFTLEdBQVQsVUFBVSxNQUF3QjtRQUFsQyxpQkFlQztRQWRHLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFBO1FBQzVCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQTtRQUNsQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDdkQsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtTQUN2RDtRQUNELEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsR0FBRyxFQUFFLElBQTJCO1lBQzFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUNoQixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUE7WUFDckMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFBO1FBRUYsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBQ0Qsa0JBQWUsSUFBSSxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jbGFzcyBTcHJpdGVBc3NldCB7XHJcbiAgICBjaGVja0Fzc2V0U3RhdGU6IGJvb2xlYW47XHJcbiAgICB0eXBlUGF0aDogc3RyaW5nID0gXCJJbWFnZS9cIjtcclxuICAgIGZpbGVQYXRoOiBzdHJpbmdbXSA9IFtcclxuXHJcblxyXG4gICAgXTtcclxuICAgIGxvYWRBc3NldChfQXNzZXQ6IE1hcDxzdHJpbmcsIGFueT4pIHtcclxuICAgICAgICB0aGlzLmNoZWNrQXNzZXRTdGF0ZSA9IGZhbHNlXHJcbiAgICAgICAgbGV0IGZvcm1hdEFyciA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZmlsZVBhdGgubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdEFyci5wdXNoKHRoaXMudHlwZVBhdGggKyB0aGlzLmZpbGVQYXRoW2luZGV4XSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoZm9ybWF0QXJyLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgZGF0YTogQXJyYXk8Y2MuU3ByaXRlRnJhbWU+KSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChfU3ByaXRlID0+IHtcclxuICAgICAgICAgICAgICAgIF9Bc3NldC5zZXQoX1Nwcml0ZS5uYW1lLCBfU3ByaXRlKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0Fzc2V0U3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfQXNzZXQpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBTcHJpdGVBc3NldCgpOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Asset/PrefabAsset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1074FwOGpBcbiT5ajLnJm6', 'PrefabAsset');
// Script/Asset/PrefabAsset.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PrefabAsset = /** @class */ (function () {
    function PrefabAsset() {
    }
    return PrefabAsset;
}());
exports.default = new PrefabAsset();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBc3NldFxcUHJlZmFiQXNzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUFBO0lBRUEsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFDRCxrQkFBZSxJQUFJLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNsYXNzIFByZWZhYkFzc2V0IHtcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFByZWZhYkFzc2V0KCk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Asset/AssetMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3bf4b6LCLNLNIR8jRg1gFh8', 'AssetMng');
// Script/Asset/AssetMng.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimationAsset_1 = require("./AnimationAsset");
var MusicAsset_1 = require("./MusicAsset");
var SpriteAsset_1 = require("./SpriteAsset");
var SpriteAtlasAsset_1 = require("./SpriteAtlasAsset");
var AssetMng = /** @class */ (function () {
    function AssetMng() {
        this.data_SprtieAtlas = new Map();
        this.data_Sprtie = new Map();
        this.data_Music = new Map();
        this.data_Animation = new Map();
        this.AllAssetClass = [];
    }
    AssetMng.prototype.startLoad = function () {
        this.AllAssetClass.push(SpriteAtlasAsset_1.default.loadAsset(this.data_SprtieAtlas));
        this.AllAssetClass.push(SpriteAsset_1.default.loadAsset(this.data_Sprtie));
        this.AllAssetClass.push(MusicAsset_1.default.loadAsset(this.data_Music));
        this.AllAssetClass.push(AnimationAsset_1.default.loadAsset(this.data_Animation));
    };
    AssetMng.prototype.checkState = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var repet = setInterval(function () {
                var check = true;
                _this.AllAssetClass.forEach(function (_AssetClass) {
                    if (!_AssetClass.checkAssetState)
                        return check = false;
                });
                if (check) {
                    clearInterval(repet);
                    resolve();
                }
            }, 500);
        });
    };
    return AssetMng;
}());
exports.default = new AssetMng();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBc3NldFxcQXNzZXRNbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxtREFBOEM7QUFDOUMsMkNBQXNDO0FBQ3RDLDZDQUF3QztBQUN4Qyx1REFBa0Q7QUFFbEQ7SUFBQTtRQUNJLHFCQUFnQixHQUFxQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQy9DLGdCQUFXLEdBQXFCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUMsZUFBVSxHQUFxQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3pDLG1CQUFjLEdBQXFCLElBQUksR0FBRyxFQUFFLENBQUM7UUFFN0Msa0JBQWEsR0FBZSxFQUFFLENBQUE7SUF1QmxDLENBQUM7SUF0QkcsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLDBCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHFCQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHdCQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQUEsaUJBYUM7UUFaRyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBaUI7WUFDdkMsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDO2dCQUNwQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsV0FBVztvQkFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlO3dCQUFFLE9BQU8sS0FBSyxHQUFHLEtBQUssQ0FBQTtnQkFDMUQsQ0FBQyxDQUFDLENBQUE7Z0JBQ0YsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixPQUFPLEVBQUUsQ0FBQztpQkFDYjtZQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNYLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVMLGVBQUM7QUFBRCxDQTdCQSxBQTZCQyxJQUFBO0FBQ0Qsa0JBQWUsSUFBSSxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgSUFzc2V0IGZyb20gXCIuLi9JbnRlcmZhY2UvSUFzc2V0XCI7XHJcbmltcG9ydCBBbmltYXRpb25Bc3NldCBmcm9tIFwiLi9BbmltYXRpb25Bc3NldFwiO1xyXG5pbXBvcnQgTXVzaWNBc3NldCBmcm9tIFwiLi9NdXNpY0Fzc2V0XCI7XHJcbmltcG9ydCBTcHJpdGVBc3NldCBmcm9tIFwiLi9TcHJpdGVBc3NldFwiO1xyXG5pbXBvcnQgU3ByaXRlQXRsYXNBc3NldCBmcm9tIFwiLi9TcHJpdGVBdGxhc0Fzc2V0XCI7XHJcblxyXG5jbGFzcyBBc3NldE1uZyB7XHJcbiAgICBkYXRhX1NwcnRpZUF0bGFzOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcCgpO1xyXG4gICAgZGF0YV9TcHJ0aWU6IE1hcDxzdHJpbmcsIGFueT4gPSBuZXcgTWFwKCk7XHJcbiAgICBkYXRhX011c2ljOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcCgpO1xyXG4gICAgZGF0YV9BbmltYXRpb246IE1hcDxzdHJpbmcsIGFueT4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgQWxsQXNzZXRDbGFzczogQXJyYXk8YW55PiA9IFtdXHJcbiAgICBzdGFydExvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5BbGxBc3NldENsYXNzLnB1c2goU3ByaXRlQXRsYXNBc3NldC5sb2FkQXNzZXQodGhpcy5kYXRhX1NwcnRpZUF0bGFzKSk7XHJcbiAgICAgICAgdGhpcy5BbGxBc3NldENsYXNzLnB1c2goU3ByaXRlQXNzZXQubG9hZEFzc2V0KHRoaXMuZGF0YV9TcHJ0aWUpKTtcclxuICAgICAgICB0aGlzLkFsbEFzc2V0Q2xhc3MucHVzaChNdXNpY0Fzc2V0LmxvYWRBc3NldCh0aGlzLmRhdGFfTXVzaWMpKTtcclxuICAgICAgICB0aGlzLkFsbEFzc2V0Q2xhc3MucHVzaChBbmltYXRpb25Bc3NldC5sb2FkQXNzZXQodGhpcy5kYXRhX0FuaW1hdGlvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrU3RhdGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVwZXQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BbGxBc3NldENsYXNzLmZvckVhY2goX0Fzc2V0Q2xhc3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghX0Fzc2V0Q2xhc3MuY2hlY2tBc3NldFN0YXRlKSByZXR1cm4gY2hlY2sgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmIChjaGVjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocmVwZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBc3NldE1uZygpOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Asset/SpriteAtlasAsset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31e45KA+8xHI5Rn2Ztjff8f', 'SpriteAtlasAsset');
// Script/Asset/SpriteAtlasAsset.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpriteAtlasAsset = /** @class */ (function () {
    function SpriteAtlasAsset() {
        this.typePath = "Image/";
        this.filePath = [
            "Station/Station",
            "Station/Station_Gary",
            "Station/UIBtnStatoin",
            "Station/StationInfo1",
            "Station/StationInfo2",
            "Bear",
            "MapPoint",
            "Cloud",
            "TrainType",
            "Feature",
            "Setting",
            "Props/GetProps",
            "Props/Props",
        ];
    }
    SpriteAtlasAsset.prototype.loadAsset = function (_Asset) {
        var _this = this;
        this.checkAssetState = false;
        var formatArr = [];
        for (var index = 0; index < this.filePath.length; index++) {
            formatArr.push(this.typePath + this.filePath[index]);
        }
        cc.resources.load(formatArr, cc.SpriteAtlas, function (err, data) {
            data.forEach(function (_SpriteAtlas) {
                _SpriteAtlas.getSpriteFrames().forEach(function (_spriteFrame) {
                    // console.log(_spriteFrame);
                    _Asset.set(_spriteFrame.name, _spriteFrame);
                });
            });
            _this.checkAssetState = true;
        });
        return this;
    };
    return SpriteAtlasAsset;
}());
exports.default = new SpriteAtlasAsset();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBc3NldFxcU3ByaXRlQXRsYXNBc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0lBQUE7UUFFSSxhQUFRLEdBQVcsUUFBUSxDQUFDO1FBQzVCLGFBQVEsR0FBYTtZQUNqQixpQkFBaUI7WUFDakIsc0JBQXNCO1lBQ3RCLHNCQUFzQjtZQUN0QixzQkFBc0I7WUFDdEIsc0JBQXNCO1lBQ3RCLE1BQU07WUFDTixVQUFVO1lBQ1YsT0FBTztZQUNQLFdBQVc7WUFDWCxTQUFTO1lBQ1QsU0FBUztZQUNULGdCQUFnQjtZQUNoQixhQUFhO1NBQ2hCLENBQUM7SUFtQk4sQ0FBQztJQWxCRyxvQ0FBUyxHQUFULFVBQVUsTUFBd0I7UUFBbEMsaUJBZ0JDO1FBZkcsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUE7UUFDNUIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFBO1FBQ2xCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN2RCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1NBQ3ZEO1FBQ0QsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBMkI7WUFDMUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFlBQVk7Z0JBQ3JCLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQSxZQUFZO29CQUMvQyw2QkFBNkI7b0JBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQTtnQkFDL0MsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRUwsdUJBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBO0FBQ0Qsa0JBQWUsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElBc3NldCBmcm9tIFwiLi4vSW50ZXJmYWNlL0lBc3NldFwiO1xyXG5cclxuXHJcbmNsYXNzIFNwcml0ZUF0bGFzQXNzZXQgaW1wbGVtZW50cyBJQXNzZXQge1xyXG4gICAgY2hlY2tBc3NldFN0YXRlOiBib29sZWFuO1xyXG4gICAgdHlwZVBhdGg6IHN0cmluZyA9IFwiSW1hZ2UvXCI7XHJcbiAgICBmaWxlUGF0aDogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgXCJTdGF0aW9uL1N0YXRpb25cIixcclxuICAgICAgICBcIlN0YXRpb24vU3RhdGlvbl9HYXJ5XCIsXHJcbiAgICAgICAgXCJTdGF0aW9uL1VJQnRuU3RhdG9pblwiLFxyXG4gICAgICAgIFwiU3RhdGlvbi9TdGF0aW9uSW5mbzFcIixcclxuICAgICAgICBcIlN0YXRpb24vU3RhdGlvbkluZm8yXCIsXHJcbiAgICAgICAgXCJCZWFyXCIsXHJcbiAgICAgICAgXCJNYXBQb2ludFwiLFxyXG4gICAgICAgIFwiQ2xvdWRcIixcclxuICAgICAgICBcIlRyYWluVHlwZVwiLFxyXG4gICAgICAgIFwiRmVhdHVyZVwiLFxyXG4gICAgICAgIFwiU2V0dGluZ1wiLFxyXG4gICAgICAgIFwiUHJvcHMvR2V0UHJvcHNcIixcclxuICAgICAgICBcIlByb3BzL1Byb3BzXCIsXHJcbiAgICBdO1xyXG4gICAgbG9hZEFzc2V0KF9Bc3NldDogTWFwPHN0cmluZywgYW55Pikge1xyXG4gICAgICAgIHRoaXMuY2hlY2tBc3NldFN0YXRlID0gZmFsc2VcclxuICAgICAgICBsZXQgZm9ybWF0QXJyID0gW11cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5maWxlUGF0aC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgZm9ybWF0QXJyLnB1c2godGhpcy50eXBlUGF0aCArIHRoaXMuZmlsZVBhdGhbaW5kZXhdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChmb3JtYXRBcnIsIGNjLlNwcml0ZUF0bGFzLCAoZXJyLCBkYXRhOiBBcnJheTxjYy5TcHJpdGVBdGxhcz4pID0+IHtcclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKF9TcHJpdGVBdGxhcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBfU3ByaXRlQXRsYXMuZ2V0U3ByaXRlRnJhbWVzKCkuZm9yRWFjaChfc3ByaXRlRnJhbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKF9zcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX0Fzc2V0LnNldChfc3ByaXRlRnJhbWUubmFtZSwgX3Nwcml0ZUZyYW1lKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBc3NldFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBTcHJpdGVBdGxhc0Fzc2V0KCk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Asset/AnimationAsset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4314eqYiRPAo4SFg4VORdJ', 'AnimationAsset');
// Script/Asset/AnimationAsset.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimationbAsset = /** @class */ (function () {
    function AnimationbAsset() {
        this.typePath = "Animation";
        this.filePath = [];
    }
    AnimationbAsset.prototype.loadAsset = function (_Asset) {
        var _this = this;
        this.checkAssetState = false;
        cc.resources.loadDir(this.typePath, cc.AnimationClip, function (err, data) {
            data.forEach(function (_animationClip) {
                _Asset.set(_animationClip.name, _animationClip);
            });
            _this.checkAssetState = true;
        });
        return this;
    };
    return AnimationbAsset;
}());
exports.default = new AnimationbAsset();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBc3NldFxcQW5pbWF0aW9uQXNzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO1FBRUksYUFBUSxHQUFXLFdBQVcsQ0FBQztRQUMvQixhQUFRLEdBQWEsRUFFcEIsQ0FBQztJQVlOLENBQUM7SUFYRyxtQ0FBUyxHQUFULFVBQVUsTUFBd0I7UUFBbEMsaUJBU0M7UUFSRyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQTtRQUM1QixFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBNkI7WUFDckYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLGNBQWM7Z0JBQ3ZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQTtZQUNuRCxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBQ0Qsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFuaW1hdGlvbmJBc3NldCB7XHJcbiAgICBjaGVja0Fzc2V0U3RhdGU6IGJvb2xlYW47XHJcbiAgICB0eXBlUGF0aDogc3RyaW5nID0gXCJBbmltYXRpb25cIjtcclxuICAgIGZpbGVQYXRoOiBzdHJpbmdbXSA9IFtcclxuXHJcbiAgICBdO1xyXG4gICAgbG9hZEFzc2V0KF9Bc3NldDogTWFwPHN0cmluZywgYW55Pikge1xyXG4gICAgICAgIHRoaXMuY2hlY2tBc3NldFN0YXRlID0gZmFsc2VcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZERpcih0aGlzLnR5cGVQYXRoLCBjYy5BbmltYXRpb25DbGlwLCAoZXJyLCBkYXRhOiBBcnJheTxjYy5BbmltYXRpb25DbGlwPikgPT4ge1xyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goX2FuaW1hdGlvbkNsaXAgPT4ge1xyXG4gICAgICAgICAgICAgICAgX0Fzc2V0LnNldChfYW5pbWF0aW9uQ2xpcC5uYW1lLCBfYW5pbWF0aW9uQ2xpcClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBc3NldFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBbmltYXRpb25iQXNzZXQoKTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Panel_AniPath.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f2659A28NBLKnfbP9wk+qH', 'Panel_AniPath');
// Script/Class/Panel_AniPath.ts

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
var Panel_AniPath = /** @class */ (function (_super) {
    __extends(Panel_AniPath, _super);
    function Panel_AniPath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel_AniPath.prototype.onLoad = function () {
        this.aPath = cc.find("PathAnimation", this.node).getComponent(cc.Animation);
        this.TWPath = cc.find("TaiwanPath", this.node).getComponent(cc.Animation);
    };
    return Panel_AniPath;
}(ComponentBase_1.default));
exports.default = Panel_AniPath;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcUGFuZWxfQW5pUGF0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBdUQ7QUFFdkQ7SUFBMkMsaUNBQWE7SUFBeEQ7O0lBT0EsQ0FBQztJQUphLDhCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFDTCxvQkFBQztBQUFELENBUEEsQUFPQyxDQVAwQyx1QkFBYSxHQU92RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxfQW5pUGF0aCBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgcHVibGljIGFQYXRoOiBjYy5BbmltYXRpb24gO1xyXG4gICAgcHVibGljIFRXUGF0aDpjYy5BbmltYXRpb24gO1xyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFQYXRoPSBjYy5maW5kKFwiUGF0aEFuaW1hdGlvblwiLHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdGhpcy5UV1BhdGggPSBjYy5maW5kKFwiVGFpd2FuUGF0aFwiLHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Panel_Bear.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b2f2VJSTtNSakKsKrk6rXs', 'Panel_Bear');
// Script/Class/Panel_Bear.ts

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
var ComponentBase_1 = require("../Data/base/ComponentBase");
var GameState_1 = require("../Enum/GameState");
var GameModle_1 = require("../GameModle");
var BearState;
(function (BearState) {
    BearState["Green"] = "Green";
    BearState["Red"] = "Red";
})(BearState || (BearState = {}));
var Panel_Bear = /** @class */ (function (_super) {
    __extends(Panel_Bear, _super);
    function Panel_Bear() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tempDT = 0;
        _this.targetDT = 3;
        return _this;
    }
    Panel_Bear.prototype.onLoad = function () {
        this.sprite = cc.find("sprite", this.node).getComponent(cc.Sprite);
    };
    Panel_Bear.prototype.init = function () {
        this.nowState = BearState.Red;
        this.sprite.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Bear_" + this.nowState);
        console.log(AssetMng_1.default.data_SprtieAtlas.get("Bear_" + this.nowState));
    };
    Panel_Bear.prototype.update = function (dt) {
        if (GameModle_1.default.gameState == GameState_1.GameState.Start) {
            this.tempDT += dt;
            if (this.tempDT > this.targetDT) {
                this.nowState = this.nowState == BearState.Red ? BearState.Green : BearState.Red;
                this.sprite.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Bear_" + this.nowState);
                this.tempDT = 0;
            }
        }
    };
    return Panel_Bear;
}(ComponentBase_1.default));
exports.default = Panel_Bear;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcUGFuZWxfQmVhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUM7QUFDekMsNERBQXVEO0FBRXZELCtDQUE4QztBQUM5QywwQ0FBcUM7QUFDckMsSUFBSyxTQUdKO0FBSEQsV0FBSyxTQUFTO0lBQ1YsNEJBQWUsQ0FBQTtJQUNmLHdCQUFXLENBQUE7QUFDZixDQUFDLEVBSEksU0FBUyxLQUFULFNBQVMsUUFHYjtBQUNEO0lBQXdDLDhCQUFhO0lBQXJEO1FBQUEscUVBeUJDO1FBdEJHLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsY0FBUSxHQUFXLENBQUMsQ0FBQTs7SUFxQnhCLENBQUM7SUFuQmEsMkJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRXRFLENBQUM7SUFDRCx5QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLGtCQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNTLDJCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxtQkFBUyxDQUFDLFNBQVMsSUFBSSxxQkFBUyxDQUFDLEtBQUssRUFBRTtZQUN4QyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQTtZQUNqQixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUE7Z0JBQ2hGLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLGtCQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQ2hGLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO2FBQ2xCO1NBQ0o7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQXpCQSxBQXlCQyxDQXpCdUMsdUJBQWEsR0F5QnBEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0TW5nIGZyb20gJy4uL0Fzc2V0L0Fzc2V0TW5nJztcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSAnLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2UnO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tICcuLi9FbnVtL0dhbWVFdmVudCc7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gJy4uL0VudW0vR2FtZVN0YXRlJztcclxuaW1wb3J0IEdhbWVNb2RsZSBmcm9tICcuLi9HYW1lTW9kbGUnO1xyXG5lbnVtIEJlYXJTdGF0ZSB7XHJcbiAgICBHcmVlbiA9IFwiR3JlZW5cIixcclxuICAgIFJlZCA9IFwiUmVkXCIsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxfQmVhciBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgc3ByaXRlOiBjYy5TcHJpdGVcclxuICAgIG5vd1N0YXRlOiBCZWFyU3RhdGU7XHJcbiAgICB0ZW1wRFQ6IG51bWJlciA9IDA7XHJcbiAgICB0YXJnZXREVDogbnVtYmVyID0gM1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBjYy5maW5kKFwic3ByaXRlXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuXHJcbiAgICB9XHJcbiAgICBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm93U3RhdGUgPSBCZWFyU3RhdGUuUmVkXHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIkJlYXJfXCIgKyB0aGlzLm5vd1N0YXRlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiQmVhcl9cIiArIHRoaXMubm93U3RhdGUpKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChHYW1lTW9kbGUuZ2FtZVN0YXRlID09IEdhbWVTdGF0ZS5TdGFydCkge1xyXG4gICAgICAgICAgICB0aGlzLnRlbXBEVCArPSBkdFxyXG4gICAgICAgICAgICBpZiAodGhpcy50ZW1wRFQgPiB0aGlzLnRhcmdldERUKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1N0YXRlID0gdGhpcy5ub3dTdGF0ZSA9PSBCZWFyU3RhdGUuUmVkID8gQmVhclN0YXRlLkdyZWVuIDogQmVhclN0YXRlLlJlZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIkJlYXJfXCIgKyB0aGlzLm5vd1N0YXRlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wRFQgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Panel_Teaching.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3782fOVeKtAaLdPjwG41Acb', 'Panel_Teaching');
// Script/Class/Panel_Teaching.ts

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
var GameEvent_1 = require("../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Panel_Teaching = /** @class */ (function (_super) {
    __extends(Panel_Teaching, _super);
    function Panel_Teaching() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel_Teaching.prototype.onLoad = function () {
        this.info0 = cc.find('Info0', this.node);
        this.info1 = cc.find('Info1', this.node);
        this.info2 = cc.find('Info2', this.node);
        this.info3 = cc.find('Info3', this.node);
        ButtonMng_1.default.addEvent(this.node, "Panel_Teaching", "eventControll", cc.find("Btn_Close", this.info0).getComponent(cc.Button), "0");
        ButtonMng_1.default.addEvent(this.node, "Panel_Teaching", "eventControll", cc.find("Btn_Close", this.info1).getComponent(cc.Button), "1");
        ButtonMng_1.default.addEvent(this.node, "Panel_Teaching", "eventControll", cc.find("Btn_Close", this.info2).getComponent(cc.Button), "2");
        ButtonMng_1.default.addEvent(this.node, "Panel_Teaching", "eventControll", cc.find("Btn_Close", this.info3).getComponent(cc.Button), "3");
        this.info0.active = false;
        this.info1.active = false;
        this.info2.active = false;
        this.info3.active = false;
        this.defaultReset();
    };
    Panel_Teaching.prototype.eventControll = function (e, _customEventData) {
        switch (Number(_customEventData)) {
            case 0:
                this.info0.active = false;
                this.info1.active = true;
                break;
            case 1:
                this.info1.active = false;
                this.info2.active = true;
                break;
            case 2:
                this.info2.active = false;
                this.info3.active = true;
                break;
            case 3:
                this.info3.active = false;
                this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndTeaching);
                break;
        }
    };
    Panel_Teaching = __decorate([
        ccclass
    ], Panel_Teaching);
    return Panel_Teaching;
}(ComponentBase_1.default));
exports.default = Panel_Teaching;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcUGFuZWxfVGVhY2hpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQStDO0FBQy9DLDREQUF1RDtBQUN2RCx5Q0FBMEM7QUFDMUMsK0NBQThDO0FBQ3hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFhO0lBQXpEOztJQTBDQSxDQUFDO0lBckNhLCtCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFeEMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDOUgsbUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDOUgsbUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDOUgsbUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDOUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBQ0Qsc0NBQWEsR0FBYixVQUFjLENBQVcsRUFBRSxnQkFBd0I7UUFDL0MsUUFBUSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUM5QixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO2dCQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQ3hCLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO2dCQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQ3hCLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO2dCQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQ3hCLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO2dCQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFDLGlCQUFRLENBQUMsV0FBVyxDQUFDLENBQUE7Z0JBQzFELE1BQU07U0FFYjtJQUNMLENBQUM7SUF6Q2dCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0EwQ2xDO0lBQUQscUJBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQzJDLHVCQUFhLEdBMEN4RDtrQkExQ29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uTW5nIGZyb20gJy4uL0RhdGEvYmFzZS9CdXR0b25NbmcnO1xyXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tICcuLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZSc7XHJcbmltcG9ydCB7IENvbW1hbW5kIH0gZnJvbSAnLi4vRW51bS9Db21tYWQnO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tICcuLi9FbnVtL0dhbWVFdmVudCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbF9UZWFjaGluZyBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgaW5mbzA6IGNjLk5vZGVcclxuICAgIGluZm8xOiBjYy5Ob2RlXHJcbiAgICBpbmZvMjogY2MuTm9kZVxyXG4gICAgaW5mbzM6IGNjLk5vZGVcclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbmZvMCA9IGNjLmZpbmQoJ0luZm8wJywgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuaW5mbzEgPSBjYy5maW5kKCdJbmZvMScsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmluZm8yID0gY2MuZmluZCgnSW5mbzInLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5pbmZvMyA9IGNjLmZpbmQoJ0luZm8zJywgdGhpcy5ub2RlKVxyXG5cclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIlBhbmVsX1RlYWNoaW5nXCIsIFwiZXZlbnRDb250cm9sbFwiLCBjYy5maW5kKFwiQnRuX0Nsb3NlXCIsdGhpcy5pbmZvMCkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbiksIFwiMFwiKVxyXG4gICAgICAgIEJ1dHRvbk1uZy5hZGRFdmVudCh0aGlzLm5vZGUsIFwiUGFuZWxfVGVhY2hpbmdcIiwgXCJldmVudENvbnRyb2xsXCIsIGNjLmZpbmQoXCJCdG5fQ2xvc2VcIix0aGlzLmluZm8xKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSwgXCIxXCIpXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJQYW5lbF9UZWFjaGluZ1wiLCBcImV2ZW50Q29udHJvbGxcIiwgY2MuZmluZChcIkJ0bl9DbG9zZVwiLHRoaXMuaW5mbzIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLCBcIjJcIilcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIlBhbmVsX1RlYWNoaW5nXCIsIFwiZXZlbnRDb250cm9sbFwiLCBjYy5maW5kKFwiQnRuX0Nsb3NlXCIsdGhpcy5pbmZvMykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbiksIFwiM1wiKVxyXG4gICAgICAgIHRoaXMuaW5mbzAuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmluZm8xLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pbmZvMi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaW5mbzMuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmRlZmF1bHRSZXNldCgpXHJcbiAgICB9XHJcbiAgICBldmVudENvbnRyb2xsKGU6IGNjLkV2ZW50LCBfY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBzd2l0Y2ggKE51bWJlcihfY3VzdG9tRXZlbnREYXRhKSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm8wLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm8xLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm8xLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm8yLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm8yLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm8zLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm8zLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsQ29tbWFtbmQuRW5kVGVhY2hpbmcpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
        console.log("HIHIHIHI");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcUGFuZWxfQnVmZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQXVEO0FBQ3ZELCtDQUE4QztBQUU5QztJQUF5QywrQkFBYTtJQUF0RDs7SUFvQkEsQ0FBQztJQWxCYSw0QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQTtJQUMzQixDQUFDO0lBQ0QsZ0NBQVUsR0FBVjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBRXhCLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBQ0QsaUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUV6QixJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsQ0FwQndDLHVCQUFhLEdBb0JyRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gJy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlJztcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSAnLi4vRW51bS9HYW1lRXZlbnQnO1xyXG5pbXBvcnQgQnVmZXJDbGFzcyBmcm9tICcuLi9TaGFkZXJDYW1lcmEvQnVmZXJDbGFzcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsX0J1ZmVyIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICBidWZlcjogY2MuTm9kZVxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJ1ZmVyID0gY2MuZmluZChcIkJ1ZmVyXCIsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuT3BlbkJ1ZmVyLCB0aGlzLm9wZW5SZW5kZXIpXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoR2FtZUV2ZW50LkNsb3NlQnVmZXIsIHRoaXMuY2xvc2VSZW5kZXIpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTVcclxuICAgIH1cclxuICAgIG9wZW5SZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJISUhJSElISVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5idWZlci5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TdG9wQ2xvdWQpXHJcbiAgICB9XHJcbiAgICBjbG9zZVJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmJ1ZmVyLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TdGFydENsb3VkKVxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Panel_Version.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc759S6ZVFKGpu6TVIO4hu9', 'Panel_Version');
// Script/Class/Panel_Version.ts

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
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.onLoad = function () {
        this.label = cc.find("label", this.node).getComponent(cc.Label);
    };
    default_1.prototype.setVersion = function (str) {
        this.label.string = str;
    };
    return default_1;
}(ComponentBase_1.default));
exports.default = default_1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcUGFuZWxfVmVyc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBdUQ7QUFDdkQ7SUFBNkIsNkJBQWE7SUFBMUM7O0lBVUEsQ0FBQztJQVBhLDBCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0lBQ0QsOEJBQVUsR0FBVixVQUFXLEdBQVU7UUFFakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO0lBQzNCLENBQUM7SUFDTCxnQkFBQztBQUFELENBVkEsQUFVQyxDQVY0Qix1QkFBYSxHQVV6QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gJy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuXHJcbiAgICBsYWJlbDogY2MuTGFiZWxcclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IGNjLmZpbmQoXCJsYWJlbFwiLHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgfVxyXG4gICAgc2V0VmVyc2lvbihzdHI6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gc3RyXHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Message/EndGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b93a8ws4OpOf4SgGe7Z8w95', 'EndGame');
// Script/Class/Message/EndGame.ts

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
var GameEvent_1 = require("../../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EndGame = /** @class */ (function (_super) {
    __extends(EndGame, _super);
    function EndGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EndGame.prototype.onLoad = function () {
        this.animation_Bear = cc.find("Mask/animation_Bear", this.node).getComponent(cc.Animation);
        this.btn_GoLottery = cc.find("Btn_GoLottery", this.node).getComponent(cc.Button);
        this.btn_Again = cc.find("Btn_Again", this.node).getComponent(cc.Button);
        this.defaultReset();
    };
    EndGame.prototype.start = function () {
        ButtonMng_1.default.addEvent(this.node, "EndGame", "sendEvent", this.btn_GoLottery, "0");
        ButtonMng_1.default.addEvent(this.node, "EndGame", "sendEvent", this.btn_Again, "1");
    };
    EndGame.prototype.playBearSprite = function (number) {
        if (number == 0)
            this.node.setPosition(-3.103, -1.858);
        else
            this.node.setPosition(32.351, -1.858);
        this.animation_Bear.play("Bear_Train" + number);
    };
    EndGame.prototype.sendEvent = function (e, _customEventData) {
        switch (_customEventData) {
            case "0": //遊戲結束去抽獎
                this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.GoLottery);
                break;
            case "1": //再玩一次
                this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.AgainGame);
                break;
        }
    };
    EndGame = __decorate([
        ccclass
    ], EndGame);
    return EndGame;
}(ComponentBase_1.default));
exports.default = EndGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcRW5kR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFDbEQsK0RBQTBEO0FBQzFELDRDQUE2QztBQUM3QyxrREFBaUQ7QUFDM0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQWE7SUFBbEQ7O0lBK0JBLENBQUM7SUEzQmEsd0JBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDMUYsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNoRixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBQ1MsdUJBQUssR0FBZjtRQUNJLG1CQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzlFLG1CQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQzlFLENBQUM7SUFDRCxnQ0FBYyxHQUFkLFVBQWUsTUFBYztRQUN6QixJQUFJLE1BQU0sSUFBSSxDQUFDO1lBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQTs7WUFFckMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFDRCwyQkFBUyxHQUFULFVBQVUsQ0FBVyxFQUFFLGdCQUF3QjtRQUMzQyxRQUFRLGdCQUFnQixFQUFFO1lBQ3RCLEtBQUssR0FBRyxFQUFDLFNBQVM7Z0JBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxpQkFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUN6RCxNQUFNO1lBQ1YsS0FBSyxHQUFHLEVBQUMsTUFBTTtnQkFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLGlCQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7Z0JBQ3pELE1BQU07U0FDYjtJQUNMLENBQUM7SUE5QmdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0ErQjNCO0lBQUQsY0FBQztDQS9CRCxBQStCQyxDQS9Cb0MsdUJBQWEsR0ErQmpEO2tCQS9Cb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b25NbmcgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0J1dHRvbk1uZyc7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlJztcclxuaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tICcuLi8uLi9FbnVtL0NvbW1hZCc7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gJy4uLy4uL0VudW0vR2FtZUV2ZW50JztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZEdhbWUgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGFuaW1hdGlvbl9CZWFyOiBjYy5BbmltYXRpb247XHJcbiAgICBidG5fQWdhaW46IGNjLkJ1dHRvbjtcclxuICAgIGJ0bl9Hb0xvdHRlcnk6IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25fQmVhciA9IGNjLmZpbmQoXCJNYXNrL2FuaW1hdGlvbl9CZWFyXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICB0aGlzLmJ0bl9Hb0xvdHRlcnkgPSBjYy5maW5kKFwiQnRuX0dvTG90dGVyeVwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5idG5fQWdhaW4gPSBjYy5maW5kKFwiQnRuX0FnYWluXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLmRlZmF1bHRSZXNldCgpXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJFbmRHYW1lXCIsIFwic2VuZEV2ZW50XCIsIHRoaXMuYnRuX0dvTG90dGVyeSwgXCIwXCIpXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJFbmRHYW1lXCIsIFwic2VuZEV2ZW50XCIsIHRoaXMuYnRuX0FnYWluLCBcIjFcIilcclxuICAgIH1cclxuICAgIHBsYXlCZWFyU3ByaXRlKG51bWJlcjogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKG51bWJlciA9PSAwKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oLTMuMTAzLCAtMS44NTgpXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oMzIuMzUxLCAtMS44NTgpXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25fQmVhci5wbGF5KFwiQmVhcl9UcmFpblwiICsgbnVtYmVyKVxyXG4gICAgfVxyXG4gICAgc2VuZEV2ZW50KGU6IGNjLkV2ZW50LCBfY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBzd2l0Y2ggKF9jdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICAgICAgY2FzZSBcIjBcIjovL+mBiuaIsue1kOadn+WOu+aKveeNjlxyXG4gICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5Hb0xvdHRlcnkpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjFcIjovL+WGjeeOqeS4gOasoVxyXG4gICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5BZ2FpbkdhbWUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gICAiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Mam/ManAnimation.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce494CkVG1PQKpHszqAbf7f', 'ManAnimation');
// Script/Class/Mam/ManAnimation.ts

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
var DataMan_1 = require("../../Data/DataMan");
var ManAction = /** @class */ (function (_super) {
    __extends(ManAction, _super);
    function ManAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ManAction.prototype.startGO = function () {
        if (!this.isCanGo)
            this.isCanGo = !this.isCanGo;
    };
    ManAction.prototype.stopGo = function () {
        if (this.isCanGo)
            this.isCanGo = !this.isCanGo;
    };
    ManAction.prototype.StartGO_Tween = function (_gameModle, GoCount, SayGO) {
        if (!this.gameModle)
            this.setGameModle(_gameModle);
        console.log(GoCount);
        if (GoCount == 0)
            return;
        this.nowIndex++;
        GoCount--;
        var tryData = this.gameModle.pathBezierData.get(this.nowIndex);
        if (tryData == undefined)
            this.GoLine(GoCount);
        else {
            this.GoBezier(GoCount, 0, tryData.length);
        }
    };
    ManAction.prototype.GoBezier = function (GoCount, BezierCount, len) {
        var _this = this;
        // if (BezierCount >= len) {
        //     this.StartGO(GoCount);
        //     return
        // }
        var getPosition = this.gameModle.pathBezierData.get(this.nowIndex);
        // let getPosition: cc.Vec2 = this.gameModle.pathBezierData.get(this.nowIndex)[BezierCount]
        // BezierCount++;
        console.log(getPosition);
        //起點
        // 中間點
        // 再來終點
        // console.log(getPosition[1]);
        // console.log(getPosition[0]);
        // console.log(getPosition[2]);
        cc.tween(this.nMan)
            // .to(this.TweenTime / len, { x: getPosition.x, y: getPosition.y }, { easing: dt => cc.easeCubicActionOut().easing(dt) })
            .bezierTo(1, getPosition[0], getPosition[1], getPosition[2], { easing: function (dt) { return cc.easeCubicActionOut().easing(dt); } })
            .call(function () {
            _this.StartGO_Tween(_this.gameModle, GoCount);
            // this.GoBezier(GoCount, BezierCount, len);
        })
            .start();
    };
    ManAction.prototype.GoLine = function (GoCount) {
        var _this = this;
        var getPosition = this.gameModle.pathPositionData.get(this.nowIndex);
        cc.tween(this.nMan)
            .to(this.manSpeed, { x: getPosition.x, y: getPosition.y }, { easing: function (dt) { return cc.easeCubicActionOut().easing(dt); } })
            .call(function () {
            _this.StartGO_Tween(_this.gameModle, GoCount);
        })
            .start();
    };
    // GoLine(GoCount: number) {
    //     this.getCount = GoCount;
    //     this.nowIndex++;
    //     this.getCount--;
    //     let gettry: cc.Node = Controll.instens.mapItem.get(this.nowIndex).node
    //     if (gettry == undefined) return;
    //     let getNextMap: cc.Node = Controll.instens.mapItem.get(this.nowIndex).node
    //     // let changePosition: cc.Vec3 = this.convertOtherNodeSpaceAR(getNextMap, this.node);
    //     // console.log(changePosition.x, changePosition.y);
    //     cc.tween(this.nMan)
    //         .to(1, { x: getNextMap.x, y: getNextMap.y }, { easing: dt => cc.easeCubicActionOut().easing(dt) })
    //         .start()
    // }
    ManAction.prototype.setGameModle = function (_gameModle) {
        console.log(_gameModle);
        this.gameModle = _gameModle;
    };
    return ManAction;
}(DataMan_1.default));
exports.default = ManAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWFtXFxNYW5BbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXlDO0FBR3pDO0lBQXVDLDZCQUFPO0lBQTlDOztJQThFQSxDQUFDO0lBN0VHLDJCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNwRCxDQUFDO0lBQ0QsMEJBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNuRCxDQUFDO0lBQ0QsaUNBQWEsR0FBYixVQUFjLFVBQXFCLEVBQUUsT0FBZSxFQUFFLEtBQWU7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksT0FBTyxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNmLE9BQU8sRUFBRSxDQUFDO1FBQ1YsSUFBSSxPQUFPLEdBQW1CLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDOUUsSUFBSSxPQUFPLElBQUksU0FBUztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDekM7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQzVDO0lBRUwsQ0FBQztJQUNELDRCQUFRLEdBQVIsVUFBUyxPQUFlLEVBQUUsV0FBVyxFQUFFLEdBQVc7UUFBbEQsaUJBNEJDO1FBM0JHLDRCQUE0QjtRQUM1Qiw2QkFBNkI7UUFDN0IsYUFBYTtRQUNiLElBQUk7UUFDSixJQUFJLFdBQVcsR0FBYyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRTdFLDJGQUEyRjtRQUUzRixpQkFBaUI7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixJQUFJO1FBQ0osTUFBTTtRQUNOLE9BQU87UUFDUCwrQkFBK0I7UUFDL0IsK0JBQStCO1FBQy9CLCtCQUErQjtRQUcvQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDZiwwSEFBMEg7YUFDekgsUUFBUSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFDdkQsRUFBRSxNQUFNLEVBQUUsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQWxDLENBQWtDLEVBQUUsQ0FBQzthQUN4RCxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDNUMsNENBQTRDO1FBQ2hELENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFDRCwwQkFBTSxHQUFOLFVBQU8sT0FBZTtRQUF0QixpQkFRQztRQVBHLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNwRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQWxDLENBQWtDLEVBQUUsQ0FBQzthQUMvRyxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUNELDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qiw2RUFBNkU7SUFDN0UsdUNBQXVDO0lBQ3ZDLGlGQUFpRjtJQUNqRiw0RkFBNEY7SUFDNUYsMERBQTBEO0lBRTFELDBCQUEwQjtJQUMxQiw2R0FBNkc7SUFDN0csbUJBQW1CO0lBQ25CLElBQUk7SUFDSixnQ0FBWSxHQUFaLFVBQWEsVUFBcUI7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQTtJQUMvQixDQUFDO0lBRUwsZ0JBQUM7QUFBRCxDQTlFQSxBQThFQyxDQTlFc0MsaUJBQU8sR0E4RTdDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFNYW4gZnJvbSBcIi4uLy4uL0RhdGEvRGF0YU1hblwiO1xyXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2VcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuQWN0aW9uIGV4dGVuZHMgRGF0YU1hbiB7XHJcbiAgICBzdGFydEdPKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0NhbkdvKSB0aGlzLmlzQ2FuR28gPSAhdGhpcy5pc0NhbkdvO1xyXG4gICAgfVxyXG4gICAgc3RvcEdvKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2FuR28pIHRoaXMuaXNDYW5HbyA9ICF0aGlzLmlzQ2FuR287XHJcbiAgICB9XHJcbiAgICBTdGFydEdPX1R3ZWVuKF9nYW1lTW9kbGU6IEdhbWVNb2RsZSwgR29Db3VudDogbnVtYmVyLCBTYXlHTz86IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZU1vZGxlKSB0aGlzLnNldEdhbWVNb2RsZShfZ2FtZU1vZGxlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKEdvQ291bnQpO1xyXG4gICAgICAgIGlmIChHb0NvdW50ID09IDApIHJldHVybjtcclxuICAgICAgICB0aGlzLm5vd0luZGV4KytcclxuICAgICAgICBHb0NvdW50LS07XHJcbiAgICAgICAgbGV0IHRyeURhdGE6IEFycmF5PGNjLlZlYzI+ID0gdGhpcy5nYW1lTW9kbGUucGF0aEJlemllckRhdGEuZ2V0KHRoaXMubm93SW5kZXgpXHJcbiAgICAgICAgaWYgKHRyeURhdGEgPT0gdW5kZWZpbmVkKSB0aGlzLkdvTGluZShHb0NvdW50KVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLkdvQmV6aWVyKEdvQ291bnQsIDAsIHRyeURhdGEubGVuZ3RoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBHb0JlemllcihHb0NvdW50OiBudW1iZXIsIEJlemllckNvdW50LCBsZW46IG51bWJlcikge1xyXG4gICAgICAgIC8vIGlmIChCZXppZXJDb3VudCA+PSBsZW4pIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5TdGFydEdPKEdvQ291bnQpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbGV0IGdldFBvc2l0aW9uOiBjYy5WZWMyW10gPSB0aGlzLmdhbWVNb2RsZS5wYXRoQmV6aWVyRGF0YS5nZXQodGhpcy5ub3dJbmRleClcclxuXHJcbiAgICAgICAgLy8gbGV0IGdldFBvc2l0aW9uOiBjYy5WZWMyID0gdGhpcy5nYW1lTW9kbGUucGF0aEJlemllckRhdGEuZ2V0KHRoaXMubm93SW5kZXgpW0JlemllckNvdW50XVxyXG5cclxuICAgICAgICAvLyBCZXppZXJDb3VudCsrO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGdldFBvc2l0aW9uKTtcclxuICAgICAgICAvL+i1t+m7nlxyXG4gICAgICAgIC8vIOS4remWk+m7nlxyXG4gICAgICAgIC8vIOWGjeS+hue1gum7nlxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGdldFBvc2l0aW9uWzFdKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhnZXRQb3NpdGlvblswXSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZ2V0UG9zaXRpb25bMl0pO1xyXG5cclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5uTWFuKVxyXG4gICAgICAgICAgICAvLyAudG8odGhpcy5Ud2VlblRpbWUgLyBsZW4sIHsgeDogZ2V0UG9zaXRpb24ueCwgeTogZ2V0UG9zaXRpb24ueSB9LCB7IGVhc2luZzogZHQgPT4gY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkuZWFzaW5nKGR0KSB9KVxyXG4gICAgICAgICAgICAuYmV6aWVyVG8oMSwgZ2V0UG9zaXRpb25bMF0sIGdldFBvc2l0aW9uWzFdLCBnZXRQb3NpdGlvblsyXSxcclxuICAgICAgICAgICAgICAgIHsgZWFzaW5nOiBkdCA9PiBjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKS5lYXNpbmcoZHQpIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuU3RhcnRHT19Ud2Vlbih0aGlzLmdhbWVNb2RsZSwgR29Db3VudCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLkdvQmV6aWVyKEdvQ291bnQsIEJlemllckNvdW50LCBsZW4pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgR29MaW5lKEdvQ291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBnZXRQb3NpdGlvbiA9IHRoaXMuZ2FtZU1vZGxlLnBhdGhQb3NpdGlvbkRhdGEuZ2V0KHRoaXMubm93SW5kZXgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5uTWFuKVxyXG4gICAgICAgICAgICAudG8odGhpcy5tYW5TcGVlZCwgeyB4OiBnZXRQb3NpdGlvbi54LCB5OiBnZXRQb3NpdGlvbi55IH0sIHsgZWFzaW5nOiBkdCA9PiBjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKS5lYXNpbmcoZHQpIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuU3RhcnRHT19Ud2Vlbih0aGlzLmdhbWVNb2RsZSwgR29Db3VudCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcbiAgICAvLyBHb0xpbmUoR29Db3VudDogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgdGhpcy5nZXRDb3VudCA9IEdvQ291bnQ7XHJcbiAgICAvLyAgICAgdGhpcy5ub3dJbmRleCsrO1xyXG4gICAgLy8gICAgIHRoaXMuZ2V0Q291bnQtLTtcclxuICAgIC8vICAgICBsZXQgZ2V0dHJ5OiBjYy5Ob2RlID0gQ29udHJvbGwuaW5zdGVucy5tYXBJdGVtLmdldCh0aGlzLm5vd0luZGV4KS5ub2RlXHJcbiAgICAvLyAgICAgaWYgKGdldHRyeSA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIC8vICAgICBsZXQgZ2V0TmV4dE1hcDogY2MuTm9kZSA9IENvbnRyb2xsLmluc3RlbnMubWFwSXRlbS5nZXQodGhpcy5ub3dJbmRleCkubm9kZVxyXG4gICAgLy8gICAgIC8vIGxldCBjaGFuZ2VQb3NpdGlvbjogY2MuVmVjMyA9IHRoaXMuY29udmVydE90aGVyTm9kZVNwYWNlQVIoZ2V0TmV4dE1hcCwgdGhpcy5ub2RlKTtcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhjaGFuZ2VQb3NpdGlvbi54LCBjaGFuZ2VQb3NpdGlvbi55KTtcclxuXHJcbiAgICAvLyAgICAgY2MudHdlZW4odGhpcy5uTWFuKVxyXG4gICAgLy8gICAgICAgICAudG8oMSwgeyB4OiBnZXROZXh0TWFwLngsIHk6IGdldE5leHRNYXAueSB9LCB7IGVhc2luZzogZHQgPT4gY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkuZWFzaW5nKGR0KSB9KVxyXG4gICAgLy8gICAgICAgICAuc3RhcnQoKVxyXG4gICAgLy8gfVxyXG4gICAgc2V0R2FtZU1vZGxlKF9nYW1lTW9kbGU6IEdhbWVNb2RsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKF9nYW1lTW9kbGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2FtZU1vZGxlID0gX2dhbWVNb2RsZVxyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Panel_Test.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db8ccqMMvRCM78kz7EEmJdS', 'Panel_Test');
// Script/Class/Panel_Test.ts

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
var GameEvent_1 = require("../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Panel_Test = /** @class */ (function (_super) {
    __extends(Panel_Test, _super);
    function Panel_Test() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel_Test.prototype.onLoad = function () {
        this._inedx = 0;
        this.btn_FullSceen = cc.find("AllSence", this.node).getComponent(cc.Button);
        this.btn_closeView = cc.find("CloseView", this.node).getComponent(cc.Button);
        ButtonMng_1.default.addEvent(this.node, "Panel_Test", "eventFull", this.btn_FullSceen);
        ButtonMng_1.default.addEvent(this.node, "Panel_Test", "eventCloseView", this.btn_closeView);
    };
    Panel_Test.prototype.eventFull = function (e, _customEventData) {
        console.log(e);
        //@ts-ignore
        if (cc.screen.fullScreen)
            return;
        this._inedx++;
        cc.find("Background/Label", this.btn_FullSceen.node).getComponent(cc.Label).string = "按下" + this._inedx;
        cc.view.enableAutoFullScreen(true);
        // cc.view.setDesignResolutionSize(1280, 720, cc.ResolutionPolicy.SHOW_ALL)
    };
    Panel_Test.prototype.eventCloseView = function () {
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.CloseVideo);
    };
    Panel_Test = __decorate([
        ccclass
    ], Panel_Test);
    return Panel_Test;
}(ComponentBase_1.default));
exports.default = Panel_Test;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcUGFuZWxfVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBK0M7QUFDL0MsNERBQXVEO0FBQ3ZELHlDQUEwQztBQUMxQywrQ0FBOEM7QUFDeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQWE7SUFBckQ7O0lBd0JBLENBQUM7SUFwQmEsMkJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDM0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM1RSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzVFLG1CQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUNyRixDQUFDO0lBQ0QsOEJBQVMsR0FBVCxVQUFVLENBQVcsRUFBRSxnQkFBd0I7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLFlBQVk7UUFDWixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUFFLE9BQU07UUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQ2IsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQ3ZHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsMkVBQTJFO0lBRS9FLENBQUM7SUFDRCxtQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBQyxpQkFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzdELENBQUM7SUF2QmdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F3QjlCO0lBQUQsaUJBQUM7Q0F4QkQsQUF3QkMsQ0F4QnVDLHVCQUFhLEdBd0JwRDtrQkF4Qm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uTW5nIGZyb20gJy4uL0RhdGEvYmFzZS9CdXR0b25NbmcnO1xyXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tICcuLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZSc7XHJcbmltcG9ydCB7IENvbW1hbW5kIH0gZnJvbSAnLi4vRW51bS9Db21tYWQnO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tICcuLi9FbnVtL0dhbWVFdmVudCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbF9UZXN0IGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICBidG5fRnVsbFNjZWVuOiBjYy5CdXR0b25cclxuICAgIGJ0bl9jbG9zZVZpZXc6Y2MuQnV0dG9uXHJcbiAgICBfaW5lZHg6IG51bWJlclxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9pbmVkeCA9IDBcclxuICAgICAgICB0aGlzLmJ0bl9GdWxsU2NlZW4gPSBjYy5maW5kKFwiQWxsU2VuY2VcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlVmlldyA9IGNjLmZpbmQoXCJDbG9zZVZpZXdcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIEJ1dHRvbk1uZy5hZGRFdmVudCh0aGlzLm5vZGUsIFwiUGFuZWxfVGVzdFwiLCBcImV2ZW50RnVsbFwiLCB0aGlzLmJ0bl9GdWxsU2NlZW4pXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJQYW5lbF9UZXN0XCIsIFwiZXZlbnRDbG9zZVZpZXdcIiwgdGhpcy5idG5fY2xvc2VWaWV3KVxyXG4gICAgfVxyXG4gICAgZXZlbnRGdWxsKGU6IGNjLkV2ZW50LCBfY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBpZiAoY2Muc2NyZWVuLmZ1bGxTY3JlZW4pIHJldHVyblxyXG4gICAgICAgIHRoaXMuX2luZWR4KytcclxuICAgICAgICBjYy5maW5kKFwiQmFja2dyb3VuZC9MYWJlbFwiLCB0aGlzLmJ0bl9GdWxsU2NlZW4ubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuaMieS4i1wiICsgdGhpcy5faW5lZHhcclxuICAgICAgICBjYy52aWV3LmVuYWJsZUF1dG9GdWxsU2NyZWVuKHRydWUpO1xyXG4gICAgICAgIC8vIGNjLnZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUoMTI4MCwgNzIwLCBjYy5SZXNvbHV0aW9uUG9saWN5LlNIT1dfQUxMKVxyXG5cclxuICAgIH1cclxuICAgIGV2ZW50Q2xvc2VWaWV3KCl7XHJcbiAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLENvbW1hbW5kLkNsb3NlVmlkZW8pXHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Message/Explain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87c82ND0qdNG63RvwkzjaMw', 'Explain');
// Script/Class/Message/Explain.ts

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
var GameEvent_1 = require("../../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Explain = /** @class */ (function (_super) {
    __extends(Explain, _super);
    function Explain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Explain.prototype.onLoad = function () {
        this.title = cc.find("Title", this.node).getComponent(cc.Label);
        this.scrollView = cc.find("scroll_Info", this.node).getComponent(cc.ScrollView);
        this.info_Text = cc.find("Mask/con/Text", this.scrollView.node).getComponent(cc.Label);
        this.btn_Next = cc.find("Item_Btn", this.node).getComponent(cc.Button);
        this.defaultReset();
    };
    Explain.prototype.start = function () {
        ButtonMng_1.default.addEvent(this.node, "Explain", "nextProcess", this.btn_Next);
    };
    Explain.prototype.setInfoStr = function (str) {
        this.info_Text.string = str;
    };
    Explain.prototype.nextProcess = function (e, _customEventData) {
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndExplain);
        //進入關閉畫面流程，記得傳遞自己
    };
    Explain = __decorate([
        ccclass
    ], Explain);
    return Explain;
}(ComponentBase_1.default));
exports.default = Explain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcRXhwbGFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFDbEQsK0RBQTBEO0FBQzFELDRDQUE2QztBQUM3QyxrREFBaUQ7QUFDM0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQWE7SUFBbEQ7O0lBdUJBLENBQUM7SUFsQmEsd0JBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0RSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUNTLHVCQUFLLEdBQWY7UUFDSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRTFFLENBQUM7SUFDRCw0QkFBVSxHQUFWLFVBQVcsR0FBVztRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7SUFDL0IsQ0FBQztJQUNELDZCQUFXLEdBQVgsVUFBWSxDQUFXLEVBQUUsZ0JBQXdCO1FBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUMsaUJBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN6RCxpQkFBaUI7SUFDckIsQ0FBQztJQXRCZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXVCM0I7SUFBRCxjQUFDO0NBdkJELEFBdUJDLENBdkJvQyx1QkFBYSxHQXVCakQ7a0JBdkJvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbk1uZyBmcm9tICcuLi8uLi9EYXRhL2Jhc2UvQnV0dG9uTW5nJztcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2UnO1xyXG5pbXBvcnQgeyBDb21tYW1uZCB9IGZyb20gJy4uLy4uL0VudW0vQ29tbWFkJztcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSAnLi4vLi4vRW51bS9HYW1lRXZlbnQnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwbGFpbiBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgdGl0bGU6IGNjLkxhYmVsO1xyXG4gICAgaW5mb19UZXh0OiBjYy5MYWJlbDtcclxuICAgIGJ0bl9OZXh0OiBjYy5CdXR0b247XHJcbiAgICBzY3JvbGxWaWV3OiBjYy5TY3JvbGxWaWV3XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBjYy5maW5kKFwiVGl0bGVcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldyA9IGNjLmZpbmQoXCJzY3JvbGxfSW5mb1wiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcclxuICAgICAgICB0aGlzLmluZm9fVGV4dCA9IGNjLmZpbmQoXCJNYXNrL2Nvbi9UZXh0XCIsIHRoaXMuc2Nyb2xsVmlldy5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuYnRuX05leHQgPSBjYy5maW5kKFwiSXRlbV9CdG5cIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFJlc2V0KClcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIkV4cGxhaW5cIiwgXCJuZXh0UHJvY2Vzc1wiLCB0aGlzLmJ0bl9OZXh0KVxyXG5cclxuICAgIH1cclxuICAgIHNldEluZm9TdHIoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmluZm9fVGV4dC5zdHJpbmcgPSBzdHJcclxuICAgIH1cclxuICAgIG5leHRQcm9jZXNzKGU6IGNjLkV2ZW50LCBfY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsQ29tbWFtbmQuRW5kRXhwbGFpbilcclxuICAgICAgICAvL+mAsuWFpemXnOmWieeVq+mdoua1geeoi++8jOiomOW+l+WCs+mBnuiHquW3sVxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Message/Panel_Message.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d3fc6vc8FL26iKfbeHKRat', 'Panel_Message');
// Script/Class/Message/Panel_Message.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../Enum/GameEvent");
var Choose_Ticket_1 = require("./Choose_Ticket");
var Choose_Train_1 = require("./Choose_Train");
var EndGame_1 = require("./EndGame");
var Explain_1 = require("./Explain");
var GetProps_1 = require("./GetProps");
var MessageAction_1 = require("./MessageAction");
var QAAnswer_1 = require("./QAAnswer");
var Question_1 = require("./Question");
var StationInfo_1 = require("./StationInfo");
var Panel_Message = /** @class */ (function (_super) {
    __extends(Panel_Message, _super);
    function Panel_Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel_Message.prototype.onLoad = function () {
        this.bg = cc.find("BG", this.node);
        this.bgMask = cc.find("Mask", this.bg);
        this.btn_Close = cc.find("Btn_Close", this.bg);
        this.block = cc.find("Block", this.node);
        this.choose_Train = cc.find("Choose_Train", this.bgMask).addComponent(Choose_Train_1.default);
        this.choose_Ticket = cc.find("Choose_Ticket", this.bgMask).addComponent(Choose_Ticket_1.default);
        this.question = cc.find("Question", this.bgMask).addComponent(Question_1.default);
        this.explain = cc.find("Explain", this.bgMask).addComponent(Explain_1.default);
        this.qaAnswer = cc.find("QAAnswer", this.bgMask).addComponent(QAAnswer_1.default);
        this.stationInfo = cc.find("StationInfo", this.bgMask).addComponent(StationInfo_1.default);
        this.getProps = cc.find("GetProps", this.bgMask).addComponent(GetProps_1.default);
        this.endGame = cc.find("EndGame", this.bgMask).addComponent(EndGame_1.default);
        this.initEvent(GameEvent_1.GameEvent.ShowMessage, this.show);
        this.initEvent(GameEvent_1.GameEvent.HideMessage, this.hide);
        this.defaultReset();
        this.bg.setScale(0);
        this.block.active = false;
    };
    // protected start(): void {
    // }
    Panel_Message.prototype.show = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this.bg.scale == 1) {
                            resolve();
                            return;
                        }
                        _this.EventEmit(GameEvent_1.GameEvent.OpenBufer);
                        _this.bg.setScale(0);
                        _this.block.active = true;
                        _this.outBack(_this.bg, 1, resolve);
                    })];
            });
        });
    };
    Panel_Message.prototype.hide = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this.bg.scale == 0) {
                            resolve();
                            return;
                        }
                        _this.inBack(_this.bg, 0, function () {
                            _this.EventEmit(GameEvent_1.GameEvent.CloseBufer);
                            _this.block.active = false;
                            resolve();
                        });
                    })];
            });
        });
    };
    return Panel_Message;
}(MessageAction_1.default));
exports.default = Panel_Message;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcUGFuZWxfTWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBaUQ7QUFDakQsaURBQTRDO0FBQzVDLCtDQUEwQztBQUMxQyxxQ0FBZ0M7QUFDaEMscUNBQWdDO0FBQ2hDLHVDQUFrQztBQUNsQyxpREFBNEM7QUFDNUMsdUNBQWtDO0FBQ2xDLHVDQUFrQztBQUNsQyw2Q0FBd0M7QUFFeEM7SUFBMkMsaUNBQWE7SUFBeEQ7O0lBbUVBLENBQUM7SUFyRGEsOEJBQU0sR0FBaEI7UUFFSSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUV4QyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsc0JBQVksQ0FBQyxDQUFBO1FBQ25GLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyx1QkFBYSxDQUFDLENBQUE7UUFDdEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQTtRQUN2RSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsaUJBQU8sQ0FBQyxDQUFBO1FBQ3BFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxrQkFBUSxDQUFDLENBQUE7UUFDdkUsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQTtRQUNoRixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFBO1FBQ3ZFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxpQkFBTyxDQUFDLENBQUE7UUFFcEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFaEQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ25CLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUM3QixDQUFDO0lBQ0QsNEJBQTRCO0lBRTVCLElBQUk7SUFDRSw0QkFBSSxHQUFWOzs7O2dCQUNJLHNCQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQ3JDLElBQUksS0FBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFOzRCQUNwQixPQUFPLEVBQUUsQ0FBQTs0QkFDVCxPQUFNO3lCQUNUO3dCQUNELEtBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTt3QkFDbkMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQ25CLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTt3QkFDeEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQTtvQkFFckMsQ0FBQyxDQUFDLEVBQUE7OztLQUNMO0lBQ0ssNEJBQUksR0FBVjs7OztnQkFDSSxzQkFBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUNyQyxJQUFJLEtBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTs0QkFDcEIsT0FBTyxFQUFFLENBQUE7NEJBQ1QsT0FBTTt5QkFDVDt3QkFFRCxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFOzRCQUNwQixLQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLENBQUE7NEJBQ3BDLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTs0QkFDekIsT0FBTyxFQUFFLENBQUE7d0JBQ2IsQ0FBQyxDQUFDLENBQUE7b0JBQ04sQ0FBQyxDQUFDLEVBQUE7OztLQUNMO0lBQ0wsb0JBQUM7QUFBRCxDQW5FQSxBQW1FQyxDQW5FMEMsdUJBQWEsR0FtRXZEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSBcIi4uLy4uL0VudW0vR2FtZUV2ZW50XCI7XHJcbmltcG9ydCBDaG9vc2VfVGlja2V0IGZyb20gXCIuL0Nob29zZV9UaWNrZXRcIjtcclxuaW1wb3J0IENob29zZV9UcmFpbiBmcm9tIFwiLi9DaG9vc2VfVHJhaW5cIjtcclxuaW1wb3J0IEVuZEdhbWUgZnJvbSBcIi4vRW5kR2FtZVwiO1xyXG5pbXBvcnQgRXhwbGFpbiBmcm9tIFwiLi9FeHBsYWluXCI7XHJcbmltcG9ydCBHZXRQcm9wcyBmcm9tIFwiLi9HZXRQcm9wc1wiO1xyXG5pbXBvcnQgTWVzc2FnZUFjdGlvbiBmcm9tIFwiLi9NZXNzYWdlQWN0aW9uXCI7XHJcbmltcG9ydCBRQUFuc3dlciBmcm9tIFwiLi9RQUFuc3dlclwiO1xyXG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4vUXVlc3Rpb25cIjtcclxuaW1wb3J0IFN0YXRpb25JbmZvIGZyb20gXCIuL1N0YXRpb25JbmZvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbF9NZXNzYWdlIGV4dGVuZHMgTWVzc2FnZUFjdGlvbiB7XHJcbiAgICBibG9jazogY2MuTm9kZTtcclxuICAgIGJ0bl9DbG9zZTogY2MuTm9kZTtcclxuICAgIGJnOiBjYy5Ob2RlO1xyXG4gICAgYmdNYXNrOiBjYy5Ob2RlXHJcbiAgICBjaG9vc2VfVHJhaW46IENob29zZV9UcmFpbjtcclxuICAgIGNob29zZV9UaWNrZXQ6IENob29zZV9UaWNrZXQ7XHJcbiAgICBxdWVzdGlvbjogUXVlc3Rpb247XHJcbiAgICBxYUFuc3dlcjogUUFBbnN3ZXI7XHJcbiAgICBleHBsYWluOiBFeHBsYWluO1xyXG4gICAgc3RhdGlvbkluZm86IFN0YXRpb25JbmZvO1xyXG4gICAgZ2V0UHJvcHM6R2V0UHJvcHNcclxuICAgIGVuZEdhbWU6RW5kR2FtZVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuYmcgPSBjYy5maW5kKFwiQkdcIiwgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuYmdNYXNrID0gY2MuZmluZChcIk1hc2tcIiwgdGhpcy5iZylcclxuICAgICAgICB0aGlzLmJ0bl9DbG9zZSA9IGNjLmZpbmQoXCJCdG5fQ2xvc2VcIiwgdGhpcy5iZylcclxuICAgICAgICB0aGlzLmJsb2NrID0gY2MuZmluZChcIkJsb2NrXCIsIHRoaXMubm9kZSlcclxuXHJcbiAgICAgICAgdGhpcy5jaG9vc2VfVHJhaW4gPSBjYy5maW5kKFwiQ2hvb3NlX1RyYWluXCIsIHRoaXMuYmdNYXNrKS5hZGRDb21wb25lbnQoQ2hvb3NlX1RyYWluKVxyXG4gICAgICAgIHRoaXMuY2hvb3NlX1RpY2tldCA9IGNjLmZpbmQoXCJDaG9vc2VfVGlja2V0XCIsIHRoaXMuYmdNYXNrKS5hZGRDb21wb25lbnQoQ2hvb3NlX1RpY2tldClcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gY2MuZmluZChcIlF1ZXN0aW9uXCIsIHRoaXMuYmdNYXNrKS5hZGRDb21wb25lbnQoUXVlc3Rpb24pXHJcbiAgICAgICAgdGhpcy5leHBsYWluID0gY2MuZmluZChcIkV4cGxhaW5cIiwgdGhpcy5iZ01hc2spLmFkZENvbXBvbmVudChFeHBsYWluKVxyXG4gICAgICAgIHRoaXMucWFBbnN3ZXIgPSBjYy5maW5kKFwiUUFBbnN3ZXJcIiwgdGhpcy5iZ01hc2spLmFkZENvbXBvbmVudChRQUFuc3dlcilcclxuICAgICAgICB0aGlzLnN0YXRpb25JbmZvID0gY2MuZmluZChcIlN0YXRpb25JbmZvXCIsIHRoaXMuYmdNYXNrKS5hZGRDb21wb25lbnQoU3RhdGlvbkluZm8pXHJcbiAgICAgICAgdGhpcy5nZXRQcm9wcyA9IGNjLmZpbmQoXCJHZXRQcm9wc1wiLCB0aGlzLmJnTWFzaykuYWRkQ29tcG9uZW50KEdldFByb3BzKVxyXG4gICAgICAgIHRoaXMuZW5kR2FtZSA9IGNjLmZpbmQoXCJFbmRHYW1lXCIsIHRoaXMuYmdNYXNrKS5hZGRDb21wb25lbnQoRW5kR2FtZSlcclxuXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoR2FtZUV2ZW50LlNob3dNZXNzYWdlLCB0aGlzLnNob3cpXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoR2FtZUV2ZW50LkhpZGVNZXNzYWdlLCB0aGlzLmhpZGUpXHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFJlc2V0KClcclxuICAgICAgICB0aGlzLmJnLnNldFNjYWxlKDApO1xyXG4gICAgICAgIHRoaXMuYmxvY2suYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuICAgIC8vIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuXHJcbiAgICAvLyB9XHJcbiAgICBhc3luYyBzaG93KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJnLnNjYWxlID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50Lk9wZW5CdWZlcilcclxuICAgICAgICAgICAgdGhpcy5iZy5zZXRTY2FsZSgwKVxyXG4gICAgICAgICAgICB0aGlzLmJsb2NrLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5vdXRCYWNrKHRoaXMuYmcsIDEsIHJlc29sdmUpXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhc3luYyBoaWRlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJnLnNjYWxlID09IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW5CYWNrKHRoaXMuYmcsIDAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5DbG9zZUJ1ZmVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ibG9jay5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/UI/Setting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a30bfIOwzxF16zAYkEtcuo8', 'Setting');
// Script/Class/UI/Setting.ts

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
var SettingBtn_1 = require("./SettingBtn");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Setting = /** @class */ (function (_super) {
    __extends(Setting, _super);
    function Setting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxIndex = 4;
        _this.itemCount = 1;
        return _this;
    }
    Setting.prototype.onLoad = function () {
        this.btn_ControllOpen = cc.find("Btn_ControllOpen", this.node).getComponent(cc.Button);
        this.item = cc.find("item", this.node);
        this.scroll = cc.find("con_Scroll", this.node).getComponent(cc.ScrollView);
        this.con = this.scroll.content;
        this.con.removeAllChildren();
        this.con.setContentSize(0, 0);
        this.Layout_BG1 = cc.find("Layout_BG1", this.scroll.node).getComponent(cc.Layout);
        this.Layout_BG2 = cc.find("Layout_BG2", this.Layout_BG1.node).getComponent(cc.Layout);
        this.Layout_Mask = cc.find("Layout_Mask", this.Layout_BG2.node).getComponent(cc.Layout);
        this.itemInit();
    };
    Setting.prototype.start = function () {
        ButtonMng_1.default.addEvent(this.node, "Setting", "eventControllOpen", this.btn_ControllOpen);
    };
    Setting.prototype.itemInit = function () {
        for (var index = 0; index < this.itemCount; index++) {
            this.itemSop(index);
        }
        //有問題的方法
        // if (this.maxIndex < this.itemCount) {
        //     for (let index = 0; index < this.maxIndex; index++) {
        //         this.itemSop(index)
        //     }
        //     setTimeout(() => {//給時間渲染
        //         this.closeLayout()
        //         setTimeout(() => {
        //             for (let index = this.maxIndex; index < this.itemCount; index++) {
        //                 this.itemSop(index)
        //             }
        //         }, 100);
        //     }, 100);
        // }
        // else {
        //     for (let index = 0; index < this.itemCount; index++) {
        //         this.itemSop(index)
        //     }
        // }
    };
    Setting.prototype.eventControllOpen = function (e, _customEventData) {
        if (this.isOpen) {
            this.scroll.node.active = false;
            this.isOpen = this.scroll.node.active;
        }
        else {
            this.scroll.node.active = true;
            this.isOpen = this.scroll.node.active;
        }
    };
    Setting.prototype.itemSop = function (index) {
        var _item = cc.instantiate(this.item);
        this.con.addChild(_item);
        var _class = _item.addComponent(SettingBtn_1.default);
        _class.setEvent(index);
        _item.active = true;
    };
    Setting.prototype.closeLayout = function () {
        this.Layout_BG1.enabled = false;
        this.Layout_BG2.enabled = false;
        this.Layout_Mask.enabled = false;
    };
    Setting = __decorate([
        ccclass
    ], Setting);
    return Setting;
}(ComponentBase_1.default));
exports.default = Setting;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcVUlcXFNldHRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUMxRCwyQ0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQWE7SUFBbEQ7UUFBQSxxRUErRUM7UUF0RUcsY0FBUSxHQUFXLENBQUMsQ0FBQTtRQUNwQixlQUFTLEdBQVcsQ0FBQyxDQUFDOztJQXFFMUIsQ0FBQztJQW5FYSx3QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3RGLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDMUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQTtRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUE7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FB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cm9tICcuLi8uLi9EYXRhL2Jhc2UvQnV0dG9uTW5nJztcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2UnO1xyXG5pbXBvcnQgU2V0dGluZ0J0biBmcm9tICcuL1NldHRpbmdCdG4nO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGlzT3BlbjogYm9vbGVhblxyXG4gICAgaXRlbTogY2MuTm9kZVxyXG4gICAgYnRuX0NvbnRyb2xsT3BlbjogY2MuQnV0dG9uXHJcbiAgICBzY3JvbGw6IGNjLlNjcm9sbFZpZXc7XHJcbiAgICBjb246IGNjLk5vZGVcclxuICAgIExheW91dF9NYXNrOiBjYy5MYXlvdXQ7XHJcbiAgICBMYXlvdXRfQkcxOiBjYy5MYXlvdXQ7XHJcbiAgICBMYXlvdXRfQkcyOiBjYy5MYXlvdXQ7XHJcbiAgICBtYXhJbmRleDogbnVtYmVyID0gNFxyXG4gICAgaXRlbUNvdW50OiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5idG5fQ29udHJvbGxPcGVuID0gY2MuZmluZChcIkJ0bl9Db250cm9sbE9wZW5cIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMuaXRlbSA9IGNjLmZpbmQoXCJpdGVtXCIsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLnNjcm9sbCA9IGNjLmZpbmQoXCJjb25fU2Nyb2xsXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpXHJcbiAgICAgICAgdGhpcy5jb24gPSB0aGlzLnNjcm9sbC5jb250ZW50XHJcbiAgICAgICAgdGhpcy5jb24ucmVtb3ZlQWxsQ2hpbGRyZW4oKVxyXG4gICAgICAgIHRoaXMuY29uLnNldENvbnRlbnRTaXplKDAsIDApXHJcbiAgICAgICAgdGhpcy5MYXlvdXRfQkcxID0gY2MuZmluZChcIkxheW91dF9CRzFcIiwgdGhpcy5zY3JvbGwubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxheW91dClcclxuICAgICAgICB0aGlzLkxheW91dF9CRzIgPSBjYy5maW5kKFwiTGF5b3V0X0JHMlwiLCB0aGlzLkxheW91dF9CRzEubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxheW91dClcclxuICAgICAgICB0aGlzLkxheW91dF9NYXNrID0gY2MuZmluZChcIkxheW91dF9NYXNrXCIsIHRoaXMuTGF5b3V0X0JHMi5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGF5b3V0KVxyXG5cclxuICAgICAgICB0aGlzLml0ZW1Jbml0KClcclxuXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJTZXR0aW5nXCIsIFwiZXZlbnRDb250cm9sbE9wZW5cIiwgdGhpcy5idG5fQ29udHJvbGxPcGVuKVxyXG4gICAgfVxyXG4gICAgaXRlbUluaXQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaXRlbUNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbVNvcChpbmRleClcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL+acieWVj+mhjOeahOaWueazlVxyXG4gICAgICAgIC8vIGlmICh0aGlzLm1heEluZGV4IDwgdGhpcy5pdGVtQ291bnQpIHtcclxuICAgICAgICAvLyAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubWF4SW5kZXg7IGluZGV4KyspIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuaXRlbVNvcChpbmRleClcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHsvL+e1puaZgumWk+a4suafk1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jbG9zZUxheW91dCgpXHJcbiAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IHRoaXMubWF4SW5kZXg7IGluZGV4IDwgdGhpcy5pdGVtQ291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pdGVtU29wKGluZGV4KVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgLy8gICAgIH0sIDEwMCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdGVtQ291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuaXRlbVNvcChpbmRleClcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIGV2ZW50Q29udHJvbGxPcGVuKGU6IGNjLkV2ZW50LCBfY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGwubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IHRoaXMuc2Nyb2xsLm5vZGUuYWN0aXZlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbC5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSB0aGlzLnNjcm9sbC5ub2RlLmFjdGl2ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGl0ZW1Tb3AoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBfaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbSlcclxuICAgICAgICB0aGlzLmNvbi5hZGRDaGlsZChfaXRlbSk7XHJcbiAgICAgICAgbGV0IF9jbGFzcyA9IF9pdGVtLmFkZENvbXBvbmVudChTZXR0aW5nQnRuKVxyXG4gICAgICAgIF9jbGFzcy5zZXRFdmVudChpbmRleClcclxuICAgICAgICBfaXRlbS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBjbG9zZUxheW91dCgpIHtcclxuICAgICAgICB0aGlzLkxheW91dF9CRzEuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5MYXlvdXRfQkcyLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuTGF5b3V0X01hc2suZW5hYmxlZCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Message/MessageAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f959eKXzDhAhJEvHFiDPs5V', 'MessageAction');
// Script/Class/Message/MessageAction.ts

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
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var Easing_1 = require("../../Enum/Easing");
var MessageAction = /** @class */ (function (_super) {
    __extends(MessageAction, _super);
    function MessageAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageAction.prototype.outBack = function (_node, _scale, callback) {
        cc.Tween.stopAllByTarget(_node);
        var action1 = cc.tween().to(1, { scale: _scale }, { easing: Easing_1.Easing.backOut });
        callback ?
            action1.call(callback.bind(this)).clone(_node).start() :
            action1.clone(_node).start();
    };
    MessageAction.prototype.inBack = function (_node, _scale, callback) {
        cc.Tween.stopAllByTarget(_node);
        var action1 = cc.tween().to(0.5, { scale: _scale }, { easing: Easing_1.Easing.backIn });
        callback ?
            action1.call(callback.bind(this)).clone(_node).start() :
            action1.clone(_node).start();
    };
    MessageAction.prototype.fadeOut = function (_node, callback) {
        cc.Tween.stopAllByTarget(_node);
        var action1 = cc.tween().to(1, { y: -20, opacity: 0 });
        callback ?
            action1.call(callback.bind(this)).clone(_node).start() :
            action1.clone(_node).start();
    };
    MessageAction.prototype.fadeIn = function (_node, callback) {
        cc.Tween.stopAllByTarget(_node);
        var action1 = cc.tween().to(1, { y: 0, opacity: 255 });
        callback ?
            action1.call(callback.bind(this)).clone(_node).start() :
            action1.clone(_node).start();
    };
    return MessageAction;
}(ComponentBase_1.default));
exports.default = MessageAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcTWVzc2FnZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsNENBQTJDO0FBQzNDO0lBQTJDLGlDQUFhO0lBQXhEOztJQTZCQSxDQUFDO0lBNUJHLCtCQUFPLEdBQVAsVUFBUSxLQUFjLEVBQUUsTUFBYyxFQUFFLFFBQW1CO1FBQ3ZELEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQy9CLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLGVBQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBQzdFLFFBQVEsQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDeEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsOEJBQU0sR0FBTixVQUFPLEtBQWMsRUFBRSxNQUFjLEVBQUUsUUFBbUI7UUFDdEQsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDL0IsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDOUUsUUFBUSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDRCwrQkFBTyxHQUFQLFVBQVEsS0FBYyxFQUFFLFFBQWtCO1FBQ3RDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQy9CLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3RELFFBQVEsQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDeEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsOEJBQU0sR0FBTixVQUFPLEtBQWMsRUFBRSxRQUFrQjtRQUNyQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMvQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDdEQsUUFBUSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDTCxvQkFBQztBQUFELENBN0JBLEFBNkJDLENBN0IwQyx1QkFBYSxHQTZCdkQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tICcuLi8uLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZSc7XHJcbmltcG9ydCB7IEVhc2luZyB9IGZyb20gJy4uLy4uL0VudW0vRWFzaW5nJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZUFjdGlvbiBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgb3V0QmFjayhfbm9kZTogY2MuTm9kZSwgX3NjYWxlOiBudW1iZXIsIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoX25vZGUpXHJcbiAgICAgICAgbGV0IGFjdGlvbjEgPSBjYy50d2VlbigpLnRvKDEsIHsgc2NhbGU6IF9zY2FsZSB9LCB7IGVhc2luZzogRWFzaW5nLmJhY2tPdXQgfSlcclxuICAgICAgICBjYWxsYmFjayA/XHJcbiAgICAgICAgICAgIGFjdGlvbjEuY2FsbChjYWxsYmFjay5iaW5kKHRoaXMpKS5jbG9uZShfbm9kZSkuc3RhcnQoKSA6XHJcbiAgICAgICAgICAgIGFjdGlvbjEuY2xvbmUoX25vZGUpLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBpbkJhY2soX25vZGU6IGNjLk5vZGUsIF9zY2FsZTogbnVtYmVyLCBjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KF9ub2RlKVxyXG4gICAgICAgIGxldCBhY3Rpb24xID0gY2MudHdlZW4oKS50bygwLjUsIHsgc2NhbGU6IF9zY2FsZSB9LCB7IGVhc2luZzogRWFzaW5nLmJhY2tJbiB9KVxyXG4gICAgICAgIGNhbGxiYWNrID9cclxuICAgICAgICAgICAgYWN0aW9uMS5jYWxsKGNhbGxiYWNrLmJpbmQodGhpcykpLmNsb25lKF9ub2RlKS5zdGFydCgpIDpcclxuICAgICAgICAgICAgYWN0aW9uMS5jbG9uZShfbm9kZSkuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIGZhZGVPdXQoX25vZGU6IGNjLk5vZGUsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChfbm9kZSlcclxuICAgICAgICBsZXQgYWN0aW9uMSA9IGNjLnR3ZWVuKCkudG8oMSwgeyB5OiAtMjAsIG9wYWNpdHk6IDAgfSlcclxuICAgICAgICBjYWxsYmFjayA/XHJcbiAgICAgICAgICAgIGFjdGlvbjEuY2FsbChjYWxsYmFjay5iaW5kKHRoaXMpKS5jbG9uZShfbm9kZSkuc3RhcnQoKSA6XHJcbiAgICAgICAgICAgIGFjdGlvbjEuY2xvbmUoX25vZGUpLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBmYWRlSW4oX25vZGU6IGNjLk5vZGUsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChfbm9kZSlcclxuICAgICAgICBsZXQgYWN0aW9uMSA9IGNjLnR3ZWVuKCkudG8oMSwgeyB5OiAwLCBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICBjYWxsYmFjayA/XHJcbiAgICAgICAgICAgIGFjdGlvbjEuY2FsbChjYWxsYmFjay5iaW5kKHRoaXMpKS5jbG9uZShfbm9kZSkuc3RhcnQoKSA6XHJcbiAgICAgICAgICAgIGFjdGlvbjEuY2xvbmUoX25vZGUpLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Message/Choose_Train.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88f0aDL77dBTZ5Zt5ZcDnXG', 'Choose_Train');
// Script/Class/Message/Choose_Train.ts

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
var AssetMng_1 = require("../../Asset/AssetMng");
var ButtonMng_1 = require("../../Data/base/ButtonMng");
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var Commad_1 = require("../../Enum/Commad");
var GameEvent_1 = require("../../Enum/GameEvent");
var TrainType_1 = require("../../Enum/TrainType");
var GameModle_1 = require("../../GameModle");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Choose_Train = /** @class */ (function (_super) {
    __extends(Choose_Train, _super);
    function Choose_Train() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itmes = [];
        _this.tempDT = 0;
        _this.totaleDT = 0;
        _this.endDT = 7;
        _this.changeSpeed = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, 0.8, 0.85];
        _this.speedChange = 0.1;
        _this.lastShowTrain = 0;
        return _this;
        // async getTrainAciton(callback?: Function) {
        //     return new Promise<void>((resolve, reject) => {
        //         cc.tween(this.MineTrain.node)
        //             .delay(2)
        //             .repeat(2, cc.tween()
        //                 .to(0.2, { scale: 1.3 })
        //                 .to(1, { scale: 1 }, { easing: Easing.elasticOut })
        //             )
        //             .call(resolve)
        //             .start()
        //     })
        // }
    }
    Choose_Train.prototype.onLoad = function () {
        this.item = cc.find("TrainFrame", this.node);
        this.content = cc.find("Layout", this.node);
        this.btn_Start = cc.find("btn_Check", this.node).getComponent(cc.Button);
        for (var index = 0; index < 6; index++) {
            var instItme = cc.instantiate(this.item);
            this.content.addChild(instItme);
            instItme.setPosition(0, 0);
            var _class = instItme.addComponent(TrainItem);
            this.itmes.push(_class);
            var getIndex = index;
            _class.type = getIndex;
        }
        this.item.destroy();
    };
    Choose_Train.prototype.start = function () {
        this.node.opacity = 0;
        this.hide();
        ButtonMng_1.default.addEvent(this.node, "Choose_Train", "startRandom", this.btn_Start);
    };
    Choose_Train.prototype.update = function (dt) {
        if (this.isRandom) {
            this.tempDT += dt;
            this.totaleDT += dt;
            // console.log(this.tempDT, this.speedChange);
            if (this.tempDT > this.speedChange) {
                this.changeShow();
                this.tempDT = 0;
            }
            if (this.totaleDT > this.endDT) {
                this.isRandom = false;
                GameModle_1.default.playData.trainTypeNumber = this.lastShowTrain;
                GameModle_1.default.playData.trainType = this.changeTrainType();
                this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndChoosTrain);
                //delay時間後，將圖片從畫面移動到場警(try幾個小時)
            }
            if (this.changeSpeed[0] != null && this.totaleDT > (this.endDT * this.changeSpeed[0])) {
                // this.speedChange = this.speedChange * 2
                this.speedChange = this.speedChange + Math.pow(0.6, this.changeSpeed.length);
                this.changeSpeed.shift();
            }
        }
    };
    Choose_Train.prototype.startRandom = function () {
        this.btn_Start.node.active = false;
        this.isRandom = true;
    };
    Choose_Train.prototype.initTrainSprite = function () {
        for (var index = 0; index < this.itmes.length; index++) {
            this.itmes[index].sprtie.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("TrainType_" + index);
        }
    };
    Choose_Train.prototype.changeShow = function () {
        this.itmes[this.lastShowTrain].noChoose();
        var random = this.lastShowTrain;
        while (random == this.lastShowTrain) {
            random = Math.floor(Math.random() * 6);
        }
        this.lastShowTrain = random;
        this.itmes[random].choose();
    };
    Choose_Train.prototype.changeTrainType = function () {
        switch (this.lastShowTrain) {
            case 0:
                return TrainType_1.TrainType.Type0;
            case 1:
                return TrainType_1.TrainType.Type1;
            case 2:
                return TrainType_1.TrainType.Type2;
            case 3:
                return TrainType_1.TrainType.Type3;
                ;
            case 4:
                return TrainType_1.TrainType.Type4;
                ;
            case 5:
                return TrainType_1.TrainType.Type5;
                ;
        }
    };
    Choose_Train = __decorate([
        ccclass
    ], Choose_Train);
    return Choose_Train;
}(ComponentBase_1.default));
exports.default = Choose_Train;
var TrainItem = /** @class */ (function (_super) {
    __extends(TrainItem, _super);
    function TrainItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrainItem.prototype.onLoad = function () {
        this.node.setScale(1);
        this.arrow = cc.find("Arrow", this.node);
        this.sprtie = cc.find("Train", this.node).getComponent(cc.Sprite);
        this.sprtie.spriteFrame = null;
        this.arrow.active = false;
    };
    TrainItem.prototype.choose = function () {
        this.arrow.active = true;
        this.node.setScale(1.3);
    };
    TrainItem.prototype.noChoose = function () {
        this.arrow.active = false;
        this.node.setScale(1);
    };
    return TrainItem;
}(ComponentBase_1.default));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcQ2hvb3NlX1RyYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUM1Qyx1REFBa0Q7QUFDbEQsK0RBQTBEO0FBQzFELDRDQUE2QztBQUU3QyxrREFBaUQ7QUFDakQsa0RBQWlEO0FBQ2pELDZDQUF3QztBQUNsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBYTtJQUF2RDtRQUFBLHFFQWtIQztRQWhIRyxXQUFLLEdBQWdCLEVBQUUsQ0FBQztRQUt4QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRW5CLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixpQkFBVyxHQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN2RSxpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUUxQixtQkFBYSxHQUFXLENBQUMsQ0FBQzs7UUF1RjFCLDhDQUE4QztRQUM5QyxzREFBc0Q7UUFDdEQsd0NBQXdDO1FBQ3hDLHdCQUF3QjtRQUN4QixvQ0FBb0M7UUFDcEMsMkNBQTJDO1FBQzNDLHNFQUFzRTtRQUN0RSxnQkFBZ0I7UUFDaEIsNkJBQTZCO1FBQzdCLHVCQUF1QjtRQUN2QixTQUFTO1FBRVQsSUFBSTtJQUNSLENBQUM7SUEvRmEsNkJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FB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QUFhLEdBb0JwQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3NldE1uZyBmcm9tICcuLi8uLi9Bc3NldC9Bc3NldE1uZyc7XHJcbmltcG9ydCBCdXR0b25NbmcgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0J1dHRvbk1uZyc7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlJztcclxuaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tICcuLi8uLi9FbnVtL0NvbW1hZCc7XHJcbmltcG9ydCB7IEVhc2luZyB9IGZyb20gJy4uLy4uL0VudW0vRWFzaW5nJztcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSAnLi4vLi4vRW51bS9HYW1lRXZlbnQnO1xyXG5pbXBvcnQgeyBUcmFpblR5cGUgfSBmcm9tICcuLi8uLi9FbnVtL1RyYWluVHlwZSc7XHJcbmltcG9ydCBHYW1lTW9kbGUgZnJvbSAnLi4vLi4vR2FtZU1vZGxlJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENob29zZV9UcmFpbiBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgaXRlbTogY2MuTm9kZTtcclxuICAgIGl0bWVzOiBUcmFpbkl0ZW1bXSA9IFtdO1xyXG4gICAgLy8gTWluZVRyYWluOiBUcmFpbkl0ZW07XHJcbiAgICBjb250ZW50OiBjYy5Ob2RlO1xyXG4gICAgaXNSYW5kb206IGJvb2xlYW47XHJcbiAgICBpc1N0b3A6IGJvb2xlYW47XHJcbiAgICB0ZW1wRFQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgdG90YWxlRFQ6IG51bWJlciA9IDA7XHJcbiAgICBlbmREVDogbnVtYmVyID0gNztcclxuICAgIGNoYW5nZVNwZWVkOiBudW1iZXJbXSA9IFswLjIsIDAuMywgMC40LCAwLjUsIDAuNiwgMC43LCAwLjc1LCAwLjgsIDAuODVdXHJcbiAgICBzcGVlZENoYW5nZTogbnVtYmVyID0gMC4xO1xyXG5cclxuICAgIGxhc3RTaG93VHJhaW46IG51bWJlciA9IDA7XHJcblxyXG4gICAgYnRuX1N0YXJ0OiBjYy5CdXR0b247XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtID0gY2MuZmluZChcIlRyYWluRnJhbWVcIiwgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNjLmZpbmQoXCJMYXlvdXRcIiwgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuYnRuX1N0YXJ0ID0gY2MuZmluZChcImJ0bl9DaGVja1wiLHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNjsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgaW5zdEl0bWUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW0pXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChpbnN0SXRtZSlcclxuICAgICAgICAgICAgaW5zdEl0bWUuc2V0UG9zaXRpb24oMCwgMClcclxuICAgICAgICAgICAgbGV0IF9jbGFzcyA9IGluc3RJdG1lLmFkZENvbXBvbmVudChUcmFpbkl0ZW0pXHJcbiAgICAgICAgICAgIHRoaXMuaXRtZXMucHVzaChfY2xhc3MpO1xyXG4gICAgICAgICAgICBsZXQgZ2V0SW5kZXggPSBpbmRleFxyXG4gICAgICAgICAgICBfY2xhc3MudHlwZSA9IGdldEluZGV4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXRlbS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgdGhpcy5oaWRlKClcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIkNob29zZV9UcmFpblwiLCBcInN0YXJ0UmFuZG9tXCIsIHRoaXMuYnRuX1N0YXJ0KVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUmFuZG9tKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcERUICs9IGR0O1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsZURUICs9IGR0O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRlbXBEVCwgdGhpcy5zcGVlZENoYW5nZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50ZW1wRFQgPiB0aGlzLnNwZWVkQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVNob3coKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wRFQgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMudG90YWxlRFQgPiB0aGlzLmVuZERUKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmFuZG9tID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIEdhbWVNb2RsZS5wbGF5RGF0YS50cmFpblR5cGVOdW1iZXIgPSB0aGlzLmxhc3RTaG93VHJhaW5cclxuICAgICAgICAgICAgICAgIEdhbWVNb2RsZS5wbGF5RGF0YS50cmFpblR5cGUgPSB0aGlzLmNoYW5nZVRyYWluVHlwZSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLkVuZENob29zVHJhaW4pXHJcbiAgICAgICAgICAgICAgICAvL2RlbGF55pmC6ZaT5b6M77yM5bCH5ZyW54mH5b6e55Wr6Z2i56e75YuV5Yiw5aC06K2mKHRyeeW5vuWAi+Wwj+aZgilcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hhbmdlU3BlZWRbMF0gIT0gbnVsbCAmJiB0aGlzLnRvdGFsZURUID4gKHRoaXMuZW5kRFQgKiB0aGlzLmNoYW5nZVNwZWVkWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zcGVlZENoYW5nZSA9IHRoaXMuc3BlZWRDaGFuZ2UgKiAyXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkQ2hhbmdlID0gdGhpcy5zcGVlZENoYW5nZSArIE1hdGgucG93KDAuNiwgdGhpcy5jaGFuZ2VTcGVlZC5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVNwZWVkLnNoaWZ0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBzdGFydFJhbmRvbSgpIHtcclxuICAgICAgICB0aGlzLmJ0bl9TdGFydC5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pc1JhbmRvbSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpbml0VHJhaW5TcHJpdGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaXRtZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRtZXNbaW5kZXhdLnNwcnRpZS5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiVHJhaW5UeXBlX1wiICsgaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTaG93KCkge1xyXG4gICAgICAgIHRoaXMuaXRtZXNbdGhpcy5sYXN0U2hvd1RyYWluXS5ub0Nob29zZSgpXHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IHRoaXMubGFzdFNob3dUcmFpblxyXG4gICAgICAgIHdoaWxlIChyYW5kb20gPT0gdGhpcy5sYXN0U2hvd1RyYWluKSB7XHJcbiAgICAgICAgICAgIHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFzdFNob3dUcmFpbiA9IHJhbmRvbTtcclxuICAgICAgICB0aGlzLml0bWVzW3JhbmRvbV0uY2hvb3NlKClcclxuICAgIH1cclxuICAgIGNoYW5nZVRyYWluVHlwZSgpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubGFzdFNob3dUcmFpbikge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVHJhaW5UeXBlLlR5cGUwO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVHJhaW5UeXBlLlR5cGUxO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVHJhaW5UeXBlLlR5cGUyO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVHJhaW5UeXBlLlR5cGUzOztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRyYWluVHlwZS5UeXBlNDs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUcmFpblR5cGUuVHlwZTU7O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGFzeW5jIGdldFRyYWluQWNpdG9uKGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLk1pbmVUcmFpbi5ub2RlKVxyXG4gICAgLy8gICAgICAgICAgICAgLmRlbGF5KDIpXHJcbiAgICAvLyAgICAgICAgICAgICAucmVwZWF0KDIsIGNjLnR3ZWVuKClcclxuICAgIC8vICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxLjMgfSlcclxuICAgIC8vICAgICAgICAgICAgICAgICAudG8oMSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogRWFzaW5nLmVsYXN0aWNPdXQgfSlcclxuICAgIC8vICAgICAgICAgICAgIClcclxuICAgIC8vICAgICAgICAgICAgIC5jYWxsKHJlc29sdmUpXHJcbiAgICAvLyAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgLy8gICAgIH0pXHJcblxyXG4gICAgLy8gfVxyXG59XHJcblxyXG5cclxuY2xhc3MgVHJhaW5JdGVtIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICB0eXBlOiBudW1iZXI7XHJcbiAgICBzcHJ0aWU6IGNjLlNwcml0ZTtcclxuICAgIGFycm93OiBjYy5Ob2RlO1xyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMSlcclxuICAgICAgICB0aGlzLmFycm93ID0gY2MuZmluZChcIkFycm93XCIsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLnNwcnRpZSA9IGNjLmZpbmQoXCJUcmFpblwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgdGhpcy5zcHJ0aWUuc3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXJyb3cuYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuICAgIGNob29zZSgpIHtcclxuICAgICAgICB0aGlzLmFycm93LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMS4zKVxyXG5cclxuICAgIH1cclxuICAgIG5vQ2hvb3NlKCkge1xyXG4gICAgICAgIHRoaXMuYXJyb3cuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMSlcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/UI/StationBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b4dcxefbVLub1KurL+FMPi', 'StationBtn');
// Script/Class/UI/StationBtn.ts

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
var AssetMng_1 = require("../../Asset/AssetMng");
var ButtonMng_1 = require("../../Data/base/ButtonMng");
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var Commad_1 = require("../../Enum/Commad");
var GameEvent_1 = require("../../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StationBtn = /** @class */ (function (_super) {
    __extends(StationBtn, _super);
    function StationBtn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StationBtn.prototype.onLoad = function () {
        this.sprite = cc.find("icon", this.node).getComponent(cc.Sprite);
        this.btn = this.node.getComponent(cc.Button);
        this.node.setPosition(0, 0);
    };
    StationBtn.prototype.chengeStation = function () {
        this.isGet = true;
        this.sprite.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Station_" + this.stationType);
    };
    StationBtn.prototype.setEvent = function (_num) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, AssetMng_1.default.checkState()];
                    case 1:
                        _a.sent();
                        this.sprite.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("UIBtn_Statoin_Gary_" + _num);
                        this.stationType = _num;
                        ButtonMng_1.default.addEvent(this.node, "StationBtn", "eventStation", this.btn);
                        return [2 /*return*/];
                }
            });
        });
    };
    StationBtn.prototype.eventStation = function () {
        if (!this.isGet)
            return;
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.MoveTarget, this.stationType);
    };
    StationBtn = __decorate([
        ccclass
    ], StationBtn);
    return StationBtn;
}(ComponentBase_1.default));
exports.default = StationBtn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcVUlcXFN0YXRpb25CdG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCwrREFBMEQ7QUFDMUQsNENBQTZDO0FBQzdDLGtEQUFpRDtBQUMzQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBYTtJQUFyRDs7SUEyQkEsQ0FBQztJQXJCYSwyQkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFRCxrQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsa0JBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUMxRixDQUFDO0lBQ0ssNkJBQVEsR0FBZCxVQUFlLElBQVk7Ozs7NEJBQ3ZCLHFCQUFNLGtCQUFRLENBQUMsVUFBVSxFQUFFLEVBQUE7O3dCQUEzQixTQUEyQixDQUFBO3dCQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxrQkFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsQ0FBQTt3QkFDckYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7d0JBQ3ZCLG1CQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7Ozs7O0tBRXhFO0lBQ0QsaUNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU07UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxpQkFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDaEYsQ0FBQztJQTFCZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTJCOUI7SUFBRCxpQkFBQztDQTNCRCxBQTJCQyxDQTNCdUMsdUJBQWEsR0EyQnBEO2tCQTNCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3NldE1uZyBmcm9tICcuLi8uLi9Bc3NldC9Bc3NldE1uZyc7XHJcbmltcG9ydCBCdXR0b25NbmcgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0J1dHRvbk1uZyc7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlJztcclxuaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tICcuLi8uLi9FbnVtL0NvbW1hZCc7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gJy4uLy4uL0VudW0vR2FtZUV2ZW50JztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpb25CdG4gZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIHNwcml0ZTogY2MuU3ByaXRlXHJcbiAgICBidG46IGNjLkJ1dHRvblxyXG4gICAgc3RhdGlvblR5cGU6IG51bWJlclxyXG4gICAgaXNHZXQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNwcml0ZSA9IGNjLmZpbmQoXCJpY29uXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICB0aGlzLmJ0biA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oMCwgMClcclxuICAgIH1cclxuXHJcbiAgICBjaGVuZ2VTdGF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuaXNHZXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJTdGF0aW9uX1wiICsgdGhpcy5zdGF0aW9uVHlwZSlcclxuICAgIH1cclxuICAgIGFzeW5jIHNldEV2ZW50KF9udW06IG51bWJlcikge1xyXG4gICAgICAgIGF3YWl0IEFzc2V0TW5nLmNoZWNrU3RhdGUoKVxyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJVSUJ0bl9TdGF0b2luX0dhcnlfXCIgKyBfbnVtKVxyXG4gICAgICAgIHRoaXMuc3RhdGlvblR5cGUgPSBfbnVtXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJTdGF0aW9uQnRuXCIsIFwiZXZlbnRTdGF0aW9uXCIsIHRoaXMuYnRuKVxyXG5cclxuICAgIH1cclxuICAgIGV2ZW50U3RhdGlvbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNHZXQpIHJldHVyblxyXG4gICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuTW92ZVRhcmdldCwgdGhpcy5zdGF0aW9uVHlwZSlcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/DataMan.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b1ffO5kORFmKslnvpZVMUS', 'DataMan');
// Script/Data/DataMan.ts

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
var ComponentBase_1 = require("./base/ComponentBase");
var DataMan = /** @class */ (function (_super) {
    __extends(DataMan, _super);
    function DataMan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nowIndex = 0;
        _this.manSkipSeed = 1000;
        _this.manDefaultSpeed = 30;
        /**
         * X增加速率，撫平每秒速率
         */
        _this.xSpeed = 1;
        /**
         * Y增加速率，撫平每秒速率
         */
        _this.ySpeed = 1;
        return _this;
    }
    return DataMan;
}(ComponentBase_1.default));
exports.default = DataMan;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxEYXRhTWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFpRDtBQUdqRDtJQUFxQywyQkFBYTtJQUFsRDtRQUFBLHFFQXdEQztRQXBERyxjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGlCQUFXLEdBQVcsSUFBSSxDQUFDO1FBQzNCLHFCQUFlLEdBQVcsRUFBRSxDQUFDO1FBRTdCOztXQUVHO1FBQ0gsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUNuQjs7V0FFRztRQUNILFlBQU0sR0FBVyxDQUFDLENBQUM7O0lBdUN2QixDQUFDO0lBQUQsY0FBQztBQUFELENBeERBLEFBd0RDLENBeERvQyx1QkFBYSxHQXdEakQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi9iYXNlL0NvbXBvbmVudEJhc2VcIjtcclxuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4uL0VudW0vR2FtZVN0YXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhTWFuIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcblxyXG4gICAgbk1hbjogY2MuTm9kZTtcclxuICAgIGdldENvdW50OiBudW1iZXI7XHJcbiAgICBub3dJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBtYW5TdGF0ZTogR2FtZVN0YXRlO1xyXG4gICAgbWFuU2tpcFNlZWQ6IG51bWJlciA9IDEwMDA7XHJcbiAgICBtYW5EZWZhdWx0U3BlZWQ6IG51bWJlciA9IDMwO1xyXG4gICAgbWFuU3BlZWQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogWOWinuWKoOmAn+eOh++8jOaSq+W5s+avj+enkumAn+eOh1xyXG4gICAgICovXHJcbiAgICB4U3BlZWQ6IG51bWJlciA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIFnlop7liqDpgJ/njofvvIzmkqvlubPmr4/np5LpgJ/njodcclxuICAgICAqL1xyXG4gICAgeVNwZWVkOiBudW1iZXIgPSAxO1xyXG4gICAgLyoqXHJcbiAgICAgKiDoqK3lrprmr4/np5LpgJ/luqZcclxuICAgICAqL1xyXG4gICAgc2V0U3BlZWQ6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOioiOaZgueVtuWJjeenkuaVuFxyXG4gICAgICovXHJcbiAgICB0ZW1wRHRDb3VudDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDnp5JcclxuICAgICAqL1xyXG5cclxuICAgIGVuZER0OiBudW1iZXI7XHJcblxyXG4gICAgYWRkWDogbnVtYmVyO1xyXG4gICAgYWRkWTogbnVtYmVyO1xyXG5cclxuICAgIHRhcmdldFg6IG51bWJlcjtcclxuICAgIHRhcmdldFk6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFjnmoTmlrnlkJFcclxuICAgICAqL1xyXG4gICAgZGlyZWN0aW9uWDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBZ5pa55ZCRXHJcbiAgICAgKi9cclxuICAgIGRpcmVjdGlvblk6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog55uu5YmN5YGc6Z2g56uZ5L2N572uXHJcbiAgICAgKi9cclxuICAgIG5vd1N0YXRpb246IG51bWJlcjtcclxuXHJcbiAgICBpc0NhbkdvOiBib29sZWFuO1xyXG4gICAgaXNBcnJpdmFsOmJvb2xlYW47XHJcblxyXG4gICAgZ2FtZU1vZGxlOiBHYW1lTW9kbGU7XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/UI/SettingBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43ed1S+sx1BUpPBwcVxQj8L', 'SettingBtn');
// Script/Class/UI/SettingBtn.ts

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
var AssetMng_1 = require("../../Asset/AssetMng");
var ButtonMng_1 = require("../../Data/base/ButtonMng");
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var MusciMng_1 = require("../../Data/base/MusciMng");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SettingBtn = /** @class */ (function (_super) {
    __extends(SettingBtn, _super);
    function SettingBtn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingBtn.prototype.onLoad = function () {
        this.sprite = cc.find("icon", this.node).getComponent(cc.Sprite);
        this.btn = this.node.getComponent(cc.Button);
        this.node.setPosition(0, 0);
    };
    SettingBtn.prototype.setEvent = function (_num) {
        switch (_num) {
            case 0: //聲音   
                this.setSoundSprite();
                ButtonMng_1.default.addEvent(this.node, "SettingBtn", "eventSwitchSound", this.btn);
                break;
        }
    };
    SettingBtn.prototype.eventSwitchSound = function () {
        MusciMng_1.default.swichEffect();
        MusciMng_1.default.swichMusic();
        this.setSoundSprite();
    };
    SettingBtn.prototype.setSoundSprite = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getBoolean;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getBoolean = MusciMng_1.default.isMusicOpen ? "Open" : "Close";
                        return [4 /*yield*/, AssetMng_1.default.checkState()];
                    case 1:
                        _a.sent();
                        this.sprite.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Sound" + getBoolean);
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingBtn = __decorate([
        ccclass
    ], SettingBtn);
    return SettingBtn;
}(ComponentBase_1.default));
exports.default = SettingBtn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcVUlcXFNldHRpbmdCdG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCwrREFBMEQ7QUFDMUQscURBQWdEO0FBQzFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFhO0lBQXJEOztJQTRCQSxDQUFDO0lBekJhLDJCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNoRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7SUFFOUIsQ0FBQztJQUNELDZCQUFRLEdBQVIsVUFBUyxJQUFZO1FBQ2pCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxDQUFDLEVBQUMsT0FBTztnQkFDVixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7Z0JBQ3JCLG1CQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDekUsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUNELHFDQUFnQixHQUFoQjtRQUNJLGtCQUFRLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDdEIsa0JBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNyQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDekIsQ0FBQztJQUNLLG1DQUFjLEdBQXBCOzs7Ozs7d0JBQ1EsVUFBVSxHQUFHLGtCQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzt3QkFDekQscUJBQU0sa0JBQVEsQ0FBQyxVQUFVLEVBQUUsRUFBQTs7d0JBQTNCLFNBQTJCLENBQUE7d0JBRTNCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLGtCQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsQ0FBQTs7Ozs7S0FDaEY7SUEzQmdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E0QjlCO0lBQUQsaUJBQUM7Q0E1QkQsQUE0QkMsQ0E1QnVDLHVCQUFhLEdBNEJwRDtrQkE1Qm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXRNbmcgZnJvbSAnLi4vLi4vQXNzZXQvQXNzZXRNbmcnO1xyXG5pbXBvcnQgQnV0dG9uTW5nIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9CdXR0b25NbmcnO1xyXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tICcuLi8uLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZSc7XHJcbmltcG9ydCBNdXNjaU1uZyBmcm9tICcuLi8uLi9EYXRhL2Jhc2UvTXVzY2lNbmcnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ0J0biBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgc3ByaXRlOiBjYy5TcHJpdGVcclxuICAgIGJ0bjogY2MuQnV0dG9uXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gY2MuZmluZChcImljb25cIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgIHRoaXMuYnRuID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbigwLDApXHJcblxyXG4gICAgfVxyXG4gICAgc2V0RXZlbnQoX251bTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3dpdGNoIChfbnVtKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDovL+iBsumfsyAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTb3VuZFNwcml0ZSgpXHJcbiAgICAgICAgICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIlNldHRpbmdCdG5cIiwgXCJldmVudFN3aXRjaFNvdW5kXCIsIHRoaXMuYnRuKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXZlbnRTd2l0Y2hTb3VuZCgpIHtcclxuICAgICAgICBNdXNjaU1uZy5zd2ljaEVmZmVjdCgpXHJcbiAgICAgICAgTXVzY2lNbmcuc3dpY2hNdXNpYygpXHJcbiAgICAgICAgdGhpcy5zZXRTb3VuZFNwcml0ZSgpXHJcbiAgICB9XHJcbiAgICBhc3luYyBzZXRTb3VuZFNwcml0ZSgpIHtcclxuICAgICAgICBsZXQgZ2V0Qm9vbGVhbiA9IE11c2NpTW5nLmlzTXVzaWNPcGVuID8gXCJPcGVuXCIgOiBcIkNsb3NlXCI7XHJcbiAgICAgICAgYXdhaXQgQXNzZXRNbmcuY2hlY2tTdGF0ZSgpXHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJTb3VuZFwiICsgZ2V0Qm9vbGVhbilcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Message/Choose_Ticket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0345AV5/BOk4zD9ecIh3a7', 'Choose_Ticket');
// Script/Class/Message/Choose_Ticket.ts

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
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var Commad_1 = require("../../Enum/Commad");
var GameEvent_1 = require("../../Enum/GameEvent");
var onClick_1 = require("../../Enum/onClick");
var GameModle_1 = require("../../GameModle");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Choose_Ticket = /** @class */ (function (_super) {
    __extends(Choose_Ticket, _super);
    function Choose_Ticket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Choose_Ticket.prototype.onLoad = function () {
        this.btn_Blue = cc.find("Layout/Blue/btn_Check", this.node);
        this.btn_Red = cc.find("Layout/Red/btn_Check", this.node);
        this.btn_Green = cc.find("Layout/Green/btn_Check", this.node);
        this.btn_Blue.on(onClick_1.onClick.TouchEnd, this.onBtnFuntion, this);
        this.btn_Green.on(onClick_1.onClick.TouchEnd, this.onBtnFuntion, this);
        this.btn_Red.on(onClick_1.onClick.TouchEnd, this.onBtnFuntion, this);
    };
    Choose_Ticket.prototype.start = function () {
        this.node.opacity = 0;
        this.hide();
    };
    Choose_Ticket.prototype.onBtnFuntion = function (e) {
        var _node = e.target;
        switch (_node.parent.name) {
            case "Blue":
                GameModle_1.default.playData.level = 0;
                break;
            case "Red":
                GameModle_1.default.playData.level = 1;
                break;
            case "Green":
                GameModle_1.default.playData.level = 2;
                break;
        }
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndChooseTicket);
        // this.actionHide(() => {
        //     this.EventEmit(GameEvent.SendCommand, Commamnd.EndChooseTicket)
        // });
    };
    Choose_Ticket = __decorate([
        ccclass
    ], Choose_Ticket);
    return Choose_Ticket;
}(ComponentBase_1.default));
exports.default = Choose_Ticket;
var btn = /** @class */ (function () {
    function btn(_node, _level) {
        this.level = _level;
        this.node = _node;
        _node.on(onClick_1.onClick.TouchEnd, function () {
            GameModle_1.default.playData.level = 2;
        });
    }
    return btn;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcQ2hvb3NlX1RpY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsNENBQTZDO0FBQzdDLGtEQUFpRDtBQUNqRCw4Q0FBNkM7QUFDN0MsNkNBQXdDO0FBQ2xDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFhO0lBQXhEOztJQXFDQSxDQUFDO0lBakNhLDhCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMzRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxpQkFBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzVELElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGlCQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFFOUQsQ0FBQztJQUNTLDZCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2YsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxDQUFXO1FBQ3BCLElBQUksS0FBSyxHQUFZLENBQUMsQ0FBQyxNQUFNLENBQUE7UUFDN0IsUUFBUSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUN2QixLQUFLLE1BQU07Z0JBQ1AsbUJBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtnQkFDNUIsTUFBTTtZQUNWLEtBQUssS0FBSztnQkFDTixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO2dCQUM1QixNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLG1CQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7Z0JBQzVCLE1BQU07U0FDYjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUMvRCwwQkFBMEI7UUFDMUIsc0VBQXNFO1FBQ3RFLE1BQU07SUFDVixDQUFDO0lBbkNnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBcUNqQztJQUFELG9CQUFDO0NBckNELEFBcUNDLENBckMwQyx1QkFBYSxHQXFDdkQ7a0JBckNvQixhQUFhO0FBc0NsQztJQUdJLGFBQVksS0FBYyxFQUFFLE1BQWM7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUE7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUE7UUFDakIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxpQkFBTyxDQUFDLFFBQVEsRUFBRTtZQUN2QixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQ2hDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVMLFVBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuLi8uLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZVwiO1xyXG5pbXBvcnQgeyBDb21tYW1uZCB9IGZyb20gXCIuLi8uLi9FbnVtL0NvbW1hZFwiO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tIFwiLi4vLi4vRW51bS9HYW1lRXZlbnRcIjtcclxuaW1wb3J0IHsgb25DbGljayB9IGZyb20gXCIuLi8uLi9FbnVtL29uQ2xpY2tcIjtcclxuaW1wb3J0IEdhbWVNb2RsZSBmcm9tIFwiLi4vLi4vR2FtZU1vZGxlXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9vc2VfVGlja2V0IGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICBidG5fQmx1ZTogY2MuTm9kZTtcclxuICAgIGJ0bl9SZWQ6IGNjLk5vZGU7XHJcbiAgICBidG5fR3JlZW46IGNjLk5vZGU7XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYnRuX0JsdWUgPSBjYy5maW5kKFwiTGF5b3V0L0JsdWUvYnRuX0NoZWNrXCIsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmJ0bl9SZWQgPSBjYy5maW5kKFwiTGF5b3V0L1JlZC9idG5fQ2hlY2tcIiwgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuYnRuX0dyZWVuID0gY2MuZmluZChcIkxheW91dC9HcmVlbi9idG5fQ2hlY2tcIiwgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuYnRuX0JsdWUub24ob25DbGljay5Ub3VjaEVuZCwgdGhpcy5vbkJ0bkZ1bnRpb24sIHRoaXMpXHJcbiAgICAgICAgdGhpcy5idG5fR3JlZW4ub24ob25DbGljay5Ub3VjaEVuZCwgdGhpcy5vbkJ0bkZ1bnRpb24sIHRoaXMpXHJcbiAgICAgICAgdGhpcy5idG5fUmVkLm9uKG9uQ2xpY2suVG91Y2hFbmQsIHRoaXMub25CdG5GdW50aW9uLCB0aGlzKVxyXG5cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLmhpZGUoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuRnVudGlvbihlOiBjYy5FdmVudCkge1xyXG4gICAgICAgIGxldCBfbm9kZTogY2MuTm9kZSA9IGUudGFyZ2V0XHJcbiAgICAgICAgc3dpdGNoIChfbm9kZS5wYXJlbnQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQmx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsID0gMFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJSZWRcIjpcclxuICAgICAgICAgICAgICAgIEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCA9IDFcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiR3JlZW5cIjpcclxuICAgICAgICAgICAgICAgIEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCA9IDJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLkVuZENob29zZVRpY2tldClcclxuICAgICAgICAvLyB0aGlzLmFjdGlvbkhpZGUoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLkVuZENob29zZVRpY2tldClcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuY2xhc3MgYnRuIHtcclxuICAgIGxldmVsOiBudW1iZXI7XHJcbiAgICBub2RlOiBjYy5Ob2RlO1xyXG4gICAgY29uc3RydWN0b3IoX25vZGU6IGNjLk5vZGUsIF9sZXZlbDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IF9sZXZlbFxyXG4gICAgICAgIHRoaXMubm9kZSA9IF9ub2RlXHJcbiAgICAgICAgX25vZGUub24ob25DbGljay5Ub3VjaEVuZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBHYW1lTW9kbGUucGxheURhdGEubGV2ZWwgPSAyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/DelayTime.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba762QGaF1KO7gYDVFw5F+p', 'DelayTime');
// Script/Data/DelayTime.ts

"use strict";
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
exports.MyDelay = void 0;
var MyDelay = /** @class */ (function () {
    function MyDelay() {
    }
    MyDelay.prototype.setDelay = function (_num) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            resolve();
                        }, 1000 * _num);
                    })];
            });
        });
    };
    return MyDelay;
}());
exports.MyDelay = MyDelay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxEZWxheVRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQVFBLENBQUM7SUFQUywwQkFBUSxHQUFkLFVBQWUsSUFBWTs7O2dCQUN2QixzQkFBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUNyQyxVQUFVLENBQUM7NEJBQ1AsT0FBTyxFQUFFLENBQUE7d0JBQ2IsQ0FBQyxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsQ0FBQyxDQUFDLEVBQUE7OztLQUNMO0lBQ0wsY0FBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTXlEZWxheSB7XHJcbiAgICBhc3luYyBzZXREZWxheShfbnVtOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9LCAxMDAwICogX251bSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/UI/Panel_UI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75793Ux5xFB6bZsr3P/Hik4', 'Panel_UI');
// Script/Class/UI/Panel_UI.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var GameEvent_1 = require("../../Enum/GameEvent");
var Props_Feature_1 = require("./Props_Feature");
var Setting_1 = require("./Setting");
var Station_1 = require("./Station");
var Panel_UI = /** @class */ (function (_super) {
    __extends(Panel_UI, _super);
    function Panel_UI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel_UI.prototype.onLoad = function () {
        this.node.opacity = 255;
        this.props_Feature = cc.find("Props_Feature", this.node).addComponent(Props_Feature_1.default);
        this.station = cc.find("Station", this.node).addComponent(Station_1.default);
        this.setting = cc.find("Setting", this.node).addComponent(Setting_1.default);
        this.initEvent(GameEvent_1.GameEvent.UIReset, this.reset);
        this.reset();
    };
    Panel_UI.prototype.reset = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkInit()];
                    case 1:
                        _a.sent();
                        this.defaultReset();
                        this.station.scroll.node.active = true;
                        this.station.isOpen = this.station.scroll.node.active;
                        this.setting.scroll.node.active = false;
                        this.setting.isOpen = this.setting.scroll.node.active;
                        return [2 /*return*/];
                }
            });
        });
    };
    Panel_UI.prototype.checkInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var repet = setInterval(function () {
                            var check = _this.station.checkInit();
                            if (check) {
                                clearInterval(repet);
                                resolve();
                            }
                        }, 500);
                    })];
            });
        });
    };
    return Panel_UI;
}(ComponentBase_1.default));
exports.default = Panel_UI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcVUlcXFBhbmVsX1VJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCxrREFBaUQ7QUFDakQsaURBQTRDO0FBQzVDLHFDQUFnQztBQUNoQyxxQ0FBZ0M7QUFFaEM7SUFBc0MsNEJBQWE7SUFBbkQ7O0lBaUNBLENBQUM7SUE3QmEseUJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUE7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQTtRQUNwRixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsaUJBQU8sQ0FBQyxDQUFBO1FBQ2xFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxpQkFBTyxDQUFDLENBQUE7UUFFbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDN0MsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFDSyx3QkFBSyxHQUFYOzs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQXRCLFNBQXNCLENBQUE7d0JBQ3RCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTt3QkFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7d0JBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7d0JBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO3dCQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBOzs7OztLQUN4RDtJQUNLLDRCQUFTLEdBQWY7Ozs7Z0JBQ0ksc0JBQU8sSUFBSSxPQUFPLENBQU8sVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDckMsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDOzRCQUNwQixJQUFJLEtBQUssR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFBOzRCQUNwQyxJQUFJLEtBQUssRUFBRTtnQ0FDUCxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0NBQ3JCLE9BQU8sRUFBRSxDQUFDOzZCQUNiO3dCQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtvQkFDWCxDQUFDLENBQUMsRUFBQTs7O0tBQ0w7SUFFTCxlQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsQ0FqQ3FDLHVCQUFhLEdBaUNsRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuLi8uLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZVwiO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tIFwiLi4vLi4vRW51bS9HYW1lRXZlbnRcIjtcclxuaW1wb3J0IFByb3BzX0ZlYXR1cmUgZnJvbSBcIi4vUHJvcHNfRmVhdHVyZVwiO1xyXG5pbXBvcnQgU2V0dGluZyBmcm9tIFwiLi9TZXR0aW5nXCI7XHJcbmltcG9ydCBTdGF0aW9uIGZyb20gXCIuL1N0YXRpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsX1VJIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICBwcm9wc19GZWF0dXJlOiBQcm9wc19GZWF0dXJlO1xyXG4gICAgc3RhdGlvbjogU3RhdGlvblxyXG4gICAgc2V0dGluZzogU2V0dGluZ1xyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NVxyXG4gICAgICAgIHRoaXMucHJvcHNfRmVhdHVyZSA9IGNjLmZpbmQoXCJQcm9wc19GZWF0dXJlXCIsIHRoaXMubm9kZSkuYWRkQ29tcG9uZW50KFByb3BzX0ZlYXR1cmUpXHJcbiAgICAgICAgdGhpcy5zdGF0aW9uID0gY2MuZmluZChcIlN0YXRpb25cIiwgdGhpcy5ub2RlKS5hZGRDb21wb25lbnQoU3RhdGlvbilcclxuICAgICAgICB0aGlzLnNldHRpbmcgPSBjYy5maW5kKFwiU2V0dGluZ1wiLCB0aGlzLm5vZGUpLmFkZENvbXBvbmVudChTZXR0aW5nKVxyXG5cclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuVUlSZXNldCwgdGhpcy5yZXNldClcclxuICAgICAgICB0aGlzLnJlc2V0KClcclxuICAgIH1cclxuICAgIGFzeW5jIHJlc2V0KCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY2hlY2tJbml0KClcclxuICAgICAgICB0aGlzLmRlZmF1bHRSZXNldCgpXHJcbiAgICAgICAgdGhpcy5zdGF0aW9uLnNjcm9sbC5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnN0YXRpb24uaXNPcGVuID0gdGhpcy5zdGF0aW9uLnNjcm9sbC5ub2RlLmFjdGl2ZVxyXG4gICAgICAgIHRoaXMuc2V0dGluZy5zY3JvbGwubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2V0dGluZy5pc09wZW4gPSB0aGlzLnNldHRpbmcuc2Nyb2xsLm5vZGUuYWN0aXZlXHJcbiAgICB9XHJcbiAgICBhc3luYyBjaGVja0luaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlcGV0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5zdGF0aW9uLmNoZWNrSW5pdCgpXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHJlcGV0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDUwMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/MyMath.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23d8biZgYRML60I5fNazIGU', 'MyMath');
// Script/Data/MyMath.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyMath = /** @class */ (function () {
    function MyMath() {
    }
    /**
    * 加法
    */
    MyMath.prototype.add = function (value1, value2, lenght) {
        return Math.round(value1 * 1000 + value2 * 1000) / 1000;
    };
    /**
   * 減法
   */
    MyMath.prototype.minus = function (value1, value2, lenght) {
        return ((value1 * 1000) - (value2 * 1000)) / 1000;
    };
    /**
   * 乘法
   */
    MyMath.prototype.multiply = function (value1, value2, lenght) {
        return Math.round(value1 * 1000 * (value2 * 1000)) / Math.pow(1000, 2);
    };
    /**
   * 除法
   */
    MyMath.prototype.divide = function (value1, value2, lenght) {
        return value1 * 1000 / (value2 * 1000);
    };
    MyMath.prototype.round = function (value, length) {
        if (length === void 0) { length = 4; }
        var val = value;
        var split = val.toString().split('.');
        if (split.length > 1 && split[1].length > length) {
            return Number(val.toPrecision(split[0].length + length));
        }
        else
            return value;
    };
    return MyMath;
}());
exports.default = new MyMath();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxNeU1hdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBb0NBLENBQUM7SUFuQ0c7O01BRUU7SUFDRixvQkFBRyxHQUFILFVBQUksTUFBYyxFQUFFLE1BQWMsRUFBRSxNQUFlO1FBQy9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUE7SUFDM0QsQ0FBQztJQUNEOztLQUVDO0lBQ0Qsc0JBQUssR0FBTCxVQUFNLE1BQWMsRUFBRSxNQUFjLEVBQUUsTUFBZTtRQUNqRCxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUE7SUFDckQsQ0FBQztJQUNEOztLQUVDO0lBQ0QseUJBQVEsR0FBUixVQUFTLE1BQWMsRUFBRSxNQUFjLEVBQUUsTUFBZTtRQUNwRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzFFLENBQUM7SUFDRDs7S0FFQztJQUNELHVCQUFNLEdBQU4sVUFBTyxNQUFjLEVBQUUsTUFBYyxFQUFFLE1BQWU7UUFDbEQsT0FBTyxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFDRCxzQkFBSyxHQUFMLFVBQU0sS0FBYSxFQUFFLE1BQWtCO1FBQWxCLHVCQUFBLEVBQUEsVUFBa0I7UUFFbkMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFBO1FBRWYsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUVyQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFO1lBQzlDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzVEOztZQUNJLE9BQU8sS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FwQ0EsQUFvQ0MsSUFBQTtBQUNELGtCQUFlLElBQUksTUFBTSxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNeU1hdGgge1xyXG4gICAgLyoqXHJcbiAgICAqIOWKoOazlVxyXG4gICAgKi9cclxuICAgIGFkZCh2YWx1ZTE6IG51bWJlciwgdmFsdWUyOiBudW1iZXIsIGxlbmdodD86IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlMSAqIDEwMDAgKyB2YWx1ZTIgKiAxMDAwKSAvIDEwMDBcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAqIOa4m+azlVxyXG4gICAqL1xyXG4gICAgbWludXModmFsdWUxOiBudW1iZXIsIHZhbHVlMjogbnVtYmVyLCBsZW5naHQ/OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gKCh2YWx1ZTEgKiAxMDAwKSAtICh2YWx1ZTIgKiAxMDAwKSkgLyAxMDAwXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgKiDkuZjms5VcclxuICAgKi9cclxuICAgIG11bHRpcGx5KHZhbHVlMTogbnVtYmVyLCB2YWx1ZTI6IG51bWJlciwgbGVuZ2h0PzogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUxICogMTAwMCAqICh2YWx1ZTIgKiAxMDAwKSkgLyBNYXRoLnBvdygxMDAwLCAyKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICog6Zmk5rOVXHJcbiAgICovXHJcbiAgICBkaXZpZGUodmFsdWUxOiBudW1iZXIsIHZhbHVlMjogbnVtYmVyLCBsZW5naHQ/OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUxICogMTAwMCAvICh2YWx1ZTIgKiAxMDAwKVxyXG4gICAgfVxyXG4gICAgcm91bmQodmFsdWU6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIgPSA0KTogbnVtYmVyIHtcclxuXHJcbiAgICAgICAgbGV0IHZhbCA9IHZhbHVlXHJcblxyXG4gICAgICAgIGxldCBzcGxpdCA9IHZhbC50b1N0cmluZygpLnNwbGl0KCcuJylcclxuXHJcbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA+IDEgJiYgc3BsaXRbMV0ubGVuZ3RoID4gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIodmFsLnRvUHJlY2lzaW9uKHNwbGl0WzBdLmxlbmd0aCArIGxlbmd0aCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHJldHVybiB2YWx1ZVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBNeU1hdGgoKTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/UI/Props_Feature.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f944L5z/xKur9JQ+f4SeDm', 'Props_Feature');
// Script/Class/UI/Props_Feature.ts

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
var AssetMng_1 = require("../../Asset/AssetMng");
var ButtonMng_1 = require("../../Data/base/ButtonMng");
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var Commad_1 = require("../../Enum/Commad");
var GameEvent_1 = require("../../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Props_Feature = /** @class */ (function (_super) {
    __extends(Props_Feature, _super);
    function Props_Feature() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isGo = false;
        return _this;
    }
    Props_Feature.prototype.onLoad = function () {
        this.btn_Start_Stop = cc.find("BG_Layout/Start_Stop", this.node).getComponent(cc.Button);
        this.sprtie_start_Stop = cc.find("BG_Layout/Start_Stop/icon", this.node).getComponent(cc.Sprite);
        this.skip = cc.find("BG_Layout/Skip", this.node).getComponent(cc.Button);
        this.resetView = cc.find("BG_Layout/ResetView", this.node).getComponent(cc.Button);
        ButtonMng_1.default.addEvent(this.node, "Props_Feature", "eventStart_Stop", this.btn_Start_Stop);
        ButtonMng_1.default.addEvent(this.node, "Props_Feature", "eventSkip", this.skip);
        ButtonMng_1.default.addEvent(this.node, "Props_Feature", "evetResetView", this.resetView);
    };
    Props_Feature.prototype.eventStart_Stop = function (e, _customEventData) {
        if (!this.isGo)
            this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.MenGO);
        else
            this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.ManWait);
        this.setStart_Stop();
    };
    Props_Feature.prototype.eventSkip = function (e, _customEventData) {
        this.EventEmit(GameEvent_1.GameEvent.ManSkip);
    };
    Props_Feature.prototype.evetResetView = function (e, _customEventData) {
        this.EventEmit(GameEvent_1.GameEvent.MoveToManCamera);
    };
    /**
     *
     * @param isboolean isGO?
     */
    Props_Feature.prototype.setStart_Stop = function (isboolean) {
        console.error(isboolean);
        this.isGo = isboolean == null || isboolean == undefined ? !this.isGo : isboolean;
        var getBoolean = this.isGo ? "Stop" : "Start"; //要相反，如果正在走就要顯示停止
        this.sprtie_start_Stop.node.x = this.isGo ? 0 : 4.5;
        this.sprtie_start_Stop.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Feature_" + getBoolean);
    };
    Props_Feature.prototype.getProps = function (_num) {
        switch (_num) {
            case 6:
                this.Props6.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("GetProps_" + _num);
                break;
            case 11:
                this.Props11.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("GetProps_" + _num);
                break;
            case 15:
                this.Props15.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("GetProps_" + _num);
                break;
            default:
                break;
        }
    };
    Props_Feature = __decorate([
        ccclass
    ], Props_Feature);
    return Props_Feature;
}(ComponentBase_1.default));
exports.default = Props_Feature;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcVUlcXFByb3BzX0ZlYXR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCwrREFBMEQ7QUFDMUQsNENBQTZDO0FBQzdDLGtEQUFpRDtBQUMzQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBYTtJQUF4RDtRQUFBLHFFQThEQztRQTdERyxVQUFJLEdBQVksS0FBSyxDQUFDOztJQTZEMUIsQ0FBQztJQXBEYSw4QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4RixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNoRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRWxGLG1CQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUN0RixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3RFLG1CQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbkYsQ0FBQztJQUNELHVDQUFlLEdBQWYsVUFBZ0IsQ0FBVyxFQUFFLGdCQUF3QjtRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLGlCQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBRXRELElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMzRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUNELGlDQUFTLEdBQVQsVUFBVSxDQUFXLEVBQUUsZ0JBQXdCO1FBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBQ0QscUNBQWEsR0FBYixVQUFjLENBQVcsRUFBRSxnQkFBd0I7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFDRDs7O09BR0c7SUFDSCxxQ0FBYSxHQUFiLFVBQWMsU0FBbUI7UUFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUE7UUFDaEYsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUEsQ0FBQSxpQkFBaUI7UUFDOUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDbkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxrQkFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUE7SUFDL0YsQ0FBQztJQUdELGdDQUFRLEdBQVIsVUFBUyxJQUFZO1FBQ2pCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLGtCQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQTtnQkFDM0UsTUFBTTtZQUNWLEtBQUssRUFBRTtnQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxrQkFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUE7Z0JBQzVFLE1BQU07WUFDVixLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsa0JBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFBO2dCQUM1RSxNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTTtTQUNiO0lBRUwsQ0FBQztJQTdEZ0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQThEakM7SUFBRCxvQkFBQztDQTlERCxBQThEQyxDQTlEMEMsdUJBQWEsR0E4RHZEO2tCQTlEb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3NldE1uZyBmcm9tICcuLi8uLi9Bc3NldC9Bc3NldE1uZyc7XHJcbmltcG9ydCBCdXR0b25NbmcgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0J1dHRvbk1uZyc7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlJztcclxuaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tICcuLi8uLi9FbnVtL0NvbW1hZCc7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gJy4uLy4uL0VudW0vR2FtZUV2ZW50JztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BzX0ZlYXR1cmUgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGlzR286IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGJ0bl9TdGFydF9TdG9wOiBjYy5CdXR0b247XHJcbiAgICBzcHJ0aWVfc3RhcnRfU3RvcDogY2MuU3ByaXRlXHJcbiAgICBza2lwOiBjYy5CdXR0b25cclxuICAgIHJlc2V0VmlldzogY2MuQnV0dG9uXHJcblxyXG4gICAgUHJvcHM2OiBjYy5TcHJpdGU7XHJcbiAgICBQcm9wczExOiBjYy5TcHJpdGU7XHJcbiAgICBQcm9wczE1OiBjYy5TcHJpdGU7XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYnRuX1N0YXJ0X1N0b3AgPSBjYy5maW5kKFwiQkdfTGF5b3V0L1N0YXJ0X1N0b3BcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMuc3BydGllX3N0YXJ0X1N0b3AgPSBjYy5maW5kKFwiQkdfTGF5b3V0L1N0YXJ0X1N0b3AvaWNvblwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgdGhpcy5za2lwID0gY2MuZmluZChcIkJHX0xheW91dC9Ta2lwXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLnJlc2V0VmlldyA9IGNjLmZpbmQoXCJCR19MYXlvdXQvUmVzZXRWaWV3XCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJQcm9wc19GZWF0dXJlXCIsIFwiZXZlbnRTdGFydF9TdG9wXCIsIHRoaXMuYnRuX1N0YXJ0X1N0b3ApXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJQcm9wc19GZWF0dXJlXCIsIFwiZXZlbnRTa2lwXCIsIHRoaXMuc2tpcClcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIlByb3BzX0ZlYXR1cmVcIiwgXCJldmV0UmVzZXRWaWV3XCIsIHRoaXMucmVzZXRWaWV3KVxyXG4gICAgfVxyXG4gICAgZXZlbnRTdGFydF9TdG9wKGU6IGNjLkV2ZW50LCBfY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNHbylcclxuICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5NZW5HTyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLk1hbldhaXQpXHJcbiAgICAgICAgdGhpcy5zZXRTdGFydF9TdG9wKClcclxuICAgIH1cclxuICAgIGV2ZW50U2tpcChlOiBjYy5FdmVudCwgX2N1c3RvbUV2ZW50RGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50Lk1hblNraXApXHJcbiAgICB9XHJcbiAgICBldmV0UmVzZXRWaWV3KGU6IGNjLkV2ZW50LCBfY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuTW92ZVRvTWFuQ2FtZXJhKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBpc2Jvb2xlYW4gaXNHTz9cclxuICAgICAqL1xyXG4gICAgc2V0U3RhcnRfU3RvcChpc2Jvb2xlYW4/OiBib29sZWFuKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihpc2Jvb2xlYW4pO1xyXG4gICAgICAgIHRoaXMuaXNHbyA9IGlzYm9vbGVhbiA9PSBudWxsIHx8IGlzYm9vbGVhbiA9PSB1bmRlZmluZWQgPyAhdGhpcy5pc0dvIDogaXNib29sZWFuXHJcbiAgICAgICAgbGV0IGdldEJvb2xlYW4gPSB0aGlzLmlzR28gPyBcIlN0b3BcIiA6IFwiU3RhcnRcIi8v6KaB55u45Y+N77yM5aaC5p6c5q2j5Zyo6LWw5bCx6KaB6aGv56S65YGc5q2iXHJcbiAgICAgICAgdGhpcy5zcHJ0aWVfc3RhcnRfU3RvcC5ub2RlLnggPSB0aGlzLmlzR28gPyAwIDogNC41XHJcbiAgICAgICAgdGhpcy5zcHJ0aWVfc3RhcnRfU3RvcC5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiRmVhdHVyZV9cIiArIGdldEJvb2xlYW4pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFByb3BzKF9udW06IG51bWJlcikge1xyXG4gICAgICAgIHN3aXRjaCAoX251bSkge1xyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICB0aGlzLlByb3BzNi5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiR2V0UHJvcHNfXCIgKyBfbnVtKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLlByb3BzMTEuc3ByaXRlRnJhbWUgPSBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIkdldFByb3BzX1wiICsgX251bSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE1OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5Qcm9wczE1LnNwcml0ZUZyYW1lID0gQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJHZXRQcm9wc19cIiArIF9udW0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Message/StationInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88157t3c0ZIg602k6tJvE0o', 'StationInfo');
// Script/Class/Message/StationInfo.ts

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
var GameEvent_1 = require("../../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StationInfo = /** @class */ (function (_super) {
    __extends(StationInfo, _super);
    function StationInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StationInfo.prototype.onLoad = function () {
        this.trainName = cc.find("TrainName", this.node).getComponent(cc.Label);
        this.scrollView = cc.find("scroll_Info", this.node).getComponent(cc.ScrollView);
        this.trainInfo = cc.find("Mask/con/TrainInfo", this.scrollView.node).getComponent(cc.Label);
        this.trainSprite = cc.find("TrainSprite", this.node).getComponent(cc.Sprite);
        this.btn_back = cc.find("Item_Btn", this.node).getComponent(cc.Button);
        this.defaultReset();
    };
    StationInfo.prototype.start = function () {
        ButtonMng_1.default.addEvent(this.node, "StationInfo", "sendEvent", this.btn_back);
    };
    StationInfo.prototype.sendEvent = function (e, _customEventData) {
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndtationInfo);
    };
    StationInfo.prototype.reset = function () {
        this.trainSprite.spriteFrame = null;
        this.trainInfo.string = "";
        this.trainName.string = "";
        this.node.opacity = 0;
    };
    StationInfo.prototype.setSprite = function (_spriteFrame) {
        this.trainSprite.spriteFrame = _spriteFrame;
    };
    StationInfo.prototype.setInfo = function (str) {
        this.trainInfo.string = str;
    };
    StationInfo.prototype.setTrainName = function (str) {
        this.trainName.string = str;
    };
    StationInfo = __decorate([
        ccclass
    ], StationInfo);
    return StationInfo;
}(ComponentBase_1.default));
exports.default = StationInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcU3RhdGlvbkluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUMxRCw0Q0FBNkM7QUFDN0Msa0RBQWlEO0FBRTNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFhO0lBQXREOztJQW9DQSxDQUFDO0lBOUJhLDRCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3RFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBQ1MsMkJBQUssR0FBZjtRQUNJLG1CQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDNUUsQ0FBQztJQUNELCtCQUFTLEdBQVQsVUFBVSxDQUFXLEVBQUUsZ0JBQXdCO1FBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUNqRSxDQUFDO0lBQ0QsMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBQ0QsK0JBQVMsR0FBVCxVQUFVLFlBQTRCO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQTtJQUMvQyxDQUFDO0lBQ0QsNkJBQU8sR0FBUCxVQUFRLEdBQVc7UUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7SUFDL0IsQ0FBQztJQUNELGtDQUFZLEdBQVosVUFBYSxHQUFXO1FBRXBCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtJQUMvQixDQUFDO0lBbkNnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBb0MvQjtJQUFELGtCQUFDO0NBcENELEFBb0NDLENBcEN3Qyx1QkFBYSxHQW9DckQ7a0JBcENvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbk1uZyBmcm9tICcuLi8uLi9EYXRhL2Jhc2UvQnV0dG9uTW5nJztcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2UnO1xyXG5pbXBvcnQgeyBDb21tYW1uZCB9IGZyb20gJy4uLy4uL0VudW0vQ29tbWFkJztcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSAnLi4vLi4vRW51bS9HYW1lRXZlbnQnO1xyXG5pbXBvcnQgQ29udHJvbGwgZnJvbSAnLi4vLi4vR2FtZUNvbnRyb2xsJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpb25JbmZvIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICB0cmFpblNwcml0ZTogY2MuU3ByaXRlO1xyXG4gICAgdHJhaW5OYW1lOiBjYy5MYWJlbDtcclxuICAgIHRyYWluSW5mbzogY2MuTGFiZWw7XHJcbiAgICBzY3JvbGxWaWV3OiBjYy5TY3JvbGxWaWV3O1xyXG4gICAgYnRuX2JhY2s6IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFpbk5hbWUgPSBjYy5maW5kKFwiVHJhaW5OYW1lXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcgPSBjYy5maW5kKFwic2Nyb2xsX0luZm9cIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XHJcbiAgICAgICAgdGhpcy50cmFpbkluZm8gPSBjYy5maW5kKFwiTWFzay9jb24vVHJhaW5JbmZvXCIsIHRoaXMuc2Nyb2xsVmlldy5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMudHJhaW5TcHJpdGUgPSBjYy5maW5kKFwiVHJhaW5TcHJpdGVcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB0aGlzLmJ0bl9iYWNrID0gY2MuZmluZChcIkl0ZW1fQnRuXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLmRlZmF1bHRSZXNldCgpXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJTdGF0aW9uSW5mb1wiLCBcInNlbmRFdmVudFwiLCB0aGlzLmJ0bl9iYWNrKVxyXG4gICAgfVxyXG4gICAgc2VuZEV2ZW50KGU6IGNjLkV2ZW50LCBfY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLkVuZHRhdGlvbkluZm8pXHJcbiAgICB9XHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnRyYWluU3ByaXRlLnNwcml0ZUZyYW1lID0gbnVsbFxyXG4gICAgICAgIHRoaXMudHJhaW5JbmZvLnN0cmluZyA9IFwiXCJcclxuICAgICAgICB0aGlzLnRyYWluTmFtZS5zdHJpbmcgPSBcIlwiXHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwXHJcbiAgICB9XHJcbiAgICBzZXRTcHJpdGUoX3Nwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkge1xyXG4gICAgICAgIHRoaXMudHJhaW5TcHJpdGUuc3ByaXRlRnJhbWUgPSBfc3ByaXRlRnJhbWVcclxuICAgIH1cclxuICAgIHNldEluZm8oc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRyYWluSW5mby5zdHJpbmcgPSBzdHJcclxuICAgIH1cclxuICAgIHNldFRyYWluTmFtZShzdHI6IHN0cmluZykge1xyXG5cclxuICAgICAgICB0aGlzLnRyYWluTmFtZS5zdHJpbmcgPSBzdHJcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/QA/PropsLibrary.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5a7eAWDtNExqYTmI1i+AIK', 'PropsLibrary');
// Script/Data/QA/PropsLibrary.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropsLibrary = /** @class */ (function () {
    function PropsLibrary() {
        this.lib = new Map([
            [5, "恭喜您獲得懷錶!"],
            [11, "恭喜您獲得哨子!"],
            [15, "恭喜您獲得列車長帽!"],
        ]);
    }
    return PropsLibrary;
}());
exports.default = new PropsLibrary();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxRQVxcUHJvcHNMaWJyYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUNJLFFBQUcsR0FBcUIsSUFBSSxHQUFHLENBQUM7WUFDNUIsQ0FBQyxDQUFDLEVBQUMsVUFBVSxDQUFDO1lBQ2QsQ0FBQyxFQUFFLEVBQUMsVUFBVSxDQUFDO1lBQ2YsQ0FBQyxFQUFFLEVBQUMsWUFBWSxDQUFDO1NBQ3BCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFBRCxtQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBQ0Qsa0JBQWUsSUFBSSxZQUFZLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb3BzTGlicmFyeSB7XHJcbiAgICBsaWIgOk1hcDxudW1iZXIsc3RyaW5nPj1uZXcgTWFwKFtcclxuICAgICAgICBbNSxcIuaBreWWnOaCqOeNsuW+l+aHt+mMtiFcIl0sXHJcbiAgICAgICAgWzExLFwi5oGt5Zac5oKo542y5b6X5ZOo5a2QIVwiXSxcclxuICAgICAgICBbMTUsXCLmga3llpzmgqjnjbLlvpfliJfou4rplbfluL0hXCJdLFxyXG4gICAgXSlcclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJvcHNMaWJyYXJ5KCk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/QA/ChooseLibrary.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fd68OptKxLM4yP3sYDmx+J', 'ChooseLibrary');
// Script/Data/QA/ChooseLibrary.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChooseLibrary = /** @class */ (function () {
    function ChooseLibrary(level, qaLib_num) {
        this.chooseLib = [];
        this.lib = [];
        var libClass = new lib();
        switch (level) {
            case 0:
                this.lib = libClass.easy;
                break;
            case 1:
                this.lib = libClass.normal;
                break;
            case 2:
                this.lib = libClass.hard;
                break;
        }
        for (var index = 0; index < qaLib_num.length; index++) {
            this.chooseLib.push(this.lib[qaLib_num[index]]);
        }
        // console.log("等級" + level, "題庫：" + this.chooseLib);
    }
    return ChooseLibrary;
}());
exports.default = ChooseLibrary;
var lib = /** @class */ (function () {
    function lib() {
        this.easy = [
            "A. 星星。\nB. 月亮。\nC. 陽光。",
            "A. 可以。\nB. 不可以。\nC. 視情況而定。",
            "A. 帶回家裡使用。\nB. 交給列車長。\nC. 交給車站人員。",
            "A. 不買票搭霸王車。\nB. 依規定買車票。\nC. 買身分不符的法定優待票。",
            "A. 內政部警政署。\nB. 法務部矯正署。\nC. 法務部廉政署。 ",
            "A. 配戴口罩。\nB. 配合量測體溫。\nC. 以上皆是。 ",
            "A. 人事單位。\nB. 會計單位。\nC. 政風單位。 ",
            "A. 1922。\nB. 1933。\nC. 1999。 ",
            "A. 直接拿起來交給警察。\nB. 告知警察或車站人員。\nC. 不管他。",
        ];
        this.normal = [
            "A. 1922。\nB. 1933。\nC. 1999。",
            "A. 日南。\nB. 談文。\nC. 通霄。",
            "A. 02-2882-5252。\nB. 0800-286-586(你爆料，我爆料)。\nC. 0800-123-456。",
            "A. 1萬元。\nB. 5萬元。\nC. 9萬元。",
            "A. 扇形車庫。\nB. 富岡基地。\nC. 高雄機廠。",
            "A. 不買票搭霸王車。\nB. 購買合乎身分之全票車票。\nC. 購買身分不符之法定優待票(敬老票或愛心票)。",
            "A. 400萬元。\nB. 670萬元。\nC. 1,000萬元。",
            "A. 內政部警政署。\nB. 法務部矯正署。\nC. 法務部廉政署。",
            "A. 險阻、平安、注意慢行。\nB. 平安、險阻、注意慢行。\nC. 平安、注意慢行、險阻。",
        ];
        this.hard = [
            "A. 不行，應杜絕一切利益輸送行為。\nB. 可以，以合於市場行情辦理採購即可。\nC. 原則不行，但符合利衝法規定辦理之採購不在此限。",
            "A. 1922。\nB. 1933。\nC. 1999。",
            "A. SMS。\nB. SOS。\nC. SAS。",
            "A. 02-2882-5252。\nB. 0800-286-586(你爆料，我爆料)。\nC. 0800-123-456。",
            "A. 3,000元。\nB. 5,000元。\nC. 6,000元。 ",
            "A. 3日。\nB. 5日。\nC. 7日。",
            "A. 400萬元。\nB. 670萬元。\nC. 1,000萬元。",
            "A. 檢查寄件者真偽。\nB. 直接開啟郵件超連結及附件。\nC. 寄送機敏信件避免收件人資訊外洩。",
            "A. 10月10日。\nB. 12月9日。\nC. 12月25日。",
        ];
    }
    return lib;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxRQVxcQ2hvb3NlTGlicmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBSUksdUJBQVksS0FBYSxFQUFFLFNBQW1CO1FBRjlDLGNBQVMsR0FBYSxFQUFFLENBQUE7UUFDeEIsUUFBRyxHQUFhLEVBQUUsQ0FBQTtRQUVkLElBQUksUUFBUSxHQUFRLElBQUksR0FBRyxFQUFFLENBQUE7UUFDN0IsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLENBQUM7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUM3QixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDL0IsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLE1BQU07U0FDYjtRQUNELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNsRDtRQUNELHFEQUFxRDtJQUV6RCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBOztBQUNEO0lBQUE7UUFDSSxTQUFJLEdBQWE7WUFDYix3QkFBd0I7WUFDeEIsNEJBQTRCO1lBQzVCLG1DQUFtQztZQUNuQywwQ0FBMEM7WUFDMUMscUNBQXFDO1lBQ3JDLGlDQUFpQztZQUNqQywrQkFBK0I7WUFDL0IsK0JBQStCO1lBQy9CLHVDQUF1QztTQUMxQyxDQUFBO1FBQ0QsV0FBTSxHQUFhO1lBQ2YsOEJBQThCO1lBQzlCLHdCQUF3QjtZQUN4QiwrREFBK0Q7WUFDL0QsMkJBQTJCO1lBQzNCLDhCQUE4QjtZQUM5Qix5REFBeUQ7WUFDekQsbUNBQW1DO1lBQ25DLG9DQUFvQztZQUNwQyxnREFBZ0Q7U0FDbkQsQ0FBQTtRQUNELFNBQUksR0FBYTtZQUNiLHNFQUFzRTtZQUN0RSw4QkFBOEI7WUFDOUIsMkJBQTJCO1lBQzNCLCtEQUErRDtZQUMvRCxxQ0FBcUM7WUFDckMsd0JBQXdCO1lBQ3hCLG1DQUFtQztZQUNuQyxvREFBb0Q7WUFDcEQsbUNBQW1DO1NBQ3RDLENBQUE7SUFDTCxDQUFDO0lBQUQsVUFBQztBQUFELENBbENBLEFBa0NDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9vc2VMaWJyYXJ5IHtcclxuXHJcbiAgICBjaG9vc2VMaWI6IHN0cmluZ1tdID0gW11cclxuICAgIGxpYjogc3RyaW5nW10gPSBbXVxyXG4gICAgY29uc3RydWN0b3IobGV2ZWw6IG51bWJlciwgcWFMaWJfbnVtOiBudW1iZXJbXSkge1xyXG4gICAgICAgIGxldCBsaWJDbGFzczogbGliID0gbmV3IGxpYigpXHJcbiAgICAgICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IHRoaXMubGliID0gbGliQ2xhc3MuZWFzeTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6IHRoaXMubGliID0gbGliQ2xhc3Mubm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjogdGhpcy5saWIgPSBsaWJDbGFzcy5oYXJkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBxYUxpYl9udW0ubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlTGliLnB1c2godGhpcy5saWJbcWFMaWJfbnVtW2luZGV4XV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi562J57SaXCIgKyBsZXZlbCwgXCLpoYzluqvvvJpcIiArIHRoaXMuY2hvb3NlTGliKTtcclxuXHJcbiAgICB9XHJcbn1cclxuY2xhc3MgbGliIHtcclxuICAgIGVhc3k6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgIFwiQS4g5pif5pif44CCXFxuQi4g5pyI5Lqu44CCXFxuQy4g6Zm95YWJ44CCXCIsXHJcbiAgICAgICAgXCJBLiDlj6/ku6XjgIJcXG5CLiDkuI3lj6/ku6XjgIJcXG5DLiDoppbmg4Xms4HogIzlrprjgIJcIixcclxuICAgICAgICBcIkEuIOW4tuWbnuWutuijoeS9v+eUqOOAglxcbkIuIOS6pOe1puWIl+i7iumVt+OAglxcbkMuIOS6pOe1pui7iuermeS6uuWToeOAglwiLFxyXG4gICAgICAgIFwiQS4g5LiN6LK356Wo5pCt6Zy4546L6LuK44CCXFxuQi4g5L6d6KaP5a6a6LK36LuK56Wo44CCXFxuQy4g6LK36Lqr5YiG5LiN56ym55qE5rOV5a6a5YSq5b6F56Wo44CCXCIsXHJcbiAgICAgICAgXCJBLiDlhafmlL/pg6jorabmlL/nvbLjgIJcXG5CLiDms5Xli5npg6jnn6/mraPnvbLjgIJcXG5DLiDms5Xli5npg6jlu4nmlL/nvbLjgIIgXCIsXHJcbiAgICAgICAgXCJBLiDphY3miLTlj6PnvanjgIJcXG5CLiDphY3lkIjph4/muKzpq5TmuqvjgIJcXG5DLiDku6XkuIrnmobmmK/jgIIgXCIsXHJcbiAgICAgICAgXCJBLiDkurrkuovllq7kvY3jgIJcXG5CLiDmnIPoqIjllq7kvY3jgIJcXG5DLiDmlL/poqjllq7kvY3jgIIgXCIsXHJcbiAgICAgICAgXCJBLiAxOTIy44CCXFxuQi4gMTkzM+OAglxcbkMuIDE5OTnjgIIgXCIsXHJcbiAgICAgICAgXCJBLiDnm7TmjqXmi7/otbfkvobkuqTntaborablr5/jgIJcXG5CLiDlkYrnn6Xorablr5/miJbou4rnq5nkurrlk6HjgIJcXG5DLiDkuI3nrqHku5bjgIJcIixcclxuICAgIF1cclxuICAgIG5vcm1hbDogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgXCJBLiAxOTIy44CCXFxuQi4gMTkzM+OAglxcbkMuIDE5OTnjgIJcIixcclxuICAgICAgICBcIkEuIOaXpeWNl+OAglxcbkIuIOirh+aWh+OAglxcbkMuIOmAmumchOOAglwiLFxyXG4gICAgICAgIFwiQS4gMDItMjg4Mi01MjUy44CCXFxuQi4gMDgwMC0yODYtNTg2KOS9oOeIhuaWme+8jOaIkeeIhuaWmSnjgIJcXG5DLiAwODAwLTEyMy00NTbjgIJcIixcclxuICAgICAgICBcIkEuIDHokKzlhYPjgIJcXG5CLiA16JCs5YWD44CCXFxuQy4gOeiQrOWFg+OAglwiLFxyXG4gICAgICAgIFwiQS4g5omH5b2i6LuK5bqr44CCXFxuQi4g5a+M5bKh5Z+65Zyw44CCXFxuQy4g6auY6ZuE5qmf5bug44CCXCIsXHJcbiAgICAgICAgXCJBLiDkuI3osrfnpajmkK3pnLjnjovou4rjgIJcXG5CLiDos7zosrflkIjkuY7ouqvliIbkuYvlhajnpajou4rnpajjgIJcXG5DLiDos7zosrfouqvliIbkuI3nrKbkuYvms5XlrprlhKrlvoXnpago5pWs6ICB56Wo5oiW5oSb5b+D56WoKeOAglwiLFxyXG4gICAgICAgIFwiQS4gNDAw6JCs5YWD44CCXFxuQi4gNjcw6JCs5YWD44CCXFxuQy4gMSwwMDDokKzlhYPjgIJcIixcclxuICAgICAgICBcIkEuIOWFp+aUv+mDqOitpuaUv+e9suOAglxcbkIuIOazleWLmemDqOefr+ato+e9suOAglxcbkMuIOazleWLmemDqOW7ieaUv+e9suOAglwiLFxyXG4gICAgICAgIFwiQS4g6Zqq6Zi744CB5bmz5a6J44CB5rOo5oSP5oWi6KGM44CCXFxuQi4g5bmz5a6J44CB6Zqq6Zi744CB5rOo5oSP5oWi6KGM44CCXFxuQy4g5bmz5a6J44CB5rOo5oSP5oWi6KGM44CB6Zqq6Zi744CCXCIsXHJcbiAgICBdXHJcbiAgICBoYXJkOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICBcIkEuIOS4jeihjO+8jOaHieadnOe1leS4gOWIh+WIqeebiui8uOmAgeihjOeCuuOAglxcbkIuIOWPr+S7pe+8jOS7peWQiOaWvOW4guWgtOihjOaDhei+pueQhuaOoeizvOWNs+WPr+OAglxcbkMuIOWOn+WJh+S4jeihjO+8jOS9huespuWQiOWIqeihneazleimj+Wumui+pueQhuS5i+aOoeizvOS4jeWcqOatpOmZkOOAglwiLFxyXG4gICAgICAgIFwiQS4gMTkyMuOAglxcbkIuIDE5MzPjgIJcXG5DLiAxOTk544CCXCIsXHJcbiAgICAgICAgXCJBLiBTTVPjgIJcXG5CLiBTT1PjgIJcXG5DLiBTQVPjgIJcIixcclxuICAgICAgICBcIkEuIDAyLTI4ODItNTI1MuOAglxcbkIuIDA4MDAtMjg2LTU4NijkvaDniIbmlpnvvIzmiJHniIbmlpkp44CCXFxuQy4gMDgwMC0xMjMtNDU244CCXCIsXHJcbiAgICAgICAgXCJBLiAzLDAwMOWFg+OAglxcbkIuIDUsMDAw5YWD44CCXFxuQy4gNiwwMDDlhYPjgIIgXCIsXHJcbiAgICAgICAgXCJBLiAz5pel44CCXFxuQi4gNeaXpeOAglxcbkMuIDfml6XjgIJcIixcclxuICAgICAgICBcIkEuIDQwMOiQrOWFg+OAglxcbkIuIDY3MOiQrOWFg+OAglxcbkMuIDEsMDAw6JCs5YWD44CCXCIsXHJcbiAgICAgICAgXCJBLiDmqqLmn6Xlr4Tku7bogIXnnJ/lgb3jgIJcXG5CLiDnm7TmjqXplovllZ/pg7Xku7botoXpgKPntZDlj4rpmYTku7bjgIJcXG5DLiDlr4TpgIHmqZ/mlY/kv6Hku7bpgb/lhY3mlLbku7bkurros4foqIrlpJbmtKnjgIJcIixcclxuICAgICAgICBcIkEuIDEw5pyIMTDml6XjgIJcXG5CLiAxMuaciDnml6XjgIJcXG5DLiAxMuaciDI15pel44CCXCIsXHJcbiAgICBdXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Message/Question.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b5050WjMtJOBYlBW3+YIYzP', 'Question');
// Script/Class/Message/Question.ts

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
var GameEvent_1 = require("../../Enum/GameEvent");
var GameModle_1 = require("../../GameModle");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Question = /** @class */ (function (_super) {
    __extends(Question, _super);
    function Question() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Question.prototype.onLoad = function () {
        this.title = cc.find("Title", this.node).getComponent(cc.Label);
        this.item_Btn = cc.find("item_Btn", this.node);
        this.scrollView = cc.find("scroll_Info", this.node).getComponent(cc.ScrollView);
        this.info_Text = cc.find("Text", this.scrollView.content).getComponent(cc.Label);
        this.info_Choose = cc.find("Choose", this.scrollView.content).getComponent(cc.Label);
        this.info_Normal_5 = cc.find("Normal_5", this.scrollView.content);
        this.info_Normal_9 = cc.find("Normal_9", this.scrollView.content);
        this.content_Btn = cc.find("con_Btn", this.node);
        this.defaultReset();
    };
    Question.prototype.start = function () {
        // this.info_Text.string = ""
        this.content_Btn.removeAllChildren();
        for (var index = 0; index < 3; index++) {
            var _node = cc.instantiate(this.item_Btn);
            _node.active = true;
            var getStr = GameModle_1.default.englishLib.returnEnglish(index);
            this.content_Btn.addChild(_node, cc.macro.MIN_ZINDEX, getStr);
            cc.find("Text", _node).getComponent(cc.Label).string = getStr;
            _node.y = 0;
            var getIndex = GameModle_1.default.englishLib.returnEnglish(index); //轉換ABC
            ButtonMng_1.default.addEvent(this.node, "Question", "checkAnswer", _node.getComponent(cc.Button), getIndex);
        }
        // this.scrollView.scrollToTop(0.1)
        this.item_Btn.active = false;
        this.title.string = "題目";
    };
    Question.prototype.reset = function () {
        this.info_Normal_5.active = false;
        this.info_Normal_9.active = false;
    };
    Question.prototype.setQAInfo = function (str, _level, _qaNum) {
        console.log(_level, _qaNum);
        if (_level == 1 && (_qaNum == 4 || _qaNum == 8)) {
            switch (_qaNum) {
                case 4:
                    this.info_Normal_5.active = true;
                    break;
                case 8:
                    this.info_Normal_9.active = true;
                    break;
            }
        }
        this.info_Text.node.active = true;
        this.info_Text.string = str;
    };
    Question.prototype.setChoose = function (str) {
        this.info_Choose.node.active = true;
        this.info_Choose.string = str;
    };
    Question.prototype.checkAnswer = function (e, _customEventData) {
        GameModle_1.default.chooseAnswer = _customEventData;
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndQA);
        // console.log(e, _customEventData);
        //開始接中央
    };
    Question = __decorate([
        ccclass
    ], Question);
    return Question;
}(ComponentBase_1.default));
exports.default = Question;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcUXVlc3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUMxRCw0Q0FBNkM7QUFDN0Msa0RBQWlEO0FBQ2pELDZDQUF3QztBQUdsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBYTtJQUFuRDs7SUF5RUEsQ0FBQztJQTdEYSx5QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsYUFB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QUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUNELDhCQUFXLEdBQVgsVUFBWSxDQUFXLEVBQUUsZ0JBQXdCO1FBQzdDLG1CQUFTLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFBO1FBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNyRCxvQ0FBb0M7UUFDcEMsT0FBTztJQUNYLENBQUM7SUF4RWdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F5RTVCO0lBQUQsZUFBQztDQXpFRCxBQXlFQyxDQXpFcUMsdUJBQWEsR0F5RWxEO2tCQXpFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b25NbmcgZnJvbSBcIi4uLy4uL0RhdGEvYmFzZS9CdXR0b25NbmdcIjtcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSBcIi4uLy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlXCI7XHJcbmltcG9ydCB7IENvbW1hbW5kIH0gZnJvbSBcIi4uLy4uL0VudW0vQ29tbWFkXCI7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gXCIuLi8uLi9FbnVtL0dhbWVFdmVudFwiO1xyXG5pbXBvcnQgR2FtZU1vZGxlIGZyb20gXCIuLi8uLi9HYW1lTW9kbGVcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb24gZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIHRpdGxlOiBjYy5MYWJlbDtcclxuICAgIGluZm9fVGV4dDogY2MuTGFiZWw7XHJcbiAgICBpbmZvX0Nob29zZTogY2MuTGFiZWw7XHJcbiAgICBpbmZvX05vcm1hbF81OiBjYy5Ob2RlXHJcbiAgICBpbmZvX05vcm1hbF85OiBjYy5Ob2RlXHJcbiAgICBpdGVtX0J0bjogY2MuTm9kZTtcclxuXHJcblxyXG4gICAgc2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlld1xyXG5cclxuICAgIGNvbnRlbnRfQnRuOiBjYy5Ob2RlO1xyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gY2MuZmluZChcIlRpdGxlXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLml0ZW1fQnRuID0gY2MuZmluZChcIml0ZW1fQnRuXCIsIHRoaXMubm9kZSlcclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3ID0gY2MuZmluZChcInNjcm9sbF9JbmZvXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpO1xyXG4gICAgICAgIHRoaXMuaW5mb19UZXh0ID0gY2MuZmluZChcIlRleHRcIiwgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5pbmZvX0Nob29zZSA9IGNjLmZpbmQoXCJDaG9vc2VcIiwgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5pbmZvX05vcm1hbF81ID0gY2MuZmluZChcIk5vcm1hbF81XCIsIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50KTtcclxuICAgICAgICB0aGlzLmluZm9fTm9ybWFsXzkgPSBjYy5maW5kKFwiTm9ybWFsXzlcIiwgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQpO1xyXG4gICAgICAgIHRoaXMuY29udGVudF9CdG4gPSBjYy5maW5kKFwiY29uX0J0blwiLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFJlc2V0KClcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLmluZm9fVGV4dC5zdHJpbmcgPSBcIlwiXHJcbiAgICAgICAgdGhpcy5jb250ZW50X0J0bi5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAzOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBfbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbV9CdG4pXHJcbiAgICAgICAgICAgIF9ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgbGV0IGdldFN0ciA9IEdhbWVNb2RsZS5lbmdsaXNoTGliLnJldHVybkVuZ2xpc2goaW5kZXgpXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudF9CdG4uYWRkQ2hpbGQoX25vZGUsIGNjLm1hY3JvLk1JTl9aSU5ERVgsIGdldFN0cilcclxuICAgICAgICAgICAgY2MuZmluZChcIlRleHRcIiwgX25vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZ2V0U3RyXHJcbiAgICAgICAgICAgIF9ub2RlLnkgPSAwXHJcblxyXG4gICAgICAgICAgICBsZXQgZ2V0SW5kZXggPSBHYW1lTW9kbGUuZW5nbGlzaExpYi5yZXR1cm5FbmdsaXNoKGluZGV4KS8v6L2J5o+bQUJDXHJcbiAgICAgICAgICAgIEJ1dHRvbk1uZy5hZGRFdmVudCh0aGlzLm5vZGUsIFwiUXVlc3Rpb25cIiwgXCJjaGVja0Fuc3dlclwiLCBfbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSwgZ2V0SW5kZXgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb1RvcCgwLjEpXHJcbiAgICAgICAgdGhpcy5pdGVtX0J0bi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudGl0bGUuc3RyaW5nID0gXCLpoYznm65cIlxyXG4gICAgfVxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbmZvX05vcm1hbF81LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pbmZvX05vcm1hbF85LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBzZXRRQUluZm8oc3RyOiBzdHJpbmcsIF9sZXZlbDogbnVtYmVyLCBfcWFOdW06IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKF9sZXZlbCwgX3FhTnVtKTtcclxuXHJcbiAgICAgICAgaWYgKF9sZXZlbCA9PSAxICYmIChfcWFOdW0gPT0gNCB8fCBfcWFOdW0gPT0gOCkpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfcWFOdW0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZm9fTm9ybWFsXzUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5mb19Ob3JtYWxfOS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmZvX1RleHQubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5pbmZvX1RleHQuc3RyaW5nID0gc3RyXHJcblxyXG4gICAgfVxyXG4gICAgc2V0Q2hvb3NlKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pbmZvX0Nob29zZS5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmluZm9fQ2hvb3NlLnN0cmluZyA9IHN0clxyXG4gICAgfVxyXG4gICAgY2hlY2tBbnN3ZXIoZTogY2MuRXZlbnQsIF9jdXN0b21FdmVudERhdGE6IHN0cmluZykge1xyXG4gICAgICAgIEdhbWVNb2RsZS5jaG9vc2VBbnN3ZXIgPSBfY3VzdG9tRXZlbnREYXRhXHJcbiAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5FbmRRQSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLCBfY3VzdG9tRXZlbnREYXRhKTtcclxuICAgICAgICAvL+mWi+Wni+aOpeS4reWkrlxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enum/CameraState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19927w1bNZAY4F85xRNu/4Z', 'CameraState');
// Script/Enum/CameraState.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CameraState = void 0;
var CameraState;
(function (CameraState) {
    CameraState[CameraState["Mine"] = 0] = "Mine";
    CameraState[CameraState["Men"] = 1] = "Men";
    CameraState[CameraState["Target"] = 2] = "Target";
})(CameraState = exports.CameraState || (exports.CameraState = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbnVtXFxDYW1lcmFTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDbkIsNkNBQUksQ0FBQTtJQUNKLDJDQUFHLENBQUE7SUFDSCxpREFBTSxDQUFBO0FBQ1YsQ0FBQyxFQUpXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBSXRCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQ2FtZXJhU3RhdGV7XHJcbiAgICBNaW5lLFxyXG4gICAgTWVuLFxyXG4gICAgVGFyZ2V0LFxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enum/Easing.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0ad2bFnyJ5MAaTD13ZY4I86', 'Easing');
// Script/Enum/Easing.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Easing = void 0;
var Easing;
(function (Easing) {
    Easing["quadIn"] = "quadIn";
    Easing["quadOut"] = "quadOut";
    Easing["quadInOut"] = "quadInOut";
    Easing["cubicIn"] = "cubicIn";
    Easing["cubicOut"] = "cubicOut";
    Easing["cubicInOut"] = "cubicInOut";
    Easing["quartIn"] = "quartIn";
    Easing["quartOut"] = "quartOut";
    Easing["quartInOut"] = "quartInOut";
    Easing["quintIn"] = "quintIn";
    Easing["quintOut"] = "quintOut";
    Easing["quintInOut"] = "quintInOut";
    Easing["sineIn"] = "sineIn";
    Easing["sineOut"] = "sineOut";
    Easing["sineInOut"] = "sineInOut";
    Easing["expoIn"] = "expoIn";
    Easing["expoOut"] = "expoOut";
    Easing["expoInOut"] = "expoInOut";
    Easing["circIn"] = "circIn";
    Easing["circOut"] = "circOut";
    Easing["circInOut"] = "circInOut";
    Easing["elasticIn"] = "elasticIn";
    Easing["elasticOut"] = "elasticOut";
    Easing["elasticInOut"] = "elasticInOut";
    Easing["backIn"] = "backIn";
    Easing["backOut"] = "backOut";
    Easing["backInOut"] = "backInOut";
    Easing["bounceIn"] = "bounceIn";
    Easing["bounceOut"] = "bounceOut";
    Easing["bounceInOut"] = "bounceInOut";
    Easing["smooth"] = "smooth";
    Easing["fade"] = "fade";
})(Easing = exports.Easing || (exports.Easing = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbnVtXFxFYXNpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxNQWlDWDtBQWpDRCxXQUFZLE1BQU07SUFDZCwyQkFBaUIsQ0FBQTtJQUNqQiw2QkFBbUIsQ0FBQTtJQUNuQixpQ0FBdUIsQ0FBQTtJQUN2Qiw2QkFBbUIsQ0FBQTtJQUNuQiwrQkFBcUIsQ0FBQTtJQUNyQixtQ0FBeUIsQ0FBQTtJQUN6Qiw2QkFBbUIsQ0FBQTtJQUNuQiwrQkFBcUIsQ0FBQTtJQUNyQixtQ0FBeUIsQ0FBQTtJQUN6Qiw2QkFBbUIsQ0FBQTtJQUNuQiwrQkFBcUIsQ0FBQTtJQUNyQixtQ0FBeUIsQ0FBQTtJQUN6QiwyQkFBaUIsQ0FBQTtJQUNqQiw2QkFBbUIsQ0FBQTtJQUNuQixpQ0FBdUIsQ0FBQTtJQUN2QiwyQkFBaUIsQ0FBQTtJQUNqQiw2QkFBbUIsQ0FBQTtJQUNuQixpQ0FBdUIsQ0FBQTtJQUN2QiwyQkFBaUIsQ0FBQTtJQUNqQiw2QkFBbUIsQ0FBQTtJQUNuQixpQ0FBdUIsQ0FBQTtJQUN2QixpQ0FBdUIsQ0FBQTtJQUN2QixtQ0FBeUIsQ0FBQTtJQUN6Qix1Q0FBNkIsQ0FBQTtJQUM3QiwyQkFBaUIsQ0FBQTtJQUNqQiw2QkFBbUIsQ0FBQTtJQUNuQixpQ0FBdUIsQ0FBQTtJQUN2QiwrQkFBcUIsQ0FBQTtJQUNyQixpQ0FBdUIsQ0FBQTtJQUN2QixxQ0FBMkIsQ0FBQTtJQUMzQiwyQkFBaUIsQ0FBQTtJQUNqQix1QkFBYSxDQUFBO0FBQ2pCLENBQUMsRUFqQ1csTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBaUNqQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEVhc2luZyB7XHJcbiAgICBxdWFkSW4gPSBcInF1YWRJblwiLFxyXG4gICAgcXVhZE91dCA9IFwicXVhZE91dFwiLFxyXG4gICAgcXVhZEluT3V0ID0gXCJxdWFkSW5PdXRcIixcclxuICAgIGN1YmljSW4gPSBcImN1YmljSW5cIixcclxuICAgIGN1YmljT3V0ID0gXCJjdWJpY091dFwiLFxyXG4gICAgY3ViaWNJbk91dCA9IFwiY3ViaWNJbk91dFwiLFxyXG4gICAgcXVhcnRJbiA9IFwicXVhcnRJblwiLFxyXG4gICAgcXVhcnRPdXQgPSBcInF1YXJ0T3V0XCIsXHJcbiAgICBxdWFydEluT3V0ID0gXCJxdWFydEluT3V0XCIsXHJcbiAgICBxdWludEluID0gXCJxdWludEluXCIsXHJcbiAgICBxdWludE91dCA9IFwicXVpbnRPdXRcIixcclxuICAgIHF1aW50SW5PdXQgPSBcInF1aW50SW5PdXRcIixcclxuICAgIHNpbmVJbiA9IFwic2luZUluXCIsXHJcbiAgICBzaW5lT3V0ID0gXCJzaW5lT3V0XCIsXHJcbiAgICBzaW5lSW5PdXQgPSBcInNpbmVJbk91dFwiLFxyXG4gICAgZXhwb0luID0gXCJleHBvSW5cIixcclxuICAgIGV4cG9PdXQgPSBcImV4cG9PdXRcIixcclxuICAgIGV4cG9Jbk91dCA9IFwiZXhwb0luT3V0XCIsXHJcbiAgICBjaXJjSW4gPSBcImNpcmNJblwiLFxyXG4gICAgY2lyY091dCA9IFwiY2lyY091dFwiLFxyXG4gICAgY2lyY0luT3V0ID0gXCJjaXJjSW5PdXRcIixcclxuICAgIGVsYXN0aWNJbiA9IFwiZWxhc3RpY0luXCIsXHJcbiAgICBlbGFzdGljT3V0ID0gXCJlbGFzdGljT3V0XCIsXHJcbiAgICBlbGFzdGljSW5PdXQgPSBcImVsYXN0aWNJbk91dFwiLFxyXG4gICAgYmFja0luID0gXCJiYWNrSW5cIixcclxuICAgIGJhY2tPdXQgPSBcImJhY2tPdXRcIixcclxuICAgIGJhY2tJbk91dCA9IFwiYmFja0luT3V0XCIsXHJcbiAgICBib3VuY2VJbiA9IFwiYm91bmNlSW5cIixcclxuICAgIGJvdW5jZU91dCA9IFwiYm91bmNlT3V0XCIsXHJcbiAgICBib3VuY2VJbk91dCA9IFwiYm91bmNlSW5PdXRcIixcclxuICAgIHNtb290aCA9IFwic21vb3RoXCIsXHJcbiAgICBmYWRlID0gXCJmYWRlXCIsXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/DataCloud.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8988IRTx5OnIN4bFM01x7W', 'DataCloud');
// Script/Data/DataCloud.ts

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
var DataCloud = /** @class */ (function (_super) {
    __extends(DataCloud, _super);
    function DataCloud() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rangeX = 1280;
        _this.rangeY = 720;
        _this.rangeTime_Left = 5;
        _this.rangeTime_Right = 7;
        _this.baseSpeed = 30;
        _this.rangeSpeed = 100;
        _this.CloudClass = new Map();
        return _this;
    }
    return DataCloud;
}(ComponentBase_1.default));
exports.default = DataCloud;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxEYXRhQ2xvdWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQXVEO0FBRXZEO0lBQXVDLDZCQUFhO0lBQXBEO1FBQUEscUVBY0M7UUFaRyxZQUFNLEdBQVcsSUFBSSxDQUFBO1FBQ3JCLFlBQU0sR0FBVyxHQUFHLENBQUE7UUFDcEIsb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFFM0IscUJBQWUsR0FBVyxDQUFDLENBQUM7UUFLNUIsZUFBUyxHQUFTLEVBQUUsQ0FBQTtRQUNwQixnQkFBVSxHQUFXLEdBQUcsQ0FBQztRQUN6QixnQkFBVSxHQUF5QixJQUFJLEdBQUcsRUFBRSxDQUFBOztJQUNoRCxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQWRBLEFBY0MsQ0Fkc0MsdUJBQWEsR0FjbkQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tICcuLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZSc7XHJcbmltcG9ydCBDbG91ZEl0ZW0gZnJvbSAnLi4vSXRlbS9DbG91ZEl0ZW0nO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhQ2xvdWQgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuXHJcbiAgICByYW5nZVg6IG51bWJlciA9IDEyODAgXHJcbiAgICByYW5nZVk6IG51bWJlciA9IDcyMFxyXG4gICAgcmFuZ2VUaW1lX0xlZnQ6IG51bWJlciA9IDU7XHJcbiAgICByYW5kb21UaW1lX0xlZnQ6IG51bWJlcjtcclxuICAgIHJhbmdlVGltZV9SaWdodDogbnVtYmVyID0gNztcclxuICAgIHJhbmRvbVRpbWVfUmlnaHQ6IG51bWJlcjtcclxuICAgIHRlbXBfTGVmdDogbnVtYmVyO1xyXG4gICAgdGVtcF9SaWdodDogbnVtYmVyO1xyXG4gICAgdGVtcE51bWJlcjtcclxuICAgIGJhc2VTcGVlZDpudW1iZXIgPTMwXHJcbiAgICByYW5nZVNwZWVkOiBudW1iZXIgPSAxMDA7XHJcbiAgICBDbG91ZENsYXNzOk1hcDxudW1iZXIsQ2xvdWRJdGVtPiA9IG5ldyBNYXAoKVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/QA/QALibrary.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7031mGES5N/Ka0LpUmlVwL', 'QALibrary');
// Script/Data/QA/QALibrary.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QALibrary = /** @class */ (function () {
    function QALibrary(level, getCount) {
        this.qaLib_num = [];
        this.qaLib_str = [];
        this.url = "https://docs.google.com/spreadsheets/d/1fbzCyt95TSj1nbzuwHgFHyImxNJISVFvs6BuiE-BO70/edit#gid=131335285";
        this.lib = [];
        var libClass = new lib();
        switch (level) {
            case 0:
                this.lib = libClass.easy;
                break;
            case 1:
                this.lib = libClass.normal;
                break;
            case 2:
                this.lib = libClass.hard;
                break;
        }
        for (var index = 0; index < getCount; index++) {
            var randomQA = Math.floor(Math.random() * this.lib.length);
            this.qaLib_num.push(randomQA);
            this.qaLib_str.push(this.lib[randomQA]);
            this.lib.splice(randomQA, 1); //刪除第幾個物件,刪除數量
        }
    }
    return QALibrary;
}());
exports.default = QALibrary;
var lib = /** @class */ (function () {
    function lib() {
        this.easy = [
            "□□是最佳的防腐劑，請問□□應填入什麼？",
            "若個人物品不慎掉落軌道，是否可以自行跳下軌道撿拾？",
            "搭乘火車時撿到乘客遺失的手機，下列何種處理方式是錯誤的？",
            "小明連假期間想搭車去臺東遊玩，以下何種行為是正確的？",
            "我國於100年7月20日成立什麼機關，專責國家廉政政策規劃，執行防貪、反貪及肅貪業務？",
            "疫情期間，以下哪種搭車方式可以有效保護自己和其他乘客？",
            "若發現公務人員有貪污不法情形，可以向哪個單位檢舉?",
            "臺鐵的緊急通報電話為何？",
            "在車站角落發現1個行李箱，超過1小時沒人管，請問應如何處理？",
        ];
        this.normal = [
            "臺鐵的緊急通報電話為何？",
            "請問下列哪一車站沒有牛眼窗設計？",
            "請問下列哪一支電話為法務部廉政署檢舉電話？",
            "請問當平交道警鈴響起，閃光號誌閃亮，開車誤闖平交道，最高可罰款新臺幣多少元？",
            "火車頭旅館，是臺鐵的什麼設施？",
            "小明是大學生，連假期間想搭車去臺東遊玩，以下何種購票方式是正確的？",
            "依據「獎勵保護檢舉貪污瀆職辦法」規定，舉發貪瀆經法院判決有罪者，法務部將視法院判決情形發給檢舉獎金，其金額最少新臺幣30萬元，最高可達多少元？",
            "我國於100年7月20日成立什麼機關，專責國家廉政政策規劃，執行防貪、反貪及肅貪業務？",
            "紅旗舉起來，綠旗放下來，這些旗子代表什麼意思？",
        ];
        this.hard = [
            "採購主管是否得逕於配偶之兄長開設之文具店採購文具？",
            "臺鐵的緊急通報電話為何？",
            "臺鐵導入的「安全管理系統」英文縮寫為何？",
            "請問下列哪一支電話為法務部廉政署檢舉電話？",
            "依據「公務員廉政倫理規範」，「正常社交禮俗標準」係指一般人社交往來，市價不超過新臺幣多少元？",
            "公務員遇有請託關說時，應於幾日內簽報其長官並知會政風機構？",
            "依據「獎勵保護檢舉貪污瀆職辦法」規定，舉發貪瀆經法院判決有罪者，法務部將視法院判決情形發給檢舉獎金，其金額最少新臺幣30萬元，最高可達多少元？",
            "為避免公務機密或個資洩漏，下列何者「不是」使用電子郵件時應有的好習慣？",
            "「聯合國國際反貪日」是哪一天？",
        ];
    }
    return lib;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxRQVxcUUFMaWJyYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFLSSxtQkFBWSxLQUFhLEVBQUUsUUFBZ0I7UUFKM0MsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLFFBQUcsR0FBVyx3R0FBd0csQ0FBQTtRQUN0SCxRQUFHLEdBQWEsRUFBRSxDQUFBO1FBRWQsSUFBSSxRQUFRLEdBQVEsSUFBSSxHQUFHLEVBQUUsQ0FBQTtRQUM3QixRQUFRLEtBQUssRUFBRTtZQUNYLEtBQUssQ0FBQztnQkFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUMvQixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDN0IsTUFBTTtTQUNiO1FBQ0QsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMzQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtZQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQSxjQUFjO1NBQzdDO0lBQ0wsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTs7QUFDRDtJQUFBO1FBQ0ksU0FBSSxHQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLDJCQUEyQjtZQUMzQiw4QkFBOEI7WUFDOUIsNEJBQTRCO1lBQzVCLDZDQUE2QztZQUM3Qyw2QkFBNkI7WUFDN0IsMkJBQTJCO1lBQzNCLGNBQWM7WUFDZCxnQ0FBZ0M7U0FDbkMsQ0FBQTtRQUNELFdBQU0sR0FBYTtZQUNmLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsdUJBQXVCO1lBQ3ZCLHdDQUF3QztZQUN4QyxpQkFBaUI7WUFDakIsbUNBQW1DO1lBQ25DLHlFQUF5RTtZQUN6RSw2Q0FBNkM7WUFDN0MseUJBQXlCO1NBQzVCLENBQUE7UUFDRCxTQUFJLEdBQWE7WUFDYiwyQkFBMkI7WUFDM0IsY0FBYztZQUNkLHNCQUFzQjtZQUN0Qix1QkFBdUI7WUFDdkIsZ0RBQWdEO1lBQ2hELCtCQUErQjtZQUMvQix5RUFBeUU7WUFDekUscUNBQXFDO1lBQ3JDLGlCQUFpQjtTQUNwQixDQUFBO0lBQ0wsQ0FBQztJQUFELFVBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUUFMaWJyYXJ5IHtcclxuICAgIHFhTGliX251bTogbnVtYmVyW10gPSBbXTtcclxuICAgIHFhTGliX3N0cjogc3RyaW5nW10gPSBbXTtcclxuICAgIHVybDogc3RyaW5nID0gXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xZmJ6Q3l0OTVUU2oxbmJ6dXdIZ0ZIeUlteE5KSVNWRnZzNkJ1aUUtQk83MC9lZGl0I2dpZD0xMzEzMzUyODVcIlxyXG4gICAgbGliOiBzdHJpbmdbXSA9IFtdXHJcbiAgICBjb25zdHJ1Y3RvcihsZXZlbDogbnVtYmVyLCBnZXRDb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGxpYkNsYXNzOiBsaWIgPSBuZXcgbGliKClcclxuICAgICAgICBzd2l0Y2ggKGxldmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogdGhpcy5saWIgPSBsaWJDbGFzcy5lYXN5O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTogdGhpcy5saWIgPSBsaWJDbGFzcy5ub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOiB0aGlzLmxpYiA9IGxpYkNsYXNzLmhhcmQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdldENvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCByYW5kb21RQSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGliLmxlbmd0aClcclxuICAgICAgICAgICAgdGhpcy5xYUxpYl9udW0ucHVzaChyYW5kb21RQSlcclxuICAgICAgICAgICAgdGhpcy5xYUxpYl9zdHIucHVzaCh0aGlzLmxpYltyYW5kb21RQV0pXHJcbiAgICAgICAgICAgIHRoaXMubGliLnNwbGljZShyYW5kb21RQSwgMSkvL+WIqumZpOesrOW5vuWAi+eJqeS7tizliKrpmaTmlbjph49cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgbGliIHtcclxuICAgIGVhc3k6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgIFwi4pah4pah5piv5pyA5L2z55qE6Ziy6IWQ5YqR77yM6KuL5ZWP4pah4pah5oeJ5aGr5YWl5LuA6bq877yfXCIsXHJcbiAgICAgICAgXCLoi6XlgIvkurrnianlk4HkuI3mhY7mjonokL3ou4zpgZPvvIzmmK/lkKblj6/ku6Xoh6rooYzot7PkuIvou4zpgZPmkr/mi77vvJ9cIixcclxuICAgICAgICBcIuaQreS5mOeBq+i7iuaZguaSv+WIsOS5mOWuoumBuuWkseeahOaJi+apn++8jOS4i+WIl+S9leeoruiZleeQhuaWueW8j+aYr+mMr+iqpOeahO+8n1wiLFxyXG4gICAgICAgIFwi5bCP5piO6YCj5YGH5pyf6ZaT5oOz5pCt6LuK5Y676Ie65p2x6YGK546p77yM5Lul5LiL5L2V56iu6KGM54K65piv5q2j56K655qE77yfXCIsXHJcbiAgICAgICAgXCLmiJHlnIvmlrwxMDDlubQ35pyIMjDml6XmiJDnq4vku4DpurzmqZ/pl5zvvIzlsIjosqzlnIvlrrblu4nmlL/mlL/nrZbopo/lioPvvIzln7fooYzpmLLosqrjgIHlj43osqrlj4rogoXosqrmpa3li5nvvJ9cIixcclxuICAgICAgICBcIueWq+aDheacn+mWk++8jOS7peS4i+WTqueoruaQrei7iuaWueW8j+WPr+S7peacieaViOS/neitt+iHquW3seWSjOWFtuS7luS5mOWuou+8n1wiLFxyXG4gICAgICAgIFwi6Iul55m854++5YWs5YuZ5Lq65ZOh5pyJ6LKq5rGh5LiN5rOV5oOF5b2i77yM5Y+v5Lul5ZCR5ZOq5YCL5Zau5L2N5qqi6IiJP1wiLFxyXG4gICAgICAgIFwi6Ie66ZC155qE57eK5oCl6YCa5aCx6Zu76Kmx54K65L2V77yfXCIsXHJcbiAgICAgICAgXCLlnKjou4rnq5nop5LokL3nmbznj74x5YCL6KGM5p2O566x77yM6LaF6YGOMeWwj+aZguaykuS6uueuoe+8jOiri+WVj+aHieWmguS9leiZleeQhu+8n1wiLFxyXG4gICAgXVxyXG4gICAgbm9ybWFsOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICBcIuiHuumQteeahOe3iuaApemAmuWgsembu+ipseeCuuS9le+8n1wiLFxyXG4gICAgICAgIFwi6KuL5ZWP5LiL5YiX5ZOq5LiA6LuK56uZ5rKS5pyJ54mb55y856qX6Kit6KiI77yfXCIsXHJcbiAgICAgICAgXCLoq4vllY/kuIvliJflk6rkuIDmlK/pm7voqbHngrrms5Xli5npg6jlu4nmlL/nvbLmqqLoiInpm7voqbHvvJ9cIixcclxuICAgICAgICBcIuiri+WVj+eVtuW5s+S6pOmBk+itpumItOmfv+i1t++8jOmWg+WFieiZn+iqjOmWg+S6ru+8jOmWi+i7iuiqpOmXluW5s+S6pOmBk++8jOacgOmrmOWPr+e9sOasvuaWsOiHuuW5o+WkmuWwkeWFg++8n1wiLFxyXG4gICAgICAgIFwi54Gr6LuK6aCt5peF6aSo77yM5piv6Ie66ZC155qE5LuA6bq86Kit5pa977yfXCIsXHJcbiAgICAgICAgXCLlsI/mmI7mmK/lpKflrbjnlJ/vvIzpgKPlgYfmnJ/plpPmg7PmkK3ou4rljrvoh7rmnbHpgYrnjqnvvIzku6XkuIvkvZXnqK7os7znpajmlrnlvI/mmK/mraPnorrnmoTvvJ9cIixcclxuICAgICAgICBcIuS+neaTmuOAjOeNjuWLteS/neitt+aqouiIieiyquaxoeeAhuiBt+i+puazleOAjeimj+Wumu+8jOiIieeZvOiyqueAhue2k+azlemZouWIpOaxuuaciee9quiAhe+8jOazleWLmemDqOWwh+imluazlemZouWIpOaxuuaDheW9oueZvOe1puaqouiIieeNjumHke+8jOWFtumHkemhjeacgOWwkeaWsOiHuuW5ozMw6JCs5YWD77yM5pyA6auY5Y+v6YGU5aSa5bCR5YWD77yfXCIsXHJcbiAgICAgICAgXCLmiJHlnIvmlrwxMDDlubQ35pyIMjDml6XmiJDnq4vku4DpurzmqZ/pl5zvvIzlsIjosqzlnIvlrrblu4nmlL/mlL/nrZbopo/lioPvvIzln7fooYzpmLLosqrjgIHlj43osqrlj4rogoXosqrmpa3li5nvvJ9cIixcclxuICAgICAgICBcIue0heaXl+iIiei1t+S+hu+8jOe2oOaXl+aUvuS4i+S+hu+8jOmAmeS6m+aXl+WtkOS7o+ihqOS7gOm6vOaEj+aAne+8n1wiLFxyXG4gICAgXVxyXG4gICAgaGFyZDogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgXCLmjqHos7zkuLvnrqHmmK/lkKblvpfpgJXmlrzphY3lgbbkuYvlhYTplbfplovoqK3kuYvmloflhbflupfmjqHos7zmloflhbfvvJ9cIixcclxuICAgICAgICBcIuiHuumQteeahOe3iuaApemAmuWgsembu+ipseeCuuS9le+8n1wiLFxyXG4gICAgICAgIFwi6Ie66ZC15bCO5YWl55qE44CM5a6J5YWo566h55CG57O757Wx44CN6Iux5paH57iu5a+r54K65L2V77yfXCIsXHJcbiAgICAgICAgXCLoq4vllY/kuIvliJflk6rkuIDmlK/pm7voqbHngrrms5Xli5npg6jlu4nmlL/nvbLmqqLoiInpm7voqbHvvJ9cIixcclxuICAgICAgICBcIuS+neaTmuOAjOWFrOWLmeWToeW7ieaUv+WAq+eQhuimj+evhOOAje+8jOOAjOato+W4uOekvuS6pOemruS/l+aomea6luOAjeS/guaMh+S4gOiIrOS6uuekvuS6pOW+gOS+hu+8jOW4guWDueS4jei2hemBjuaWsOiHuuW5o+WkmuWwkeWFg++8n1wiLFxyXG4gICAgICAgIFwi5YWs5YuZ5ZOh6YGH5pyJ6KuL6KiX6Zec6Kqq5pmC77yM5oeJ5pa85bm+5pel5YWn57C95aCx5YW26ZW35a6Y5Lim55+l5pyD5pS/6aKo5qmf5qeL77yfXCIsXHJcbiAgICAgICAgXCLkvp3mk5rjgIznjY7li7Xkv53orbfmqqLoiInosqrmsaHngIbogbfovqbms5XjgI3opo/lrprvvIzoiInnmbzosqrngIbntpPms5XpmaLliKTmsbrmnInnvarogIXvvIzms5Xli5npg6jlsIfoppbms5XpmaLliKTmsbrmg4XlvaLnmbzntabmqqLoiInnjY7ph5HvvIzlhbbph5HpoY3mnIDlsJHmlrDoh7rluaMzMOiQrOWFg++8jOacgOmrmOWPr+mBlOWkmuWwkeWFg++8n1wiLFxyXG4gICAgICAgIFwi54K66YG/5YWN5YWs5YuZ5qmf5a+G5oiW5YCL6LOH5rSp5ryP77yM5LiL5YiX5L2V6ICF44CM5LiN5piv44CN5L2/55So6Zu75a2Q6YO15Lu25pmC5oeJ5pyJ55qE5aW957+S5oWj77yfXCIsXHJcbiAgICAgICAgXCLjgIzoga/lkIjlnIvlnIvpmpvlj43osqrml6XjgI3mmK/lk6rkuIDlpKnvvJ9cIixcclxuICAgIF1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/base/ButtonMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46070PfhJxKYLVoeCrjm0Tb', 'ButtonMng');
// Script/Data/base/ButtonMng.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyButton = /** @class */ (function () {
    function MyButton() {
    }
    MyButton.prototype.addEvent = function (componentTrget, component, callBack, buttonTarget, callbackValue) {
        if (this.findEvent(buttonTarget, callBack))
            this.reMoveEvent(buttonTarget, callBack);
        var event = new cc.Component.EventHandler();
        // console.log(componentTrget);
        event.target = componentTrget;
        event.component = component;
        event.handler = callBack;
        if (callbackValue)
            event.customEventData = callbackValue;
        buttonTarget.clickEvents.push(event);
    };
    MyButton.prototype.findEvent = function (buttonTarget, callBack) {
        var isFind = false;
        var eventArr = buttonTarget.clickEvents;
        for (var index = 0; index < eventArr.length; index++) {
            if (eventArr[index].handler == callBack)
                return isFind = true;
        }
        return isFind;
    };
    MyButton.prototype.checkEvent = function (buttonTarget) {
        var isFind = false;
        var eventArr = buttonTarget.clickEvents;
        if (eventArr.length > 0)
            return isFind = true;
        else
            isFind;
    };
    MyButton.prototype.reMoveEvent = function (buttonTarget, callBack) {
        var eventArr = buttonTarget.clickEvents;
        for (var index = 0; index < eventArr.length; index++) {
            if (eventArr[index].handler == callBack)
                return eventArr.splice(index);
        }
    };
    return MyButton;
}());
exports.default = new MyButton();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxiYXNlXFxCdXR0b25NbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBcUNBLENBQUM7SUFwQ1UsMkJBQVEsR0FBZixVQUFnQixjQUF1QixFQUFFLFNBQWlCLEVBQUUsUUFBZ0IsRUFBRSxZQUF1QixFQUFFLGFBQXNCO1FBQ3pILElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDO1lBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDcEYsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVDLCtCQUErQjtRQUUvQixLQUFLLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztRQUM5QixLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUM1QixLQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLGFBQWE7WUFDYixLQUFLLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQTtRQUN6QyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBQ00sNEJBQVMsR0FBaEIsVUFBaUIsWUFBdUIsRUFBRSxRQUFnQjtRQUN0RCxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxRQUFRLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQTtRQUN2QyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNsRCxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLElBQUksUUFBUTtnQkFDbkMsT0FBTyxNQUFNLEdBQUcsSUFBSSxDQUFBO1NBQzNCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNNLDZCQUFVLEdBQWpCLFVBQWtCLFlBQXVCO1FBQ3JDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFBO1FBQ3ZDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTyxNQUFNLEdBQUcsSUFBSSxDQUFBOztZQUN4QyxNQUFNLENBQUE7SUFDZixDQUFDO0lBRU0sOEJBQVcsR0FBbEIsVUFBbUIsWUFBdUIsRUFBRSxRQUFnQjtRQUN4RCxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFBO1FBQ3ZDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2xELElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxRQUFRO2dCQUNuQyxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDcEM7SUFDTCxDQUFDO0lBRUwsZUFBQztBQUFELENBckNBLEFBcUNDLElBQUE7QUFDRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTXlCdXR0b24ge1xyXG4gICAgcHVibGljIGFkZEV2ZW50KGNvbXBvbmVudFRyZ2V0OiBjYy5Ob2RlLCBjb21wb25lbnQ6IHN0cmluZywgY2FsbEJhY2s6IHN0cmluZywgYnV0dG9uVGFyZ2V0OiBjYy5CdXR0b24sIGNhbGxiYWNrVmFsdWU/OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5maW5kRXZlbnQoYnV0dG9uVGFyZ2V0LCBjYWxsQmFjaykpIHRoaXMucmVNb3ZlRXZlbnQoYnV0dG9uVGFyZ2V0LCBjYWxsQmFjaylcclxuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbXBvbmVudFRyZ2V0KTtcclxuXHJcbiAgICAgICAgZXZlbnQudGFyZ2V0ID0gY29tcG9uZW50VHJnZXQ7XHJcbiAgICAgICAgZXZlbnQuY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG4gICAgICAgIGV2ZW50LmhhbmRsZXIgPSBjYWxsQmFjaztcclxuICAgICAgICBpZiAoY2FsbGJhY2tWYWx1ZSlcclxuICAgICAgICAgICAgZXZlbnQuY3VzdG9tRXZlbnREYXRhID0gY2FsbGJhY2tWYWx1ZVxyXG4gICAgICAgIGJ1dHRvblRhcmdldC5jbGlja0V2ZW50cy5wdXNoKGV2ZW50KVxyXG4gICAgfVxyXG4gICAgcHVibGljIGZpbmRFdmVudChidXR0b25UYXJnZXQ6IGNjLkJ1dHRvbiwgY2FsbEJhY2s6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBpc0ZpbmQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgZXZlbnRBcnIgPSBidXR0b25UYXJnZXQuY2xpY2tFdmVudHNcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXZlbnRBcnIubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudEFycltpbmRleF0uaGFuZGxlciA9PSBjYWxsQmFjaylcclxuICAgICAgICAgICAgICAgIHJldHVybiBpc0ZpbmQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc0ZpbmQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2hlY2tFdmVudChidXR0b25UYXJnZXQ6IGNjLkJ1dHRvbikge1xyXG4gICAgICAgIGxldCBpc0ZpbmQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgZXZlbnRBcnIgPSBidXR0b25UYXJnZXQuY2xpY2tFdmVudHNcclxuICAgICAgICBpZiAoZXZlbnRBcnIubGVuZ3RoID4gMCkgcmV0dXJuIGlzRmluZCA9IHRydWVcclxuICAgICAgICBlbHNlIGlzRmluZFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZU1vdmVFdmVudChidXR0b25UYXJnZXQ6IGNjLkJ1dHRvbiwgY2FsbEJhY2s6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBldmVudEFyciA9IGJ1dHRvblRhcmdldC5jbGlja0V2ZW50c1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBldmVudEFyci5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50QXJyW2luZGV4XS5oYW5kbGVyID09IGNhbGxCYWNrKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50QXJyLnNwbGljZShpbmRleClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBNeUJ1dHRvbigpOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enum/GameState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8ad9skd8BCaoqrTGLu6ZKq', 'GameState');
// Script/Enum/GameState.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = void 0;
var GameState;
(function (GameState) {
    GameState["Start"] = "start";
    GameState["Wait"] = "wait";
    GameState["Skip"] = "skip";
    GameState["Stop"] = "stop";
    GameState["ShowMessage"] = "ShowMessage";
})(GameState = exports.GameState || (exports.GameState = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbnVtXFxHYW1lU3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ2pCLDRCQUFjLENBQUE7SUFDZCwwQkFBWSxDQUFBO0lBQ1osMEJBQVksQ0FBQTtJQUNaLDBCQUFXLENBQUE7SUFDWCx3Q0FBeUIsQ0FBQTtBQUM3QixDQUFDLEVBTlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFNcEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBHYW1lU3RhdGV7XHJcbiAgICBTdGFydCA9XCJzdGFydFwiLFxyXG4gICAgV2FpdCA9XCJ3YWl0XCIsXHJcbiAgICBTa2lwID1cInNraXBcIixcclxuICAgIFN0b3A9XCJzdG9wXCIsXHJcbiAgICBTaG93TWVzc2FnZT1cIlNob3dNZXNzYWdlXCIsXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enum/StationType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97b17odubZLYqyO9ELSldfa', 'StationType');
// Script/Enum/StationType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationType = void 0;
var StationType;
(function (StationType) {
    StationType["Start"] = "Start";
    StationType["WaitRad"] = "WaitRad";
    StationType["Normal"] = "Normal";
    StationType["QandA"] = "QandA";
})(StationType = exports.StationType || (exports.StationType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbnVtXFxTdGF0aW9uVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFdBTVg7QUFORCxXQUFZLFdBQVc7SUFDbkIsOEJBQWEsQ0FBQTtJQUNiLGtDQUFpQixDQUFBO0lBQ2pCLGdDQUFlLENBQUE7SUFDZiw4QkFBYSxDQUFBO0FBRWpCLENBQUMsRUFOVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQU10QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFN0YXRpb25UeXBle1xyXG4gICAgU3RhcnQ9XCJTdGFydFwiLFxyXG4gICAgV2FpdFJhZD1cIldhaXRSYWRcIixcclxuICAgIE5vcm1hbD1cIk5vcm1hbFwiLFxyXG4gICAgUWFuZEE9XCJRYW5kQVwiLFxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameModle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '861d3y8rsdOPZTqZyS6Jfo1', 'GameModle');
// Script/GameModle.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebPostMessage_1 = require("./WebPostMessage");
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());
var NumberConvertEnglish = /** @class */ (function () {
    function NumberConvertEnglish() {
        this.str = [];
        for (var i = 0; i < 26; i++) {
            this.str.push(String.fromCharCode(i + 65));
        }
    }
    NumberConvertEnglish.prototype.returnEnglish = function (_num) {
        return this.str[_num];
    };
    return NumberConvertEnglish;
}());
var GameModel = /** @class */ (function () {
    function GameModel() {
        this.version = "1.0.4";
        this.playData = new Player();
        //------資料區，無引用到
        // noUseStation: number[] = [8]
        this.stationType_ShowVideo = [1, 20];
        this.stationType_Start = [0];
        this.stationType_Normal = [
            2, 3, 4,
            6, 7, 8, 9, 10,
            12, 13, 14,
            16, 17,
            19
        ];
        this.stationType_QA = [5, 11, 15, 18]; //19是裝飾用的並無提物，但因為點點生成顏色ˇ關係需要放點
        //------資料區，無引用到
        this.mapItem = new Map();
        this.mapSprite = new Map();
        this.pathPositionData = new Map();
        this.pathBezierData = new Map();
        this.englishLib = new NumberConvertEnglish();
        this.webPostMessage = new WebPostMessage_1.WebPostMessage();
        this.qaIndex = 0;
    }
    GameModel.prototype.convertOtherNodeSpaceAR = function (node, targetNode) {
        var pos = targetNode.position;
        //轉成世界座標
        var worldPoint = node.convertToWorldSpaceAR(pos);
        return targetNode.convertToNodeSpaceAR(worldPoint);
    };
    return GameModel;
}());
exports.default = new GameModel();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lTW9kbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxtREFBa0Q7QUFFbEQ7SUFBQTtJQUtBLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFDRDtJQUVJO1FBREEsUUFBRyxHQUFHLEVBQUUsQ0FBQTtRQUVKLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM5QztJQUNMLENBQUM7SUFDRCw0Q0FBYSxHQUFiLFVBQWMsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFFRDtJQUFBO1FBQ0ksWUFBTyxHQUFXLE9BQU8sQ0FBQztRQUUxQixhQUFRLEdBQVcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUVoQyxnQkFBZ0I7UUFDaEIsK0JBQStCO1FBQy9CLDBCQUFxQixHQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLHNCQUFpQixHQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsdUJBQWtCLEdBQWE7WUFDM0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1AsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDZCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDVixFQUFFLEVBQUUsRUFBRTtZQUNOLEVBQUU7U0FDTCxDQUFDO1FBQ0YsbUJBQWMsR0FBYSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUEsOEJBQThCO1FBQ3pFLGdCQUFnQjtRQUNoQixZQUFPLEdBQXlCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUMsY0FBUyxHQUEyQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzlDLHFCQUFnQixHQUF5QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ25ELG1CQUFjLEdBQWdDLElBQUksR0FBRyxFQUFFLENBQUM7UUFFeEQsZUFBVSxHQUF5QixJQUFJLG9CQUFvQixFQUFFLENBQUE7UUFHN0QsbUJBQWMsR0FBa0IsSUFBSSwrQkFBYyxFQUFFLENBQUM7UUFLckQsWUFBTyxHQUFXLENBQUMsQ0FBQTtJQVV2QixDQUFDO0lBTkcsMkNBQXVCLEdBQXZCLFVBQXdCLElBQWEsRUFBRSxVQUFtQjtRQUN0RCxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQzlCLFFBQVE7UUFDUixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsT0FBTyxVQUFVLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtBQUNELGtCQUFlLElBQUksU0FBUyxFQUFFLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEFuc3dlckxpYnJhcnkgZnJvbSBcIi4vRGF0YS9RQS9BbnN3ZXJMaWJyYXJ5XCI7XHJcbmltcG9ydCBDaG9vc2VMaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvQ2hvb3NlTGlicmFyeVwiO1xyXG5pbXBvcnQgRXhwbGFpbkxpYnJhcnkgZnJvbSBcIi4vRGF0YS9RQS9FeHBsYWluTGlicmFyeVwiO1xyXG5pbXBvcnQgUUFMaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvUUFMaWJyYXJ5XCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuL0VudW0vR2FtZVN0YXRlXCI7XHJcbmltcG9ydCB7IFRyYWluVHlwZSB9IGZyb20gXCIuL0VudW0vVHJhaW5UeXBlXCI7XHJcbmltcG9ydCB7IFdlYlBvc3RNZXNzYWdlIH0gZnJvbSBcIi4vV2ViUG9zdE1lc3NhZ2VcIjtcclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgdHJhaW5UeXBlTnVtYmVyOiBudW1iZXI7XHJcbiAgICB0cmFpblR5cGU6IFRyYWluVHlwZTtcclxuXHJcbn1cclxuY2xhc3MgTnVtYmVyQ29udmVydEVuZ2xpc2gge1xyXG4gICAgc3RyID0gW11cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjY7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnN0ci5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoaSArIDY1KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuRW5nbGlzaChfbnVtOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdHJbX251bV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEdhbWVNb2RlbCB7XHJcbiAgICB2ZXJzaW9uOiBzdHJpbmcgPSBcIjEuMC40XCI7XHJcbiAgICBjaG9vc2VBbnN3ZXI6IHN0cmluZztcclxuICAgIHBsYXlEYXRhOiBQbGF5ZXIgPSBuZXcgUGxheWVyKCk7XHJcblxyXG4gICAgLy8tLS0tLS3os4fmlpnljYDvvIznhKHlvJXnlKjliLBcclxuICAgIC8vIG5vVXNlU3RhdGlvbjogbnVtYmVyW10gPSBbOF1cclxuICAgIHN0YXRpb25UeXBlX1Nob3dWaWRlbzogbnVtYmVyW10gPSBbMSwgMjBdO1xyXG4gICAgc3RhdGlvblR5cGVfU3RhcnQ6IG51bWJlcltdID0gWzBdO1xyXG4gICAgc3RhdGlvblR5cGVfTm9ybWFsOiBudW1iZXJbXSA9IFtcclxuICAgICAgICAyLCAzLCA0LFxyXG4gICAgICAgIDYsIDcsIDgsIDksIDEwLFxyXG4gICAgICAgIDEyLCAxMywgMTQsXHJcbiAgICAgICAgMTYsIDE3LFxyXG4gICAgICAgIDE5XHJcbiAgICBdO1xyXG4gICAgc3RhdGlvblR5cGVfUUE6IG51bWJlcltdID0gWzUsIDExLCAxNSwgMThdOy8vMTnmmK/oo53po77nlKjnmoTkuKbnhKHmj5DnianvvIzkvYblm6Dngrrpu57pu57nlJ/miJDpoY/oibLLh+mXnOS/gumcgOimgeaUvum7nlxyXG4gICAgLy8tLS0tLS3os4fmlpnljYDvvIznhKHlvJXnlKjliLBcclxuICAgIG1hcEl0ZW06IE1hcDxudW1iZXIsIE1hcEl0ZW0+ID0gbmV3IE1hcCgpO1xyXG4gICAgbWFwU3ByaXRlOiBNYXA8bnVtYmVyLCBNYXBTcHJpdGU+ID0gbmV3IE1hcCgpO1xyXG4gICAgcGF0aFBvc2l0aW9uRGF0YTogTWFwPG51bWJlciwgY2MuVmVjMj4gPSBuZXcgTWFwKCk7XHJcbiAgICBwYXRoQmV6aWVyRGF0YTogTWFwPG51bWJlciwgQXJyYXk8Y2MuVmVjMj4+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIGVuZ2xpc2hMaWI6IE51bWJlckNvbnZlcnRFbmdsaXNoID0gbmV3IE51bWJlckNvbnZlcnRFbmdsaXNoKClcclxuICAgIGdhbWVTdGF0ZTogR2FtZVN0YXRlO1xyXG5cclxuICAgIHdlYlBvc3RNZXNzYWdlOldlYlBvc3RNZXNzYWdlID0gbmV3IFdlYlBvc3RNZXNzYWdlKCk7XHJcblxyXG5cclxuICAgIC8vLS0tLS0tLemhjOW6qy0tLS0tLS1cclxuICAgIHFhTGlicmFyeTogUUFMaWJyYXJ5O1xyXG4gICAgcWFJbmRleDogbnVtYmVyID0gMFxyXG4gICAgY2hvb3NlTGlicmFyeTogQ2hvb3NlTGlicmFyeTtcclxuICAgIGFuc3dlckxpYnJhcnk6IEFuc3dlckxpYnJhcnk7XHJcbiAgICBleHBsYWluTGlicmFyeTogRXhwbGFpbkxpYnJhcnk7XHJcbiAgICBjb252ZXJ0T3RoZXJOb2RlU3BhY2VBUihub2RlOiBjYy5Ob2RlLCB0YXJnZXROb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRhcmdldE5vZGUucG9zaXRpb247XHJcbiAgICAgICAgLy/ovYnmiJDkuJbnlYzluqfmqJlcclxuICAgICAgICBsZXQgd29ybGRQb2ludCA9IG5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb2ludCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEdhbWVNb2RlbCgpXHJcblxyXG5cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/TrainInfoLibrary.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd89c3/OkFBAOaDn9dkEvkj4', 'TrainInfoLibrary');
// Script/Data/TrainInfoLibrary.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TrainInfoLibrary = /** @class */ (function () {
    function TrainInfoLibrary() {
        this.lib = [
            null,
            null,
            "八斗子站有「北臺灣多良車站」之稱的美譽，是全臺首座跨縣市車站，設有界標，位於新北市瑞芳和基隆的交界，車站僅保留月臺，沒有屋頂、閘門、售票機與站務人員，下車後眼前只有無邊際的湛藍天空與深邃海洋，月臺與大海只相隔一條馬路的距離，將群山與海天一色盡收眼底，小小一站擁有大大美麗。",
            "基隆站是臺灣鐵路縱貫線起點，建造於1887年，1891年10月啟用迄今。目前以「雞籠」設計南側之造型帷幕牆，形成波浪狀的排列組合，呈現「海風漫漫、波光粼粼」的獨特意涵與地標性。北站設置以不銹鋼網、虹彩亮光板及彩色透明板打造的藝術創作《燦流》，造型盤旋迴繞、起伏有致，呼應基隆依山傍海的地理特色，也體現空間流動意涵。",
            "早年山佳附近盛產煤礦，1903年興建舊名為臺語「山仔腳停車場」的車站載運煤礦。2002年劃定為市定古蹟，為新舊站並存的車站。小站為典雅和洋風格的建築，切角頂式屋頂與木造屋簷，散發雅致的日式風情；門外米黃色調的洗石子廊柱，鐫刻車站的百年光陰。現仍保存日治時期與戰後的時刻表與售票口，供遊客一覽往昔舊站的風情。",
            null,
            "臺北車站1891年設站，經五次遷移與改建，歷次站體有歐式棚架、文藝復興、現代主義風格等，皆呈現當代時興的文化風貌。現今建築由建築師沈祖海、陳其寬、郭茂林共同設計，是臺灣第一座鐵道地下化車站，同時亦為臺鐵、高鐵、臺北捷運、桃園機場捷運共構之車站，周邊設有公路客運站，是全臺規模及運量最大的火車站。",
            "為維護國定古蹟及整體美感，新竹站是全臺唯一正面沒有站名牌的車站。建築融合巴洛克與部分哥德式風格元素，加上中央盔頂型鐘塔，從高聳的設計到急斜屋頂、老虎窗、半浮雕基座、雕花壁柱、水平楣樑等，讓這座城市地標更顯獨特。2013年與同於1913年創建的紐約中央車站從地球兩端溫暖接軌，舉辦建站百年活動，並締結姊妹車站。",
            "苗栗車站附近之『功維敘隧道』為全臺唯一的城牆式隧道。舊山線「功維敘」隧道，全長460公尺，於1902年竣工，北側入口為磚砌城門造型，題有總督兒玉源太郎手書的「功維敘」，氣勢非凡。1988年新山線通車後，整修為旅遊景點，內有五彩燈光投射，南側有假日市集公園，結合上方的貓貍山公園，是來到苗栗站踏青之好去處。",
            "海線僅存五座木造車站，從北至南分別為談文、大山、新埔、日南和追分車站，因此有「海線五寶」之稱，五座車站皆列入歷史建築且至今仍保存得相當完整。日南車站興建於西元1922年，從月臺側看就可見到醒目的牛眼窗鑲在高處，是國內少數幾個古蹟車站的代表之一。",
            "第一代車站於1905年啟用，第二代車站俗稱舊站,為國定古蹟車站 ,有著紅磚造、洋式木構造屋頂,與承襲了復古而有韻味的日式造型。第三代車站站前廣場陳列著「期待著要去旅行的人」的巨型人偶、樓梯旁立著張開翅膀,準備要飛到遠方遊玩的大型蜻蜓,不僅增添了文藝氣息,車站也變得更活潑亮眼，是臺灣唯一三代同堂百年車站。",
            null,
            "集集線為臺鐵最長的鐵路支線,穿越五座隧道後,列車緩緩抵達終點,「最美車站-車埕站」。昔日站前有許多埔里糖廠的臺車停放,站名因此而來。1958年間車埕在木業發展極盛時期曾引進兩千多名就業人口,造就車埕的二度風華。現在的車埕站風貌，於921地震的嚴重毀損後，經由原木重建而成，連站前的空地也使用原木鋪設，極富特色。",
            "是臺鐵局縱貫線南段、林務局阿里山森林鐵路車站及高鐵嘉義站三處交會點。「嘉義之心城市願景館」位於嘉義站東側，展示內容隨鐵路高架細部的進度不斷更新相關資訊，在館內有VR（虛擬實境）體驗，提供大家探索未來嘉義車站、嘉北車站及北回歸線站建築樣貌。另外，可透過拼圖遊戲，了解車站歷史，亦可體驗搭乘火車的臨場感。",
            "車站於1900年第一代木造站體完工, 1936年改建完成第二代車站, 本體為鋼筋混凝土建築，是日治時期唯一一座二層樓車站建築。一樓以鐵路營運為主,二樓為鐵道飯店,是當時唯一具旅館功能的車站,1998年指定為國定古蹟。2017年12月，國定古蹟-臺南車站啟動修復再利用工程，鐵道飯店七間房間會依原貌修復，未來將再評估是否委外經營。",
            "早期的橘紅的柴油車頭，拉著三節藍色開窗的印度製車廂，早早停靠在第一月台。老舊的綠色硬椅背，電風扇緩慢轉動。這曾被作家劉克襄稱為「跟世界分手的列車」的南迴普快車，隨著鐵路電氣化通車，於2020年暫別了鐵道的舞台，並於2021年10月23日，被賦予了「藍皮解憂號」之名，於枋寮站至臺東站間南迴線進行復駛。",
            null,
            "臺東鐵道藝術村前身為舊臺東火車站，是原臺東線的終點，2001年廢止後由位於卑南的臺東新站取代。鐵道藝術村原味重現了車站、月臺等設施,並有三節DR2050 舊車廂在此展示,保有完整的早期車站風貌。現今的臺東車站前地景藝術，模仿蘭嶼雅美族「達悟族」戰士的頭盔，站內廣播用原住民話播放著訊息，處處擺設著原住民的木雕創作，整體車站擁有獨樹一格風味。",
            "「嗚~」響亮的汽笛聲從方傳來,迴盪在花東縱谷間。蒸汽火車是靠燒煤產生的蒸汽來推動運轉,近年在動態保存文物動機的修復下,蒸汽機車每年都會在特定時節重出江湖,其中具有「蒸汽火車國王」和「機關車女王」美譽的DT668和CT273,更是台鐵列車中的國寶級角色。2014年台鐵完成CT273蒸汽火車的修復，並於同年夏天來到花蓮牽引仲夏寶島號。",
            "宜蘭車站除保有原舊宿舍區歷史建築,並將原本廢棄的空間規劃成全臺第一座幾米主題廣場,以「記憶片刻風景」為主題,幾米繪本「向左走 向右走」中的男、女主角往各自方向走去、繪本「星空」裡的小男孩與小女孩一起等公車上下學場景，以及在「丟丟噹森林」也可見到乘載著夢想起飛的星空列車，成為結合鐵道元素,最夢幻的一處景點。",
            null,
        ];
        this.title = [
            null,
            null,
            "八斗子車站",
            "基隆車站",
            "山佳車站",
            null,
            "臺北車站",
            "新竹車站",
            "苗栗車站",
            "日南車站",
            "臺中車站",
            null,
            "車埕車站",
            "嘉義車站",
            "臺南車站",
            "枋寮車站",
            null,
            "臺東車站",
            "花蓮車站",
            "宜蘭車站",
            null,
        ];
    }
    TrainInfoLibrary.prototype.getInfo = function (_num) {
        return this.lib[_num];
    };
    TrainInfoLibrary.prototype.getName = function (_num) {
        return this.title[_num];
    };
    return TrainInfoLibrary;
}());
exports.default = new TrainInfoLibrary();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxUcmFpbkluZm9MaWJyYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUNJLFFBQUcsR0FBRztZQUNGLElBQUk7WUFDSixJQUFJO1lBQ0osMElBQTBJO1lBQzFJLCtKQUErSjtZQUMvSiwySkFBMko7WUFDM0osSUFBSTtZQUNKLHFKQUFxSjtZQUNySiw0SkFBNEo7WUFDNUosMEpBQTBKO1lBQzFKLDRIQUE0SDtZQUM1SCwwSkFBMEo7WUFDMUosSUFBSTtZQUNKLDZKQUE2SjtZQUM3Six3SkFBd0o7WUFDeEosc0tBQXNLO1lBQ3RLLHdKQUF3SjtZQUN4SixJQUFJO1lBQ0osNEtBQTRLO1lBQzVLLHdLQUF3SztZQUN4SywySkFBMko7WUFDM0osSUFBSTtTQUNQLENBQUE7UUFDRCxVQUFLLEdBQUc7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLE9BQU87WUFDUCxNQUFNO1lBQ04sTUFBTTtZQUNOLElBQUk7WUFDSixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLElBQUk7WUFDSixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sSUFBSTtZQUNKLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLElBQUk7U0FDUCxDQUFBO0lBT0wsQ0FBQztJQU5HLGtDQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBQ0Qsa0NBQU8sR0FBUCxVQUFRLElBQVk7UUFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFDTCx1QkFBQztBQUFELENBckRBLEFBcURDLElBQUE7QUFDRCxrQkFBZSxJQUFJLGdCQUFnQixFQUFFLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUcmFpbkluZm9MaWJyYXJ5IHtcclxuICAgIGxpYiA9IFtcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgXCLlhavmlpflrZDnq5nmnInjgIzljJfoh7rngaPlpJroia/ou4rnq5njgI3kuYvnqLHnmoTnvo7orb3vvIzmmK/lhajoh7rpppbluqfot6jnuKPluILou4rnq5nvvIzoqK3mnInnlYzmqJnvvIzkvY3mlrzmlrDljJfluILnkZ7oirPlkozln7rpmobnmoTkuqTnlYzvvIzou4rnq5nlg4Xkv53nlZnmnIjoh7rvvIzmspLmnInlsYvpoILjgIHplpjploDjgIHllK7npajmqZ/oiIfnq5nli5nkurrlk6HvvIzkuIvou4rlvoznnLzliY3lj6rmnInnhKHpgorpmpvnmoTmuZvol43lpKnnqbroiIfmt7HpgoPmtbfmtIvvvIzmnIjoh7roiIflpKfmtbflj6rnm7jpmpTkuIDmop3ppqzot6/nmoTot53pm6LvvIzlsIfnvqTlsbHoiIfmtbflpKnkuIDoibLnm6HmlLbnnLzlupXvvIzlsI/lsI/kuIDnq5nmk4HmnInlpKflpKfnvo7pupfjgIJcIixcclxuICAgICAgICBcIuWfuumahuermeaYr+iHuueBo+mQtei3r+e4seiyq+e3mui1t+m7nu+8jOW7uumAoOaWvDE4ODflubTvvIwxODkx5bm0MTDmnIjllZ/nlKjov4Tku4rjgILnm67liY3ku6XjgIzpm57nsaDjgI3oqK3oqIjljZflgbTkuYvpgKDlnovluLfluZXniYbvvIzlvaLmiJDms6Lmtarni4DnmoTmjpLliJfntYTlkIjvvIzlkYjnj77jgIzmtbfpoqjmvKvmvKvjgIHms6LlhYnnsrznsrzjgI3nmoTnjajnibnmhI/mtrXoiIflnLDmqJnmgKfjgILljJfnq5noqK3nva7ku6XkuI3pirnpi7zntrLjgIHombnlvankuq7lhYnmnb/lj4rlvanoibLpgI/mmI7mnb/miZPpgKDnmoTol53ooZPlibXkvZzjgIrnh6bmtYHjgIvvvIzpgKDlnovnm6Tml4vov7TnuZ7jgIHotbfkvI/mnInoh7TvvIzlkbzmh4nln7rpmobkvp3lsbHlgo3mtbfnmoTlnLDnkIbnibnoibLvvIzkuZ/pq5Tnj77nqbrplpPmtYHli5XmhI/mtrXjgIJcIixcclxuICAgICAgICBcIuaXqeW5tOWxseS9s+mZhOi/keebm+eUoueFpOekpu+8jDE5MDPlubToiIjlu7roiIrlkI3ngrroh7roqp7jgIzlsbHku5TohbPlgZzou4rloLTjgI3nmoTou4rnq5novInpgYvnhaTnpKbjgIIyMDAy5bm05YqD5a6a54K65biC5a6a5Y+k6Lmf77yM54K65paw6IiK56uZ5Lim5a2Y55qE6LuK56uZ44CC5bCP56uZ54K65YW46ZuF5ZKM5rSL6aKo5qC855qE5bu656+J77yM5YiH6KeS6aCC5byP5bGL6aCC6IiH5pyo6YCg5bGL57C377yM5pWj55m86ZuF6Ie055qE5pel5byP6aKo5oOF77yb6ZaA5aSW57Gz6buD6Imy6Kq/55qE5rSX55+z5a2Q5buK5p+x77yM6ZCr5Yi76LuK56uZ55qE55m+5bm05YWJ6Zmw44CC54++5LuN5L+d5a2Y5pel5rK75pmC5pyf6IiH5oiw5b6M55qE5pmC5Yi76KGo6IiH5ZSu56Wo5Y+j77yM5L6b6YGK5a6i5LiA6Ka95b6A5piU6IiK56uZ55qE6aKo5oOF44CCXCIsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBcIuiHuuWMl+i7iuermTE4OTHlubToqK3nq5nvvIzntpPkupTmrKHpgbfnp7voiIfmlLnlu7rvvIzmrbfmrKHnq5npq5TmnInmrZDlvI/mo5rmnrbjgIHmlofol53lvqnoiIjjgIHnj77ku6PkuLvnvqnpoqjmoLznrYnvvIznmoblkYjnj77nlbbku6PmmYLoiIjnmoTmlofljJbpoqjosozjgILnj77ku4rlu7rnr4nnlLHlu7rnr4nluKvmsojnpZbmtbfjgIHpmbPlhbblr6zjgIHpg63ojILmnpflhbHlkIzoqK3oqIjvvIzmmK/oh7rngaPnrKzkuIDluqfpkLXpgZPlnLDkuIvljJbou4rnq5nvvIzlkIzmmYLkuqbngrroh7rpkLXjgIHpq5jpkLXjgIHoh7rljJfmjbfpgYvjgIHmoYPlnJLmqZ/loLTmjbfpgYvlhbHmp4vkuYvou4rnq5nvvIzlkajpgoroqK3mnInlhazot6/lrqLpgYvnq5nvvIzmmK/lhajoh7ropo/mqKHlj4rpgYvph4/mnIDlpKfnmoTngavou4rnq5njgIJcIixcclxuICAgICAgICBcIueCuue2reitt+Wci+WumuWPpOi5n+WPiuaVtOmrlOe+juaEn++8jOaWsOerueermeaYr+WFqOiHuuWUr+S4gOato+mdouaykuacieermeWQjeeJjOeahOi7iuermeOAguW7uuevieiejeWQiOW3tOa0m+WFi+iIh+mDqOWIhuWTpeW+t+W8j+miqOagvOWFg+e0oO+8jOWKoOS4iuS4reWkrueblOmgguWei+mQmOWhlO+8jOW+numrmOiBs+eahOioreioiOWIsOaApeaWnOWxi+mgguOAgeiAgeiZjueql+OAgeWNiua1rumbleWfuuW6p+OAgembleiKseWjgeafseOAgeawtOW5s+alo+aokeetie+8jOiuk+mAmeW6p+WfjuW4guWcsOaomeabtOmhr+eNqOeJueOAgjIwMTPlubToiIflkIzmlrwxOTEz5bm05Ym15bu655qE57SQ57SE5Lit5aSu6LuK56uZ5b6e5Zyw55CD5YWp56uv5rqr5pqW5o6l6LuM77yM6IiJ6L6m5bu656uZ55m+5bm05rS75YuV77yM5Lim57eg57WQ5aeK5aa56LuK56uZ44CCXCIsXHJcbiAgICAgICAgXCLoi5fmoJfou4rnq5npmYTov5HkuYvjgI7lip/ntq3mlZjpmqfpgZPjgI/ngrrlhajoh7rllK/kuIDnmoTln47niYblvI/pmqfpgZPjgILoiIrlsbHnt5rjgIzlip/ntq3mlZjjgI3pmqfpgZPvvIzlhajplbc0NjDlhazlsLrvvIzmlrwxOTAy5bm056uj5bel77yM5YyX5YG05YWl5Y+j54K656Oa56CM5Z+O6ZaA6YCg5Z6L77yM6aGM5pyJ57i9552j5YWS546J5rqQ5aSq6YOO5omL5pu455qE44CM5Yqf57at5pWY44CN77yM5rCj5Yui6Z2e5Yeh44CCMTk4OOW5tOaWsOWxsee3mumAmui7iuW+jO+8jOaVtOS/rueCuuaXhemBiuaZr+m7nu+8jOWFp+acieS6lOW9qeeHiOWFieaKleWwhO+8jOWNl+WBtOacieWBh+aXpeW4gumbhuWFrOWcku+8jOe1kOWQiOS4iuaWueeahOiyk+iyjeWxseWFrOWcku+8jOaYr+S+huWIsOiLl+agl+ermei4j+mdkuS5i+WlveWOu+iZleOAglwiLFxyXG4gICAgICAgIFwi5rW357ea5YOF5a2Y5LqU5bqn5pyo6YCg6LuK56uZ77yM5b6e5YyX6Iez5Y2X5YiG5Yil54K66KuH5paH44CB5aSn5bGx44CB5paw5Z+U44CB5pel5Y2X5ZKM6L+95YiG6LuK56uZ77yM5Zug5q2k5pyJ44CM5rW357ea5LqU5a+244CN5LmL56ix77yM5LqU5bqn6LuK56uZ55qG5YiX5YWl5q235Y+y5bu656+J5LiU6Iez5LuK5LuN5L+d5a2Y5b6X55u455W25a6M5pW044CC5pel5Y2X6LuK56uZ6IiI5bu65pa86KW/5YWDMTkyMuW5tO+8jOW+nuaciOiHuuWBtOeci+WwseWPr+imi+WIsOmGkuebrueahOeJm+ecvOeql+mRsuWcqOmrmOiZle+8jOaYr+Wci+WFp+WwkeaVuOW5vuWAi+WPpOi5n+i7iuermeeahOS7o+ihqOS5i+S4gOOAglwiLFxyXG4gICAgICAgIFwi56ys5LiA5Luj6LuK56uZ5pa8MTkwNeW5tOWVn+eUqO+8jOesrOS6jOS7o+i7iuermeS/l+eoseiIiuermSzngrrlnIvlrprlj6TouZ/ou4rnq5kgLOacieiRl+e0heejmumAoOOAgea0i+W8j+acqOani+mAoOWxi+mggizoiIfmib/opbLkuoblvqnlj6TogIzmnInpn7vlkbPnmoTml6XlvI/pgKDlnovjgILnrKzkuInku6Pou4rnq5nnq5nliY3lu6PloLTpmbPliJfokZfjgIzmnJ/lvoXokZfopoHljrvml4XooYznmoTkurrjgI3nmoTlt6jlnovkurrlgbbjgIHmqJPmoq/ml4Hnq4vokZflvLXplovnv4XohoAs5rqW5YKZ6KaB6aOb5Yiw6YGg5pa56YGK546p55qE5aSn5Z6L6Jy76JyTLOS4jeWDheWinua3u+S6huaWh+iXneawo+aBryzou4rnq5nkuZ/ororlvpfmm7TmtLvmvZHkuq7nnLzvvIzmmK/oh7rngaPllK/kuIDkuInku6PlkIzloILnmb7lubTou4rnq5njgIJcIixcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIFwi6ZuG6ZuG57ea54K66Ie66ZC15pyA6ZW355qE6ZC16Lev5pSv57eaLOepv+i2iuS6lOW6p+map+mBk+W+jCzliJfou4rnt6nnt6nmirXpgZTntYLpu54s44CM5pyA576O6LuK56uZLei7iuWfleermeOAjeOAguaYlOaXpeermeWJjeacieioseWkmuWflOmHjOezluW7oOeahOiHuui7iuWBnOaUviznq5nlkI3lm6DmraTogIzkvobjgIIxOTU45bm06ZaT6LuK5Z+V5Zyo5pyo5qWt55m85bGV5qW155ub5pmC5pyf5pu+5byV6YCy5YWp5Y2D5aSa5ZCN5bCx5qWt5Lq65Y+jLOmAoOWwsei7iuWfleeahOS6jOW6pumiqOiPr+OAguePvuWcqOeahOi7iuWfleermemiqOiyjO+8jOaWvDkyMeWcsOmch+eahOWatOmHjeavgOaQjeW+jO+8jOe2k+eUseWOn+acqOmHjeW7uuiAjOaIkO+8jOmAo+ermeWJjeeahOepuuWcsOS5n+S9v+eUqOWOn+acqOmLquiore+8jOalteWvjOeJueiJsuOAglwiLFxyXG4gICAgICAgIFwi5piv6Ie66ZC15bGA57ix6LKr57ea5Y2X5q6144CB5p6X5YuZ5bGA6Zi/6YeM5bGx5qOu5p6X6ZC16Lev6LuK56uZ5Y+K6auY6ZC15ZiJ576p56uZ5LiJ6JmV5Lqk5pyD6bue44CC44CM5ZiJ576p5LmL5b+D5Z+O5biC6aGY5pmv6aSo44CN5L2N5pa85ZiJ576p56uZ5p2x5YG077yM5bGV56S65YWn5a656Zqo6ZC16Lev6auY5p6257Sw6YOo55qE6YCy5bqm5LiN5pa35pu05paw55u46Zec6LOH6KiK77yM5Zyo6aSo5YWn5pyJVlLvvIjomZvmk6zlr6blooPvvInpq5TpqZfvvIzmj5DkvpvlpKflrrbmjqLntKLmnKrkvoblmInnvqnou4rnq5njgIHlmInljJfou4rnq5nlj4rljJflm57mrbjnt5rnq5nlu7rnr4nmqKPosozjgILlj6blpJbvvIzlj6/pgI/pgY7mi7zlnJbpgYrmiLLvvIzkuobop6Pou4rnq5nmrbflj7LvvIzkuqblj6/pq5TpqZfmkK3kuZjngavou4rnmoToh6jloLTmhJ/jgIJcIixcclxuICAgICAgICBcIui7iuermeaWvDE5MDDlubTnrKzkuIDku6PmnKjpgKDnq5npq5Tlrozlt6UsIDE5MzblubTmlLnlu7rlrozmiJDnrKzkuozku6Pou4rnq5ksIOacrOmrlOeCuumLvOeti+a3t+WHneWcn+W7uuevie+8jOaYr+aXpeayu+aZguacn+WUr+S4gOS4gOW6p+S6jOWxpOaok+i7iuermeW7uuevieOAguS4gOaok+S7pemQtei3r+eHn+mBi+eCuuS4uyzkuozmqJPngrrpkLXpgZPpo6/lupcs5piv55W25pmC5ZSv5LiA5YW35peF6aSo5Yqf6IO955qE6LuK56uZLDE5OTjlubTmjIflrprngrrlnIvlrprlj6TouZ/jgIIyMDE35bm0MTLmnIjvvIzlnIvlrprlj6TouZ8t6Ie65Y2X6LuK56uZ5ZWf5YuV5L+u5b6p5YaN5Yip55So5bel56iL77yM6ZC16YGT6aOv5bqX5LiD6ZaT5oi/6ZaT5pyD5L6d5Y6f6LKM5L+u5b6p77yM5pyq5L6G5bCH5YaN6KmV5Lyw5piv5ZCm5aeU5aSW57aT54ef44CCXCIsXHJcbiAgICAgICAgXCLml6nmnJ/nmoTmqZjntIXnmoTmn7Tmsrnou4rpoK3vvIzmi4nokZfkuInnr4Dol43oibLplovnqpfnmoTljbDluqboo73ou4rlu4LvvIzml6nml6nlgZzpnaDlnKjnrKzkuIDmnIjlj7DjgILogIHoiIrnmoTntqDoibLnoazmpIXog4zvvIzpm7vpoqjmiYfnt6nmhaLovYnli5XjgILpgJnmm77ooqvkvZzlrrblionlhYvopYTnqLHngrrjgIzot5/kuJbnlYzliIbmiYvnmoTliJfou4rjgI3nmoTljZfov7Tmma7lv6vou4rvvIzpmqjokZfpkLXot6/pm7vmsKPljJbpgJrou4rvvIzmlrwyMDIw5bm05pqr5Yil5LqG6ZC16YGT55qE6Iie5Y+w77yM5Lim5pa8MjAyMeW5tDEw5pyIMjPml6XvvIzooqvos6bkuojkuobjgIzol43nmq7op6PmhoLomZ/jgI3kuYvlkI3vvIzmlrzmnovlr67nq5noh7Poh7rmnbHnq5nplpPljZfov7Tnt5rpgLLooYzlvqnpp5vjgIJcIixcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIFwi6Ie65p2x6ZC16YGT6Jed6KGT5p2R5YmN6Lqr54K66IiK6Ie65p2x54Gr6LuK56uZ77yM5piv5Y6f6Ie65p2x57ea55qE57WC6bue77yMMjAwMeW5tOW7ouatouW+jOeUseS9jeaWvOWNkeWNl+eahOiHuuadseaWsOermeWPluS7o+OAgumQtemBk+iXneihk+adkeWOn+WRs+mHjeePvuS6hui7iuermeOAgeaciOiHuuetieioreaWvSzkuKbmnInkuInnr4BEUjIwNTAg6IiK6LuK5buC5Zyo5q2k5bGV56S6LOS/neacieWujOaVtOeahOaXqeacn+i7iuermemiqOiyjOOAguePvuS7iueahOiHuuadsei7iuermeWJjeWcsOaZr+iXneihk++8jOaooeS7v+iYreW2vOmbhee+juaXj+OAjOmBlOaCn+aXj+OAjeaIsOWjq+eahOmgreeblO+8jOermeWFp+W7o+aSreeUqOWOn+S9j+awkeipseaSreaUvuiRl+ioiuaBr++8jOiZleiZleaTuuioreiRl+WOn+S9j+awkeeahOacqOmbleWJteS9nO+8jOaVtOmrlOi7iuermeaTgeacieeNqOaoueS4gOagvOmiqOWRs+OAglwiLFxyXG4gICAgICAgIFwi44CM5ZeafuOAjemfv+S6rueahOaxveesm+iBsuW+nuaWueWCs+S+hizov7Tnm6rlnKjoirHmnbHnuLHosLfplpPjgILokrjmsb3ngavou4rmmK/pnaDnh5LnhaTnlKLnlJ/nmoTokrjmsb3kvobmjqjli5XpgYvovYks6L+R5bm05Zyo5YuV5oWL5L+d5a2Y5paH54mp5YuV5qmf55qE5L+u5b6p5LiLLOiSuOaxveapn+i7iuavj+W5tOmDveacg+WcqOeJueWumuaZguevgOmHjeWHuuaxn+a5lizlhbbkuK3lhbfmnInjgIzokrjmsb3ngavou4rlnIvnjovjgI3lkozjgIzmqZ/pl5zou4rlpbPnjovjgI3nvo7orb3nmoREVDY2OOWSjENUMjczLOabtOaYr+WPsOmQteWIl+i7iuS4reeahOWci+Wvtue0muinkuiJsuOAgjIwMTTlubTlj7DpkLXlrozmiJBDVDI3M+iSuOaxveeBq+i7iueahOS/ruW+qe+8jOS4puaWvOWQjOW5tOWkj+WkqeS+huWIsOiKseiTrueJveW8leS7suWkj+WvtuWztuiZn+OAglwiLFxyXG4gICAgICAgIFwi5a6c6Jit6LuK56uZ6Zmk5L+d5pyJ5Y6f6IiK5a6/6IiN5Y2A5q235Y+y5bu656+JLOS4puWwh+WOn+acrOW7ouajhOeahOepuumWk+imj+WKg+aIkOWFqOiHuuesrOS4gOW6p+W5vuexs+S4u+mhjOW7o+WgtCzku6XjgIzoqJjmhrbniYfliLvpoqjmma/jgI3ngrrkuLvpoYws5bm+57Gz57mq5pys44CM5ZCR5bem6LWwIOWQkeWPs+i1sOOAjeS4reeahOeUt+OAgeWls+S4u+inkuW+gOWQhOiHquaWueWQkei1sOWOu+OAgee5quacrOOAjOaYn+epuuOAjeijoeeahOWwj+eUt+WtqeiIh+Wwj+Wls+WtqeS4gOi1t+etieWFrOi7iuS4iuS4i+WtuOWgtOaZr++8jOS7peWPiuWcqOOAjOS4n+S4n+WZueajruael+OAjeS5n+WPr+imi+WIsOS5mOi8ieiRl+WkouaDs+i1t+mjm+eahOaYn+epuuWIl+i7iu+8jOaIkOeCuue1kOWQiOmQtemBk+WFg+e0oCzmnIDlpKLlubvnmoTkuIDomZXmma/pu57jgIJcIixcclxuICAgICAgICBudWxsLFxyXG4gICAgXVxyXG4gICAgdGl0bGUgPSBbXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIFwi5YWr5paX5a2Q6LuK56uZXCIsXHJcbiAgICAgICAgXCLln7rpmobou4rnq5lcIixcclxuICAgICAgICBcIuWxseS9s+i7iuermVwiLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgXCLoh7rljJfou4rnq5lcIixcclxuICAgICAgICBcIuaWsOeruei7iuermVwiLFxyXG4gICAgICAgIFwi6IuX5qCX6LuK56uZXCIsXHJcbiAgICAgICAgXCLml6XljZfou4rnq5lcIixcclxuICAgICAgICBcIuiHuuS4rei7iuermVwiLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgXCLou4rln5Xou4rnq5lcIixcclxuICAgICAgICBcIuWYiee+qei7iuermVwiLFxyXG4gICAgICAgIFwi6Ie65Y2X6LuK56uZXCIsXHJcbiAgICAgICAgXCLmnovlr67ou4rnq5lcIixcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIFwi6Ie65p2x6LuK56uZXCIsXHJcbiAgICAgICAgXCLoirHok67ou4rnq5lcIixcclxuICAgICAgICBcIuWunOiYrei7iuermVwiLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICBdXHJcbiAgICBnZXRJbmZvKF9udW06IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpYltfbnVtXVxyXG4gICAgfVxyXG4gICAgZ2V0TmFtZShfbnVtOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZVtfbnVtXVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBUcmFpbkluZm9MaWJyYXJ5KCkiXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enum/TrainType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8e6c07CltVMH4iPRIqblfiL', 'TrainType');
// Script/Enum/TrainType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainType = void 0;
/**
 * 車種
 */
var TrainType;
(function (TrainType) {
    TrainType["Type0"] = "TrainType_0";
    TrainType["Type1"] = "TrainType_1";
    TrainType["Type2"] = "TrainType_2";
    TrainType["Type3"] = "TrainType_3";
    TrainType["Type4"] = "TrainType_4";
    TrainType["Type5"] = "TrainType_5";
})(TrainType = exports.TrainType || (exports.TrainType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbnVtXFxUcmFpblR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxJQUFZLFNBUVg7QUFSRCxXQUFZLFNBQVM7SUFDakIsa0NBQW9CLENBQUE7SUFDcEIsa0NBQW9CLENBQUE7SUFDcEIsa0NBQW9CLENBQUE7SUFDcEIsa0NBQW9CLENBQUE7SUFDcEIsa0NBQW9CLENBQUE7SUFDcEIsa0NBQW9CLENBQUE7QUFFeEIsQ0FBQyxFQVJXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBUXBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOi7iueorlxyXG4gKi9cclxuZXhwb3J0IGVudW0gVHJhaW5UeXBle1xyXG4gICAgVHlwZTAgPVwiVHJhaW5UeXBlXzBcIixcclxuICAgIFR5cGUxID1cIlRyYWluVHlwZV8xXCIsXHJcbiAgICBUeXBlMiA9XCJUcmFpblR5cGVfMlwiLFxyXG4gICAgVHlwZTMgPVwiVHJhaW5UeXBlXzNcIixcclxuICAgIFR5cGU0ID1cIlRyYWluVHlwZV80XCIsXHJcbiAgICBUeXBlNSA9XCJUcmFpblR5cGVfNVwiLFxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enum/Commad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4928289YRBDm4lMJbFoVM38', 'Commad');
// Script/Enum/Commad.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commamnd = void 0;
var Commamnd;
(function (Commamnd) {
    Commamnd["MainInit"] = "mainInit";
    Commamnd["EndChooseTicket"] = "endChooseTicket";
    Commamnd["EndChoosTrain"] = "endChoosTrain";
    Commamnd["ShowTeaching"] = "showTeaching";
    Commamnd["EndTeaching"] = "endTeaching";
    Commamnd["ShowVideo"] = "showVideo";
    Commamnd["CloseVideo"] = "closeVideo";
    Commamnd["ShowQA"] = "showQA";
    Commamnd["ShowAgainQA"] = "showAgainQA";
    Commamnd["EndQA"] = "endQA";
    Commamnd["ShowAnswer"] = "showAnswer";
    Commamnd["EndAnswer"] = "endAnswer";
    Commamnd["ShowExplain"] = "showExplain";
    Commamnd["EndExplain"] = "endExplain";
    Commamnd["ShowStationInfo"] = "showStationInfo";
    Commamnd["EndtationInfo"] = "endTationInfo";
    Commamnd["ShowGetProps"] = "showGetProps";
    Commamnd["EndGetProps"] = "endGetProps";
    Commamnd["CloseUrlView"] = "closeUrlView";
    Commamnd["ShowEndGame"] = "showEndGame";
    Commamnd["AgainGame"] = "againGame";
    Commamnd["GoLottery"] = "goLottery";
    Commamnd["DoorAgainGame"] = "doorAgainGame";
    Commamnd["MenGO"] = "menGo";
    Commamnd["ManWait"] = "manWait";
    Commamnd["ManLineWait"] = "manLineWait";
    Commamnd["MoveTarget"] = "moveTarget";
    Commamnd["UpdataUIStart"] = "updataUIStart";
})(Commamnd = exports.Commamnd || (exports.Commamnd = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbnVtXFxDb21tYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxRQThCWDtBQTlCRCxXQUFZLFFBQVE7SUFDaEIsaUNBQXFCLENBQUE7SUFDckIsK0NBQW1DLENBQUE7SUFDbkMsMkNBQStCLENBQUE7SUFDL0IseUNBQTZCLENBQUE7SUFDN0IsdUNBQTJCLENBQUE7SUFDM0IsbUNBQXVCLENBQUE7SUFDdkIscUNBQXlCLENBQUE7SUFDekIsNkJBQWlCLENBQUE7SUFDakIsdUNBQTJCLENBQUE7SUFDM0IsMkJBQWUsQ0FBQTtJQUNmLHFDQUF5QixDQUFBO0lBQ3pCLG1DQUF1QixDQUFBO0lBQ3ZCLHVDQUEyQixDQUFBO0lBQzNCLHFDQUF5QixDQUFBO0lBQ3pCLCtDQUFtQyxDQUFBO0lBQ25DLDJDQUErQixDQUFBO0lBQy9CLHlDQUE2QixDQUFBO0lBQzdCLHVDQUEyQixDQUFBO0lBRTNCLHlDQUE2QixDQUFBO0lBQzdCLHVDQUEyQixDQUFBO0lBQzNCLG1DQUF1QixDQUFBO0lBQ3ZCLG1DQUF1QixDQUFBO0lBQ3ZCLDJDQUErQixDQUFBO0lBQy9CLDJCQUFlLENBQUE7SUFDZiwrQkFBbUIsQ0FBQTtJQUNuQix1Q0FBMkIsQ0FBQTtJQUMzQixxQ0FBeUIsQ0FBQTtJQUN6QiwyQ0FBK0IsQ0FBQTtBQUNuQyxDQUFDLEVBOUJXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBOEJuQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIENvbW1hbW5kIHtcclxuICAgIE1haW5Jbml0ID0gXCJtYWluSW5pdFwiLFxyXG4gICAgRW5kQ2hvb3NlVGlja2V0ID0gXCJlbmRDaG9vc2VUaWNrZXRcIixcclxuICAgIEVuZENob29zVHJhaW4gPSBcImVuZENob29zVHJhaW5cIixcclxuICAgIFNob3dUZWFjaGluZyA9IFwic2hvd1RlYWNoaW5nXCIsXHJcbiAgICBFbmRUZWFjaGluZyA9IFwiZW5kVGVhY2hpbmdcIixcclxuICAgIFNob3dWaWRlbyA9IFwic2hvd1ZpZGVvXCIsXHJcbiAgICBDbG9zZVZpZGVvID0gXCJjbG9zZVZpZGVvXCIsXHJcbiAgICBTaG93UUEgPSBcInNob3dRQVwiLFxyXG4gICAgU2hvd0FnYWluUUEgPSBcInNob3dBZ2FpblFBXCIsXHJcbiAgICBFbmRRQSA9IFwiZW5kUUFcIixcclxuICAgIFNob3dBbnN3ZXIgPSBcInNob3dBbnN3ZXJcIixcclxuICAgIEVuZEFuc3dlciA9IFwiZW5kQW5zd2VyXCIsXHJcbiAgICBTaG93RXhwbGFpbiA9IFwic2hvd0V4cGxhaW5cIixcclxuICAgIEVuZEV4cGxhaW4gPSBcImVuZEV4cGxhaW5cIixcclxuICAgIFNob3dTdGF0aW9uSW5mbyA9IFwic2hvd1N0YXRpb25JbmZvXCIsXHJcbiAgICBFbmR0YXRpb25JbmZvID0gXCJlbmRUYXRpb25JbmZvXCIsXHJcbiAgICBTaG93R2V0UHJvcHMgPSBcInNob3dHZXRQcm9wc1wiLFxyXG4gICAgRW5kR2V0UHJvcHMgPSBcImVuZEdldFByb3BzXCIsXHJcblxyXG4gICAgQ2xvc2VVcmxWaWV3ID0gXCJjbG9zZVVybFZpZXdcIixcclxuICAgIFNob3dFbmRHYW1lID0gXCJzaG93RW5kR2FtZVwiLFxyXG4gICAgQWdhaW5HYW1lID0gXCJhZ2FpbkdhbWVcIixcclxuICAgIEdvTG90dGVyeSA9IFwiZ29Mb3R0ZXJ5XCIsXHJcbiAgICBEb29yQWdhaW5HYW1lID0gXCJkb29yQWdhaW5HYW1lXCIsXHJcbiAgICBNZW5HTyA9IFwibWVuR29cIixcclxuICAgIE1hbldhaXQgPSBcIm1hbldhaXRcIixcclxuICAgIE1hbkxpbmVXYWl0ID0gXCJtYW5MaW5lV2FpdFwiLFxyXG4gICAgTW92ZVRhcmdldCA9IFwibW92ZVRhcmdldFwiLFxyXG4gICAgVXBkYXRhVUlTdGFydCA9IFwidXBkYXRhVUlTdGFydFwiXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enum/onClick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84a70jywTlAKod4k22HdC57', 'onClick');
// Script/Enum/onClick.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onClick = void 0;
var onClick;
(function (onClick) {
    /**ManClass
     *
     */
    onClick["TouchEnd"] = "touchend";
})(onClick = exports.onClick || (exports.onClick = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbnVtXFxvbkNsaWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQVksT0FNWDtBQU5ELFdBQVksT0FBTztJQUNmOztPQUVHO0lBQ0gsZ0NBQXFCLENBQUE7QUFFekIsQ0FBQyxFQU5XLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQU1sQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZW51bSBvbkNsaWNrIHtcclxuICAgIC8qKk1hbkNsYXNzXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgVG91Y2hFbmQgPSBcInRvdWNoZW5kXCIsXHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameControll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f03foqAVxMjqFGR1Co9WIA', 'GameControll');
// Script/GameControll.ts

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
var AssetMng_1 = require("./Asset/AssetMng");
var CameraControll_1 = require("./Class/CameraControll");
var Panel_Man_1 = require("./Class/Mam/Panel_Man");
var Panel_AniPath_1 = require("./Class/Panel_AniPath");
var Panel_Cloud_1 = require("./Class/Panel_Cloud");
var Panel_Door_1 = require("./Class/Panel_Door");
var Panel_Map_1 = require("./Class/Panel_Map");
var GameEvent_1 = require("./Enum/GameEvent");
var GameModle_1 = require("./GameModle");
var Panel_UI_1 = require("./Class/UI/Panel_UI");
var Panel_Message_1 = require("./Class/Message/Panel_Message");
var ComponentBase_1 = require("./Data/base/ComponentBase");
var Panel_Bear_1 = require("./Class/Panel_Bear");
var GameState_1 = require("./Enum/GameState");
var QALibrary_1 = require("./Data/QA/QALibrary");
var ChooseLibrary_1 = require("./Data/QA/ChooseLibrary");
var AnswerLibrary_1 = require("./Data/QA/AnswerLibrary");
var ExplainLibrary_1 = require("./Data/QA/ExplainLibrary");
var TrainInfoLibrary_1 = require("./Data/TrainInfoLibrary");
var PropsLibrary_1 = require("./Data/QA/PropsLibrary");
var CameraState_1 = require("./Enum/CameraState");
var Panel_Version_1 = require("./Class/Panel_Version");
var Panel_Test_1 = require("./Class/Panel_Test");
var DelayTime_1 = require("./Data/DelayTime");
var Panel_Bufer_1 = require("./Class/Panel_Bufer");
var Panel_Teaching_1 = require("./Class/Panel_Teaching");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Controll = /** @class */ (function (_super) {
    __extends(Controll, _super);
    function Controll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Controll.prototype.onLoad = function () {
        this.panel_AniPath = cc.find("Canvas/Panel_AniPath").addComponent(Panel_AniPath_1.default);
        this.panel_Map = cc.find("Canvas/Panel_Map").addComponent(Panel_Map_1.default);
        this.panel_Man = cc.find("Canvas/Panel_Man").addComponent(Panel_Man_1.default);
        this.cameraControll = cc.find("Canvas/MainCamera").addComponent(CameraControll_1.default);
        this.panel_Door = cc.find("Canvas/Panel_Door").addComponent(Panel_Door_1.default);
        this.panel_Cloud = cc.find("Canvas/Panel_Cloud").addComponent(Panel_Cloud_1.default);
        this.panel_UI = cc.find("Canvas/Panel_UI").addComponent(Panel_UI_1.default);
        this.panel_Bear = cc.find("Canvas/Panel_Bear").addComponent(Panel_Bear_1.default);
        this.panel_Bufer = cc.find("Canvas/Panel_Bufer").addComponent(Panel_Bufer_1.default);
        this.panel_Teaching = cc.find("Canvas/Panel_Teaching").addComponent(Panel_Teaching_1.default);
        this.panel_Message = cc.find("Canvas/Panel_Message").addComponent(Panel_Message_1.default);
        this.panel_Version = cc.find("Canvas/Panel_Version").addComponent(Panel_Version_1.default);
        this.panel_Test = cc.find("Canvas/Panel_Test").addComponent(Panel_Test_1.default);
        this.initEvent(GameEvent_1.GameEvent.SendModel, this.sendModle);
        this.initEvent(GameEvent_1.GameEvent.SendCommand, this.sendCommand);
        this.initEvent(GameEvent_1.GameEvent.GetStation, this.changeStationSprite);
        // cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL)
        // cc.view.enableAutoFullScreen(true);
        AssetMng_1.default.startLoad();
        // console.log(this.mapItem);
        // console.log(fcc);
        fcc.configMgr
            .build();
        var updateTime = cc.sys.os == cc.sys.OS_IOS ? 500 : 100;
        fcc.sceneMgr.sceneDirection = fcc.type.SceneDirectionType.LANDSCAPE;
        fcc.sceneMgr
            .setDesignHeight(720)
            .setDesignWidth(1280)
            .updateSize(fcc.type.SceneStyleType.HORIZONTAL)
            .startListener(updateTime);
    };
    Controll.prototype.start = function () {
        this.panel_Version.setVersion(GameModle_1.default.version);
        this.sendModle(GameEvent_1.GameEvent.InitMap);
        this.EventEmit(GameEvent_1.GameEvent.CloseBufer);
        GameModle_1.default.gameState = GameState_1.GameState.Wait;
        GameModle_1.default.webPostMessage.connect();
        this.panel_Message.node.opacity = 255;
        this.panel_Door.reset();
        // this.mainInit()
    };
    Controll.prototype.sendModle = function (type) {
        switch (type) {
            case GameEvent_1.GameEvent.InitMap:
                this.EventEmit(type, this.panel_AniPath.TWPath);
                break;
            case GameEvent_1.GameEvent.BearSetModle:
            case GameEvent_1.GameEvent.SetModel:
                this.EventEmit(type, GameModle_1.default);
                break;
        }
        // this.EventEmit(type)
    };
    Controll.prototype.changeStationSprite = function (_number) {
        if (_number < 2 || _number > 19)
            return;
        var _class = GameModle_1.default.mapSprite.get(_number);
        if (_class.isGet)
            return;
        _class.mySprite.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Station_" + _number.toString());
        _class.getAction();
    };
    Controll.prototype.sendCommand = function (type) {
        var any = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            any[_i - 1] = arguments[_i];
        }
        this[type].apply(this, any);
    };
    /**
     * 流程
     */
    Controll.prototype.mainInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, AssetMng_1.default.checkState()];
                    case 1:
                        _a.sent();
                        this.panel_Version.node.active = false;
                        return [4 /*yield*/, this.panel_Door.openDoor()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.panel_Door.scaleAction()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.cameraControll.showAllView()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.cameraControll.moveToManCamera(false)
                            // GameModle.playData.level = 0
                            // GameModle.playData.trainTypeNumber = 0
                            // GameModle.playData.trainType = TrainType.Type0
                            // this.endChoosTrain()
                            // return
                        ];
                    case 5:
                        _a.sent();
                        // GameModle.playData.level = 0
                        // GameModle.playData.trainTypeNumber = 0
                        // GameModle.playData.trainType = TrainType.Type0
                        // this.endChoosTrain()
                        // return
                        return [4 /*yield*/, this.panel_Message.show()];
                    case 6:
                        // GameModle.playData.level = 0
                        // GameModle.playData.trainTypeNumber = 0
                        // GameModle.playData.trainType = TrainType.Type0
                        // this.endChoosTrain()
                        // return
                        _a.sent();
                        this.panel_Message.choose_Ticket.show();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.endChooseTicket = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                GameModle_1.default.qaLibrary = new QALibrary_1.default(GameModle_1.default.playData.level, 3);
                GameModle_1.default.chooseLibrary = new ChooseLibrary_1.default(GameModle_1.default.playData.level, GameModle_1.default.qaLibrary.qaLib_num);
                GameModle_1.default.answerLibrary = new AnswerLibrary_1.default(GameModle_1.default.playData.level, GameModle_1.default.qaLibrary.qaLib_num);
                GameModle_1.default.explainLibrary = new ExplainLibrary_1.default(GameModle_1.default.playData.level, GameModle_1.default.qaLibrary.qaLib_num);
                this.panel_Message.choose_Ticket.hide();
                this.panel_Message.choose_Train.initTrainSprite();
                this.panel_Message.choose_Train.show();
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.endChoosTrain = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new DelayTime_1.MyDelay().setDelay(2)];
                    case 1:
                        _a.sent();
                        this.panel_Man.setManSprite(AssetMng_1.default.data_SprtieAtlas.get(GameModle_1.default.playData.trainType));
                        this.panel_Man.resetOeg();
                        this.panel_Bear.init();
                        // await this.panel_Message.choose_Train.getTrainAciton()
                        this.panel_Message.choose_Train.hide();
                        return [4 /*yield*/, this.panel_Message.hide()];
                    case 2:
                        _a.sent();
                        this.showTeaching();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.showTeaching = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.panel_UI.show();
                this.panel_Teaching.show();
                this.panel_Teaching.info0.active = true;
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.endTeaching = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.panel_Teaching.hide();
                GameModle_1.default.gameState = GameState_1.GameState.Start;
                // this.panel_UI.station.chengeSprit()
                this.cameraControll.activeManCamera(true);
                this.cameraControll.activeMineCamera(false);
                this.panel_UI.props_Feature.setStart_Stop(true);
                this.panel_Man.manGO();
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.showVideo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.panel_Message.show()];
                    case 1:
                        _a.sent();
                        data = new postCmd();
                        switch (this.panel_Man.nowStation) {
                            case 1:
                                data.cmd = "OpenView";
                                data.viewType = 1;
                                GameModle_1.default.webPostMessage.send(data);
                                console.log("播放安全影片");
                                break;
                            case 2:
                                data.cmd = "OpenView";
                                data.viewType = 2;
                                data.level = GameModle_1.default.playData.level;
                                GameModle_1.default.webPostMessage.send(data);
                                console.log("播放廉政影片");
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.closeVideo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.panel_Message.hide()];
                    case 1:
                        _a.sent();
                        this.panel_UI.props_Feature.setStart_Stop(true);
                        this.panel_Man.manGO();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.showQA = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getQA, getChooese;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getQA = "";
                        getChooese = "";
                        getQA = GameModle_1.default.qaLibrary.qaLib_str[GameModle_1.default.qaIndex];
                        getChooese = GameModle_1.default.chooseLibrary.chooseLib[GameModle_1.default.qaIndex];
                        this.panel_Message.question.reset();
                        this.panel_Message.question.setQAInfo(getQA, GameModle_1.default.playData.level, GameModle_1.default.qaLibrary.qaLib_num[GameModle_1.default.qaIndex]);
                        this.panel_Message.question.setChoose(getChooese);
                        return [4 /*yield*/, this.panel_Message.show()];
                    case 1:
                        _a.sent();
                        this.panel_Message.question.show();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.showAgainQA = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.panel_Message.qaAnswer.hide();
                this.panel_Message.question.show();
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.endQA = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.panel_Message.question.hide();
                this.showAnswer();
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.showAnswer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getAnswer;
            return __generator(this, function (_a) {
                getAnswer = "";
                getAnswer = GameModle_1.default.answerLibrary.answerLib_str[GameModle_1.default.qaIndex].substring(0, 1);
                this.panel_Message.qaAnswer.reset();
                if (GameModle_1.default.chooseAnswer == getAnswer) {
                    this.panel_Message.qaAnswer.trueAnswer();
                }
                else
                    this.panel_Message.qaAnswer.falseAnswer();
                this.panel_Message.qaAnswer.show();
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.endAnswer = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.panel_Message.qaAnswer.hide();
                this.showGetProps();
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.showExplain = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.panel_Message.qaAnswer.hide();
                this.panel_Message.explain.setInfoStr(GameModle_1.default.explainLibrary.explainLib[GameModle_1.default.qaIndex]);
                GameModle_1.default.qaIndex++; //+兩個地方是因為玩家會有分支，因此在分支的末端加1Index
                this.panel_Message.explain.show();
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.endExplain = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.panel_Message.explain.hide();
                this.showGetProps();
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.showStationInfo = function (select) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (select == 5 || select == 11 || select == 15)
                            return [2 /*return*/];
                        if (this.panel_Man.manState != GameState_1.GameState.Wait)
                            this.panel_Man.manLineWait();
                        return [4 /*yield*/, this.panel_Message.show()];
                    case 1:
                        _a.sent();
                        this.panel_Message.stationInfo.setTrainName(TrainInfoLibrary_1.default.getName(select));
                        this.panel_Message.stationInfo.setSprite(AssetMng_1.default.data_SprtieAtlas.get("StationInfo_" + select.toString()));
                        this.panel_Message.stationInfo.setInfo(TrainInfoLibrary_1.default.getInfo(select));
                        this.panel_Message.stationInfo.show();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.endTationInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.panel_Message.stationInfo.hide();
                        return [4 /*yield*/, this.panel_Message.hide()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.showGetProps = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.panel_Message.getProps.setData(PropsLibrary_1.default.lib.get(this.panel_Man.nowStation), AssetMng_1.default.data_SprtieAtlas.get("GetProps_" + this.panel_Man.nowStation.toString()));
                this.panel_Message.getProps.show();
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.endGetProps = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.panel_Message.getProps.hide();
                        return [4 /*yield*/, this.panel_Message.hide()];
                    case 1:
                        _a.sent();
                        GameModle_1.default.qaIndex++; //+兩個地方是因為玩家會有分支，因此在分支的末端加1Index
                        this.panel_UI.props_Feature.setStart_Stop(true);
                        this.panel_Man.manGO();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.showEndGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.panel_Message.endGame.playBearSprite(GameModle_1.default.playData.trainTypeNumber);
                        return [4 /*yield*/, this.panel_Message.show()];
                    case 1:
                        _a.sent();
                        this.panel_Message.endGame.show();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.closeEndGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.panel_Message.endGame.hide();
                        return [4 /*yield*/, this.panel_Message.hide()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.againGame = function () {
        this.closeEndGame();
        cc.director.loadScene("GameSence");
    };
    Controll.prototype.goLottery = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.closeEndGame();
                        return [4 /*yield*/, this.cameraControll.showAllView()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.panel_Door.backScaleAction()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.panel_Door.closeDoor()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.doorAgainGame = function () {
        cc.director.loadScene("GameSence");
    };
    Controll.prototype.menGo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.cameraControll.cameraState != CameraState_1.CameraState.Men)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cameraControll.moveToManCamera()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.panel_Man.manGO();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.manWait = function () {
        this.panel_Man.manWait();
    };
    Controll.prototype.manLineWait = function () {
        this.panel_Man.manLineWait();
    };
    Controll.prototype.moveTarget = function (select) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.panel_Man.manState != GameState_1.GameState.Wait) {
                            this.panel_UI.props_Feature.setStart_Stop(false);
                            this.panel_Man.manLineWait();
                        }
                        this.panel_Message.stationInfo.reset();
                        this.cameraControll.activeManCamera(false);
                        this.cameraControll.activeMineCamera(true);
                        return [4 /*yield*/, this.cameraControll.moveToStation(GameModle_1.default.mapItem.get(select).node)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.updataUIStart = function (setBoolea) {
        this.panel_UI.props_Feature.setStart_Stop(setBoolea);
    };
    Controll = __decorate([
        ccclass
    ], Controll);
    return Controll;
}(ComponentBase_1.default));
exports.default = Controll;
var postCmd = /** @class */ (function () {
    function postCmd() {
    }
    return postCmd;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lQ29udHJvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLHlEQUFvRDtBQUNwRCxtREFBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUE4QztBQUM5QyxpREFBNEM7QUFDNUMsK0NBQTBDO0FBQzFDLDhDQUE2QztBQUM3Qyx5Q0FBb0M7QUFDcEMsZ0RBQTJDO0FBQzNDLCtEQUEwRDtBQUMxRCwyREFBc0Q7QUFFdEQsaURBQTRDO0FBQzVDLDhDQUE2QztBQUM3QyxpREFBNEM7QUFDNUMseURBQW9EO0FBQ3BELHlEQUFvRDtBQUNwRCwyREFBc0Q7QUFDdEQsNERBQXVEO0FBQ3ZELHVEQUFrRDtBQUNsRCxrREFBaUQ7QUFDakQsdURBQWtEO0FBQ2xELGlEQUE0QztBQUU1Qyw4Q0FBMkM7QUFDM0MsbURBQThDO0FBQzlDLHlEQUFvRDtBQUU5QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBYTtJQUFuRDs7SUErU0EsQ0FBQztJQS9SRyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGNBQWMs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LElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBOVNnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBK1M1QjtJQUFELGVBQUM7Q0EvU0QsQUErU0MsQ0EvU3FDLHVCQUFhLEdBK1NsRDtrQkEvU29CLFFBQVE7QUFpVDdCO0lBQUE7SUFJQSxDQUFDO0lBQUQsY0FBQztBQUFELENBSkEsQUFJQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0TW5nIGZyb20gXCIuL0Fzc2V0L0Fzc2V0TW5nXCI7XHJcbmltcG9ydCBDYW1lcmFDb250cm9sbCBmcm9tIFwiLi9DbGFzcy9DYW1lcmFDb250cm9sbFwiO1xyXG5pbXBvcnQgUGFuZWxfTWFuIGZyb20gXCIuL0NsYXNzL01hbS9QYW5lbF9NYW5cIjtcclxuaW1wb3J0IFBhbmVsX0FuaVBhdGggZnJvbSBcIi4vQ2xhc3MvUGFuZWxfQW5pUGF0aFwiO1xyXG5pbXBvcnQgUGFuZWxfQ2xvdWQgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfQ2xvdWRcIjtcclxuaW1wb3J0IFBhbmVsX0Rvb3IgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfRG9vclwiO1xyXG5pbXBvcnQgUGFuZWxfTWFwIGZyb20gXCIuL0NsYXNzL1BhbmVsX01hcFwiO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tIFwiLi9FbnVtL0dhbWVFdmVudFwiO1xyXG5pbXBvcnQgR2FtZU1vZGxlIGZyb20gXCIuL0dhbWVNb2RsZVwiO1xyXG5pbXBvcnQgUGFuZWxfVUkgZnJvbSBcIi4vQ2xhc3MvVUkvUGFuZWxfVUlcIjtcclxuaW1wb3J0IFBhbmVsX01lc3NhZ2UgZnJvbSBcIi4vQ2xhc3MvTWVzc2FnZS9QYW5lbF9NZXNzYWdlXCI7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlXCI7XHJcbmltcG9ydCB7IENvbW1hbW5kIH0gZnJvbSBcIi4vRW51bS9Db21tYWRcIjtcclxuaW1wb3J0IFBhbmVsX0JlYXIgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfQmVhclwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi9FbnVtL0dhbWVTdGF0ZVwiO1xyXG5pbXBvcnQgUUFMaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvUUFMaWJyYXJ5XCI7XHJcbmltcG9ydCBDaG9vc2VMaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvQ2hvb3NlTGlicmFyeVwiO1xyXG5pbXBvcnQgQW5zd2VyTGlicmFyeSBmcm9tIFwiLi9EYXRhL1FBL0Fuc3dlckxpYnJhcnlcIjtcclxuaW1wb3J0IEV4cGxhaW5MaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvRXhwbGFpbkxpYnJhcnlcIjtcclxuaW1wb3J0IFRyYWluSW5mb0xpYnJhcnkgZnJvbSBcIi4vRGF0YS9UcmFpbkluZm9MaWJyYXJ5XCI7XHJcbmltcG9ydCBQcm9wc0xpYnJhcnkgZnJvbSBcIi4vRGF0YS9RQS9Qcm9wc0xpYnJhcnlcIjtcclxuaW1wb3J0IHsgQ2FtZXJhU3RhdGUgfSBmcm9tIFwiLi9FbnVtL0NhbWVyYVN0YXRlXCI7XHJcbmltcG9ydCBQYW5lbF9WZXJzaW9uIGZyb20gXCIuL0NsYXNzL1BhbmVsX1ZlcnNpb25cIjtcclxuaW1wb3J0IFBhbmVsX1Rlc3QgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfVGVzdFwiO1xyXG5pbXBvcnQgeyBUcmFpblR5cGUgfSBmcm9tIFwiLi9FbnVtL1RyYWluVHlwZVwiO1xyXG5pbXBvcnQgeyBNeURlbGF5IH0gZnJvbSBcIi4vRGF0YS9EZWxheVRpbWVcIjtcclxuaW1wb3J0IFBhbmVsX0J1ZmVyIGZyb20gXCIuL0NsYXNzL1BhbmVsX0J1ZmVyXCI7XHJcbmltcG9ydCBQYW5lbF9UZWFjaGluZyBmcm9tIFwiLi9DbGFzcy9QYW5lbF9UZWFjaGluZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcblxyXG4gICAgcGFuZWxfQW5pUGF0aDogUGFuZWxfQW5pUGF0aDtcclxuICAgIHBhbmVsX01hcDogUGFuZWxfTWFwO1xyXG4gICAgcGFuZWxfTWFuOiBQYW5lbF9NYW47XHJcbiAgICBjYW1lcmFDb250cm9sbDogQ2FtZXJhQ29udHJvbGw7XHJcbiAgICBwYW5lbF9Eb29yOiBQYW5lbF9Eb29yO1xyXG4gICAgcGFuZWxfQ2xvdWQ6IFBhbmVsX0Nsb3VkO1xyXG4gICAgcGFuZWxfVUk6IFBhbmVsX1VJO1xyXG4gICAgcGFuZWxfTWVzc2FnZTogUGFuZWxfTWVzc2FnZVxyXG4gICAgcGFuZWxfQmVhcjogUGFuZWxfQmVhclxyXG4gICAgcGFuZWxfVmVyc2lvbjogUGFuZWxfVmVyc2lvblxyXG4gICAgcGFuZWxfVGVzdDogUGFuZWxfVGVzdFxyXG4gICAgcGFuZWxfQnVmZXI6IFBhbmVsX0J1ZmVyXHJcbiAgICBwYW5lbF9UZWFjaGluZzogUGFuZWxfVGVhY2hpbmdcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9BbmlQYXRoID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9BbmlQYXRoXCIpLmFkZENvbXBvbmVudChQYW5lbF9BbmlQYXRoKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01hcCA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfTWFwXCIpLmFkZENvbXBvbmVudChQYW5lbF9NYXApO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9NYW5cIikuYWRkQ29tcG9uZW50KFBhbmVsX01hbik7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbCA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbkNhbWVyYVwiKS5hZGRDb21wb25lbnQoQ2FtZXJhQ29udHJvbGwpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfRG9vciA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfRG9vclwiKS5hZGRDb21wb25lbnQoUGFuZWxfRG9vcik7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9DbG91ZCA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfQ2xvdWRcIikuYWRkQ29tcG9uZW50KFBhbmVsX0Nsb3VkKTtcclxuICAgICAgICB0aGlzLnBhbmVsX1VJID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9VSVwiKS5hZGRDb21wb25lbnQoUGFuZWxfVUkpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfQmVhciA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfQmVhclwiKS5hZGRDb21wb25lbnQoUGFuZWxfQmVhcik7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9CdWZlciA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfQnVmZXJcIikuYWRkQ29tcG9uZW50KFBhbmVsX0J1ZmVyKTtcclxuICAgICAgICB0aGlzLnBhbmVsX1RlYWNoaW5nID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9UZWFjaGluZ1wiKS5hZGRDb21wb25lbnQoUGFuZWxfVGVhY2hpbmcpO1xyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UgPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX01lc3NhZ2VcIikuYWRkQ29tcG9uZW50KFBhbmVsX01lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfVmVyc2lvbiA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfVmVyc2lvblwiKS5hZGRDb21wb25lbnQoUGFuZWxfVmVyc2lvbik7XHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfVGVzdCA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfVGVzdFwiKS5hZGRDb21wb25lbnQoUGFuZWxfVGVzdCk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5TZW5kTW9kZWwsIHRoaXMuc2VuZE1vZGxlKVxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgdGhpcy5zZW5kQ29tbWFuZClcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuR2V0U3RhdGlvbiwgdGhpcy5jaGFuZ2VTdGF0aW9uU3ByaXRlKVxyXG5cclxuICAgICAgICAvLyBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKDcyMCwgMTI4MCwgY2MuUmVzb2x1dGlvblBvbGljeS5TSE9XX0FMTClcclxuICAgICAgICAvLyBjYy52aWV3LmVuYWJsZUF1dG9GdWxsU2NyZWVuKHRydWUpO1xyXG5cclxuICAgICAgICBBc3NldE1uZy5zdGFydExvYWQoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1hcEl0ZW0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZjYyk7XHJcbiAgICAgICAgZmNjLmNvbmZpZ01nclxyXG4gICAgICAgICAgICAuYnVpbGQoKVxyXG4gICAgICAgIGxldCB1cGRhdGVUaW1lID0gY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MgPyA1MDAgOiAxMDBcclxuICAgICAgICBmY2Muc2NlbmVNZ3Iuc2NlbmVEaXJlY3Rpb24gPSBmY2MudHlwZS5TY2VuZURpcmVjdGlvblR5cGUuTEFORFNDQVBFXHJcbiAgICAgICAgZmNjLnNjZW5lTWdyXHJcbiAgICAgICAgICAgIC5zZXREZXNpZ25IZWlnaHQoNzIwKVxyXG4gICAgICAgICAgICAuc2V0RGVzaWduV2lkdGgoMTI4MClcclxuICAgICAgICAgICAgLnVwZGF0ZVNpemUoZmNjLnR5cGUuU2NlbmVTdHlsZVR5cGUuSE9SSVpPTlRBTClcclxuICAgICAgICAgICAgLnN0YXJ0TGlzdGVuZXIodXBkYXRlVGltZSlcclxuXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX1ZlcnNpb24uc2V0VmVyc2lvbihHYW1lTW9kbGUudmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5zZW5kTW9kbGUoR2FtZUV2ZW50LkluaXRNYXApO1xyXG4gICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5DbG9zZUJ1ZmVyKVxyXG4gICAgICAgIEdhbWVNb2RsZS5nYW1lU3RhdGUgPSBHYW1lU3RhdGUuV2FpdFxyXG4gICAgICAgIEdhbWVNb2RsZS53ZWJQb3N0TWVzc2FnZS5jb25uZWN0KClcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uubm9kZS5vcGFjaXR5ID0gMjU1XHJcbiAgICAgICAgdGhpcy5wYW5lbF9Eb29yLnJlc2V0KClcclxuXHJcbiAgICAgICAgLy8gdGhpcy5tYWluSW5pdCgpXHJcbiAgICB9XHJcbiAgICBzZW5kTW9kbGUodHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUV2ZW50LkluaXRNYXA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50RW1pdCh0eXBlLCB0aGlzLnBhbmVsX0FuaVBhdGguVFdQYXRoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVFdmVudC5CZWFyU2V0TW9kbGU6XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUV2ZW50LlNldE1vZGVsOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQodHlwZSwgR2FtZU1vZGxlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLkV2ZW50RW1pdCh0eXBlKVxyXG4gICAgfVxyXG4gICAgY2hhbmdlU3RhdGlvblNwcml0ZShfbnVtYmVyOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoX251bWJlciA8IDIgfHwgX251bWJlciA+IDE5KSByZXR1cm47XHJcbiAgICAgICAgbGV0IF9jbGFzcyA9IEdhbWVNb2RsZS5tYXBTcHJpdGUuZ2V0KF9udW1iZXIpXHJcbiAgICAgICAgaWYgKF9jbGFzcy5pc0dldCkgcmV0dXJuO1xyXG4gICAgICAgIF9jbGFzcy5teVNwcml0ZS5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiU3RhdGlvbl9cIiArIF9udW1iZXIudG9TdHJpbmcoKSlcclxuICAgICAgICBfY2xhc3MuZ2V0QWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBzZW5kQ29tbWFuZCh0eXBlOiBDb21tYW1uZCwgLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXNbdHlwZV0oLi4uYW55KVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmtYHnqItcclxuICAgICAqL1xyXG4gICAgYXN5bmMgbWFpbkluaXQoKSB7XHJcblxyXG4gICAgICAgIGF3YWl0IEFzc2V0TW5nLmNoZWNrU3RhdGUoKTtcclxuICAgICAgICB0aGlzLnBhbmVsX1ZlcnNpb24ubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfRG9vci5vcGVuRG9vcigpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9Eb29yLnNjYWxlQWN0aW9uKClcclxuICAgICAgICBhd2FpdCB0aGlzLmNhbWVyYUNvbnRyb2xsLnNob3dBbGxWaWV3KClcclxuICAgICAgICBhd2FpdCB0aGlzLmNhbWVyYUNvbnRyb2xsLm1vdmVUb01hbkNhbWVyYShmYWxzZSlcclxuXHJcbiAgICAgICAgLy8gR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsID0gMFxyXG4gICAgICAgIC8vIEdhbWVNb2RsZS5wbGF5RGF0YS50cmFpblR5cGVOdW1iZXIgPSAwXHJcbiAgICAgICAgLy8gR2FtZU1vZGxlLnBsYXlEYXRhLnRyYWluVHlwZSA9IFRyYWluVHlwZS5UeXBlMFxyXG4gICAgICAgIC8vIHRoaXMuZW5kQ2hvb3NUcmFpbigpXHJcbiAgICAgICAgLy8gcmV0dXJuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLnNob3coKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5jaG9vc2VfVGlja2V0LnNob3coKVxyXG5cclxuICAgICAgICAvL3Rlc3RcclxuICAgICAgICAvLyB0aGlzLnBhbmVsX01hbi5ub3dTdGF0aW9uID0gMTVcclxuICAgICAgICAvLyBHYW1lTW9kbGUucGxheURhdGEubGV2ZWwgPSAxXHJcbiAgICAgICAgLy8gdGhpcy5lbmRDaG9vc2VUaWNrZXQoKVxyXG5cclxuICAgICAgICAvLyB0aGlzLnNob3dRQSgpXHJcbiAgICAgICAgLy8gdGhpcy5zaG93R2V0UHJvcHMoKVxyXG4gICAgICAgIC8vIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zaG93KClcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZENob29zZVRpY2tldCgpIHtcclxuICAgICAgICBHYW1lTW9kbGUucWFMaWJyYXJ5ID0gbmV3IFFBTGlicmFyeShHYW1lTW9kbGUucGxheURhdGEubGV2ZWwsIDMpO1xyXG4gICAgICAgIEdhbWVNb2RsZS5jaG9vc2VMaWJyYXJ5ID0gbmV3IENob29zZUxpYnJhcnkoR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsLCBHYW1lTW9kbGUucWFMaWJyYXJ5LnFhTGliX251bSlcclxuICAgICAgICBHYW1lTW9kbGUuYW5zd2VyTGlicmFyeSA9IG5ldyBBbnN3ZXJMaWJyYXJ5KEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW0pXHJcbiAgICAgICAgR2FtZU1vZGxlLmV4cGxhaW5MaWJyYXJ5ID0gbmV3IEV4cGxhaW5MaWJyYXJ5KEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW0pXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmNob29zZV9UaWNrZXQuaGlkZSgpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmNob29zZV9UcmFpbi5pbml0VHJhaW5TcHJpdGUoKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5jaG9vc2VfVHJhaW4uc2hvdygpXHJcblxyXG4gICAgfVxyXG4gICAgYXN5bmMgZW5kQ2hvb3NUcmFpbigpIHtcclxuICAgICAgICBhd2FpdCBuZXcgTXlEZWxheSgpLnNldERlbGF5KDIpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4uc2V0TWFuU3ByaXRlKEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KEdhbWVNb2RsZS5wbGF5RGF0YS50cmFpblR5cGUpKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLnJlc2V0T2VnKClcclxuICAgICAgICB0aGlzLnBhbmVsX0JlYXIuaW5pdCgpXHJcbiAgICAgICAgLy8gYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLmNob29zZV9UcmFpbi5nZXRUcmFpbkFjaXRvbigpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmNob29zZV9UcmFpbi5oaWRlKClcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2UuaGlkZSgpXHJcbiAgICAgICAgdGhpcy5zaG93VGVhY2hpbmcoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgc2hvd1RlYWNoaW5nKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfVUkuc2hvdygpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9UZWFjaGluZy5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9UZWFjaGluZy5pbmZvMC5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBhc3luYyBlbmRUZWFjaGluZygpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX1RlYWNoaW5nLmhpZGUoKTtcclxuICAgICAgICBHYW1lTW9kbGUuZ2FtZVN0YXRlID0gR2FtZVN0YXRlLlN0YXJ0O1xyXG4gICAgICAgIC8vIHRoaXMucGFuZWxfVUkuc3RhdGlvbi5jaGVuZ2VTcHJpdCgpXHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGwuYWN0aXZlTWFuQ2FtZXJhKHRydWUpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGwuYWN0aXZlTWluZUNhbWVyYShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3AodHJ1ZSlcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5HTygpXHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93VmlkZW8oKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLnNob3coKTtcclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBwb3N0Q21kKClcclxuICAgICAgICBzd2l0Y2ggKHRoaXMucGFuZWxfTWFuLm5vd1N0YXRpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgZGF0YS5jbWQgPSBcIk9wZW5WaWV3XCJcclxuICAgICAgICAgICAgICAgIGRhdGEudmlld1R5cGUgPSAxXHJcbiAgICAgICAgICAgICAgICBHYW1lTW9kbGUud2ViUG9zdE1lc3NhZ2Uuc2VuZChkYXRhKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7lronlhajlvbHniYdcIik7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBkYXRhLmNtZCA9IFwiT3BlblZpZXdcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS52aWV3VHlwZSA9IDJcclxuICAgICAgICAgICAgICAgIGRhdGEubGV2ZWwgPSBHYW1lTW9kbGUucGxheURhdGEubGV2ZWw7XHJcbiAgICAgICAgICAgICAgICBHYW1lTW9kbGUud2ViUG9zdE1lc3NhZ2Uuc2VuZChkYXRhKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7lu4nmlL/lvbHniYdcIik7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5jbG9zZVZpZGVvKCk7XHJcbiAgICAgICAgLy8gd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh7fSwgXCIqXCIpXHJcbiAgICB9XHJcbiAgICBhc3luYyBjbG9zZVZpZGVvKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3AodHJ1ZSlcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5HTygpXHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93UUEoKSB7XHJcbiAgICAgICAgbGV0IGdldFFBID0gXCJcIlxyXG4gICAgICAgIGxldCBnZXRDaG9vZXNlID0gXCJcIlxyXG4gICAgICAgIGdldFFBID0gR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9zdHJbR2FtZU1vZGxlLnFhSW5kZXhdXHJcbiAgICAgICAgZ2V0Q2hvb2VzZSA9IEdhbWVNb2RsZS5jaG9vc2VMaWJyYXJ5LmNob29zZUxpYltHYW1lTW9kbGUucWFJbmRleF1cclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucXVlc3Rpb24ucmVzZXQoKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zZXRRQUluZm8oZ2V0UUEsIEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW1bR2FtZU1vZGxlLnFhSW5kZXhdKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zZXRDaG9vc2UoZ2V0Q2hvb2VzZSlcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2Uuc2hvdygpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93QWdhaW5RQSgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucWFBbnN3ZXIuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBlbmRRQSgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucXVlc3Rpb24uaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuc2hvd0Fuc3dlcigpXHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93QW5zd2VyKCkge1xyXG4gICAgICAgIGxldCBnZXRBbnN3ZXIgPSBcIlwiXHJcbiAgICAgICAgZ2V0QW5zd2VyID0gR2FtZU1vZGxlLmFuc3dlckxpYnJhcnkuYW5zd2VyTGliX3N0cltHYW1lTW9kbGUucWFJbmRleF0uc3Vic3RyaW5nKDAsIDEpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnFhQW5zd2VyLnJlc2V0KClcclxuICAgICAgICBpZiAoR2FtZU1vZGxlLmNob29zZUFuc3dlciA9PSBnZXRBbnN3ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnFhQW5zd2VyLnRydWVBbnN3ZXIoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xYUFuc3dlci5mYWxzZUFuc3dlcigpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnFhQW5zd2VyLnNob3coKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZEFuc3dlcigpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucWFBbnN3ZXIuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuc2hvd0dldFByb3BzKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93RXhwbGFpbigpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucWFBbnN3ZXIuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5leHBsYWluLnNldEluZm9TdHIoR2FtZU1vZGxlLmV4cGxhaW5MaWJyYXJ5LmV4cGxhaW5MaWJbR2FtZU1vZGxlLnFhSW5kZXhdKTtcclxuICAgICAgICBHYW1lTW9kbGUucWFJbmRleCsrLy8r5YWp5YCL5Zyw5pa55piv5Zug54K6546p5a625pyD5pyJ5YiG5pSv77yM5Zug5q2k5Zyo5YiG5pSv55qE5pyr56uv5YqgMUluZGV4XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmV4cGxhaW4uc2hvdygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZW5kRXhwbGFpbigpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZXhwbGFpbi5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5zaG93R2V0UHJvcHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzaG93U3RhdGlvbkluZm8oc2VsZWN0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoc2VsZWN0ID09IDUgfHwgc2VsZWN0ID09IDExIHx8IHNlbGVjdCA9PSAxNSkgcmV0dXJuXHJcbiAgICAgICAgaWYgKHRoaXMucGFuZWxfTWFuLm1hblN0YXRlICE9IEdhbWVTdGF0ZS5XYWl0KVxyXG4gICAgICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5MaW5lV2FpdCgpXHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnN0YXRpb25JbmZvLnNldFRyYWluTmFtZShUcmFpbkluZm9MaWJyYXJ5LmdldE5hbWUoc2VsZWN0KSlcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uuc3RhdGlvbkluZm8uc2V0U3ByaXRlKEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiU3RhdGlvbkluZm9fXCIgKyBzZWxlY3QudG9TdHJpbmcoKSkpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnN0YXRpb25JbmZvLnNldEluZm8oVHJhaW5JbmZvTGlicmFyeS5nZXRJbmZvKHNlbGVjdCkpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnN0YXRpb25JbmZvLnNob3coKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZFRhdGlvbkluZm8oKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnN0YXRpb25JbmZvLmhpZGUoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2UuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNob3dHZXRQcm9wcygpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZ2V0UHJvcHMuc2V0RGF0YShcclxuICAgICAgICAgICAgUHJvcHNMaWJyYXJ5LmxpYi5nZXQodGhpcy5wYW5lbF9NYW4ubm93U3RhdGlvbiksXHJcbiAgICAgICAgICAgIEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiR2V0UHJvcHNfXCIgKyB0aGlzLnBhbmVsX01hbi5ub3dTdGF0aW9uLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5nZXRQcm9wcy5zaG93KClcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZEdldFByb3BzKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5nZXRQcm9wcy5oaWRlKClcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2UuaGlkZSgpO1xyXG4gICAgICAgIEdhbWVNb2RsZS5xYUluZGV4KysvLyvlhanlgIvlnLDmlrnmmK/lm6DngrrnjqnlrrbmnIPmnInliIbmlK/vvIzlm6DmraTlnKjliIbmlK/nmoTmnKvnq6/liqAxSW5kZXhcclxuICAgICAgICB0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuc2V0U3RhcnRfU3RvcCh0cnVlKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkdPKClcclxuICAgIH1cclxuICAgIGFzeW5jIHNob3dFbmRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5lbmRHYW1lLnBsYXlCZWFyU3ByaXRlKEdhbWVNb2RsZS5wbGF5RGF0YS50cmFpblR5cGVOdW1iZXIpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmVuZEdhbWUuc2hvdygpO1xyXG5cclxuICAgIH1cclxuICAgIGFzeW5jIGNsb3NlRW5kR2FtZSgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZW5kR2FtZS5oaWRlKClcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2UuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgYWdhaW5HYW1lKCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VFbmRHYW1lKClcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lU2VuY2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ29Mb3R0ZXJ5KCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VFbmRHYW1lKClcclxuICAgICAgICBhd2FpdCB0aGlzLmNhbWVyYUNvbnRyb2xsLnNob3dBbGxWaWV3KClcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX0Rvb3IuYmFja1NjYWxlQWN0aW9uKClcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX0Rvb3IuY2xvc2VEb29yKClcclxuICAgIH1cclxuICAgIGRvb3JBZ2FpbkdhbWUoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVNlbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgbWVuR28oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FtZXJhQ29udHJvbGwuY2FtZXJhU3RhdGUgIT0gQ2FtZXJhU3RhdGUuTWVuKVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNhbWVyYUNvbnRyb2xsLm1vdmVUb01hbkNhbWVyYSgpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuR08oKVxyXG4gICAgfVxyXG4gICAgbWFuV2FpdCgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5XYWl0KClcclxuICAgIH1cclxuICAgIG1hbkxpbmVXYWl0KCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkxpbmVXYWl0KClcclxuICAgIH1cclxuICAgIGFzeW5jIG1vdmVUYXJnZXQoc2VsZWN0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5wYW5lbF9NYW4ubWFuU3RhdGUgIT0gR2FtZVN0YXRlLldhaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3AoZmFsc2UpXHJcbiAgICAgICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkxpbmVXYWl0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5zdGF0aW9uSW5mby5yZXNldCgpXHJcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbC5hY3RpdmVNYW5DYW1lcmEoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGwuYWN0aXZlTWluZUNhbWVyYSh0cnVlKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmNhbWVyYUNvbnRyb2xsLm1vdmVUb1N0YXRpb24oR2FtZU1vZGxlLm1hcEl0ZW0uZ2V0KHNlbGVjdCkubm9kZSlcclxuXHJcbiAgICB9XHJcbiAgICB1cGRhdGFVSVN0YXJ0KHNldEJvb2xlYTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMucGFuZWxfVUkucHJvcHNfRmVhdHVyZS5zZXRTdGFydF9TdG9wKHNldEJvb2xlYSlcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgcG9zdENtZCB7XHJcbiAgICBjbWQ6IHN0cmluZ1xyXG4gICAgdmlld1R5cGU6IG51bWJlclxyXG4gICAgbGV2ZWw6IG51bWJlclxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/MapItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '40417rdjU1F17ChzZ3kp9wn', 'MapItem');
// Script/Item/MapItem.ts

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
var MapItem = /** @class */ (function (_super) {
    __extends(MapItem, _super);
    function MapItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MapItem.prototype.setSprite = function (_spriteframe) {
        this.node.getComponent(cc.Sprite).spriteFrame = _spriteframe;
    };
    Object.defineProperty(MapItem.prototype, "myNumber", {
        get: function () {
            return this._myNumber;
        },
        set: function (v) {
            this._myNumber = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapItem.prototype, "myType", {
        get: function () {
            return this._myType;
        },
        set: function (v) {
            this._myType = v;
        },
        enumerable: false,
        configurable: true
    });
    return MapItem;
}(ComponentBase_1.default));
exports.default = MapItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxNYXBJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUF1RDtBQUd2RDtJQUFxQywyQkFBYTtJQUFsRDs7SUEyQkEsQ0FBQztJQXRCRywyQkFBUyxHQUFULFVBQVUsWUFBNEI7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7SUFFakUsQ0FBQztJQUdELHNCQUFXLDZCQUFRO2FBSW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3pCLENBQUM7YUFORCxVQUFvQixDQUFTO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBTUQsc0JBQVcsMkJBQU07YUFJakI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDdkIsQ0FBQzthQU5ELFVBQWtCLENBQWM7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFNTCxjQUFDO0FBQUQsQ0EzQkEsQUEyQkMsQ0EzQm9DLHVCQUFhLEdBMkJqRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZVwiO1xyXG5pbXBvcnQgeyBTdGF0aW9uVHlwZSB9IGZyb20gXCIuLi9FbnVtL1N0YXRpb25UeXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBJdGVtIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICBfbXlOdW1iZXI6IG51bWJlcjtcclxuICAgIF9teVR5cGU6IFN0YXRpb25UeXBlO1xyXG5cclxuXHJcbiAgICBzZXRTcHJpdGUoX3Nwcml0ZWZyYW1lOiBjYy5TcHJpdGVGcmFtZSkge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IF9zcHJpdGVmcmFtZTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzZXQgbXlOdW1iZXIodjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbXlOdW1iZXIgPSB2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbXlOdW1iZXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbXlOdW1iZXJcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG15VHlwZSh2OiBTdGF0aW9uVHlwZSkge1xyXG4gICAgICAgIHRoaXMuX215VHlwZSA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBteVR5cGUoKTogU3RhdGlvblR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9teVR5cGVcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enum/TypeClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '968d5lpwtBAz7MSyfkfu7Cm', 'TypeClass');
// Script/Enum/TypeClass.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeClass = void 0;
var TypeClass;
(function (TypeClass) {
    /**ManClass
     *
     */
    TypeClass["MAN"] = "CMan";
    /**MapItemClass
     *
     */
    TypeClass["MapItem"] = "CMapItem";
})(TypeClass = exports.TypeClass || (exports.TypeClass = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbnVtXFxUeXBlQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxTQVNYO0FBVEQsV0FBWSxTQUFTO0lBQ2pCOztPQUVHO0lBQ0gseUJBQVksQ0FBQTtJQUNaOztPQUVHO0lBQ0gsaUNBQW9CLENBQUE7QUFDeEIsQ0FBQyxFQVRXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBU3BCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gVHlwZUNsYXNzIHtcclxuICAgIC8qKk1hbkNsYXNzXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgTUFOID0gXCJDTWFuXCIsXHJcbiAgICAvKipNYXBJdGVtQ2xhc3NcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBNYXBJdGVtID0gXCJDTWFwSXRlbVwiLFxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Asset/MusicAsset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '241e5lWrXhHF7tanFKH5Dgn', 'MusicAsset');
// Script/Asset/MusicAsset.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MusicAsset = /** @class */ (function () {
    function MusicAsset() {
        this.typePath = "Music";
        this.filePath = [];
    }
    MusicAsset.prototype.loadAsset = function (_Asset) {
        var _this = this;
        this.checkAssetState = false;
        cc.resources.loadDir(this.typePath, cc.AudioClip, function (err, data) {
            data.forEach(function (_animationClip) {
                _Asset.set(_animationClip.name, _animationClip);
            });
            _this.checkAssetState = true;
        });
        return this;
    };
    return MusicAsset;
}());
exports.default = new MusicAsset();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBc3NldFxcTXVzaWNBc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQUE7UUFHSSxhQUFRLEdBQVcsT0FBTyxDQUFDO1FBQzNCLGFBQVEsR0FBYSxFQUVwQixDQUFDO0lBV04sQ0FBQztJQVZHLDhCQUFTLEdBQVQsVUFBVSxNQUF3QjtRQUFsQyxpQkFTQztRQVJHLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFBO1FBQzVCLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBRSxJQUF5QjtZQUM3RSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsY0FBYztnQkFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFBO1lBQ25ELENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFDTCxpQkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFDRCxrQkFBZSxJQUFJLFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElBc3NldCBmcm9tIFwiLi4vSW50ZXJmYWNlL0lBc3NldFwiO1xyXG5cclxuY2xhc3MgTXVzaWNBc3NldCBpbXBsZW1lbnRzIElBc3NldCB7XHJcblxyXG4gICAgY2hlY2tBc3NldFN0YXRlOiBib29sZWFuO1xyXG4gICAgdHlwZVBhdGg6IHN0cmluZyA9IFwiTXVzaWNcIjtcclxuICAgIGZpbGVQYXRoOiBzdHJpbmdbXSA9IFtcclxuXHJcbiAgICBdO1xyXG4gICAgbG9hZEFzc2V0KF9Bc3NldDogTWFwPHN0cmluZywgYW55Pikge1xyXG4gICAgICAgIHRoaXMuY2hlY2tBc3NldFN0YXRlID0gZmFsc2VcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZERpcih0aGlzLnR5cGVQYXRoLCBjYy5BdWRpb0NsaXAsIChlcnIsIGRhdGE6IEFycmF5PGNjLkF1ZGlvQ2xpcD4pID0+IHtcclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKF9hbmltYXRpb25DbGlwID0+IHtcclxuICAgICAgICAgICAgICAgIF9Bc3NldC5zZXQoX2FuaW1hdGlvbkNsaXAubmFtZSwgX2FuaW1hdGlvbkNsaXApXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQXNzZXRTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBNdXNpY0Fzc2V0KCk7Il19
//------QC-SOURCE-SPLIT------
