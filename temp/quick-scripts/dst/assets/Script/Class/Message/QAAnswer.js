
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
var MusciMng_1 = require("../../Data/base/MusciMng");
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
                MusciMng_1.default.effectPlay("BtnClick");
                this.hide();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcUUFBbnN3ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUMxRCxxREFBZ0Q7QUFDaEQsNENBQTZDO0FBQzdDLGtEQUFpRDtBQUMzQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBYTtJQUFuRDs7SUFtRkEsQ0FBQztJQTVFYSx5QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQy9FLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzlDLGtDQUFrQztJQUV0QyxDQUFDO0lBQ1Msd0JBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUM1QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFDRCx3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QUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDL0UsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQVRBLEFBU0MsQ0FUa0IsdUJBQWEsR0FTL0I7QUFFRDtJQUFrQix1QkFBYTtJQUEvQjs7SUFVQSxDQUFDO0lBTmEsb0JBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzdELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVMLFVBQUM7QUFBRCxDQVZBLEFBVUMsQ0FWaUIsdUJBQWEsR0FVOUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXRNbmcgZnJvbSAnLi4vLi4vQXNzZXQvQXNzZXRNbmcnO1xyXG5pbXBvcnQgQnV0dG9uTW5nIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9CdXR0b25NbmcnO1xyXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tICcuLi8uLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZSc7XHJcbmltcG9ydCBNdXNjaU1uZyBmcm9tICcuLi8uLi9EYXRhL2Jhc2UvTXVzY2lNbmcnO1xyXG5pbXBvcnQgeyBDb21tYW1uZCB9IGZyb20gJy4uLy4uL0VudW0vQ29tbWFkJztcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSAnLi4vLi4vRW51bS9HYW1lRXZlbnQnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUUFBbnN3ZXIgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGl0ZW1fQnRuOiBjYy5Ob2RlO1xyXG4gICAgYmVhcjogQmVhcjtcclxuICAgIGxhYmVsX21lc3NhZ2U6IGNjLkxhYmVsO1xyXG5cclxuICAgIGNvbl9CdG46IGNjLk5vZGU7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJlYXIgPSBjYy5maW5kKFwiQmVhclwiLCB0aGlzLm5vZGUpLmFkZENvbXBvbmVudChCZWFyKTtcclxuICAgICAgICB0aGlzLmxhYmVsX21lc3NhZ2UgPSBjYy5maW5kKFwiTWVzc2FnZS9MYWJlbFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICB0aGlzLmNvbl9CdG4gPSBjYy5maW5kKFwiQ29uX0J0blwiLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5pdGVtX0J0biA9IGNjLmZpbmQoXCJJdGVtX0J0blwiLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgLy8gdGhpcy5pdGVtX0J0bi5hZGRDb21wb25lbnQoQnRuKVxyXG5cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1fQnRuLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0UmVzZXQoKVxyXG4gICAgICAgIHRoaXMucmVzZXQoKVxyXG4gICAgfVxyXG4gICAgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZWFyLmJlYXJBbmltYXRpb24uc3RvcCgpXHJcbiAgICAgICAgdGhpcy5iZWFyLmJlYXJTcHJpdGUuc3ByaXRlRnJhbWUgPSBudWxsXHJcbiAgICAgICAgLy8gdGhpcy5iZWFyLmFuc3dlclNwcnRpZS5zcHJpdGVGcmFtZSA9IG51bGxcclxuICAgICAgICB0aGlzLmNvbl9CdG4ucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLmxhYmVsX21lc3NhZ2Uuc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICB9XHJcbiAgICB0cnVlQW5zd2VyKCkge1xyXG4gICAgICAgIHRoaXMubGFiZWxfbWVzc2FnZS5zdHJpbmcgPSBcIuaBreWWnOetlOWwjSEhXCI7XHJcblxyXG4gICAgICAgIGxldCBfbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbV9CdG4pXHJcbiAgICAgICAgdGhpcy5jb25fQnRuLmFkZENoaWxkKF9ub2RlLCBjYy5tYWNyby5NQVhfWklOREVYKVxyXG4gICAgICAgIGNjLmZpbmQoXCJMYWJlbFwiLCBfbm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuips+ino1wiXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJRQUFuc3dlclwiLCBcIndoaWNoR09cIiwgX25vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbiksIFwiMFwiKVxyXG4gICAgICAgIF9ub2RlLnNldFBvc2l0aW9uKDAsIDApXHJcbiAgICAgICAgX25vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgIF9ub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtX0J0bilcclxuICAgICAgICB0aGlzLmNvbl9CdG4uYWRkQ2hpbGQoX25vZGUsIGNjLm1hY3JvLk1BWF9aSU5ERVgpXHJcbiAgICAgICAgY2MuZmluZChcIkxhYmVsXCIsIF9ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi57m857qMXCJcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIlFBQW5zd2VyXCIsIFwid2hpY2hHT1wiLCBfbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSwgXCIxXCIpXHJcbiAgICAgICAgX25vZGUuc2V0UG9zaXRpb24oMCwgMClcclxuICAgICAgICBfbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmJlYXIuYmVhckFuaW1hdGlvbi5wbGF5KFwiQmVhcl9UcnVlXCIpXHJcbiAgICAgICAgLy8gdGhpcy5iZWFyLmJlYXJTcHJpdGUuc3ByaXRlRnJhbWUgPSBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIlwiKVxyXG4gICAgICAgIC8vIHRoaXMuYmVhci5hbnN3ZXJTcHJ0aWUuc3ByaXRlRnJhbWUgPSBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIlwiKVxyXG4gICAgfVxyXG5cclxuICAgIGZhbHNlQW5zd2VyKCkge1xyXG4gICAgICAgIHRoaXMubGFiZWxfbWVzc2FnZS5zdHJpbmcgPSBcIuetlOahiOmMr+iqpCFcXG5cXHLoq4vlho3mjqXlho3ljrIhISFcIjtcclxuXHJcblxyXG4gICAgICAgIGxldCBfbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbV9CdG4pXHJcbiAgICAgICAgdGhpcy5jb25fQnRuLmFkZENoaWxkKF9ub2RlLCBjYy5tYWNyby5NQVhfWklOREVYKVxyXG4gICAgICAgIGNjLmZpbmQoXCJMYWJlbFwiLCBfbm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuWbnuWIsOmhjOebrlwiXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJRQUFuc3dlclwiLCBcIndoaWNoR09cIiwgX25vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbiksIFwiMlwiKVxyXG4gICAgICAgIF9ub2RlLnNldFBvc2l0aW9uKDAsIDApXHJcbiAgICAgICAgX25vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5iZWFyLmJlYXJBbmltYXRpb24ucGxheShcIkJlYXJfRmFsc2VcIilcclxuICAgICAgICAvLyB0aGlzLmJlYXIuYmVhclNwcml0ZS5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiXCIpXHJcbiAgICAgICAgLy8gdGhpcy5iZWFyLmFuc3dlclNwcnRpZS5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiXCIpXHJcblxyXG4gICAgfVxyXG4gICAgYXN5bmMgd2hpY2hHTyhlOiBjYy5FdmVudCwgX2N1c3RvbUV2ZW50RGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgTXVzY2lNbmcuZWZmZWN0UGxheShcIkJ0bkNsaWNrXCIpXHJcbiAgICAgICAgdGhpcy5oaWRlKClcclxuICAgICAgICBzd2l0Y2ggKE51bWJlcihfY3VzdG9tRXZlbnREYXRhKSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6Ly/oqbPop6NcclxuICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuU2hvd0V4cGxhaW4pXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDE6Ly/kuIvkuIDmtYHnqIso6Zec6ZaJ55Wr6Z2i5b6M5Zue5Yiw54Gr6LuK55Wr6Z2iKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5FbmRBbnN3ZXIpXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDI6Ly/nrZTpjK/lm57liLDkuIrkuIDlgIvnlavpnaJcclxuICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuU2hvd0FnYWluUUEpXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIEJlYXIgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGJlYXJBbmltYXRpb246IGNjLkFuaW1hdGlvbjtcclxuICAgIGJlYXJTcHJpdGU6IGNjLlNwcml0ZTtcclxuICAgIGFuc3dlclNwcnRpZTogY2MuU3ByaXRlO1xyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJlYXJBbmltYXRpb24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICB0aGlzLmJlYXJTcHJpdGUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICB0aGlzLmFuc3dlclNwcnRpZSA9IGNjLmZpbmQoXCJIYW5kL0ljb25cIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBCdG4gZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIHN0cjogY2MuTGFiZWw7XHJcbiAgICBidXR0b246IGNjLkJ1dHRvbjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RyID0gY2MuZmluZChcIkxhYmVsXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgY29uc29sZS5sb2coXCIhISEhISEhISE/XCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=