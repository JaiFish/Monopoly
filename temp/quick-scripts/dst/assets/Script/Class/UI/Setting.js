
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
var ButtonMng_1 = require("../../Data/base/ButtonMng");
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var SettingBtn_1 = require("./SettingBtn");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Setting = /** @class */ (function (_super) {
    __extends(Setting, _super);
    function Setting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxIndex = 4;
        _this.itemCount = 1;
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
        this.itemInit();
    };
    Setting.prototype.start = function () {
        ButtonMng_1.default.addEvent(this.node, "Setting", "eventControllOpen", this.btn_ControllOpen);
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
        this.con.addChild(_item);
        var _class = _item.addComponent(SettingBtn_1.default);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcVUlcXFNldHRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUMxRCwyQ0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQWE7SUFBbEQ7UUFBQSxxRUErRUM7UUF0RUcsY0FBUSxHQUFXLENBQUMsQ0FBQTtRQUNwQixlQUFTLEdBQVcsQ0FBQyxDQUFDOztJQXFFMUIsQ0FBQztJQW5FYSx3QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3RGLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDMUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQTtRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUE7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FB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cm9tICcuLi8uLi9EYXRhL2Jhc2UvQnV0dG9uTW5nJztcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2UnO1xyXG5pbXBvcnQgU2V0dGluZ0J0biBmcm9tICcuL1NldHRpbmdCdG4nO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGlzT3BlbjogYm9vbGVhblxyXG4gICAgaXRlbTogY2MuTm9kZVxyXG4gICAgYnRuX0NvbnRyb2xsT3BlbjogY2MuQnV0dG9uXHJcbiAgICBzY3JvbGw6IGNjLlNjcm9sbFZpZXc7XHJcbiAgICBjb246IGNjLk5vZGVcclxuICAgIExheW91dF9NYXNrOiBjYy5MYXlvdXQ7XHJcbiAgICBMYXlvdXRfQkcxOiBjYy5MYXlvdXQ7XHJcbiAgICBMYXlvdXRfQkcyOiBjYy5MYXlvdXQ7XHJcbiAgICBtYXhJbmRleDogbnVtYmVyID0gNFxyXG4gICAgaXRlbUNvdW50OiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5idG5fQ29udHJvbGxPcGVuID0gY2MuZmluZChcIkJ0bl9Db250cm9sbE9wZW5cIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMuaXRlbSA9IGNjLmZpbmQoXCJpdGVtXCIsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLnNjcm9sbCA9IGNjLmZpbmQoXCJjb25fU2Nyb2xsXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpXHJcbiAgICAgICAgdGhpcy5jb24gPSB0aGlzLnNjcm9sbC5jb250ZW50XHJcbiAgICAgICAgdGhpcy5jb24ucmVtb3ZlQWxsQ2hpbGRyZW4oKVxyXG4gICAgICAgIHRoaXMuY29uLnNldENvbnRlbnRTaXplKDAsIDApXHJcbiAgICAgICAgdGhpcy5MYXlvdXRfQkcxID0gY2MuZmluZChcIkxheW91dF9CRzFcIiwgdGhpcy5zY3JvbGwubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxheW91dClcclxuICAgICAgICB0aGlzLkxheW91dF9CRzIgPSBjYy5maW5kKFwiTGF5b3V0X0JHMlwiLCB0aGlzLkxheW91dF9CRzEubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxheW91dClcclxuICAgICAgICB0aGlzLkxheW91dF9NYXNrID0gY2MuZmluZChcIkxheW91dF9NYXNrXCIsIHRoaXMuTGF5b3V0X0JHMi5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGF5b3V0KVxyXG5cclxuICAgICAgICB0aGlzLml0ZW1Jbml0KClcclxuXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgQnV0dG9uTW5nLmFkZEV2ZW50KHRoaXMubm9kZSwgXCJTZXR0aW5nXCIsIFwiZXZlbnRDb250cm9sbE9wZW5cIiwgdGhpcy5idG5fQ29udHJvbGxPcGVuKVxyXG4gICAgfVxyXG4gICAgaXRlbUluaXQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaXRlbUNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbVNvcChpbmRleClcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL+acieWVj+mhjOeahOaWueazlVxyXG4gICAgICAgIC8vIGlmICh0aGlzLm1heEluZGV4IDwgdGhpcy5pdGVtQ291bnQpIHtcclxuICAgICAgICAvLyAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubWF4SW5kZXg7IGluZGV4KyspIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuaXRlbVNvcChpbmRleClcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHsvL+e1puaZgumWk+a4suafk1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jbG9zZUxheW91dCgpXHJcbiAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IHRoaXMubWF4SW5kZXg7IGluZGV4IDwgdGhpcy5pdGVtQ291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pdGVtU29wKGluZGV4KVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgLy8gICAgIH0sIDEwMCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdGVtQ291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuaXRlbVNvcChpbmRleClcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIGV2ZW50Q29udHJvbGxPcGVuKGU6IGNjLkV2ZW50LCBfY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGwubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IHRoaXMuc2Nyb2xsLm5vZGUuYWN0aXZlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbC5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSB0aGlzLnNjcm9sbC5ub2RlLmFjdGl2ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGl0ZW1Tb3AoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBfaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbSlcclxuICAgICAgICB0aGlzLmNvbi5hZGRDaGlsZChfaXRlbSk7XHJcbiAgICAgICAgbGV0IF9jbGFzcyA9IF9pdGVtLmFkZENvbXBvbmVudChTZXR0aW5nQnRuKVxyXG4gICAgICAgIF9jbGFzcy5zZXRFdmVudChpbmRleClcclxuICAgICAgICBfaXRlbS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBjbG9zZUxheW91dCgpIHtcclxuICAgICAgICB0aGlzLkxheW91dF9CRzEuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5MYXlvdXRfQkcyLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuTGF5b3V0X01hc2suZW5hYmxlZCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==