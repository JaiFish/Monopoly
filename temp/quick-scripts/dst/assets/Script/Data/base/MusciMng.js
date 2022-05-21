
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
        this.default_Music = 0.8;
        this.default_Effect = 0.8;
        this.isMusicOpen = true;
        this.isEffectOpen = true;
        this.effectID = new Map();
    }
    MusicMng.prototype.init = function () {
        // this.setMusicVol(0)
        // this.setEffectsicVol(0)
        // this.swichMusic()
        // this.swichEffect()
        this.setMusicVol();
        this.setEffectsicVol();
    };
    MusicMng.prototype.testPlayMusic = function (str, isLoop) {
        if (isLoop === void 0) { isLoop = true; }
        this.musicID = cc.audioEngine.play(AssetMng_1.default.data_Music.get(str), isLoop, this.musicVol);
    };
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
        cc.audioEngine.setEffectsVolume(this.isEffectOpen ? this.effectVol : 0);
    };
    MusicMng.prototype.setEffectsicVol = function (vol) {
        this.effectVol = vol ? vol : this.effectVol;
        cc.audioEngine.setEffectsVolume(this.isEffectOpen ? this.effectVol : 0);
    };
    MusicMng.prototype.effectPlay = function (str, isLoop) {
        if (isLoop === void 0) { isLoop = false; }
        this.effectID.set(str, cc.audioEngine.playEffect(AssetMng_1.default.data_Music.get(str), isLoop));
    };
    MusicMng.prototype.effectStop = function (str) {
        cc.audioEngine.stopEffect(this.effectID.get(str));
    };
    MusicMng.prototype.effectAllStop = function () {
        var _this = this;
        this.effectID.forEach(function (value, key) {
            cc.audioEngine.stopEffect(_this.effectID.get(key));
        });
        this.effectID.clear();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxiYXNlXFxNdXNjaU1uZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUU1QztJQUFBO1FBQ0ksYUFBUSxHQUFXLEdBQUcsQ0FBQztRQUN2QixjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGtCQUFhLEdBQVcsR0FBRyxDQUFDO1FBQzVCLG1CQUFjLEdBQVcsR0FBRyxDQUFDO1FBQzdCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBSzdCLGFBQVEsR0FBd0IsSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQXNEN0MsQ0FBQztJQXJERyx1QkFBSSxHQUFKO1FBQ0ksc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7SUFDMUIsQ0FBQztJQUVELGdDQUFhLEdBQWIsVUFBYyxHQUFXLEVBQUUsTUFBc0I7UUFBdEIsdUJBQUEsRUFBQSxhQUFzQjtRQUU3QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzNGLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBRUksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUE7UUFDcEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdkUsQ0FBQztJQUNELDhCQUFXLEdBQVgsVUFBWSxHQUFZO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDekMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdkUsQ0FBQztJQUNELDRCQUFTLEdBQVQsVUFBVSxHQUFXLEVBQUUsTUFBc0I7UUFBdEIsdUJBQUEsRUFBQSxhQUFzQjtRQUN6QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxrQkFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDakYsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQzlCLENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUE7UUFDdEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBQ0Qsa0NBQWUsR0FBZixVQUFnQixHQUFZO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDM0MsRUFBRSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBQ0QsNkJBQVUsR0FBVixVQUFXLEdBQVcsRUFBRSxNQUF1QjtRQUF2Qix1QkFBQSxFQUFBLGNBQXVCO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxrQkFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUMzRixDQUFDO0lBRUQsNkJBQVUsR0FBVixVQUFXLEdBQVc7UUFDbEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUVyRCxDQUFDO0lBQ0QsZ0NBQWEsR0FBYjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFhLEVBQUUsR0FBVztZQUM3QyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ3JELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0lBQ0wsZUFBQztBQUFELENBakVBLEFBaUVDLElBQUE7QUFDRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0TW5nIGZyb20gXCIuLi8uLi9Bc3NldC9Bc3NldE1uZ1wiO1xyXG5cclxuY2xhc3MgTXVzaWNNbmcge1xyXG4gICAgbXVzaWNWb2w6IG51bWJlciA9IDAuODtcclxuICAgIGVmZmVjdFZvbDogbnVtYmVyID0gMC44O1xyXG4gICAgZGVmYXVsdF9NdXNpYzogbnVtYmVyID0gMC44O1xyXG4gICAgZGVmYXVsdF9FZmZlY3Q6IG51bWJlciA9IDAuODtcclxuICAgIGlzTXVzaWNPcGVuOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlzRWZmZWN0T3BlbjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG5cclxuICAgIG11c2ljSUQ6IG51bWJlcjtcclxuXHJcbiAgICBlZmZlY3RJRDogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoKVxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICAvLyB0aGlzLnNldE11c2ljVm9sKDApXHJcbiAgICAgICAgLy8gdGhpcy5zZXRFZmZlY3RzaWNWb2woMClcclxuICAgICAgICAvLyB0aGlzLnN3aWNoTXVzaWMoKVxyXG4gICAgICAgIC8vIHRoaXMuc3dpY2hFZmZlY3QoKVxyXG4gICAgICAgIHRoaXMuc2V0TXVzaWNWb2woKVxyXG4gICAgICAgIHRoaXMuc2V0RWZmZWN0c2ljVm9sKClcclxuICAgIH1cclxuXHJcbiAgICB0ZXN0UGxheU11c2ljKHN0cjogc3RyaW5nLCBpc0xvb3A6IGJvb2xlYW4gPSB0cnVlKSB7XHJcblxyXG4gICAgICAgIHRoaXMubXVzaWNJRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoQXNzZXRNbmcuZGF0YV9NdXNpYy5nZXQoc3RyKSwgaXNMb29wLCB0aGlzLm11c2ljVm9sKVxyXG4gICAgfVxyXG5cclxuICAgIHN3aWNoTXVzaWMoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaXNNdXNpY09wZW4gPSAhdGhpcy5pc011c2ljT3BlblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHRoaXMuaXNNdXNpY09wZW4gPyB0aGlzLm11c2ljVm9sIDogMClcclxuICAgIH1cclxuICAgIHNldE11c2ljVm9sKHZvbD86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubXVzaWNWb2wgPSB2b2wgPyB2b2wgOiB0aGlzLm11c2ljVm9sXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodGhpcy5pc011c2ljT3BlbiA/IHRoaXMubXVzaWNWb2wgOiAwKVxyXG4gICAgfVxyXG4gICAgbXVzaWNQbGF5KHN0cjogc3RyaW5nLCBpc0xvb3A6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpY1N0b3AoKVxyXG4gICAgICAgIHRoaXMubXVzaWNJRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhBc3NldE1uZy5kYXRhX011c2ljLmdldChzdHIpLCBpc0xvb3ApXHJcbiAgICB9XHJcbiAgICBtdXNpY1N0b3AoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKClcclxuICAgIH1cclxuXHJcbiAgICBzd2ljaEVmZmVjdCgpIHtcclxuICAgICAgICB0aGlzLmlzRWZmZWN0T3BlbiA9ICF0aGlzLmlzRWZmZWN0T3BlblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodGhpcy5pc0VmZmVjdE9wZW4gPyB0aGlzLmVmZmVjdFZvbCA6IDApXHJcbiAgICB9XHJcbiAgICBzZXRFZmZlY3RzaWNWb2wodm9sPzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RWb2wgPSB2b2wgPyB2b2wgOiB0aGlzLmVmZmVjdFZvbFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodGhpcy5pc0VmZmVjdE9wZW4gPyB0aGlzLmVmZmVjdFZvbCA6IDApXHJcbiAgICB9XHJcbiAgICBlZmZlY3RQbGF5KHN0cjogc3RyaW5nLCBpc0xvb3A6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0SUQuc2V0KHN0ciwgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChBc3NldE1uZy5kYXRhX011c2ljLmdldChzdHIpLCBpc0xvb3ApKVxyXG4gICAgfVxyXG5cclxuICAgIGVmZmVjdFN0b3Aoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KHRoaXMuZWZmZWN0SUQuZ2V0KHN0cikpXHJcblxyXG4gICAgfVxyXG4gICAgZWZmZWN0QWxsU3RvcCgpIHtcclxuICAgICAgICB0aGlzLmVmZmVjdElELmZvckVhY2goKHZhbHVlOiBudW1iZXIsIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QodGhpcy5lZmZlY3RJRC5nZXQoa2V5KSlcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVmZmVjdElELmNsZWFyKClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgTXVzaWNNbmcoKTsiXX0=