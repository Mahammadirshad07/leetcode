/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let l = 0, r = height.length - 1, max = 0
  while (l < r) {
    let h = Math.min(height[l], height[r])
    let area = h * (r - l)
    if (area > max) max = area
    if (height[l] < height[r]) l++
    else r--
  }
  return max
}
