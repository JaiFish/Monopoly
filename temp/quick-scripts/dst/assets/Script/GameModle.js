
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameModle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '861d3y8rsdOPZTqZyS6Jfo1', 'GameModle');
// Script/GameModle.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebPostMessage_1 = require("./WebPostMessage");
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());
var NumberConvertEnglish = /** @class */ (function () {
    function NumberConvertEnglish() {
        this.str = [];
        for (var i = 0; i < 26; i++) {
            this.str.push(String.fromCharCode(i + 65));
        }
    }
    NumberConvertEnglish.prototype.returnEnglish = function (_num) {
        return this.str[_num];
    };
    return NumberConvertEnglish;
}());
var GameModel = /** @class */ (function () {
    function GameModel() {
        this.version = "1.0.0_NoConnet";
        /**
         * 是否連線版本
         */
        this.isConnet = false;
        this.playData = new Player();
        //------資料區，無引用到
        // noUseStation: number[] = [8]
        this.stationType_ShowVideo = [1, 20];
        this.stationType_Start = [0];
        this.stationType_Normal = [
            2, 3, 4,
            6, 7, 8, 9, 10,
            12, 13, 14,
            16, 17,
            19
        ];
        this.stationType_QA = [5, 11, 15, 18]; //19是裝飾用的並無提物，但因為點點生成顏色ˇ關係需要放點
        //------資料區，無引用到
        this.mapItem = new Map();
        this.mapSprite = new Map();
        this.pathPositionData = new Map();
        this.pathBezierData = new Map();
        this.englishLib = new NumberConvertEnglish();
        this.webPostMessage = new WebPostMessage_1.WebPostMessage();
        this.qaIndex = 0;
    }
    GameModel.prototype.convertOtherNodeSpaceAR = function (node, targetNode) {
        var pos = targetNode.position;
        //轉成世界座標
        var worldPoint = node.convertToWorldSpaceAR(pos);
        return targetNode.convertToNodeSpaceAR(worldPoint);
    };
    return GameModel;
}());
exports.default = new GameModel();

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lTW9kbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxtREFBa0Q7QUFFbEQ7SUFBQTtJQUtBLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFDRDtJQUVJO1FBREEsUUFBRyxHQUFHLEVBQUUsQ0FBQTtRQUVKLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM5QztJQUNMLENBQUM7SUFDRCw0Q0FBYSxHQUFiLFVBQWMsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFFRDtJQUFBO1FBQ0ksWUFBTyxHQUFXLGdCQUFnQixDQUFDO1FBQ25DOztXQUVHO1FBQ0gsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixhQUFRLEdBQVcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUVoQyxnQkFBZ0I7UUFDaEIsK0JBQStCO1FBQy9CLDBCQUFxQixHQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLHNCQUFpQixHQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsdUJBQWtCLEdBQWE7WUFDM0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1AsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDZCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDVixFQUFFLEVBQUUsRUFBRTtZQUNOLEVBQUU7U0FDTCxDQUFDO1FBQ0YsbUJBQWMsR0FBYSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUEsOEJBQThCO1FBQ3pFLGdCQUFnQjtRQUNoQixZQUFPLEdBQXlCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUMsY0FBUyxHQUEyQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzlDLHFCQUFnQixHQUF5QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ25ELG1CQUFjLEdBQWdDLElBQUksR0FBRyxFQUFFLENBQUM7UUFFeEQsZUFBVSxHQUF5QixJQUFJLG9CQUFvQixFQUFFLENBQUE7UUFJN0QsbUJBQWMsR0FBbUIsSUFBSSwrQkFBYyxFQUFFLENBQUM7UUFPdEQsWUFBTyxHQUFXLENBQUMsQ0FBQTtJQVV2QixDQUFDO0lBTkcsMkNBQXVCLEdBQXZCLFVBQXdCLElBQWEsRUFBRSxVQUFtQjtRQUN0RCxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQzlCLFFBQVE7UUFDUixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsT0FBTyxVQUFVLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FoREEsQUFnREMsSUFBQTtBQUNELGtCQUFlLElBQUksU0FBUyxFQUFFLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEFuc3dlckxpYnJhcnkgZnJvbSBcIi4vRGF0YS9RQS9BbnN3ZXJMaWJyYXJ5XCI7XHJcbmltcG9ydCBDaG9vc2VMaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvQ2hvb3NlTGlicmFyeVwiO1xyXG5pbXBvcnQgRXhwbGFpbkxpYnJhcnkgZnJvbSBcIi4vRGF0YS9RQS9FeHBsYWluTGlicmFyeVwiO1xyXG5pbXBvcnQgUUFMaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvUUFMaWJyYXJ5XCI7XHJcbmltcG9ydCB7IEJlYXJTdGF0ZSB9IGZyb20gXCIuL0VudW0vQmVhclN0YXRlXCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuL0VudW0vR2FtZVN0YXRlXCI7XHJcbmltcG9ydCB7IFRyYWluVHlwZSB9IGZyb20gXCIuL0VudW0vVHJhaW5UeXBlXCI7XHJcbmltcG9ydCB7IFdlYlBvc3RNZXNzYWdlIH0gZnJvbSBcIi4vV2ViUG9zdE1lc3NhZ2VcIjtcclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgdHJhaW5UeXBlTnVtYmVyOiBudW1iZXI7XHJcbiAgICB0cmFpblR5cGU6IFRyYWluVHlwZTtcclxuXHJcbn1cclxuY2xhc3MgTnVtYmVyQ29udmVydEVuZ2xpc2gge1xyXG4gICAgc3RyID0gW11cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjY7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnN0ci5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoaSArIDY1KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuRW5nbGlzaChfbnVtOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdHJbX251bV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEdhbWVNb2RlbCB7XHJcbiAgICB2ZXJzaW9uOiBzdHJpbmcgPSBcIjEuMC4wX05vQ29ubmV0XCI7XHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpumAo+e3mueJiOacrFxyXG4gICAgICovXHJcbiAgICBpc0Nvbm5ldDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY2hvb3NlQW5zd2VyOiBzdHJpbmc7XHJcbiAgICBwbGF5RGF0YTogUGxheWVyID0gbmV3IFBsYXllcigpO1xyXG5cclxuICAgIC8vLS0tLS0t6LOH5paZ5Y2A77yM54Sh5byV55So5YiwXHJcbiAgICAvLyBub1VzZVN0YXRpb246IG51bWJlcltdID0gWzhdXHJcbiAgICBzdGF0aW9uVHlwZV9TaG93VmlkZW86IG51bWJlcltdID0gWzEsIDIwXTtcclxuICAgIHN0YXRpb25UeXBlX1N0YXJ0OiBudW1iZXJbXSA9IFswXTtcclxuICAgIHN0YXRpb25UeXBlX05vcm1hbDogbnVtYmVyW10gPSBbXHJcbiAgICAgICAgMiwgMywgNCxcclxuICAgICAgICA2LCA3LCA4LCA5LCAxMCxcclxuICAgICAgICAxMiwgMTMsIDE0LFxyXG4gICAgICAgIDE2LCAxNyxcclxuICAgICAgICAxOVxyXG4gICAgXTtcclxuICAgIHN0YXRpb25UeXBlX1FBOiBudW1iZXJbXSA9IFs1LCAxMSwgMTUsIDE4XTsvLzE55piv6KOd6aO+55So55qE5Lim54Sh5o+Q54mp77yM5L2G5Zug54K66bue6bue55Sf5oiQ6aGP6Imyy4fpl5zkv4LpnIDopoHmlL7pu55cclxuICAgIC8vLS0tLS0t6LOH5paZ5Y2A77yM54Sh5byV55So5YiwXHJcbiAgICBtYXBJdGVtOiBNYXA8bnVtYmVyLCBNYXBJdGVtPiA9IG5ldyBNYXAoKTtcclxuICAgIG1hcFNwcml0ZTogTWFwPG51bWJlciwgTWFwU3ByaXRlPiA9IG5ldyBNYXAoKTtcclxuICAgIHBhdGhQb3NpdGlvbkRhdGE6IE1hcDxudW1iZXIsIGNjLlZlYzI+ID0gbmV3IE1hcCgpO1xyXG4gICAgcGF0aEJlemllckRhdGE6IE1hcDxudW1iZXIsIEFycmF5PGNjLlZlYzI+PiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICBlbmdsaXNoTGliOiBOdW1iZXJDb252ZXJ0RW5nbGlzaCA9IG5ldyBOdW1iZXJDb252ZXJ0RW5nbGlzaCgpXHJcbiAgICBnYW1lU3RhdGU6IEdhbWVTdGF0ZTtcclxuICAgIGJlYXJTdGF0ZTogQmVhclN0YXRlXHJcblxyXG4gICAgd2ViUG9zdE1lc3NhZ2U6IFdlYlBvc3RNZXNzYWdlID0gbmV3IFdlYlBvc3RNZXNzYWdlKCk7XHJcblxyXG4gICAgaXNFbmRMb2FkaW5nRGF0YTogYm9vbGVhbjtcclxuXHJcbiAgICBpc1ZpZGVvRW5kOiBib29sZWFuO1xyXG4gICAgLy8tLS0tLS0t6aGM5bqrLS0tLS0tLVxyXG4gICAgcWFMaWJyYXJ5OiBRQUxpYnJhcnk7XHJcbiAgICBxYUluZGV4OiBudW1iZXIgPSAwXHJcbiAgICBjaG9vc2VMaWJyYXJ5OiBDaG9vc2VMaWJyYXJ5O1xyXG4gICAgYW5zd2VyTGlicmFyeTogQW5zd2VyTGlicmFyeTtcclxuICAgIGV4cGxhaW5MaWJyYXJ5OiBFeHBsYWluTGlicmFyeTtcclxuICAgIGNvbnZlcnRPdGhlck5vZGVTcGFjZUFSKG5vZGU6IGNjLk5vZGUsIHRhcmdldE5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgcG9zID0gdGFyZ2V0Tm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAvL+i9ieaIkOS4lueVjOW6p+aomVxyXG4gICAgICAgIGxldCB3b3JsZFBvaW50ID0gbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvaW50KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgR2FtZU1vZGVsKClcclxuXHJcblxyXG5cclxuIl19