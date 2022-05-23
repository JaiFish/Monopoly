import { Commamnd } from "./Enum/Commad";
import { GameEvent } from "./Enum/GameEvent";
import EventMng from "./Event/EventMng";

export class WebPostMessage {
    // curreVideo: number;
    connect(): void {
        window.addEventListener("message", this.onReceiveMessage, false);
    }
    //  傳給網頁端訊息
    send(data: object): void {
        //@ts-ignore
        // this.curreVideo = data.viewType
        console.error(data);

        window.parent.postMessage(data, "*");
        console.log("傳遞封包內容", data);

    }
    //接收到網頁給的訊息
    onReceiveMessage(event): void {
        const cmd = event.data.cmd;
        const viewType = event.data.viewType;
        console.error(event);
        switch (String(cmd)) {
            case "OpenView":
                console.log("收到");

                switch (viewType) {
                    case 0:
                        EventMng.emit(GameEvent.SendCommand, Commamnd.CloseVideo)
                        break;
                    default:
                        break;
                }
                break;
            case "Loading":
                EventMng.emit(GameEvent.SendCommand, Commamnd.WebCheckData)
                break;
        }

        // EventMng.emit(cmd, viewType);
        console.log("收到內容", event);
    }

}