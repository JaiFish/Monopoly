
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Message/EndGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b93a8ws4OpOf4SgGe7Z8w95', 'EndGame');
// Script/Class/Message/EndGame.ts

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
var EndGame = /** @class */ (function (_super) {
    __extends(EndGame, _super);
    function EndGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EndGame.prototype.onLoad = function () {
        this.animation_Bear = cc.find("Mask/animation_Bear", this.node).getComponent(cc.Animation);
        this.btn_GoLottery = cc.find("Btn_Layout/Btn_GoLottery", this.node).getComponent(cc.Button);
        this.btn_Again = cc.find("Btn_Layout/Btn_Again", this.node).getComponent(cc.Button);
        this.btn_BackGame = cc.find("Btn_Layout/Btn_BackGame", this.node).getComponent(cc.Button);
        this.defaultReset();
    };
    EndGame.prototype.start = function () {
        ButtonMng_1.default.addEvent(this.node, "EndGame", "sendEvent", this.btn_GoLottery, "0");
        ButtonMng_1.default.addEvent(this.node, "EndGame", "sendEvent", this.btn_Again, "1");
        ButtonMng_1.default.addEvent(this.node, "EndGame", "sendEvent", this.btn_BackGame, "2");
    };
    EndGame.prototype.playBearSprite = function (number) {
        // console.log(number);
        if (number == 0)
            this.animation_Bear.node.setPosition(32.351, -1.858);
        else
            this.animation_Bear.node.setPosition(-3.103, -1.858);
        // console.log(AssetMng.data_Animation.get("Bear_Train" + number));
        this.animation_Bear.addClip(AssetMng_1.default.data_Animation.get("Bear_Train" + number));
        this.animation_Bear.play("Bear_Train" + number);
    };
    EndGame.prototype.sendEvent = function (e, _customEventData) {
        MusciMng_1.default.effectPlay("BtnClick");
        switch (_customEventData) {
            case "0": //遊戲結束去抽獎
                this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.GoLottery);
                break;
            case "1": //再玩一次
                this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.AgainGame);
                break;
            case "2": //回到遊戲
                this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndToBackGame);
                break;
        }
    };
    EndGame = __decorate([
        ccclass
    ], EndGame);
    return EndGame;
}(ComponentBase_1.default));
exports.default = EndGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcRW5kR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDNUMsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUMxRCxxREFBZ0Q7QUFDaEQsNENBQTZDO0FBQzdDLGtEQUFpRDtBQUMzQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBYTtJQUFsRDs7SUE2Q0EsQ0FBQztJQXZDYSx3QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUMxRixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDM0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ25GLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN6RixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUNTLHVCQUFLLEdBQWY7UUFDSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUM5RSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUMxRSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNqRixDQUFDO0lBQ0QsZ0NBQWMsR0FBZCxVQUFlLE1BQWM7UUFDekIsdUJBQXVCO1FBRXZCLElBQUksTUFBTSxJQUFJLENBQUM7WUFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7O1lBRXBELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBR3hELG1FQUFtRTtRQUNuRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDL0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFDRCwyQkFBUyxHQUFULFVBQVUsQ0FBVyxFQUFFLGdCQUF3QjtRQUMzQyxrQkFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUMvQixRQUFRLGdCQUFnQixFQUFFO1lBQ3RCLEtBQUssR0FBRyxFQUFDLFNBQVM7Z0JBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxpQkFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUN6RCxNQUFNO1lBQ1YsS0FBSyxHQUFHLEVBQUMsTUFBTTtnQkFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLGlCQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7Z0JBQ3pELE1BQU07WUFDVixLQUFLLEdBQUcsRUFBQyxNQUFNO2dCQUNYLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQTtnQkFDN0QsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQTVDZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTZDM0I7SUFBRCxjQUFDO0NBN0NELEFBNkNDLENBN0NvQyx1QkFBYSxHQTZDakQ7a0JBN0NvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0TW5nIGZyb20gJy4uLy4uL0Fzc2V0L0Fzc2V0TW5nJztcclxuaW1wb3J0IEJ1dHRvbk1uZyBmcm9tICcuLi8uLi9EYXRhL2Jhc2UvQnV0dG9uTW5nJztcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2UnO1xyXG5pbXBvcnQgTXVzY2lNbmcgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL011c2NpTW5nJztcclxuaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tICcuLi8uLi9FbnVtL0NvbW1hZCc7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gJy4uLy4uL0VudW0vR2FtZUV2ZW50JztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZEdhbWUgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGFuaW1hdGlvbl9CZWFyOiBjYy5BbmltYXRpb247XHJcbiAgICBidG5fQWdhaW46IGNjLkJ1dHRvbjtcclxuICAgIGJ0bl9Hb0xvdHRlcnk6IGNjLkJ1dHRvbjtcclxuICAgIGJ0bl9CYWNrR2FtZTogY2MuQnV0dG9uO1xyXG4gXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uX0JlYXIgPSBjYy5maW5kKFwiTWFzay9hbmltYXRpb25fQmVhclwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgdGhpcy5idG5fR29Mb3R0ZXJ5ID0gY2MuZmluZChcIkJ0bl9MYXlvdXQvQnRuX0dvTG90dGVyeVwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5idG5fQWdhaW4gPSBjYy5maW5kKFwiQnRuX0xheW91dC9CdG5fQWdhaW5cIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMuYnRuX0JhY2tHYW1lID0gY2MuZmluZChcIkJ0bl9MYXlvdXQvQnRuX0JhY2tHYW1lXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLmRlZmF1bHRSZXNldCgpXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJFbmRHYW1lXCIsIFwic2VuZEV2ZW50XCIsIHRoaXMuYnRuX0dvTG90dGVyeSwgXCIwXCIpXHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJFbmRHYW1lXCIsIFwic2VuZEV2ZW50XCIsIHRoaXMuYnRuX0FnYWluLCBcIjFcIilcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIkVuZEdhbWVcIiwgXCJzZW5kRXZlbnRcIiwgdGhpcy5idG5fQmFja0dhbWUsIFwiMlwiKVxyXG4gICAgfVxyXG4gICAgcGxheUJlYXJTcHJpdGUobnVtYmVyOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhudW1iZXIpO1xyXG5cclxuICAgICAgICBpZiAobnVtYmVyID09IDApXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uX0JlYXIubm9kZS5zZXRQb3NpdGlvbigzMi4zNTEsIC0xLjg1OClcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uX0JlYXIubm9kZS5zZXRQb3NpdGlvbigtMy4xMDMsIC0xLjg1OClcclxuXHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEFzc2V0TW5nLmRhdGFfQW5pbWF0aW9uLmdldChcIkJlYXJfVHJhaW5cIiArIG51bWJlcikpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uX0JlYXIuYWRkQ2xpcChBc3NldE1uZy5kYXRhX0FuaW1hdGlvbi5nZXQoXCJCZWFyX1RyYWluXCIgKyBudW1iZXIpKVxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uX0JlYXIucGxheShcIkJlYXJfVHJhaW5cIiArIG51bWJlcilcclxuICAgIH1cclxuICAgIHNlbmRFdmVudChlOiBjYy5FdmVudCwgX2N1c3RvbUV2ZW50RGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgTXVzY2lNbmcuZWZmZWN0UGxheShcIkJ0bkNsaWNrXCIpXHJcbiAgICAgICAgc3dpdGNoIChfY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCIwXCI6Ly/pgYrmiLLntZDmnZ/ljrvmir3njY5cclxuICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuR29Mb3R0ZXJ5KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIxXCI6Ly/lho3njqnkuIDmrKFcclxuICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuQWdhaW5HYW1lKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIyXCI6Ly/lm57liLDpgYrmiLJcclxuICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuRW5kVG9CYWNrR2FtZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSAgICJdfQ==