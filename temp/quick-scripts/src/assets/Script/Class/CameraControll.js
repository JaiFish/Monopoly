"use strict";
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