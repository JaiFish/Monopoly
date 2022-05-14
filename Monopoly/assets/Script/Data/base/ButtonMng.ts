class MyButton {
    public addEvent(componentTrget: cc.Node, component: string, callBack: string, buttonTarget: cc.Button, callbackValue?: string) {
        if (this.findEvent(buttonTarget, callBack)) this.reMoveEvent(buttonTarget, callBack)
        let event = new cc.Component.EventHandler();
        console.log(componentTrget);

        event.target = componentTrget;
        event.component = component;
        event.handler = callBack;
        if (callbackValue)
            event.customEventData = callbackValue
        buttonTarget.clickEvents.push(event)
    }
    public findEvent(buttonTarget: cc.Button, callBack: string) {
        let isFind = false;
        let eventArr = buttonTarget.clickEvents
        for (let index = 0; index < eventArr.length; index++) {
            if (eventArr[index].handler == callBack)
                return isFind = true
        }
        return isFind;
    }
    public checkEvent(buttonTarget: cc.Button) {
        let isFind = false;
        let eventArr = buttonTarget.clickEvents
        if (eventArr.length > 0) return isFind = true
        else isFind
    }

    public reMoveEvent(buttonTarget: cc.Button, callBack: string) {
        let eventArr = buttonTarget.clickEvents
        for (let index = 0; index < eventArr.length; index++) {
            if (eventArr[index].handler == callBack)
                return eventArr.splice(index)
        }
    }

}
export default new MyButton();