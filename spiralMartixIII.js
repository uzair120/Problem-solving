/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  const list = [[rStart, cStart]];

  let multiplier = 1;
  let arr = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];
  let arrInt = 0;
  while (list.length < rows * cols) {
    for (let i = 0; i < multiplier; i++) {
      rStart = arr[arrInt][0] + rStart;
      cStart = arr[arrInt][1] + cStart;
      if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) {
        list.push([rStart, cStart]);
      }
    }
    if (arrInt % 2 != 0) multiplier++;

    arrInt = ++arrInt % 4;
  }
  return list;
};

console.log(spiralMatrixIII(1, 4, 0, 0));
console.log(spiralMatrixIII(5, 6, 1, 4));
