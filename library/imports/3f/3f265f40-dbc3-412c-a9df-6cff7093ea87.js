"use strict";
cc._RF.push(module, '3f2659A28NBLKnfbP9wk+qH', 'Panel_AniPath');
// Script/Class/Panel_AniPath.ts

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
var Panel_AniPath = /** @class */ (function (_super) {
    __extends(Panel_AniPath, _super);
    function Panel_AniPath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel_AniPath.prototype.onLoad = function () {
        this.aPath = cc.find("PathAnimation", this.node).getComponent(cc.Animation);
        this.TWPath = cc.find("TaiwanPath", this.node).getComponent(cc.Animation);
    };
    return Panel_AniPath;
}(ComponentBase_1.default));
exports.default = Panel_AniPath;

cc._RF.pop();