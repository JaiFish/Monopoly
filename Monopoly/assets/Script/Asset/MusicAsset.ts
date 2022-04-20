import IAsset from "../Interface/IAsset";

class MusicAsset implements IAsset {
    typePath: string;
    filePath: string[];
    loadAsset(_Asset: Map<string, any>): void {
        throw new Error("Method not implemented.");
    }
    checkAssetState: boolean;

}
export default new MusicAsset();