"use strict";
cc._RF.push(module, '88f0aDL77dBTZ5Zt5ZcDnXG', 'Choose_Train');
// Script/Class/Message/Choose_Train.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AssetMng_1 = require("../../Asset/AssetMng");
var ButtonMng_1 = require("../../Data/base/ButtonMng");
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var MusciMng_1 = require("../../Data/base/MusciMng");
var Commad_1 = require("../../Enum/Commad");
var GameEvent_1 = require("../../Enum/GameEvent");
var TrainType_1 = require("../../Enum/TrainType");
var GameModle_1 = require("../../GameModle");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Choose_Train = /** @class */ (function (_super) {
    __extends(Choose_Train, _super);
    function Choose_Train() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itmes = [];
        _this.tempDT = 0;
        _this.totaleDT = 0;
        _this.endDT = 7;
        _this.changeSpeed = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, 0.8, 0.85];
        _this.speedChange = 0.1;
        _this.lastShowTrain = 0;
        return _this;
        // async getTrainAciton(callback?: Function) {
        //     return new Promise<void>((resolve, reject) => {
        //         cc.tween(this.MineTrain.node)
        //             .delay(2)
        //             .repeat(2, cc.tween()
        //                 .to(0.2, { scale: 1.3 })
        //                 .to(1, { scale: 1 }, { easing: Easing.elasticOut })
        //             )
        //             .call(resolve)
        //             .start()
        //     })
        // }
    }
    Choose_Train.prototype.onLoad = function () {
        this.item = cc.find("TrainFrame", this.node);
        this.content = cc.find("Layout", this.node);
        this.btn_Start = cc.find("btn_Check", this.node).getComponent(cc.Button);
        for (var index = 0; index < 6; index++) {
            var instItme = cc.instantiate(this.item);
            this.content.addChild(instItme);
            instItme.setPosition(0, 0);
            var _class = instItme.addComponent(TrainItem);
            this.itmes.push(_class);
            var getIndex = index;
            _class.type = getIndex;
        }
        this.item.destroy();
    };
    Choose_Train.prototype.start = function () {
        this.node.opacity = 0;
        this.hide();
        ButtonMng_1.default.addEvent(this.node, "Choose_Train", "startRandom", this.btn_Start);
    };
    Choose_Train.prototype.update = function (dt) {
        if (this.isRandom) {
            this.tempDT += dt;
            this.totaleDT += dt;
            // console.log(this.tempDT, this.speedChange);
            if (this.tempDT > this.speedChange) {
                this.changeShow();
                this.tempDT = 0;
            }
            if (this.totaleDT > this.endDT) {
                this.isRandom = false;
                GameModle_1.default.playData.trainTypeNumber = this.lastShowTrain;
                GameModle_1.default.playData.trainType = this.changeTrainType();
                this.EventEmit(GameEvent_1.GameEvent.SendCommand, Commad_1.Commamnd.EndChoosTrain);
                //delay時間後，將圖片從畫面移動到場警(try幾個小時)
            }
            if (this.changeSpeed[0] != null && this.totaleDT > (this.endDT * this.changeSpeed[0])) {
                // this.speedChange = this.speedChange * 2
                this.speedChange = this.speedChange + Math.pow(0.6, this.changeSpeed.length);
                this.changeSpeed.shift();
            }
        }
    };
    Choose_Train.prototype.startRandom = function () {
        MusciMng_1.default.effectPlay("BtnClick");
        this.btn_Start.node.active = false;
        this.isRandom = true;
    };
    Choose_Train.prototype.initTrainSprite = function () {
        for (var index = 0; index < this.itmes.length; index++) {
            this.itmes[index].sprtie.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("TrainType_" + index);
        }
    };
    Choose_Train.prototype.changeShow = function () {
        this.itmes[this.lastShowTrain].noChoose();
        var random = this.lastShowTrain;
        while (random == this.lastShowTrain) {
            random = Math.floor(Math.random() * 6);
        }
        this.lastShowTrain = random;
        this.itmes[random].choose();
    };
    Choose_Train.prototype.changeTrainType = function () {
        switch (this.lastShowTrain) {
            case 0:
                return TrainType_1.TrainType.Type0;
            case 1:
                return TrainType_1.TrainType.Type1;
            case 2:
                return TrainType_1.TrainType.Type2;
            case 3:
                return TrainType_1.TrainType.Type3;
                ;
            case 4:
                return TrainType_1.TrainType.Type4;
                ;
            case 5:
                return TrainType_1.TrainType.Type5;
                ;
        }
    };
    Choose_Train = __decorate([
        ccclass
    ], Choose_Train);
    return Choose_Train;
}(ComponentBase_1.default));
exports.default = Choose_Train;
var TrainItem = /** @class */ (function (_super) {
    __extends(TrainItem, _super);
    function TrainItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrainItem.prototype.onLoad = function () {
        this.node.setScale(1);
        this.arrow = cc.find("Arrow", this.node);
        this.sprtie = cc.find("Train", this.node).getComponent(cc.Sprite);
        this.sprtie.spriteFrame = null;
        this.arrow.active = false;
    };
    TrainItem.prototype.choose = function () {
        this.arrow.active = true;
        this.node.setScale(1.3);
    };
    TrainItem.prototype.noChoose = function () {
        this.arrow.active = false;
        this.node.setScale(1);
    };
    return TrainItem;
}(ComponentBase_1.default));

cc._RF.pop();