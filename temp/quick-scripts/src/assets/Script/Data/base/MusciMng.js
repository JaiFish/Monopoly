"use strict";
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