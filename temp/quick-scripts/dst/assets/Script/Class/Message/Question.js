
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Message/Question.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b5050WjMtJOBYlBW3+YIYzP', 'Question');
// Script/Class/Message/Question.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonMng_1 = require("../../Data/base/ButtonMng");
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var Commad_1 = require("../../Enum/Commad");
var GameEvent_1 = require("../../Enum/GameEvent");
var GameModle_1 = require("../../GameModle");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Question = /** @class */ (function (_super) {
    __extends(Question, _super);
    function Question() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Question.prototype.onLoad = function () {
        this.title = cc.find("Title", this.node).getComponent(cc.Label);
        this.item_Btn = cc.find("item_Btn", this.node);
        this.scrollView = cc.find("scroll_Info", this.node).getComponent(cc.ScrollView);
        this.info_Text = cc.find("Text", this.scrollView.content).getComponent(cc.Label);
        this.info_Choose = cc.find("Choose", this.scrollView.content).getComponent(cc.Label);
        this.info_Normal_5 = cc.find("Normal_5", this.scrollView.content);
        this.info_Normal_9 = cc.find("Normal_9", this.scrollView.content);
        this.content_Btn = cc.find("con_Btn", this.node);
        this.defaultReset();
    };
    Question.prototype.start = function () {
        // this.info_Text.string = ""
        this.content_Btn.removeAllChildren();
        for (var index = 0; index < 3; index++) {
            var _node = cc.instantiate(this.item_Btn);
            _node.active = true;
            var getStr = GameModle_1.default.englishLib.returnEnglish(index);
            this.content_Btn.addChild(_node, cc.macro.MIN_ZINDEX, getStr);
            cc.find("Text", _node).getComponent(cc.Label).string = getStr;
            _node.y = 0;
            var getIndex = GameModle_1.default.englishLib.returnEnglish(index); //轉換ABC
            ButtonMng_1.default.addEvent(this.node, "Question", "checkAnswer", _node.getComponent(cc.Button), getIndex);
        }
        // this.scrollView.scrollToTop(0.1)
        this.item_Btn.active = false;
        this.title.string = "題目";
    };
    Question.prototype.reset = function () {
        this.info_Normal_5.active = false;
        this.info_Normal_9.active = false;
    };
    Question.prototype.setQAInfo = function (str, _level, _qaNum) {
        console.log(_level, _qaNum);
        if (_level == 1 && (_qaNum == 4 || _qaNum == 8)) {
            switch (_qaNum) {
                case 4:
                    this.info_Normal_5.active = true;
                    break;
                case 8:
                    this.info_Normal_9.active = true;
                    break;
            }
        }
        this.info_Text.node.active = true;
        this.info_Text.string = str;
    };
    Question.prototype.setChoose = function (str) {
        this.info_Choose.node.active = true;
        this.info_Choose.string = str;
    };
    Question.prototype.checkAnswer = function (e, _customEventData) {
        GameModle_1.default.chooseAnswer = _customEventData;
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndQA);
        // console.log(e, _customEventData);
        //開始接中央
    };
    Question = __decorate([
        ccclass
    ], Question);
    return Question;
}(ComponentBase_1.default));
exports.default = Question;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcUXVlc3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUMxRCw0Q0FBNkM7QUFDN0Msa0RBQWlEO0FBQ2pELDZDQUF3QztBQUdsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBYTtJQUFuRDs7SUF5RUEsQ0FBQztJQTdEYSx5QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsYUFB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QUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUNELDhCQUFXLEdBQVgsVUFBWSxDQUFXLEVBQUUsZ0JBQXdCO1FBQzdDLG1CQUFTLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFBO1FBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNyRCxvQ0FBb0M7UUFDcEMsT0FBTztJQUNYLENBQUM7SUF4RWdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F5RTVCO0lBQUQsZUFBQztDQXpFRCxBQXlFQyxDQXpFcUMsdUJBQWEsR0F5RWxEO2tCQXpFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b25NbmcgZnJvbSBcIi4uLy4uL0RhdGEvYmFzZS9CdXR0b25NbmdcIjtcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSBcIi4uLy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlXCI7XHJcbmltcG9ydCB7IENvbW1hbW5kIH0gZnJvbSBcIi4uLy4uL0VudW0vQ29tbWFkXCI7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gXCIuLi8uLi9FbnVtL0dhbWVFdmVudFwiO1xyXG5pbXBvcnQgR2FtZU1vZGxlIGZyb20gXCIuLi8uLi9HYW1lTW9kbGVcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb24gZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIHRpdGxlOiBjYy5MYWJlbDtcclxuICAgIGluZm9fVGV4dDogY2MuTGFiZWw7XHJcbiAgICBpbmZvX0Nob29zZTogY2MuTGFiZWw7XHJcbiAgICBpbmZvX05vcm1hbF81OiBjYy5Ob2RlXHJcbiAgICBpbmZvX05vcm1hbF85OiBjYy5Ob2RlXHJcbiAgICBpdGVtX0J0bjogY2MuTm9kZTtcclxuXHJcblxyXG4gICAgc2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlld1xyXG5cclxuICAgIGNvbnRlbnRfQnRuOiBjYy5Ob2RlO1xyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gY2MuZmluZChcIlRpdGxlXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLml0ZW1fQnRuID0gY2MuZmluZChcIml0ZW1fQnRuXCIsIHRoaXMubm9kZSlcclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3ID0gY2MuZmluZChcInNjcm9sbF9JbmZvXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpO1xyXG4gICAgICAgIHRoaXMuaW5mb19UZXh0ID0gY2MuZmluZChcIlRleHRcIiwgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5pbmZvX0Nob29zZSA9IGNjLmZpbmQoXCJDaG9vc2VcIiwgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5pbmZvX05vcm1hbF81ID0gY2MuZmluZChcIk5vcm1hbF81XCIsIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50KTtcclxuICAgICAgICB0aGlzLmluZm9fTm9ybWFsXzkgPSBjYy5maW5kKFwiTm9ybWFsXzlcIiwgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQpO1xyXG4gICAgICAgIHRoaXMuY29udGVudF9CdG4gPSBjYy5maW5kKFwiY29uX0J0blwiLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFJlc2V0KClcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLmluZm9fVGV4dC5zdHJpbmcgPSBcIlwiXHJcbiAgICAgICAgdGhpcy5jb250ZW50X0J0bi5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAzOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBfbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbV9CdG4pXHJcbiAgICAgICAgICAgIF9ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgbGV0IGdldFN0ciA9IEdhbWVNb2RsZS5lbmdsaXNoTGliLnJldHVybkVuZ2xpc2goaW5kZXgpXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudF9CdG4uYWRkQ2hpbGQoX25vZGUsIGNjLm1hY3JvLk1JTl9aSU5ERVgsIGdldFN0cilcclxuICAgICAgICAgICAgY2MuZmluZChcIlRleHRcIiwgX25vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZ2V0U3RyXHJcbiAgICAgICAgICAgIF9ub2RlLnkgPSAwXHJcblxyXG4gICAgICAgICAgICBsZXQgZ2V0SW5kZXggPSBHYW1lTW9kbGUuZW5nbGlzaExpYi5yZXR1cm5FbmdsaXNoKGluZGV4KS8v6L2J5o+bQUJDXHJcbiAgICAgICAgICAgIEJ1dHRvbk1uZy5hZGRFdmVudCh0aGlzLm5vZGUsIFwiUXVlc3Rpb25cIiwgXCJjaGVja0Fuc3dlclwiLCBfbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSwgZ2V0SW5kZXgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb1RvcCgwLjEpXHJcbiAgICAgICAgdGhpcy5pdGVtX0J0bi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudGl0bGUuc3RyaW5nID0gXCLpoYznm65cIlxyXG4gICAgfVxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbmZvX05vcm1hbF81LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pbmZvX05vcm1hbF85LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBzZXRRQUluZm8oc3RyOiBzdHJpbmcsIF9sZXZlbDogbnVtYmVyLCBfcWFOdW06IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKF9sZXZlbCwgX3FhTnVtKTtcclxuXHJcbiAgICAgICAgaWYgKF9sZXZlbCA9PSAxICYmIChfcWFOdW0gPT0gNCB8fCBfcWFOdW0gPT0gOCkpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfcWFOdW0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZm9fTm9ybWFsXzUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5mb19Ob3JtYWxfOS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmZvX1RleHQubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5pbmZvX1RleHQuc3RyaW5nID0gc3RyXHJcblxyXG4gICAgfVxyXG4gICAgc2V0Q2hvb3NlKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pbmZvX0Nob29zZS5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmluZm9fQ2hvb3NlLnN0cmluZyA9IHN0clxyXG4gICAgfVxyXG4gICAgY2hlY2tBbnN3ZXIoZTogY2MuRXZlbnQsIF9jdXN0b21FdmVudERhdGE6IHN0cmluZykge1xyXG4gICAgICAgIEdhbWVNb2RsZS5jaG9vc2VBbnN3ZXIgPSBfY3VzdG9tRXZlbnREYXRhXHJcbiAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5FbmRRQSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLCBfY3VzdG9tRXZlbnREYXRhKTtcclxuICAgICAgICAvL+mWi+Wni+aOpeS4reWkrlxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19