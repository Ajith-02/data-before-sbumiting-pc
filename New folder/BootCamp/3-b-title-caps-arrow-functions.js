var lowerCase = "i am a student"
var titleCase = lowerCase.replace(/\b[a-z]/g, (w)=> w.toUpperCase())
console.log(titleCase)
