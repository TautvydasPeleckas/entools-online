const reversedText = function (str) {
  return str.split("").reverse().join("");
};

const numbersToText = function (str) {
  let result = "";
  str
    .split(" ")
    .forEach((s) => (result += String.fromCharCode(96 + parseInt(s))));
  return result;
};

export { reversedText, numbersToText };
