import IAsset from "../Interface/IAsset";


class SpriteAtlasAsset implements IAsset {
    checkAssetState: boolean;
    typePath: string = "Image/";
    filePath: string[] = [
        "Station",
        "Station_Gary",
        "Bear",
        "MapPoint",
        "Cloud",
    ];
    loadAsset(_Asset: Map<string, any>) {
        this.checkAssetState = false
        let formatArr = []
        for (let index = 0; index < this.filePath.length; index++) {
            formatArr.push(this.typePath + this.filePath[index])
        }
        cc.resources.load(formatArr, cc.SpriteAtlas, (err, data: Array<cc.SpriteAtlas>) => {
            data.forEach(_SpriteAtlas => {
                _SpriteAtlas.getSpriteFrames().forEach(_spriteFrame => {
                    // console.log(_spriteFrame);
                    _Asset.set(_spriteFrame.name, _spriteFrame)
                })
            });
            this.checkAssetState = true;
        })
        return this
    }
  
}
export default new SpriteAtlasAsset();
