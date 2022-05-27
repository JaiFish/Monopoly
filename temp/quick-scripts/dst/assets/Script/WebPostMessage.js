
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
        // console.error(data);
        window.parent.postMessage(data, "*");
        // console.log("傳遞封包內容", data);
    };
    //接收到網頁給的訊息
    WebPostMessage.prototype.onReceiveMessage = function (event) {
        var cmd = event.data.cmd;
        var viewType = event.data.viewType;
        // console.error(event);
        switch (String(cmd)) {
            case "OpenView":
                // console.log("收到");
                switch (viewType) {
                    case 0:
                        EventMng_1.default.emit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.CloseVideo);
                        break;
                    default:
                        break;
                }
                break;
            case "Loading":
                EventMng_1.default.emit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.WebCheckData);
                break;
        }
        // EventMng.emit(cmd, viewType);
        // console.log("收到內容", event);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWJQb3N0TWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBeUM7QUFDekMsOENBQTZDO0FBQzdDLDZDQUF3QztBQUV4QztJQUFBO0lBeUNBLENBQUM7SUF4Q0csc0JBQXNCO0lBQ3RCLGdDQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsV0FBVztJQUNYLDZCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsWUFBWTtRQUNaLGtDQUFrQztRQUNsQyx1QkFBdUI7UUFFdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLCtCQUErQjtJQUVuQyxDQUFDO0lBQ0QsV0FBVztJQUNYLHlDQUFnQixHQUFoQixVQUFpQixLQUFLO1FBQ2xCLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JDLHdCQUF3QjtRQUN4QixRQUFRLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNqQixLQUFLLFVBQVU7Z0JBQ1gscUJBQXFCO2dCQUVyQixRQUFRLFFBQVEsRUFBRTtvQkFDZCxLQUFLLENBQUM7d0JBQ0Ysa0JBQVEsQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTt3QkFDekQsTUFBTTtvQkFDVjt3QkFDSSxNQUFNO2lCQUNiO2dCQUNELE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1Ysa0JBQVEsQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtnQkFDM0QsTUFBTTtTQUNiO1FBRUQsZ0NBQWdDO1FBQ2hDLDhCQUE4QjtJQUNsQyxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQXpDQSxBQXlDQyxJQUFBO0FBekNZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tIFwiLi9FbnVtL0NvbW1hZFwiO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tIFwiLi9FbnVtL0dhbWVFdmVudFwiO1xyXG5pbXBvcnQgRXZlbnRNbmcgZnJvbSBcIi4vRXZlbnQvRXZlbnRNbmdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJQb3N0TWVzc2FnZSB7XHJcbiAgICAvLyBjdXJyZVZpZGVvOiBudW1iZXI7XHJcbiAgICBjb25uZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLm9uUmVjZWl2ZU1lc3NhZ2UsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIC8vICDlgrPntabntrLpoIHnq6/oqIrmga9cclxuICAgIHNlbmQoZGF0YTogb2JqZWN0KTogdm9pZCB7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZVZpZGVvID0gZGF0YS52aWV3VHlwZVxyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoZGF0YSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoZGF0YSwgXCIqXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5YKz6YGe5bCB5YyF5YWn5a65XCIsIGRhdGEpO1xyXG5cclxuICAgIH1cclxuICAgIC8v5o6l5pS25Yiw57ay6aCB57Wm55qE6KiK5oGvXHJcbiAgICBvblJlY2VpdmVNZXNzYWdlKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY21kID0gZXZlbnQuZGF0YS5jbWQ7XHJcbiAgICAgICAgY29uc3Qgdmlld1R5cGUgPSBldmVudC5kYXRhLnZpZXdUeXBlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoZXZlbnQpO1xyXG4gICAgICAgIHN3aXRjaCAoU3RyaW5nKGNtZCkpIHtcclxuICAgICAgICAgICAgY2FzZSBcIk9wZW5WaWV3XCI6XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaUtuWIsFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHZpZXdUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFdmVudE1uZy5lbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuQ2xvc2VWaWRlbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkxvYWRpbmdcIjpcclxuICAgICAgICAgICAgICAgIEV2ZW50TW5nLmVtaXQoR2FtZUV2ZW50LlNlbmRDb21tYW5kLCBDb21tYW1uZC5XZWJDaGVja0RhdGEpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEV2ZW50TW5nLmVtaXQoY21kLCB2aWV3VHlwZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLmlLbliLDlhaflrrlcIiwgZXZlbnQpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==