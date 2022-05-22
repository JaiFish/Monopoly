export default class QALibrary {
    qaLib_num: number[] = [];
    qaLib_str: string[] = [];
    url: string = "https://docs.google.com/spreadsheets/d/1fbzCyt95TSj1nbzuwHgFHyImxNJISVFvs6BuiE-BO70/edit#gid=131335285"
    lib: string[] = []
    constructor(level: number, getCount: number) {
        let libClass: lib = new lib()
        console.log("創立");
        
        switch (level) {
            case 0: this.lib = libClass.easy;
                break;
            case 1: this.lib = libClass.normal;
                break;
            case 2: this.lib = libClass.hard;
                break;
        }


        // ex:8_「聯合國國際反貪日」是哪一天？"　轉換成這樣比較好切割與知道題目標號
        for (let index = 0; index < this.lib.length; index++) {
            this.lib[index] = String(index) + "_" + this.lib[index]
        }

        console.log(this.lib);
        for (let index = 0; index < getCount; index++) {
            let randomQA = Math.floor(Math.random() * this.lib.length)
            let formatStr = this.lib[randomQA].split('_')
            this.qaLib_str.push(formatStr[1])
            this.qaLib_num.push(Number(formatStr[0]))
            this.lib.splice(randomQA, 1)//刪除第幾個物件,刪除數量
        }
        console.log();

    }
}
class lib {
    easy: string[] = [
        "□□是最佳的防腐劑，請問□□應填入什麼？",
        "若個人物品不慎掉落軌道，是否可以自行跳下軌道撿拾？",
        "搭乘火車時撿到乘客遺失的手機，下列何種處理方式是錯誤的？",
        "小明連假期間想搭車去臺東遊玩，以下何種行為是正確的？",
        "我國於100年7月20日成立什麼機關，專責國家廉政政策規劃，執行防貪、反貪及肅貪業務？",
        "疫情期間，以下哪種搭車方式可以有效保護自己和其他乘客？",
        "若發現公務人員有貪污不法情形，可以向哪個單位檢舉?",
        "臺鐵的緊急通報電話為何？",
        "在車站角落發現1個行李箱，超過1小時沒人管，請問應如何處理？",
    ]
    normal: string[] = [
        "臺鐵的緊急通報電話為何？",
        "請問下列哪一車站沒有牛眼窗設計？",
        "請問下列哪一支電話為法務部廉政署檢舉電話？",
        "請問當平交道警鈴響起，閃光號誌閃亮，開車誤闖平交道，最高可罰款新臺幣多少元？",
        "火車頭旅館，是臺鐵的什麼設施？",
        "小明是大學生，連假期間想搭車去臺東遊玩，以下何種購票方式是正確的？",
        "依據「獎勵保護檢舉貪污瀆職辦法」規定，舉發貪瀆經法院判決有罪者，法務部將視法院判決情形發給檢舉獎金，其金額最少新臺幣30萬元，最高可達多少元？",
        "我國於100年7月20日成立什麼機關，專責國家廉政政策規劃，執行防貪、反貪及肅貪業務？",
        "紅旗舉起來，綠旗放下來，這些旗子代表什麼意思？",
    ]
    hard: string[] = [
        "採購主管是否得逕於配偶之兄長開設之文具店採購文具？",
        "臺鐵的緊急通報電話為何？",
        "臺鐵導入的「安全管理系統」英文縮寫為何？",
        "請問下列哪一支電話為法務部廉政署檢舉電話？",
        "依據「公務員廉政倫理規範」，「正常社交禮俗標準」係指一般人社交往來，市價不超過新臺幣多少元？",
        "公務員遇有請託關說時，應於幾日內簽報其長官並知會政風機構？",
        "依據「獎勵保護檢舉貪污瀆職辦法」規定，舉發貪瀆經法院判決有罪者，法務部將視法院判決情形發給檢舉獎金，其金額最少新臺幣30萬元，最高可達多少元？",
        "為避免公務機密或個資洩漏，下列何者「不是」使用電子郵件時應有的好習慣？",
        "「聯合國國際反貪日」是哪一天？",
    ]
}
