export class MyDelay {
    async setDelay(_num: number) {
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 1000 * _num);
        })
    }
}
