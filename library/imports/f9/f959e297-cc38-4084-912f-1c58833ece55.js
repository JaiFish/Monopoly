"use strict";
cc._RF.push(module, 'f959eKXzDhAhJEvHFiDPs5V', 'MessageAction');
// Script/Class/Message/MessageAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBase_1 = require("../../Data/base/ComponentBase");
var Easing_1 = require("../../Enum/Easing");
var MessageAction = /** @class */ (function (_super) {
    __extends(MessageAction, _super);
    function MessageAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageAction.prototype.outBack = function (_node, _scale, callback) {
        cc.Tween.stopAllByTarget(_node);
        var action1 = cc.tween().to(1, { scale: _scale }, { easing: Easing_1.Easing.backOut });
        callback ?
            action1.call(callback.bind(this)).clone(_node).start() :
            action1.clone(_node).start();
    };
    MessageAction.prototype.inBack = function (_node, _scale, callback) {
        cc.Tween.stopAllByTarget(_node);
        var action1 = cc.tween().to(0.5, { scale: _scale }, { easing: Easing_1.Easing.backIn });
        callback ?
            action1.call(callback.bind(this)).clone(_node).start() :
            action1.clone(_node).start();
    };
    MessageAction.prototype.fadeOut = function (_node, callback) {
        cc.Tween.stopAllByTarget(_node);
        var action1 = cc.tween().to(1, { y: -20, opacity: 0 });
        callback ?
            action1.call(callback.bind(this)).clone(_node).start() :
            action1.clone(_node).start();
    };
    MessageAction.prototype.fadeIn = function (_node, callback) {
        cc.Tween.stopAllByTarget(_node);
        var action1 = cc.tween().to(1, { y: 0, opacity: 255 });
        callback ?
            action1.call(callback.bind(this)).clone(_node).start() :
            action1.clone(_node).start();
    };
    return MessageAction;
}(ComponentBase_1.default));
exports.default = MessageAction;

cc._RF.pop();