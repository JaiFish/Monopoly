"use strict";
cc._RF.push(module, '9177brEGWpJMpLCnZJZv/FU', 'CloudItem');
// Script/Item/CloudItem.ts

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
var CloudItem = /** @class */ (function (_super) {
    __extends(CloudItem, _super);
    function CloudItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloudItem.prototype.onLoad = function () {
        this.node.opacity = 0;
    };
    CloudItem.prototype.start = function () {
        cc.tween(this.node)
            .to(1.5, { opacity: 255 })
            .start();
    };
    CloudItem.prototype.update = function (dt) {
        if (this.isCanGO) {
            this.node.x += (dt * this.Speed) * this.direction;
            if (this.direction > 0) {
                if (this.node.x > this.targetX)
                    this.EventEmit(GameEvent_1.GameEvent.DeletCloud, this.cloudNumber);
            }
            else {
                if (this.node.x < this.targetX)
                    this.EventEmit(GameEvent_1.GameEvent.DeletCloud, this.cloudNumber);
            }
        }
    };
    return CloudItem;
}(ComponentBase_1.default));
exports.default = CloudItem;

cc._RF.pop();