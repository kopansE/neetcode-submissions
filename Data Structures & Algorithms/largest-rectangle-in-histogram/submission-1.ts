class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
    const n = heights.length;
    const stack: number[] = []; // indices, heights increasing from bottom to top
    let max = 0;

    for (let i = 0; i <= n; i++) {
        const h = i === n ? 0 : heights[i]; // a final 0 flushes the stack
        while (stack.length && heights[stack[stack.length - 1]] >= h) {
            const height = heights[stack.pop()!];
            const left = stack.length ? stack[stack.length - 1] + 1 : 0;
            max = Math.max(max, height * (i - left));
        }
        stack.push(i);
    }
    return max;
}
}
