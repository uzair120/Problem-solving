/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let returnArray = {};
  nums.sort((a, b) => a - b);
  for (var i = 0; i < nums.length; i++) {
    if (i !== 0 && nums[i - 1] === nums[i]) continue;
    var j = i + 1;
    var k = nums.length - 1;
    while (j < k) {
      var sum = nums[i] + nums[j] + nums[k];
      if (sum === 0 && i != j && i != k && j != k) {
        if (!returnArray.hasOwnProperty([nums[i], nums[j], nums[k]].toString()))
          returnArray[[nums[i], nums[j], nums[k]].toString()] = [
            nums[i],
            nums[j],
            nums[k],
          ];
        k--;
        j++;
      } else if (sum > 0) k--;
      else if (sum < 0) j++;
    }
  }
  return Object.values(returnArray);
};

console.log(
  threeSum([-1, 0, 1, 2, -1, -4]),
  threeSum([0, 1, 1]),
  threeSum([0, 0, 0]),
  threeSum([-2, 0, 0, 2, 2])
);
