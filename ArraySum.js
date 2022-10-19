function sum(arr) {
  let result = 0;
  arr.map((data) => (result += data));
  return result;
}

console.log(sum([1, 2, 3, 4]));
console.log(sum([1, 2]));
console.log(sum([1]));
console.log(sum([]));
