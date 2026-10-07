class MinStack {

  constructor() {
    this.minStack = [];
    this.regularStack = [];
  }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.regularStack.push(val);
        
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }

    return null;
  }

    /**
     * @return {void}
     */
    pop() {
        if(this.regularStack.length === 0)
            return;
        if(this.regularStack[this.regularStack.length-1] === this.minStack[this.minStack.length-1])
             this.minStack.pop();
        this.regularStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        if(this.regularStack.length === 0)
            return;
        return this.regularStack[this.regularStack.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        if(this.minStack.length === 0)
            return;
        return this.minStack[this.minStack.length-1];
    }
}
