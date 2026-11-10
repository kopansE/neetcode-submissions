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
        const heap = new MinPriorityQueue();
        for(let i=0; i<lists.length;i++){
            while(lists[i]){
                heap.enqueue(lists[i].val);
                lists[i] = lists[i].next;
            }
        }
        let res = new ListNode();
        const dummy = res;

        while(heap.size()>0){
            const node = new ListNode(heap.dequeue());
            res.next = node;
            res = res.next;
        }
        return dummy.next;
    }
}
