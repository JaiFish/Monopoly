
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
        this.version = "1.0.6";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lTW9kbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxtREFBa0Q7QUFFbEQ7SUFBQTtJQUtBLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFDRDtJQUVJO1FBREEsUUFBRyxHQUFHLEVBQUUsQ0FBQTtRQUVKLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM5QztJQUNMLENBQUM7SUFDRCw0Q0FBYSxHQUFiLFVBQWMsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFFRDtJQUFBO1FBQ0ksWUFBTyxHQUFXLE9BQU8sQ0FBQztRQUUxQixhQUFRLEdBQVcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUVoQyxnQkFBZ0I7UUFDaEIsK0JBQStCO1FBQy9CLDBCQUFxQixHQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLHNCQUFpQixHQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsdUJBQWtCLEdBQWE7WUFDM0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1AsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDZCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDVixFQUFFLEVBQUUsRUFBRTtZQUNOLEVBQUU7U0FDTCxDQUFDO1FBQ0YsbUJBQWMsR0FBYSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUEsOEJBQThCO1FBQ3pFLGdCQUFnQjtRQUNoQixZQUFPLEdBQXlCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUMsY0FBUyxHQUEyQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzlDLHFCQUFnQixHQUF5QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ25ELG1CQUFjLEdBQWdDLElBQUksR0FBRyxFQUFFLENBQUM7UUFFeEQsZUFBVSxHQUF5QixJQUFJLG9CQUFvQixFQUFFLENBQUE7UUFHN0QsbUJBQWMsR0FBa0IsSUFBSSwrQkFBYyxFQUFFLENBQUM7UUFLckQsWUFBTyxHQUFXLENBQUMsQ0FBQTtJQVV2QixDQUFDO0lBTkcsMkNBQXVCLEdBQXZCLFVBQXdCLElBQWEsRUFBRSxVQUFtQjtRQUN0RCxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQzlCLFFBQVE7UUFDUixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsT0FBTyxVQUFVLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtBQUNELGtCQUFlLElBQUksU0FBUyxFQUFFLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEFuc3dlckxpYnJhcnkgZnJvbSBcIi4vRGF0YS9RQS9BbnN3ZXJMaWJyYXJ5XCI7XHJcbmltcG9ydCBDaG9vc2VMaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvQ2hvb3NlTGlicmFyeVwiO1xyXG5pbXBvcnQgRXhwbGFpbkxpYnJhcnkgZnJvbSBcIi4vRGF0YS9RQS9FeHBsYWluTGlicmFyeVwiO1xyXG5pbXBvcnQgUUFMaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvUUFMaWJyYXJ5XCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuL0VudW0vR2FtZVN0YXRlXCI7XHJcbmltcG9ydCB7IFRyYWluVHlwZSB9IGZyb20gXCIuL0VudW0vVHJhaW5UeXBlXCI7XHJcbmltcG9ydCB7IFdlYlBvc3RNZXNzYWdlIH0gZnJvbSBcIi4vV2ViUG9zdE1lc3NhZ2VcIjtcclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgdHJhaW5UeXBlTnVtYmVyOiBudW1iZXI7XHJcbiAgICB0cmFpblR5cGU6IFRyYWluVHlwZTtcclxuXHJcbn1cclxuY2xhc3MgTnVtYmVyQ29udmVydEVuZ2xpc2gge1xyXG4gICAgc3RyID0gW11cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjY7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnN0ci5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoaSArIDY1KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuRW5nbGlzaChfbnVtOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdHJbX251bV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEdhbWVNb2RlbCB7XHJcbiAgICB2ZXJzaW9uOiBzdHJpbmcgPSBcIjEuMC42XCI7XHJcbiAgICBjaG9vc2VBbnN3ZXI6IHN0cmluZztcclxuICAgIHBsYXlEYXRhOiBQbGF5ZXIgPSBuZXcgUGxheWVyKCk7XHJcblxyXG4gICAgLy8tLS0tLS3os4fmlpnljYDvvIznhKHlvJXnlKjliLBcclxuICAgIC8vIG5vVXNlU3RhdGlvbjogbnVtYmVyW10gPSBbOF1cclxuICAgIHN0YXRpb25UeXBlX1Nob3dWaWRlbzogbnVtYmVyW10gPSBbMSwgMjBdO1xyXG4gICAgc3RhdGlvblR5cGVfU3RhcnQ6IG51bWJlcltdID0gWzBdO1xyXG4gICAgc3RhdGlvblR5cGVfTm9ybWFsOiBudW1iZXJbXSA9IFtcclxuICAgICAgICAyLCAzLCA0LFxyXG4gICAgICAgIDYsIDcsIDgsIDksIDEwLFxyXG4gICAgICAgIDEyLCAxMywgMTQsXHJcbiAgICAgICAgMTYsIDE3LFxyXG4gICAgICAgIDE5XHJcbiAgICBdO1xyXG4gICAgc3RhdGlvblR5cGVfUUE6IG51bWJlcltdID0gWzUsIDExLCAxNSwgMThdOy8vMTnmmK/oo53po77nlKjnmoTkuKbnhKHmj5DnianvvIzkvYblm6Dngrrpu57pu57nlJ/miJDpoY/oibLLh+mXnOS/gumcgOimgeaUvum7nlxyXG4gICAgLy8tLS0tLS3os4fmlpnljYDvvIznhKHlvJXnlKjliLBcclxuICAgIG1hcEl0ZW06IE1hcDxudW1iZXIsIE1hcEl0ZW0+ID0gbmV3IE1hcCgpO1xyXG4gICAgbWFwU3ByaXRlOiBNYXA8bnVtYmVyLCBNYXBTcHJpdGU+ID0gbmV3IE1hcCgpO1xyXG4gICAgcGF0aFBvc2l0aW9uRGF0YTogTWFwPG51bWJlciwgY2MuVmVjMj4gPSBuZXcgTWFwKCk7XHJcbiAgICBwYXRoQmV6aWVyRGF0YTogTWFwPG51bWJlciwgQXJyYXk8Y2MuVmVjMj4+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIGVuZ2xpc2hMaWI6IE51bWJlckNvbnZlcnRFbmdsaXNoID0gbmV3IE51bWJlckNvbnZlcnRFbmdsaXNoKClcclxuICAgIGdhbWVTdGF0ZTogR2FtZVN0YXRlO1xyXG5cclxuICAgIHdlYlBvc3RNZXNzYWdlOldlYlBvc3RNZXNzYWdlID0gbmV3IFdlYlBvc3RNZXNzYWdlKCk7XHJcblxyXG5cclxuICAgIC8vLS0tLS0tLemhjOW6qy0tLS0tLS1cclxuICAgIHFhTGlicmFyeTogUUFMaWJyYXJ5O1xyXG4gICAgcWFJbmRleDogbnVtYmVyID0gMFxyXG4gICAgY2hvb3NlTGlicmFyeTogQ2hvb3NlTGlicmFyeTtcclxuICAgIGFuc3dlckxpYnJhcnk6IEFuc3dlckxpYnJhcnk7XHJcbiAgICBleHBsYWluTGlicmFyeTogRXhwbGFpbkxpYnJhcnk7XHJcbiAgICBjb252ZXJ0T3RoZXJOb2RlU3BhY2VBUihub2RlOiBjYy5Ob2RlLCB0YXJnZXROb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRhcmdldE5vZGUucG9zaXRpb247XHJcbiAgICAgICAgLy/ovYnmiJDkuJbnlYzluqfmqJlcclxuICAgICAgICBsZXQgd29ybGRQb2ludCA9IG5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb2ludCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEdhbWVNb2RlbCgpXHJcblxyXG5cclxuXHJcbiJdfQ==