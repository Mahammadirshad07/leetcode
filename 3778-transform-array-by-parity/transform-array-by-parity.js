/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let transformed = nums.map(num => num % 2 === 0 ? 0 : 1)

    transformed.sort((a,b)=> a -b)
    return transformed;
    
};