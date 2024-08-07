/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  let set = {};

  for (let c of word) {
    set[c] = set[c] ? set[c] + 1 : 1;
  }

  let sortable = [];
  for (var vehicle in set) {
    sortable.push([vehicle, set[vehicle]]);
  }

  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  let count = 0;
  let multiplier = 0;
  for (let i = 0; i < sortable.length; i++) {
    if (i % 8 == 0) {
      multiplier++;
    }
    count += sortable[i][1] * multiplier;
  }

  return count;
};

console.log(minimumPushes("eerrttyy"));
console.log(minimumPushes("eerrttyyqqwweeffmmlooppoo"));
console.log(minimumPushes("eerrttyyqqwweeffmmlooppoollaalekjejqwbbwhej"));
console.log(minimumPushes("xyzxyzxyzxyz"));
