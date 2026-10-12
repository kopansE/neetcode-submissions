
class Solution {
    leastInterval(tasks: string[], n: number): number {
        const freq: number[] = new Array(26).fill(0);

        for (const ch of tasks) {
            freq[ch.charCodeAt(0) - 65]++;
        }

        const maxHeap = new MaxPriorityQueue(x => x[1]);

        for (let i = 0; i < 26; i++) {
            if (freq[i] > 0) {
                maxHeap.enqueue([String.fromCharCode(i + 65), freq[i]]);
            }
        }

        // [character, remaining count, available time]
        const waiting: [string, number, number][] = [];

        let time = 0;

        while (maxHeap.size() > 0 || waiting.length > 0) {

            // Release tasks whose cooldown has finished
            while (waiting.length > 0 && waiting[0][2] <= time) {
                const [ch, count] = waiting.shift()!;
                maxHeap.enqueue([ch, count]);
            }

            if (maxHeap.size() > 0) {
                const [ch, count] = maxHeap.dequeue();

                if (count > 1) {
                    waiting.push([ch, count - 1, time + n + 1]);
                }

                time++;
            } else {
                // No task is available: jump to the next release time
                time = waiting[0][2];
            }
        }

        return time;
    }
}
