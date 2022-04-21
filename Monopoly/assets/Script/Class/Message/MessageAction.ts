import ComponentBase from '../../Data/base/ComponentBase';
export default class MessageAction extends ComponentBase {
    outBack(_node: cc.Node, _scale: number) {
        cc.tween(_node)
            .to(2, { scale: _scale })
            .start()
    }
    fadeOut(_node: cc.Node, callback: Function) {
        let action1 = cc.tween().to(1, { y: -20, opacity: 0 })
        callback ?
            action1.call(callback.bind(this)).clone(_node).start() :
            action1.clone(_node).start();
    }
    fadeIn(_node: cc.Node, callback: Function) {
        let action1 = cc.tween().to(1, { y: 0, opacity: 255 })
        callback ?
            action1.call(callback.bind(this)).clone(_node).start() :
            action1.clone(_node).start();
    }
}