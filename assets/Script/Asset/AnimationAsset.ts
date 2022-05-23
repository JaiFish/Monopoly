class AnimationbAsset {
    checkAssetState: boolean;
    typePath: string = "Animation";
    filePath: string[] = [

    ];
    bearPath: string[] = [
        'Bear_Train'
    ]
    loadAsset(_Asset: Map<string, any>) {
        this.checkAssetState = false
        cc.resources.loadDir(this.typePath, cc.AnimationClip, (err, data: Array<cc.AnimationClip>) => {
            data.forEach(_animationClip => {
                _Asset.set(_animationClip.name, _animationClip)
            });
            this.checkAssetState = true;
        })
        return this
    }

    targetLoadAsset(_Asset: Map<string, any>, _num: number) {
        this.checkAssetState = false
        let formatArr = []
        for (let index = 0; index < this.bearPath.length; index++) {
            formatArr.push(this.typePath + this.bearPath[index])
        }
        cc.resources.load(formatArr, cc.AnimationClip, (err, data: Array<cc.AnimationClip>) => {
            data.forEach(_animationClip => {
                _Asset.set(_animationClip.name, _animationClip)
            });
            this.checkAssetState = true;
        })
        return this
    }
}
export default new AnimationbAsset();