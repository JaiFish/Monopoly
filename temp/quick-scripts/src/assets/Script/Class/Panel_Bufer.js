"use strict";
cc._RF.push(module, 'c6d366fwYVKw6ommnEvEA+X', 'Panel_Bufer');
// Script/Class/Panel_Bufer.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBase_1 = require("../Data/base/ComponentBase");
var GameEvent_1 = require("../Enum/GameEvent");
var Panel_Bufer = /** @class */ (function (_super) {
    __extends(Panel_Bufer, _super);
    function Panel_Bufer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel_Bufer.prototype.onLoad = function () {
        this.bufer = cc.find("Bufer", this.node);
        this.initEvent(GameEvent_1.GameEvent.OpenBufer, this.openRender);
        this.initEvent(GameEvent_1.GameEvent.CloseBufer, this.closeRender);
        this.node.opacity = 255;
    };
    Panel_Bufer.prototype.openRender = function () {
        console.log("HIHIHIHI");
        this.bufer.active = true;
        this.EventEmit(GameEvent_1.GameEvent.StopCloud);
    };
    Panel_Bufer.prototype.closeRender = function () {
        this.bufer.active = false;
        this.EventEmit(GameEvent_1.GameEvent.StartCloud);
    };
    return Panel_Bufer;
}(ComponentBase_1.default));
exports.default = Panel_Bufer;

cc._RF.pop();