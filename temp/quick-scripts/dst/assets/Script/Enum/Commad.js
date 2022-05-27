
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enum/Commad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4928289YRBDm4lMJbFoVM38', 'Commad');
// Script/Enum/Commad.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commamnd = void 0;
var Commamnd;
(function (Commamnd) {
    Commamnd["MainInit"] = "mainInit";
    Commamnd["EndChooseTicket"] = "endChooseTicket";
    Commamnd["EndChoosTrain"] = "endChoosTrain";
    Commamnd["ShowTeaching"] = "showTeaching";
    Commamnd["EndTeaching"] = "endTeaching";
    Commamnd["WaitSignalLight"] = "waitSignalLight";
    Commamnd["ShowVideo"] = "showVideo";
    Commamnd["CloseVideo"] = "closeVideo";
    Commamnd["ShowQA"] = "showQA";
    Commamnd["ShowAgainQA"] = "showAgainQA";
    Commamnd["EndQA"] = "endQA";
    Commamnd["ShowAnswer"] = "showAnswer";
    Commamnd["EndAnswer"] = "endAnswer";
    Commamnd["ShowExplain"] = "showExplain";
    Commamnd["EndExplain"] = "endExplain";
    Commamnd["ShowStationInfo"] = "showStationInfo";
    Commamnd["EndtationInfo"] = "endTationInfo";
    Commamnd["ShowGetProps"] = "showGetProps";
    Commamnd["EndGetProps"] = "endGetProps";
    Commamnd["CloseUrlView"] = "closeUrlView";
    Commamnd["ShowEndGame"] = "showEndGame";
    Commamnd["AgainGame"] = "againGame";
    Commamnd["GoLottery"] = "goLottery";
    Commamnd["DoorAgainGame"] = "doorAgainGame";
    Commamnd["MenGO"] = "menGo";
    Commamnd["ManWait"] = "manWait";
    Commamnd["ManLineWait"] = "manLineWait";
    Commamnd["MoveTarget"] = "moveTarget";
    Commamnd["UpdataUIStart"] = "updataUIStart";
    Commamnd["ClinetClickStart_Stop"] = "clinetClickStart_Stop";
    Commamnd["ShowAllView"] = "showAllView";
    Commamnd["WebCheckData"] = "webCheckData";
    Commamnd["EndToBackGame"] = "endToBackGame";
})(Commamnd = exports.Commamnd || (exports.Commamnd = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbnVtXFxDb21tYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxRQW1DWDtBQW5DRCxXQUFZLFFBQVE7SUFDaEIsaUNBQXFCLENBQUE7SUFDckIsK0NBQW1DLENBQUE7SUFDbkMsMkNBQStCLENBQUE7SUFDL0IseUNBQTZCLENBQUE7SUFDN0IsdUNBQTJCLENBQUE7SUFDM0IsK0NBQW1DLENBQUE7SUFDbkMsbUNBQXVCLENBQUE7SUFDdkIscUNBQXlCLENBQUE7SUFDekIsNkJBQWlCLENBQUE7SUFDakIsdUNBQTJCLENBQUE7SUFDM0IsMkJBQWUsQ0FBQTtJQUNmLHFDQUF5QixDQUFBO0lBQ3pCLG1DQUF1QixDQUFBO0lBQ3ZCLHVDQUEyQixDQUFBO0lBQzNCLHFDQUF5QixDQUFBO0lBQ3pCLCtDQUFtQyxDQUFBO0lBQ25DLDJDQUErQixDQUFBO0lBQy9CLHlDQUE2QixDQUFBO0lBQzdCLHVDQUEyQixDQUFBO0lBRTNCLHlDQUE2QixDQUFBO0lBQzdCLHVDQUEyQixDQUFBO0lBQzNCLG1DQUF1QixDQUFBO0lBQ3ZCLG1DQUF1QixDQUFBO0lBQ3ZCLDJDQUErQixDQUFBO0lBQy9CLDJCQUFlLENBQUE7SUFDZiwrQkFBbUIsQ0FBQTtJQUNuQix1Q0FBMkIsQ0FBQTtJQUMzQixxQ0FBeUIsQ0FBQTtJQUN6QiwyQ0FBK0IsQ0FBQTtJQUMvQiwyREFBK0MsQ0FBQTtJQUMvQyx1Q0FBMkIsQ0FBQTtJQUMzQix5Q0FBNkIsQ0FBQTtJQUM3QiwyQ0FBOEIsQ0FBQTtBQUNsQyxDQUFDLEVBbkNXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBbUNuQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIENvbW1hbW5kIHtcclxuICAgIE1haW5Jbml0ID0gXCJtYWluSW5pdFwiLFxyXG4gICAgRW5kQ2hvb3NlVGlja2V0ID0gXCJlbmRDaG9vc2VUaWNrZXRcIixcclxuICAgIEVuZENob29zVHJhaW4gPSBcImVuZENob29zVHJhaW5cIixcclxuICAgIFNob3dUZWFjaGluZyA9IFwic2hvd1RlYWNoaW5nXCIsXHJcbiAgICBFbmRUZWFjaGluZyA9IFwiZW5kVGVhY2hpbmdcIixcclxuICAgIFdhaXRTaWduYWxMaWdodCA9IFwid2FpdFNpZ25hbExpZ2h0XCIsXHJcbiAgICBTaG93VmlkZW8gPSBcInNob3dWaWRlb1wiLFxyXG4gICAgQ2xvc2VWaWRlbyA9IFwiY2xvc2VWaWRlb1wiLFxyXG4gICAgU2hvd1FBID0gXCJzaG93UUFcIixcclxuICAgIFNob3dBZ2FpblFBID0gXCJzaG93QWdhaW5RQVwiLFxyXG4gICAgRW5kUUEgPSBcImVuZFFBXCIsXHJcbiAgICBTaG93QW5zd2VyID0gXCJzaG93QW5zd2VyXCIsXHJcbiAgICBFbmRBbnN3ZXIgPSBcImVuZEFuc3dlclwiLFxyXG4gICAgU2hvd0V4cGxhaW4gPSBcInNob3dFeHBsYWluXCIsXHJcbiAgICBFbmRFeHBsYWluID0gXCJlbmRFeHBsYWluXCIsXHJcbiAgICBTaG93U3RhdGlvbkluZm8gPSBcInNob3dTdGF0aW9uSW5mb1wiLFxyXG4gICAgRW5kdGF0aW9uSW5mbyA9IFwiZW5kVGF0aW9uSW5mb1wiLFxyXG4gICAgU2hvd0dldFByb3BzID0gXCJzaG93R2V0UHJvcHNcIixcclxuICAgIEVuZEdldFByb3BzID0gXCJlbmRHZXRQcm9wc1wiLFxyXG5cclxuICAgIENsb3NlVXJsVmlldyA9IFwiY2xvc2VVcmxWaWV3XCIsXHJcbiAgICBTaG93RW5kR2FtZSA9IFwic2hvd0VuZEdhbWVcIixcclxuICAgIEFnYWluR2FtZSA9IFwiYWdhaW5HYW1lXCIsXHJcbiAgICBHb0xvdHRlcnkgPSBcImdvTG90dGVyeVwiLFxyXG4gICAgRG9vckFnYWluR2FtZSA9IFwiZG9vckFnYWluR2FtZVwiLFxyXG4gICAgTWVuR08gPSBcIm1lbkdvXCIsXHJcbiAgICBNYW5XYWl0ID0gXCJtYW5XYWl0XCIsXHJcbiAgICBNYW5MaW5lV2FpdCA9IFwibWFuTGluZVdhaXRcIixcclxuICAgIE1vdmVUYXJnZXQgPSBcIm1vdmVUYXJnZXRcIixcclxuICAgIFVwZGF0YVVJU3RhcnQgPSBcInVwZGF0YVVJU3RhcnRcIixcclxuICAgIENsaW5ldENsaWNrU3RhcnRfU3RvcCA9IFwiY2xpbmV0Q2xpY2tTdGFydF9TdG9wXCIsXHJcbiAgICBTaG93QWxsVmlldyA9IFwic2hvd0FsbFZpZXdcIixcclxuICAgIFdlYkNoZWNrRGF0YSA9IFwid2ViQ2hlY2tEYXRhXCIsXHJcbiAgICBFbmRUb0JhY2tHYW1lPSBcImVuZFRvQmFja0dhbWVcIlxyXG59Il19