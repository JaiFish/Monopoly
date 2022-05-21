
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcQ2hvb3NlX1RyYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUM1Qyx1REFBa0Q7QUFDbEQsK0RBQTBEO0FBQzFELHFEQUFnRDtBQUNoRCw0Q0FBNkM7QUFFN0Msa0RBQWlEO0FBQ2pELGtEQUFpRDtBQUNqRCw2Q0FBd0M7QUFDbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQWE7SUFBdkQ7UUFBQSxxRUFtSEM7UUFqSEcsV0FBSyxHQUFnQixFQUFFLENBQUM7UUFLeEIsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUVuQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsaUJBQVcsR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdkUsaUJBQVcsR0FBVyxHQUFHLENBQUM7UUFFMUIsbUJBQWEsR0FBVyxDQUFDLENBQUM7O1FBd0YxQiw4Q0FBOEM7UUFDOUMsc0RBQXNEO1FBQ3RELHdDQUF3QztRQUN4Qyx3QkFBd0I7UUFDeEIsb0NBQW9DO1FBQ3BDLDJDQUEyQztRQUMzQyxzRUFBc0U7UUFDdEUsZ0JBQWdCO1FBQ2hCLDZCQUE2QjtRQUM3Qix1QkFBdUI7UUFDdkIsU0FBUztRQUVULElBQUk7SUFDUixDQUFDO0lBaEdhLDZCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLE9BQU8s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QyxDQUFBO0lBQ3pCLENBQUM7SUFDTCxnQkFBQztBQUFELENBcEJBLEFBb0JDLENBcEJ1Qix1QkFBYSxHQW9CcEMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXRNbmcgZnJvbSAnLi4vLi4vQXNzZXQvQXNzZXRNbmcnO1xyXG5pbXBvcnQgQnV0dG9uTW5nIGZyb20gJy4uLy4uL0RhdGEvYmFzZS9CdXR0b25NbmcnO1xyXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tICcuLi8uLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZSc7XHJcbmltcG9ydCBNdXNjaU1uZyBmcm9tICcuLi8uLi9EYXRhL2Jhc2UvTXVzY2lNbmcnO1xyXG5pbXBvcnQgeyBDb21tYW1uZCB9IGZyb20gJy4uLy4uL0VudW0vQ29tbWFkJztcclxuaW1wb3J0IHsgRWFzaW5nIH0gZnJvbSAnLi4vLi4vRW51bS9FYXNpbmcnO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tICcuLi8uLi9FbnVtL0dhbWVFdmVudCc7XHJcbmltcG9ydCB7IFRyYWluVHlwZSB9IGZyb20gJy4uLy4uL0VudW0vVHJhaW5UeXBlJztcclxuaW1wb3J0IEdhbWVNb2RsZSBmcm9tICcuLi8uLi9HYW1lTW9kbGUnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvb3NlX1RyYWluIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICBpdGVtOiBjYy5Ob2RlO1xyXG4gICAgaXRtZXM6IFRyYWluSXRlbVtdID0gW107XHJcbiAgICAvLyBNaW5lVHJhaW46IFRyYWluSXRlbTtcclxuICAgIGNvbnRlbnQ6IGNjLk5vZGU7XHJcbiAgICBpc1JhbmRvbTogYm9vbGVhbjtcclxuICAgIGlzU3RvcDogYm9vbGVhbjtcclxuICAgIHRlbXBEVDogbnVtYmVyID0gMDtcclxuXHJcbiAgICB0b3RhbGVEVDogbnVtYmVyID0gMDtcclxuICAgIGVuZERUOiBudW1iZXIgPSA3O1xyXG4gICAgY2hhbmdlU3BlZWQ6IG51bWJlcltdID0gWzAuMiwgMC4zLCAwLjQsIDAuNSwgMC42LCAwLjcsIDAuNzUsIDAuOCwgMC44NV1cclxuICAgIHNwZWVkQ2hhbmdlOiBudW1iZXIgPSAwLjE7XHJcblxyXG4gICAgbGFzdFNob3dUcmFpbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBidG5fU3RhcnQ6IGNjLkJ1dHRvbjtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW0gPSBjYy5maW5kKFwiVHJhaW5GcmFtZVwiLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY2MuZmluZChcIkxheW91dFwiLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5idG5fU3RhcnQgPSBjYy5maW5kKFwiYnRuX0NoZWNrXCIsdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA2OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpbnN0SXRtZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbSlcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGluc3RJdG1lKVxyXG4gICAgICAgICAgICBpbnN0SXRtZS5zZXRQb3NpdGlvbigwLCAwKVxyXG4gICAgICAgICAgICBsZXQgX2NsYXNzID0gaW5zdEl0bWUuYWRkQ29tcG9uZW50KFRyYWluSXRlbSlcclxuICAgICAgICAgICAgdGhpcy5pdG1lcy5wdXNoKF9jbGFzcyk7XHJcbiAgICAgICAgICAgIGxldCBnZXRJbmRleCA9IGluZGV4XHJcbiAgICAgICAgICAgIF9jbGFzcy50eXBlID0gZ2V0SW5kZXhcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pdGVtLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLmhpZGUoKVxyXG4gICAgICAgIEJ1dHRvbk1uZy5hZGRFdmVudCh0aGlzLm5vZGUsIFwiQ2hvb3NlX1RyYWluXCIsIFwic3RhcnRSYW5kb21cIiwgdGhpcy5idG5fU3RhcnQpXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSYW5kb20pIHtcclxuICAgICAgICAgICAgdGhpcy50ZW1wRFQgKz0gZHQ7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxlRFQgKz0gZHQ7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGVtcERULCB0aGlzLnNwZWVkQ2hhbmdlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRlbXBEVCA+IHRoaXMuc3BlZWRDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU2hvdygpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBEVCA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy50b3RhbGVEVCA+IHRoaXMuZW5kRFQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSYW5kb20gPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgR2FtZU1vZGxlLnBsYXlEYXRhLnRyYWluVHlwZU51bWJlciA9IHRoaXMubGFzdFNob3dUcmFpblxyXG4gICAgICAgICAgICAgICAgR2FtZU1vZGxlLnBsYXlEYXRhLnRyYWluVHlwZSA9IHRoaXMuY2hhbmdlVHJhaW5UeXBlKClcclxuICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgQ29tbWFtbmQuRW5kQ2hvb3NUcmFpbilcclxuICAgICAgICAgICAgICAgIC8vZGVsYXnmmYLplpPlvozvvIzlsIflnJbniYflvp7nlavpnaLnp7vli5XliLDloLToraYodHJ55bm+5YCL5bCP5pmCKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGFuZ2VTcGVlZFswXSAhPSBudWxsICYmIHRoaXMudG90YWxlRFQgPiAodGhpcy5lbmREVCAqIHRoaXMuY2hhbmdlU3BlZWRbMF0pKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNwZWVkQ2hhbmdlID0gdGhpcy5zcGVlZENoYW5nZSAqIDJcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRDaGFuZ2UgPSB0aGlzLnNwZWVkQ2hhbmdlICsgTWF0aC5wb3coMC42LCB0aGlzLmNoYW5nZVNwZWVkLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3BlZWQuc2hpZnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHN0YXJ0UmFuZG9tKCkge1xyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJCdG5DbGlja1wiKVxyXG4gICAgICAgIHRoaXMuYnRuX1N0YXJ0Lm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmlzUmFuZG9tID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGluaXRUcmFpblNwcml0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdG1lcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5pdG1lc1tpbmRleF0uc3BydGllLnNwcml0ZUZyYW1lID0gQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJUcmFpblR5cGVfXCIgKyBpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNob3coKSB7XHJcbiAgICAgICAgdGhpcy5pdG1lc1t0aGlzLmxhc3RTaG93VHJhaW5dLm5vQ2hvb3NlKClcclxuICAgICAgICBsZXQgcmFuZG9tID0gdGhpcy5sYXN0U2hvd1RyYWluXHJcbiAgICAgICAgd2hpbGUgKHJhbmRvbSA9PSB0aGlzLmxhc3RTaG93VHJhaW4pIHtcclxuICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNilcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYXN0U2hvd1RyYWluID0gcmFuZG9tO1xyXG4gICAgICAgIHRoaXMuaXRtZXNbcmFuZG9tXS5jaG9vc2UoKVxyXG4gICAgfVxyXG4gICAgY2hhbmdlVHJhaW5UeXBlKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5sYXN0U2hvd1RyYWluKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUcmFpblR5cGUuVHlwZTA7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUcmFpblR5cGUuVHlwZTE7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUcmFpblR5cGUuVHlwZTI7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUcmFpblR5cGUuVHlwZTM7O1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVHJhaW5UeXBlLlR5cGU0OztcclxuICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRyYWluVHlwZS5UeXBlNTs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gYXN5bmMgZ2V0VHJhaW5BY2l0b24oY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMuTWluZVRyYWluLm5vZGUpXHJcbiAgICAvLyAgICAgICAgICAgICAuZGVsYXkoMilcclxuICAgIC8vICAgICAgICAgICAgIC5yZXBlYXQoMiwgY2MudHdlZW4oKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDEuMyB9KVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIC50bygxLCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBFYXNpbmcuZWxhc3RpY091dCB9KVxyXG4gICAgLy8gICAgICAgICAgICAgKVxyXG4gICAgLy8gICAgICAgICAgICAgLmNhbGwocmVzb2x2ZSlcclxuICAgIC8vICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAvLyAgICAgfSlcclxuXHJcbiAgICAvLyB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBUcmFpbkl0ZW0gZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIHR5cGU6IG51bWJlcjtcclxuICAgIHNwcnRpZTogY2MuU3ByaXRlO1xyXG4gICAgYXJyb3c6IGNjLk5vZGU7XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSgxKVxyXG4gICAgICAgIHRoaXMuYXJyb3cgPSBjYy5maW5kKFwiQXJyb3dcIiwgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuc3BydGllID0gY2MuZmluZChcIlRyYWluXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICB0aGlzLnNwcnRpZS5zcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hcnJvdy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgY2hvb3NlKCkge1xyXG4gICAgICAgIHRoaXMuYXJyb3cuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSgxLjMpXHJcblxyXG4gICAgfVxyXG4gICAgbm9DaG9vc2UoKSB7XHJcbiAgICAgICAgdGhpcy5hcnJvdy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSgxKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==