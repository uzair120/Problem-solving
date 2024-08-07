/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let words = new Set(wordDict);
  let seen = [];
  const len = s.length;
  function breakdown(i) {
    if (seen.includes(i - 1)) return false;
    seen.push(i - 1);
    if (i == len) return true;
    let right = i;

    while (right < len) {
      if (words.has(s.substring(i, right + 1))) {
        if (breakdown(right + 1)) return true;
      }
      right++;
    }
    return false;
  }
  return breakdown(0);
};

const a =
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab";
const b = [
  "a",
  "aa",
  "aaa",
  "aaaa",
  "aaaaa",
  "aaaaaa",
  "aaaaaaa",
  "aaaaaaaa",
  "aaaaaaaaa",
  "aaaaaaaaaa",
];

const res1 = wordBreak("applepenapple", ["apple", "pen"]);
const res2 = wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]);
const res3 = wordBreak("a", ["a"]);
const res4 = wordBreak(a, b);

console.log(res1, res2, res3, res4);
