/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */

var kthDistinct = function (arr, k) {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    const s = arr[i];
    if (hash[s] || hash[s] == 0) {
      hash[s] = -1;
    } else {
      hash[s] = i;
    }
    console.log(i, hash);
  }
  console.log(hash);

  const remianing = Object.keys(hash).filter((a) => hash[a] >= 0);
  console.log(remianing);
  return remianing.length > k - 1 ? remianing[k - 1] : "";
};

// console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
// console.log(kthDistinct(["aaa", "aa", "a"], 1));
// console.log(kthDistinct(["a", "b", "a"], 3));
console.log(kthDistinct(["a", "b", "a", "c"], 2));
