import IAsset from "../Interface/IAsset";

class MusicAsset implements IAsset {

    checkAssetState: boolean;
    typePath: string = "Music";
    filePath: string[] = [

    ];
    loadAsset(_Asset: Map<string, any>) {
        this.checkAssetState = false
        cc.resources.loadDir(this.typePath, cc.AudioClip, (err, data: Array<cc.AudioClip>) => {
            data.forEach(_animationClip => {
                _Asset.set(_animationClip.name, _animationClip)
            });
            this.checkAssetState = true;
        })
        return this
    }
}
export default new MusicAsset();