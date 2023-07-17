// Viết một function xoá các phần từ trùng lặp trong một mảng các số:
// Input: [1, 2, 3, 5, 4, 2, 6, 4]
// Output: [1, 2, 3, 5, 4, 6]

const array = [1, 2, 3, 5, 4, 2, 6, 4];
const newArray = [...new Set(array)];
console.log(newArray);
console.log(array);