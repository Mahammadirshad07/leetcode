/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestAbsent = function(nums) {
     if (!nums || nums.length === 0) {   
    return 1;
  }
  const sum = nums.reduce((a, b) => a + b, 0);
  const avg = sum / nums.length;
  const numSet = new Set(nums);
  let candidate = Math.max(1, Math.floor(avg) + 1);
  while (numSet.has(candidate)) {
    candidate++;
  }

  return candidate;
};