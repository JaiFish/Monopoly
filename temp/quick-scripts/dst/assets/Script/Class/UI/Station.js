
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
        this.block = cc.find("Block", this.node);
        this.initEvent(GameEvent_1.GameEvent.UIGetStation, this.getStation);
        this.info2.active = false;
        this.block.active = false;
        //額外處理
        this.sortData();
        this.itemCount = this.getStationData.length;
        this.itemInit();
        // for (let index = 0; index < this.itemCount; index++) {
        //     this.itemSop(this.getStationData[index])
        // }
    };
    Station.prototype.start = function () {
        // ButtonMng.addEvent(this.node, "Station", "eventControllOpen", this.btn_ControllOpen)
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
    Station.prototype.chengeInfo2BtnText = function () {
        cc.find("Btn_Close/Label", this.info2).getComponent(cc.Label).string = "關閉";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcVUlcXFN0YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBRTVDLCtEQUEwRDtBQUMxRCxxREFBZ0Q7QUFDaEQsa0RBQWlEO0FBQ2pELDZDQUF3QztBQUN4QywyQ0FBc0M7QUFDaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQWE7SUFBbEQ7UUFBQSxxRUF3SUM7UUE5SEcsY0FBUSxHQUFXLENBQUMsQ0FBQTtRQUNwQixvQkFBYyxHQUFhLEVBQUUsQ0FBQTs7SUE2SGpDLENBQUM7SUFwSGEsd0JBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0RixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUE7UUFDOUIsSUFB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bUJBQVMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtTQUM1RDtRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEVBQUwsQ0FBSyxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQUNELG9DQUFrQixHQUFsQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtJQUM5RSxDQUFDO0lBdklnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBd0kzQjtJQUFELGNBQUM7Q0F4SUQsQUF3SUMsQ0F4SW9DLHVCQUFhLEdBd0lqRDtrQkF4SW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXRNbmcgZnJvbSAnLi4vLi4vQXNzZXQvQXNzZXRNbmcnO1xyXG5pbXBvcnQgQnV0dG9uTW5nIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9CdXR0b25NbmcnO1xyXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tICcuLi8uLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZSc7XHJcbmltcG9ydCBNdXNjaU1uZyBmcm9tICcuLi8uLi9EYXRhL2Jhc2UvTXVzY2lNbmcnO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tICcuLi8uLi9FbnVtL0dhbWVFdmVudCc7XHJcbmltcG9ydCBHYW1lTW9kbGUgZnJvbSAnLi4vLi4vR2FtZU1vZGxlJztcclxuaW1wb3J0IFN0YXRpb25CdG4gZnJvbSAnLi9TdGF0aW9uQnRuJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpb24gZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGljb246IGNjLk5vZGU7XHJcbiAgICBpc09wZW46IGJvb2xlYW5cclxuICAgIGl0ZW06IGNjLk5vZGVcclxuICAgIGJ0bl9Db250cm9sbE9wZW46IGNjLkJ1dHRvblxyXG4gICAgc2Nyb2xsOiBjYy5TY3JvbGxWaWV3O1xyXG4gICAgY29uOiBjYy5Ob2RlXHJcbiAgICBMYXlvdXRfTWFzazogY2MuTGF5b3V0O1xyXG4gICAgTGF5b3V0X0JHMTogY2MuTGF5b3V0O1xyXG4gICAgTGF5b3V0X0JHMjogY2MuTGF5b3V0O1xyXG4gICAgbWF4SW5kZXg6IG51bWJlciA9IDVcclxuICAgIGdldFN0YXRpb25EYXRhOiBudW1iZXJbXSA9IFtdXHJcbiAgICBpdGVtQ291bnQ6IG51bWJlcjsvL+eBq+i7iuermee4veWFseaVuOmHj1xyXG4gICAgbGFiZWxfYnRuOiBjYy5MYWJlbDtcclxuXHJcbiAgICBibG9jazpjYy5Ob2RlXHJcblxyXG5cclxuICAgIGluZm8yOiBjYy5Ob2RlXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJ0bl9Db250cm9sbE9wZW4gPSBjYy5maW5kKFwiQnRuX0NvbnRyb2xsT3BlblwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5pY29uID0gY2MuZmluZChcImljb25cIiwgdGhpcy5idG5fQ29udHJvbGxPcGVuLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuaXRlbSA9IGNjLmZpbmQoXCJpdGVtXCIsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLnNjcm9sbCA9IGNjLmZpbmQoXCJjb25fU2Nyb2xsXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpXHJcbiAgICAgICAgdGhpcy5jb24gPSB0aGlzLnNjcm9sbC5jb250ZW50XHJcbiAgICAgICAgdGhpcy5jb24ucmVtb3ZlQWxsQ2hpbGRyZW4oKVxyXG4gICAgICAgIHRoaXMuY29uLnNldENvbnRlbnRTaXplKDAsIDApXHJcbiAgICAgICAgdGhpcy5MYXlvdXRfQkcxID0gY2MuZmluZChcIkxheW91dF9CRzFcIiwgdGhpcy5zY3JvbGwubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxheW91dClcclxuICAgICAgICB0aGlzLkxheW91dF9CRzIgPSBjYy5maW5kKFwiTGF5b3V0X0JHMlwiLCB0aGlzLkxheW91dF9CRzEubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxheW91dClcclxuICAgICAgICB0aGlzLkxheW91dF9NYXNrID0gY2MuZmluZChcIkxheW91dF9NYXNrXCIsIHRoaXMuTGF5b3V0X0JHMi5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGF5b3V0KVxyXG4gICAgICAgIHRoaXMuaW5mbzIgPSBjYy5maW5kKCdJbmZvMicsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmJsb2NrID0gY2MuZmluZChcIkJsb2NrXCIsdGhpcy5ub2RlKVxyXG5cclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuVUlHZXRTdGF0aW9uLCB0aGlzLmdldFN0YXRpb24pXHJcbiAgICAgICAgdGhpcy5pbmZvMi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYmxvY2suYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAvL+mhjeWkluiZleeQhlxyXG4gICAgICAgIHRoaXMuc29ydERhdGEoKVxyXG4gICAgICAgIHRoaXMuaXRlbUNvdW50ID0gdGhpcy5nZXRTdGF0aW9uRGF0YS5sZW5ndGhcclxuICAgICAgICB0aGlzLml0ZW1Jbml0KClcclxuXHJcbiAgICAgICAgLy8gZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaXRlbUNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXRlbVNvcCh0aGlzLmdldFN0YXRpb25EYXRhW2luZGV4XSlcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEJ1dHRvbk1uZy5hZGRFdmVudCh0aGlzLm5vZGUsIFwiU3RhdGlvblwiLCBcImV2ZW50Q29udHJvbGxPcGVuXCIsIHRoaXMuYnRuX0NvbnRyb2xsT3BlbilcclxuICAgIH1cclxuICAgIGl0ZW1Jbml0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLml0ZW1Db3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Tb3AodGhpcy5nZXRTdGF0aW9uRGF0YVtpbmRleF0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+acieWVj+mhjOeahOaWueazlVxyXG4gICAgICAgIC8vIGlmICh0aGlzLm1heEluZGV4IDwgdGhpcy5pdGVtQ291bnQpIHtcclxuICAgICAgICAvLyAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubWF4SW5kZXg7IGluZGV4KyspIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuaXRlbVNvcCh0aGlzLmdldFN0YXRpb25EYXRhW2luZGV4XSlcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHsvL+e1puaZgumWk+a4suafk1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jbG9zZUxheW91dCgpXHJcbiAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IHRoaXMubWF4SW5kZXg7IGluZGV4IDwgdGhpcy5pdGVtQ291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pdGVtU29wKHRoaXMuZ2V0U3RhdGlvbkRhdGFbaW5kZXhdKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLml0ZW0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAvLyAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgLy8gICAgIH0sIDEwMCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdGVtQ291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuaXRlbVNvcCh0aGlzLmdldFN0YXRpb25EYXRhW2luZGV4XSlcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB0aGlzLml0ZW0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBjaGVuZ2VTcHJpdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb24uY2hpbGRyZW5Db3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgX2NsYXNzID0gdGhpcy5jb24uY2hpbGRyZW5baW5kZXhdLmdldENvbXBvbmVudChTdGF0aW9uQnRuKVxyXG4gICAgICAgICAgICBfY2xhc3Muc3ByaXRlLnNwcml0ZUZyYW1lID0gQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJVSUJ0bl9TdGF0b2luX0dhcnlfXCIgKyBfY2xhc3Muc3RhdGlvblR5cGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tJbml0KCkge1xyXG4gICAgICAgIGxldCBpc0NoZWNrID0gZmFsc2VcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uLmNoaWxkcmVuW3RoaXMuaXRlbUNvdW50IC0gMV0uZ2V0Q29tcG9uZW50KFN0YXRpb25CdG4pICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uLmNoaWxkcmVuW3RoaXMuaXRlbUNvdW50IC0gMV0uZ2V0Q29tcG9uZW50KFN0YXRpb25CdG4pLmJ0biAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgaXNDaGVjayA9IHRydWVcclxuICAgICAgICByZXR1cm4gaXNDaGVja1xyXG4gICAgfVxyXG4gICAgZXZlbnRDb250cm9sbE9wZW4oZTogY2MuRXZlbnQsIF9jdXN0b21FdmVudERhdGE6IHN0cmluZykge1xyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJCdG5DbGlja1wiKVxyXG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbC5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gdGhpcy5zY3JvbGwubm9kZS5hY3RpdmVcclxuICAgICAgICAgICAgdGhpcy5pY29uLmFuZ2xlID0gMTgwXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGwubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gdGhpcy5zY3JvbGwubm9kZS5hY3RpdmVcclxuICAgICAgICAgICAgdGhpcy5pY29uLmFuZ2xlID0gMFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgZ2V0U3RhdGlvbihzdGF0aW9uTnVtOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoc3RhdGlvbk51bSA8IDIgfHwgc3RhdGlvbk51bSA+IDE5KSByZXR1cm47XHJcbiAgICAgICAgY2MuZmluZChzdGF0aW9uTnVtLnRvU3RyaW5nKCksIHRoaXMuY29uKS5nZXRDb21wb25lbnQoU3RhdGlvbkJ0bikuY2hlbmdlU3RhdGlvbigpXHJcbiAgICB9XHJcbiAgICBhc3luYyBpdGVtU29wKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgX2l0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW0pXHJcbiAgICAgICAgdGhpcy5jb24uYWRkQ2hpbGQoX2l0ZW0sIGNjLm1hY3JvLk1BWF9aSU5ERVgsIGluZGV4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGxldCBfY2xhc3MgPSBfaXRlbS5hZGRDb21wb25lbnQoU3RhdGlvbkJ0bilcclxuICAgICAgICBfY2xhc3Muc2V0RXZlbnQoaW5kZXgpXHJcbiAgICAgICAgX2l0ZW0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgIH1cclxuICAgIGNsb3NlTGF5b3V0KCkge1xyXG4gICAgICAgIHRoaXMuTGF5b3V0X0JHMS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLkxheW91dF9CRzIuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5MYXlvdXRfTWFzay5lbmFibGVkID0gZmFsc2VcclxuICAgIH1cclxuICAgIHNvcnREYXRhKCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBHYW1lTW9kbGUuc3RhdGlvblR5cGVfTm9ybWFsLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0aGlzLmdldFN0YXRpb25EYXRhLnB1c2goR2FtZU1vZGxlLnN0YXRpb25UeXBlX05vcm1hbFtpbmRleF0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBHYW1lTW9kbGUuc3RhdGlvblR5cGVfUUEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U3RhdGlvbkRhdGEucHVzaChHYW1lTW9kbGUuc3RhdGlvblR5cGVfUUFbaW5kZXhdKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldFN0YXRpb25EYXRhLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxyXG4gICAgfVxyXG4gICAgY2hlbmdlSW5mbzJCdG5UZXh0KCl7XHJcbiAgICAgICAgY2MuZmluZChcIkJ0bl9DbG9zZS9MYWJlbFwiLHRoaXMuaW5mbzIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLpl5zplolcIlxyXG4gICAgfVxyXG59Il19