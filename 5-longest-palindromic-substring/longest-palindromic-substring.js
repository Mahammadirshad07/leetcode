/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  if (s.length < 2) return s
  let res = ""
  function expand(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--
      r++
    }
    return s.slice(l + 1, r)
  }
  for (let i = 0; i < s.length; i++) {
    let p1 = expand(i, i)
    if (p1.length > res.length) res = p1
    let p2 = expand(i, i + 1)
    if (p2.length > res.length) res = p2
  }
  return res
}
