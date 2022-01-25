//Sum of all numbers in an array anonymous function
let marks = [70,40,60,90,45]
let sum1 = function(){
      let sum = 0
      function printMarks(marks){
          sum = sum + marks   }
      marks.forEach(printMarks)
      console.log(sum);
}
sum1()




//Sum of all numbers in an array IIFE function
( function(){
    let marks = [70,40,60,90,45]
      let sum = 0
      function printMarks(marks){
          sum = sum + marks   }
      marks.forEach(printMarks)
      console.log(sum);
})()

