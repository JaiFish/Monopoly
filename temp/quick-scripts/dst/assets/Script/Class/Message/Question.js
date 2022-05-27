
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
var MusciMng_1 = require("../../Data/base/MusciMng");
var Commad_1 = require("../../Enum/Commad");
var GameEvent_1 = require("../../Enum/GameEvent");
var GameModle_1 = require("../../GameModle");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Question = /** @class */ (function (_super) {
    __extends(Question, _super);
    function Question() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseHight_Text = -20;
        _this.hightSpacting = -30;
        return _this;
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
        this.scrollView.scrollToTop(0.1);
    };
    Question.prototype.setQAInfo = function (str, _level, _qaNum) {
        // console.log(_level, _qaNum);
        this.reset();
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
        this.checkLenght(str);
    };
    Question.prototype.setChoose = function (str) {
        this.info_Choose.node.active = true;
        this.info_Choose.string = str;
    };
    Question.prototype.checkAnswer = function (e, _customEventData) {
        GameModle_1.default.chooseAnswer = _customEventData;
        MusciMng_1.default.effectPlay("BtnClick");
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndQA);
        // console.log(e, _customEventData);
        //開始接中央
    };
    Question.prototype.checkLenght = function (str) {
        var getHight = 1 + (Math.floor(str.length / 32)); //為了相乘公式必須_+1 不然0行= 0
        this.scrollView.content.getComponent(cc.Layout).spacingY = this.baseHight_Text + (this.hightSpacting * getHight);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcUXVlc3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUMxRCxxREFBZ0Q7QUFDaEQsNENBQTZDO0FBQzdDLGtEQUFpRDtBQUNqRCw2Q0FBd0M7QUFHbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQWE7SUFBbkQ7UUFBQSxxRUFzRkM7UUE5RUcsb0JBQWMsR0FBVyxDQUFDLEVBQUUsQ0FBQTtRQUM1QixtQkFBYSxHQUFXLENBQUMsRUFBRSxDQUFBOztJQTZFL0IsQ0FBQztJQXZFYSx5QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBQ1Msd0JBQUssR0FBZjtRQUNJLDZCQUE2QjtRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDckMsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNwQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUN6QyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUNuQixJQUFJLE1BQU0sR0FBRyxtQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1lBQzdELEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtZQUM3RCxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUVYLElBQUksUUFBUSxHQUFHLG1CQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFBLE9BQU87WUFDL0QsbUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1NBQ3BHO1FBQ0QsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDNUIsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFDRCw0QkFBUyxHQUFULFVBQVUsR0FBVyxFQUFFLE1BQWMsRUFBRSxNQUFjO1FBQ2pELCtCQUErQjtRQUcvQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDWixJQUFJLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRTtZQUM3QyxRQUFRLE1BQU0sRUFBRTtnQkFDWixLQUFLLENBQUM7b0JBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO29CQUNoQyxNQUFNO2dCQUNWLEtBQUssQ0FBQztvQkFDRixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7b0JBQ2hDLE1BQU07YUFDYjtTQUNKO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBQ0QsNEJBQVMsR0FBVCxVQUFVLEdBQVc7UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUNELDhCQUFXLEdBQVgsVUFBWSxDQUFXLEVBQUUsZ0JBQXdCO1FBQzdDLG1CQUFTLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFBO1FBQ3pDLGtCQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNyRCxvQ0FBb0M7UUFDcEMsT0FBTztJQUNYLENBQUM7SUFDRCw4QkFBVyxHQUFYLFVBQVksR0FBVztRQUNuQixJQUFJLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDLHFCQUFxQjtRQUN0RSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsQ0FBQTtJQUVwSCxDQUFDO0lBckZnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBc0Y1QjtJQUFELGVBQUM7Q0F0RkQsQUFzRkMsQ0F0RnFDLHVCQUFhLEdBc0ZsRDtrQkF0Rm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uTW5nIGZyb20gXCIuLi8uLi9EYXRhL2Jhc2UvQnV0dG9uTW5nXCI7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuLi8uLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZVwiO1xyXG5pbXBvcnQgTXVzY2lNbmcgZnJvbSBcIi4uLy4uL0RhdGEvYmFzZS9NdXNjaU1uZ1wiO1xyXG5pbXBvcnQgeyBDb21tYW1uZCB9IGZyb20gXCIuLi8uLi9FbnVtL0NvbW1hZFwiO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tIFwiLi4vLi4vRW51bS9HYW1lRXZlbnRcIjtcclxuaW1wb3J0IEdhbWVNb2RsZSBmcm9tIFwiLi4vLi4vR2FtZU1vZGxlXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICB0aXRsZTogY2MuTGFiZWw7XHJcbiAgICBpbmZvX1RleHQ6IGNjLkxhYmVsO1xyXG4gICAgaW5mb19DaG9vc2U6IGNjLkxhYmVsO1xyXG4gICAgaW5mb19Ob3JtYWxfNTogY2MuTm9kZVxyXG4gICAgaW5mb19Ob3JtYWxfOTogY2MuTm9kZVxyXG4gICAgaXRlbV9CdG46IGNjLk5vZGU7XHJcblxyXG4gICAgYmFzZUhpZ2h0X1RleHQ6IG51bWJlciA9IC0yMFxyXG4gICAgaGlnaHRTcGFjdGluZzogbnVtYmVyID0gLTMwXHJcblxyXG5cclxuICAgIHNjcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXdcclxuXHJcbiAgICBjb250ZW50X0J0bjogY2MuTm9kZTtcclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IGNjLmZpbmQoXCJUaXRsZVwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5pdGVtX0J0biA9IGNjLmZpbmQoXCJpdGVtX0J0blwiLCB0aGlzLm5vZGUpXHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldyA9IGNjLmZpbmQoXCJzY3JvbGxfSW5mb1wiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcclxuICAgICAgICB0aGlzLmluZm9fVGV4dCA9IGNjLmZpbmQoXCJUZXh0XCIsIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50KS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuaW5mb19DaG9vc2UgPSBjYy5maW5kKFwiQ2hvb3NlXCIsIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50KS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuaW5mb19Ob3JtYWxfNSA9IGNjLmZpbmQoXCJOb3JtYWxfNVwiLCB0aGlzLnNjcm9sbFZpZXcuY29udGVudCk7XHJcbiAgICAgICAgdGhpcy5pbmZvX05vcm1hbF85ID0gY2MuZmluZChcIk5vcm1hbF85XCIsIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50KTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRfQnRuID0gY2MuZmluZChcImNvbl9CdG5cIiwgdGhpcy5ub2RlKTtcclxuXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0UmVzZXQoKVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuaW5mb19UZXh0LnN0cmluZyA9IFwiXCJcclxuICAgICAgICB0aGlzLmNvbnRlbnRfQnRuLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDM7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IF9ub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtX0J0bilcclxuICAgICAgICAgICAgX25vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBsZXQgZ2V0U3RyID0gR2FtZU1vZGxlLmVuZ2xpc2hMaWIucmV0dXJuRW5nbGlzaChpbmRleClcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50X0J0bi5hZGRDaGlsZChfbm9kZSwgY2MubWFjcm8uTUlOX1pJTkRFWCwgZ2V0U3RyKVxyXG4gICAgICAgICAgICBjYy5maW5kKFwiVGV4dFwiLCBfbm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBnZXRTdHJcclxuICAgICAgICAgICAgX25vZGUueSA9IDBcclxuXHJcbiAgICAgICAgICAgIGxldCBnZXRJbmRleCA9IEdhbWVNb2RsZS5lbmdsaXNoTGliLnJldHVybkVuZ2xpc2goaW5kZXgpLy/ovYnmj5tBQkNcclxuICAgICAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJRdWVzdGlvblwiLCBcImNoZWNrQW5zd2VyXCIsIF9ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLCBnZXRJbmRleClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvVG9wKDAuMSlcclxuICAgICAgICB0aGlzLml0ZW1fQnRuLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy50aXRsZS5zdHJpbmcgPSBcIumhjOebrlwiXHJcbiAgICB9XHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmluZm9fTm9ybWFsXzUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmluZm9fTm9ybWFsXzkuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9Ub3AoMC4xKVxyXG4gICAgfVxyXG4gICAgc2V0UUFJbmZvKHN0cjogc3RyaW5nLCBfbGV2ZWw6IG51bWJlciwgX3FhTnVtOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhfbGV2ZWwsIF9xYU51bSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnJlc2V0KClcclxuICAgICAgICBpZiAoX2xldmVsID09IDEgJiYgKF9xYU51bSA9PSA0IHx8IF9xYU51bSA9PSA4KSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9xYU51bSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5mb19Ob3JtYWxfNS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmZvX05vcm1hbF85LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZm9fVGV4dC5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmluZm9fVGV4dC5zdHJpbmcgPSBzdHJcclxuICAgICAgICB0aGlzLmNoZWNrTGVuZ2h0KHN0cilcclxuICAgIH1cclxuICAgIHNldENob29zZShzdHI6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaW5mb19DaG9vc2Uubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5pbmZvX0Nob29zZS5zdHJpbmcgPSBzdHJcclxuICAgIH1cclxuICAgIGNoZWNrQW5zd2VyKGU6IGNjLkV2ZW50LCBfY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBHYW1lTW9kbGUuY2hvb3NlQW5zd2VyID0gX2N1c3RvbUV2ZW50RGF0YVxyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJCdG5DbGlja1wiKVxyXG4gICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuRW5kUUEpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZSwgX2N1c3RvbUV2ZW50RGF0YSk7XHJcbiAgICAgICAgLy/plovlp4vmjqXkuK3lpK5cclxuICAgIH1cclxuICAgIGNoZWNrTGVuZ2h0KHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGdldEhpZ2h0ID0gMSArIChNYXRoLmZsb29yKHN0ci5sZW5ndGggLyAzMikpIC8v54K65LqG55u45LmY5YWs5byP5b+F6aCIXysxIOS4jeeEtjDooYw9IDBcclxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWSA9IHRoaXMuYmFzZUhpZ2h0X1RleHQgKyAodGhpcy5oaWdodFNwYWN0aW5nICogZ2V0SGlnaHQpXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19