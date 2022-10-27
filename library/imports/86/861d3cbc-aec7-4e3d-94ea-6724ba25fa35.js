"use strict";
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
        this.version = "1.2.0";
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