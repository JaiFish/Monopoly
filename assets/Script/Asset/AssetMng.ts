
import AnimationAsset from "./AnimationAsset";
import MusicAsset from "./MusicAsset";
import SpriteAsset from "./SpriteAsset";
import SpriteAtlasAsset from "./SpriteAtlasAsset";

class AssetMng {
    data_SprtieAtlas: Map<string, any> = new Map();
    data_Sprtie: Map<string, any> = new Map();
    data_Music: Map<string, any> = new Map();
    data_Animation: Map<string, any> = new Map();


    isAllOK: boolean;
    AllAssetClass: Array<any> = []
    startLoad() {
        this.AllAssetClass.push(SpriteAtlasAsset.loadAsset(this.data_SprtieAtlas));
        this.AllAssetClass.push(SpriteAsset.loadAsset(this.data_Sprtie));
        this.AllAssetClass.push(MusicAsset.loadAsset(this.data_Music));

    }

    bearAsset(_num: number) {
        this.AllAssetClass.push(AnimationAsset.loadAsset(this.data_Animation));
    }

    checkState(): Promise<void> {
        return new Promise<void>((resolve: Function) => {
            if (this.isAllOK) return resolve()
            else {
                let repet = setInterval(() => {
                    let check = true;
                    this.AllAssetClass.forEach(_AssetClass => {
                        if (!_AssetClass.checkAssetState) return check = false
                    })
                    if (check) {
                        this.isAllOK = true
                        clearInterval(repet);
                        resolve();
                    }
                }, 500)
            }

        })
    }

}
export default new AssetMng();