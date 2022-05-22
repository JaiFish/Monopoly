
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/DataMan.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b1ffO5kORFmKslnvpZVMUS', 'DataMan');
// Script/Data/DataMan.ts

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
var ComponentBase_1 = require("./base/ComponentBase");
var DataMan = /** @class */ (function (_super) {
    __extends(DataMan, _super);
    function DataMan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nowIndex = 0;
        _this.manSkipSeed = 150;
        _this.manDefaultSpeed = 36;
        /**
         * X增加速率，撫平每秒速率
         */
        _this.xSpeed = 1;
        /**
         * Y增加速率，撫平每秒速率
         */
        _this.ySpeed = 1;
        _this.WaitArray = [0, -1];
        return _this;
    }
    return DataMan;
}(ComponentBase_1.default));
exports.default = DataMan;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxEYXRhTWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFpRDtBQUdqRDtJQUFxQywyQkFBYTtJQUFsRDtRQUFBLHFFQStEQztRQTNERyxjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQzFCLHFCQUFlLEdBQVcsRUFBRSxDQUFDO1FBRTdCOztXQUVHO1FBQ0gsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUNuQjs7V0FFRztRQUNILFlBQU0sR0FBVyxDQUFDLENBQUM7UUE2Q25CLGVBQVMsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBOztJQUNqQyxDQUFDO0lBQUQsY0FBQztBQUFELENBL0RBLEFBK0RDLENBL0RvQyx1QkFBYSxHQStEakQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi9iYXNlL0NvbXBvbmVudEJhc2VcIjtcclxuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4uL0VudW0vR2FtZVN0YXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhTWFuIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcblxyXG4gICAgbk1hbjogY2MuTm9kZTtcclxuICAgIGdldENvdW50OiBudW1iZXI7XHJcbiAgICBub3dJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBtYW5TdGF0ZTogR2FtZVN0YXRlO1xyXG4gICAgbWFuU2tpcFNlZWQ6IG51bWJlciA9IDE1MDtcclxuICAgIG1hbkRlZmF1bHRTcGVlZDogbnVtYmVyID0gMzY7XHJcbiAgICBtYW5TcGVlZDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBY5aKe5Yqg6YCf546H77yM5pKr5bmz5q+P56eS6YCf546HXHJcbiAgICAgKi9cclxuICAgIHhTcGVlZDogbnVtYmVyID0gMTtcclxuICAgIC8qKlxyXG4gICAgICogWeWinuWKoOmAn+eOh++8jOaSq+W5s+avj+enkumAn+eOh1xyXG4gICAgICovXHJcbiAgICB5U3BlZWQ6IG51bWJlciA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIOioreWumuavj+enkumAn+W6plxyXG4gICAgICovXHJcbiAgICBzZXRTcGVlZDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6KiI5pmC55W25YmN56eS5pW4XHJcbiAgICAgKi9cclxuICAgIHRlbXBEdENvdW50OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIOenklxyXG4gICAgICovXHJcblxyXG4gICAgZW5kRHQ6IG51bWJlcjtcclxuXHJcbiAgICBhZGRYOiBudW1iZXI7XHJcbiAgICBhZGRZOiBudW1iZXI7XHJcblxyXG4gICAgdGFyZ2V0WDogbnVtYmVyO1xyXG4gICAgdGFyZ2V0WTogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogWOeahOaWueWQkVxyXG4gICAgICovXHJcbiAgICBkaXJlY3Rpb25YOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFnmlrnlkJFcclxuICAgICAqL1xyXG4gICAgZGlyZWN0aW9uWTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDnm67liY3lgZzpnaDnq5nkvY3nva5cclxuICAgICAqL1xyXG4gICAgbm93U3RhdGlvbjogbnVtYmVyO1xyXG5cclxuICAgIGlzQ2FuR286IGJvb2xlYW47XHJcbiAgICBpc0Fycml2YWw6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIOmBiuaIsuaYr+WQpua6luWCmee1kOadn1xyXG4gICAgICovXHJcbiAgICBpc0VuZDogYm9vbGVhblxyXG4gICAgaXNXYWl0U2luZ25hbExpbmdodDogYm9vbGVhblxyXG5cclxuICAgIGdhbWVNb2RsZTogR2FtZU1vZGxlO1xyXG5cclxuICAgIFdhaXRBcnJheTogbnVtYmVyW10gPSBbMCwgLTFdXHJcbn0iXX0=