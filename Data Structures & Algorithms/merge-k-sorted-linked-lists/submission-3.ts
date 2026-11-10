/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        if(lists.length === 0) return null;

        const heap = new MinPriorityQueue((x)=>x.val);
        for(let list of lists){
            if(!list) continue;
            heap.enqueue(list);
            list = list.next;
        }

        let res = new ListNode();
        let curr = res;
        while(heap.size() > 0){
            let node = heap.dequeue();
            curr.next = node;
            curr = curr.next;

            node = node.next;
            if(node) heap.enqueue(node);
        }

        return res.next;
    }
}
