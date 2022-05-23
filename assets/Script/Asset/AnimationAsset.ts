class AnimationbAsset {
    checkAssetState: boolean;
    typePath: string = "Animation";
    filePath: string[] = [

    ];
    bearPath:string[]=[
        
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

    targetLoadAsset(_Asset: Map<string, any>,_num:number) {
        this.checkAssetState = false
        cc.resources.l(this.typePath, cc.AnimationClip, (err, data: Array<cc.AnimationClip>) => {
            data.forEach(_animationClip => {
                _Asset.set(_animationClip.name, _animationClip)
            });
            this.checkAssetState = true;
        })
        return this
    }
}
export default new AnimationbAsset();