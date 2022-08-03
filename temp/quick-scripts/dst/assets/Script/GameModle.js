
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
        this.version = "1.1.19";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lTW9kbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxtREFBa0Q7QUFFbEQ7SUFBQTtJQUtBLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFDRDtJQUVJO1FBREEsUUFBRyxHQUFHLEVBQUUsQ0FBQTtRQUVKLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM5QztJQUNMLENBQUM7SUFDRCw0Q0FBYSxHQUFiLFVBQWMsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFFRDtJQUFBO1FBQ0ksWUFBTyxHQUFXLFFBQVEsQ0FBQztRQUMzQjs7V0FFRztRQUNILGFBQVEsR0FBVyxLQUFLLENBQUE7UUFFeEIsYUFBUSxHQUFXLElBQUksTUFBTSxFQUFFLENBQUM7UUFFaEMsZ0JBQWdCO1FBQ2hCLCtCQUErQjtRQUMvQiwwQkFBcUIsR0FBYSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxQyxzQkFBaUIsR0FBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLHVCQUFrQixHQUFhO1lBQzNCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNQLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2QsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1lBQ1YsRUFBRSxFQUFFLEVBQUU7WUFDTixFQUFFO1NBQ0wsQ0FBQztRQUNGLG1CQUFjLEdBQWEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBLDhCQUE4QjtRQUN6RSxnQkFBZ0I7UUFDaEIsWUFBTyxHQUF5QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzFDLGNBQVMsR0FBMkIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUM5QyxxQkFBZ0IsR0FBeUIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNuRCxtQkFBYyxHQUFnQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRXhELGVBQVUsR0FBeUIsSUFBSSxvQkFBb0IsRUFBRSxDQUFBO1FBSTdELG1CQUFjLEdBQWtCLElBQUksK0JBQWMsRUFBRSxDQUFDO1FBT3JELFlBQU8sR0FBVyxDQUFDLENBQUE7SUFVdkIsQ0FBQztJQU5HLDJDQUF1QixHQUF2QixVQUF3QixJQUFhLEVBQUUsVUFBbUI7UUFDdEQsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUM5QixRQUFRO1FBQ1IsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sVUFBVSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDTCxnQkFBQztBQUFELENBaERBLEFBZ0RDLElBQUE7QUFDRCxrQkFBZSxJQUFJLFNBQVMsRUFBRSxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBBbnN3ZXJMaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvQW5zd2VyTGlicmFyeVwiO1xyXG5pbXBvcnQgQ2hvb3NlTGlicmFyeSBmcm9tIFwiLi9EYXRhL1FBL0Nob29zZUxpYnJhcnlcIjtcclxuaW1wb3J0IEV4cGxhaW5MaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvRXhwbGFpbkxpYnJhcnlcIjtcclxuaW1wb3J0IFFBTGlicmFyeSBmcm9tIFwiLi9EYXRhL1FBL1FBTGlicmFyeVwiO1xyXG5pbXBvcnQgeyBCZWFyU3RhdGUgfSBmcm9tIFwiLi9FbnVtL0JlYXJTdGF0ZVwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi9FbnVtL0dhbWVTdGF0ZVwiO1xyXG5pbXBvcnQgeyBUcmFpblR5cGUgfSBmcm9tIFwiLi9FbnVtL1RyYWluVHlwZVwiO1xyXG5pbXBvcnQgeyBXZWJQb3N0TWVzc2FnZSB9IGZyb20gXCIuL1dlYlBvc3RNZXNzYWdlXCI7XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIHRyYWluVHlwZU51bWJlcjogbnVtYmVyO1xyXG4gICAgdHJhaW5UeXBlOiBUcmFpblR5cGU7XHJcblxyXG59XHJcbmNsYXNzIE51bWJlckNvbnZlcnRFbmdsaXNoIHtcclxuICAgIHN0ciA9IFtdXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI2OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zdHIucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKyA2NSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybkVuZ2xpc2goX251bTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyW19udW1dO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBHYW1lTW9kZWwge1xyXG4gICAgdmVyc2lvbjogc3RyaW5nID0gXCIxLjEuMTlcIjtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm6YCj57ea54mI5pysXHJcbiAgICAgKi9cclxuICAgIGlzQ29ubmV0OmJvb2xlYW4gPSBmYWxzZVxyXG4gICAgY2hvb3NlQW5zd2VyOiBzdHJpbmc7XHJcbiAgICBwbGF5RGF0YTogUGxheWVyID0gbmV3IFBsYXllcigpO1xyXG5cclxuICAgIC8vLS0tLS0t6LOH5paZ5Y2A77yM54Sh5byV55So5YiwXHJcbiAgICAvLyBub1VzZVN0YXRpb246IG51bWJlcltdID0gWzhdXHJcbiAgICBzdGF0aW9uVHlwZV9TaG93VmlkZW86IG51bWJlcltdID0gWzEsIDIwXTtcclxuICAgIHN0YXRpb25UeXBlX1N0YXJ0OiBudW1iZXJbXSA9IFswXTtcclxuICAgIHN0YXRpb25UeXBlX05vcm1hbDogbnVtYmVyW10gPSBbXHJcbiAgICAgICAgMiwgMywgNCxcclxuICAgICAgICA2LCA3LCA4LCA5LCAxMCxcclxuICAgICAgICAxMiwgMTMsIDE0LFxyXG4gICAgICAgIDE2LCAxNyxcclxuICAgICAgICAxOVxyXG4gICAgXTtcclxuICAgIHN0YXRpb25UeXBlX1FBOiBudW1iZXJbXSA9IFs1LCAxMSwgMTUsIDE4XTsvLzE55piv6KOd6aO+55So55qE5Lim54Sh5o+Q54mp77yM5L2G5Zug54K66bue6bue55Sf5oiQ6aGP6Imyy4fpl5zkv4LpnIDopoHmlL7pu55cclxuICAgIC8vLS0tLS0t6LOH5paZ5Y2A77yM54Sh5byV55So5YiwXHJcbiAgICBtYXBJdGVtOiBNYXA8bnVtYmVyLCBNYXBJdGVtPiA9IG5ldyBNYXAoKTtcclxuICAgIG1hcFNwcml0ZTogTWFwPG51bWJlciwgTWFwU3ByaXRlPiA9IG5ldyBNYXAoKTtcclxuICAgIHBhdGhQb3NpdGlvbkRhdGE6IE1hcDxudW1iZXIsIGNjLlZlYzI+ID0gbmV3IE1hcCgpO1xyXG4gICAgcGF0aEJlemllckRhdGE6IE1hcDxudW1iZXIsIEFycmF5PGNjLlZlYzI+PiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICBlbmdsaXNoTGliOiBOdW1iZXJDb252ZXJ0RW5nbGlzaCA9IG5ldyBOdW1iZXJDb252ZXJ0RW5nbGlzaCgpXHJcbiAgICBnYW1lU3RhdGU6IEdhbWVTdGF0ZTtcclxuICAgIGJlYXJTdGF0ZTpCZWFyU3RhdGVcclxuXHJcbiAgICB3ZWJQb3N0TWVzc2FnZTpXZWJQb3N0TWVzc2FnZSA9IG5ldyBXZWJQb3N0TWVzc2FnZSgpO1xyXG5cclxuICAgIGlzRW5kTG9hZGluZ0RhdGE6Ym9vbGVhbjtcclxuXHJcbiAgICBpc1ZpZGVvRW5kOmJvb2xlYW47XHJcbiAgICAvLy0tLS0tLS3poYzluqstLS0tLS0tXHJcbiAgICBxYUxpYnJhcnk6IFFBTGlicmFyeTtcclxuICAgIHFhSW5kZXg6IG51bWJlciA9IDBcclxuICAgIGNob29zZUxpYnJhcnk6IENob29zZUxpYnJhcnk7XHJcbiAgICBhbnN3ZXJMaWJyYXJ5OiBBbnN3ZXJMaWJyYXJ5O1xyXG4gICAgZXhwbGFpbkxpYnJhcnk6IEV4cGxhaW5MaWJyYXJ5O1xyXG4gICAgY29udmVydE90aGVyTm9kZVNwYWNlQVIobm9kZTogY2MuTm9kZSwgdGFyZ2V0Tm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBwb3MgPSB0YXJnZXROb2RlLnBvc2l0aW9uO1xyXG4gICAgICAgIC8v6L2J5oiQ5LiW55WM5bqn5qiZXHJcbiAgICAgICAgbGV0IHdvcmxkUG9pbnQgPSBub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MpO1xyXG4gICAgICAgIHJldHVybiB0YXJnZXROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9pbnQpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBHYW1lTW9kZWwoKVxyXG5cclxuXHJcblxyXG4iXX0=