"use strict";
cc._RF.push(module, '40417rdjU1F17ChzZ3kp9wn', 'MapItem');
// Script/Item/MapItem.ts

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
var MapItem = /** @class */ (function (_super) {
    __extends(MapItem, _super);
    function MapItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MapItem.prototype.setSprite = function (_spriteframe) {
        this.node.getComponent(cc.Sprite).spriteFrame = _spriteframe;
    };
    Object.defineProperty(MapItem.prototype, "myNumber", {
        get: function () {
            return this._myNumber;
        },
        set: function (v) {
            this._myNumber = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapItem.prototype, "myType", {
        get: function () {
            return this._myType;
        },
        set: function (v) {
            this._myType = v;
        },
        enumerable: false,
        configurable: true
    });
    return MapItem;
}(ComponentBase_1.default));
exports.default = MapItem;

cc._RF.pop();