/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % k != 0) return false;

  const value = sum / k;

  const hash = {};

  for (let n of nums) {
    if (value == n) {
      continue;
    }
    if (hash[`${value - n}`]) {
      hash[`${value - n}`]--;
    } else {
      hash[`${n}`] = hash[`${n}`] ? hash[`${n}`] + 1 : 1;
    }
  }
  console.log(hash, value);

  Object.keys(hash).forEach{
    
  }
  return !Object.values(hash).reduce((a, b) => !!a || !!b, false);
};

// console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4));
// console.log(canPartitionKSubsets([1, 2, 3, 4], 3));
// console.log(canPartitionKSubsets([1, 2, 3, 4], 5));
console.log(canPartitionKSubsets([1, 1, 1, 1, 2, 2, 2, 2], 3));
