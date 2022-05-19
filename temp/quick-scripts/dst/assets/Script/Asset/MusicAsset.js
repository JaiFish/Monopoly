
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Asset/MusicAsset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '241e5lWrXhHF7tanFKH5Dgn', 'MusicAsset');
// Script/Asset/MusicAsset.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MusicAsset = /** @class */ (function () {
    function MusicAsset() {
        this.typePath = "Music";
        this.filePath = [];
    }
    MusicAsset.prototype.loadAsset = function (_Asset) {
        var _this = this;
        this.checkAssetState = false;
        cc.resources.loadDir(this.typePath, cc.AudioClip, function (err, data) {
            data.forEach(function (_animationClip) {
                _Asset.set(_animationClip.name, _animationClip);
            });
            _this.checkAssetState = true;
        });
        return this;
    };
    return MusicAsset;
}());
exports.default = new MusicAsset();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBc3NldFxcTXVzaWNBc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQUE7UUFHSSxhQUFRLEdBQVcsT0FBTyxDQUFDO1FBQzNCLGFBQVEsR0FBYSxFQUVwQixDQUFDO0lBV04sQ0FBQztJQVZHLDhCQUFTLEdBQVQsVUFBVSxNQUF3QjtRQUFsQyxpQkFTQztRQVJHLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFBO1FBQzVCLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBRSxJQUF5QjtZQUM3RSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsY0FBYztnQkFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFBO1lBQ25ELENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFDTCxpQkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFDRCxrQkFBZSxJQUFJLFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElBc3NldCBmcm9tIFwiLi4vSW50ZXJmYWNlL0lBc3NldFwiO1xyXG5cclxuY2xhc3MgTXVzaWNBc3NldCBpbXBsZW1lbnRzIElBc3NldCB7XHJcblxyXG4gICAgY2hlY2tBc3NldFN0YXRlOiBib29sZWFuO1xyXG4gICAgdHlwZVBhdGg6IHN0cmluZyA9IFwiTXVzaWNcIjtcclxuICAgIGZpbGVQYXRoOiBzdHJpbmdbXSA9IFtcclxuXHJcbiAgICBdO1xyXG4gICAgbG9hZEFzc2V0KF9Bc3NldDogTWFwPHN0cmluZywgYW55Pikge1xyXG4gICAgICAgIHRoaXMuY2hlY2tBc3NldFN0YXRlID0gZmFsc2VcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZERpcih0aGlzLnR5cGVQYXRoLCBjYy5BdWRpb0NsaXAsIChlcnIsIGRhdGE6IEFycmF5PGNjLkF1ZGlvQ2xpcD4pID0+IHtcclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKF9hbmltYXRpb25DbGlwID0+IHtcclxuICAgICAgICAgICAgICAgIF9Bc3NldC5zZXQoX2FuaW1hdGlvbkNsaXAubmFtZSwgX2FuaW1hdGlvbkNsaXApXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQXNzZXRTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBNdXNpY0Fzc2V0KCk7Il19