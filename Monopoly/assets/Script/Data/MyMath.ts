class MyMath {
    /**
    * 加法
    */
    add(value1: number, value2: number, lenght?: number) {
        return Math.round(value1 * 1000 + value2 * 1000) / 1000
    }
    /**
   * 減法
   */
    minus(value1: number, value2: number, lenght?: number) {
        return ((value1 * 1000) - (value2 * 1000)) / 1000
    }
    /**
   * 乘法
   */
    multiply(value1: number, value2: number, lenght?: number) {
        return Math.round(value1 * 1000 * (value2 * 1000)) / Math.pow(1000, 2)
    }
    /**
   * 除法
   */
    divide(value1: number, value2: number, lenght?: number) {
        return value1 * 1000 / (value2 * 1000)
    }
    round(value: number, length: number = 4): number {

        let val = value

        let split = val.toString().split('.')

        if (split.length > 1 && split[1].length > length) {
            return Number(val.toPrecision(split[0].length + length));
        }
        else return value
    }
}
export default new MyMath();