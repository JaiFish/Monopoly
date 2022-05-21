"use strict";
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
        MusciMng_1.default.effectPlay("BtnClick");
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