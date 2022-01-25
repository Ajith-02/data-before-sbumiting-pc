var words = ["121", "guvi", "ITI"]
var palindromes = words => words.filter((word) => word.split("").reverse().join("") === word);

console.log(palindromes(words));
