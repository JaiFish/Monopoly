import ComponentBase from '../../Data/base/ComponentBase';
import { Easing } from '../../Enum/Easing';
export default class MessageAction extends ComponentBase {
    outBack(_node: cc.Node, _scale: number, callback?: Function) {
        cc.Tween.stopAllByTarget(_node)
        let action1 = cc.tween().to(1, { scale: _scale }, { easing: Easing.backOut })
        callback ?
            action1.call(callback.bind(this)).clone(_node).start() :
            action1.clone(_node).start();
    }
    inBack(_node: cc.Node, _scale: number, callback?: Function) {
        cc.Tween.stopAllByTarget(_node)
        let action1 = cc.tween().to(0.5, { scale: _scale }, { easing: Easing.backIn })
        callback ?
            action1.call(callback.bind(this)).clone(_node).start() :
            action1.clone(_node).start();
    }
    fadeOut(_node: cc.Node, callback: Function) {
        cc.Tween.stopAllByTarget(_node)
        let action1 = cc.tween().to(1, { y: -20, opacity: 0 })
        callback ?
            action1.call(callback.bind(this)).clone(_node).start() :
            action1.clone(_node).start();
    }
    fadeIn(_node: cc.Node, callback: Function) {
        cc.Tween.stopAllByTarget(_node)
        let action1 = cc.tween().to(1, { y: 0, opacity: 255 })
        callback ?
            action1.call(callback.bind(this)).clone(_node).start() :
            action1.clone(_node).start();
    }
}