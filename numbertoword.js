/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine"
  ];
  const teens = [
    "",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen"
  ];
  const tens = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety"
  ];
  var getHundards = function (num) {
    let word = "";

    if (Math.floor(num / 100) > 0) {
      word += ones[Math.floor(num / 100)] + " Hundred ";
      num %= 100;
    }

    if (num > 10 && num < 20) {
      word += teens[num - 10] + " ";
    } else {
      if (Math.floor(num / 10) > 0) {
        word += tens[Math.floor(num / 10)] + " ";
        num %= 10;
      }
      if (num > 0) {
        word += ones[num] + " ";
      }
    }

    return word.trim();
  };

  if (num === 0) return "Zero";

  const oneBillion = 1000000000;
  const oneMillion = 1000000;
  const oneThousand = 1000;
  let word = "";
  if (Math.floor(num / oneBillion) > 0) {
    word += getHundards(Math.floor(num / oneBillion)) + " Billion ";
    num %= oneBillion;
  }
  if (Math.floor(num / oneMillion) > 0) {
    word += getHundards(Math.floor(num / oneMillion)) + " Million ";
    num %= oneMillion;
  }
  if (Math.floor(num / oneThousand) > 0) {
    word += getHundards(Math.floor(num / oneThousand)) + " Thousand ";
    num %= oneThousand;
  }
  word += getHundards(Math.floor(num));
  return word.trim();
};

console.log(numberToWords(1000001));
console.log(numberToWords(1234567));
