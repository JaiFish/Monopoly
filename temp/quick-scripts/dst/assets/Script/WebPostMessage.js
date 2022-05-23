
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
        switch (String(cmd)) {
            case "OpenView":
                console.log("收到");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWJQb3N0TWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBeUM7QUFDekMsOENBQTZDO0FBQzdDLDZDQUF3QztBQUV4QztJQUFBO0lBeUNBLENBQUM7SUF4Q0csc0JBQXNCO0lBQ3RCLGdDQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsV0FBVztJQUNYLDZCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsWUFBWTtRQUNaLGtDQUFrQztRQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBCLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVoQyxDQUFDO0lBQ0QsV0FBVztJQUNYLHlDQUFnQixHQUFoQixVQUFpQixLQUFLO1FBQ2xCLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsUUFBUSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakIsS0FBSyxVQUFVO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWxCLFFBQVEsUUFBUSxFQUFFO29CQUNkLEtBQUssQ0FBQzt3QkFDRixrQkFBUSxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxpQkFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO3dCQUN6RCxNQUFNO29CQUNWO3dCQUNJLE1BQU07aUJBQ2I7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixrQkFBUSxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxpQkFBUSxDQUFDLFlBQVksQ0FBQyxDQUFBO2dCQUMzRCxNQUFNO1NBQ2I7UUFFRCxnQ0FBZ0M7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtBQXpDWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbW5kIH0gZnJvbSBcIi4vRW51bS9Db21tYWRcIjtcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSBcIi4vRW51bS9HYW1lRXZlbnRcIjtcclxuaW1wb3J0IEV2ZW50TW5nIGZyb20gXCIuL0V2ZW50L0V2ZW50TW5nXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2ViUG9zdE1lc3NhZ2Uge1xyXG4gICAgLy8gY3VycmVWaWRlbzogbnVtYmVyO1xyXG4gICAgY29ubmVjdCgpOiB2b2lkIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5vblJlY2VpdmVNZXNzYWdlLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICAvLyAg5YKz57Wm57ay6aCB56uv6KiK5oGvXHJcbiAgICBzZW5kKGRhdGE6IG9iamVjdCk6IHZvaWQge1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIC8vIHRoaXMuY3VycmVWaWRlbyA9IGRhdGEudmlld1R5cGVcclxuICAgICAgICBjb25zb2xlLmVycm9yKGRhdGEpO1xyXG5cclxuICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKGRhdGEsIFwiKlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWCs+mBnuWwgeWMheWFp+WuuVwiLCBkYXRhKTtcclxuXHJcbiAgICB9XHJcbiAgICAvL+aOpeaUtuWIsOe2sumggee1pueahOioiuaBr1xyXG4gICAgb25SZWNlaXZlTWVzc2FnZShldmVudCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNtZCA9IGV2ZW50LmRhdGEuY21kO1xyXG4gICAgICAgIGNvbnN0IHZpZXdUeXBlID0gZXZlbnQuZGF0YS52aWV3VHlwZTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGV2ZW50KTtcclxuICAgICAgICBzd2l0Y2ggKFN0cmluZyhjbWQpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJPcGVuVmlld1wiOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmlLbliLBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh2aWV3VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnRNbmcuZW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLkNsb3NlVmlkZW8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMb2FkaW5nXCI6XHJcbiAgICAgICAgICAgICAgICBFdmVudE1uZy5lbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuV2ViQ2hlY2tEYXRhKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFdmVudE1uZy5lbWl0KGNtZCwgdmlld1R5cGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pS25Yiw5YWn5a65XCIsIGV2ZW50KTtcclxuICAgIH1cclxuXHJcbn0iXX0=