
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Message/Choose_Train.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcQ2hvb3NlX1RyYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUM1Qyx1REFBa0Q7QUFDbEQsK0RBQTBEO0FBQzFELDRDQUE2QztBQUU3QyxrREFBaUQ7QUFDakQsa0RBQWlEO0FBQ2pELDZDQUF3QztBQUNsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBYTtJQUF2RDtRQUFBLHFFQWtIQztRQWhIRyxXQUFLLEdBQWdCLEVBQUUsQ0FBQztRQUt4QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRW5CLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixpQkFBVyxHQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN2RSxpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUUxQixtQkFBYSxHQUFXLENBQUMsQ0FBQzs7UUF1RjFCLDhDQUE4QztRQUM5QyxzREFBc0Q7UUFDdEQsd0NBQXdDO1FBQ3hDLHdCQUF3QjtRQUN4QixvQ0FBb0M7UUFDcEMsMkNBQTJDO1FBQzNDLHNFQUFzRTtRQUN0RSxnQkFBZ0I7UUFDaEIsNkJBQTZCO1FBQzdCLHVCQUF1QjtRQUN2QixTQUFTO1FBRVQsSUFBSTtJQUNSLENBQUM7SUEvRmEsNkJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FB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QUFhLEdBb0JwQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3NldE1uZyBmcm9tICcuLi8uLi9Bc3NldC9Bc3NldE1uZyc7XHJcbmltcG9ydCBCdXR0b25NbmcgZnJvbSAnLi4vLi4vRGF0YS9iYXNlL0J1dHRvbk1uZyc7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlJztcclxuaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tICcuLi8uLi9FbnVtL0NvbW1hZCc7XHJcbmltcG9ydCB7IEVhc2luZyB9IGZyb20gJy4uLy4uL0VudW0vRWFzaW5nJztcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSAnLi4vLi4vRW51bS9HYW1lRXZlbnQnO1xyXG5pbXBvcnQgeyBUcmFpblR5cGUgfSBmcm9tICcuLi8uLi9FbnVtL1RyYWluVHlwZSc7XHJcbmltcG9ydCBHYW1lTW9kbGUgZnJvbSAnLi4vLi4vR2FtZU1vZGxlJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENob29zZV9UcmFpbiBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgaXRlbTogY2MuTm9kZTtcclxuICAgIGl0bWVzOiBUcmFpbkl0ZW1bXSA9IFtdO1xyXG4gICAgLy8gTWluZVRyYWluOiBUcmFpbkl0ZW07XHJcbiAgICBjb250ZW50OiBjYy5Ob2RlO1xyXG4gICAgaXNSYW5kb206IGJvb2xlYW47XHJcbiAgICBpc1N0b3A6IGJvb2xlYW47XHJcbiAgICB0ZW1wRFQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgdG90YWxlRFQ6IG51bWJlciA9IDA7XHJcbiAgICBlbmREVDogbnVtYmVyID0gNztcclxuICAgIGNoYW5nZVNwZWVkOiBudW1iZXJbXSA9IFswLjIsIDAuMywgMC40LCAwLjUsIDAuNiwgMC43LCAwLjc1LCAwLjgsIDAuODVdXHJcbiAgICBzcGVlZENoYW5nZTogbnVtYmVyID0gMC4xO1xyXG5cclxuICAgIGxhc3RTaG93VHJhaW46IG51bWJlciA9IDA7XHJcblxyXG4gICAgYnRuX1N0YXJ0OiBjYy5CdXR0b247XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtID0gY2MuZmluZChcIlRyYWluRnJhbWVcIiwgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNjLmZpbmQoXCJMYXlvdXRcIiwgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuYnRuX1N0YXJ0ID0gY2MuZmluZChcImJ0bl9DaGVja1wiLHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNjsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgaW5zdEl0bWUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW0pXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChpbnN0SXRtZSlcclxuICAgICAgICAgICAgaW5zdEl0bWUuc2V0UG9zaXRpb24oMCwgMClcclxuICAgICAgICAgICAgbGV0IF9jbGFzcyA9IGluc3RJdG1lLmFkZENvbXBvbmVudChUcmFpbkl0ZW0pXHJcbiAgICAgICAgICAgIHRoaXMuaXRtZXMucHVzaChfY2xhc3MpO1xyXG4gICAgICAgICAgICBsZXQgZ2V0SW5kZXggPSBpbmRleFxyXG4gICAgICAgICAgICBfY2xhc3MudHlwZSA9IGdldEluZGV4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXRlbS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgdGhpcy5oaWRlKClcclxuICAgICAgICBCdXR0b25NbmcuYWRkRXZlbnQodGhpcy5ub2RlLCBcIkNob29zZV9UcmFpblwiLCBcInN0YXJ0UmFuZG9tXCIsIHRoaXMuYnRuX1N0YXJ0KVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUmFuZG9tKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcERUICs9IGR0O1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsZURUICs9IGR0O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRlbXBEVCwgdGhpcy5zcGVlZENoYW5nZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50ZW1wRFQgPiB0aGlzLnNwZWVkQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVNob3coKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wRFQgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMudG90YWxlRFQgPiB0aGlzLmVuZERUKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmFuZG9tID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIEdhbWVNb2RsZS5wbGF5RGF0YS50cmFpblR5cGVOdW1iZXIgPSB0aGlzLmxhc3RTaG93VHJhaW5cclxuICAgICAgICAgICAgICAgIEdhbWVNb2RsZS5wbGF5RGF0YS50cmFpblR5cGUgPSB0aGlzLmNoYW5nZVRyYWluVHlwZSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIENvbW1hbW5kLkVuZENob29zVHJhaW4pXHJcbiAgICAgICAgICAgICAgICAvL2RlbGF55pmC6ZaT5b6M77yM5bCH5ZyW54mH5b6e55Wr6Z2i56e75YuV5Yiw5aC06K2mKHRyeeW5vuWAi+Wwj+aZgilcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hhbmdlU3BlZWRbMF0gIT0gbnVsbCAmJiB0aGlzLnRvdGFsZURUID4gKHRoaXMuZW5kRFQgKiB0aGlzLmNoYW5nZVNwZWVkWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zcGVlZENoYW5nZSA9IHRoaXMuc3BlZWRDaGFuZ2UgKiAyXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkQ2hhbmdlID0gdGhpcy5zcGVlZENoYW5nZSArIE1hdGgucG93KDAuNiwgdGhpcy5jaGFuZ2VTcGVlZC5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVNwZWVkLnNoaWZ0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBzdGFydFJhbmRvbSgpIHtcclxuICAgICAgICB0aGlzLmJ0bl9TdGFydC5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pc1JhbmRvbSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpbml0VHJhaW5TcHJpdGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaXRtZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRtZXNbaW5kZXhdLnNwcnRpZS5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiVHJhaW5UeXBlX1wiICsgaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTaG93KCkge1xyXG4gICAgICAgIHRoaXMuaXRtZXNbdGhpcy5sYXN0U2hvd1RyYWluXS5ub0Nob29zZSgpXHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IHRoaXMubGFzdFNob3dUcmFpblxyXG4gICAgICAgIHdoaWxlIChyYW5kb20gPT0gdGhpcy5sYXN0U2hvd1RyYWluKSB7XHJcbiAgICAgICAgICAgIHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFzdFNob3dUcmFpbiA9IHJhbmRvbTtcclxuICAgICAgICB0aGlzLml0bWVzW3JhbmRvbV0uY2hvb3NlKClcclxuICAgIH1cclxuICAgIGNoYW5nZVRyYWluVHlwZSgpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubGFzdFNob3dUcmFpbikge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVHJhaW5UeXBlLlR5cGUwO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVHJhaW5UeXBlLlR5cGUxO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVHJhaW5UeXBlLlR5cGUyO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVHJhaW5UeXBlLlR5cGUzOztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRyYWluVHlwZS5UeXBlNDs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUcmFpblR5cGUuVHlwZTU7O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGFzeW5jIGdldFRyYWluQWNpdG9uKGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLk1pbmVUcmFpbi5ub2RlKVxyXG4gICAgLy8gICAgICAgICAgICAgLmRlbGF5KDIpXHJcbiAgICAvLyAgICAgICAgICAgICAucmVwZWF0KDIsIGNjLnR3ZWVuKClcclxuICAgIC8vICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxLjMgfSlcclxuICAgIC8vICAgICAgICAgICAgICAgICAudG8oMSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogRWFzaW5nLmVsYXN0aWNPdXQgfSlcclxuICAgIC8vICAgICAgICAgICAgIClcclxuICAgIC8vICAgICAgICAgICAgIC5jYWxsKHJlc29sdmUpXHJcbiAgICAvLyAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgLy8gICAgIH0pXHJcblxyXG4gICAgLy8gfVxyXG59XHJcblxyXG5cclxuY2xhc3MgVHJhaW5JdGVtIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICB0eXBlOiBudW1iZXI7XHJcbiAgICBzcHJ0aWU6IGNjLlNwcml0ZTtcclxuICAgIGFycm93OiBjYy5Ob2RlO1xyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMSlcclxuICAgICAgICB0aGlzLmFycm93ID0gY2MuZmluZChcIkFycm93XCIsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLnNwcnRpZSA9IGNjLmZpbmQoXCJUcmFpblwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgdGhpcy5zcHJ0aWUuc3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXJyb3cuYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuICAgIGNob29zZSgpIHtcclxuICAgICAgICB0aGlzLmFycm93LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMS4zKVxyXG5cclxuICAgIH1cclxuICAgIG5vQ2hvb3NlKCkge1xyXG4gICAgICAgIHRoaXMuYXJyb3cuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMSlcclxuICAgIH1cclxufVxyXG4iXX0=