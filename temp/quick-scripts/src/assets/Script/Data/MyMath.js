"use strict";
cc._RF.push(module, '23d8biZgYRML60I5fNazIGU', 'MyMath');
// Script/Data/MyMath.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyMath = /** @class */ (function () {
    function MyMath() {
    }
    /**
    * 加法
    */
    MyMath.prototype.add = function (value1, value2, lenght) {
        return Math.round(value1 * 1000 + value2 * 1000) / 1000;
    };
    /**
   * 減法
   */
    MyMath.prototype.minus = function (value1, value2, lenght) {
        return ((value1 * 1000) - (value2 * 1000)) / 1000;
    };
    /**
   * 乘法
   */
    MyMath.prototype.multiply = function (value1, value2, lenght) {
        return Math.round(value1 * 1000 * (value2 * 1000)) / Math.pow(1000, 2);
    };
    /**
   * 除法
   */
    MyMath.prototype.divide = function (value1, value2, lenght) {
        return value1 * 1000 / (value2 * 1000);
    };
    MyMath.prototype.round = function (value, length) {
        if (length === void 0) { length = 4; }
        var val = value;
        var split = val.toString().split('.');
        if (split.length > 1 && split[1].length > length) {
            return Number(val.toPrecision(split[0].length + length));
        }
        else
            return value;
    };
    return MyMath;
}());
exports.default = new MyMath();

cc._RF.pop();