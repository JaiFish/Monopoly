
class SpriteAsset {
    checkAssetState: boolean;
    typePath: string = "Image/";
    filePath: string[] = [


    ];
    loadAsset(_Asset: Map<string, any>) {
        this.checkAssetState = false
        let formatArr = []
        for (let index = 0; index < this.filePath.length; index++) {
            formatArr.push(this.typePath + this.filePath[index])
        }
        cc.resources.load(formatArr, cc.SpriteFrame, (err, data: Array<cc.SpriteFrame>) => {
            data.forEach(_Sprite => {
                _Asset.set(_Sprite.name, _Sprite)
            });
            this.checkAssetState = true;
            // console.log(_Asset);
        })

        return this
    }

}
export default new SpriteAsset();