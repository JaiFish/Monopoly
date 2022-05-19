export default interface IAsset{
    checkAssetState: boolean;
    typePath: string ;
    filePath: string[];
    loadAsset(_Asset: Map<string, any>):void
}