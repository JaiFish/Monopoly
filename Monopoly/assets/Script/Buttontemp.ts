import { onClick } from "./@Type";
import Controll from "./Controll";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CButtontemp extends cc.Component {

    @property(cc.Sprite)
    sBakeGroud: cc.Sprite = null;

    @property(cc.Button)
    btnStart: cc.Button = null;;

    start() {
        cc.tween(this.btnStart.node)
            .repeatForever(
                cc.tween()
                    .to(1, { scale: 1.5 })
                    .to(1, { scale: 1 })
            )
            .start()
        this.btnStart.node.on(onClick.TouchEnd, () => {
            Controll.man.StartGO(4);
        }, this)
    }

}

