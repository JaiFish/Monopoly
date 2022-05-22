
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxEYXRhQ2xvdWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQXVEO0FBRXZEO0lBQXVDLDZCQUFhO0lBQXBEO1FBQUEscUVBZ0JDO1FBZEcsWUFBTSxHQUFXLElBQUksQ0FBQTtRQUNyQixZQUFNLEdBQVcsR0FBRyxDQUFBO1FBQ3BCLG1CQUFhLEdBQVcsQ0FBQyxDQUFBO1FBQ3pCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBRTNCLG9CQUFjLEdBQVcsQ0FBQyxDQUFBO1FBQzFCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBSzVCLGVBQVMsR0FBVyxFQUFFLENBQUE7UUFDdEIsZ0JBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZ0JBQVUsR0FBMkIsSUFBSSxHQUFHLEVBQUUsQ0FBQTs7SUFDbEQsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsQ0FoQnNDLHVCQUFhLEdBZ0JuRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gJy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlJztcclxuaW1wb3J0IENsb3VkSXRlbSBmcm9tICcuLi9JdGVtL0Nsb3VkSXRlbSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFDbG91ZCBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG5cclxuICAgIHJhbmdlWDogbnVtYmVyID0gMTI4MFxyXG4gICAgcmFuZ2VZOiBudW1iZXIgPSA3MjBcclxuICAgIGJhc2VUaW1lX0xlZnQ6IG51bWJlciA9IDNcclxuICAgIHJhbmdlVGltZV9MZWZ0OiBudW1iZXIgPSA1O1xyXG4gICAgcmFuZG9tVGltZV9MZWZ0OiBudW1iZXI7XHJcbiAgICBiYXNlVGltZV9SaWdodDogbnVtYmVyID0gM1xyXG4gICAgcmFuZ2VUaW1lX1JpZ2h0OiBudW1iZXIgPSA3O1xyXG4gICAgcmFuZG9tVGltZV9SaWdodDogbnVtYmVyO1xyXG4gICAgdGVtcF9MZWZ0OiBudW1iZXI7XHJcbiAgICB0ZW1wX1JpZ2h0OiBudW1iZXI7XHJcbiAgICB0ZW1wTnVtYmVyO1xyXG4gICAgYmFzZVNwZWVkOiBudW1iZXIgPSAzMFxyXG4gICAgcmFuZ2VTcGVlZDogbnVtYmVyID0gNjA7XHJcbiAgICBDbG91ZENsYXNzOiBNYXA8bnVtYmVyLCBDbG91ZEl0ZW0+ID0gbmV3IE1hcCgpXHJcbn0iXX0=