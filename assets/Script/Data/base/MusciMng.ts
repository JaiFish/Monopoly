import AssetMng from "../../Asset/AssetMng";

class MusicMng {
    musicVol: number = 0.8;
    effectVol: number = 0.8;
    default_Music: number = 0.8;
    default_Effect: number = 0.8;
    isMusicOpen: boolean = true;
    isEffectOpen: boolean = true;


    musicID: number;

    effectID: Map<string, number> = new Map()
    init() {
        // this.setMusicVol(0)
        // this.setEffectsicVol(0)
        // this.swichMusic()
        // this.swichEffect()
        this.setMusicVol()
        this.setEffectsicVol()
    }

    testPlayMusic(str: string, isLoop: boolean = true) {

        this.musicID = cc.audioEngine.play(AssetMng.data_Music.get(str), isLoop, this.musicVol)
    }

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
        cc.audioEngine.setEffectsVolume(this.isEffectOpen ? this.effectVol : 0)
    }
    setEffectsicVol(vol?: number) {
        this.effectVol = vol ? vol : this.effectVol
        cc.audioEngine.setEffectsVolume(this.isEffectOpen ? this.effectVol : 0)
    }
    effectPlay(str: string, isLoop: boolean = false) {
        this.effectID.set(str, cc.audioEngine.playEffect(AssetMng.data_Music.get(str), isLoop))
        return  this.effectID.get(str)
    }

    effectStop(str: string) {
        cc.audioEngine.stopEffect(this.effectID.get(str))

    }
    effectAllStop() {
        this.effectID.forEach((value: number, key: string) => {
            cc.audioEngine.stopEffect(this.effectID.get(key))
        });
        this.effectID.clear()
    }
}
export default new MusicMng();