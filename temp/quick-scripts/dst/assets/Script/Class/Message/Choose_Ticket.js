
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Message/Choose_Ticket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0345AV5/BOk4zD9ecIh3a7', 'Choose_Ticket');
// Script/Class/Message/Choose_Ticket.ts

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
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var MusciMng_1 = require("../../Data/base/MusciMng");
var Commad_1 = require("../../Enum/Commad");
var GameEvent_1 = require("../../Enum/GameEvent");
var onClick_1 = require("../../Enum/onClick");
var GameModle_1 = require("../../GameModle");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Choose_Ticket = /** @class */ (function (_super) {
    __extends(Choose_Ticket, _super);
    function Choose_Ticket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Choose_Ticket.prototype.onLoad = function () {
        this.btn_Blue = cc.find("Layout/Blue/btn_Check", this.node);
        this.btn_Red = cc.find("Layout/Red/btn_Check", this.node);
        this.btn_Green = cc.find("Layout/Green/btn_Check", this.node);
        this.btn_Blue.on(onClick_1.onClick.TouchEnd, this.onBtnFuntion, this);
        this.btn_Green.on(onClick_1.onClick.TouchEnd, this.onBtnFuntion, this);
        this.btn_Red.on(onClick_1.onClick.TouchEnd, this.onBtnFuntion, this);
    };
    Choose_Ticket.prototype.start = function () {
        this.node.opacity = 0;
        this.hide();
    };
    Choose_Ticket.prototype.onBtnFuntion = function (e) {
        var _node = e.target;
        MusciMng_1.default.effectPlay("BtnClick");
        switch (_node.parent.name) {
            case "Blue":
                GameModle_1.default.playData.level = 0;
                break;
            case "Green":
                GameModle_1.default.playData.level = 1;
                break;
            case "Red":
                GameModle_1.default.playData.level = 2;
                break;
        }
        this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndChooseTicket);
        // this.actionHide(() => {
        //     this.EventEmit(GameEvent.SendCommand, Commamnd.EndChooseTicket)
        // });
    };
    Choose_Ticket = __decorate([
        ccclass
    ], Choose_Ticket);
    return Choose_Ticket;
}(ComponentBase_1.default));
exports.default = Choose_Ticket;
var btn = /** @class */ (function () {
    function btn(_node, _level) {
        this.level = _level;
        this.node = _node;
        _node.on(onClick_1.onClick.TouchEnd, function () {
            GameModle_1.default.playData.level = 2;
        });
    }
    return btn;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcQ2hvb3NlX1RpY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQscURBQWdEO0FBQ2hELDRDQUE2QztBQUM3QyxrREFBaUQ7QUFDakQsOENBQTZDO0FBQzdDLDZDQUF3QztBQUNsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBYTtJQUF4RDs7SUF1Q0EsQ0FBQztJQW5DYSw4QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDM0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGlCQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM1RCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxpQkFBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBRTlELENBQUM7SUFDUyw2QkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNmLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsQ0FBVztRQUNwQixJQUFJLEtBQUssR0FBWSxDQUFDLENBQUMsTUFBTSxDQUFBO1FBQzdCLGtCQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQy9CLFFBQVEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDdkIsS0FBSyxNQUFNO2dCQUNQLG1CQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7Z0JBQzVCLE1BQU07WUFDVixLQUFLLE9BQU87Z0JBQ1IsbUJBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtnQkFDNUIsTUFBTTtZQUNWLEtBQUssS0FBSztnQkFDTixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO2dCQUM1QixNQUFNO1NBRWI7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLGlCQUFRLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDL0QsMEJBQTBCO1FBQzFCLHNFQUFzRTtRQUN0RSxNQUFNO0lBQ1YsQ0FBQztJQXJDZ0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXVDakM7SUFBRCxvQkFBQztDQXZDRCxBQXVDQyxDQXZDMEMsdUJBQWEsR0F1Q3ZEO2tCQXZDb0IsYUFBYTtBQXdDbEM7SUFHSSxhQUFZLEtBQWMsRUFBRSxNQUFjO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFBO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO1FBQ2pCLEtBQUssQ0FBQyxFQUFFLENBQUMsaUJBQU8sQ0FBQyxRQUFRLEVBQUU7WUFDdkIsbUJBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNoQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTCxVQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2VcIjtcclxuaW1wb3J0IE11c2NpTW5nIGZyb20gXCIuLi8uLi9EYXRhL2Jhc2UvTXVzY2lNbmdcIjtcclxuaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tIFwiLi4vLi4vRW51bS9Db21tYWRcIjtcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSBcIi4uLy4uL0VudW0vR2FtZUV2ZW50XCI7XHJcbmltcG9ydCB7IG9uQ2xpY2sgfSBmcm9tIFwiLi4vLi4vRW51bS9vbkNsaWNrXCI7XHJcbmltcG9ydCBHYW1lTW9kbGUgZnJvbSBcIi4uLy4uL0dhbWVNb2RsZVwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvb3NlX1RpY2tldCBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgYnRuX0JsdWU6IGNjLk5vZGU7XHJcbiAgICBidG5fUmVkOiBjYy5Ob2RlO1xyXG4gICAgYnRuX0dyZWVuOiBjYy5Ob2RlO1xyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJ0bl9CbHVlID0gY2MuZmluZChcIkxheW91dC9CbHVlL2J0bl9DaGVja1wiLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5idG5fUmVkID0gY2MuZmluZChcIkxheW91dC9SZWQvYnRuX0NoZWNrXCIsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmJ0bl9HcmVlbiA9IGNjLmZpbmQoXCJMYXlvdXQvR3JlZW4vYnRuX0NoZWNrXCIsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmJ0bl9CbHVlLm9uKG9uQ2xpY2suVG91Y2hFbmQsIHRoaXMub25CdG5GdW50aW9uLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuYnRuX0dyZWVuLm9uKG9uQ2xpY2suVG91Y2hFbmQsIHRoaXMub25CdG5GdW50aW9uLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuYnRuX1JlZC5vbihvbkNsaWNrLlRvdWNoRW5kLCB0aGlzLm9uQnRuRnVudGlvbiwgdGhpcylcclxuXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgdGhpcy5oaWRlKClcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkZ1bnRpb24oZTogY2MuRXZlbnQpIHtcclxuICAgICAgICBsZXQgX25vZGU6IGNjLk5vZGUgPSBlLnRhcmdldFxyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJCdG5DbGlja1wiKVxyXG4gICAgICAgIHN3aXRjaCAoX25vZGUucGFyZW50Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkJsdWVcIjpcclxuICAgICAgICAgICAgICAgIEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCA9IDBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiR3JlZW5cIjpcclxuICAgICAgICAgICAgICAgIEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCA9IDFcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiUmVkXCI6XHJcbiAgICAgICAgICAgICAgICBHYW1lTW9kbGUucGxheURhdGEubGV2ZWwgPSAyXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuRW5kQ2hvb3NlVGlja2V0KVxyXG4gICAgICAgIC8vIHRoaXMuYWN0aW9uSGlkZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuRW5kQ2hvb3NlVGlja2V0KVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5jbGFzcyBidG4ge1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIG5vZGU6IGNjLk5vZGU7XHJcbiAgICBjb25zdHJ1Y3Rvcihfbm9kZTogY2MuTm9kZSwgX2xldmVsOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxldmVsID0gX2xldmVsXHJcbiAgICAgICAgdGhpcy5ub2RlID0gX25vZGVcclxuICAgICAgICBfbm9kZS5vbihvbkNsaWNrLlRvdWNoRW5kLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCA9IDJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufSJdfQ==