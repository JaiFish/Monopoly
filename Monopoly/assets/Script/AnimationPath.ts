const { ccclass, property } = cc._decorator;

@ccclass
export default class AnimationPath extends cc.Component {
    public static instens: AnimationPath = null
    @property(cc.Animation)
    public aPath: cc.Animation = null;
    onLoad() {
        AnimationPath.instens = this
    }


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        // var eh = this.aPath.getClips()[0].curveData.porps
        // console.log(eh);
        // new Array().

    }

    // update (dt) {}
}
