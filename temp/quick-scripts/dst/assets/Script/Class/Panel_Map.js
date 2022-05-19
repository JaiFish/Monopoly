
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