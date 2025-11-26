/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
  let dummy = { next: head }
  let cur = dummy
  while (cur.next && cur.next.next) {
    let a = cur.next
    let b = cur.next.next
    cur.next = b
    a.next = b.next
    b.next = a
    cur = a
  }
  return dummy.next
}
