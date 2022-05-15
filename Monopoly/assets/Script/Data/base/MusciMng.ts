import AssetMng from "../../Asset/AssetMng";

class MusicMng {
    musicVol: number = 0.8;
    effectVol: number = 0.8;
    isMusicOpen: boolean = true;
    isEffectOpen: boolean = true;


    musicID: number;

    effectID: Map<string, number> = new Map()

    swichMusic() {
        this.isMusicOpen = !this.isMusicOpen
        cc.audioEngine.setMusicVolume(this.isMusicOpen ? this.musicVol : 0)
    }
    setMusicVol(vol?: number) {
        this.musicVol = vol ? vol : this.musicVol
        cc.audioEngine.setMusicVolume(this.isMusicOpen ? this.musicVol : 0)
    }
    musicPlay(str: string, isLoop: boolean = true) {
        this.musicStop()
        this.musicID = cc.audioEngine.playMusic(AssetMng.data_Music.get(str), isLoop)
    }
    musicStop() {
        cc.audioEngine.stopMusic()
    }

    swichEffect() {
        this.isEffectOpen = !this.isEffectOpen
        cc.audioEngine.setMusicVolume(this.isEffectOpen ? this.effectVol : 0)
    }
    effectsicVol(vol?: number) {
        this.effectVol = vol ? vol : this.effectVol
        cc.audioEngine.setEffectsVolume(this.isEffectOpen ? this.effectVol : 0)
    }
    effectPlay(str: string, isLoop: boolean = false) {
        this.musicStop()
        this.musicID = cc.audioEngine.playMusic(AssetMng.data_Music.get(str), isLoop)
    }
    effectStop() {
        cc.audioEngine.stopMusic()
    }
}
export default new MusicMng();