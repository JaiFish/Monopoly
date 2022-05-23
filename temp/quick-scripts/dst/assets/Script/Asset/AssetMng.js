
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBc3NldFxcQXNzZXRNbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtREFBOEM7QUFDOUMsMkNBQXNDO0FBQ3RDLDZDQUF3QztBQUN4Qyx1REFBa0Q7QUFFbEQ7SUFBQTtRQUNJLHFCQUFnQixHQUFxQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQy9DLGdCQUFXLEdBQXFCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUMsZUFBVSxHQUFxQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3pDLG1CQUFjLEdBQXFCLElBQUksR0FBRyxFQUFFLENBQUM7UUFFN0Msa0JBQWEsR0FBZSxFQUFFLENBQUE7SUEyQmxDLENBQUM7SUExQkcsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLDBCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHFCQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBRW5FLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsSUFBWTtRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyx3QkFBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUFBLGlCQWFDO1FBWkcsT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQWlCO1lBQ3ZDLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQztnQkFDcEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNqQixLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFdBQVc7b0JBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZTt3QkFBRSxPQUFPLEtBQUssR0FBRyxLQUFLLENBQUE7Z0JBQzFELENBQUMsQ0FBQyxDQUFBO2dCQUNGLElBQUksS0FBSyxFQUFFO29CQUNQLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsT0FBTyxFQUFFLENBQUM7aUJBQ2I7WUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDWCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTCxlQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtBQUNELGtCQUFlLElBQUksUUFBUSxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEFuaW1hdGlvbkFzc2V0IGZyb20gXCIuL0FuaW1hdGlvbkFzc2V0XCI7XHJcbmltcG9ydCBNdXNpY0Fzc2V0IGZyb20gXCIuL011c2ljQXNzZXRcIjtcclxuaW1wb3J0IFNwcml0ZUFzc2V0IGZyb20gXCIuL1Nwcml0ZUFzc2V0XCI7XHJcbmltcG9ydCBTcHJpdGVBdGxhc0Fzc2V0IGZyb20gXCIuL1Nwcml0ZUF0bGFzQXNzZXRcIjtcclxuXHJcbmNsYXNzIEFzc2V0TW5nIHtcclxuICAgIGRhdGFfU3BydGllQXRsYXM6IE1hcDxzdHJpbmcsIGFueT4gPSBuZXcgTWFwKCk7XHJcbiAgICBkYXRhX1NwcnRpZTogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXAoKTtcclxuICAgIGRhdGFfTXVzaWM6IE1hcDxzdHJpbmcsIGFueT4gPSBuZXcgTWFwKCk7XHJcbiAgICBkYXRhX0FuaW1hdGlvbjogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICBBbGxBc3NldENsYXNzOiBBcnJheTxhbnk+ID0gW11cclxuICAgIHN0YXJ0TG9hZCgpIHtcclxuICAgICAgICB0aGlzLkFsbEFzc2V0Q2xhc3MucHVzaChTcHJpdGVBdGxhc0Fzc2V0LmxvYWRBc3NldCh0aGlzLmRhdGFfU3BydGllQXRsYXMpKTtcclxuICAgICAgICB0aGlzLkFsbEFzc2V0Q2xhc3MucHVzaChTcHJpdGVBc3NldC5sb2FkQXNzZXQodGhpcy5kYXRhX1NwcnRpZSkpO1xyXG4gICAgICAgIHRoaXMuQWxsQXNzZXRDbGFzcy5wdXNoKE11c2ljQXNzZXQubG9hZEFzc2V0KHRoaXMuZGF0YV9NdXNpYykpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGJlYXJBc3NldChfbnVtOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLkFsbEFzc2V0Q2xhc3MucHVzaChBbmltYXRpb25Bc3NldC5sb2FkQXNzZXQodGhpcy5kYXRhX0FuaW1hdGlvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrU3RhdGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVwZXQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BbGxBc3NldENsYXNzLmZvckVhY2goX0Fzc2V0Q2xhc3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghX0Fzc2V0Q2xhc3MuY2hlY2tBc3NldFN0YXRlKSByZXR1cm4gY2hlY2sgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmIChjaGVjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocmVwZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBc3NldE1uZygpOyJdfQ==