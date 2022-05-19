
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Asset/SpriteAsset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8054pchZ1JKIhfT6VDOWEl', 'SpriteAsset');
// Script/Asset/SpriteAsset.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpriteAsset = /** @class */ (function () {
    function SpriteAsset() {
        this.typePath = "Image/";
        this.filePath = [];
    }
    SpriteAsset.prototype.loadAsset = function (_Asset) {
        var _this = this;
        this.checkAssetState = false;
        var formatArr = [];
        for (var index = 0; index < this.filePath.length; index++) {
            formatArr.push(this.typePath + this.filePath[index]);
        }
        cc.resources.load(formatArr, cc.SpriteFrame, function (err, data) {
            data.forEach(function (_Sprite) {
                _Asset.set(_Sprite.name, _Sprite);
            });
            _this.checkAssetState = true;
            console.log(_Asset);
        });
        return this;
    };
    return SpriteAsset;
}());
exports.default = new SpriteAsset();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBc3NldFxcU3ByaXRlQXNzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUFBO1FBRUksYUFBUSxHQUFXLFFBQVEsQ0FBQztRQUM1QixhQUFRLEdBQWEsRUFHcEIsQ0FBQztJQWtCTixDQUFDO0lBakJHLCtCQUFTLEdBQVQsVUFBVSxNQUF3QjtRQUFsQyxpQkFlQztRQWRHLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFBO1FBQzVCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQTtRQUNsQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDdkQsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtTQUN2RDtRQUNELEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsR0FBRyxFQUFFLElBQTJCO1lBQzFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUNoQixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUE7WUFDckMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFBO1FBRUYsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBQ0Qsa0JBQWUsSUFBSSxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jbGFzcyBTcHJpdGVBc3NldCB7XHJcbiAgICBjaGVja0Fzc2V0U3RhdGU6IGJvb2xlYW47XHJcbiAgICB0eXBlUGF0aDogc3RyaW5nID0gXCJJbWFnZS9cIjtcclxuICAgIGZpbGVQYXRoOiBzdHJpbmdbXSA9IFtcclxuXHJcblxyXG4gICAgXTtcclxuICAgIGxvYWRBc3NldChfQXNzZXQ6IE1hcDxzdHJpbmcsIGFueT4pIHtcclxuICAgICAgICB0aGlzLmNoZWNrQXNzZXRTdGF0ZSA9IGZhbHNlXHJcbiAgICAgICAgbGV0IGZvcm1hdEFyciA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZmlsZVBhdGgubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdEFyci5wdXNoKHRoaXMudHlwZVBhdGggKyB0aGlzLmZpbGVQYXRoW2luZGV4XSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoZm9ybWF0QXJyLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgZGF0YTogQXJyYXk8Y2MuU3ByaXRlRnJhbWU+KSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChfU3ByaXRlID0+IHtcclxuICAgICAgICAgICAgICAgIF9Bc3NldC5zZXQoX1Nwcml0ZS5uYW1lLCBfU3ByaXRlKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0Fzc2V0U3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfQXNzZXQpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBTcHJpdGVBc3NldCgpOyJdfQ==