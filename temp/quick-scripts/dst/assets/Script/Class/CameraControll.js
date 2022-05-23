
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
    CameraControll.prototype.moveToManCamera = function (_speed, isJump) {
        if (_speed === void 0) { _speed = this.moveSpeed; }
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
                            .to(_speed, { position: manePos })
                            .call(function () {
                            _this.cameraState = CameraState_1.CameraState.Men;
                            _this.activeManCamera(true);
                            _this.activeMineCamera(false);
                            resolve();
                        })
                            .start();
                        cc.tween(_this.mineCamera)
                            .to(_speed, { zoomRatio: _this.manZoomRatio })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcQ2FtZXJhQ29udHJvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBQ3hDLCtDQUE4QztBQUM5Qyw0REFBdUQ7QUFDdkQsMENBQXFDO0FBQ3JDLG1EQUFrRDtBQUVsRDtJQUE0QyxrQ0FBYTtJQUF6RDtRQUFBLHFFQXNHQztRQW5HRyxrQkFBWSxHQUFXLElBQUksQ0FBQztRQUM1QixzQkFBZ0IsR0FBVyxJQUFJLENBQUM7UUFDaEMsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBRTdCLGVBQVMsR0FBVyxDQUFDLENBQUM7O0lBK0YxQixDQUFDO0lBM0ZhLCtCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNuRixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQTtRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FB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LEtBQUssRUFBRSxDQUFBO29CQUNoQixDQUFDLENBQUMsRUFBQTs7O0tBQ0w7SUFDTCxxQkFBQztBQUFELENBdEdBLEFBc0dDLENBdEcyQyx1QkFBYSxHQXNHeEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFYXNpbmcgfSBmcm9tIFwiLi4vRW51bS9FYXNpbmdcIjtcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSBcIi4uL0VudW0vR2FtZUV2ZW50XCI7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZVwiO1xyXG5pbXBvcnQgR2FtZU1vZGxlIGZyb20gXCIuLi9HYW1lTW9kbGVcIjtcclxuaW1wb3J0IHsgQ2FtZXJhU3RhdGUgfSBmcm9tIFwiLi4vRW51bS9DYW1lcmFTdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhQ29udHJvbGwgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIG1hbkNhbWVyYTogY2MuQ2FtZXJhO1xyXG4gICAgbWluZUNhbWVyYTogY2MuQ2FtZXJhO1xyXG4gICAgbWFuWm9vbVJhdGlvOiBudW1iZXIgPSAxLjc3O1xyXG4gICAgc2hvd0FsbFpvb21SYXRpbzogbnVtYmVyID0gMC4zNjtcclxuICAgIHN0YXRpb25ab29tUmF0aW86IG51bWJlciA9IDM7XHJcblxyXG4gICAgbW92ZVNwZWVkOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGNhbWVyYVN0YXRlOiBDYW1lcmFTdGF0ZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWluZUNhbWVyYSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKVxyXG4gICAgICAgIHRoaXMubWFuQ2FtZXJhID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9NYW4vbk1hbi9tYW5DYW1lcmFcIikuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSlcclxuICAgICAgICB0aGlzLm1pbmVDYW1lcmEuem9vbVJhdGlvID0gMVxyXG4gICAgICAgIHRoaXMubWFuQ2FtZXJhLnpvb21SYXRpbyA9IHRoaXMubWFuWm9vbVJhdGlvXHJcbiAgICAgICAgdGhpcy5taW5lQ2FtZXJhLm5vZGUuc2V0UG9zaXRpb24oY2MuVmVjMi5aRVJPKVxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5Nb3ZlVG9TdGF0aW9uLCB0aGlzLm1vdmVUb1N0YXRpb24pO1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5Nb3ZlVG9NYW5DYW1lcmEsIHRoaXMubW92ZVRvTWFuQ2FtZXJhKTtcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuU2hvd0FsbFZpZXcsIHRoaXMuc2hvd0FsbFZpZXcpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhU3RhdGUgPSBDYW1lcmFTdGF0ZS5NaW5lXHJcbiAgICAgICAgLy8gdGhpcy5zaG93QWxsVmlldygpXHJcblxyXG4gICAgfVxyXG4gICAgYWN0aXZlTWFuQ2FtZXJhKGlzYm9vbGVhbjogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMubWFuQ2FtZXJhLm5vZGUuYWN0aXZlID0gaXNib29sZWFuXHJcbiAgICB9XHJcbiAgICBhY3RpdmVNaW5lQ2FtZXJhKGlzYm9vbGVhbjogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMubWluZUNhbWVyYS5ub2RlLmFjdGl2ZSA9IGlzYm9vbGVhblxyXG4gICAgfVxyXG4gICAgYXN5bmMgbW92ZVRvU3RhdGlvbih0YXJnZXQ6IGNjLk5vZGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYW1lcmFTdGF0ZSA9PSBDYW1lcmFTdGF0ZS5NZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXN5bmNNaW5lKClcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhU3RhdGUgPSBDYW1lcmFTdGF0ZS5NaW5lXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmICghaXNKdW1wKVxyXG4gICAgICAgICAgICAvLyAgICAgdHdlZW4gPSBjYy50d2VlbigpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLnRvKHRoaXMubW92ZVNwZWVkLCB7IHpvb21SYXRpbzogdGhpcy5tYW5ab29tUmF0aW8gfSlcclxuICAgICAgICAgICAgLy8gZWxzZVxyXG4gICAgICAgICAgICAvLyAgICAgdHdlZW4gPSBjYy50d2VlbigpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLnRvKHRoaXMubW92ZVNwZWVkICogMC41LCB7IHpvb21SYXRpbzogMSB9LCB7IGVhc2luZzogRWFzaW5nLmN1YmljSW4gfSlcclxuICAgICAgICAgICAgLy8gICAgICAgICAudG8odGhpcy5tb3ZlU3BlZWQgKiAwLjUsIHsgem9vbVJhdGlvOiB0aGlzLm1hblpvb21SYXRpbyB9LCB7IGVhc2luZzogRWFzaW5nLmN1YmljT3V0IH0pXHJcbiAgICAgICAgICAgIGxldCBtYW5lUG9zID0gR2FtZU1vZGxlLmNvbnZlcnRPdGhlck5vZGVTcGFjZUFSKHRhcmdldCwgdGhpcy5taW5lQ2FtZXJhLm5vZGUpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWluZUNhbWVyYS5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKHRoaXMubW92ZVNwZWVkLCB7IHBvc2l0aW9uOiBtYW5lUG9zIH0sIHsgZWFzaW5nOiBFYXNpbmcuY3ViaWNPdXQgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKHJlc29sdmUpXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1pbmVDYW1lcmEpXHJcbiAgICAgICAgICAgICAgICAudG8odGhpcy5tb3ZlU3BlZWQsIHsgem9vbVJhdGlvOiB0aGlzLm1hblpvb21SYXRpbyB9KVxyXG4gICAgICAgICAgICAgICAgLy8gLnRvKHRoaXMubW92ZVNwZWVkICogMC41LCB7IHpvb21SYXRpbzogMSB9LCB7IGVhc2luZzogRWFzaW5nLmN1YmljSW4gfSlcclxuICAgICAgICAgICAgICAgIC8vIC50byh0aGlzLm1vdmVTcGVlZCAqIDAuNSwgeyB6b29tUmF0aW86IHRoaXMuc3RhdGlvblpvb21SYXRpbyB9LCB7IGVhc2luZzogRWFzaW5nLmN1YmljT3V0IH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhc3luY01pbmUoKSB7XHJcbiAgICAgICAgbGV0IG1hbmVQb3MgPSBHYW1lTW9kbGUuY29udmVydE90aGVyTm9kZVNwYWNlQVIodGhpcy5tYW5DYW1lcmEubm9kZSwgdGhpcy5taW5lQ2FtZXJhLm5vZGUpXHJcbiAgICAgICAgdGhpcy5taW5lQ2FtZXJhLm5vZGUucG9zaXRpb24gPSBtYW5lUG9zXHJcbiAgICB9XHJcbiAgICBhc3luYyBtb3ZlVG9NYW5DYW1lcmEoX3NwZWVkOiBudW1iZXIgPSB0aGlzLm1vdmVTcGVlZCwgaXNKdW1wOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0d2VlbjogY2MuVHdlZW47XHJcbiAgICAgICAgICAgIC8vIGlmICghaXNKdW1wKVxyXG4gICAgICAgICAgICAvLyAgICAgdHdlZW4gPSBjYy50d2VlbigpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLnRvKHRoaXMubW92ZVNwZWVkLCB7IHpvb21SYXRpbzogdGhpcy5tYW5ab29tUmF0aW8gfSlcclxuICAgICAgICAgICAgLy8gZWxzZVxyXG4gICAgICAgICAgICAvLyAgICAgdHdlZW4gPSBjYy50d2VlbigpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLnRvKHRoaXMubW92ZVNwZWVkICogMC41LCB7IHpvb21SYXRpbzogMSB9LCB7IGVhc2luZzogRWFzaW5nLmN1YmljSW4gfSlcclxuICAgICAgICAgICAgLy8gICAgICAgICAudG8odGhpcy5tb3ZlU3BlZWQgKiAwLjUsIHsgem9vbVJhdGlvOiB0aGlzLm1hblpvb21SYXRpbyB9LCB7IGVhc2luZzogRWFzaW5nLmN1YmljT3V0IH0pXHJcblxyXG4gICAgICAgICAgICBsZXQgbWFuZVBvcyA9IEdhbWVNb2RsZS5jb252ZXJ0T3RoZXJOb2RlU3BhY2VBUih0aGlzLm1hbkNhbWVyYS5ub2RlLCB0aGlzLm1pbmVDYW1lcmEubm9kZSlcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5taW5lQ2FtZXJhLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oX3NwZWVkLCB7IHBvc2l0aW9uOiBtYW5lUG9zIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFTdGF0ZSA9IENhbWVyYVN0YXRlLk1lblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlTWFuQ2FtZXJhKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlTWluZUNhbWVyYShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5taW5lQ2FtZXJhKVxyXG4gICAgICAgICAgICAgICAgLnRvKF9zcGVlZCwgeyB6b29tUmF0aW86IHRoaXMubWFuWm9vbVJhdGlvIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBzaG93QWxsVmlldygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1pbmVDYW1lcmEubm9kZSlcclxuICAgICAgICAgICAgICAgIC50byh0aGlzLm1vdmVTcGVlZCwgeyBwb3NpdGlvbjogY2MuVmVjMy5aRVJPIH0sIHsgZWFzaW5nOiBFYXNpbmcuY3ViaWNPdXQgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWluZUNhbWVyYSlcclxuICAgICAgICAgICAgICAgIC50byh0aGlzLm1vdmVTcGVlZCwgeyB6b29tUmF0aW86IHRoaXMuc2hvd0FsbFpvb21SYXRpbyB9LCB7IGVhc2luZzogRWFzaW5nLmN1YmljT3V0IH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbChyZXNvbHZlKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==