
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
        for (var index = 0; index < qaLib_num.length; index++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxRQVxcQ2hvb3NlTGlicmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBSUksdUJBQVksS0FBYSxFQUFFLFNBQW1CO1FBRjlDLGNBQVMsR0FBYSxFQUFFLENBQUE7UUFDeEIsUUFBRyxHQUFhLEVBQUUsQ0FBQTtRQUVkLElBQUksUUFBUSxHQUFRLElBQUksR0FBRyxFQUFFLENBQUE7UUFDN0IsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLENBQUM7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUM3QixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDL0IsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLE1BQU07U0FDYjtRQUNELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNsRDtRQUNELHFEQUFxRDtJQUV6RCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBOztBQUNEO0lBQUE7UUFDSSxTQUFJLEdBQWE7WUFDYix3QkFBd0I7WUFDeEIsNEJBQTRCO1lBQzVCLG1DQUFtQztZQUNuQywwQ0FBMEM7WUFDMUMscUNBQXFDO1lBQ3JDLGlDQUFpQztZQUNqQywrQkFBK0I7WUFDL0IsK0JBQStCO1lBQy9CLHVDQUF1QztTQUMxQyxDQUFBO1FBQ0QsV0FBTSxHQUFhO1lBQ2YsOEJBQThCO1lBQzlCLHdCQUF3QjtZQUN4QiwrREFBK0Q7WUFDL0QsMkJBQTJCO1lBQzNCLDhCQUE4QjtZQUM5Qix5REFBeUQ7WUFDekQsbUNBQW1DO1lBQ25DLG9DQUFvQztZQUNwQyxnREFBZ0Q7U0FDbkQsQ0FBQTtRQUNELFNBQUksR0FBYTtZQUNiLHNFQUFzRTtZQUN0RSw4QkFBOEI7WUFDOUIsMkJBQTJCO1lBQzNCLCtEQUErRDtZQUMvRCxxQ0FBcUM7WUFDckMsd0JBQXdCO1lBQ3hCLG1DQUFtQztZQUNuQyxvREFBb0Q7WUFDcEQsbUNBQW1DO1NBQ3RDLENBQUE7SUFDTCxDQUFDO0lBQUQsVUFBQztBQUFELENBbENBLEFBa0NDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9vc2VMaWJyYXJ5IHtcclxuXHJcbiAgICBjaG9vc2VMaWI6IHN0cmluZ1tdID0gW11cclxuICAgIGxpYjogc3RyaW5nW10gPSBbXVxyXG4gICAgY29uc3RydWN0b3IobGV2ZWw6IG51bWJlciwgcWFMaWJfbnVtOiBudW1iZXJbXSkge1xyXG4gICAgICAgIGxldCBsaWJDbGFzczogbGliID0gbmV3IGxpYigpXHJcbiAgICAgICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IHRoaXMubGliID0gbGliQ2xhc3MuZWFzeTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6IHRoaXMubGliID0gbGliQ2xhc3Mubm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjogdGhpcy5saWIgPSBsaWJDbGFzcy5oYXJkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBxYUxpYl9udW0ubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlTGliLnB1c2godGhpcy5saWJbcWFMaWJfbnVtW2luZGV4XV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi562J57SaXCIgKyBsZXZlbCwgXCLpoYzluqvvvJpcIiArIHRoaXMuY2hvb3NlTGliKTtcclxuXHJcbiAgICB9XHJcbn1cclxuY2xhc3MgbGliIHtcclxuICAgIGVhc3k6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgIFwiQS4g5pif5pif44CCXFxuQi4g5pyI5Lqu44CCXFxuQy4g6Zm95YWJ44CCXCIsXHJcbiAgICAgICAgXCJBLiDlj6/ku6XjgIJcXG5CLiDkuI3lj6/ku6XjgIJcXG5DLiDoppbmg4Xms4HogIzlrprjgIJcIixcclxuICAgICAgICBcIkEuIOW4tuWbnuWutuijoeS9v+eUqOOAglxcbkIuIOS6pOe1puWIl+i7iumVt+OAglxcbkMuIOS6pOe1pui7iuermeS6uuWToeOAglwiLFxyXG4gICAgICAgIFwiQS4g5LiN6LK356Wo5pCt6Zy4546L6LuK44CCXFxuQi4g5L6d6KaP5a6a6LK36LuK56Wo44CCXFxuQy4g6LK36Lqr5YiG5LiN56ym55qE5rOV5a6a5YSq5b6F56Wo44CCXCIsXHJcbiAgICAgICAgXCJBLiDlhafmlL/pg6jorabmlL/nvbLjgIJcXG5CLiDms5Xli5npg6jnn6/mraPnvbLjgIJcXG5DLiDms5Xli5npg6jlu4nmlL/nvbLjgIIgXCIsXHJcbiAgICAgICAgXCJBLiDphY3miLTlj6PnvanjgIJcXG5CLiDphY3lkIjph4/muKzpq5TmuqvjgIJcXG5DLiDku6XkuIrnmobmmK/jgIIgXCIsXHJcbiAgICAgICAgXCJBLiDkurrkuovllq7kvY3jgIJcXG5CLiDmnIPoqIjllq7kvY3jgIJcXG5DLiDmlL/poqjllq7kvY3jgIIgXCIsXHJcbiAgICAgICAgXCJBLiAxOTIy44CCXFxuQi4gMTkzM+OAglxcbkMuIDE5OTnjgIIgXCIsXHJcbiAgICAgICAgXCJBLiDnm7TmjqXmi7/otbfkvobkuqTntaborablr5/jgIJcXG5CLiDlkYrnn6Xorablr5/miJbou4rnq5nkurrlk6HjgIJcXG5DLiDkuI3nrqHku5bjgIJcIixcclxuICAgIF1cclxuICAgIG5vcm1hbDogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgXCJBLiAxOTIy44CCXFxuQi4gMTkzM+OAglxcbkMuIDE5OTnjgIJcIixcclxuICAgICAgICBcIkEuIOaXpeWNl+OAglxcbkIuIOirh+aWh+OAglxcbkMuIOmAmumchOOAglwiLFxyXG4gICAgICAgIFwiQS4gMDItMjg4Mi01MjUy44CCXFxuQi4gMDgwMC0yODYtNTg2KOS9oOeIhuaWme+8jOaIkeeIhuaWmSnjgIJcXG5DLiAwODAwLTEyMy00NTbjgIJcIixcclxuICAgICAgICBcIkEuIDHokKzlhYPjgIJcXG5CLiA16JCs5YWD44CCXFxuQy4gOeiQrOWFg+OAglwiLFxyXG4gICAgICAgIFwiQS4g5omH5b2i6LuK5bqr44CCXFxuQi4g5a+M5bKh5Z+65Zyw44CCXFxuQy4g6auY6ZuE5qmf5bug44CCXCIsXHJcbiAgICAgICAgXCJBLiDkuI3osrfnpajmkK3pnLjnjovou4rjgIJcXG5CLiDos7zosrflkIjkuY7ouqvliIbkuYvlhajnpajou4rnpajjgIJcXG5DLiDos7zosrfouqvliIbkuI3nrKbkuYvms5XlrprlhKrlvoXnpago5pWs6ICB56Wo5oiW5oSb5b+D56WoKeOAglwiLFxyXG4gICAgICAgIFwiQS4gNDAw6JCs5YWD44CCXFxuQi4gNjcw6JCs5YWD44CCXFxuQy4gMSwwMDDokKzlhYPjgIJcIixcclxuICAgICAgICBcIkEuIOWFp+aUv+mDqOitpuaUv+e9suOAglxcbkIuIOazleWLmemDqOefr+ato+e9suOAglxcbkMuIOazleWLmemDqOW7ieaUv+e9suOAglwiLFxyXG4gICAgICAgIFwiQS4g6Zqq6Zi744CB5bmz5a6J44CB5rOo5oSP5oWi6KGM44CCXFxuQi4g5bmz5a6J44CB6Zqq6Zi744CB5rOo5oSP5oWi6KGM44CCXFxuQy4g5bmz5a6J44CB5rOo5oSP5oWi6KGM44CB6Zqq6Zi744CCXCIsXHJcbiAgICBdXHJcbiAgICBoYXJkOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICBcIkEuIOS4jeihjO+8jOaHieadnOe1leS4gOWIh+WIqeebiui8uOmAgeihjOeCuuOAglxcbkIuIOWPr+S7pe+8jOS7peWQiOaWvOW4guWgtOihjOaDhei+pueQhuaOoeizvOWNs+WPr+OAglxcbkMuIOWOn+WJh+S4jeihjO+8jOS9huespuWQiOWIqeihneazleimj+Wumui+pueQhuS5i+aOoeizvOS4jeWcqOatpOmZkOOAglwiLFxyXG4gICAgICAgIFwiQS4gMTkyMuOAglxcbkIuIDE5MzPjgIJcXG5DLiAxOTk544CCXCIsXHJcbiAgICAgICAgXCJBLiBTTVPjgIJcXG5CLiBTT1PjgIJcXG5DLiBTQVPjgIJcIixcclxuICAgICAgICBcIkEuIDAyLTI4ODItNTI1MuOAglxcbkIuIDA4MDAtMjg2LTU4NijkvaDniIbmlpnvvIzmiJHniIbmlpkp44CCXFxuQy4gMDgwMC0xMjMtNDU244CCXCIsXHJcbiAgICAgICAgXCJBLiAzLDAwMOWFg+OAglxcbkIuIDUsMDAw5YWD44CCXFxuQy4gNiwwMDDlhYPjgIIgXCIsXHJcbiAgICAgICAgXCJBLiAz5pel44CCXFxuQi4gNeaXpeOAglxcbkMuIDfml6XjgIJcIixcclxuICAgICAgICBcIkEuIDQwMOiQrOWFg+OAglxcbkIuIDY3MOiQrOWFg+OAglxcbkMuIDEsMDAw6JCs5YWD44CCXCIsXHJcbiAgICAgICAgXCJBLiDmqqLmn6Xlr4Tku7bogIXnnJ/lgb3jgIJcXG5CLiDnm7TmjqXplovllZ/pg7Xku7botoXpgKPntZDlj4rpmYTku7bjgIJcXG5DLiDlr4TpgIHmqZ/mlY/kv6Hku7bpgb/lhY3mlLbku7bkurros4foqIrlpJbmtKnjgIJcIixcclxuICAgICAgICBcIkEuIDEw5pyIMTDml6XjgIJcXG5CLiAxMuaciDnml6XjgIJcXG5DLiAxMuaciDI15pel44CCXCIsXHJcbiAgICBdXHJcbn0iXX0=