"use strict";
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
            // console.log(_Asset);
        });
        return this;
    };
    return SpriteAsset;
}());
exports.default = new SpriteAsset();

cc._RF.pop();