
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/DataCloud.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this.rangeTime_Left = 5;
        _this.rangeTime_Right = 7;
        _this.baseSpeed = 30;
        _this.rangeSpeed = 100;
        _this.CloudClass = new Map();
        return _this;
    }
    return DataCloud;
}(ComponentBase_1.default));
exports.default = DataCloud;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxEYXRhQ2xvdWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQXVEO0FBRXZEO0lBQXVDLDZCQUFhO0lBQXBEO1FBQUEscUVBY0M7UUFaRyxZQUFNLEdBQVcsSUFBSSxDQUFBO1FBQ3JCLFlBQU0sR0FBVyxHQUFHLENBQUE7UUFDcEIsb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFFM0IscUJBQWUsR0FBVyxDQUFDLENBQUM7UUFLNUIsZUFBUyxHQUFTLEVBQUUsQ0FBQTtRQUNwQixnQkFBVSxHQUFXLEdBQUcsQ0FBQztRQUN6QixnQkFBVSxHQUF5QixJQUFJLEdBQUcsRUFBRSxDQUFBOztJQUNoRCxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQWRBLEFBY0MsQ0Fkc0MsdUJBQWEsR0FjbkQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tICcuLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZSc7XHJcbmltcG9ydCBDbG91ZEl0ZW0gZnJvbSAnLi4vSXRlbS9DbG91ZEl0ZW0nO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhQ2xvdWQgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuXHJcbiAgICByYW5nZVg6IG51bWJlciA9IDEyODAgXHJcbiAgICByYW5nZVk6IG51bWJlciA9IDcyMFxyXG4gICAgcmFuZ2VUaW1lX0xlZnQ6IG51bWJlciA9IDU7XHJcbiAgICByYW5kb21UaW1lX0xlZnQ6IG51bWJlcjtcclxuICAgIHJhbmdlVGltZV9SaWdodDogbnVtYmVyID0gNztcclxuICAgIHJhbmRvbVRpbWVfUmlnaHQ6IG51bWJlcjtcclxuICAgIHRlbXBfTGVmdDogbnVtYmVyO1xyXG4gICAgdGVtcF9SaWdodDogbnVtYmVyO1xyXG4gICAgdGVtcE51bWJlcjtcclxuICAgIGJhc2VTcGVlZDpudW1iZXIgPTMwXHJcbiAgICByYW5nZVNwZWVkOiBudW1iZXIgPSAxMDA7XHJcbiAgICBDbG91ZENsYXNzOk1hcDxudW1iZXIsQ2xvdWRJdGVtPiA9IG5ldyBNYXAoKVxyXG59Il19