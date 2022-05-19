
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
        switch (_node.parent.name) {
            case "Blue":
                GameModle_1.default.playData.level = 0;
                break;
            case "Red":
                GameModle_1.default.playData.level = 1;
                break;
            case "Green":
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcQ2hvb3NlX1RpY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsNENBQTZDO0FBQzdDLGtEQUFpRDtBQUNqRCw4Q0FBNkM7QUFDN0MsNkNBQXdDO0FBQ2xDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFhO0lBQXhEOztJQXFDQSxDQUFDO0lBakNhLDhCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMzRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxpQkFBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzVELElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGlCQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFFOUQsQ0FBQztJQUNTLDZCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2YsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxDQUFXO1FBQ3BCLElBQUksS0FBSyxHQUFZLENBQUMsQ0FBQyxNQUFNLENBQUE7UUFDN0IsUUFBUSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUN2QixLQUFLLE1BQU07Z0JBQ1AsbUJBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtnQkFDNUIsTUFBTTtZQUNWLEtBQUssS0FBSztnQkFDTixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO2dCQUM1QixNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLG1CQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7Z0JBQzVCLE1BQU07U0FDYjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUMvRCwwQkFBMEI7UUFDMUIsc0VBQXNFO1FBQ3RFLE1BQU07SUFDVixDQUFDO0lBbkNnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBcUNqQztJQUFELG9CQUFDO0NBckNELEFBcUNDLENBckMwQyx1QkFBYSxHQXFDdkQ7a0JBckNvQixhQUFhO0FBc0NsQztJQUdJLGFBQVksS0FBYyxFQUFFLE1BQWM7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUE7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUE7UUFDakIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxpQkFBTyxDQUFDLFFBQVEsRUFBRTtZQUN2QixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQ2hDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVMLFVBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuLi8uLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZVwiO1xyXG5pbXBvcnQgeyBDb21tYW1uZCB9IGZyb20gXCIuLi8uLi9FbnVtL0NvbW1hZFwiO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tIFwiLi4vLi4vRW51bS9HYW1lRXZlbnRcIjtcclxuaW1wb3J0IHsgb25DbGljayB9IGZyb20gXCIuLi8uLi9FbnVtL29uQ2xpY2tcIjtcclxuaW1wb3J0IEdhbWVNb2RsZSBmcm9tIFwiLi4vLi4vR2FtZU1vZGxlXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9vc2VfVGlja2V0IGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICBidG5fQmx1ZTogY2MuTm9kZTtcclxuICAgIGJ0bl9SZWQ6IGNjLk5vZGU7XHJcbiAgICBidG5fR3JlZW46IGNjLk5vZGU7XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYnRuX0JsdWUgPSBjYy5maW5kKFwiTGF5b3V0L0JsdWUvYnRuX0NoZWNrXCIsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmJ0bl9SZWQgPSBjYy5maW5kKFwiTGF5b3V0L1JlZC9idG5fQ2hlY2tcIiwgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuYnRuX0dyZWVuID0gY2MuZmluZChcIkxheW91dC9HcmVlbi9idG5fQ2hlY2tcIiwgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuYnRuX0JsdWUub24ob25DbGljay5Ub3VjaEVuZCwgdGhpcy5vbkJ0bkZ1bnRpb24sIHRoaXMpXHJcbiAgICAgICAgdGhpcy5idG5fR3JlZW4ub24ob25DbGljay5Ub3VjaEVuZCwgdGhpcy5vbkJ0bkZ1bnRpb24sIHRoaXMpXHJcbiAgICAgICAgdGhpcy5idG5fUmVkLm9uKG9uQ2xpY2suVG91Y2hFbmQsIHRoaXMub25CdG5GdW50aW9uLCB0aGlzKVxyXG5cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLmhpZGUoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuRnVudGlvbihlOiBjYy5FdmVudCkge1xyXG4gICAgICAgIGxldCBfbm9kZTogY2MuTm9kZSA9IGUudGFyZ2V0XHJcbiAgICAgICAgc3dpdGNoIChfbm9kZS5wYXJlbnQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQmx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsID0gMFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJSZWRcIjpcclxuICAgICAgICAgICAgICAgIEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCA9IDFcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiR3JlZW5cIjpcclxuICAgICAgICAgICAgICAgIEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCA9IDJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLkVuZENob29zZVRpY2tldClcclxuICAgICAgICAvLyB0aGlzLmFjdGlvbkhpZGUoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLkVuZENob29zZVRpY2tldClcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuY2xhc3MgYnRuIHtcclxuICAgIGxldmVsOiBudW1iZXI7XHJcbiAgICBub2RlOiBjYy5Ob2RlO1xyXG4gICAgY29uc3RydWN0b3IoX25vZGU6IGNjLk5vZGUsIF9sZXZlbDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IF9sZXZlbFxyXG4gICAgICAgIHRoaXMubm9kZSA9IF9ub2RlXHJcbiAgICAgICAgX25vZGUub24ob25DbGljay5Ub3VjaEVuZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBHYW1lTW9kbGUucGxheURhdGEubGV2ZWwgPSAyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0iXX0=