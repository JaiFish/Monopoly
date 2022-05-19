
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/MapItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxNYXBJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUF1RDtBQUd2RDtJQUFxQywyQkFBYTtJQUFsRDs7SUEyQkEsQ0FBQztJQXRCRywyQkFBUyxHQUFULFVBQVUsWUFBNEI7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7SUFFakUsQ0FBQztJQUdELHNCQUFXLDZCQUFRO2FBSW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3pCLENBQUM7YUFORCxVQUFvQixDQUFTO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBTUQsc0JBQVcsMkJBQU07YUFJakI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDdkIsQ0FBQzthQU5ELFVBQWtCLENBQWM7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFNTCxjQUFDO0FBQUQsQ0EzQkEsQUEyQkMsQ0EzQm9DLHVCQUFhLEdBMkJqRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZVwiO1xyXG5pbXBvcnQgeyBTdGF0aW9uVHlwZSB9IGZyb20gXCIuLi9FbnVtL1N0YXRpb25UeXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBJdGVtIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICBfbXlOdW1iZXI6IG51bWJlcjtcclxuICAgIF9teVR5cGU6IFN0YXRpb25UeXBlO1xyXG5cclxuXHJcbiAgICBzZXRTcHJpdGUoX3Nwcml0ZWZyYW1lOiBjYy5TcHJpdGVGcmFtZSkge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IF9zcHJpdGVmcmFtZTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzZXQgbXlOdW1iZXIodjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbXlOdW1iZXIgPSB2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbXlOdW1iZXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbXlOdW1iZXJcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG15VHlwZSh2OiBTdGF0aW9uVHlwZSkge1xyXG4gICAgICAgIHRoaXMuX215VHlwZSA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBteVR5cGUoKTogU3RhdGlvblR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9teVR5cGVcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==