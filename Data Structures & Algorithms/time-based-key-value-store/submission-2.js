class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push([value, timestamp]);
    }

    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";

        const arr = this.keyStore.get(key);

        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i][1] <= timestamp) {
                return arr[i][0];
            }
        }

        return "";
    }
}
