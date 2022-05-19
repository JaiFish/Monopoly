"use strict";
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