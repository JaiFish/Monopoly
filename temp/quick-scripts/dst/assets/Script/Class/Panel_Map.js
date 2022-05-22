
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcUGFuZWxfTWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUF5QztBQUN6QywrQ0FBOEM7QUFDOUMsbURBQWtEO0FBRWxELDJDQUFzQztBQUN0Qyw0REFBdUQ7QUFDdkQsK0NBQTBDO0FBQzFDLDBDQUFxQztBQUVyQztJQUF1Qyw2QkFBYTtJQUFwRDs7SUFtSUEsQ0FBQztJQTlIYSwwQkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsMENBQTBDLENBQUMsQ0FBQTtRQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNuRCxDQUFDO0lBQ1MseUJBQUssR0FBZjtJQUVBLENBQUM7SUFDSywyQkFBTyxHQUFiLFVBQWMsS0FBbUI7Ozs7Ozt3QkFFekIsUUFBUSxHQUFrQixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUE7d0JBQzFFLGdCQUFnQjt3QkFDaEIsS0FBUyxLQUFLLEdBQVcsQ0FBQyxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMs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LE9BQU8sTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDbkQsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFDTCxnQkFBQztBQUFELENBbklBLEFBbUlDLENBbklzQyx1QkFBYSxHQW1JbkQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXRNbmcgZnJvbSBcIi4uL0Fzc2V0L0Fzc2V0TW5nXCI7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gXCIuLi9FbnVtL0dhbWVFdmVudFwiO1xyXG5pbXBvcnQgeyBTdGF0aW9uVHlwZSB9IGZyb20gXCIuLi9FbnVtL1N0YXRpb25UeXBlXCI7XHJcbmltcG9ydCB7IFR5cGVDbGFzcyB9IGZyb20gXCIuLi9FbnVtL1R5cGVDbGFzc1wiO1xyXG5pbXBvcnQgTWFwSXRlbSBmcm9tIFwiLi4vSXRlbS9NYXBJdGVtXCI7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZVwiO1xyXG5pbXBvcnQgTWFwU3ByaXRlIGZyb20gXCIuLi9JdGVtL01hcFNwcml0ZVwiO1xyXG5pbXBvcnQgR2FtZU1vZGxlIGZyb20gXCIuLi9HYW1lTW9kbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsX01hcCBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgcHVibGljIHRlbXBNYXBJdGVtOiBjYy5Ob2RlO1xyXG4gICAgcHVibGljIGNvbnRlbnRfTWFwOiBjYy5Ob2RlO1xyXG4gICAgcHVibGljIGNvbnRlbnRfU3RhdGlvbjogY2MuTm9kZTtcclxuICAgIHB1YmxpYyBjb250ZW50X1N0YXRpb24yOiBjYy5Ob2RlO1xyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRlbXBNYXBJdGVtID0gY2MuZmluZChcIm1hcEl0ZW1cIiwgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuY29udGVudF9NYXAgPSBjYy5maW5kKFwibkNvbnRlbnRfTWFwXCIsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmNvbnRlbnRfU3RhdGlvbiA9IGNjLmZpbmQoXCJuQ29udGVudF9TdGF0aW9uU3ByaXRlXCIsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmNvbnRlbnRfU3RhdGlvbjIgPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX01hcDIvbkNvbnRlbnRfU3RhdGlvblNwcml0ZVwiKVxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5Jbml0TWFwLCB0aGlzLmluaXRNYXApXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG4gICAgYXN5bmMgaW5pdE1hcChfcGF0aDogY2MuQW5pbWF0aW9uKSB7XHJcblxyXG4gICAgICAgIGxldCBwYXRoRGF0YTogQXJyYXk8b2JqZWN0PiA9IF9wYXRoLmdldENsaXBzKClbMF0uY3VydmVEYXRhLnByb3BzLnBvc2l0aW9uXHJcbiAgICAgICAgLy/mi7/lj5ZBbmltYXRpb27nmoTot6/lvpFcclxuICAgICAgICBmb3IgKGxldCBpbmRleDogbnVtYmVyID0gMDsgaW5kZXggPCBwYXRoRGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHg6IG51bWJlciA9IHBhdGhEYXRhW2luZGV4XVtcInZhbHVlXCJdWzBdXHJcbiAgICAgICAgICAgIGxldCB5OiBudW1iZXIgPSBwYXRoRGF0YVtpbmRleF1bXCJ2YWx1ZVwiXVsxXVxyXG5cclxuICAgICAgICAgICAgR2FtZU1vZGxlLnBhdGhQb3NpdGlvbkRhdGEuc2V0KGluZGV4LCBjYy52Mih4LCB5KSlcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGF0aERhdGFbaW5kZXhdKTtcclxuICAgICAgICAgICAgaWYgKHBhdGhEYXRhW2luZGV4XVtcIm1vdGlvblBhdGhcIl0gIT0gbnVsbCAmJiBwYXRoRGF0YVtpbmRleF1bXCJtb3Rpb25QYXRoXCJdLmxlbmd0aCA+IDApIHsgLy/mqqLmn6XmmK/lkKbmnIlCZXppZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuQWRkQmV6aWVyKGluZGV4LCBwYXRoRGF0YSwgR2FtZU1vZGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+eUn+eUouWcsOWclueahOm7nlxyXG4gICAgICAgIGF3YWl0IEFzc2V0TW5nLmNoZWNrU3RhdGUoKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGF0aERhdGEubGVuZ3RoIC0gMTsgaW5kZXgrKykgey8v5Y6f6bue6Lef57WC6bue6YO95piv5LiA5qij55qE6bue77yM5YWn5a655L6d5qij5bCx5LiN55So5paw5aKeXHJcbiAgICAgICAgICAgIGxldCB0ZW1wSXRlbTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGVtcE1hcEl0ZW0pXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudF9NYXAuYWRkQ2hpbGQodGVtcEl0ZW0sIGNjLm1hY3JvLk1BWF9aSU5ERVgpXHJcbiAgICAgICAgICAgIHRlbXBJdGVtLnNldFBvc2l0aW9uKEdhbWVNb2RsZS5wYXRoUG9zaXRpb25EYXRhLmdldChpbmRleCkpXHJcbiAgICAgICAgICAgIGxldCBfY2xhc3M6IE1hcEl0ZW0gPSB0ZW1wSXRlbS5hZGRDb21wb25lbnQoTWFwSXRlbSk7XHJcbiAgICAgICAgICAgIF9jbGFzcy5teU51bWJlciA9IGluZGV4O1xyXG4gICAgICAgICAgICBfY2xhc3MubXlUeXBlID0gdGhpcy5nZXRTdGF0aW9uVHlwZShpbmRleCk7XHJcbiAgICAgICAgICAgIF9jbGFzcy5zZXRTcHJpdGUodGhpcy5nZXRTcHJpdGVUeXBlKGluZGV4KSk7XHJcbiAgICAgICAgICAgIEdhbWVNb2RsZS5tYXBJdGVtLnNldChpbmRleCwgX2NsYXNzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDI7IGluZGV4IDw9IDE5OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBfbm9kZSA9IHRoaXMuZXhjZXB0aW9uU3ByaXRlKGluZGV4KVxyXG4gICAgICAgICAgICBsZXQgc3ByaXRlQ2xhc3MgPSBfbm9kZS5hZGRDb21wb25lbnQoTWFwU3ByaXRlKVxyXG4gICAgICAgICAgICBzcHJpdGVDbGFzcy5teVNwcml0ZS5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiU3RhdGlvbl9HYXJ5X1wiICsgaW5kZXgudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgc3ByaXRlQ2xhc3MudHlwZSA9IGluZGV4XHJcbiAgICAgICAgICAgIEdhbWVNb2RsZS5tYXBTcHJpdGUuc2V0KGluZGV4LCBzcHJpdGVDbGFzcylcclxuICAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdGVzdFxyXG4gICAgICAgIC8vIGNjLmZpbmQoXCJDYW52YXMvMiBjb3B5XCIpLmFkZENvbXBvbmVudChNYXBTcHJpdGUpLmdldEFjdGlvbigpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coR2FtZU1vZGxlLnBhdGhCZXppZXJEYXRhKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhHYW1lTW9kbGUucGF0aFBvc2l0aW9uRGF0YSk7XHJcbiAgICB9XHJcbiAgICBBZGRCZXppZXIobWFwTnVtYmVyOiBudW1iZXIsIHBhdGhEYXRhOiBBcnJheTxvYmplY3Q+LCBHYW1lTW9kbGU6IEdhbWVNb2RsZSkge1xyXG4gICAgICAgIGxldCBBcnI6IEFycmF5PGNjLlZlYzI+ID0gW11cclxuICAgICAgICAvL+i1t+m7nlxyXG4gICAgICAgIC8vIOS4remWk+m7nlxyXG4gICAgICAgIC8vIOWGjeS+hue1gum7nlxyXG4gICAgICAgIC8v5Zug54K66LOH5paZ6YKE5piv6KKr57at5oyB5Zyo5LqU6JmfLuaJgOS7peimgeW+gOWbnuaLv+izh+aWmS4uLuWkqum6u+eFqeS6huOEhVxyXG4gICAgICAgIGxldCB4ID0gcGF0aERhdGFbbWFwTnVtYmVyXVtcInZhbHVlXCJdWzBdO1xyXG4gICAgICAgIGxldCB5ID0gcGF0aERhdGFbbWFwTnVtYmVyXVtcInZhbHVlXCJdWzFdO1xyXG4gICAgICAgIEFyci5wdXNoKGNjLnYyKHgsIHkpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNjLnYyKHgsIHkpKTtcclxuXHJcbiAgICAgICAgeCA9IHBhdGhEYXRhW21hcE51bWJlcl1bXCJtb3Rpb25QYXRoXCJdWzBdWzBdO1xyXG4gICAgICAgIHkgPSBwYXRoRGF0YVttYXBOdW1iZXJdW1wibW90aW9uUGF0aFwiXVswXVsxXTtcclxuICAgICAgICBBcnIucHVzaChjYy52Mih4LCB5KSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYy52Mih4LCB5KSk7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhdGhEYXRhW21hcE51bWJlcl1bXCJtb3Rpb25QYXRoXCJdWzBdLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhwYXRoRGF0YVttYXBOdW1iZXItMV1bXCJtb3Rpb25QYXRoXCJdWzBdKTtcclxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2cocGF0aERhdGFbbWFwTnVtYmVyLTFdW1wibW90aW9uUGF0aFwiXVswXS5sZW5ndGgpO1xyXG4gICAgICAgIC8vICAgICBsZXQgeDogbnVtYmVyID0gcGF0aERhdGFbbWFwTnVtYmVyXVtcIm1vdGlvblBhdGhcIl1bMF1baW5kZXhdXHJcbiAgICAgICAgLy8gICAgIGluZGV4KytcclxuICAgICAgICAvLyAgICAgbGV0IHk6IG51bWJlciA9IHBhdGhEYXRhW21hcE51bWJlcl1bXCJtb3Rpb25QYXRoXCJdWzBdW2luZGV4XVxyXG4gICAgICAgIC8vICAgICBBcnIucHVzaChjYy52Mih4LCB5KSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy/oqr/mlbTkvY3lrZAgIOacieWkoOm6u+eFqVxyXG4gICAgICAgIC8vIGxldCBnZXRQdXNoT25lOiBjYy5WZWMyID0gQXJyLnNwbGljZSgxLCAxKVswXVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGdldFB1c2hPbmUueCxnZXRQdXNoT25lLnkpO1xyXG4gICAgICAgIC8vIEFyci51bnNoaWZ0KGdldFB1c2hPbmUpO1xyXG5cclxuICAgICAgICAvL+S4i+S4gOWAi+m7nueCuue1gum7nuaJgOS7peimgeWcqOmAmeWKoOWFpVxyXG4gICAgICAgIHggPSBwYXRoRGF0YVttYXBOdW1iZXIgKyAxXVtcInZhbHVlXCJdWzBdO1xyXG4gICAgICAgIHkgPSBwYXRoRGF0YVttYXBOdW1iZXIgKyAxXVtcInZhbHVlXCJdWzFdO1xyXG4gICAgICAgIEFyci5wdXNoKGNjLnYyKHgsIHkpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKEFycik7XHJcblxyXG4gICAgICAgIEdhbWVNb2RsZS5wYXRoQmV6aWVyRGF0YS5zZXQobWFwTnVtYmVyICsgMSwgQXJyKTtcclxuICAgIH1cclxuICAgIGdldFNwcml0ZVR5cGUoX251bWJlcjogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coX251bWJlcik7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoX251bWJlcikge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJTdGF0aW9uX1N0YXJ0XCIpO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIGNhc2UgMjA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJTdGF0aW9uX1dhaXRSYWRcIik7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgY2FzZSAxNTpcclxuICAgICAgICAgICAgY2FzZSAxODpcclxuICAgICAgICAgICAgICAgIHJldHVybiBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIlN0YXRpb25fUSZBXCIpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiU3RhdGlvbl9Ob3JtYWxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBnZXRUeXBlOlN0YXRpb25UeXBlID0gX251bWJlclxyXG4gICAgfVxyXG4gICAgZ2V0U3RhdGlvblR5cGUoX251bWJlcjogbnVtYmVyKSB7XHJcbiAgICAgICAgc3dpdGNoIChfbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdGF0aW9uVHlwZS5TdGFydFxyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIGNhc2UgMjE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGlvblR5cGUuV2FpdFJhZFxyXG4gICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgIGNhc2UgMTU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGlvblR5cGUuUWFuZEFcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdGF0aW9uVHlwZS5Ob3JtYWxcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IGdldFR5cGU6U3RhdGlvblR5cGUgPSBfbnVtYmVyXHJcbiAgICB9XHJcblxyXG4gICAgZXhjZXB0aW9uU3ByaXRlKF9pbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIF9pbmRleCA9PSA4ID9cclxuICAgICAgICAgICAgY2MuZmluZChfaW5kZXgudG9TdHJpbmcoKSwgdGhpcy5jb250ZW50X1N0YXRpb24yKSA6XHJcbiAgICAgICAgICAgIGNjLmZpbmQoX2luZGV4LnRvU3RyaW5nKCksIHRoaXMuY29udGVudF9TdGF0aW9uKVxyXG4gICAgfVxyXG59Il19