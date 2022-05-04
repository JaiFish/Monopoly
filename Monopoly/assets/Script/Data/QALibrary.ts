export default class QALibrary {
    getQA = []
    constructor(level: number) {
        let libClass: lib = new lib()
        switch (level) {
            case 0: this.getQA = libClass.easy;
                break;
            case 1: this.getQA = libClass.normal;
                break;
            case 2: this.getQA = libClass.hard;
                break;
        }
    }
    returnQA(getCount: number) {
        let reQA = new Map<number, string>()
        for (let index = 0; index < getCount; index++) {
            let randomQA = Math.floor(Math.random() * this.getQA.length)
            let getIndex = index
            reQA.set(getIndex, this.getQA[randomQA])
            this.getQA.splice(randomQA, 1)//刪除第幾個物件,刪除數量
        }
        return reQA
    }
}
class lib {
    easy: [

    ]
    normal: [

    ]
    hard: [

    ]
}
