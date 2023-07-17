// Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:
// Input: [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]
// Output: {value: 3, count: 3}


const array = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
const duplicateCount = {};
array.forEach(e => duplicateCount[e] = duplicateCount[e] ? duplicateCount[e] + 1 : 1);
const result = Object.keys(duplicateCount).map(e => { return { value: e, count: duplicateCount[e] } });
console.log(result);