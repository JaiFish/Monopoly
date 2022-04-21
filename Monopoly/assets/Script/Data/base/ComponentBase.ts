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
}