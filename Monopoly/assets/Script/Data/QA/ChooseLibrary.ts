export default class ChooseLibrary {

    chooseLib: string[] = []
    lib: string[] = []
    constructor(level: number, qaLib_num: number[]) {
        let libClass: lib = new lib()
        switch (level) {
            case 0: this.lib = libClass.easy;
                break;
            case 1: this.lib = libClass.normal;
                break;
            case 2: this.lib = libClass.hard;
                break;
        }
        for (let index = 0; index < qaLib_num.length; index++) {
            this.chooseLib.push(this.lib[qaLib_num[index]])
        }
    }
}
class lib {
    easy: string[] = [
        "A. 星星。\n\rB. 月亮。\n\rC. 陽光。 ",
        "A. 可以。\n\rB. 不可以。\n\rC. 視情況而定。",
        "A. 帶回家裡使用。\n\rB. 交給列車長。\n\rC. 交給車站人員。",
        "A. 不買票搭霸王車。\n\rB. 依規定買車票。\n\rC. 買身分不符的法定優待票。",
        "A. 內政部警政署。\n\rB. 法務部矯正署。\n\rC. 法務部廉政署。 ",
        "A. 配戴口罩。\n\rB. 配合量測體溫。\n\rC. 以上皆是。 ",
        "A. 人事單位。\n\rB. 會計單位。\n\rC. 政風單位。 ",
        "A. 1922。\n\rB. 1933。\n\rC. 1999。 ",
        "A. 直接拿起來交給警察。\n\rB. 告知警察或車站人員。\n\rC. 不管他。",
    ]
    normal: string[] = [
        "A. 1922。\n\rB. 1933。\n\rC. 1999。 ",
        "A. 日南。\n\rB. 談文。\n\rC. 通霄。",
        "A. 02-2882-5252。\n\rB. 0800-286-586(你爆料，我爆料)。\n\rC. 0800-123-456。",
        "A. 1萬元。\n\rB. 5萬元。\n\rC. 9萬元。",
        "A. 扇形車庫。\n\rB. 富岡基地。\n\rC. 高雄機廠。",
        "A. 不買票搭霸王車。\n\rB. 購買合乎身分之全票車票。\n\rC. 購買身分不符之法定優待票(敬老票或愛心票)。",
        "A. 400萬元。\n\rB. 670萬元。\n\rC. 1,000萬元。",
        "A. 內政部警政署。\n\rB. 法務部矯正署。\n\rC. 法務部廉政署。",
        "A. 險阻、平安、注意慢行。\n\rB. 平安、險阻、注意慢行。\n\rC. 平安、注意慢行、險阻。",
    ]
    hard: string[] = [
        "A. 不行，應杜絕一切利益輸送行為。\n\rB. 可以，以合於市場行情辦理採購即可。\n\rC. 原則不行，但符合利衝法規定辦理之採購不在此限。",
        "A. 1922。\n\rB. 1933。\n\rC. 1999。 ",
        "A. SMS。\n\rB. SOS。\n\rC. SAS。 ",
        "A. 02-2882-5252。\n\rB. 0800-286-586(你爆料，我爆料)。\n\rC. 0800-123-456。",
        "A. 3,000元。\n\rB. 5,000元。\n\rC. 6,000元。 ",
        "A. 3日。\n\rB. 5日。\n\rC. 7日。",
        "A. 400萬元。\n\rB. 670萬元。\n\rC. 1,000萬元。",
        "A. 檢查寄件者真偽。\n\rB. 直接開啟郵件超連結及附件。\n\rC. 寄送機敏信件避免收件人資訊外洩。",
        "A. 10月10日。\n\rB. 12月9日。\n\rC. 12月25日。",
    ]
}