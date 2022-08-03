
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Message/Panel_Message.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d3fc6vc8FL26iKfbeHKRat', 'Panel_Message');
// Script/Class/Message/Panel_Message.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../Enum/GameEvent");
var Choose_Ticket_1 = require("./Choose_Ticket");
var Choose_Train_1 = require("./Choose_Train");
var CloseFrame_1 = require("./CloseFrame");
var EndGame_1 = require("./EndGame");
var Explain_1 = require("./Explain");
var GetProps_1 = require("./GetProps");
var MessageAction_1 = require("./MessageAction");
var QAAnswer_1 = require("./QAAnswer");
var Question_1 = require("./Question");
var StationInfo_1 = require("./StationInfo");
var Panel_Message = /** @class */ (function (_super) {
    __extends(Panel_Message, _super);
    function Panel_Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel_Message.prototype.onLoad = function () {
        this.bg = cc.find("BG", this.node);
        this.bgMask = cc.find("Mask", this.bg);
        this.btn_Close = cc.find("Btn_Close", this.bg);
        this.block = cc.find("Block", this.node);
        this.choose_Train = cc.find("Choose_Train", this.bgMask).addComponent(Choose_Train_1.default);
        this.choose_Ticket = cc.find("Choose_Ticket", this.bgMask).addComponent(Choose_Ticket_1.default);
        this.question = cc.find("Question", this.bgMask).addComponent(Question_1.default);
        this.explain = cc.find("Explain", this.bgMask).addComponent(Explain_1.default);
        this.qaAnswer = cc.find("QAAnswer", this.bgMask).addComponent(QAAnswer_1.default);
        this.stationInfo = cc.find("StationInfo", this.bgMask).addComponent(StationInfo_1.default);
        this.getProps = cc.find("GetProps", this.bgMask).addComponent(GetProps_1.default);
        this.endGame = cc.find("EndGame", this.bgMask).addComponent(EndGame_1.default);
        this.closeFrame = cc.find("CloseFrame", this.bgMask).addComponent(CloseFrame_1.default);
        this.initEvent(GameEvent_1.GameEvent.ShowMessage, this.show);
        this.initEvent(GameEvent_1.GameEvent.HideMessage, this.hide);
        this.defaultReset();
        this.bg.setScale(0);
        this.block.active = false;
    };
    // protected start(): void {
    // }
    Panel_Message.prototype.show = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this.bg.scale == 1) {
                            resolve();
                            return;
                        }
                        _this.EventEmit(GameEvent_1.GameEvent.OpenBufer);
                        _this.bg.setScale(0);
                        _this.block.active = true;
                        _this.outBack(_this.bg, 1, resolve);
                    })];
            });
        });
    };
    Panel_Message.prototype.hide = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this.bg.scale == 0) {
                            resolve();
                            return;
                        }
                        _this.inBack(_this.bg, 0, function () {
                            _this.EventEmit(GameEvent_1.GameEvent.CloseBufer);
                            _this.block.active = false;
                            resolve();
                        });
                    })];
            });
        });
    };
    return Panel_Message;
}(MessageAction_1.default));
exports.default = Panel_Message;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcUGFuZWxfTWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBaUQ7QUFDakQsaURBQTRDO0FBQzVDLCtDQUEwQztBQUMxQywyQ0FBc0M7QUFDdEMscUNBQWdDO0FBQ2hDLHFDQUFnQztBQUNoQyx1Q0FBa0M7QUFDbEMsaURBQTRDO0FBQzVDLHVDQUFrQztBQUNsQyx1Q0FBa0M7QUFDbEMsNkNBQXdDO0FBRXhDO0lBQTJDLGlDQUFhO0lBQXhEOztJQXFFQSxDQUFDO0lBdERhLDhCQUFNLEdBQWhCO1FBRUksSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDOUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLHNCQUFZLENBQUMsQ0FBQTtRQUNuRixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsdUJBQWEsQ0FBQyxDQUFBO1FB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Q2IsQ0FBQyxDQUFDLENBQUE7b0JBQ04sQ0FBQyxDQUFDLEVBQUE7OztLQUNMO0lBQ0wsb0JBQUM7QUFBRCxDQXJFQSxBQXFFQyxDQXJFMEMsdUJBQWEsR0FxRXZEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSBcIi4uLy4uL0VudW0vR2FtZUV2ZW50XCI7XHJcbmltcG9ydCBDaG9vc2VfVGlja2V0IGZyb20gXCIuL0Nob29zZV9UaWNrZXRcIjtcclxuaW1wb3J0IENob29zZV9UcmFpbiBmcm9tIFwiLi9DaG9vc2VfVHJhaW5cIjtcclxuaW1wb3J0IENsb3NlRnJhbWUgZnJvbSBcIi4vQ2xvc2VGcmFtZVwiO1xyXG5pbXBvcnQgRW5kR2FtZSBmcm9tIFwiLi9FbmRHYW1lXCI7XHJcbmltcG9ydCBFeHBsYWluIGZyb20gXCIuL0V4cGxhaW5cIjtcclxuaW1wb3J0IEdldFByb3BzIGZyb20gXCIuL0dldFByb3BzXCI7XHJcbmltcG9ydCBNZXNzYWdlQWN0aW9uIGZyb20gXCIuL01lc3NhZ2VBY3Rpb25cIjtcclxuaW1wb3J0IFFBQW5zd2VyIGZyb20gXCIuL1FBQW5zd2VyXCI7XHJcbmltcG9ydCBRdWVzdGlvbiBmcm9tIFwiLi9RdWVzdGlvblwiO1xyXG5pbXBvcnQgU3RhdGlvbkluZm8gZnJvbSBcIi4vU3RhdGlvbkluZm9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsX01lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlQWN0aW9uIHtcclxuICAgIGJsb2NrOiBjYy5Ob2RlO1xyXG4gICAgYnRuX0Nsb3NlOiBjYy5Ob2RlO1xyXG4gICAgYmc6IGNjLk5vZGU7XHJcbiAgICBiZ01hc2s6IGNjLk5vZGVcclxuICAgIGNob29zZV9UcmFpbjogQ2hvb3NlX1RyYWluO1xyXG4gICAgY2hvb3NlX1RpY2tldDogQ2hvb3NlX1RpY2tldDtcclxuICAgIHF1ZXN0aW9uOiBRdWVzdGlvbjtcclxuICAgIHFhQW5zd2VyOiBRQUFuc3dlcjtcclxuICAgIGV4cGxhaW46IEV4cGxhaW47XHJcbiAgICBzdGF0aW9uSW5mbzogU3RhdGlvbkluZm87XHJcbiAgICBnZXRQcm9wczogR2V0UHJvcHNcclxuICAgIGVuZEdhbWU6IEVuZEdhbWVcclxuICAgIGNsb3NlRnJhbWU6IENsb3NlRnJhbWU7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5iZyA9IGNjLmZpbmQoXCJCR1wiLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5iZ01hc2sgPSBjYy5maW5kKFwiTWFza1wiLCB0aGlzLmJnKVxyXG4gICAgICAgIHRoaXMuYnRuX0Nsb3NlID0gY2MuZmluZChcIkJ0bl9DbG9zZVwiLCB0aGlzLmJnKVxyXG4gICAgICAgIHRoaXMuYmxvY2sgPSBjYy5maW5kKFwiQmxvY2tcIiwgdGhpcy5ub2RlKVxyXG5cclxuICAgICAgICB0aGlzLmNob29zZV9UcmFpbiA9IGNjLmZpbmQoXCJDaG9vc2VfVHJhaW5cIiwgdGhpcy5iZ01hc2spLmFkZENvbXBvbmVudChDaG9vc2VfVHJhaW4pXHJcbiAgICAgICAgdGhpcy5jaG9vc2VfVGlja2V0ID0gY2MuZmluZChcIkNob29zZV9UaWNrZXRcIiwgdGhpcy5iZ01hc2spLmFkZENvbXBvbmVudChDaG9vc2VfVGlja2V0KVxyXG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBjYy5maW5kKFwiUXVlc3Rpb25cIiwgdGhpcy5iZ01hc2spLmFkZENvbXBvbmVudChRdWVzdGlvbilcclxuICAgICAgICB0aGlzLmV4cGxhaW4gPSBjYy5maW5kKFwiRXhwbGFpblwiLCB0aGlzLmJnTWFzaykuYWRkQ29tcG9uZW50KEV4cGxhaW4pXHJcbiAgICAgICAgdGhpcy5xYUFuc3dlciA9IGNjLmZpbmQoXCJRQUFuc3dlclwiLCB0aGlzLmJnTWFzaykuYWRkQ29tcG9uZW50KFFBQW5zd2VyKVxyXG4gICAgICAgIHRoaXMuc3RhdGlvbkluZm8gPSBjYy5maW5kKFwiU3RhdGlvbkluZm9cIiwgdGhpcy5iZ01hc2spLmFkZENvbXBvbmVudChTdGF0aW9uSW5mbylcclxuICAgICAgICB0aGlzLmdldFByb3BzID0gY2MuZmluZChcIkdldFByb3BzXCIsIHRoaXMuYmdNYXNrKS5hZGRDb21wb25lbnQoR2V0UHJvcHMpXHJcbiAgICAgICAgdGhpcy5lbmRHYW1lID0gY2MuZmluZChcIkVuZEdhbWVcIiwgdGhpcy5iZ01hc2spLmFkZENvbXBvbmVudChFbmRHYW1lKVxyXG4gICAgICAgIHRoaXMuY2xvc2VGcmFtZSA9IGNjLmZpbmQoXCJDbG9zZUZyYW1lXCIsIHRoaXMuYmdNYXNrKS5hZGRDb21wb25lbnQoQ2xvc2VGcmFtZSlcclxuXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoR2FtZUV2ZW50LlNob3dNZXNzYWdlLCB0aGlzLnNob3cpXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoR2FtZUV2ZW50LkhpZGVNZXNzYWdlLCB0aGlzLmhpZGUpXHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFJlc2V0KClcclxuICAgICAgICB0aGlzLmJnLnNldFNjYWxlKDApO1xyXG4gICAgICAgIHRoaXMuYmxvY2suYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuICAgIC8vIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuXHJcbiAgICAvLyB9XHJcbiAgICBhc3luYyBzaG93KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJnLnNjYWxlID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50Lk9wZW5CdWZlcilcclxuICAgICAgICAgICAgdGhpcy5iZy5zZXRTY2FsZSgwKVxyXG4gICAgICAgICAgICB0aGlzLmJsb2NrLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5vdXRCYWNrKHRoaXMuYmcsIDEsIHJlc29sdmUpXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhc3luYyBoaWRlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJnLnNjYWxlID09IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW5CYWNrKHRoaXMuYmcsIDAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5DbG9zZUJ1ZmVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ibG9jay5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXX0=