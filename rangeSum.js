/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  const mod = 1e9 + 7;

  const arr = [];

  let cache = [];
  for (let i = n - 1; i >= -1; i--) {
    arr.push(...cache);

    const newCache = [];
    newCache.push(nums[i]);
    for (let c of cache) {
      newCache.push(parseInt(nums[i] + c));
    }
    cache = newCache;
  }
  arr.sort((a, b) => a - b);
  return arr.slice(left - 1, right).reduce((a, b) => (a + b) % mod, 0);
};

console.log(rangeSum([1, 2, 3, 4], 4, 1, 5));

// 1 3 6 10
// 2 5 9
// 3 7
// 4
