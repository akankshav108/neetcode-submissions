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
     * @return {ListNode}
     */
    reverseList(head) {
      let node = head;
      let prev = null;
      let next;

    while (node !== null) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }

      return prev
      
    }
}
