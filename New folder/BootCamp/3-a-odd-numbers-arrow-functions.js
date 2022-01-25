let numbers=[1, 5, 8, 10, 11, 12, 15];
let isOdd = (n) => (n&1)===1;
console.log("Odd Numbers:" + numbers.filter(n=>isOdd(n)))
