
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Mam/ManAnimation.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce494CkVG1PQKpHszqAbf7f', 'ManAnimation');
// Script/Class/Mam/ManAnimation.ts

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
var DataMan_1 = require("../../Data/DataMan");
var ManAction = /** @class */ (function (_super) {
    __extends(ManAction, _super);
    function ManAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ManAction.prototype.startGO = function () {
        if (!this.isCanGo)
            this.isCanGo = !this.isCanGo;
    };
    ManAction.prototype.stopGo = function () {
        if (this.isCanGo)
            this.isCanGo = !this.isCanGo;
    };
    ManAction.prototype.StartGO_Tween = function (_gameModle, GoCount, SayGO) {
        if (!this.gameModle)
            this.setGameModle(_gameModle);
        // console.log(GoCount);
        if (GoCount == 0)
            return;
        this.nowIndex++;
        GoCount--;
        var tryData = this.gameModle.pathBezierData.get(this.nowIndex);
        if (tryData == undefined)
            this.GoLine(GoCount);
        else {
            this.GoBezier(GoCount, 0, tryData.length);
        }
    };
    ManAction.prototype.GoBezier = function (GoCount, BezierCount, len) {
        var _this = this;
        // if (BezierCount >= len) {
        //     this.StartGO(GoCount);
        //     return
        // }
        var getPosition = this.gameModle.pathBezierData.get(this.nowIndex);
        // let getPosition: cc.Vec2 = this.gameModle.pathBezierData.get(this.nowIndex)[BezierCount]
        // BezierCount++;
        // console.log(getPosition);
        //起點
        // 中間點
        // 再來終點
        // console.log(getPosition[1]);
        // console.log(getPosition[0]);
        // console.log(getPosition[2]);
        cc.tween(this.nMan)
            // .to(this.TweenTime / len, { x: getPosition.x, y: getPosition.y }, { easing: dt => cc.easeCubicActionOut().easing(dt) })
            .bezierTo(1, getPosition[0], getPosition[1], getPosition[2], { easing: function (dt) { return cc.easeCubicActionOut().easing(dt); } })
            .call(function () {
            _this.StartGO_Tween(_this.gameModle, GoCount);
            // this.GoBezier(GoCount, BezierCount, len);
        })
            .start();
    };
    ManAction.prototype.GoLine = function (GoCount) {
        var _this = this;
        var getPosition = this.gameModle.pathPositionData.get(this.nowIndex);
        cc.tween(this.nMan)
            .to(this.manSpeed, { x: getPosition.x, y: getPosition.y }, { easing: function (dt) { return cc.easeCubicActionOut().easing(dt); } })
            .call(function () {
            _this.StartGO_Tween(_this.gameModle, GoCount);
        })
            .start();
    };
    // GoLine(GoCount: number) {
    //     this.getCount = GoCount;
    //     this.nowIndex++;
    //     this.getCount--;
    //     let gettry: cc.Node = Controll.instens.mapItem.get(this.nowIndex).node
    //     if (gettry == undefined) return;
    //     let getNextMap: cc.Node = Controll.instens.mapItem.get(this.nowIndex).node
    //     // let changePosition: cc.Vec3 = this.convertOtherNodeSpaceAR(getNextMap, this.node);
    //     // console.log(changePosition.x, changePosition.y);
    //     cc.tween(this.nMan)
    //         .to(1, { x: getNextMap.x, y: getNextMap.y }, { easing: dt => cc.easeCubicActionOut().easing(dt) })
    //         .start()
    // }
    ManAction.prototype.setGameModle = function (_gameModle) {
        // console.log(_gameModle);
        this.gameModle = _gameModle;
    };
    return ManAction;
}(DataMan_1.default));
exports.default = ManAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWFtXFxNYW5BbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXlDO0FBR3pDO0lBQXVDLDZCQUFPO0lBQTlDOztJQThFQSxDQUFDO0lBN0VHLDJCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNwRCxDQUFDO0lBQ0QsMEJBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNuRCxDQUFDO0lBQ0QsaUNBQWEsR0FBYixVQUFjLFVBQXFCLEVBQUUsT0FBZSxFQUFFLEtBQWU7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNsRCx3QkFBd0I7UUFDeEIsSUFBSSxPQUFPLElBQUksQ0FBQztZQUFFLE9BQU87UUFDekIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2YsT0FBTyxFQUFFLENBQUM7UUFDVixJQUFJLE9BQU8sR0FBbUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM5RSxJQUFJLE9BQU8sSUFBSSxTQUFTO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUN6QztZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDNUM7SUFFTCxDQUFDO0lBQ0QsNEJBQVEsR0FBUixVQUFTLE9BQWUsRUFBRSxXQUFXLEVBQUUsR0FBVztRQUFsRCxpQkE0QkM7UUEzQkcsNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUM3QixhQUFhO1FBQ2IsSUFBSTtRQUNKLElBQUksV0FBVyxHQUFjLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFFN0UsMkZBQTJGO1FBRTNGLGlCQUFpQjtRQUNqQiw0QkFBNEI7UUFDNUIsSUFBSTtRQUNKLE1BQU07UUFDTixPQUFPO1FBQ1AsK0JBQStCO1FBQy9CLCtCQUErQjtRQUMvQiwrQkFBK0I7UUFHL0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2YsMEhBQTBIO2FBQ3pILFFBQVEsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQ3ZELEVBQUUsTUFBTSxFQUFFLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFsQyxDQUFrQyxFQUFFLENBQUM7YUFDeEQsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLDRDQUE0QztRQUNoRCxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBQ0QsMEJBQU0sR0FBTixVQUFPLE9BQWU7UUFBdEIsaUJBUUM7UUFQRyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFsQyxDQUFrQyxFQUFFLENBQUM7YUFDL0csSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFDRCw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsNkVBQTZFO0lBQzdFLHVDQUF1QztJQUN2QyxpRkFBaUY7SUFDakYsNEZBQTRGO0lBQzVGLDBEQUEwRDtJQUUxRCwwQkFBMEI7SUFDMUIsNkdBQTZHO0lBQzdHLG1CQUFtQjtJQUNuQixJQUFJO0lBQ0osZ0NBQVksR0FBWixVQUFhLFVBQXFCO1FBQzlCLDJCQUEyQjtRQUUzQixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQTtJQUMvQixDQUFDO0lBRUwsZ0JBQUM7QUFBRCxDQTlFQSxBQThFQyxDQTlFc0MsaUJBQU8sR0E4RTdDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFNYW4gZnJvbSBcIi4uLy4uL0RhdGEvRGF0YU1hblwiO1xyXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vLi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2VcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuQWN0aW9uIGV4dGVuZHMgRGF0YU1hbiB7XHJcbiAgICBzdGFydEdPKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0NhbkdvKSB0aGlzLmlzQ2FuR28gPSAhdGhpcy5pc0NhbkdvO1xyXG4gICAgfVxyXG4gICAgc3RvcEdvKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2FuR28pIHRoaXMuaXNDYW5HbyA9ICF0aGlzLmlzQ2FuR287XHJcbiAgICB9XHJcbiAgICBTdGFydEdPX1R3ZWVuKF9nYW1lTW9kbGU6IEdhbWVNb2RsZSwgR29Db3VudDogbnVtYmVyLCBTYXlHTz86IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZU1vZGxlKSB0aGlzLnNldEdhbWVNb2RsZShfZ2FtZU1vZGxlKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEdvQ291bnQpO1xyXG4gICAgICAgIGlmIChHb0NvdW50ID09IDApIHJldHVybjtcclxuICAgICAgICB0aGlzLm5vd0luZGV4KytcclxuICAgICAgICBHb0NvdW50LS07XHJcbiAgICAgICAgbGV0IHRyeURhdGE6IEFycmF5PGNjLlZlYzI+ID0gdGhpcy5nYW1lTW9kbGUucGF0aEJlemllckRhdGEuZ2V0KHRoaXMubm93SW5kZXgpXHJcbiAgICAgICAgaWYgKHRyeURhdGEgPT0gdW5kZWZpbmVkKSB0aGlzLkdvTGluZShHb0NvdW50KVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLkdvQmV6aWVyKEdvQ291bnQsIDAsIHRyeURhdGEubGVuZ3RoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBHb0JlemllcihHb0NvdW50OiBudW1iZXIsIEJlemllckNvdW50LCBsZW46IG51bWJlcikge1xyXG4gICAgICAgIC8vIGlmIChCZXppZXJDb3VudCA+PSBsZW4pIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5TdGFydEdPKEdvQ291bnQpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbGV0IGdldFBvc2l0aW9uOiBjYy5WZWMyW10gPSB0aGlzLmdhbWVNb2RsZS5wYXRoQmV6aWVyRGF0YS5nZXQodGhpcy5ub3dJbmRleClcclxuXHJcbiAgICAgICAgLy8gbGV0IGdldFBvc2l0aW9uOiBjYy5WZWMyID0gdGhpcy5nYW1lTW9kbGUucGF0aEJlemllckRhdGEuZ2V0KHRoaXMubm93SW5kZXgpW0JlemllckNvdW50XVxyXG5cclxuICAgICAgICAvLyBCZXppZXJDb3VudCsrO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGdldFBvc2l0aW9uKTtcclxuICAgICAgICAvL+i1t+m7nlxyXG4gICAgICAgIC8vIOS4remWk+m7nlxyXG4gICAgICAgIC8vIOWGjeS+hue1gum7nlxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGdldFBvc2l0aW9uWzFdKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhnZXRQb3NpdGlvblswXSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZ2V0UG9zaXRpb25bMl0pO1xyXG5cclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5uTWFuKVxyXG4gICAgICAgICAgICAvLyAudG8odGhpcy5Ud2VlblRpbWUgLyBsZW4sIHsgeDogZ2V0UG9zaXRpb24ueCwgeTogZ2V0UG9zaXRpb24ueSB9LCB7IGVhc2luZzogZHQgPT4gY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkuZWFzaW5nKGR0KSB9KVxyXG4gICAgICAgICAgICAuYmV6aWVyVG8oMSwgZ2V0UG9zaXRpb25bMF0sIGdldFBvc2l0aW9uWzFdLCBnZXRQb3NpdGlvblsyXSxcclxuICAgICAgICAgICAgICAgIHsgZWFzaW5nOiBkdCA9PiBjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKS5lYXNpbmcoZHQpIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuU3RhcnRHT19Ud2Vlbih0aGlzLmdhbWVNb2RsZSwgR29Db3VudCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLkdvQmV6aWVyKEdvQ291bnQsIEJlemllckNvdW50LCBsZW4pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgR29MaW5lKEdvQ291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBnZXRQb3NpdGlvbiA9IHRoaXMuZ2FtZU1vZGxlLnBhdGhQb3NpdGlvbkRhdGEuZ2V0KHRoaXMubm93SW5kZXgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5uTWFuKVxyXG4gICAgICAgICAgICAudG8odGhpcy5tYW5TcGVlZCwgeyB4OiBnZXRQb3NpdGlvbi54LCB5OiBnZXRQb3NpdGlvbi55IH0sIHsgZWFzaW5nOiBkdCA9PiBjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKS5lYXNpbmcoZHQpIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuU3RhcnRHT19Ud2Vlbih0aGlzLmdhbWVNb2RsZSwgR29Db3VudCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcbiAgICAvLyBHb0xpbmUoR29Db3VudDogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgdGhpcy5nZXRDb3VudCA9IEdvQ291bnQ7XHJcbiAgICAvLyAgICAgdGhpcy5ub3dJbmRleCsrO1xyXG4gICAgLy8gICAgIHRoaXMuZ2V0Q291bnQtLTtcclxuICAgIC8vICAgICBsZXQgZ2V0dHJ5OiBjYy5Ob2RlID0gQ29udHJvbGwuaW5zdGVucy5tYXBJdGVtLmdldCh0aGlzLm5vd0luZGV4KS5ub2RlXHJcbiAgICAvLyAgICAgaWYgKGdldHRyeSA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIC8vICAgICBsZXQgZ2V0TmV4dE1hcDogY2MuTm9kZSA9IENvbnRyb2xsLmluc3RlbnMubWFwSXRlbS5nZXQodGhpcy5ub3dJbmRleCkubm9kZVxyXG4gICAgLy8gICAgIC8vIGxldCBjaGFuZ2VQb3NpdGlvbjogY2MuVmVjMyA9IHRoaXMuY29udmVydE90aGVyTm9kZVNwYWNlQVIoZ2V0TmV4dE1hcCwgdGhpcy5ub2RlKTtcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhjaGFuZ2VQb3NpdGlvbi54LCBjaGFuZ2VQb3NpdGlvbi55KTtcclxuXHJcbiAgICAvLyAgICAgY2MudHdlZW4odGhpcy5uTWFuKVxyXG4gICAgLy8gICAgICAgICAudG8oMSwgeyB4OiBnZXROZXh0TWFwLngsIHk6IGdldE5leHRNYXAueSB9LCB7IGVhc2luZzogZHQgPT4gY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkuZWFzaW5nKGR0KSB9KVxyXG4gICAgLy8gICAgICAgICAuc3RhcnQoKVxyXG4gICAgLy8gfVxyXG4gICAgc2V0R2FtZU1vZGxlKF9nYW1lTW9kbGU6IEdhbWVNb2RsZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKF9nYW1lTW9kbGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2FtZU1vZGxlID0gX2dhbWVNb2RsZVxyXG4gICAgfVxyXG5cclxufSJdfQ==