
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
var MusciMng_1 = require("../../Data/base/MusciMng");
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
        this.info2 = cc.find('Info2', this.node);
        this.initEvent(GameEvent_1.GameEvent.UIGetStation, this.getStation);
        this.info2.active = false;
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
        MusciMng_1.default.effectPlay("BtnClick");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcVUlcXFN0YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCwrREFBMEQ7QUFDMUQscURBQWdEO0FBQ2hELGtEQUFpRDtBQUNqRCw2Q0FBd0M7QUFDeEMsMkNBQXNDO0FBQ2hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFhO0lBQWxEO1FBQUEscUVBZ0lDO1FBdEhHLGNBQVEsR0FBVyxDQUFDLENBQUE7UUFDcEIsb0JBQWMsR0FBYSxFQUFFLENBQUE7O0lBcUhqQyxDQUFDO0lBL0dhLHdCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdEYsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUMxRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxD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Q0FBQyxDQUFBO1NBQzVEO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsRUFBTCxDQUFLLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBL0hnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBZ0kzQjtJQUFELGNBQUM7Q0FoSUQsQUFnSUMsQ0FoSW9DLHVCQUFhLEdBZ0lqRDtrQkFoSW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXRNbmcgZnJvbSAnLi4vLi4vQXNzZXQvQXNzZXRNbmcnO1xyXG5pbXBvcnQgQnV0dG9uTW5nIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9CdXR0b25NbmcnO1xyXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tICcuLi8uLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZSc7XHJcbmltcG9ydCBNdXNjaU1uZyBmcm9tICcuLi8uLi9EYXRhL2Jhc2UvTXVzY2lNbmcnO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tICcuLi8uLi9FbnVtL0dhbWVFdmVudCc7XHJcbmltcG9ydCBHYW1lTW9kbGUgZnJvbSAnLi4vLi4vR2FtZU1vZGxlJztcclxuaW1wb3J0IFN0YXRpb25CdG4gZnJvbSAnLi9TdGF0aW9uQnRuJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpb24gZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGljb246IGNjLk5vZGU7XHJcbiAgICBpc09wZW46IGJvb2xlYW5cclxuICAgIGl0ZW06IGNjLk5vZGVcclxuICAgIGJ0bl9Db250cm9sbE9wZW46IGNjLkJ1dHRvblxyXG4gICAgc2Nyb2xsOiBjYy5TY3JvbGxWaWV3O1xyXG4gICAgY29uOiBjYy5Ob2RlXHJcbiAgICBMYXlvdXRfTWFzazogY2MuTGF5b3V0O1xyXG4gICAgTGF5b3V0X0JHMTogY2MuTGF5b3V0O1xyXG4gICAgTGF5b3V0X0JHMjogY2MuTGF5b3V0O1xyXG4gICAgbWF4SW5kZXg6IG51bWJlciA9IDVcclxuICAgIGdldFN0YXRpb25EYXRhOiBudW1iZXJbXSA9IFtdXHJcbiAgICBpdGVtQ291bnQ6IG51bWJlcjsvL+eBq+i7iuermee4veWFseaVuOmHj1xyXG5cclxuXHJcbiAgICBpbmZvMjogY2MuTm9kZVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5idG5fQ29udHJvbGxPcGVuID0gY2MuZmluZChcIkJ0bl9Db250cm9sbE9wZW5cIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMuaWNvbiA9IGNjLmZpbmQoXCJpY29uXCIsIHRoaXMuYnRuX0NvbnRyb2xsT3Blbi5ub2RlKTtcclxuICAgICAgICB0aGlzLml0ZW0gPSBjYy5maW5kKFwiaXRlbVwiLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5zY3JvbGwgPSBjYy5maW5kKFwiY29uX1Njcm9sbFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KVxyXG4gICAgICAgIHRoaXMuY29uID0gdGhpcy5zY3JvbGwuY29udGVudFxyXG4gICAgICAgIHRoaXMuY29uLnJlbW92ZUFsbENoaWxkcmVuKClcclxuICAgICAgICB0aGlzLmNvbi5zZXRDb250ZW50U2l6ZSgwLCAwKVxyXG4gICAgICAgIHRoaXMuTGF5b3V0X0JHMSA9IGNjLmZpbmQoXCJMYXlvdXRfQkcxXCIsIHRoaXMuc2Nyb2xsLm5vZGUpLmdldENvbXBvbmVudChjYy5MYXlvdXQpXHJcbiAgICAgICAgdGhpcy5MYXlvdXRfQkcyID0gY2MuZmluZChcIkxheW91dF9CRzJcIiwgdGhpcy5MYXlvdXRfQkcxLm5vZGUpLmdldENvbXBvbmVudChjYy5MYXlvdXQpXHJcbiAgICAgICAgdGhpcy5MYXlvdXRfTWFzayA9IGNjLmZpbmQoXCJMYXlvdXRfTWFza1wiLCB0aGlzLkxheW91dF9CRzIubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxheW91dClcclxuICAgICAgICB0aGlzLmluZm8yID0gY2MuZmluZCgnSW5mbzInLCB0aGlzLm5vZGUpXHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5VSUdldFN0YXRpb24sIHRoaXMuZ2V0U3RhdGlvbilcclxuICAgICAgICB0aGlzLmluZm8yLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgLy/poY3lpJbomZXnkIZcclxuICAgICAgICB0aGlzLnNvcnREYXRhKClcclxuICAgICAgICB0aGlzLml0ZW1Db3VudCA9IHRoaXMuZ2V0U3RhdGlvbkRhdGEubGVuZ3RoXHJcbiAgICAgICAgdGhpcy5pdGVtSW5pdCgpXHJcblxyXG4gICAgICAgIC8vIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLml0ZW1Db3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLml0ZW1Tb3AodGhpcy5nZXRTdGF0aW9uRGF0YVtpbmRleF0pXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIlN0YXRpb25cIiwgXCJldmVudENvbnRyb2xsT3BlblwiLCB0aGlzLmJ0bl9Db250cm9sbE9wZW4pXHJcbiAgICB9XHJcbiAgICBpdGVtSW5pdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdGVtQ291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtU29wKHRoaXMuZ2V0U3RhdGlvbkRhdGFbaW5kZXhdKVxyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICAgIC8v5pyJ5ZWP6aGM55qE5pa55rOVXHJcbiAgICAgICAgLy8gaWYgKHRoaXMubWF4SW5kZXggPCB0aGlzLml0ZW1Db3VudCkge1xyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5tYXhJbmRleDsgaW5kZXgrKykge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pdGVtU29wKHRoaXMuZ2V0U3RhdGlvbkRhdGFbaW5kZXhdKVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gey8v57Wm5pmC6ZaT5riy5p+TXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNsb3NlTGF5b3V0KClcclxuICAgICAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gdGhpcy5tYXhJbmRleDsgaW5kZXggPCB0aGlzLml0ZW1Db3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLml0ZW1Tb3AodGhpcy5nZXRTdGF0aW9uRGF0YVtpbmRleF0pXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuaXRlbS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIC8vICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAvLyAgICAgfSwgMTAwKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLml0ZW1Db3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pdGVtU29wKHRoaXMuZ2V0U3RhdGlvbkRhdGFbaW5kZXhdKVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXRlbS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIGNoZW5nZVNwcml0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvbi5jaGlsZHJlbkNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBfY2xhc3MgPSB0aGlzLmNvbi5jaGlsZHJlbltpbmRleF0uZ2V0Q29tcG9uZW50KFN0YXRpb25CdG4pXHJcbiAgICAgICAgICAgIF9jbGFzcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIlVJQnRuX1N0YXRvaW5fR2FyeV9cIiArIF9jbGFzcy5zdGF0aW9uVHlwZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja0luaXQoKSB7XHJcbiAgICAgICAgbGV0IGlzQ2hlY2sgPSBmYWxzZVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb24uY2hpbGRyZW5bdGhpcy5pdGVtQ291bnQgLSAxXS5nZXRDb21wb25lbnQoU3RhdGlvbkJ0bikgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb24uY2hpbGRyZW5bdGhpcy5pdGVtQ291bnQgLSAxXS5nZXRDb21wb25lbnQoU3RhdGlvbkJ0bikuYnRuICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBpc0NoZWNrID0gdHJ1ZVxyXG4gICAgICAgIHJldHVybiBpc0NoZWNrXHJcbiAgICB9XHJcbiAgICBldmVudENvbnRyb2xsT3BlbihlOiBjYy5FdmVudCwgX2N1c3RvbUV2ZW50RGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgTXVzY2lNbmcuZWZmZWN0UGxheShcIkJ0bkNsaWNrXCIpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSB0aGlzLnNjcm9sbC5ub2RlLmFjdGl2ZVxyXG4gICAgICAgICAgICB0aGlzLmljb24uYW5nbGUgPSAxODBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbC5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSB0aGlzLnNjcm9sbC5ub2RlLmFjdGl2ZVxyXG4gICAgICAgICAgICB0aGlzLmljb24uYW5nbGUgPSAwXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBnZXRTdGF0aW9uKHN0YXRpb25OdW06IG51bWJlcikge1xyXG4gICAgICAgIGlmIChzdGF0aW9uTnVtIDwgMiB8fCBzdGF0aW9uTnVtID4gMTkpIHJldHVybjtcclxuICAgICAgICBjYy5maW5kKHN0YXRpb25OdW0udG9TdHJpbmcoKSwgdGhpcy5jb24pLmdldENvbXBvbmVudChTdGF0aW9uQnRuKS5jaGVuZ2VTdGF0aW9uKClcclxuICAgIH1cclxuICAgIGFzeW5jIGl0ZW1Tb3AoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBfaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbSlcclxuICAgICAgICB0aGlzLmNvbi5hZGRDaGlsZChfaXRlbSwgY2MubWFjcm8uTUFYX1pJTkRFWCwgaW5kZXgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgbGV0IF9jbGFzcyA9IF9pdGVtLmFkZENvbXBvbmVudChTdGF0aW9uQnRuKVxyXG4gICAgICAgIF9jbGFzcy5zZXRFdmVudChpbmRleClcclxuICAgICAgICBfaXRlbS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgfVxyXG4gICAgY2xvc2VMYXlvdXQoKSB7XHJcbiAgICAgICAgdGhpcy5MYXlvdXRfQkcxLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuTGF5b3V0X0JHMi5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLkxheW91dF9NYXNrLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgc29ydERhdGEoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IEdhbWVNb2RsZS5zdGF0aW9uVHlwZV9Ob3JtYWwubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U3RhdGlvbkRhdGEucHVzaChHYW1lTW9kbGUuc3RhdGlvblR5cGVfTm9ybWFsW2luZGV4XSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IEdhbWVNb2RsZS5zdGF0aW9uVHlwZV9RQS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRTdGF0aW9uRGF0YS5wdXNoKEdhbWVNb2RsZS5zdGF0aW9uVHlwZV9RQVtpbmRleF0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0U3RhdGlvbkRhdGEuc29ydCgoYSwgYikgPT4gYSAtIGIpXHJcbiAgICB9XHJcbn0iXX0=