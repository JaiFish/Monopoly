
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Class/Message/MessageAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDbGFzc1xcTWVzc2FnZVxcTWVzc2FnZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsNENBQTJDO0FBQzNDO0lBQTJDLGlDQUFhO0lBQXhEOztJQTZCQSxDQUFDO0lBNUJHLCtCQUFPLEdBQVAsVUFBUSxLQUFjLEVBQUUsTUFBYyxFQUFFLFFBQW1CO1FBQ3ZELEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQy9CLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLGVBQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBQzdFLFFBQVEsQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDeEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsOEJBQU0sR0FBTixVQUFPLEtBQWMsRUFBRSxNQUFjLEVBQUUsUUFBbUI7UUFDdEQsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDL0IsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDOUUsUUFBUSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDRCwrQkFBTyxHQUFQLFVBQVEsS0FBYyxFQUFFLFFBQWtCO1FBQ3RDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQy9CLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3RELFFBQVEsQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDeEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsOEJBQU0sR0FBTixVQUFPLEtBQWMsRUFBRSxRQUFrQjtRQUNyQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMvQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDdEQsUUFBUSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDTCxvQkFBQztBQUFELENBN0JBLEFBNkJDLENBN0IwQyx1QkFBYSxHQTZCdkQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tICcuLi8uLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZSc7XHJcbmltcG9ydCB7IEVhc2luZyB9IGZyb20gJy4uLy4uL0VudW0vRWFzaW5nJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZUFjdGlvbiBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgb3V0QmFjayhfbm9kZTogY2MuTm9kZSwgX3NjYWxlOiBudW1iZXIsIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoX25vZGUpXHJcbiAgICAgICAgbGV0IGFjdGlvbjEgPSBjYy50d2VlbigpLnRvKDEsIHsgc2NhbGU6IF9zY2FsZSB9LCB7IGVhc2luZzogRWFzaW5nLmJhY2tPdXQgfSlcclxuICAgICAgICBjYWxsYmFjayA/XHJcbiAgICAgICAgICAgIGFjdGlvbjEuY2FsbChjYWxsYmFjay5iaW5kKHRoaXMpKS5jbG9uZShfbm9kZSkuc3RhcnQoKSA6XHJcbiAgICAgICAgICAgIGFjdGlvbjEuY2xvbmUoX25vZGUpLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBpbkJhY2soX25vZGU6IGNjLk5vZGUsIF9zY2FsZTogbnVtYmVyLCBjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KF9ub2RlKVxyXG4gICAgICAgIGxldCBhY3Rpb24xID0gY2MudHdlZW4oKS50bygwLjUsIHsgc2NhbGU6IF9zY2FsZSB9LCB7IGVhc2luZzogRWFzaW5nLmJhY2tJbiB9KVxyXG4gICAgICAgIGNhbGxiYWNrID9cclxuICAgICAgICAgICAgYWN0aW9uMS5jYWxsKGNhbGxiYWNrLmJpbmQodGhpcykpLmNsb25lKF9ub2RlKS5zdGFydCgpIDpcclxuICAgICAgICAgICAgYWN0aW9uMS5jbG9uZShfbm9kZSkuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIGZhZGVPdXQoX25vZGU6IGNjLk5vZGUsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChfbm9kZSlcclxuICAgICAgICBsZXQgYWN0aW9uMSA9IGNjLnR3ZWVuKCkudG8oMSwgeyB5OiAtMjAsIG9wYWNpdHk6IDAgfSlcclxuICAgICAgICBjYWxsYmFjayA/XHJcbiAgICAgICAgICAgIGFjdGlvbjEuY2FsbChjYWxsYmFjay5iaW5kKHRoaXMpKS5jbG9uZShfbm9kZSkuc3RhcnQoKSA6XHJcbiAgICAgICAgICAgIGFjdGlvbjEuY2xvbmUoX25vZGUpLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBmYWRlSW4oX25vZGU6IGNjLk5vZGUsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChfbm9kZSlcclxuICAgICAgICBsZXQgYWN0aW9uMSA9IGNjLnR3ZWVuKCkudG8oMSwgeyB5OiAwLCBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICBjYWxsYmFjayA/XHJcbiAgICAgICAgICAgIGFjdGlvbjEuY2FsbChjYWxsYmFjay5iaW5kKHRoaXMpKS5jbG9uZShfbm9kZSkuc3RhcnQoKSA6XHJcbiAgICAgICAgICAgIGFjdGlvbjEuY2xvbmUoX25vZGUpLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn0iXX0=