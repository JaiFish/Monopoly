"use strict";
cc._RF.push(module, 'c8988IRTx5OnIN4bFM01x7W', 'DataCloud');
// Script/Data/DataCloud.ts

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
var DataCloud = /** @class */ (function (_super) {
    __extends(DataCloud, _super);
    function DataCloud() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rangeX = 1280;
        _this.rangeY = 720;
        _this.baseTime_Left = 3;
        _this.rangeTime_Left = 5;
        _this.baseTime_Right = 3;
        _this.rangeTime_Right = 7;
        _this.baseSpeed = 30;
        _this.rangeSpeed = 60;
        _this.CloudClass = new Map();
        return _this;
    }
    return DataCloud;
}(ComponentBase_1.default));
exports.default = DataCloud;

cc._RF.pop();