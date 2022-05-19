
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/base/MusciMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16bbfnoMXtGA4a0OP0B56v9', 'MusciMng');
// Script/Data/base/MusciMng.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssetMng_1 = require("../../Asset/AssetMng");
var MusicMng = /** @class */ (function () {
    function MusicMng() {
        this.musicVol = 0.8;
        this.effectVol = 0.8;
        this.isMusicOpen = true;
        this.isEffectOpen = true;
        this.effectID = new Map();
    }
    MusicMng.prototype.swichMusic = function () {
        this.isMusicOpen = !this.isMusicOpen;
        cc.audioEngine.setMusicVolume(this.isMusicOpen ? this.musicVol : 0);
    };
    MusicMng.prototype.setMusicVol = function (vol) {
        this.musicVol = vol ? vol : this.musicVol;
        cc.audioEngine.setMusicVolume(this.isMusicOpen ? this.musicVol : 0);
    };
    MusicMng.prototype.musicPlay = function (str, isLoop) {
        if (isLoop === void 0) { isLoop = true; }
        this.musicStop();
        this.musicID = cc.audioEngine.playMusic(AssetMng_1.default.data_Music.get(str), isLoop);
    };
    MusicMng.prototype.musicStop = function () {
        cc.audioEngine.stopMusic();
    };
    MusicMng.prototype.swichEffect = function () {
        this.isEffectOpen = !this.isEffectOpen;
        cc.audioEngine.setMusicVolume(this.isEffectOpen ? this.effectVol : 0);
    };
    MusicMng.prototype.effectsicVol = function (vol) {
        this.effectVol = vol ? vol : this.effectVol;
        cc.audioEngine.setEffectsVolume(this.isEffectOpen ? this.effectVol : 0);
    };
    MusicMng.prototype.effectPlay = function (str, isLoop) {
        if (isLoop === void 0) { isLoop = false; }
        this.musicStop();
        this.musicID = cc.audioEngine.playMusic(AssetMng_1.default.data_Music.get(str), isLoop);
    };
    MusicMng.prototype.effectStop = function () {
        cc.audioEngine.stopMusic();
    };
    return MusicMng;
}());
exports.default = new MusicMng();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxiYXNlXFxNdXNjaU1uZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUU1QztJQUFBO1FBQ0ksYUFBUSxHQUFXLEdBQUcsQ0FBQztRQUN2QixjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBSzdCLGFBQVEsR0FBd0IsSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQWlDN0MsQ0FBQztJQS9CRyw2QkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUE7UUFDcEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdkUsQ0FBQztJQUNELDhCQUFXLEdBQVgsVUFBWSxHQUFZO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDekMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdkUsQ0FBQztJQUNELDRCQUFTLEdBQVQsVUFBVSxHQUFXLEVBQUUsTUFBc0I7UUFBdEIsdUJBQUEsRUFBQSxhQUFzQjtRQUN6QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxrQkFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDakYsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQzlCLENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUE7UUFDdEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDekUsQ0FBQztJQUNELCtCQUFZLEdBQVosVUFBYSxHQUFZO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDM0MsRUFBRSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBQ0QsNkJBQVUsR0FBVixVQUFXLEdBQVcsRUFBRSxNQUF1QjtRQUF2Qix1QkFBQSxFQUFBLGNBQXVCO1FBQzNDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGtCQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNqRixDQUFDO0lBQ0QsNkJBQVUsR0FBVjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDOUIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQTFDQSxBQTBDQyxJQUFBO0FBQ0Qsa0JBQWUsSUFBSSxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3NldE1uZyBmcm9tIFwiLi4vLi4vQXNzZXQvQXNzZXRNbmdcIjtcclxuXHJcbmNsYXNzIE11c2ljTW5nIHtcclxuICAgIG11c2ljVm9sOiBudW1iZXIgPSAwLjg7XHJcbiAgICBlZmZlY3RWb2w6IG51bWJlciA9IDAuODtcclxuICAgIGlzTXVzaWNPcGVuOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlzRWZmZWN0T3BlbjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG5cclxuICAgIG11c2ljSUQ6IG51bWJlcjtcclxuXHJcbiAgICBlZmZlY3RJRDogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoKVxyXG5cclxuICAgIHN3aWNoTXVzaWMoKSB7XHJcbiAgICAgICAgdGhpcy5pc011c2ljT3BlbiA9ICF0aGlzLmlzTXVzaWNPcGVuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodGhpcy5pc011c2ljT3BlbiA/IHRoaXMubXVzaWNWb2wgOiAwKVxyXG4gICAgfVxyXG4gICAgc2V0TXVzaWNWb2wodm9sPzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpY1ZvbCA9IHZvbCA/IHZvbCA6IHRoaXMubXVzaWNWb2xcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh0aGlzLmlzTXVzaWNPcGVuID8gdGhpcy5tdXNpY1ZvbCA6IDApXHJcbiAgICB9XHJcbiAgICBtdXNpY1BsYXkoc3RyOiBzdHJpbmcsIGlzTG9vcDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLm11c2ljU3RvcCgpXHJcbiAgICAgICAgdGhpcy5tdXNpY0lEID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKEFzc2V0TW5nLmRhdGFfTXVzaWMuZ2V0KHN0ciksIGlzTG9vcClcclxuICAgIH1cclxuICAgIG11c2ljU3RvcCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKVxyXG4gICAgfVxyXG5cclxuICAgIHN3aWNoRWZmZWN0KCkge1xyXG4gICAgICAgIHRoaXMuaXNFZmZlY3RPcGVuID0gIXRoaXMuaXNFZmZlY3RPcGVuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodGhpcy5pc0VmZmVjdE9wZW4gPyB0aGlzLmVmZmVjdFZvbCA6IDApXHJcbiAgICB9XHJcbiAgICBlZmZlY3RzaWNWb2wodm9sPzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RWb2wgPSB2b2wgPyB2b2wgOiB0aGlzLmVmZmVjdFZvbFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodGhpcy5pc0VmZmVjdE9wZW4gPyB0aGlzLmVmZmVjdFZvbCA6IDApXHJcbiAgICB9XHJcbiAgICBlZmZlY3RQbGF5KHN0cjogc3RyaW5nLCBpc0xvb3A6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMubXVzaWNTdG9wKClcclxuICAgICAgICB0aGlzLm11c2ljSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoQXNzZXRNbmcuZGF0YV9NdXNpYy5nZXQoc3RyKSwgaXNMb29wKVxyXG4gICAgfVxyXG4gICAgZWZmZWN0U3RvcCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBNdXNpY01uZygpOyJdfQ==