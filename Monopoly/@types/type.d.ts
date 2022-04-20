declare class GameModle {
    stationType_WaitRad: number[]
    stationType_Start: number[]
    stationType_Normal: number[]
    stationType_QandA: number[]
    mapItem: Map<number, MapItem>;
    pathPositionData: Map<number, cc.Vec2>;
    pathBezierData: Map<number, Array<cc.Vec2>>;
    panel_Map: Panel_Map;
}
declare class Panel_AniPath {
    public aPath: cc.Animation;
    public TWPath: cc.Animation;

}
declare class MapItem extends cc.Component{
    _myNumber: number;
    _myType: StationType;


    setSprite(_spriteframe: cc.SpriteFrame): void
    public set myNumber(v: number);

    public get myNumber(): number;

    public set myType(v: StationType);

    public get myType(): StationType;
}