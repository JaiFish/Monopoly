
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.exceptionArray = [8, 12, 13, 18, 19];
        return _this;
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
                            spriteClass = _node.addComponent(MapSprite_1.default);
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
        var isException = false;
        this.exceptionArray.forEach(function (num) {
            if (num == _index) {
                isException = true;
                return;
            }
        });
        return isException ?
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcUGFuZWxfTWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUF5QztBQUN6QywrQ0FBOEM7QUFDOUMsbURBQWtEO0FBRWxELDJDQUFzQztBQUN0Qyw0REFBdUQ7QUFDdkQsK0NBQTBDO0FBQzFDLDBDQUFxQztBQUVyQztJQUF1Qyw2QkFBYTtJQUFwRDtRQUFBLHFFQTRJQztRQXZJRyxvQkFBYyxHQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBOztJQXVJbEQsQ0FBQztJQXRJYSwwQkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsMENBQTBDLENBQUMsQ0FBQTtRQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNuRCxDQUFDO0lBQ1MseUJBQUssR0FBZjtJQUVBLENBQUM7SUFDSywyQkFBTyxHQUFiLFVBQWMsS0FBbUI7Ozs7Ozt3QkFFekIsUUFBUSxHQUFrQixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxD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Q0ksT0FBTyx5QkFBVyxDQUFDLE1BQU0sQ0FBQTtTQUNoQztRQUNELG9DQUFvQztJQUN4QyxDQUFDO0lBRUQsbUNBQWUsR0FBZixVQUFnQixNQUFjO1FBQzFCLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQTtRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDM0IsSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO2dCQUNmLFdBQVcsR0FBRyxJQUFJLENBQUE7Z0JBQ2xCLE9BQU87YUFDVjtRQUNMLENBQUMsQ0FBQyxDQUFBO1FBRUYsT0FBTyxXQUFXLENBQUMsQ0FBQztZQUNoQixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ25ELEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQTVJQSxBQTRJQyxDQTVJc0MsdUJBQWEsR0E0SW5EIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0TW5nIGZyb20gXCIuLi9Bc3NldC9Bc3NldE1uZ1wiO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tIFwiLi4vRW51bS9HYW1lRXZlbnRcIjtcclxuaW1wb3J0IHsgU3RhdGlvblR5cGUgfSBmcm9tIFwiLi4vRW51bS9TdGF0aW9uVHlwZVwiO1xyXG5pbXBvcnQgeyBUeXBlQ2xhc3MgfSBmcm9tIFwiLi4vRW51bS9UeXBlQ2xhc3NcIjtcclxuaW1wb3J0IE1hcEl0ZW0gZnJvbSBcIi4uL0l0ZW0vTWFwSXRlbVwiO1xyXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2VcIjtcclxuaW1wb3J0IE1hcFNwcml0ZSBmcm9tIFwiLi4vSXRlbS9NYXBTcHJpdGVcIjtcclxuaW1wb3J0IEdhbWVNb2RsZSBmcm9tIFwiLi4vR2FtZU1vZGxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbF9NYXAgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIHB1YmxpYyB0ZW1wTWFwSXRlbTogY2MuTm9kZTtcclxuICAgIHB1YmxpYyBjb250ZW50X01hcDogY2MuTm9kZTtcclxuICAgIHB1YmxpYyBjb250ZW50X1N0YXRpb246IGNjLk5vZGU7XHJcbiAgICBwdWJsaWMgY29udGVudF9TdGF0aW9uMjogY2MuTm9kZTtcclxuICAgIGV4Y2VwdGlvbkFycmF5OiBudW1iZXJbXSA9IFs4LCAxMiwgMTMsIDE4LCAxOV1cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50ZW1wTWFwSXRlbSA9IGNjLmZpbmQoXCJtYXBJdGVtXCIsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmNvbnRlbnRfTWFwID0gY2MuZmluZChcIm5Db250ZW50X01hcFwiLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5jb250ZW50X1N0YXRpb24gPSBjYy5maW5kKFwibkNvbnRlbnRfU3RhdGlvblNwcml0ZVwiLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5jb250ZW50X1N0YXRpb24yID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9NYXAyL25Db250ZW50X1N0YXRpb25TcHJpdGVcIilcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuSW5pdE1hcCwgdGhpcy5pbml0TWFwKVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuICAgIGFzeW5jIGluaXRNYXAoX3BhdGg6IGNjLkFuaW1hdGlvbikge1xyXG5cclxuICAgICAgICBsZXQgcGF0aERhdGE6IEFycmF5PG9iamVjdD4gPSBfcGF0aC5nZXRDbGlwcygpWzBdLmN1cnZlRGF0YS5wcm9wcy5wb3NpdGlvblxyXG4gICAgICAgIC8v5ou/5Y+WQW5pbWF0aW9u55qE6Lev5b6RXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXg6IG51bWJlciA9IDA7IGluZGV4IDwgcGF0aERhdGEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCB4OiBudW1iZXIgPSBwYXRoRGF0YVtpbmRleF1bXCJ2YWx1ZVwiXVswXVxyXG4gICAgICAgICAgICBsZXQgeTogbnVtYmVyID0gcGF0aERhdGFbaW5kZXhdW1widmFsdWVcIl1bMV1cclxuXHJcbiAgICAgICAgICAgIEdhbWVNb2RsZS5wYXRoUG9zaXRpb25EYXRhLnNldChpbmRleCwgY2MudjIoeCwgeSkpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhdGhEYXRhW2luZGV4XSk7XHJcbiAgICAgICAgICAgIGlmIChwYXRoRGF0YVtpbmRleF1bXCJtb3Rpb25QYXRoXCJdICE9IG51bGwgJiYgcGF0aERhdGFbaW5kZXhdW1wibW90aW9uUGF0aFwiXS5sZW5ndGggPiAwKSB7IC8v5qqi5p+l5piv5ZCm5pyJQmV6aWVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLkFkZEJlemllcihpbmRleCwgcGF0aERhdGEsIEdhbWVNb2RsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/nlJ/nlKLlnLDlnJbnmoTpu55cclxuICAgICAgICBhd2FpdCBBc3NldE1uZy5jaGVja1N0YXRlKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhdGhEYXRhLmxlbmd0aCAtIDE7IGluZGV4KyspIHsvL+WOn+m7nui3n+e1gum7numDveaYr+S4gOaoo+eahOm7nu+8jOWFp+WuueS+neaoo+WwseS4jeeUqOaWsOWinlxyXG4gICAgICAgICAgICBsZXQgdGVtcEl0ZW06IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRlbXBNYXBJdGVtKVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRfTWFwLmFkZENoaWxkKHRlbXBJdGVtLCBjYy5tYWNyby5NQVhfWklOREVYKVxyXG4gICAgICAgICAgICB0ZW1wSXRlbS5zZXRQb3NpdGlvbihHYW1lTW9kbGUucGF0aFBvc2l0aW9uRGF0YS5nZXQoaW5kZXgpKVxyXG4gICAgICAgICAgICBsZXQgX2NsYXNzOiBNYXBJdGVtID0gdGVtcEl0ZW0uYWRkQ29tcG9uZW50KE1hcEl0ZW0pO1xyXG4gICAgICAgICAgICBfY2xhc3MubXlOdW1iZXIgPSBpbmRleDtcclxuICAgICAgICAgICAgX2NsYXNzLm15VHlwZSA9IHRoaXMuZ2V0U3RhdGlvblR5cGUoaW5kZXgpO1xyXG4gICAgICAgICAgICBfY2xhc3Muc2V0U3ByaXRlKHRoaXMuZ2V0U3ByaXRlVHlwZShpbmRleCkpO1xyXG4gICAgICAgICAgICBHYW1lTW9kbGUubWFwSXRlbS5zZXQoaW5kZXgsIF9jbGFzcylcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAyOyBpbmRleCA8PSAxOTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgX25vZGUgPSB0aGlzLmV4Y2VwdGlvblNwcml0ZShpbmRleClcclxuICAgICAgICAgICAgbGV0IHNwcml0ZUNsYXNzID0gX25vZGUuYWRkQ29tcG9uZW50KE1hcFNwcml0ZSlcclxuICAgICAgICAgICAgc3ByaXRlQ2xhc3MubXlTcHJpdGUuc3ByaXRlRnJhbWUgPSBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIlN0YXRpb25fR2FyeV9cIiArIGluZGV4LnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIHNwcml0ZUNsYXNzLnR5cGUgPSBpbmRleFxyXG4gICAgICAgICAgICBHYW1lTW9kbGUubWFwU3ByaXRlLnNldChpbmRleCwgc3ByaXRlQ2xhc3MpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3Rlc3RcclxuICAgICAgICAvLyBjYy5maW5kKFwiQ2FudmFzLzIgY29weVwiKS5hZGRDb21wb25lbnQoTWFwU3ByaXRlKS5nZXRBY3Rpb24oKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEdhbWVNb2RsZS5wYXRoQmV6aWVyRGF0YSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coR2FtZU1vZGxlLnBhdGhQb3NpdGlvbkRhdGEpO1xyXG4gICAgfVxyXG4gICAgQWRkQmV6aWVyKG1hcE51bWJlcjogbnVtYmVyLCBwYXRoRGF0YTogQXJyYXk8b2JqZWN0PiwgR2FtZU1vZGxlOiBHYW1lTW9kbGUpIHtcclxuICAgICAgICBsZXQgQXJyOiBBcnJheTxjYy5WZWMyPiA9IFtdXHJcbiAgICAgICAgLy/otbfpu55cclxuICAgICAgICAvLyDkuK3plpPpu55cclxuICAgICAgICAvLyDlho3kvobntYLpu55cclxuICAgICAgICAvL+WboOeCuuizh+aWmemChOaYr+iiq+e2reaMgeWcqOS6lOiZny7miYDku6XopoHlvoDlm57mi7/os4fmlpkuLi7lpKrpurvnhankuobjhIVcclxuICAgICAgICBsZXQgeCA9IHBhdGhEYXRhW21hcE51bWJlcl1bXCJ2YWx1ZVwiXVswXTtcclxuICAgICAgICBsZXQgeSA9IHBhdGhEYXRhW21hcE51bWJlcl1bXCJ2YWx1ZVwiXVsxXTtcclxuICAgICAgICBBcnIucHVzaChjYy52Mih4LCB5KSlcclxuICAgICAgICBjb25zb2xlLmxvZyhjYy52Mih4LCB5KSk7XHJcblxyXG4gICAgICAgIHggPSBwYXRoRGF0YVttYXBOdW1iZXJdW1wibW90aW9uUGF0aFwiXVswXVswXTtcclxuICAgICAgICB5ID0gcGF0aERhdGFbbWFwTnVtYmVyXVtcIm1vdGlvblBhdGhcIl1bMF1bMV07XHJcbiAgICAgICAgQXJyLnB1c2goY2MudjIoeCwgeSkpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2MudjIoeCwgeSkpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXRoRGF0YVttYXBOdW1iZXJdW1wibW90aW9uUGF0aFwiXVswXS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2cocGF0aERhdGFbbWFwTnVtYmVyLTFdW1wibW90aW9uUGF0aFwiXVswXSk7XHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHBhdGhEYXRhW21hcE51bWJlci0xXVtcIm1vdGlvblBhdGhcIl1bMF0ubGVuZ3RoKTtcclxuICAgICAgICAvLyAgICAgbGV0IHg6IG51bWJlciA9IHBhdGhEYXRhW21hcE51bWJlcl1bXCJtb3Rpb25QYXRoXCJdWzBdW2luZGV4XVxyXG4gICAgICAgIC8vICAgICBpbmRleCsrXHJcbiAgICAgICAgLy8gICAgIGxldCB5OiBudW1iZXIgPSBwYXRoRGF0YVttYXBOdW1iZXJdW1wibW90aW9uUGF0aFwiXVswXVtpbmRleF1cclxuICAgICAgICAvLyAgICAgQXJyLnB1c2goY2MudjIoeCwgeSkpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8v6Kq/5pW05L2N5a2QICDmnInlpKDpurvnhalcclxuICAgICAgICAvLyBsZXQgZ2V0UHVzaE9uZTogY2MuVmVjMiA9IEFyci5zcGxpY2UoMSwgMSlbMF1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhnZXRQdXNoT25lLngsZ2V0UHVzaE9uZS55KTtcclxuICAgICAgICAvLyBBcnIudW5zaGlmdChnZXRQdXNoT25lKTtcclxuXHJcbiAgICAgICAgLy/kuIvkuIDlgIvpu57ngrrntYLpu57miYDku6XopoHlnKjpgJnliqDlhaVcclxuICAgICAgICB4ID0gcGF0aERhdGFbbWFwTnVtYmVyICsgMV1bXCJ2YWx1ZVwiXVswXTtcclxuICAgICAgICB5ID0gcGF0aERhdGFbbWFwTnVtYmVyICsgMV1bXCJ2YWx1ZVwiXVsxXTtcclxuICAgICAgICBBcnIucHVzaChjYy52Mih4LCB5KSlcclxuICAgICAgICBjb25zb2xlLmxvZyhBcnIpO1xyXG5cclxuICAgICAgICBHYW1lTW9kbGUucGF0aEJlemllckRhdGEuc2V0KG1hcE51bWJlciArIDEsIEFycik7XHJcbiAgICB9XHJcbiAgICBnZXRTcHJpdGVUeXBlKF9udW1iZXI6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKF9udW1iZXIpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKF9udW1iZXIpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiU3RhdGlvbl9TdGFydFwiKTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBjYXNlIDIwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiU3RhdGlvbl9XYWl0UmFkXCIpO1xyXG4gICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgIGNhc2UgMTU6XHJcbiAgICAgICAgICAgIGNhc2UgMTg6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJTdGF0aW9uX1EmQVwiKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIlN0YXRpb25fTm9ybWFsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBsZXQgZ2V0VHlwZTpTdGF0aW9uVHlwZSA9IF9udW1iZXJcclxuICAgIH1cclxuICAgIGdldFN0YXRpb25UeXBlKF9udW1iZXI6IG51bWJlcikge1xyXG4gICAgICAgIHN3aXRjaCAoX251bWJlcikge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGlvblR5cGUuU3RhcnRcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBjYXNlIDIxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0YXRpb25UeXBlLldhaXRSYWRcclxuICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgICBjYXNlIDE1OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0YXRpb25UeXBlLlFhbmRBXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGlvblR5cGUuTm9ybWFsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBnZXRUeXBlOlN0YXRpb25UeXBlID0gX251bWJlclxyXG4gICAgfVxyXG5cclxuICAgIGV4Y2VwdGlvblNwcml0ZShfaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBpc0V4Y2VwdGlvbiA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5leGNlcHRpb25BcnJheS5mb3JFYWNoKG51bSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChudW0gPT0gX2luZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpc0V4Y2VwdGlvbiA9IHRydWVcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBpc0V4Y2VwdGlvbiA/XHJcbiAgICAgICAgICAgIGNjLmZpbmQoX2luZGV4LnRvU3RyaW5nKCksIHRoaXMuY29udGVudF9TdGF0aW9uMikgOlxyXG4gICAgICAgICAgICBjYy5maW5kKF9pbmRleC50b1N0cmluZygpLCB0aGlzLmNvbnRlbnRfU3RhdGlvbilcclxuICAgIH1cclxufSJdfQ==