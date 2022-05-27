
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/QA/ChooseLibrary.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fd68OptKxLM4yP3sYDmx+J', 'ChooseLibrary');
// Script/Data/QA/ChooseLibrary.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChooseLibrary = /** @class */ (function () {
    function ChooseLibrary(level, qaLib_num) {
        this.chooseLib = [];
        this.lib = [];
        var libClass = new lib();
        switch (level) {
            case 0:
                this.lib = libClass.easy;
                break;
            case 1:
                this.lib = libClass.normal;
                break;
            case 2:
                this.lib = libClass.hard;
                break;
        }
        // console.log("QA難度" + qaLib_num);
        for (var index = 0; index < qaLib_num.length; index++) {
            // console.log("QA難度" + qaLib_num);
            // console.log("抽取題庫編號" + qaLib_num[index]);
            this.chooseLib.push(this.lib[qaLib_num[index]]);
        }
        // console.log("等級" + level, "題庫：" + this.chooseLib);
    }
    return ChooseLibrary;
}());
exports.default = ChooseLibrary;
var lib = /** @class */ (function () {
    function lib() {
        this.easy = [
            "A. 星星。\nB. 月亮。\nC. 陽光。",
            "A. 可以。\nB. 不可以。\nC. 視情況而定。",
            "A. 帶回家裡使用。\nB. 交給列車長。\nC. 交給車站人員。",
            "A. 不買票搭霸王車。\nB. 依規定買車票。\nC. 買身分不符的法定優待票。",
            "A. 內政部警政署。\nB. 法務部矯正署。\nC. 法務部廉政署。 ",
            "A. 配戴口罩。\nB. 配合量測體溫。\nC. 以上皆是。 ",
            "A. 人事單位。\nB. 會計單位。\nC. 政風單位。 ",
            "A. 1922。\nB. 1933。\nC. 1999。 ",
            "A. 直接拿起來交給警察。\nB. 告知警察或車站人員。\nC. 不管他。",
        ];
        this.normal = [
            "A. 1922。\nB. 1933。\nC. 1999。",
            "A. 日南。\nB. 談文。\nC. 通霄。",
            "A. 02-2882-5252。\nB. 0800-286-586(你爆料，我爆料)。\nC. 0800-123-456。",
            "A. 1萬元。\nB. 5萬元。\nC. 9萬元。",
            "A. 扇形車庫。\nB. 富岡基地。\nC. 高雄機廠。",
            "A. 不買票搭霸王車。\nB. 購買合乎身分之全票車票。\nC. 購買身分不符之法定優待票(敬老票或愛心票)。",
            "A. 400萬元。\nB. 670萬元。\nC. 1,000萬元。",
            "A. 內政部警政署。\nB. 法務部矯正署。\nC. 法務部廉政署。",
            "A. 險阻、平安、注意慢行。\nB. 平安、險阻、注意慢行。\nC. 平安、注意慢行、險阻。",
        ];
        this.hard = [
            "A. 不行，應杜絕一切利益輸送行為。\nB. 可以，以合於市場行情辦理採購即可。\nC. 原則不行，但符合利衝法規定辦理之採購不在此限。",
            "A. 1922。\nB. 1933。\nC. 1999。",
            "A. SMS。\nB. SOS。\nC. SAS。",
            "A. 02-2882-5252。\nB. 0800-286-586(你爆料，我爆料)。\nC. 0800-123-456。",
            "A. 3,000元。\nB. 5,000元。\nC. 6,000元。 ",
            "A. 3日。\nB. 5日。\nC. 7日。",
            "A. 400萬元。\nB. 670萬元。\nC. 1,000萬元。",
            "A. 檢查寄件者真偽。\nB. 直接開啟郵件超連結及附件。\nC. 寄送機敏信件避免收件人資訊外洩。",
            "A. 10月10日。\nB. 12月9日。\nC. 12月25日。",
        ];
    }
    return lib;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxRQVxcQ2hvb3NlTGlicmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBSUksdUJBQVksS0FBYSxFQUFFLFNBQW1CO1FBRjlDLGNBQVMsR0FBYSxFQUFFLENBQUE7UUFDeEIsUUFBRyxHQUFhLEVBQUUsQ0FBQTtRQUVkLElBQUksUUFBUSxHQUFRLElBQUksR0FBRyxFQUFFLENBQUE7UUFDN0IsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLENBQUM7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUM3QixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDL0IsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLE1BQU07U0FDYjtRQUNELG1DQUFtQztRQUVuQyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNuRCxtQ0FBbUM7WUFDbkMsNENBQTRDO1lBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNsRDtRQUNELHFEQUFxRDtJQUV6RCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBOztBQUNEO0lBQUE7UUFDSSxTQUFJLEdBQWE7WUFDYix3QkFBd0I7WUFDeEIsNEJBQTRCO1lBQzVCLG1DQUFtQztZQUNuQywwQ0FBMEM7WUFDMUMscUNBQXFDO1lBQ3JDLGlDQUFpQztZQUNqQywrQkFBK0I7WUFDL0IsK0JBQStCO1lBQy9CLHVDQUF1QztTQUMxQyxDQUFBO1FBQ0QsV0FBTSxHQUFhO1lBQ2YsOEJBQThCO1lBQzlCLHdCQUF3QjtZQUN4QiwrREFBK0Q7WUFDL0QsMkJBQTJCO1lBQzNCLDhCQUE4QjtZQUM5Qix5REFBeUQ7WUFDekQsbUNBQW1DO1lBQ25DLG9DQUFvQztZQUNwQyxnREFBZ0Q7U0FDbkQsQ0FBQTtRQUNELFNBQUksR0FBYTtZQUNiLHNFQUFzRTtZQUN0RSw4QkFBOEI7WUFDOUIsMkJBQTJCO1lBQzNCLCtEQUErRDtZQUMvRCxxQ0FBcUM7WUFDckMsd0JBQXdCO1lBQ3hCLG1DQUFtQztZQUNuQyxvREFBb0Q7WUFDcEQsbUNBQW1DO1NBQ3RDLENBQUE7SUFDTCxDQUFDO0lBQUQsVUFBQztBQUFELENBbENBLEFBa0NDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9vc2VMaWJyYXJ5IHtcclxuXHJcbiAgICBjaG9vc2VMaWI6IHN0cmluZ1tdID0gW11cclxuICAgIGxpYjogc3RyaW5nW10gPSBbXVxyXG4gICAgY29uc3RydWN0b3IobGV2ZWw6IG51bWJlciwgcWFMaWJfbnVtOiBudW1iZXJbXSkge1xyXG4gICAgICAgIGxldCBsaWJDbGFzczogbGliID0gbmV3IGxpYigpXHJcbiAgICAgICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IHRoaXMubGliID0gbGliQ2xhc3MuZWFzeTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6IHRoaXMubGliID0gbGliQ2xhc3Mubm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjogdGhpcy5saWIgPSBsaWJDbGFzcy5oYXJkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUUHpm6PluqZcIiArIHFhTGliX251bSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBxYUxpYl9udW0ubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUUHpm6PluqZcIiArIHFhTGliX251bSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5oq95Y+W6aGM5bqr57eo6JmfXCIgKyBxYUxpYl9udW1baW5kZXhdKTtcclxuICAgICAgICAgICAgdGhpcy5jaG9vc2VMaWIucHVzaCh0aGlzLmxpYltxYUxpYl9udW1baW5kZXhdXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLnrYnntJpcIiArIGxldmVsLCBcIumhjOW6q++8mlwiICsgdGhpcy5jaG9vc2VMaWIpO1xyXG5cclxuICAgIH1cclxufVxyXG5jbGFzcyBsaWIge1xyXG4gICAgZWFzeTogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgXCJBLiDmmJ/mmJ/jgIJcXG5CLiDmnIjkuq7jgIJcXG5DLiDpmb3lhYnjgIJcIixcclxuICAgICAgICBcIkEuIOWPr+S7peOAglxcbkIuIOS4jeWPr+S7peOAglxcbkMuIOimluaDheazgeiAjOWumuOAglwiLFxyXG4gICAgICAgIFwiQS4g5bi25Zue5a626KOh5L2/55So44CCXFxuQi4g5Lqk57Wm5YiX6LuK6ZW344CCXFxuQy4g5Lqk57Wm6LuK56uZ5Lq65ZOh44CCXCIsXHJcbiAgICAgICAgXCJBLiDkuI3osrfnpajmkK3pnLjnjovou4rjgIJcXG5CLiDkvp3opo/lrprosrfou4rnpajjgIJcXG5DLiDosrfouqvliIbkuI3nrKbnmoTms5XlrprlhKrlvoXnpajjgIJcIixcclxuICAgICAgICBcIkEuIOWFp+aUv+mDqOitpuaUv+e9suOAglxcbkIuIOazleWLmemDqOefr+ato+e9suOAglxcbkMuIOazleWLmemDqOW7ieaUv+e9suOAgiBcIixcclxuICAgICAgICBcIkEuIOmFjeaItOWPo+e9qeOAglxcbkIuIOmFjeWQiOmHj+a4rOmrlOa6q+OAglxcbkMuIOS7peS4iueahuaYr+OAgiBcIixcclxuICAgICAgICBcIkEuIOS6uuS6i+WWruS9jeOAglxcbkIuIOacg+ioiOWWruS9jeOAglxcbkMuIOaUv+miqOWWruS9jeOAgiBcIixcclxuICAgICAgICBcIkEuIDE5MjLjgIJcXG5CLiAxOTMz44CCXFxuQy4gMTk5OeOAgiBcIixcclxuICAgICAgICBcIkEuIOebtOaOpeaLv+i1t+S+huS6pOe1puitpuWvn+OAglxcbkIuIOWRiuefpeitpuWvn+aIlui7iuermeS6uuWToeOAglxcbkMuIOS4jeeuoeS7luOAglwiLFxyXG4gICAgXVxyXG4gICAgbm9ybWFsOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICBcIkEuIDE5MjLjgIJcXG5CLiAxOTMz44CCXFxuQy4gMTk5OeOAglwiLFxyXG4gICAgICAgIFwiQS4g5pel5Y2X44CCXFxuQi4g6KuH5paH44CCXFxuQy4g6YCa6ZyE44CCXCIsXHJcbiAgICAgICAgXCJBLiAwMi0yODgyLTUyNTLjgIJcXG5CLiAwODAwLTI4Ni01ODYo5L2g54iG5paZ77yM5oiR54iG5paZKeOAglxcbkMuIDA4MDAtMTIzLTQ1NuOAglwiLFxyXG4gICAgICAgIFwiQS4gMeiQrOWFg+OAglxcbkIuIDXokKzlhYPjgIJcXG5DLiA56JCs5YWD44CCXCIsXHJcbiAgICAgICAgXCJBLiDmiYflvaLou4rluqvjgIJcXG5CLiDlr4zlsqHln7rlnLDjgIJcXG5DLiDpq5jpm4TmqZ/lu6DjgIJcIixcclxuICAgICAgICBcIkEuIOS4jeiyt+elqOaQremcuOeOi+i7iuOAglxcbkIuIOizvOiyt+WQiOS5jui6q+WIhuS5i+WFqOelqOi7iuelqOOAglxcbkMuIOizvOiyt+i6q+WIhuS4jeespuS5i+azleWumuWEquW+heelqCjmlazogIHnpajmiJbmhJvlv4Pnpagp44CCXCIsXHJcbiAgICAgICAgXCJBLiA0MDDokKzlhYPjgIJcXG5CLiA2NzDokKzlhYPjgIJcXG5DLiAxLDAwMOiQrOWFg+OAglwiLFxyXG4gICAgICAgIFwiQS4g5YWn5pS/6YOo6K2m5pS/572y44CCXFxuQi4g5rOV5YuZ6YOo55+v5q2j572y44CCXFxuQy4g5rOV5YuZ6YOo5buJ5pS/572y44CCXCIsXHJcbiAgICAgICAgXCJBLiDpmqrpmLvjgIHlubPlronjgIHms6jmhI/mhaLooYzjgIJcXG5CLiDlubPlronjgIHpmqrpmLvjgIHms6jmhI/mhaLooYzjgIJcXG5DLiDlubPlronjgIHms6jmhI/mhaLooYzjgIHpmqrpmLvjgIJcIixcclxuICAgIF1cclxuICAgIGhhcmQ6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgIFwiQS4g5LiN6KGM77yM5oeJ5p2c57WV5LiA5YiH5Yip55uK6Ly46YCB6KGM54K644CCXFxuQi4g5Y+v5Lul77yM5Lul5ZCI5pa85biC5aC06KGM5oOF6L6m55CG5o6h6LO85Y2z5Y+v44CCXFxuQy4g5Y6f5YmH5LiN6KGM77yM5L2G56ym5ZCI5Yip6KGd5rOV6KaP5a6a6L6m55CG5LmL5o6h6LO85LiN5Zyo5q2k6ZmQ44CCXCIsXHJcbiAgICAgICAgXCJBLiAxOTIy44CCXFxuQi4gMTkzM+OAglxcbkMuIDE5OTnjgIJcIixcclxuICAgICAgICBcIkEuIFNNU+OAglxcbkIuIFNPU+OAglxcbkMuIFNBU+OAglwiLFxyXG4gICAgICAgIFwiQS4gMDItMjg4Mi01MjUy44CCXFxuQi4gMDgwMC0yODYtNTg2KOS9oOeIhuaWme+8jOaIkeeIhuaWmSnjgIJcXG5DLiAwODAwLTEyMy00NTbjgIJcIixcclxuICAgICAgICBcIkEuIDMsMDAw5YWD44CCXFxuQi4gNSwwMDDlhYPjgIJcXG5DLiA2LDAwMOWFg+OAgiBcIixcclxuICAgICAgICBcIkEuIDPml6XjgIJcXG5CLiA15pel44CCXFxuQy4gN+aXpeOAglwiLFxyXG4gICAgICAgIFwiQS4gNDAw6JCs5YWD44CCXFxuQi4gNjcw6JCs5YWD44CCXFxuQy4gMSwwMDDokKzlhYPjgIJcIixcclxuICAgICAgICBcIkEuIOaqouafpeWvhOS7tuiAheecn+WBveOAglxcbkIuIOebtOaOpemWi+WVn+mDteS7tui2hemAo+e1kOWPiumZhOS7tuOAglxcbkMuIOWvhOmAgeapn+aVj+S/oeS7tumBv+WFjeaUtuS7tuS6uuizh+ioiuWklua0qeOAglwiLFxyXG4gICAgICAgIFwiQS4gMTDmnIgxMOaXpeOAglxcbkIuIDEy5pyIOeaXpeOAglxcbkMuIDEy5pyIMjXml6XjgIJcIixcclxuICAgIF1cclxufSJdfQ==