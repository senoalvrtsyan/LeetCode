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

function isPalindrome(head: ListNode | null): boolean {
    let count = 0;
    let tmp: ListNode | null = head;
    while (tmp !== null) {
        count++;
        tmp = tmp.next;
    }

    const vals: number[] = [];
    tmp = head;
    for (let i = 0; i < Math.floor(count / 2); i++) {
        vals.push(tmp!.val);
        tmp = tmp!.next;
    }

    if (count % 2 !== 0) {
        tmp = tmp!.next;
    }

    while (tmp !== null) {
        if (vals.pop() !== tmp.val) {
            return false;
        }
        tmp = tmp.next;
    }

    return true;
}