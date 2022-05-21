
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/UI/Props_Feature.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f944L5z/xKur9JQ+f4SeDm', 'Props_Feature');
// Script/Class/UI/Props_Feature.ts

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
var AssetMng_1 = require("../../Asset/AssetMng");
var ButtonMng_1 = require("../../Data/base/ButtonMng");
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var MusciMng_1 = require("../../Data/base/MusciMng");
var Commad_1 = require("../../Enum/Commad");
var GameEvent_1 = require("../../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Props_Feature = /** @class */ (function (_super) {
    __extends(Props_Feature, _super);
    function Props_Feature() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isGo = false;
        return _this;
    }
    Props_Feature.prototype.onLoad = function () {
        this.btn_Start_Stop = cc.find("BG_Layout/Start_Stop", this.node).getComponent(cc.Button);
        this.sprtie_start_Stop = cc.find("BG_Layout/Start_Stop/icon", this.node).getComponent(cc.Sprite);
        this.skip = cc.find("BG_Layout/Skip", this.node).getComponent(cc.Button);
        this.resetView = cc.find("BG_Layout/ResetView", this.node).getComponent(cc.Button);
        this.info0 = cc.find('Info0', this.node);
        this.info1 = cc.find('Info1', this.node);
        this.Props5 = cc.find("BG_Layout/Props5/icon", this.node).getComponent(cc.Sprite);
        this.Props11 = cc.find("BG_Layout/Props11/icon", this.node).getComponent(cc.Sprite);
        this.Props15 = cc.find("BG_Layout/Props15/icon", this.node).getComponent(cc.Sprite);
        console.log(this.Props5);
        ButtonMng_1.default.addEvent(this.node, "Props_Feature", "eventStart_Stop", this.btn_Start_Stop);
        ButtonMng_1.default.addEvent(this.node, "Props_Feature", "eventSkip", this.skip);
        ButtonMng_1.default.addEvent(this.node, "Props_Feature", "evetResetView", this.resetView);
        this.info0.active = false;
        this.info1.active = false;
    };
    Props_Feature.prototype.eventStart_Stop = function (e, _customEventData) {
        MusciMng_1.default.effectPlay("BtnClick");
        if (!this.isGo)
            this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.MenGO);
        else
            this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.ManWait);
        this.setStart_Stop();
    };
    Props_Feature.prototype.eventSkip = function (e, _customEventData) {
        MusciMng_1.default.effectPlay("BtnClick");
        this.EventEmit(GameEvent_1.GameEvent.ManSkip);
    };
    Props_Feature.prototype.evetResetView = function (e, _customEventData) {
        MusciMng_1.default.effectPlay("BtnClick");
        this.EventEmit(GameEvent_1.GameEvent.MoveToManCamera);
    };
    /**
     *
     * @param isboolean isGO?
     */
    Props_Feature.prototype.setStart_Stop = function (isboolean) {
        console.error(isboolean);
        this.isGo = isboolean == null || isboolean == undefined ? !this.isGo : isboolean;
        var getBoolean = this.isGo ? "Stop" : "Start"; //要相反，如果正在走就要顯示停止
        this.sprtie_start_Stop.node.x = this.isGo ? 0 : 4.5;
        this.sprtie_start_Stop.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Feature_" + getBoolean);
    };
    Props_Feature.prototype.getProps = function (_num) {
        console.log(AssetMng_1.default.data_SprtieAtlas.get("Props_" + _num));
        switch (_num) {
            case 5:
                this.Props5.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Props_" + _num);
                break;
            case 11:
                this.Props11.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Props_" + _num);
                break;
            case 15:
                this.Props15.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Props_" + _num);
                break;
            default:
                break;
        }
    };
    Props_Feature = __decorate([
        ccclass
    ], Props_Feature);
    return Props_Feature;
}(ComponentBase_1.default));
exports.default = Props_Feature;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcVUlcXFByb3BzX0ZlYXR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCwrREFBMEQ7QUFDMUQscURBQWdEO0FBQ2hELDRDQUE2QztBQUM3QyxrREFBaUQ7QUFDM0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQWE7SUFBeEQ7UUFBQSxxRUFvRkM7UUFuRkcsVUFBSSxHQUFZLEtBQUssQ0FBQzs7SUFtRjFCLENBQUM7SUF2RWEsOEJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEcsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUVsRixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElB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QUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDbkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxrQkFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUE7SUFDL0YsQ0FBQztJQUdELGdDQUFRLEdBQVIsVUFBUyxJQUFZO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFNUQsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsa0JBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBO2dCQUN4RSxNQUFNO1lBQ1YsS0FBSyxFQUFFO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLGtCQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQTtnQkFDekUsTUFBTTtZQUNWLEtBQUssRUFBRTtnQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxrQkFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUE7Z0JBQ3pFLE1BQU07WUFDVjtnQkFDSSxNQUFNO1NBQ2I7SUFFTCxDQUFDO0lBbEZnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBb0ZqQztJQUFELG9CQUFDO0NBcEZELEFBb0ZDLENBcEYwQyx1QkFBYSxHQW9GdkQ7a0JBcEZvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0TW5nIGZyb20gJy4uLy4uL0Fzc2V0L0Fzc2V0TW5nJztcclxuaW1wb3J0IEJ1dHRvbk1uZyBmcm9tICcuLi8uLi9EYXRhL2Jhc2UvQnV0dG9uTW5nJztcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2UnO1xyXG5pbXBvcnQgTXVzY2lNbmcgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL011c2NpTW5nJztcclxuaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tICcuLi8uLi9FbnVtL0NvbW1hZCc7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gJy4uLy4uL0VudW0vR2FtZUV2ZW50JztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BzX0ZlYXR1cmUgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGlzR286IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGJ0bl9TdGFydF9TdG9wOiBjYy5CdXR0b247XHJcbiAgICBzcHJ0aWVfc3RhcnRfU3RvcDogY2MuU3ByaXRlXHJcbiAgICBza2lwOiBjYy5CdXR0b25cclxuICAgIHJlc2V0VmlldzogY2MuQnV0dG9uXHJcblxyXG4gICAgUHJvcHM1OiBjYy5TcHJpdGU7XHJcbiAgICBQcm9wczExOiBjYy5TcHJpdGU7XHJcbiAgICBQcm9wczE1OiBjYy5TcHJpdGU7XHJcblxyXG4gICAgaW5mbzA6IGNjLk5vZGVcclxuICAgIGluZm8xOiBjYy5Ob2RlXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYnRuX1N0YXJ0X1N0b3AgPSBjYy5maW5kKFwiQkdfTGF5b3V0L1N0YXJ0X1N0b3BcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMuc3BydGllX3N0YXJ0X1N0b3AgPSBjYy5maW5kKFwiQkdfTGF5b3V0L1N0YXJ0X1N0b3AvaWNvblwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgdGhpcy5za2lwID0gY2MuZmluZChcIkJHX0xheW91dC9Ta2lwXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLnJlc2V0VmlldyA9IGNjLmZpbmQoXCJCR19MYXlvdXQvUmVzZXRWaWV3XCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuXHJcbiAgICAgICAgdGhpcy5pbmZvMCA9IGNjLmZpbmQoJ0luZm8wJywgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuaW5mbzEgPSBjYy5maW5kKCdJbmZvMScsIHRoaXMubm9kZSlcclxuXHJcbiAgICAgICAgdGhpcy5Qcm9wczUgPSBjYy5maW5kKFwiQkdfTGF5b3V0L1Byb3BzNS9pY29uXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICB0aGlzLlByb3BzMTEgPSBjYy5maW5kKFwiQkdfTGF5b3V0L1Byb3BzMTEvaWNvblwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgdGhpcy5Qcm9wczE1ID0gY2MuZmluZChcIkJHX0xheW91dC9Qcm9wczE1L2ljb25cIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuUHJvcHM1KTtcclxuXHJcblxyXG4gICAgICAgIEJ1dHRvbk1uZy5hZGRFdmVudCh0aGlzLm5vZGUsIFwiUHJvcHNfRmVhdHVyZVwiLCBcImV2ZW50U3RhcnRfU3RvcFwiLCB0aGlzLmJ0bl9TdGFydF9TdG9wKVxyXG4gICAgICAgIEJ1dHRvbk1uZy5hZGRFdmVudCh0aGlzLm5vZGUsIFwiUHJvcHNfRmVhdHVyZVwiLCBcImV2ZW50U2tpcFwiLCB0aGlzLnNraXApXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJQcm9wc19GZWF0dXJlXCIsIFwiZXZldFJlc2V0Vmlld1wiLCB0aGlzLnJlc2V0VmlldylcclxuXHJcblxyXG4gICAgICAgIHRoaXMuaW5mbzAuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmluZm8xLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBldmVudFN0YXJ0X1N0b3AoZTogY2MuRXZlbnQsIF9jdXN0b21FdmVudERhdGE6IHN0cmluZykge1xyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJCdG5DbGlja1wiKVxyXG4gICAgICAgIGlmICghdGhpcy5pc0dvKVxyXG4gICAgICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLk1lbkdPKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuTWFuV2FpdClcclxuICAgICAgICB0aGlzLnNldFN0YXJ0X1N0b3AoKVxyXG4gICAgfVxyXG4gICAgZXZlbnRTa2lwKGU6IGNjLkV2ZW50LCBfY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBNdXNjaU1uZy5lZmZlY3RQbGF5KFwiQnRuQ2xpY2tcIilcclxuICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuTWFuU2tpcClcclxuICAgIH1cclxuICAgIGV2ZXRSZXNldFZpZXcoZTogY2MuRXZlbnQsIF9jdXN0b21FdmVudERhdGE6IHN0cmluZykge1xyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJCdG5DbGlja1wiKVxyXG4gICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5Nb3ZlVG9NYW5DYW1lcmEpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGlzYm9vbGVhbiBpc0dPP1xyXG4gICAgICovXHJcbiAgICBzZXRTdGFydF9TdG9wKGlzYm9vbGVhbj86IGJvb2xlYW4pIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGlzYm9vbGVhbik7XHJcbiAgICAgICAgdGhpcy5pc0dvID0gaXNib29sZWFuID09IG51bGwgfHwgaXNib29sZWFuID09IHVuZGVmaW5lZCA/ICF0aGlzLmlzR28gOiBpc2Jvb2xlYW5cclxuICAgICAgICBsZXQgZ2V0Qm9vbGVhbiA9IHRoaXMuaXNHbyA/IFwiU3RvcFwiIDogXCJTdGFydFwiLy/opoHnm7jlj43vvIzlpoLmnpzmraPlnKjotbDlsLHopoHpoa/npLrlgZzmraJcclxuICAgICAgICB0aGlzLnNwcnRpZV9zdGFydF9TdG9wLm5vZGUueCA9IHRoaXMuaXNHbyA/IDAgOiA0LjVcclxuICAgICAgICB0aGlzLnNwcnRpZV9zdGFydF9TdG9wLnNwcml0ZUZyYW1lID0gQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJGZWF0dXJlX1wiICsgZ2V0Qm9vbGVhbilcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0UHJvcHMoX251bTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJQcm9wc19cIiArIF9udW0pKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChfbnVtKSB7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHRoaXMuUHJvcHM1LnNwcml0ZUZyYW1lID0gQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJQcm9wc19cIiArIF9udW0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuUHJvcHMxMS5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiUHJvcHNfXCIgKyBfbnVtKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLlByb3BzMTUuc3ByaXRlRnJhbWUgPSBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIlByb3BzX1wiICsgX251bSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0iXX0=