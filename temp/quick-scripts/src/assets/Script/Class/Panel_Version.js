"use strict";
cc._RF.push(module, 'bc759S6ZVFKGpu6TVIO4hu9', 'Panel_Version');
// Script/Class/Panel_Version.ts

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
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.onLoad = function () {
        this.label = cc.find("label", this.node).getComponent(cc.Label);
    };
    default_1.prototype.setVersion = function (str) {
        this.label.string = str;
    };
    return default_1;
}(ComponentBase_1.default));
exports.default = default_1;

cc._RF.pop();