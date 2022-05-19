
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBc3NldFxcQW5pbWF0aW9uQXNzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO1FBRUksYUFBUSxHQUFXLFdBQVcsQ0FBQztRQUMvQixhQUFRLEdBQWEsRUFFcEIsQ0FBQztJQVlOLENBQUM7SUFYRyxtQ0FBUyxHQUFULFVBQVUsTUFBd0I7UUFBbEMsaUJBU0M7UUFSRyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQTtRQUM1QixFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBNkI7WUFDckYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLGNBQWM7Z0JBQ3ZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQTtZQUNuRCxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBQ0Qsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFuaW1hdGlvbmJBc3NldCB7XHJcbiAgICBjaGVja0Fzc2V0U3RhdGU6IGJvb2xlYW47XHJcbiAgICB0eXBlUGF0aDogc3RyaW5nID0gXCJBbmltYXRpb25cIjtcclxuICAgIGZpbGVQYXRoOiBzdHJpbmdbXSA9IFtcclxuXHJcbiAgICBdO1xyXG4gICAgbG9hZEFzc2V0KF9Bc3NldDogTWFwPHN0cmluZywgYW55Pikge1xyXG4gICAgICAgIHRoaXMuY2hlY2tBc3NldFN0YXRlID0gZmFsc2VcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZERpcih0aGlzLnR5cGVQYXRoLCBjYy5BbmltYXRpb25DbGlwLCAoZXJyLCBkYXRhOiBBcnJheTxjYy5BbmltYXRpb25DbGlwPikgPT4ge1xyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goX2FuaW1hdGlvbkNsaXAgPT4ge1xyXG4gICAgICAgICAgICAgICAgX0Fzc2V0LnNldChfYW5pbWF0aW9uQ2xpcC5uYW1lLCBfYW5pbWF0aW9uQ2xpcClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBc3NldFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBbmltYXRpb25iQXNzZXQoKTsiXX0=