
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBc3NldFxcQXNzZXRNbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtREFBOEM7QUFDOUMsMkNBQXNDO0FBQ3RDLDZDQUF3QztBQUN4Qyx1REFBa0Q7QUFFbEQ7SUFBQTtRQUNJLHFCQUFnQixHQUFxQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQy9DLGdCQUFXLEdBQXFCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUMsZUFBVSxHQUFxQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3pDLG1CQUFjLEdBQXFCLElBQUksR0FBRyxFQUFFLENBQUM7UUFFN0Msa0JBQWEsR0FBZSxFQUFFLENBQUE7SUF1QmxDLENBQUM7SUF0QkcsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLDBCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHFCQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHdCQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQUEsaUJBYUM7UUFaRyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBaUI7WUFDdkMsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDO2dCQUNwQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsV0FBVztvQkFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlO3dCQUFFLE9BQU8sS0FBSyxHQUFHLEtBQUssQ0FBQTtnQkFDMUQsQ0FBQyxDQUFDLENBQUE7Z0JBQ0YsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixPQUFPLEVBQUUsQ0FBQztpQkFDYjtZQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNYLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVMLGVBQUM7QUFBRCxDQTdCQSxBQTZCQyxJQUFBO0FBQ0Qsa0JBQWUsSUFBSSxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgQW5pbWF0aW9uQXNzZXQgZnJvbSBcIi4vQW5pbWF0aW9uQXNzZXRcIjtcclxuaW1wb3J0IE11c2ljQXNzZXQgZnJvbSBcIi4vTXVzaWNBc3NldFwiO1xyXG5pbXBvcnQgU3ByaXRlQXNzZXQgZnJvbSBcIi4vU3ByaXRlQXNzZXRcIjtcclxuaW1wb3J0IFNwcml0ZUF0bGFzQXNzZXQgZnJvbSBcIi4vU3ByaXRlQXRsYXNBc3NldFwiO1xyXG5cclxuY2xhc3MgQXNzZXRNbmcge1xyXG4gICAgZGF0YV9TcHJ0aWVBdGxhczogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXAoKTtcclxuICAgIGRhdGFfU3BydGllOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcCgpO1xyXG4gICAgZGF0YV9NdXNpYzogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXAoKTtcclxuICAgIGRhdGFfQW5pbWF0aW9uOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIEFsbEFzc2V0Q2xhc3M6IEFycmF5PGFueT4gPSBbXVxyXG4gICAgc3RhcnRMb2FkKCkge1xyXG4gICAgICAgIHRoaXMuQWxsQXNzZXRDbGFzcy5wdXNoKFNwcml0ZUF0bGFzQXNzZXQubG9hZEFzc2V0KHRoaXMuZGF0YV9TcHJ0aWVBdGxhcykpO1xyXG4gICAgICAgIHRoaXMuQWxsQXNzZXRDbGFzcy5wdXNoKFNwcml0ZUFzc2V0LmxvYWRBc3NldCh0aGlzLmRhdGFfU3BydGllKSk7XHJcbiAgICAgICAgdGhpcy5BbGxBc3NldENsYXNzLnB1c2goTXVzaWNBc3NldC5sb2FkQXNzZXQodGhpcy5kYXRhX011c2ljKSk7XHJcbiAgICAgICAgdGhpcy5BbGxBc3NldENsYXNzLnB1c2goQW5pbWF0aW9uQXNzZXQubG9hZEFzc2V0KHRoaXMuZGF0YV9BbmltYXRpb24pKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1N0YXRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZTogRnVuY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlcGV0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQWxsQXNzZXRDbGFzcy5mb3JFYWNoKF9Bc3NldENsYXNzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIV9Bc3NldENsYXNzLmNoZWNrQXNzZXRTdGF0ZSkgcmV0dXJuIGNoZWNrID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHJlcGV0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDUwMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXNzZXRNbmcoKTsiXX0=