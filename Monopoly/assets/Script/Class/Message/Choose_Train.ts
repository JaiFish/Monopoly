import AssetMng from '../../Asset/AssetMng';
import ComponentBase from '../../Data/base/ComponentBase';
import { Commamnd } from '../../Enum/Commad';
import { Easing } from '../../Enum/Easing';
import { GameEvent } from '../../Enum/GameEvent';
import { TrainType } from '../../Enum/TrainType';
import GameModle from '../../GameModle';
export default class Choose_Train extends ComponentBase {
    item: cc.Node;
    itmes: TrainItem[] = [];
    MineTrain: TrainItem;
    content: cc.Node;
    isRandom: boolean;
    isStop: boolean;
    tempDT: number = 0;

    totaleDT: number = 0;
    endDT: number = 7;
    changeSpeed: number[] = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, 0.8, 0.85]
    speedChange: number = 0.1;

    lastShowTrain: number = 0;


    protected onLoad(): void {
        this.item = cc.find("TrainFrame", this.node)
        this.MineTrain = cc.find("MineTrain", this.node).addComponent(TrainItem)
        this.content = cc.find("Layout", this.node)
        for (let index = 0; index < 6; index++) {
            let instItme = cc.instantiate(this.item)
            this.content.addChild(instItme)
            instItme.setPosition(0, 0)
            let _class = instItme.addComponent(TrainItem)
            this.itmes.push(_class);
            let getIndex = index
            _class.type = getIndex
        }
        console.log(this.itmes);
        this.item.destroy();
    }
    protected start(): void {
        this.node.opacity = 0
        this.hide()
    }

    protected update(dt: number): void {
        if (this.isRandom) {
            this.tempDT += dt;
            this.totaleDT += dt;
            // console.log(this.tempDT, this.speedChange);

            if (this.tempDT > this.speedChange) {
                this.changeShow()
                this.mineChange()
                this.tempDT = 0
            }
            if (this.totaleDT > this.endDT) {
                this.isRandom = false
                GameModle.playData.trainTypeNumber = this.lastShowTrain
                GameModle.playData.trainType = this.changeTrainType()
                this.EventEmit(GameEvent.SendCommand, Commamnd.EndChoosTrain)
                //delay時間後，將圖片從畫面移動到場警(try幾個小時)
            }

            if (this.changeSpeed[0] != null && this.totaleDT > (this.endDT * this.changeSpeed[0])) {
                // this.speedChange = this.speedChange * 2
                this.speedChange = this.speedChange + Math.pow(0.6, this.changeSpeed.length)
                this.changeSpeed.shift()
            }
        }

    }
    initTrainSprite() {
        for (let index = 0; index < this.itmes.length; index++) {
            this.itmes[index].sprtie.spriteFrame = AssetMng.Asset.get("TrainType_" + index);
        }
    }
    mineChange() {
        this.MineTrain.sprtie.spriteFrame = this.itmes[this.lastShowTrain].sprtie.spriteFrame
        // this.MineTrain.sprtie.spriteFrame = AssetMng.Asset.get("棋子");
    }
    changeShow() {
        this.itmes[this.lastShowTrain].noChoose()
        let random = this.lastShowTrain
        while (random == this.lastShowTrain) {
            random = Math.floor(Math.random() * 6)
        }
        this.lastShowTrain = random;
        this.itmes[random].choose()
    }
    changeTrainType() {
        switch (this.lastShowTrain) {
            case 0:
                return TrainType.Type0;
            case 1:
                return TrainType.Type1;
            case 2:
                return TrainType.Type2;
            case 3:
                return TrainType.Type3;;
            case 4:
                return TrainType.Type4;;
            case 5:
                return TrainType.Type5;;
        }
    }
    async getTrainAciton(callback?: Function) {
        return new Promise<void>((resolve, reject) => {
            cc.tween(this.MineTrain.node)
                .delay(2)
                .repeat(2, cc.tween()
                    .to(0.2, { scale: 1.3 })
                    .to(1, { scale: 1 }, { easing: Easing.elasticOut })
                )
                .call(resolve)
                .start()
        })

    }
}


class TrainItem extends ComponentBase {
    type: number;
    sprtie: cc.Sprite;
    arrow: cc.Node;
    protected onLoad(): void {
        this.node.setScale(1)
        this.arrow = cc.find("Arrow", this.node)
        this.sprtie = cc.find("Train", this.node).getComponent(cc.Sprite)
        this.sprtie.spriteFrame = null;
        this.arrow.active = false
    }
    choose() {
        this.arrow.active = true
        this.node.setScale(1.3)

    }
    noChoose() {
        this.arrow.active = false
        this.node.setScale(1)
    }
}
