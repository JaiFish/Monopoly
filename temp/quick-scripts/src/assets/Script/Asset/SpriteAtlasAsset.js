"use strict";
cc._RF.push(module, '31e45KA+8xHI5Rn2Ztjff8f', 'SpriteAtlasAsset');
// Script/Asset/SpriteAtlasAsset.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpriteAtlasAsset = /** @class */ (function () {
    function SpriteAtlasAsset() {
        this.typePath = "Image/";
        this.filePath = [
            "Station/Station",
            "Station/Station_Gary",
            "Station/UIBtnStatoin",
            "Station/StationInfo1",
            "Station/StationInfo2",
            "Bear",
            "MapPoint",
            "Cloud",
            "TrainType",
            "Feature",
            "Setting",
            "Props/GetProps",
            "Props/Props",
        ];
    }
    SpriteAtlasAsset.prototype.loadAsset = function (_Asset) {
        var _this = this;
        this.checkAssetState = false;
        var formatArr = [];
        for (var index = 0; index < this.filePath.length; index++) {
            formatArr.push(this.typePath + this.filePath[index]);
        }
        cc.resources.load(formatArr, cc.SpriteAtlas, function (err, data) {
            data.forEach(function (_SpriteAtlas) {
                _SpriteAtlas.getSpriteFrames().forEach(function (_spriteFrame) {
                    // console.log(_spriteFrame);
                    _Asset.set(_spriteFrame.name, _spriteFrame);
                });
            });
            _this.checkAssetState = true;
        });
        return this;
    };
    return SpriteAtlasAsset;
}());
exports.default = new SpriteAtlasAsset();

cc._RF.pop();