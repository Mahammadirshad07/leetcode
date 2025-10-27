/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    let removed = 0; 

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      removed++;
      if (removed > 1) return false; 

      
      if (i > 1 && nums[i] <= nums[i - 2]) {
        nums[i] = nums[i - 1]; 
      }
    }
  }

  return true;

};