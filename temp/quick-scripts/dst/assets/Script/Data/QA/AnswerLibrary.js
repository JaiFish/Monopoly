
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/QA/AnswerLibrary.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6efb4fcRTVAELtjfktanNfs', 'AnswerLibrary');
// Script/Data/QA/AnswerLibrary.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnswerLib_strrary = /** @class */ (function () {
    function AnswerLib_strrary(level, qaLib_num) {
        this.answerLib_str = [];
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
            this.answerLib_str.push(this.lib[qaLib_num[index]]);
        }
    }
    return AnswerLib_strrary;
}());
exports.default = AnswerLib_strrary;
var lib = /** @class */ (function () {
    function lib() {
        this.easy = [
            "C. 陽光。",
            "B. 不可以。 ",
            "A. 帶回家裡使用。",
            "B. 依規定買車票。",
            "C. 法務部廉政署。",
            "C. 以上皆是。",
            "C. 政風單位。 ",
            "B. 1933。",
            "B. 告知警察或車站人員。",
        ];
        this.normal = [
            "B. 1933。",
            "C. 通霄。",
            "B. 0800-286-586。",
            "C. 9萬元。",
            "A. 扇形車庫。",
            "B. 購買合乎身分之全票車票。",
            "C. 1,000萬元。",
            "C. 法務部廉政署。",
            "A. 險阻、平安、注意慢行。",
        ];
        this.hard = [
            "C. 原則不行，但符合利衝法規定辦理之採購不在此限。",
            "B. 1933。",
            "A. SMS。",
            "B. 0800-286-586。",
            "A. 3,000元。",
            "A. 3日。",
            "C. 1,000萬元。",
            "B. 直接開啟郵件超連結及附件。  ",
            "B. 12月9日。",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxRQVxcQW5zd2VyTGlicmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBR0ksMkJBQVksS0FBYSxFQUFFLFNBQW1CO1FBRjlDLGtCQUFhLEdBQWEsRUFBRSxDQUFBO1FBQzVCLFFBQUcsR0FBYSxFQUFFLENBQUE7UUFFZCxJQUFJLFFBQVEsR0FBUSxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQzdCLFFBQVEsS0FBSyxFQUFFO1lBQ1gsS0FBSyxDQUFDO2dCQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQy9CLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUM3QixNQUFNO1NBQ2I7UUFDRCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDdEQ7SUFDTCxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBOztBQUNEO0lBQUE7UUFDSSxTQUFJLEdBQWE7WUFDYixRQUFRO1lBQ1IsVUFBVTtZQUNWLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtZQUNaLFVBQVU7WUFDVixXQUFXO1lBQ1gsVUFBVTtZQUNWLGVBQWU7U0FDbEIsQ0FBQTtRQUNELFdBQU0sR0FBYTtZQUNmLFVBQVU7WUFDVixRQUFRO1lBQ1Isa0JBQWtCO1lBQ2xCLFNBQVM7WUFDVCxVQUFVO1lBQ1YsaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYixZQUFZO1lBQ1osZ0JBQWdCO1NBQ25CLENBQUE7UUFDRCxTQUFJLEdBQWE7WUFDYiw0QkFBNEI7WUFDNUIsVUFBVTtZQUNWLFNBQVM7WUFDVCxrQkFBa0I7WUFDbEIsWUFBWTtZQUNaLFFBQVE7WUFDUixhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLFdBQVc7U0FDZCxDQUFBO0lBQ0wsQ0FBQztJQUFELFVBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5zd2VyTGliX3N0cnJhcnkge1xyXG4gICAgYW5zd2VyTGliX3N0cjogc3RyaW5nW10gPSBbXVxyXG4gICAgbGliOiBzdHJpbmdbXSA9IFtdXHJcbiAgICBjb25zdHJ1Y3RvcihsZXZlbDogbnVtYmVyLCBxYUxpYl9udW06IG51bWJlcltdKSB7XHJcbiAgICAgICAgbGV0IGxpYkNsYXNzOiBsaWIgPSBuZXcgbGliKClcclxuICAgICAgICBzd2l0Y2ggKGxldmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogdGhpcy5saWIgPSBsaWJDbGFzcy5lYXN5O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTogdGhpcy5saWIgPSBsaWJDbGFzcy5ub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOiB0aGlzLmxpYiA9IGxpYkNsYXNzLmhhcmQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHFhTGliX251bS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5hbnN3ZXJMaWJfc3RyLnB1c2godGhpcy5saWJbcWFMaWJfbnVtW2luZGV4XV0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmNsYXNzIGxpYiB7XHJcbiAgICBlYXN5OiBzdHJpbmdbXSA9IFtcclxuICAgICAgICBcIkMuIOmZveWFieOAglwiLFxyXG4gICAgICAgIFwiQi4g5LiN5Y+v5Lul44CCIFwiLFxyXG4gICAgICAgIFwiQS4g5bi25Zue5a626KOh5L2/55So44CCXCIsXHJcbiAgICAgICAgXCJCLiDkvp3opo/lrprosrfou4rnpajjgIJcIixcclxuICAgICAgICBcIkMuIOazleWLmemDqOW7ieaUv+e9suOAglwiLFxyXG4gICAgICAgIFwiQy4g5Lul5LiK55qG5piv44CCXCIsXHJcbiAgICAgICAgXCJDLiDmlL/poqjllq7kvY3jgIIgXCIsXHJcbiAgICAgICAgXCJCLiAxOTMz44CCXCIsXHJcbiAgICAgICAgXCJCLiDlkYrnn6Xorablr5/miJbou4rnq5nkurrlk6HjgIJcIixcclxuICAgIF1cclxuICAgIG5vcm1hbDogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgXCJCLiAxOTMz44CCXCIsXHJcbiAgICAgICAgXCJDLiDpgJrpnITjgIJcIixcclxuICAgICAgICBcIkIuIDA4MDAtMjg2LTU4NuOAglwiLFxyXG4gICAgICAgIFwiQy4gOeiQrOWFg+OAglwiLFxyXG4gICAgICAgIFwiQS4g5omH5b2i6LuK5bqr44CCXCIsXHJcbiAgICAgICAgXCJCLiDos7zosrflkIjkuY7ouqvliIbkuYvlhajnpajou4rnpajjgIJcIixcclxuICAgICAgICBcIkMuIDEsMDAw6JCs5YWD44CCXCIsXHJcbiAgICAgICAgXCJDLiDms5Xli5npg6jlu4nmlL/nvbLjgIJcIixcclxuICAgICAgICBcIkEuIOmaqumYu+OAgeW5s+WuieOAgeazqOaEj+aFouihjOOAglwiLFxyXG4gICAgXVxyXG4gICAgaGFyZDogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgXCJDLiDljp/liYfkuI3ooYzvvIzkvYbnrKblkIjliKnooZ3ms5Xopo/lrprovqbnkIbkuYvmjqHos7zkuI3lnKjmraTpmZDjgIJcIixcclxuICAgICAgICBcIkIuIDE5MzPjgIJcIixcclxuICAgICAgICBcIkEuIFNNU+OAglwiLFxyXG4gICAgICAgIFwiQi4gMDgwMC0yODYtNTg244CCXCIsXHJcbiAgICAgICAgXCJBLiAzLDAwMOWFg+OAglwiLFxyXG4gICAgICAgIFwiQS4gM+aXpeOAglwiLFxyXG4gICAgICAgIFwiQy4gMSwwMDDokKzlhYPjgIJcIixcclxuICAgICAgICBcIkIuIOebtOaOpemWi+WVn+mDteS7tui2hemAo+e1kOWPiumZhOS7tuOAgiAgXCIsXHJcbiAgICAgICAgXCJCLiAxMuaciDnml6XjgIJcIixcclxuICAgIF1cclxufSJdfQ==