import DataMan from "../../Data/DataMan";
import ComponentBase from "../../Data/base/ComponentBase"

export default class ManAction extends DataMan {
    startGO() {
        if (!this.isCanGo) this.isCanGo = !this.isCanGo;
    }
    stopGo() {
        if (this.isCanGo) this.isCanGo = !this.isCanGo;
    }
    StartGO_Tween(_gameModel: GameModle, GoCount: number, SayGO?: boolean) {
        if (!this.gameModle) this.setGameModel(_gameModel)
        console.log(GoCount);
        if (GoCount == 0) return;
        this.nowIndex++
        GoCount--;
        let tryData: Array<cc.Vec2> = this.gameModle.pathBezierData.get(this.nowIndex)
        if (tryData == undefined) this.GoLine(GoCount)
        else {
            this.GoBezier(GoCount, 0, tryData.length)
        }

    }
    GoBezier(GoCount: number, BezierCount, len: number) {
        // if (BezierCount >= len) {
        //     this.StartGO(GoCount);
        //     return
        // }
        let getPosition: cc.Vec2[] = this.gameModle.pathBezierData.get(this.nowIndex)

        // let getPosition: cc.Vec2 = this.gameModle.pathBezierData.get(this.nowIndex)[BezierCount]

        // BezierCount++;
        console.log(getPosition);
        //起點
        // 中間點
        // 再來終點
        // console.log(getPosition[1]);
        // console.log(getPosition[0]);
        // console.log(getPosition[2]);


        cc.tween(this.nMan)
            // .to(this.TweenTime / len, { x: getPosition.x, y: getPosition.y }, { easing: dt => cc.easeCubicActionOut().easing(dt) })
            .bezierTo(1, getPosition[0], getPosition[1], getPosition[2],
                { easing: dt => cc.easeCubicActionOut().easing(dt) })
            .call(() => {
                this.StartGO_Tween(this.gameModle, GoCount);
                // this.GoBezier(GoCount, BezierCount, len);
            })
            .start()
    }
    GoLine(GoCount: number) {
        let getPosition = this.gameModle.pathPositionData.get(this.nowIndex)
        cc.tween(this.nMan)
            .to(this.manSpeed, { x: getPosition.x, y: getPosition.y }, { easing: dt => cc.easeCubicActionOut().easing(dt) })
            .call(() => {
                this.StartGO_Tween(this.gameModle, GoCount);
            })
            .start()
    }
    // GoLine(GoCount: number) {
    //     this.getCount = GoCount;
    //     this.nowIndex++;
    //     this.getCount--;
    //     let gettry: cc.Node = Controll.instens.mapItem.get(this.nowIndex).node
    //     if (gettry == undefined) return;
    //     let getNextMap: cc.Node = Controll.instens.mapItem.get(this.nowIndex).node
    //     // let changePosition: cc.Vec3 = this.convertOtherNodeSpaceAR(getNextMap, this.node);
    //     // console.log(changePosition.x, changePosition.y);

    //     cc.tween(this.nMan)
    //         .to(1, { x: getNextMap.x, y: getNextMap.y }, { easing: dt => cc.easeCubicActionOut().easing(dt) })
    //         .start()
    // }
    setGameModel(_gameModel: GameModle) {
        console.log(_gameModel);
        
        this.gameModle = _gameModel
    }

}