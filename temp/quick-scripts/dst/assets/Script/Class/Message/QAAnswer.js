
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