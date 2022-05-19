
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/MyMath.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxNeU1hdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBb0NBLENBQUM7SUFuQ0c7O01BRUU7SUFDRixvQkFBRyxHQUFILFVBQUksTUFBYyxFQUFFLE1BQWMsRUFBRSxNQUFlO1FBQy9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUE7SUFDM0QsQ0FBQztJQUNEOztLQUVDO0lBQ0Qsc0JBQUssR0FBTCxVQUFNLE1BQWMsRUFBRSxNQUFjLEVBQUUsTUFBZTtRQUNqRCxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUE7SUFDckQsQ0FBQztJQUNEOztLQUVDO0lBQ0QseUJBQVEsR0FBUixVQUFTLE1BQWMsRUFBRSxNQUFjLEVBQUUsTUFBZTtRQUNwRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzFFLENBQUM7SUFDRDs7S0FFQztJQUNELHVCQUFNLEdBQU4sVUFBTyxNQUFjLEVBQUUsTUFBYyxFQUFFLE1BQWU7UUFDbEQsT0FBTyxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFDRCxzQkFBSyxHQUFMLFVBQU0sS0FBYSxFQUFFLE1BQWtCO1FBQWxCLHVCQUFBLEVBQUEsVUFBa0I7UUFFbkMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFBO1FBRWYsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUVyQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFO1lBQzlDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzVEOztZQUNJLE9BQU8sS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FwQ0EsQUFvQ0MsSUFBQTtBQUNELGtCQUFlLElBQUksTUFBTSxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNeU1hdGgge1xyXG4gICAgLyoqXHJcbiAgICAqIOWKoOazlVxyXG4gICAgKi9cclxuICAgIGFkZCh2YWx1ZTE6IG51bWJlciwgdmFsdWUyOiBudW1iZXIsIGxlbmdodD86IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlMSAqIDEwMDAgKyB2YWx1ZTIgKiAxMDAwKSAvIDEwMDBcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAqIOa4m+azlVxyXG4gICAqL1xyXG4gICAgbWludXModmFsdWUxOiBudW1iZXIsIHZhbHVlMjogbnVtYmVyLCBsZW5naHQ/OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gKCh2YWx1ZTEgKiAxMDAwKSAtICh2YWx1ZTIgKiAxMDAwKSkgLyAxMDAwXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgKiDkuZjms5VcclxuICAgKi9cclxuICAgIG11bHRpcGx5KHZhbHVlMTogbnVtYmVyLCB2YWx1ZTI6IG51bWJlciwgbGVuZ2h0PzogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUxICogMTAwMCAqICh2YWx1ZTIgKiAxMDAwKSkgLyBNYXRoLnBvdygxMDAwLCAyKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICog6Zmk5rOVXHJcbiAgICovXHJcbiAgICBkaXZpZGUodmFsdWUxOiBudW1iZXIsIHZhbHVlMjogbnVtYmVyLCBsZW5naHQ/OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUxICogMTAwMCAvICh2YWx1ZTIgKiAxMDAwKVxyXG4gICAgfVxyXG4gICAgcm91bmQodmFsdWU6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIgPSA0KTogbnVtYmVyIHtcclxuXHJcbiAgICAgICAgbGV0IHZhbCA9IHZhbHVlXHJcblxyXG4gICAgICAgIGxldCBzcGxpdCA9IHZhbC50b1N0cmluZygpLnNwbGl0KCcuJylcclxuXHJcbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA+IDEgJiYgc3BsaXRbMV0ubGVuZ3RoID4gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIodmFsLnRvUHJlY2lzaW9uKHNwbGl0WzBdLmxlbmd0aCArIGxlbmd0aCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHJldHVybiB2YWx1ZVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBNeU1hdGgoKTsiXX0=