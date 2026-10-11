class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if (nums.length === 1) return nums[0];

    // plain House Robber on a straight line
    const robLine = (houses: number[]): number => {
        let prev2 = 0; // best total up to two houses back
        let prev1 = 0; // best total up to the previous house
        for (const money of houses) {
            const curr = Math.max(prev1, prev2 + money); // skip this house, or rob it
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    };

    return Math.max(
        robLine(nums.slice(0, -1)), // skip last house
        robLine(nums.slice(1))      // skip first house
    );
    }
}
