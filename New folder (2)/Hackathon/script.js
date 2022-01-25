console.log("Hello World");


/*function urlBuilder(id, width, height){
    return "https://picsum.photos/id/237/200/300";
}
console.log(urlBuilder());*/
// ES6 feature - ES6 template literal ``

/*
function urlBuilder(id, width, height){
    return `https://picsum.photos/${id}/${width}/${height}`;
}
console.log(urlBuilder(237,200,300));



const urlBuild = (id, width, height) =>
     `https://picsum.photos/${id}/${width}/${height}`;

console.log(urlBuild(237,200,300));
*/

const [a, b, c=4, d=10] = [1, 2, null]
console.log(a, b, c, d);

//Ans - 1 2 null 10
//Reason a = 1;
 //      b = 2 
   //    c = null // it will take the latest value declared for C so "null"
     //  d = 10 //  d is assigned as 10, even it is not declared it will take the assigned value "10"
//Default value can overright only undefined
     // d is undefined , so it will take the default value

     const [a1, b1, c1=4, d1=10] = [1, 2, undefined]
     console.log(a1, b1, c1, d1);

     //Ans - 1 2 4 10

     function fun({url, name, age=20}){
         return `${url}?name=${name}&age=${age}`;
     }
     console.log(fun({url: "http://www.google.com", x: "ram", ega: 50}));
        

     // only one argument in fun({})
     // if fun({},abc) this is a two argument
     //Ans - http://www.google.com?name=undefined&age=20
     //Reason - we calling fun in consol, 
              //url - we gave directly in console.log
              //name - we didnt assigne so it is undefined
              // age - we asigned as 20

   function double(n){
       return [n, n*2];
   }
   const [t1, t2, t3=10] = double(6);
   console.log(t1, t2, t3);

   //Ans - 6 12 10
   //Reason - n is 6
         //   n*2= 12
         //now double is assignes as [t1,t2,t3]
         // t1 = n
         //t2 = n*2
         // t3 is undefined so it takes default 10


const stu =  { name: "Ajith", age: 12, gender: "male"};
console.log({...stu, age: 15})   

const z1 = [1, 4, 5];
const z2 = z1;
const z3 = [1, 4, 5];

console.log(z1===z2)
console.log(z1===z3)

//true - z1===z2 it a strict check operator z2 assigned as z1, so z1 and z2 is equal
//false - 

//in JS array are comared by addresses, z1 and z2 same address, z1 znd z3 not a same address
//in JS array are not comared by value


const result =[{name: "abc", age:16 }, 
{name: "def", age:10 }, 
{name: "nice", age:30 },
{name: "good", age:18 }]

// Array of object --> Array numbers [32,20,60,36]
.map(({age}) => age*2)   //age --> number(age*2)
//[32,20,60,36]
.filter((n)=> n > 25);
console.log(result);
//[32,60,36]

