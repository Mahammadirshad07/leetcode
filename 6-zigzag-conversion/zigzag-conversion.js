/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  if (numRows === 1) return s
  let rows = Array(numRows).fill("")
  let i = 0, step = 1
  for (let c of s) {
    rows[i] += c
    if (i === 0) step = 1
    else if (i === numRows - 1) step = -1
    i += step
  }
  return rows.join("")
}
