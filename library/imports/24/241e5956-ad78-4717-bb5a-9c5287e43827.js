"use strict";
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