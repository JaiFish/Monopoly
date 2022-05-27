
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/UI/Setting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a30bfIOwzxF16zAYkEtcuo8', 'Setting');
// Script/Class/UI/Setting.ts

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
var SettingBtn_1 = require("./SettingBtn");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Setting = /** @class */ (function (_super) {
    __extends(Setting, _super);
    function Setting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxIndex = 4;
        _this.itemCount = 1;
        _this.itemMap = new Map();
        return _this;
    }
    Setting.prototype.onLoad = function () {
        this.btn_ControllOpen = cc.find("Btn_ControllOpen", this.node).getComponent(cc.Button);
        this.item = cc.find("item", this.node);
        this.scroll = cc.find("con_Scroll", this.node).getComponent(cc.ScrollView);
        this.con = this.scroll.content;
        this.con.removeAllChildren();
        this.con.setContentSize(0, 0);
        this.Layout_BG1 = cc.find("Layout_BG1", this.scroll.node).getComponent(cc.Layout);
        this.Layout_BG2 = cc.find("Layout_BG2", this.Layout_BG1.node).getComponent(cc.Layout);
        this.Layout_Mask = cc.find("Layout_Mask", this.Layout_BG2.node).getComponent(cc.Layout);
        this.info3 = cc.find('Info3', this.node);
        this.itemInit();
        this.info3.active = false;
    };
    Setting.prototype.start = function () {
        // ButtonMng.addEvent(this.node, "Setting", "eventControllOpen", this.btn_ControllOpen)
    };
    Setting.prototype.itemInit = function () {
        for (var index = 0; index < this.itemCount; index++) {
            this.itemSop(index);
        }
        //有問題的方法
        // if (this.maxIndex < this.itemCount) {
        //     for (let index = 0; index < this.maxIndex; index++) {
        //         this.itemSop(index)
        //     }
        //     setTimeout(() => {//給時間渲染
        //         this.closeLayout()
        //         setTimeout(() => {
        //             for (let index = this.maxIndex; index < this.itemCount; index++) {
        //                 this.itemSop(index)
        //             }
        //         }, 100);
        //     }, 100);
        // }
        // else {
        //     for (let index = 0; index < this.itemCount; index++) {
        //         this.itemSop(index)
        //     }
        // }
    };
    Setting.prototype.eventControllOpen = function (e, _customEventData) {
        MusciMng_1.default.effectPlay("BtnClick");
        if (this.isOpen) {
            this.scroll.node.active = false;
            this.isOpen = this.scroll.node.active;
        }
        else {
            this.scroll.node.active = true;
            this.isOpen = this.scroll.node.active;
        }
    };
    Setting.prototype.itemSop = function (index) {
        var _item = cc.instantiate(this.item);
        this.con.addChild(_item, cc.macro.MAX_ZINDEX, index.toString());
        var _class = _item.addComponent(SettingBtn_1.default);
        this.itemMap.set(index, _class);
        _class.setEvent(index);
        _item.active = true;
    };
    Setting.prototype.closeLayout = function () {
        this.Layout_BG1.enabled = false;
        this.Layout_BG2.enabled = false;
        this.Layout_Mask.enabled = false;
    };
    Setting = __decorate([
        ccclass
    ], Setting);
    return Setting;
}(ComponentBase_1.default));
exports.default = Setting;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcVUlcXFNldHRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0RBQTBEO0FBQzFELHFEQUFnRDtBQUNoRCwyQ0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQWE7SUFBbEQ7UUFBQSxxRUFvRkM7UUEzRUcsY0FBUSxHQUFXLENBQUMsQ0FBQTtRQUNwQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLGFBQU8sR0FBbUIsSUFBSSxHQUFHLEVBQUUsQ0FBQTs7SUF3RXZDLENBQUM7SUF0RWEsd0JBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0RixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUE7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNqRixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNyRixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN2RixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUV4QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDN0IsQ0FBQztJQUNTLHVCQUFLLEdBQWY7UUFDSSx1RkFBdUY7SUFDM0YsQ0FBQztJQUNELDBCQUFRLEdBQVI7UUFDSSxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3RCO1FBR0QsUUFBUTtRQUNSLHdDQUF3QztRQUN4Qyw0REFBNEQ7UUFDNUQsOEJBQThCO1FBQzlCLFFBQVE7UUFDUixnQ0FBZ0M7UUFDaEMsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3QixpRkFBaUY7UUFDakYsc0NBQXNDO1FBQ3RDLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLElBQUk7UUFDSixTQUFTO1FBQ1QsNkRBQTZEO1FBQzdELDhCQUE4QjtRQUM5QixRQUFRO1FBQ1IsSUFBSTtJQUNSLENBQUM7SUFDRCxtQ0FBaUIsR0FBakIsVUFBa0IsQ0FBVyxFQUFFLGdCQUF3QjtRQUNuRCxrQkFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUMvQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO1NBQ3hDO2FBQ0k7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO1NBQ3hDO0lBQ0wsQ0FBQztJQUNELHlCQUFPLEdBQVAsVUFBUSxLQUFhO1FBQ2pCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM5RCxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLG9CQUFVLENBQUMsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN0QixLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtJQUN2QixDQUFDO0lBQ0QsNkJBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO0lBQ3BDLENBQUM7SUFqRmdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FvRjNCO0lBQUQsY0FBQztDQXBGRCxBQW9GQyxDQXBGb0MsdUJBQWEsR0FvRmpEO2tCQXBGb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b25NbmcgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0J1dHRvbk1uZyc7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlJztcclxuaW1wb3J0IE11c2NpTW5nIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9NdXNjaU1uZyc7XHJcbmltcG9ydCBTZXR0aW5nQnRuIGZyb20gJy4vU2V0dGluZ0J0bic7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZyBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgaXNPcGVuOiBib29sZWFuXHJcbiAgICBpdGVtOiBjYy5Ob2RlXHJcbiAgICBidG5fQ29udHJvbGxPcGVuOiBjYy5CdXR0b25cclxuICAgIHNjcm9sbDogY2MuU2Nyb2xsVmlldztcclxuICAgIGNvbjogY2MuTm9kZVxyXG4gICAgTGF5b3V0X01hc2s6IGNjLkxheW91dDtcclxuICAgIExheW91dF9CRzE6IGNjLkxheW91dDtcclxuICAgIExheW91dF9CRzI6IGNjLkxheW91dDtcclxuICAgIG1heEluZGV4OiBudW1iZXIgPSA0XHJcbiAgICBpdGVtQ291bnQ6IG51bWJlciA9IDE7XHJcbiAgICBpbmZvMzogY2MuTm9kZVxyXG4gICAgaXRlbU1hcDpNYXA8bnVtYmVyLGFueT4gPSBuZXcgTWFwKClcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYnRuX0NvbnRyb2xsT3BlbiA9IGNjLmZpbmQoXCJCdG5fQ29udHJvbGxPcGVuXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLml0ZW0gPSBjYy5maW5kKFwiaXRlbVwiLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5zY3JvbGwgPSBjYy5maW5kKFwiY29uX1Njcm9sbFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KVxyXG4gICAgICAgIHRoaXMuY29uID0gdGhpcy5zY3JvbGwuY29udGVudFxyXG4gICAgICAgIHRoaXMuY29uLnJlbW92ZUFsbENoaWxkcmVuKClcclxuICAgICAgICB0aGlzLmNvbi5zZXRDb250ZW50U2l6ZSgwLCAwKVxyXG4gICAgICAgIHRoaXMuTGF5b3V0X0JHMSA9IGNjLmZpbmQoXCJMYXlvdXRfQkcxXCIsIHRoaXMuc2Nyb2xsLm5vZGUpLmdldENvbXBvbmVudChjYy5MYXlvdXQpXHJcbiAgICAgICAgdGhpcy5MYXlvdXRfQkcyID0gY2MuZmluZChcIkxheW91dF9CRzJcIiwgdGhpcy5MYXlvdXRfQkcxLm5vZGUpLmdldENvbXBvbmVudChjYy5MYXlvdXQpXHJcbiAgICAgICAgdGhpcy5MYXlvdXRfTWFzayA9IGNjLmZpbmQoXCJMYXlvdXRfTWFza1wiLCB0aGlzLkxheW91dF9CRzIubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxheW91dClcclxuICAgICAgICB0aGlzLmluZm8zID0gY2MuZmluZCgnSW5mbzMnLCB0aGlzLm5vZGUpXHJcblxyXG4gICAgICAgIHRoaXMuaXRlbUluaXQoKVxyXG4gICAgICAgIHRoaXMuaW5mbzMuYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIlNldHRpbmdcIiwgXCJldmVudENvbnRyb2xsT3BlblwiLCB0aGlzLmJ0bl9Db250cm9sbE9wZW4pXHJcbiAgICB9XHJcbiAgICBpdGVtSW5pdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdGVtQ291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtU29wKGluZGV4KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8v5pyJ5ZWP6aGM55qE5pa55rOVXHJcbiAgICAgICAgLy8gaWYgKHRoaXMubWF4SW5kZXggPCB0aGlzLml0ZW1Db3VudCkge1xyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5tYXhJbmRleDsgaW5kZXgrKykge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pdGVtU29wKGluZGV4KVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gey8v57Wm5pmC6ZaT5riy5p+TXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNsb3NlTGF5b3V0KClcclxuICAgICAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gdGhpcy5tYXhJbmRleDsgaW5kZXggPCB0aGlzLml0ZW1Db3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLml0ZW1Tb3AoaW5kZXgpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAvLyAgICAgfSwgMTAwKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLml0ZW1Db3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pdGVtU29wKGluZGV4KVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgZXZlbnRDb250cm9sbE9wZW4oZTogY2MuRXZlbnQsIF9jdXN0b21FdmVudERhdGE6IHN0cmluZykge1xyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJCdG5DbGlja1wiKVxyXG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbC5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gdGhpcy5zY3JvbGwubm9kZS5hY3RpdmVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IHRoaXMuc2Nyb2xsLm5vZGUuYWN0aXZlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXRlbVNvcChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IF9pdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtKVxyXG4gICAgICAgIHRoaXMuY29uLmFkZENoaWxkKF9pdGVtLGNjLm1hY3JvLk1BWF9aSU5ERVgsaW5kZXgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgbGV0IF9jbGFzcyA9IF9pdGVtLmFkZENvbXBvbmVudChTZXR0aW5nQnRuKVxyXG4gICAgICAgIHRoaXMuaXRlbU1hcC5zZXQoaW5kZXgsX2NsYXNzKVxyXG4gICAgICAgIF9jbGFzcy5zZXRFdmVudChpbmRleClcclxuICAgICAgICBfaXRlbS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBjbG9zZUxheW91dCgpIHtcclxuICAgICAgICB0aGlzLkxheW91dF9CRzEuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5MYXlvdXRfQkcyLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuTGF5b3V0X01hc2suZW5hYmxlZCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==