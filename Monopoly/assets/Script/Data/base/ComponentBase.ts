import EventMng from "../../Event/EventMng";

export default class ComponentBase extends cc.Component {
    initEvent(name: string, callback: Function) {
        EventMng.on(name, callback, this)
    }
    unEvent(name: string, callback: Function) {
        EventMng.off(name, callback, this)
    }
    show() {
        this.node.active = true;
    }

    hide() {
        this.node.active = false;
    }
    EventEmit(type: string, ...any: any) {
        EventMng.emit(type, ...any)
    }
    actionShow(callback?: Function) {
        this.show()
        cc.Tween.stopAllByTarget(this.node)
        let action1 = cc.tween()
            .set({ y: this.node.y - 30, opacity: 0 })
            .to(0.5, { y: 0, opacity: 255 })
        callback ?
            action1.call(callback.bind(this)).clone(this.node).start() :
            action1.clone(this.node).start();
    }
    async actionHide(callback?: Function) {
        return new Promise<void>((resolve, reject) => {
            cc.Tween.stopAllByTarget(this.node)
            let action1 = cc.tween().by(1, { y: 30, opacity: -255 }).call(this.hide.bind(this))
            callback ?
                action1.call(callback.bind(this)).call(resolve).clone(this.node).start() :
                action1.call(resolve).clone(this.node).start();
        })

    }
}