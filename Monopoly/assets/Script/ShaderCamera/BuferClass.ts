import ComponentBase from "../Data/base/ComponentBase";
import { Easing } from "../Enum/Easing";
import { GameEvent } from "../Enum/GameEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BuferClass extends ComponentBase {
    isRender: boolean;

    camera: cc.Camera = null;
    texture: cc.RenderTexture = null;
    spriteFrame: cc.SpriteFrame = null;
    sprite: cc.Sprite = null;

    _lastSize = new cc.Size(0, 0);

    @property({
        // @ts-ignore
        type: cc.Material,
        displayName: '模糊材质',
        tooltip: '用于应用模糊所用的材质，如无特殊需求请保持默认',
    })
    material = null;

    @property({
        type: [cc.Node],
        displayName: '忽略节点列表',
        tooltip: '在此列表内的节点将不会被模糊遮罩渲染',
    })
    ignoredNodes = [];

    @property({
        type: cc.Float,
        displayName: '亮度',
        tooltip: '降低背景的亮度',
        min: 0,
        max: 1,
    })
    bightness: number = 0.5;

    @property({
        type: cc.Float,
        displayName: '模糊度',
        tooltip: '背景的模糊程度',
        min: 0,
        max: 1,
    })
    blurAmount: number = 0.5;

    start() {



        // 截图图像是翻转的，所以y轴镜像
        this.node.scaleY = -1;
        this.node.addComponent(cc.BlockInputEvents)
        // 创建渲染贴图对象
        this.texture = new cc.RenderTexture();
        //@ts-ignore
        this.texture.initWithSize(this.node.width, this.node.height, cc.gfx.RB_FMT_S8);

        // 在node上创建摄影机
        this.camera = this.node.getComponent(cc.Camera);
        // 不渲染0x10的cullingMask对象
        // this.camera.cullingMask = 0xffffffff ^ 0x10000000;
        this.camera.targetTexture = this.texture;
        // 关闭摄影机，否则每一帧它会自动进行渲染
        this.camera.enabled = false;

        // 将自身与忽略对象排除渲染
        this.node['_cullingMask'] = 0x10000000;
        console.log(this.node['_cullingMask']);
        console.log(this.ignoredNodes);
        this.ignoredNodes.map((node) => (node['_cullingMask'] = 0x10000000));

        // 创建一个sprite组件，由其进行渲染
        this.spriteFrame = new cc.SpriteFrame();
        this.sprite = this.node.addComponent(cc.Sprite);
        this.sprite.spriteFrame = this.spriteFrame;

        this.sprite.type = cc.Sprite.Type.SIMPLE;
        this.sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        this.sprite.trim = true;

        // this.camera.zoomRatio = 0.35

        this.material.setProperty('bightness', this.bightness);
        this.material.setProperty('blurAmount', this.blurAmount);

        // @ts-ignore
        this.sprite.setMaterial(0, this.material);
        this.initEvent(GameEvent.OpenBufer, this.openRender)
        this.initEvent(GameEvent.CloseBufer, this.closeRender)

    }
    openRender() {
        this.node.opacity = 0
        this.EventEmit(GameEvent.StopCloud)
        cc.tween(this.node)
            // .to(0.1, { scaleX: 1, scaleY: -1 }, { easing: Easing.expoOut })
            .to(2, { opacity: 255 }, { easing: Easing.expoOut })
            .start()
        this.isRender = true;
        this.snapshot()
    }
    closeRender() {
        this.EventEmit(GameEvent.StartCloud)
        cc.tween(this.node)
            // .to(0.5, { scale: 0 }, { easing: Easing.backOut })
            .to(0.5, { opacity: 0 }, { easing: Easing.backOut })
            .start()
        this.isRender = false;
    }

    snapshot() {
        let size = this.node.getContentSize();

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
        this.node.setScale(cc.find("Canvas/MainCamera").getComponent(cc.Camera).zoomRatio)
    }

    update(dt) {
        if (this.isRender)
            // 每一帧都进行截图处理，可以换成需要的时候再调用，比较省资源
            this.snapshot();
    }

    // update (dt) {}
}
