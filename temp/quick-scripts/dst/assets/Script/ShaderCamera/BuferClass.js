
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ShaderCamera/BuferClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb185egUm1JJrNVRiqN9HB3', 'BuferClass');
// Script/ShaderCamera/BuferClass.ts

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
var ComponentBase_1 = require("../Data/base/ComponentBase");
var GameEvent_1 = require("../Enum/GameEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BuferClass = /** @class */ (function (_super) {
    __extends(BuferClass, _super);
    function BuferClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.texture = null;
        _this.spriteFrame = null;
        _this.sprite = null;
        _this._lastSize = new cc.Size(0, 0);
        _this.material = null;
        _this.ignoredNodes = [];
        _this.bightness = 0.5;
        _this.blurAmount = 0.5;
        return _this;
        // update (dt) {}
    }
    BuferClass.prototype.start = function () {
        // 截图图像是翻转的，所以y轴镜像
        // this.node.scaleY = -1;
        // this.block = this.node.addComponent(cc.BlockInputEvents)
        // 创建渲染贴图对象
        // this.texture = new cc.RenderTexture();
        // //@ts-ignore
        // this.texture.initWithSize(this.node.width, this.node.height, cc.gfx.RB_FMT_S8);
        // // 在node上创建摄影机
        // this.camera = this.node.getComponent(cc.Camera);
        // // 不渲染0x10的cullingMask对象
        // // this.camera.cullingMask = 0xffffffff ^ 0x10000000;
        // this.camera.targetTexture = this.texture;
        // // 关闭摄影机，否则每一帧它会自动进行渲染
        // this.camera.enabled = false;
        // // 将自身与忽略对象排除渲染
        // this.node['_cullingMask'] = 0x10000000;
        // console.log(this.node['_cullingMask']);
        // console.log(this.ignoredNodes);
        // this.ignoredNodes.map((node) => (node['_cullingMask'] = 0x10000000));
        // // 创建一个sprite组件，由其进行渲染
        // this.spriteFrame = new cc.SpriteFrame();
        // this.sprite = this.node.addComponent(cc.Sprite);
        // this.sprite.spriteFrame = this.spriteFrame;
        // this.sprite.type = cc.Sprite.Type.SIMPLE;
        // this.sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        // this.sprite.trim = true;
        // // this.camera.zoomRatio = 0.35
        // this.material.setProperty('bightness', this.bightness);
        // this.material.setProperty('blurAmount', this.blurAmount);
        // // @ts-ignore
        // this.sprite.setMaterial(0, this.material);
        // this.block.enabled = false
        // this.initEvent(GameEvent.OpenBufer, this.openRender)
        // this.initEvent(GameEvent.CloseBufer, this.closeRender)
        this.hide();
    };
    BuferClass.prototype.openRender = function () {
        // this.block.enabled = true
        this.EventEmit(GameEvent_1.GameEvent.StopCloud);
        // cc.tween(this.node)
        // .to(0.1, { scaleX: 1, scaleY: -1 }, { easing: Easing.expoOut })
        // .to(2, { opacity: 255 }, { easing: Easing.expoOut })
        // .start()
        this.isRender = true;
        // this.snapshot()
    };
    BuferClass.prototype.closeRender = function () {
        // this.block.enabled = false
        this.EventEmit(GameEvent_1.GameEvent.StartCloud);
        // cc.tween(this.node)
        // .to(0.5, { scale: 0 }, { easing: Easing.backOut })
        // .to(0.5, { opacity: 0 }, { easing: Easing.backOut })
        // .start()
        // this.isRender = false;
    };
    BuferClass.prototype.snapshot = function () {
        var size = this.node.getContentSize();
        // 大小发生改变，重新设置texture大小
        if (size.width !== this._lastSize.width || size.height !== this._lastSize.height) {
            //@ts-ignore
            this.texture.initWithSize(this.node.width, this.node.height, cc.gfx.RB_FMT_S8);
            this.camera.targetTexture = this.texture;
        }
        this._lastSize.width = size.width;
        this._lastSize.height = size.height;
        // 手动渲染摄影机，保存截图
        this.camera.render(cc.Canvas.instance.node);
        // 应用刚刚截图的贴图到sprite身上进行渲染
        this.spriteFrame.setTexture(this.texture);
        this.node.setScale(cc.find("Canvas/MainCamera").getComponent(cc.Camera).zoomRatio);
    };
    BuferClass.prototype.update = function (dt) {
        // if (this.isRender)
        // 每一帧都进行截图处理，可以换成需要的时候再调用，比较省资源
        // this.snapshot();
    };
    __decorate([
        property({
            // @ts-ignore
            type: cc.Material,
            displayName: '模糊材质',
            tooltip: '用于应用模糊所用的材质，如无特殊需求请保持默认',
        })
    ], BuferClass.prototype, "material", void 0);
    __decorate([
        property({
            type: [cc.Node],
            displayName: '忽略节点列表',
            tooltip: '在此列表内的节点将不会被模糊遮罩渲染',
        })
    ], BuferClass.prototype, "ignoredNodes", void 0);
    __decorate([
        property({
            type: cc.Float,
            displayName: '亮度',
            tooltip: '降低背景的亮度',
            min: 0,
            max: 1,
        })
    ], BuferClass.prototype, "bightness", void 0);
    __decorate([
        property({
            type: cc.Float,
            displayName: '模糊度',
            tooltip: '背景的模糊程度',
            min: 0,
            max: 1,
        })
    ], BuferClass.prototype, "blurAmount", void 0);
    BuferClass = __decorate([
        ccclass
    ], BuferClass);
    return BuferClass;
}(ComponentBase_1.default));
exports.default = BuferClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTaGFkZXJDYW1lcmFcXEJ1ZmVyQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQXVEO0FBRXZELCtDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBYTtJQUFyRDtRQUFBLHFFQTJJQztRQXZJRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBQ3pCLGFBQU8sR0FBcUIsSUFBSSxDQUFDO1FBQ2pDLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUNuQyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBUTlCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFPaEIsa0JBQVksR0FBRyxFQUFFLENBQUM7UUFTbEIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQVN4QixnQkFBVSxHQUFXLEdBQUcsQ0FBQzs7UUFnR3pCLGlCQUFpQjtJQUNyQixDQUFDO0lBL0ZHLDBCQUFLLEdBQUw7UUFJSSxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLDJEQUEyRDtRQUMzRCxXQUFXO1FBQ1gseUNBQXlDO1FBQ3pDLGVBQWU7UUFDZixrRkFBa0Y7UUFFbEYsaUJBQWlCO1FBQ2pCLG1EQUFtRDtRQUNuRCwyQkFBMkI7UUFDM0Isd0RBQXdEO1FBQ3hELDRDQUE0QztRQUM1Qyx5QkFBeUI7UUFDekIsK0JBQStCO1FBRS9CLGtCQUFrQjtRQUNsQiwwQ0FBMEM7UUFDMUMsMENBQTBDO1FBQzFDLGtDQUFrQztRQUNsQyx3RUFBd0U7UUFFeEUseUJBQXlCO1FBQ3pCLDJDQUEyQztRQUMzQyxtREFBbUQ7UUFDbkQsOENBQThDO1FBRTlDLDRDQUE0QztRQUM1QyxvREFBb0Q7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Q04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLO1lBQ2QsV0FBVyxFQUFFLEtBQUs7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsQ0FBQztTQUNULENBQUM7a0RBQ3VCO0lBMUNSLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0EySTlCO0lBQUQsaUJBQUM7Q0EzSUQsQUEySUMsQ0EzSXVDLHVCQUFhLEdBMklwRDtrQkEzSW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2VcIjtcclxuaW1wb3J0IHsgRWFzaW5nIH0gZnJvbSBcIi4uL0VudW0vRWFzaW5nXCI7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gXCIuLi9FbnVtL0dhbWVFdmVudFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1ZmVyQ2xhc3MgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIGlzUmVuZGVyOiBib29sZWFuO1xyXG4gICAgYmxvY2s6IGNjLkJsb2NrSW5wdXRFdmVudHNcclxuXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICB0ZXh0dXJlOiBjYy5SZW5kZXJUZXh0dXJlID0gbnVsbDtcclxuICAgIHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBzcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgX2xhc3RTaXplID0gbmV3IGNjLlNpemUoMCwgMCk7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdHlwZTogY2MuTWF0ZXJpYWwsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICfmqKHns4rmnZDotKgnLFxyXG4gICAgICAgIHRvb2x0aXA6ICfnlKjkuo7lupTnlKjmqKHns4rmiYDnlKjnmoTmnZDotKjvvIzlpoLml6DnibnmrorpnIDmsYLor7fkv53mjIHpu5jorqQnLFxyXG4gICAgfSlcclxuICAgIG1hdGVyaWFsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IFtjYy5Ob2RlXSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ+W/veeVpeiKgueCueWIl+ihqCcsXHJcbiAgICAgICAgdG9vbHRpcDogJ+WcqOatpOWIl+ihqOWGheeahOiKgueCueWwhuS4jeS8muiiq+aooeeziumBrue9qea4suafkycsXHJcbiAgICB9KVxyXG4gICAgaWdub3JlZE5vZGVzID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5GbG9hdCxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ+S6ruW6picsXHJcbiAgICAgICAgdG9vbHRpcDogJ+mZjeS9juiDjOaZr+eahOS6ruW6picsXHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICAgIG1heDogMSxcclxuICAgIH0pXHJcbiAgICBiaWdodG5lc3M6IG51bWJlciA9IDAuNTtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkZsb2F0LFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiAn5qih57OK5bqmJyxcclxuICAgICAgICB0b29sdGlwOiAn6IOM5pmv55qE5qih57OK56iL5bqmJyxcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgbWF4OiAxLFxyXG4gICAgfSlcclxuICAgIGJsdXJBbW91bnQ6IG51bWJlciA9IDAuNTtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAvLyDmiKrlm77lm77lg4/mmK/nv7vovaznmoTvvIzmiYDku6V56L206ZWc5YOPXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnNjYWxlWSA9IC0xO1xyXG4gICAgICAgIC8vIHRoaXMuYmxvY2sgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpXHJcbiAgICAgICAgLy8g5Yib5bu65riy5p+T6LS05Zu+5a+56LGhXHJcbiAgICAgICAgLy8gdGhpcy50ZXh0dXJlID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcclxuICAgICAgICAvLyAvL0B0cy1pZ25vcmVcclxuICAgICAgICAvLyB0aGlzLnRleHR1cmUuaW5pdFdpdGhTaXplKHRoaXMubm9kZS53aWR0aCwgdGhpcy5ub2RlLmhlaWdodCwgY2MuZ2Z4LlJCX0ZNVF9TOCk7XHJcblxyXG4gICAgICAgIC8vIC8vIOWcqG5vZGXkuIrliJvlu7rmkYTlvbHmnLpcclxuICAgICAgICAvLyB0aGlzLmNhbWVyYSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKTtcclxuICAgICAgICAvLyAvLyDkuI3muLLmn5MweDEw55qEY3VsbGluZ01hc2vlr7nosaFcclxuICAgICAgICAvLyAvLyB0aGlzLmNhbWVyYS5jdWxsaW5nTWFzayA9IDB4ZmZmZmZmZmYgXiAweDEwMDAwMDAwO1xyXG4gICAgICAgIC8vIHRoaXMuY2FtZXJhLnRhcmdldFRleHR1cmUgPSB0aGlzLnRleHR1cmU7XHJcbiAgICAgICAgLy8gLy8g5YWz6Zet5pGE5b2x5py677yM5ZCm5YiZ5q+P5LiA5bin5a6D5Lya6Ieq5Yqo6L+b6KGM5riy5p+TXHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyAvLyDlsIboh6rouqvkuI7lv73nlaXlr7nosaHmjpLpmaTmuLLmn5NcclxuICAgICAgICAvLyB0aGlzLm5vZGVbJ19jdWxsaW5nTWFzayddID0gMHgxMDAwMDAwMDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGVbJ19jdWxsaW5nTWFzayddKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlnbm9yZWROb2Rlcyk7XHJcbiAgICAgICAgLy8gdGhpcy5pZ25vcmVkTm9kZXMubWFwKChub2RlKSA9PiAobm9kZVsnX2N1bGxpbmdNYXNrJ10gPSAweDEwMDAwMDAwKSk7XHJcblxyXG4gICAgICAgIC8vIC8vIOWIm+W7uuS4gOS4qnNwcml0Zee7hOS7tu+8jOeUseWFtui/m+ihjOa4suafk1xyXG4gICAgICAgIC8vIHRoaXMuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcclxuICAgICAgICAvLyB0aGlzLnNwcml0ZSA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAvLyB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlRnJhbWU7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc3ByaXRlLnR5cGUgPSBjYy5TcHJpdGUuVHlwZS5TSU1QTEU7XHJcbiAgICAgICAgLy8gdGhpcy5zcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgICAgIC8vIHRoaXMuc3ByaXRlLnRyaW0gPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjM1XHJcblxyXG4gICAgICAgIC8vIHRoaXMubWF0ZXJpYWwuc2V0UHJvcGVydHkoJ2JpZ2h0bmVzcycsIHRoaXMuYmlnaHRuZXNzKTtcclxuICAgICAgICAvLyB0aGlzLm1hdGVyaWFsLnNldFByb3BlcnR5KCdibHVyQW1vdW50JywgdGhpcy5ibHVyQW1vdW50KTtcclxuXHJcbiAgICAgICAgLy8gLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIC8vIHRoaXMuc3ByaXRlLnNldE1hdGVyaWFsKDAsIHRoaXMubWF0ZXJpYWwpO1xyXG4gICAgICAgIC8vIHRoaXMuYmxvY2suZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAvLyB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuT3BlbkJ1ZmVyLCB0aGlzLm9wZW5SZW5kZXIpXHJcbiAgICAvLyB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuQ2xvc2VCdWZlciwgdGhpcy5jbG9zZVJlbmRlcilcclxuICAgICAgICB0aGlzLmhpZGUoKVxyXG5cclxuICAgIH1cclxuICAgIG9wZW5SZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ibG9jay5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TdG9wQ2xvdWQpXHJcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAvLyAudG8oMC4xLCB7IHNjYWxlWDogMSwgc2NhbGVZOiAtMSB9LCB7IGVhc2luZzogRWFzaW5nLmV4cG9PdXQgfSlcclxuICAgICAgICAgICAgLy8gLnRvKDIsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBFYXNpbmcuZXhwb091dCB9KVxyXG4gICAgICAgICAgICAvLyAuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuaXNSZW5kZXIgPSB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMuc25hcHNob3QoKVxyXG4gICAgfVxyXG4gICAgY2xvc2VSZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ibG9jay5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU3RhcnRDbG91ZClcclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC8vIC50bygwLjUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IEVhc2luZy5iYWNrT3V0IH0pXHJcbiAgICAgICAgICAgIC8vIC50bygwLjUsIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogRWFzaW5nLmJhY2tPdXQgfSlcclxuICAgICAgICAgICAgLy8gLnN0YXJ0KClcclxuICAgICAgICAvLyB0aGlzLmlzUmVuZGVyID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc25hcHNob3QoKSB7XHJcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKTtcclxuXHJcbiAgICAgICAgLy8g5aSn5bCP5Y+R55Sf5pS55Y+Y77yM6YeN5paw6K6+572udGV4dHVyZeWkp+Wwj1xyXG4gICAgICAgIGlmIChzaXplLndpZHRoICE9PSB0aGlzLl9sYXN0U2l6ZS53aWR0aCB8fCBzaXplLmhlaWdodCAhPT0gdGhpcy5fbGFzdFNpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUuaW5pdFdpdGhTaXplKHRoaXMubm9kZS53aWR0aCwgdGhpcy5ub2RlLmhlaWdodCwgY2MuZ2Z4LlJCX0ZNVF9TOCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnRhcmdldFRleHR1cmUgPSB0aGlzLnRleHR1cmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9sYXN0U2l6ZS53aWR0aCA9IHNpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5fbGFzdFNpemUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIOaJi+WKqOa4suafk+aRhOW9seacuu+8jOS/neWtmOaIquWbvlxyXG4gICAgICAgIHRoaXMuY2FtZXJhLnJlbmRlcihjYy5DYW52YXMuaW5zdGFuY2Uubm9kZSk7XHJcbiAgICAgICAgLy8g5bqU55So5Yia5Yia5oiq5Zu+55qE6LS05Zu+5Yiwc3ByaXRl6Lqr5LiK6L+b6KGM5riy5p+TXHJcbiAgICAgICAgdGhpcy5zcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHRoaXMudGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKGNjLmZpbmQoXCJDYW52YXMvTWFpbkNhbWVyYVwiKS5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKS56b29tUmF0aW8pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNSZW5kZXIpXHJcbiAgICAgICAgICAgIC8vIOavj+S4gOW4p+mDvei/m+ihjOaIquWbvuWkhOeQhu+8jOWPr+S7peaNouaIkOmcgOimgeeahOaXtuWAmeWGjeiwg+eUqO+8jOavlOi+g+ecgei1hOa6kFxyXG4gICAgICAgICAgICAvLyB0aGlzLnNuYXBzaG90KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=