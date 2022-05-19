
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/WebPostMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d6e6EBSTZB/L/xHih158WW', 'WebPostMessage');
// Script/WebPostMessage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebPostMessage = void 0;
var Commad_1 = require("./Enum/Commad");
var GameEvent_1 = require("./Enum/GameEvent");
var EventMng_1 = require("./Event/EventMng");
var WebPostMessage = /** @class */ (function () {
    function WebPostMessage() {
    }
    // curreVideo: number;
    WebPostMessage.prototype.connect = function () {
        window.addEventListener("message", this.onReceiveMessage, false);
    };
    //  傳給網頁端訊息
    WebPostMessage.prototype.send = function (data) {
        //@ts-ignore
        // this.curreVideo = data.viewType
        console.error(data);
        window.parent.postMessage(data, "*");
        console.log("傳遞封包內容", data);
    };
    //接收到網頁給的訊息
    WebPostMessage.prototype.onReceiveMessage = function (event) {
        var cmd = event.data.cmd;
        var viewType = event.data.viewType;
        console.error(event);
        switch (viewType) {
            case 0:
                EventMng_1.default.emit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.CloseVideo);
                break;
            default:
                break;
        }
        // EventMng.emit(cmd, viewType);
        console.log("收到內容", event);
    };
    return WebPostMessage;
}());
exports.WebPostMessage = WebPostMessage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWJQb3N0TWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBeUM7QUFDekMsOENBQTZDO0FBQzdDLDZDQUF3QztBQUV4QztJQUFBO0lBZ0NBLENBQUM7SUEvQkcsc0JBQXNCO0lBQ3RCLGdDQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsV0FBVztJQUNYLDZCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsWUFBWTtRQUNaLGtDQUFrQztRQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBCLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVoQyxDQUFDO0lBQ0QsV0FBVztJQUNYLHlDQUFnQixHQUFoQixVQUFpQixLQUFLO1FBQ2xCLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsUUFBUSxRQUFRLEVBQUU7WUFDZCxLQUFLLENBQUM7Z0JBQ0Ysa0JBQVEsQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtnQkFDekQsTUFBTTtZQUVWO2dCQUNJLE1BQU07U0FDYjtRQUNELGdDQUFnQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUwscUJBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tIFwiLi9FbnVtL0NvbW1hZFwiO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tIFwiLi9FbnVtL0dhbWVFdmVudFwiO1xyXG5pbXBvcnQgRXZlbnRNbmcgZnJvbSBcIi4vRXZlbnQvRXZlbnRNbmdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJQb3N0TWVzc2FnZSB7XHJcbiAgICAvLyBjdXJyZVZpZGVvOiBudW1iZXI7XHJcbiAgICBjb25uZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLm9uUmVjZWl2ZU1lc3NhZ2UsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIC8vICDlgrPntabntrLpoIHnq6/oqIrmga9cclxuICAgIHNlbmQoZGF0YTogb2JqZWN0KTogdm9pZCB7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZVZpZGVvID0gZGF0YS52aWV3VHlwZVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoZGF0YSwgXCIqXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5YKz6YGe5bCB5YyF5YWn5a65XCIsIGRhdGEpO1xyXG5cclxuICAgIH1cclxuICAgIC8v5o6l5pS25Yiw57ay6aCB57Wm55qE6KiK5oGvXHJcbiAgICBvblJlY2VpdmVNZXNzYWdlKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY21kID0gZXZlbnQuZGF0YS5jbWQ7XHJcbiAgICAgICAgY29uc3Qgdmlld1R5cGUgPSBldmVudC5kYXRhLnZpZXdUeXBlO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXZlbnQpO1xyXG4gICAgICAgIHN3aXRjaCAodmlld1R5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgRXZlbnRNbmcuZW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLkNsb3NlVmlkZW8pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRXZlbnRNbmcuZW1pdChjbWQsIHZpZXdUeXBlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuaUtuWIsOWFp+WuuVwiLCBldmVudCk7XHJcbiAgICB9XHJcblxyXG59Il19