
declare class GameModle {
    stationType_WaitRad: number[];
    stationType_Start: number[];
    stationType_Normal: number[];
    stationType_QandA: number[];

    mapItem: Map<number, MapItem> = new Map();
    mapSprite: Map<number, MapSprite> = new Map();
    pathPositionData: Map<number, cc.Vec2> = new Map();
    pathBezierData: Map<number, Array<cc.Vec2>> = new Map();

    gameState: GameState;
    convertOtherNodeSpaceAR(node: cc.Node, targetNode: cc.Node)
}
declare class Panel_AniPath {
    public aPath: cc.Animation;
    public TWPath: cc.Animation;

}
declare class MapItem extends cc.Component {
    _myNumber: number;
    _myType: StationType;


    setSprite(_spriteframe: cc.SpriteFrame): void
    public set myNumber(v: number);

    public get myNumber(): number;

    public set myType(v: StationType);

    public get myType(): StationType;
}
declare class MapSprite extends ComponentBase {
    isGet: boolean
    _mySprite: cc.Sprite;
    public set mySprite(v: cc.Sprite)
    public get mySprite(): cc.Sprite


    getAction()

}
