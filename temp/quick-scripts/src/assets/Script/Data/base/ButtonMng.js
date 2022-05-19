"use strict";
cc._RF.push(module, '46070PfhJxKYLVoeCrjm0Tb', 'ButtonMng');
// Script/Data/base/ButtonMng.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyButton = /** @class */ (function () {
    function MyButton() {
    }
    MyButton.prototype.addEvent = function (componentTrget, component, callBack, buttonTarget, callbackValue) {
        if (this.findEvent(buttonTarget, callBack))
            this.reMoveEvent(buttonTarget, callBack);
        var event = new cc.Component.EventHandler();
        // console.log(componentTrget);
        event.target = componentTrget;
        event.component = component;
        event.handler = callBack;
        if (callbackValue)
            event.customEventData = callbackValue;
        buttonTarget.clickEvents.push(event);
    };
    MyButton.prototype.findEvent = function (buttonTarget, callBack) {
        var isFind = false;
        var eventArr = buttonTarget.clickEvents;
        for (var index = 0; index < eventArr.length; index++) {
            if (eventArr[index].handler == callBack)
                return isFind = true;
        }
        return isFind;
    };
    MyButton.prototype.checkEvent = function (buttonTarget) {
        var isFind = false;
        var eventArr = buttonTarget.clickEvents;
        if (eventArr.length > 0)
            return isFind = true;
        else
            isFind;
    };
    MyButton.prototype.reMoveEvent = function (buttonTarget, callBack) {
        var eventArr = buttonTarget.clickEvents;
        for (var index = 0; index < eventArr.length; index++) {
            if (eventArr[index].handler == callBack)
                return eventArr.splice(index);
        }
    };
    return MyButton;
}());
exports.default = new MyButton();

cc._RF.pop();