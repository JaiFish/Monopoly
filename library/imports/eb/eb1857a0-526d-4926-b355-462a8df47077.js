"use strict";
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