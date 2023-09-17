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
function reverseList(head: ListNode | null): ListNode | null {
    let currPtr: ListNode | null = head;
    let tmp: ListNode | null = null;
    let prevPtr: ListNode | null = null;

    while (currPtr) {
        tmp = currPtr.next;
        currPtr.next = prevPtr;
        prevPtr = currPtr;
        currPtr = tmp;
    }
    return prevPtr;
}