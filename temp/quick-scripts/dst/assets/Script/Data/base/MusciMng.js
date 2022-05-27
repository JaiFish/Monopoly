
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
        this.isMusicOpen = true;
        this.isEffectOpen = true;
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
        this.musicVol = vol ? vol : this.default_Music;
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
        this.effectVol = vol ? vol : this.default_Effect;
        cc.audioEngine.setEffectsVolume(this.isEffectOpen ? this.effectVol : 0);
    };
    MusicMng.prototype.effectPlay = function (str, isLoop) {
        if (isLoop === void 0) { isLoop = false; }
        this.effectID.set(str, cc.audioEngine.playEffect(AssetMng_1.default.data_Music.get(str), isLoop));
        return this.effectID.get(str);
    };
    MusicMng.prototype.singleEffectPlay = function (str, isLoop) {
        if (isLoop === void 0) { isLoop = false; }
        var tryGetID = this.effectID.get(str);
        if (tryGetID != undefined)
            cc.audioEngine.stopEffect(tryGetID);
        this.effectID.set(str, cc.audioEngine.playEffect(AssetMng_1.default.data_Music.get(str), isLoop));
        return this.effectID.get(str);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxiYXNlXFxNdXNjaU1uZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUU1QztJQUFBO1FBQ0ksYUFBUSxHQUFXLEdBQUcsQ0FBQztRQUN2QixjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGtCQUFhLEdBQVcsR0FBRyxDQUFDO1FBQzVCLG1CQUFjLEdBQVcsR0FBRyxDQUFDO1FBQzdCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBSzdCLGFBQVEsR0FBd0IsSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQWlFN0MsQ0FBQztJQWhFRyx1QkFBSSxHQUFKO1FBQ0ksc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7SUFFMUIsQ0FBQztJQUVELGdDQUFhLEdBQWIsVUFBYyxHQUFXLEVBQUUsTUFBc0I7UUFBdEIsdUJBQUEsRUFBQSxhQUFzQjtRQUU3QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzNGLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBRUksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUE7UUFDcEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFD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O0lBQ0QsZ0NBQWEsR0FBYjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFhLEVBQUUsR0FBVztZQUM3QyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ3JELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0lBQ0wsZUFBQztBQUFELENBNUVBLEFBNEVDLElBQUE7QUFDRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0TW5nIGZyb20gXCIuLi8uLi9Bc3NldC9Bc3NldE1uZ1wiO1xyXG5cclxuY2xhc3MgTXVzaWNNbmcge1xyXG4gICAgbXVzaWNWb2w6IG51bWJlciA9IDAuODtcclxuICAgIGVmZmVjdFZvbDogbnVtYmVyID0gMC44O1xyXG4gICAgZGVmYXVsdF9NdXNpYzogbnVtYmVyID0gMC44O1xyXG4gICAgZGVmYXVsdF9FZmZlY3Q6IG51bWJlciA9IDAuODtcclxuICAgIGlzTXVzaWNPcGVuOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlzRWZmZWN0T3BlbjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG5cclxuICAgIG11c2ljSUQ6IG51bWJlcjtcclxuXHJcbiAgICBlZmZlY3RJRDogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoKVxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICAvLyB0aGlzLnNldE11c2ljVm9sKDApXHJcbiAgICAgICAgLy8gdGhpcy5zZXRFZmZlY3RzaWNWb2woMClcclxuICAgICAgICAvLyB0aGlzLnN3aWNoTXVzaWMoKVxyXG4gICAgICAgIC8vIHRoaXMuc3dpY2hFZmZlY3QoKVxyXG4gICAgICAgIHRoaXMuaXNNdXNpY09wZW4gPSB0cnVlXHJcbiAgICAgICAgdGhpcy5pc0VmZmVjdE9wZW4gPSB0cnVlXHJcbiAgICAgICAgdGhpcy5zZXRNdXNpY1ZvbCgpXHJcbiAgICAgICAgdGhpcy5zZXRFZmZlY3RzaWNWb2woKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0ZXN0UGxheU11c2ljKHN0cjogc3RyaW5nLCBpc0xvb3A6IGJvb2xlYW4gPSB0cnVlKSB7XHJcblxyXG4gICAgICAgIHRoaXMubXVzaWNJRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoQXNzZXRNbmcuZGF0YV9NdXNpYy5nZXQoc3RyKSwgaXNMb29wLCB0aGlzLm11c2ljVm9sKVxyXG4gICAgfVxyXG5cclxuICAgIHN3aWNoTXVzaWMoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaXNNdXNpY09wZW4gPSAhdGhpcy5pc011c2ljT3BlblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHRoaXMuaXNNdXNpY09wZW4gPyB0aGlzLm11c2ljVm9sIDogMClcclxuICAgIH1cclxuICAgIHNldE11c2ljVm9sKHZvbD86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubXVzaWNWb2wgPSB2b2wgPyB2b2wgOiB0aGlzLmRlZmF1bHRfTXVzaWNcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh0aGlzLmlzTXVzaWNPcGVuID8gdGhpcy5tdXNpY1ZvbCA6IDApXHJcbiAgICB9XHJcbiAgICBtdXNpY1BsYXkoc3RyOiBzdHJpbmcsIGlzTG9vcDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLm11c2ljU3RvcCgpXHJcbiAgICAgICAgdGhpcy5tdXNpY0lEID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKEFzc2V0TW5nLmRhdGFfTXVzaWMuZ2V0KHN0ciksIGlzTG9vcClcclxuICAgIH1cclxuICAgIG11c2ljU3RvcCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKVxyXG4gICAgfVxyXG5cclxuICAgIHN3aWNoRWZmZWN0KCkge1xyXG4gICAgICAgIHRoaXMuaXNFZmZlY3RPcGVuID0gIXRoaXMuaXNFZmZlY3RPcGVuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZSh0aGlzLmlzRWZmZWN0T3BlbiA/IHRoaXMuZWZmZWN0Vm9sIDogMClcclxuICAgIH1cclxuICAgIHNldEVmZmVjdHNpY1ZvbCh2b2w/OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmVmZmVjdFZvbCA9IHZvbCA/IHZvbCA6IHRoaXMuZGVmYXVsdF9FZmZlY3RcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKHRoaXMuaXNFZmZlY3RPcGVuID8gdGhpcy5lZmZlY3RWb2wgOiAwKVxyXG4gICAgfVxyXG4gICAgZWZmZWN0UGxheShzdHI6IHN0cmluZywgaXNMb29wOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmVmZmVjdElELnNldChzdHIsIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoQXNzZXRNbmcuZGF0YV9NdXNpYy5nZXQoc3RyKSwgaXNMb29wKSlcclxuICAgICAgICByZXR1cm4gdGhpcy5lZmZlY3RJRC5nZXQoc3RyKVxyXG4gICAgfVxyXG5cclxuICAgIHNpbmdsZUVmZmVjdFBsYXkoc3RyOiBzdHJpbmcsIGlzTG9vcDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IHRyeUdldElEID0gdGhpcy5lZmZlY3RJRC5nZXQoc3RyKVxyXG4gICAgICAgIGlmICh0cnlHZXRJRCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QodHJ5R2V0SUQpXHJcbiAgICAgICAgdGhpcy5lZmZlY3RJRC5zZXQoc3RyLCBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KEFzc2V0TW5nLmRhdGFfTXVzaWMuZ2V0KHN0ciksIGlzTG9vcCkpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWZmZWN0SUQuZ2V0KHN0cilcclxuICAgIH1cclxuICAgIGVmZmVjdFN0b3Aoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KHRoaXMuZWZmZWN0SUQuZ2V0KHN0cikpXHJcblxyXG4gICAgfVxyXG4gICAgZWZmZWN0QWxsU3RvcCgpIHtcclxuICAgICAgICB0aGlzLmVmZmVjdElELmZvckVhY2goKHZhbHVlOiBudW1iZXIsIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QodGhpcy5lZmZlY3RJRC5nZXQoa2V5KSlcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVmZmVjdElELmNsZWFyKClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgTXVzaWNNbmcoKTsiXX0=