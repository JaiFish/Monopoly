
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
        _this.manSkipSeed = 1000;
        _this.manDefaultSpeed = 30;
        /**
         * X增加速率，撫平每秒速率
         */
        _this.xSpeed = 1;
        /**
         * Y增加速率，撫平每秒速率
         */
        _this.ySpeed = 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxEYXRhTWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFpRDtBQUdqRDtJQUFxQywyQkFBYTtJQUFsRDtRQUFBLHFFQXdEQztRQXBERyxjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGlCQUFXLEdBQVcsSUFBSSxDQUFDO1FBQzNCLHFCQUFlLEdBQVcsRUFBRSxDQUFDO1FBRTdCOztXQUVHO1FBQ0gsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUNuQjs7V0FFRztRQUNILFlBQU0sR0FBVyxDQUFDLENBQUM7O0lBdUN2QixDQUFDO0lBQUQsY0FBQztBQUFELENBeERBLEFBd0RDLENBeERvQyx1QkFBYSxHQXdEakQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi9iYXNlL0NvbXBvbmVudEJhc2VcIjtcclxuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4uL0VudW0vR2FtZVN0YXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhTWFuIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcblxyXG4gICAgbk1hbjogY2MuTm9kZTtcclxuICAgIGdldENvdW50OiBudW1iZXI7XHJcbiAgICBub3dJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBtYW5TdGF0ZTogR2FtZVN0YXRlO1xyXG4gICAgbWFuU2tpcFNlZWQ6IG51bWJlciA9IDEwMDA7XHJcbiAgICBtYW5EZWZhdWx0U3BlZWQ6IG51bWJlciA9IDMwO1xyXG4gICAgbWFuU3BlZWQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogWOWinuWKoOmAn+eOh++8jOaSq+W5s+avj+enkumAn+eOh1xyXG4gICAgICovXHJcbiAgICB4U3BlZWQ6IG51bWJlciA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIFnlop7liqDpgJ/njofvvIzmkqvlubPmr4/np5LpgJ/njodcclxuICAgICAqL1xyXG4gICAgeVNwZWVkOiBudW1iZXIgPSAxO1xyXG4gICAgLyoqXHJcbiAgICAgKiDoqK3lrprmr4/np5LpgJ/luqZcclxuICAgICAqL1xyXG4gICAgc2V0U3BlZWQ6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOioiOaZgueVtuWJjeenkuaVuFxyXG4gICAgICovXHJcbiAgICB0ZW1wRHRDb3VudDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDnp5JcclxuICAgICAqL1xyXG5cclxuICAgIGVuZER0OiBudW1iZXI7XHJcblxyXG4gICAgYWRkWDogbnVtYmVyO1xyXG4gICAgYWRkWTogbnVtYmVyO1xyXG5cclxuICAgIHRhcmdldFg6IG51bWJlcjtcclxuICAgIHRhcmdldFk6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFjnmoTmlrnlkJFcclxuICAgICAqL1xyXG4gICAgZGlyZWN0aW9uWDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBZ5pa55ZCRXHJcbiAgICAgKi9cclxuICAgIGRpcmVjdGlvblk6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog55uu5YmN5YGc6Z2g56uZ5L2N572uXHJcbiAgICAgKi9cclxuICAgIG5vd1N0YXRpb246IG51bWJlcjtcclxuXHJcbiAgICBpc0NhbkdvOiBib29sZWFuO1xyXG4gICAgaXNBcnJpdmFsOmJvb2xlYW47XHJcblxyXG4gICAgZ2FtZU1vZGxlOiBHYW1lTW9kbGU7XHJcbn0iXX0=