
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/QA/QALibrary.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7031mGES5N/Ka0LpUmlVwL', 'QALibrary');
// Script/Data/QA/QALibrary.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QALibrary = /** @class */ (function () {
    function QALibrary(level, getCount) {
        this.qaLib_num = [];
        this.qaLib_str = [];
        this.url = "https://docs.google.com/spreadsheets/d/1fbzCyt95TSj1nbzuwHgFHyImxNJISVFvs6BuiE-BO70/edit#gid=131335285";
        this.lib = [];
        var libClass = new lib();
        // console.log("創立");
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
        // ex:8_「聯合國國際反貪日」是哪一天？"　轉換成這樣比較好切割與知道題目標號
        for (var index = 0; index < this.lib.length; index++) {
            this.lib[index] = String(index) + "_" + this.lib[index];
        }
        // console.log(this.lib);
        for (var index = 0; index < getCount; index++) {
            var randomQA = Math.floor(Math.random() * this.lib.length);
            var formatStr = this.lib[randomQA].split('_');
            this.qaLib_str.push(formatStr[1]);
            this.qaLib_num.push(Number(formatStr[0]));
            this.lib.splice(randomQA, 1); //刪除第幾個物件,刪除數量
        }
    }
    return QALibrary;
}());
exports.default = QALibrary;
var lib = /** @class */ (function () {
    function lib() {
        this.easy = [
            "□□是最佳的防腐劑，請問□□應填入什麼？",
            "若個人物品不慎掉落軌道，是否可以自行跳下軌道撿拾？",
            "搭乘火車時撿到乘客遺失的手機，下列何種處理方式是錯誤的？",
            "小明連假期間想搭車去臺東遊玩，以下何種行為是正確的？",
            "我國於100年7月20日成立什麼機關，專責國家廉政政策規劃，執行防貪、反貪及肅貪業務？",
            "疫情期間，以下哪種搭車方式可以有效保護自己和其他乘客？",
            "若發現公務人員有貪污不法情形，可以向哪個單位檢舉?",
            "臺鐵的緊急通報電話為何？",
            "在車站角落發現1個行李箱，超過1小時沒人管，請問應如何處理？",
        ];
        this.normal = [
            "臺鐵的緊急通報電話為何？",
            "請問下列哪一車站沒有牛眼窗設計？",
            "請問下列哪一支電話為法務部廉政署檢舉電話？",
            "請問當平交道警鈴響起，閃光號誌閃亮，開車誤闖平交道，最高可罰款新臺幣多少元？",
            "火車頭旅館，是臺鐵的什麼設施？",
            "小明是大學生，連假期間想搭車去臺東遊玩，以下何種購票方式是正確的？",
            "依據「獎勵保護檢舉貪污瀆職辦法」規定，舉發貪瀆經法院判決有罪者，法務部將視法院判決情形發給檢舉獎金，其金額最少新臺幣30萬元，最高可達多少元？",
            "我國於100年7月20日成立什麼機關，專責國家廉政政策規劃，執行防貪、反貪及肅貪業務？",
            "紅旗舉起來，綠旗放下來，這些旗子代表什麼意思？",
        ];
        this.hard = [
            "採購主管是否得逕於配偶之兄長開設之文具店採購文具？",
            "臺鐵的緊急通報電話為何？",
            "臺鐵導入的「安全管理系統」英文縮寫為何？",
            "請問下列哪一支電話為法務部廉政署檢舉電話？",
            "依據「公務員廉政倫理規範」，「正常社交禮俗標準」係指一般人社交往來，市價不超過新臺幣多少元？",
            "公務員遇有請託關說時，應於幾日內簽報其長官並知會政風機構？",
            "依據「獎勵保護檢舉貪污瀆職辦法」規定，舉發貪瀆經法院判決有罪者，法務部將視法院判決情形發給檢舉獎金，其金額最少新臺幣30萬元，最高可達多少元？",
            "為避免公務機密或個資洩漏，下列何者「不是」使用電子郵件時應有的好習慣？",
            "「聯合國國際反貪日」是哪一天？",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxRQVxcUUFMaWJyYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFLSSxtQkFBWSxLQUFhLEVBQUUsUUFBZ0I7UUFKM0MsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLFFBQUcsR0FBVyx3R0FBd0csQ0FBQTtRQUN0SCxRQUFHLEdBQWEsRUFBRSxDQUFBO1FBRWQsSUFBSSxRQUFRLEdBQVEsSUFBSSxHQUFHLEVBQUUsQ0FBQTtRQUM3QixxQkFBcUI7UUFFckIsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLENBQUM7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUM3QixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDL0IsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLE1BQU07U0FDYjtRQUdELDBDQUEwQztRQUMxQyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDMUQ7UUFFRCx5QkFBeUI7UUFDekIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMzQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzFELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFBLGNBQWM7U0FDN0M7SUFFTCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBOztBQUNEO0lBQUE7UUFDSSxTQUFJLEdBQWE7WUFDYixzQkFBc0I7WUFDdEIsMkJBQTJCO1lBQzNCLDhCQUE4QjtZQUM5Qiw0QkFBNEI7WUFDNUIsNkNBQTZDO1lBQzdDLDZCQUE2QjtZQUM3QiwyQkFBMkI7WUFDM0IsY0FBYztZQUNkLGdDQUFnQztTQUNuQyxDQUFBO1FBQ0QsV0FBTSxHQUFhO1lBQ2YsY0FBYztZQUNkLGtCQUFrQjtZQUNsQix1QkFBdUI7WUFDdkIsd0NBQXdDO1lBQ3hDLGlCQUFpQjtZQUNqQixtQ0FBbUM7WUFDbkMseUVBQXlFO1lBQ3pFLDZDQUE2QztZQUM3Qyx5QkFBeUI7U0FDNUIsQ0FBQTtRQUNELFNBQUksR0FBYTtZQUNiLDJCQUEyQjtZQUMzQixjQUFjO1lBQ2Qsc0JBQXNCO1lBQ3RCLHVCQUF1QjtZQUN2QixnREFBZ0Q7WUFDaEQsK0JBQStCO1lBQy9CLHlFQUF5RTtZQUN6RSxxQ0FBcUM7WUFDckMsaUJBQWlCO1NBQ3BCLENBQUE7SUFDTCxDQUFDO0lBQUQsVUFBQztBQUFELENBbENBLEFBa0NDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBRQUxpYnJhcnkge1xyXG4gICAgcWFMaWJfbnVtOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgcWFMaWJfc3RyOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgdXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kLzFmYnpDeXQ5NVRTajFuYnp1d0hnRkh5SW14TkpJU1ZGdnM2QnVpRS1CTzcwL2VkaXQjZ2lkPTEzMTMzNTI4NVwiXHJcbiAgICBsaWI6IHN0cmluZ1tdID0gW11cclxuICAgIGNvbnN0cnVjdG9yKGxldmVsOiBudW1iZXIsIGdldENvdW50OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgbGliQ2xhc3M6IGxpYiA9IG5ldyBsaWIoKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5Ym156uLXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAobGV2ZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiB0aGlzLmxpYiA9IGxpYkNsYXNzLmVhc3k7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOiB0aGlzLmxpYiA9IGxpYkNsYXNzLm5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6IHRoaXMubGliID0gbGliQ2xhc3MuaGFyZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIGV4Ojhf44CM6IGv5ZCI5ZyL5ZyL6Zqb5Y+N6LKq5pel44CN5piv5ZOq5LiA5aSp77yfXCLjgIDovYnmj5vmiJDpgJnmqKPmr5TovIPlpb3liIflibLoiIfnn6XpgZPpoYznm67mqJnomZ9cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5saWIubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGliW2luZGV4XSA9IFN0cmluZyhpbmRleCkgKyBcIl9cIiArIHRoaXMubGliW2luZGV4XVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5saWIpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBnZXRDb3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tUUEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpYi5sZW5ndGgpXHJcbiAgICAgICAgICAgIGxldCBmb3JtYXRTdHIgPSB0aGlzLmxpYltyYW5kb21RQV0uc3BsaXQoJ18nKVxyXG4gICAgICAgICAgICB0aGlzLnFhTGliX3N0ci5wdXNoKGZvcm1hdFN0clsxXSlcclxuICAgICAgICAgICAgdGhpcy5xYUxpYl9udW0ucHVzaChOdW1iZXIoZm9ybWF0U3RyWzBdKSlcclxuICAgICAgICAgICAgdGhpcy5saWIuc3BsaWNlKHJhbmRvbVFBLCAxKS8v5Yiq6Zmk56ys5bm+5YCL54mp5Lu2LOWIqumZpOaVuOmHj1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuY2xhc3MgbGliIHtcclxuICAgIGVhc3k6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgIFwi4pah4pah5piv5pyA5L2z55qE6Ziy6IWQ5YqR77yM6KuL5ZWP4pah4pah5oeJ5aGr5YWl5LuA6bq877yfXCIsXHJcbiAgICAgICAgXCLoi6XlgIvkurrnianlk4HkuI3mhY7mjonokL3ou4zpgZPvvIzmmK/lkKblj6/ku6Xoh6rooYzot7PkuIvou4zpgZPmkr/mi77vvJ9cIixcclxuICAgICAgICBcIuaQreS5mOeBq+i7iuaZguaSv+WIsOS5mOWuoumBuuWkseeahOaJi+apn++8jOS4i+WIl+S9leeoruiZleeQhuaWueW8j+aYr+mMr+iqpOeahO+8n1wiLFxyXG4gICAgICAgIFwi5bCP5piO6YCj5YGH5pyf6ZaT5oOz5pCt6LuK5Y676Ie65p2x6YGK546p77yM5Lul5LiL5L2V56iu6KGM54K65piv5q2j56K655qE77yfXCIsXHJcbiAgICAgICAgXCLmiJHlnIvmlrwxMDDlubQ35pyIMjDml6XmiJDnq4vku4DpurzmqZ/pl5zvvIzlsIjosqzlnIvlrrblu4nmlL/mlL/nrZbopo/lioPvvIzln7fooYzpmLLosqrjgIHlj43osqrlj4rogoXosqrmpa3li5nvvJ9cIixcclxuICAgICAgICBcIueWq+aDheacn+mWk++8jOS7peS4i+WTqueoruaQrei7iuaWueW8j+WPr+S7peacieaViOS/neitt+iHquW3seWSjOWFtuS7luS5mOWuou+8n1wiLFxyXG4gICAgICAgIFwi6Iul55m854++5YWs5YuZ5Lq65ZOh5pyJ6LKq5rGh5LiN5rOV5oOF5b2i77yM5Y+v5Lul5ZCR5ZOq5YCL5Zau5L2N5qqi6IiJP1wiLFxyXG4gICAgICAgIFwi6Ie66ZC155qE57eK5oCl6YCa5aCx6Zu76Kmx54K65L2V77yfXCIsXHJcbiAgICAgICAgXCLlnKjou4rnq5nop5LokL3nmbznj74x5YCL6KGM5p2O566x77yM6LaF6YGOMeWwj+aZguaykuS6uueuoe+8jOiri+WVj+aHieWmguS9leiZleeQhu+8n1wiLFxyXG4gICAgXVxyXG4gICAgbm9ybWFsOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICBcIuiHuumQteeahOe3iuaApemAmuWgsembu+ipseeCuuS9le+8n1wiLFxyXG4gICAgICAgIFwi6KuL5ZWP5LiL5YiX5ZOq5LiA6LuK56uZ5rKS5pyJ54mb55y856qX6Kit6KiI77yfXCIsXHJcbiAgICAgICAgXCLoq4vllY/kuIvliJflk6rkuIDmlK/pm7voqbHngrrms5Xli5npg6jlu4nmlL/nvbLmqqLoiInpm7voqbHvvJ9cIixcclxuICAgICAgICBcIuiri+WVj+eVtuW5s+S6pOmBk+itpumItOmfv+i1t++8jOmWg+WFieiZn+iqjOmWg+S6ru+8jOmWi+i7iuiqpOmXluW5s+S6pOmBk++8jOacgOmrmOWPr+e9sOasvuaWsOiHuuW5o+WkmuWwkeWFg++8n1wiLFxyXG4gICAgICAgIFwi54Gr6LuK6aCt5peF6aSo77yM5piv6Ie66ZC155qE5LuA6bq86Kit5pa977yfXCIsXHJcbiAgICAgICAgXCLlsI/mmI7mmK/lpKflrbjnlJ/vvIzpgKPlgYfmnJ/plpPmg7PmkK3ou4rljrvoh7rmnbHpgYrnjqnvvIzku6XkuIvkvZXnqK7os7znpajmlrnlvI/mmK/mraPnorrnmoTvvJ9cIixcclxuICAgICAgICBcIuS+neaTmuOAjOeNjuWLteS/neitt+aqouiIieiyquaxoeeAhuiBt+i+puazleOAjeimj+Wumu+8jOiIieeZvOiyqueAhue2k+azlemZouWIpOaxuuaciee9quiAhe+8jOazleWLmemDqOWwh+imluazlemZouWIpOaxuuaDheW9oueZvOe1puaqouiIieeNjumHke+8jOWFtumHkemhjeacgOWwkeaWsOiHuuW5ozMw6JCs5YWD77yM5pyA6auY5Y+v6YGU5aSa5bCR5YWD77yfXCIsXHJcbiAgICAgICAgXCLmiJHlnIvmlrwxMDDlubQ35pyIMjDml6XmiJDnq4vku4DpurzmqZ/pl5zvvIzlsIjosqzlnIvlrrblu4nmlL/mlL/nrZbopo/lioPvvIzln7fooYzpmLLosqrjgIHlj43osqrlj4rogoXosqrmpa3li5nvvJ9cIixcclxuICAgICAgICBcIue0heaXl+iIiei1t+S+hu+8jOe2oOaXl+aUvuS4i+S+hu+8jOmAmeS6m+aXl+WtkOS7o+ihqOS7gOm6vOaEj+aAne+8n1wiLFxyXG4gICAgXVxyXG4gICAgaGFyZDogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgXCLmjqHos7zkuLvnrqHmmK/lkKblvpfpgJXmlrzphY3lgbbkuYvlhYTplbfplovoqK3kuYvmloflhbflupfmjqHos7zmloflhbfvvJ9cIixcclxuICAgICAgICBcIuiHuumQteeahOe3iuaApemAmuWgsembu+ipseeCuuS9le+8n1wiLFxyXG4gICAgICAgIFwi6Ie66ZC15bCO5YWl55qE44CM5a6J5YWo566h55CG57O757Wx44CN6Iux5paH57iu5a+r54K65L2V77yfXCIsXHJcbiAgICAgICAgXCLoq4vllY/kuIvliJflk6rkuIDmlK/pm7voqbHngrrms5Xli5npg6jlu4nmlL/nvbLmqqLoiInpm7voqbHvvJ9cIixcclxuICAgICAgICBcIuS+neaTmuOAjOWFrOWLmeWToeW7ieaUv+WAq+eQhuimj+evhOOAje+8jOOAjOato+W4uOekvuS6pOemruS/l+aomea6luOAjeS/guaMh+S4gOiIrOS6uuekvuS6pOW+gOS+hu+8jOW4guWDueS4jei2hemBjuaWsOiHuuW5o+WkmuWwkeWFg++8n1wiLFxyXG4gICAgICAgIFwi5YWs5YuZ5ZOh6YGH5pyJ6KuL6KiX6Zec6Kqq5pmC77yM5oeJ5pa85bm+5pel5YWn57C95aCx5YW26ZW35a6Y5Lim55+l5pyD5pS/6aKo5qmf5qeL77yfXCIsXHJcbiAgICAgICAgXCLkvp3mk5rjgIznjY7li7Xkv53orbfmqqLoiInosqrmsaHngIbogbfovqbms5XjgI3opo/lrprvvIzoiInnmbzosqrngIbntpPms5XpmaLliKTmsbrmnInnvarogIXvvIzms5Xli5npg6jlsIfoppbms5XpmaLliKTmsbrmg4XlvaLnmbzntabmqqLoiInnjY7ph5HvvIzlhbbph5HpoY3mnIDlsJHmlrDoh7rluaMzMOiQrOWFg++8jOacgOmrmOWPr+mBlOWkmuWwkeWFg++8n1wiLFxyXG4gICAgICAgIFwi54K66YG/5YWN5YWs5YuZ5qmf5a+G5oiW5YCL6LOH5rSp5ryP77yM5LiL5YiX5L2V6ICF44CM5LiN5piv44CN5L2/55So6Zu75a2Q6YO15Lu25pmC5oeJ5pyJ55qE5aW957+S5oWj77yfXCIsXHJcbiAgICAgICAgXCLjgIzoga/lkIjlnIvlnIvpmpvlj43osqrml6XjgI3mmK/lk6rkuIDlpKnvvJ9cIixcclxuICAgIF1cclxufVxyXG4iXX0=