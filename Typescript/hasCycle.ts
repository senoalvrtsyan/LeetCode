/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    let it1: ListNode | null = head;
    let it2: ListNode | null = head;

    while (it1 && it2 && it2.next) {
        it1 = it1.next;
        it2 = it2.next.next;
        if (it1 === it2) {
            return true;
        }
    }

    return false;
};