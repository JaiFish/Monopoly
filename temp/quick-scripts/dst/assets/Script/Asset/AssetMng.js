
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
        this.AllAssetClass.push(AnimationAsset_1.default.loadAsset(this.data_Animation));
    };
    AssetMng.prototype.checkState = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var repet = setInterval(function () {
                var check = true;
                _this.AllAssetClass.forEach(function (_AssetClass) {
                    if (!_AssetClass.checkAssetState)
                        return check = false;
                });
                if (check) {
                    clearInterval(repet);
                    resolve();
                }
            }, 500);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBc3NldFxcQXNzZXRNbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxtREFBOEM7QUFDOUMsMkNBQXNDO0FBQ3RDLDZDQUF3QztBQUN4Qyx1REFBa0Q7QUFFbEQ7SUFBQTtRQUNJLHFCQUFnQixHQUFxQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQy9DLGdCQUFXLEdBQXFCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUMsZUFBVSxHQUFxQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3pDLG1CQUFjLEdBQXFCLElBQUksR0FBRyxFQUFFLENBQUM7UUFFN0Msa0JBQWEsR0FBZSxFQUFFLENBQUE7SUF1QmxDLENBQUM7SUF0QkcsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLDBCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHFCQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHdCQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQUEsaUJBYUM7UUFaRyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBaUI7WUFDdkMsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDO2dCQUNwQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsV0FBVztvQkFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlO3dCQUFFLE9BQU8sS0FBSyxHQUFHLEtBQUssQ0FBQTtnQkFDMUQsQ0FBQyxDQUFDLENBQUE7Z0JBQ0YsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixPQUFPLEVBQUUsQ0FBQztpQkFDYjtZQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNYLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVMLGVBQUM7QUFBRCxDQTdCQSxBQTZCQyxJQUFBO0FBQ0Qsa0JBQWUsSUFBSSxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgSUFzc2V0IGZyb20gXCIuLi9JbnRlcmZhY2UvSUFzc2V0XCI7XHJcbmltcG9ydCBBbmltYXRpb25Bc3NldCBmcm9tIFwiLi9BbmltYXRpb25Bc3NldFwiO1xyXG5pbXBvcnQgTXVzaWNBc3NldCBmcm9tIFwiLi9NdXNpY0Fzc2V0XCI7XHJcbmltcG9ydCBTcHJpdGVBc3NldCBmcm9tIFwiLi9TcHJpdGVBc3NldFwiO1xyXG5pbXBvcnQgU3ByaXRlQXRsYXNBc3NldCBmcm9tIFwiLi9TcHJpdGVBdGxhc0Fzc2V0XCI7XHJcblxyXG5jbGFzcyBBc3NldE1uZyB7XHJcbiAgICBkYXRhX1NwcnRpZUF0bGFzOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcCgpO1xyXG4gICAgZGF0YV9TcHJ0aWU6IE1hcDxzdHJpbmcsIGFueT4gPSBuZXcgTWFwKCk7XHJcbiAgICBkYXRhX011c2ljOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcCgpO1xyXG4gICAgZGF0YV9BbmltYXRpb246IE1hcDxzdHJpbmcsIGFueT4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgQWxsQXNzZXRDbGFzczogQXJyYXk8YW55PiA9IFtdXHJcbiAgICBzdGFydExvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5BbGxBc3NldENsYXNzLnB1c2goU3ByaXRlQXRsYXNBc3NldC5sb2FkQXNzZXQodGhpcy5kYXRhX1NwcnRpZUF0bGFzKSk7XHJcbiAgICAgICAgdGhpcy5BbGxBc3NldENsYXNzLnB1c2goU3ByaXRlQXNzZXQubG9hZEFzc2V0KHRoaXMuZGF0YV9TcHJ0aWUpKTtcclxuICAgICAgICB0aGlzLkFsbEFzc2V0Q2xhc3MucHVzaChNdXNpY0Fzc2V0LmxvYWRBc3NldCh0aGlzLmRhdGFfTXVzaWMpKTtcclxuICAgICAgICB0aGlzLkFsbEFzc2V0Q2xhc3MucHVzaChBbmltYXRpb25Bc3NldC5sb2FkQXNzZXQodGhpcy5kYXRhX0FuaW1hdGlvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrU3RhdGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVwZXQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BbGxBc3NldENsYXNzLmZvckVhY2goX0Fzc2V0Q2xhc3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghX0Fzc2V0Q2xhc3MuY2hlY2tBc3NldFN0YXRlKSByZXR1cm4gY2hlY2sgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmIChjaGVjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocmVwZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBc3NldE1uZygpOyJdfQ==