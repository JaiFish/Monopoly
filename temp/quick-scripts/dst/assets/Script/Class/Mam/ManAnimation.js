
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
        console.log(_gameModle);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWFtXFxNYW5BbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXlDO0FBR3pDO0lBQXVDLDZCQUFPO0lBQTlDOztJQThFQSxDQUFDO0lBN0VHLDJCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNwRCxDQUFDO0lBQ0QsMEJBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNuRCxDQUFDO0lBQ0QsaUNBQWEsR0FBYixVQUFjLFVBQXFCLEVBQUUsT0FBZSxFQUFFLEtBQWU7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNsRCx3QkFBd0I7UUFDeEIsSUFBSSxPQUFPLElBQUksQ0FBQztZQUFFLE9BQU87UUFDekIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2YsT0FBTyxFQUFFLENBQUM7UUFDVixJQUFJLE9BQU8sR0FBbUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM5RSxJQUFJLE9BQU8sSUFBSSxTQUFTO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUN6QztZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDNUM7SUFFTCxDQUFDO0lBQ0QsNEJBQVEsR0FBUixVQUFTLE9BQWUsRUFBRSxXQUFXLEVBQUUsR0FBVztRQUFsRCxpQkE0QkM7UUEzQkcsNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUM3QixhQUFhO1FBQ2IsSUFBSTtRQUNKLElBQUksV0FBVyxHQUFjLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFFN0UsMkZBQTJGO1FBRTNGLGlCQUFpQjtRQUNqQiw0QkFBNEI7UUFDNUIsSUFBSTtRQUNKLE1BQU07UUFDTixPQUFPO1FBQ1AsK0JBQStCO1FBQy9CLCtCQUErQjtRQUMvQiwrQkFBK0I7UUFHL0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2YsMEhBQTBIO2FBQ3pILFFBQVEsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQ3ZELEVBQUUsTUFBTSxFQUFFLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFsQyxDQUFrQyxFQUFFLENBQUM7YUFDeEQsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLDRDQUE0QztRQUNoRCxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBQ0QsMEJBQU0sR0FBTixVQUFPLE9BQWU7UUFBdEIsaUJBUUM7UUFQRyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFsQyxDQUFrQyxFQUFFLENBQUM7YUFDL0csSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFDRCw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsNkVBQTZFO0lBQzdFLHVDQUF1QztJQUN2QyxpRkFBaUY7SUFDakYsNEZBQTRGO0lBQzVGLDBEQUEwRDtJQUUxRCwwQkFBMEI7SUFDMUIsNkdBQTZHO0lBQzdHLG1CQUFtQjtJQUNuQixJQUFJO0lBQ0osZ0NBQVksR0FBWixVQUFhLFVBQXFCO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUE7SUFDL0IsQ0FBQztJQUVMLGdCQUFDO0FBQUQsQ0E5RUEsQUE4RUMsQ0E5RXNDLGlCQUFPLEdBOEU3QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhTWFuIGZyb20gXCIuLi8uLi9EYXRhL0RhdGFNYW5cIjtcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSBcIi4uLy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbkFjdGlvbiBleHRlbmRzIERhdGFNYW4ge1xyXG4gICAgc3RhcnRHTygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDYW5HbykgdGhpcy5pc0NhbkdvID0gIXRoaXMuaXNDYW5HbztcclxuICAgIH1cclxuICAgIHN0b3BHbygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0NhbkdvKSB0aGlzLmlzQ2FuR28gPSAhdGhpcy5pc0NhbkdvO1xyXG4gICAgfVxyXG4gICAgU3RhcnRHT19Ud2VlbihfZ2FtZU1vZGxlOiBHYW1lTW9kbGUsIEdvQ291bnQ6IG51bWJlciwgU2F5R08/OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWVNb2RsZSkgdGhpcy5zZXRHYW1lTW9kbGUoX2dhbWVNb2RsZSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhHb0NvdW50KTtcclxuICAgICAgICBpZiAoR29Db3VudCA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5ub3dJbmRleCsrXHJcbiAgICAgICAgR29Db3VudC0tO1xyXG4gICAgICAgIGxldCB0cnlEYXRhOiBBcnJheTxjYy5WZWMyPiA9IHRoaXMuZ2FtZU1vZGxlLnBhdGhCZXppZXJEYXRhLmdldCh0aGlzLm5vd0luZGV4KVxyXG4gICAgICAgIGlmICh0cnlEYXRhID09IHVuZGVmaW5lZCkgdGhpcy5Hb0xpbmUoR29Db3VudClcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5Hb0JlemllcihHb0NvdW50LCAwLCB0cnlEYXRhLmxlbmd0aClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgR29CZXppZXIoR29Db3VudDogbnVtYmVyLCBCZXppZXJDb3VudCwgbGVuOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBpZiAoQmV6aWVyQ291bnQgPj0gbGVuKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuU3RhcnRHTyhHb0NvdW50KTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGxldCBnZXRQb3NpdGlvbjogY2MuVmVjMltdID0gdGhpcy5nYW1lTW9kbGUucGF0aEJlemllckRhdGEuZ2V0KHRoaXMubm93SW5kZXgpXHJcblxyXG4gICAgICAgIC8vIGxldCBnZXRQb3NpdGlvbjogY2MuVmVjMiA9IHRoaXMuZ2FtZU1vZGxlLnBhdGhCZXppZXJEYXRhLmdldCh0aGlzLm5vd0luZGV4KVtCZXppZXJDb3VudF1cclxuXHJcbiAgICAgICAgLy8gQmV6aWVyQ291bnQrKztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhnZXRQb3NpdGlvbik7XHJcbiAgICAgICAgLy/otbfpu55cclxuICAgICAgICAvLyDkuK3plpPpu55cclxuICAgICAgICAvLyDlho3kvobntYLpu55cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhnZXRQb3NpdGlvblsxXSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZ2V0UG9zaXRpb25bMF0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGdldFBvc2l0aW9uWzJdKTtcclxuXHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubk1hbilcclxuICAgICAgICAgICAgLy8gLnRvKHRoaXMuVHdlZW5UaW1lIC8gbGVuLCB7IHg6IGdldFBvc2l0aW9uLngsIHk6IGdldFBvc2l0aW9uLnkgfSwgeyBlYXNpbmc6IGR0ID0+IGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpLmVhc2luZyhkdCkgfSlcclxuICAgICAgICAgICAgLmJlemllclRvKDEsIGdldFBvc2l0aW9uWzBdLCBnZXRQb3NpdGlvblsxXSwgZ2V0UG9zaXRpb25bMl0sXHJcbiAgICAgICAgICAgICAgICB7IGVhc2luZzogZHQgPT4gY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkuZWFzaW5nKGR0KSB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0YXJ0R09fVHdlZW4odGhpcy5nYW1lTW9kbGUsIEdvQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5Hb0JlemllcihHb0NvdW50LCBCZXppZXJDb3VudCwgbGVuKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuICAgIEdvTGluZShHb0NvdW50OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZ2V0UG9zaXRpb24gPSB0aGlzLmdhbWVNb2RsZS5wYXRoUG9zaXRpb25EYXRhLmdldCh0aGlzLm5vd0luZGV4KVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubk1hbilcclxuICAgICAgICAgICAgLnRvKHRoaXMubWFuU3BlZWQsIHsgeDogZ2V0UG9zaXRpb24ueCwgeTogZ2V0UG9zaXRpb24ueSB9LCB7IGVhc2luZzogZHQgPT4gY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkuZWFzaW5nKGR0KSB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0YXJ0R09fVHdlZW4odGhpcy5nYW1lTW9kbGUsIEdvQ291bnQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgLy8gR29MaW5lKEdvQ291bnQ6IG51bWJlcikge1xyXG4gICAgLy8gICAgIHRoaXMuZ2V0Q291bnQgPSBHb0NvdW50O1xyXG4gICAgLy8gICAgIHRoaXMubm93SW5kZXgrKztcclxuICAgIC8vICAgICB0aGlzLmdldENvdW50LS07XHJcbiAgICAvLyAgICAgbGV0IGdldHRyeTogY2MuTm9kZSA9IENvbnRyb2xsLmluc3RlbnMubWFwSXRlbS5nZXQodGhpcy5ub3dJbmRleCkubm9kZVxyXG4gICAgLy8gICAgIGlmIChnZXR0cnkgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAvLyAgICAgbGV0IGdldE5leHRNYXA6IGNjLk5vZGUgPSBDb250cm9sbC5pbnN0ZW5zLm1hcEl0ZW0uZ2V0KHRoaXMubm93SW5kZXgpLm5vZGVcclxuICAgIC8vICAgICAvLyBsZXQgY2hhbmdlUG9zaXRpb246IGNjLlZlYzMgPSB0aGlzLmNvbnZlcnRPdGhlck5vZGVTcGFjZUFSKGdldE5leHRNYXAsIHRoaXMubm9kZSk7XHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coY2hhbmdlUG9zaXRpb24ueCwgY2hhbmdlUG9zaXRpb24ueSk7XHJcblxyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMubk1hbilcclxuICAgIC8vICAgICAgICAgLnRvKDEsIHsgeDogZ2V0TmV4dE1hcC54LCB5OiBnZXROZXh0TWFwLnkgfSwgeyBlYXNpbmc6IGR0ID0+IGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpLmVhc2luZyhkdCkgfSlcclxuICAgIC8vICAgICAgICAgLnN0YXJ0KClcclxuICAgIC8vIH1cclxuICAgIHNldEdhbWVNb2RsZShfZ2FtZU1vZGxlOiBHYW1lTW9kbGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhfZ2FtZU1vZGxlKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbWVNb2RsZSA9IF9nYW1lTW9kbGVcclxuICAgIH1cclxuXHJcbn0iXX0=