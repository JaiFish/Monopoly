"use strict";
cc._RF.push(module, 'be4fb8uT39I/720BKGk45cf', 'Panel_Loading');
// Script/Class/Panel_Loading.ts

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
var Panel_Loading = /** @class */ (function (_super) {
    __extends(Panel_Loading, _super);
    function Panel_Loading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel_Loading.prototype.onLoad = function () {
        this.point = cc.find("Message/Layout/Point", this.node).getComponent(cc.Label);
        this.point.string = "";
        this.defaultReset();
    };
    Panel_Loading.prototype.start = function () {
        var _this = this;
        this.PointAction = setInterval(function () {
            _this.point.string = _this.point.string + ".";
            if (_this.point.string.length > 3)
                _this.point.string = "";
        }, 1000);
    };
    Panel_Loading.prototype.Actionhide = function () {
        var _this = this;
        cc.tween(this.node)
            .to(0.3, { opacity: 0 })
            .call(function () {
            clearInterval(_this.PointAction);
            _this.node.destroy();
        })
            .start();
    };
    return Panel_Loading;
}(ComponentBase_1.default));
exports.default = Panel_Loading;

cc._RF.pop();