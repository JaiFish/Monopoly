
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Asset/AssetMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3bf4b6LCLNLNIR8jRg1gFh8', 'AssetMng');
// Script/Asset/AssetMng.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimationAsset_1 = require("./AnimationAsset");
var MusicAsset_1 = require("./MusicAsset");
var SpriteAsset_1 = require("./SpriteAsset");
var SpriteAtlasAsset_1 = require("./SpriteAtlasAsset");
var AssetMng = /** @class */ (function () {
    function AssetMng() {
        this.data_SprtieAtlas = new Map();
        this.data_Sprtie = new Map();
        this.data_Music = new Map();
        this.data_Animation = new Map();
        this.AllAssetClass = [];
    }
    AssetMng.prototype.startLoad = function () {
        this.AllAssetClass.push(SpriteAtlasAsset_1.default.loadAsset(this.data_SprtieAtlas));
        this.AllAssetClass.push(SpriteAsset_1.default.loadAsset(this.data_Sprtie));
        this.AllAssetClass.push(MusicAsset_1.default.loadAsset(this.data_Music));
    };
    AssetMng.prototype.bearAsset = function (_num) {
        this.AllAssetClass.push(AnimationAsset_1.default.loadAsset(this.data_Animation));
    };
    AssetMng.prototype.checkState = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.isAllOK)
                return resolve();
            else {
                var repet_1 = setInterval(function () {
                    var check = true;
                    _this.AllAssetClass.forEach(function (_AssetClass) {
                        if (!_AssetClass.checkAssetState)
                            return check = false;
                    });
                    if (check) {
                        _this.isAllOK = true;
                        clearInterval(repet_1);
                        resolve();
                    }
                }, 500);
            }
        });
    };
    return AssetMng;
}());
exports.default = new AssetMng();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBc3NldFxcQXNzZXRNbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtREFBOEM7QUFDOUMsMkNBQXNDO0FBQ3RDLDZDQUF3QztBQUN4Qyx1REFBa0Q7QUFFbEQ7SUFBQTtRQUNJLHFCQUFnQixHQUFxQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQy9DLGdCQUFXLEdBQXFCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUMsZUFBVSxHQUFxQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3pDLG1CQUFjLEdBQXFCLElBQUksR0FBRyxFQUFFLENBQUM7UUFJN0Msa0JBQWEsR0FBZSxFQUFFLENBQUE7SUFnQ2xDLENBQUM7SUEvQkcsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLDBCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHFCQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBRW5FLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsSUFBWTtRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyx3QkFBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUFBLGlCQWtCQztRQWpCRyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBaUI7WUFDdkMsSUFBSSxLQUFJLENBQUMsT0FBTztnQkFBRSxPQUFPLE9BQU8sRUFBRSxDQUFBO2lCQUM3QjtnQkFDRCxJQUFJLE9BQUssR0FBRyxXQUFXLENBQUM7b0JBQ3BCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDakIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxXQUFXO3dCQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWU7NEJBQUUsT0FBTyxLQUFLLEdBQUcsS0FBSyxDQUFBO29CQUMxRCxDQUFDLENBQUMsQ0FBQTtvQkFDRixJQUFJLEtBQUssRUFBRTt3QkFDUCxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTt3QkFDbkIsYUFBYSxDQUFDLE9BQUssQ0FBQyxDQUFDO3dCQUNyQixPQUFPLEVBQUUsQ0FBQztxQkFDYjtnQkFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7YUFDVjtRQUVMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVMLGVBQUM7QUFBRCxDQXhDQSxBQXdDQyxJQUFBO0FBQ0Qsa0JBQWUsSUFBSSxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgQW5pbWF0aW9uQXNzZXQgZnJvbSBcIi4vQW5pbWF0aW9uQXNzZXRcIjtcclxuaW1wb3J0IE11c2ljQXNzZXQgZnJvbSBcIi4vTXVzaWNBc3NldFwiO1xyXG5pbXBvcnQgU3ByaXRlQXNzZXQgZnJvbSBcIi4vU3ByaXRlQXNzZXRcIjtcclxuaW1wb3J0IFNwcml0ZUF0bGFzQXNzZXQgZnJvbSBcIi4vU3ByaXRlQXRsYXNBc3NldFwiO1xyXG5cclxuY2xhc3MgQXNzZXRNbmcge1xyXG4gICAgZGF0YV9TcHJ0aWVBdGxhczogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXAoKTtcclxuICAgIGRhdGFfU3BydGllOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcCgpO1xyXG4gICAgZGF0YV9NdXNpYzogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXAoKTtcclxuICAgIGRhdGFfQW5pbWF0aW9uOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcCgpO1xyXG5cclxuXHJcbiAgICBpc0FsbE9LOiBib29sZWFuO1xyXG4gICAgQWxsQXNzZXRDbGFzczogQXJyYXk8YW55PiA9IFtdXHJcbiAgICBzdGFydExvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5BbGxBc3NldENsYXNzLnB1c2goU3ByaXRlQXRsYXNBc3NldC5sb2FkQXNzZXQodGhpcy5kYXRhX1NwcnRpZUF0bGFzKSk7XHJcbiAgICAgICAgdGhpcy5BbGxBc3NldENsYXNzLnB1c2goU3ByaXRlQXNzZXQubG9hZEFzc2V0KHRoaXMuZGF0YV9TcHJ0aWUpKTtcclxuICAgICAgICB0aGlzLkFsbEFzc2V0Q2xhc3MucHVzaChNdXNpY0Fzc2V0LmxvYWRBc3NldCh0aGlzLmRhdGFfTXVzaWMpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmVhckFzc2V0KF9udW06IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuQWxsQXNzZXRDbGFzcy5wdXNoKEFuaW1hdGlvbkFzc2V0LmxvYWRBc3NldCh0aGlzLmRhdGFfQW5pbWF0aW9uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tTdGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmU6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQWxsT0spIHJldHVybiByZXNvbHZlKClcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVwZXQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFsbEFzc2V0Q2xhc3MuZm9yRWFjaChfQXNzZXRDbGFzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX0Fzc2V0Q2xhc3MuY2hlY2tBc3NldFN0YXRlKSByZXR1cm4gY2hlY2sgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBbGxPSyA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChyZXBldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEFzc2V0TW5nKCk7Il19