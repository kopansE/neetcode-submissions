class LRUCache {
    /**
     * @param {number} capacity
     */
    private map = new Map<number, number>();
    private capacity : number;
    constructor(capacity: number) {
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if(!this.map.has(key)) return -1;

        const val = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, val);

        return val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if(this.map.has(key)) this.map.delete(key); //remove the previous key-value (frees up the occupied space)

        this.map.set(key,value); // sets the new pair as most recently used

        if(this.map.size > this.capacity){ // check we dont exceed capacity
            const toRemove = this.map.keys().next().value;
            this.map.delete(toRemove);
        }
    }
}
