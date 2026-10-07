class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([value,timestamp]); // [alice:["happy,1"]]
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key))
            return "";
        const arr = this.keyStore.get(key); //[]

        for(let i=arr.length-1;i>=0;i--){
            if(timestamp>=arr[i][1])
                return arr[i][0];
        } 
        return "";
    }

}
