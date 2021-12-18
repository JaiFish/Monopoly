const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        cc.tween(this.node)
            .bezierTo(1, cc.v2(0, 0), cc.v2(50, 20), cc.v2(100, 0))
            .start()
    }

    // update (dt) {}
}
