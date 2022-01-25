//Print odd numbers in an array anonymous function

let num = [2, 10, 5, 9, 11, 15, 20]
var val = function(){
    for(i=0; i<num.length; i++){
  if(num[i]%2 !=0) { 
    console.log(num[i])
  }
}
}
val()

//Print odd numbers in an array IIFE function
(function(){
   let num = [2, 10, 5, 9, 11, 15, 20] 
for(i=0; i<num.length; i++){
  if(num[i]%2 !=0) { 
    console.log(num[i])
  }
}
})()
