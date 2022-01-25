//Return all the palindromes in an array anonymous function
var words = ["121", "guvi", "ITI"]
var isPalindromes = function(){
var palindromes = words => words.filter((word) => 
                  word.split("").reverse().join("") === word);

console.log(palindromes(words));
}
isPalindromes()



//Return all the palindromes in an array IIFE function

(function(){
var words = ["121", "guvi", "ITI"]
var palindromes = words => words.filter((word) => 
                  word.split("").reverse().join("") === word);

console.log(palindromes(words));

})()
