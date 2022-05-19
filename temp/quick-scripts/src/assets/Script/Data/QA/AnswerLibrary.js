"use strict";
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