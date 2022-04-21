import AssetMng from '../Asset/AssetMng';
import DataCloud from '../Data/DataCloud';
import CloudItem from '../Item/CloudItem';
export default class Panel_Cloud extends DataCloud {
    item: cc.Node;
    cloudContent: cc.Node;
    protected onLoad(): void {
        this.cloudContent = cc.find("nContent", this.node)
        this.item = cc.find("item", this.node)
        this.temp_Left = 0
        this.temp_Right = 0
        this.randomTime_Left = 1 + Math.floor(Math.random() * this.rangeTime_Left)
        this.randomTime_Right = 1 + Math.floor(Math.random() * this.rangeTime_Right)
    }

    protected start(): void {
        //生成10個雲
        cc.tween(this.node)
            .repeat(10, cc.tween()
                .delay(.1)
                .call(this.instItem.bind(this))
            )
            .start()
    }
    protected update(dt: number): void {
        this.temp_Left += dt;
        this.temp_Right += dt;

        if (this.temp_Left > this.randomTime_Left) {
            this.instItem();
            this.randomTime_Left = 1 + Math.floor(Math.random() * this.rangeTime_Left)
            this.temp_Left = 0
        }
        if (this.temp_Right > this.randomTime_Right) {
            this.instItem();
            this.randomTime_Right = 1 + Math.floor(Math.random() * this.rangeTime_Right)
            this.temp_Right = 0
        }
    }
    instItem(): void {
        let temp = cc.instantiate(this.item)
        this.cloudContent.addChild(temp)
        let _class = temp.addComponent(CloudItem)
        _class.Speed = this.baseSpeed + (Math.random() * this.rangeSpeed)
        _class.direction = Math.random() > 0.5 ? 1 : -1;//左右方向相反
        temp.setPosition(Math.random() * this.rangeX, Math.random() * this.rangeY)
        _class.isCanGO = true;

        let randomCloud = 1 + Math.floor(Math.random() * 10)
        let format = randomCloud < 9 ? "0" + String(randomCloud) : String(randomCloud)
        temp.getComponent(cc.Sprite).spriteFrame = AssetMng.Asset.get("雲-" + format)//隨機1~10的雲
    }
}
