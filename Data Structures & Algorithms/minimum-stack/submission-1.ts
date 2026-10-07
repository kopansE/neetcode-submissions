class MinStack {
    private actualStack : number[];
    private minStack : number[];
    constructor() {
        this.actualStack = [];
        this.minStack = [];

    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.actualStack.push(val);
        const minTop = this.minStack[this.minStack.length - 1];
        if (this.minStack.length === 0 || val <= minTop) {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        if(this.actualStack.length === 0)
            return;
        if(this.actualStack[this.actualStack.length-1] === this.minStack[this.minStack.length-1]){
            this.minStack.pop();
        }
        this.actualStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.actualStack[this.actualStack.length-1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length-1];
    }
}
