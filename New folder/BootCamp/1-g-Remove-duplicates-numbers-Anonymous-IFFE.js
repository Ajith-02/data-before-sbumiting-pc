//Remove duplicates from an array anonymous function
let words = [1,2,"ajith",1,"guvi",2,5,10,5,1] 
let unique = function(){
    
let unique1 = [...new Set(words)]  
console.log(unique1) 
}
unique()

//Remove duplicates from an array IIFE function
(function(){
let words = [1,2,"ajith",1,"guvi",2,5,10,5,1]     
let unique1 = [...new Set(words)]  
console.log(unique1) 
})()
