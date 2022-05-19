"use strict";
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