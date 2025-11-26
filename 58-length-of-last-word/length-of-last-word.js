/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  s = s.trim()
  let words = s.split(" ")
  return words[words.length - 1].length
}
