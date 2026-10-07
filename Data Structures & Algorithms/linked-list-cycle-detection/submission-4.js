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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if(head === null || head.next === null || head.next.next === null){
            return false;
        }

        let fast = head.next.next;
        let slow = head.next;

        while(fast && fast.next ){
            fast = fast.next.next;
            slow = slow.next;

            if(fast === slow)
                return true;
        }

        return false
    }
}
