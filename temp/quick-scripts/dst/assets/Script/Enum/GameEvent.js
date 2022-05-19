
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enum/GameEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '757e79L9zNI57Kfgvyze7sn', 'GameEvent');
// Script/Enum/GameEvent.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEvent = void 0;
var GameEvent;
(function (GameEvent) {
    GameEvent["ControllPath"] = "Controll";
    GameEvent["ControllComponent"] = "Controll";
    GameEvent["SetModel"] = "SetModel";
    GameEvent["SendModel"] = "SendModel";
    GameEvent["SendCommand"] = "sendCommand";
    GameEvent["InitMap"] = "InitMap";
    GameEvent["ShowMessage"] = "ShowMessage";
    GameEvent["HideMessage"] = "HideMessage";
    GameEvent["ManGO"] = "ManGO";
    GameEvent["ManStop"] = "ManStop";
    GameEvent["ManWait"] = "ManWait";
    GameEvent["ManSkip"] = "ManSkip";
    GameEvent["SetManState"] = "SetManState";
    GameEvent["MoveToStation"] = "MoveToStation";
    GameEvent["MoveToManCamera"] = "MoveToManCamera";
    GameEvent["ShowAllView"] = "ShowAllView";
    GameEvent["OpenDoor"] = "OpenDoor";
    GameEvent["CloseDoor"] = "CloseDoor";
    GameEvent["BearSetModle"] = "BearSetModle";
    GameEvent["GetStation"] = "GetStation";
    GameEvent["UIGetStation"] = "UIGetStation";
    GameEvent["UIReset"] = "UIReset";
    GameEvent["StopCloud"] = "StopCloud";
    GameEvent["StartCloud"] = "StartCloud";
    GameEvent["DeletCloud"] = "DeletCloud";
    GameEvent["OpenBufer"] = "OpenBufer";
    GameEvent["CloseBufer"] = "CloseBufer";
})(GameEvent = exports.GameEvent || (exports.GameEvent = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbnVtXFxHYW1lRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxTQStCWDtBQS9CRCxXQUFZLFNBQVM7SUFDakIsc0NBQXdCLENBQUE7SUFDeEIsMkNBQTZCLENBQUE7SUFDN0Isa0NBQXFCLENBQUE7SUFDckIsb0NBQXVCLENBQUE7SUFDdkIsd0NBQTJCLENBQUE7SUFDM0IsZ0NBQW1CLENBQUE7SUFDbkIsd0NBQTJCLENBQUE7SUFDM0Isd0NBQTJCLENBQUE7SUFDM0IsNEJBQWUsQ0FBQTtJQUNmLGdDQUFtQixDQUFBO0lBQ25CLGdDQUFtQixDQUFBO0lBQ25CLGdDQUFtQixDQUFBO0lBQ25CLHdDQUEyQixDQUFBO0lBQzNCLDRDQUErQixDQUFBO0lBQy9CLGdEQUFtQyxDQUFBO0lBQ25DLHdDQUEyQixDQUFBO0lBQzNCLGtDQUFxQixDQUFBO0lBQ3JCLG9DQUF1QixDQUFBO0lBQ3ZCLDBDQUE2QixDQUFBO0lBQzdCLHNDQUF5QixDQUFBO0lBQ3pCLDBDQUEyQixDQUFBO0lBRTNCLGdDQUFpQixDQUFBO0lBR2pCLG9DQUF1QixDQUFBO0lBQ3ZCLHNDQUF5QixDQUFBO0lBQ3pCLHNDQUF5QixDQUFBO0lBQ3pCLG9DQUF1QixDQUFBO0lBQ3ZCLHNDQUF5QixDQUFBO0FBQzdCLENBQUMsRUEvQlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUErQnBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gR2FtZUV2ZW50IHtcclxuICAgIENvbnRyb2xsUGF0aCA9XCJDb250cm9sbFwiLFxyXG4gICAgQ29udHJvbGxDb21wb25lbnQgPVwiQ29udHJvbGxcIixcclxuICAgIFNldE1vZGVsID0gXCJTZXRNb2RlbFwiLFxyXG4gICAgU2VuZE1vZGVsID0gXCJTZW5kTW9kZWxcIixcclxuICAgIFNlbmRDb21tYW5kID0gXCJzZW5kQ29tbWFuZFwiLFxyXG4gICAgSW5pdE1hcCA9IFwiSW5pdE1hcFwiLFxyXG4gICAgU2hvd01lc3NhZ2UgPSBcIlNob3dNZXNzYWdlXCIsXHJcbiAgICBIaWRlTWVzc2FnZSA9IFwiSGlkZU1lc3NhZ2VcIixcclxuICAgIE1hbkdPID0gXCJNYW5HT1wiLFxyXG4gICAgTWFuU3RvcCA9IFwiTWFuU3RvcFwiLFxyXG4gICAgTWFuV2FpdCA9IFwiTWFuV2FpdFwiLFxyXG4gICAgTWFuU2tpcCA9IFwiTWFuU2tpcFwiLFxyXG4gICAgU2V0TWFuU3RhdGUgPSBcIlNldE1hblN0YXRlXCIsXHJcbiAgICBNb3ZlVG9TdGF0aW9uID0gXCJNb3ZlVG9TdGF0aW9uXCIsXHJcbiAgICBNb3ZlVG9NYW5DYW1lcmEgPSBcIk1vdmVUb01hbkNhbWVyYVwiLFxyXG4gICAgU2hvd0FsbFZpZXcgPSBcIlNob3dBbGxWaWV3XCIsXHJcbiAgICBPcGVuRG9vciA9IFwiT3BlbkRvb3JcIixcclxuICAgIENsb3NlRG9vciA9IFwiQ2xvc2VEb29yXCIsXHJcbiAgICBCZWFyU2V0TW9kbGUgPSBcIkJlYXJTZXRNb2RsZVwiLFxyXG4gICAgR2V0U3RhdGlvbiA9IFwiR2V0U3RhdGlvblwiLFxyXG4gICAgVUlHZXRTdGF0aW9uPVwiVUlHZXRTdGF0aW9uXCIsXHJcblxyXG4gICAgVUlSZXNldD1cIlVJUmVzZXRcIixcclxuXHJcblxyXG4gICAgU3RvcENsb3VkID0gXCJTdG9wQ2xvdWRcIixcclxuICAgIFN0YXJ0Q2xvdWQgPSBcIlN0YXJ0Q2xvdWRcIixcclxuICAgIERlbGV0Q2xvdWQgPSBcIkRlbGV0Q2xvdWRcIixcclxuICAgIE9wZW5CdWZlciA9IFwiT3BlbkJ1ZmVyXCIsXHJcbiAgICBDbG9zZUJ1ZmVyID0gXCJDbG9zZUJ1ZmVyXCIsXHJcbn0iXX0=