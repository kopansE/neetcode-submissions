class Solution {
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);
        }

        // 1. Sparse bucket array - don't allocate sub-arrays yet
        const buckets: number[][] = new Array(nums.length + 1);

        // 2. Fast Map iteration; only allocate sub-arrays for non-empty frequencies
        freqMap.forEach((freq, num) => {
            if (!buckets[freq]) buckets[freq] = [];
            buckets[freq].push(num);
        });

        const result: number[] = [];

        // 3. Gather top K
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            if (buckets[i]) {
                const list = buckets[i];
                for (let j = 0; j < list.length; j++) {
                    result.push(list[j]);
                    if (result.length === k) return result;
                }
            }
        }

        return result;
    }
}