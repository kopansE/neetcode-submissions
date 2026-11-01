class Solution {
    maxSlidingWindow(nums: number[], k: number): number[] {
        if (k === 1) return nums;

        const deque: number[] = []; // Stores indices
        const res: number[] = [];

        let head = 0;

        for (let i = 0; i < nums.length; i++) {

            // 1. Remove expired indices from the front
            if (head < deque.length && deque[head] <= i - k) {
                head++;
            }

            // 2. Remove smaller elements from the back
            while (
                deque.length > head &&
                nums[deque[deque.length - 1]] <= nums[i]
            ) {
                deque.pop();
            }

            // 3. Add current index
            deque.push(i);

            // 4. Get maximum when window is complete
            if (i >= k - 1) {
                res.push(nums[deque[head]]);
            }
        }

        return res;
    }
}