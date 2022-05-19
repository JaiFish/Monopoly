
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/base/ButtonMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxiYXNlXFxCdXR0b25NbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBcUNBLENBQUM7SUFwQ1UsMkJBQVEsR0FBZixVQUFnQixjQUF1QixFQUFFLFNBQWlCLEVBQUUsUUFBZ0IsRUFBRSxZQUF1QixFQUFFLGFBQXNCO1FBQ3pILElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDO1lBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDcEYsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVDLCtCQUErQjtRQUUvQixLQUFLLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztRQUM5QixLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUM1QixLQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLGFBQWE7WUFDYixLQUFLLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQTtRQUN6QyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBQ00sNEJBQVMsR0FBaEIsVUFBaUIsWUFBdUIsRUFBRSxRQUFnQjtRQUN0RCxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxRQUFRLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQTtRQUN2QyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNsRCxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLElBQUksUUFBUTtnQkFDbkMsT0FBTyxNQUFNLEdBQUcsSUFBSSxDQUFBO1NBQzNCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNNLDZCQUFVLEdBQWpCLFVBQWtCLFlBQXVCO1FBQ3JDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFBO1FBQ3ZDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTyxNQUFNLEdBQUcsSUFBSSxDQUFBOztZQUN4QyxNQUFNLENBQUE7SUFDZixDQUFDO0lBRU0sOEJBQVcsR0FBbEIsVUFBbUIsWUFBdUIsRUFBRSxRQUFnQjtRQUN4RCxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFBO1FBQ3ZDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2xELElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxRQUFRO2dCQUNuQyxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDcEM7SUFDTCxDQUFDO0lBRUwsZUFBQztBQUFELENBckNBLEFBcUNDLElBQUE7QUFDRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTXlCdXR0b24ge1xyXG4gICAgcHVibGljIGFkZEV2ZW50KGNvbXBvbmVudFRyZ2V0OiBjYy5Ob2RlLCBjb21wb25lbnQ6IHN0cmluZywgY2FsbEJhY2s6IHN0cmluZywgYnV0dG9uVGFyZ2V0OiBjYy5CdXR0b24sIGNhbGxiYWNrVmFsdWU/OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5maW5kRXZlbnQoYnV0dG9uVGFyZ2V0LCBjYWxsQmFjaykpIHRoaXMucmVNb3ZlRXZlbnQoYnV0dG9uVGFyZ2V0LCBjYWxsQmFjaylcclxuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbXBvbmVudFRyZ2V0KTtcclxuXHJcbiAgICAgICAgZXZlbnQudGFyZ2V0ID0gY29tcG9uZW50VHJnZXQ7XHJcbiAgICAgICAgZXZlbnQuY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG4gICAgICAgIGV2ZW50LmhhbmRsZXIgPSBjYWxsQmFjaztcclxuICAgICAgICBpZiAoY2FsbGJhY2tWYWx1ZSlcclxuICAgICAgICAgICAgZXZlbnQuY3VzdG9tRXZlbnREYXRhID0gY2FsbGJhY2tWYWx1ZVxyXG4gICAgICAgIGJ1dHRvblRhcmdldC5jbGlja0V2ZW50cy5wdXNoKGV2ZW50KVxyXG4gICAgfVxyXG4gICAgcHVibGljIGZpbmRFdmVudChidXR0b25UYXJnZXQ6IGNjLkJ1dHRvbiwgY2FsbEJhY2s6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBpc0ZpbmQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgZXZlbnRBcnIgPSBidXR0b25UYXJnZXQuY2xpY2tFdmVudHNcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXZlbnRBcnIubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudEFycltpbmRleF0uaGFuZGxlciA9PSBjYWxsQmFjaylcclxuICAgICAgICAgICAgICAgIHJldHVybiBpc0ZpbmQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc0ZpbmQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2hlY2tFdmVudChidXR0b25UYXJnZXQ6IGNjLkJ1dHRvbikge1xyXG4gICAgICAgIGxldCBpc0ZpbmQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgZXZlbnRBcnIgPSBidXR0b25UYXJnZXQuY2xpY2tFdmVudHNcclxuICAgICAgICBpZiAoZXZlbnRBcnIubGVuZ3RoID4gMCkgcmV0dXJuIGlzRmluZCA9IHRydWVcclxuICAgICAgICBlbHNlIGlzRmluZFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZU1vdmVFdmVudChidXR0b25UYXJnZXQ6IGNjLkJ1dHRvbiwgY2FsbEJhY2s6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBldmVudEFyciA9IGJ1dHRvblRhcmdldC5jbGlja0V2ZW50c1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBldmVudEFyci5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50QXJyW2luZGV4XS5oYW5kbGVyID09IGNhbGxCYWNrKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50QXJyLnNwbGljZShpbmRleClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBNeUJ1dHRvbigpOyJdfQ==