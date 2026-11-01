class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const deque: number[] = []; // Stores indices
        const res: number[] = [];

        for (let i = 0; i < nums.length; i++) {

            // 1. Remove indices outside the current window
            if (deque.length > 0 && deque[0] <= i - k) {
                deque.shift();
            }

            // 2. Remove smaller elements from the back
            while (
                deque.length > 0 &&
                nums[deque[deque.length - 1]] < nums[i]
            ) {
                deque.pop();
            }

            // 3. Add current index
            deque.push(i);

            // 4. Record maximum once the first window is complete
            if (i >= k - 1) {
                res.push(nums[deque[0]]);
            }
        }

        return res;
    }
}