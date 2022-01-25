//Return all the prime numbers in an array anonymous function
const numbers = [1, 5, 8, 10, 11, 27, 31, 51];
const prime = function(){
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers);
}
prime()

//Return all the prime numbers in an array IIFE function
(function(){
 const numbers = [1, 5, 8, 10, 11, 27, 31, 51];   
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers);
})()
