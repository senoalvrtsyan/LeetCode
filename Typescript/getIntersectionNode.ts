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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let itA: ListNode | null = headA;
    let itB: ListNode | null = headB;

    while (itA !== itB) {
        itA = !itA ? headB : itA.next;
        itB = !itB ? headA : itB.next;
    }

    return itA;
}