//Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.
//Input: "abcdef", Output: "fedcba"

const str = "abcdef";
const strReserve = [...str].reverse().join("");
console.log(strReserve);