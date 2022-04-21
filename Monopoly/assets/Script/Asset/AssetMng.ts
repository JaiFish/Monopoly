
import IAsset from "../Interface/IAsset";
import SpriteAtlasAsset from "./SpriteAtlasAsset";

class AssetMng {
    Asset: Map<string, any> = new Map();
    AllAssetClass: Array<IAsset> = []
    startLoad() {
        this.AllAssetClass.push(SpriteAtlasAsset.loadAsset(this.Asset));
    }

    checkState(): Promise<void> {
        // this.AllAssetClass.forEach(_AssetClass => {
        //     if (!_AssetClass.checkAssetState) return check = false
        // })
        return new Promise<void>((resolve: Function) => {
            let repet = setInterval(() => {
                let check = true;
                this.AllAssetClass.forEach(_AssetClass => {
                    console.log(_AssetClass.checkAssetState);
                    if (!_AssetClass.checkAssetState) return check = false
                })
                if (check) {
                    clearInterval(repet);
                    resolve();
                }
            }, 500)
        })
    }

}
export default new AssetMng();