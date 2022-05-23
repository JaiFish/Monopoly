
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Asset/AnimationAsset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4314eqYiRPAo4SFg4VORdJ', 'AnimationAsset');
// Script/Asset/AnimationAsset.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimationbAsset = /** @class */ (function () {
    function AnimationbAsset() {
        this.typePath = "Animation";
        this.filePath = [];
        this.bearPath = [];
    }
    AnimationbAsset.prototype.loadAsset = function (_Asset) {
        var _this = this;
        this.checkAssetState = false;
        cc.resources.loadDir(this.typePath, cc.AnimationClip, function (err, data) {
            data.forEach(function (_animationClip) {
                _Asset.set(_animationClip.name, _animationClip);
            });
            _this.checkAssetState = true;
        });
        return this;
    };
    AnimationbAsset.prototype.targetLoadAsset = function (_Asset, _num) {
        var _this = this;
        this.checkAssetState = false;
        cc.resources.l(this.typePath, cc.AnimationClip, function (err, data) {
            data.forEach(function (_animationClip) {
                _Asset.set(_animationClip.name, _animationClip);
            });
            _this.checkAssetState = true;
        });
        return this;
    };
    return AnimationbAsset;
}());
exports.default = new AnimationbAsset();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBc3NldFxcQW5pbWF0aW9uQXNzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO1FBRUksYUFBUSxHQUFXLFdBQVcsQ0FBQztRQUMvQixhQUFRLEdBQWEsRUFFcEIsQ0FBQztRQUNGLGFBQVEsR0FBVSxFQUVqQixDQUFBO0lBc0JMLENBQUM7SUFyQkcsbUNBQVMsR0FBVCxVQUFVLE1BQXdCO1FBQWxDLGlCQVNDO1FBUkcsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUE7UUFDNUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQUMsR0FBRyxFQUFFLElBQTZCO1lBQ3JGLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxjQUFjO2dCQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUE7WUFDbkQsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVELHlDQUFlLEdBQWYsVUFBZ0IsTUFBd0IsRUFBQyxJQUFXO1FBQXBELGlCQVNDO1FBUkcsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUE7UUFDNUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQUMsR0FBRyxFQUFFLElBQTZCO1lBQy9FLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxjQUFjO2dCQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUE7WUFDbkQsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0E5QkEsQUE4QkMsSUFBQTtBQUNELGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBbmltYXRpb25iQXNzZXQge1xyXG4gICAgY2hlY2tBc3NldFN0YXRlOiBib29sZWFuO1xyXG4gICAgdHlwZVBhdGg6IHN0cmluZyA9IFwiQW5pbWF0aW9uXCI7XHJcbiAgICBmaWxlUGF0aDogc3RyaW5nW10gPSBbXHJcblxyXG4gICAgXTtcclxuICAgIGJlYXJQYXRoOnN0cmluZ1tdPVtcclxuICAgICAgICBcclxuICAgIF1cclxuICAgIGxvYWRBc3NldChfQXNzZXQ6IE1hcDxzdHJpbmcsIGFueT4pIHtcclxuICAgICAgICB0aGlzLmNoZWNrQXNzZXRTdGF0ZSA9IGZhbHNlXHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWREaXIodGhpcy50eXBlUGF0aCwgY2MuQW5pbWF0aW9uQ2xpcCwgKGVyciwgZGF0YTogQXJyYXk8Y2MuQW5pbWF0aW9uQ2xpcD4pID0+IHtcclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKF9hbmltYXRpb25DbGlwID0+IHtcclxuICAgICAgICAgICAgICAgIF9Bc3NldC5zZXQoX2FuaW1hdGlvbkNsaXAubmFtZSwgX2FuaW1hdGlvbkNsaXApXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQXNzZXRTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIHRhcmdldExvYWRBc3NldChfQXNzZXQ6IE1hcDxzdHJpbmcsIGFueT4sX251bTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNoZWNrQXNzZXRTdGF0ZSA9IGZhbHNlXHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmwodGhpcy50eXBlUGF0aCwgY2MuQW5pbWF0aW9uQ2xpcCwgKGVyciwgZGF0YTogQXJyYXk8Y2MuQW5pbWF0aW9uQ2xpcD4pID0+IHtcclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKF9hbmltYXRpb25DbGlwID0+IHtcclxuICAgICAgICAgICAgICAgIF9Bc3NldC5zZXQoX2FuaW1hdGlvbkNsaXAubmFtZSwgX2FuaW1hdGlvbkNsaXApXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQXNzZXRTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBbmltYXRpb25iQXNzZXQoKTsiXX0=