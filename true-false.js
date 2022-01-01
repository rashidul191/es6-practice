// Falsy Value
// 0
//""
// false
// undefined
// null
// NaN

//Trueth Value
// 0> any number || 0 < any number
// "0"
// " "
// "false"
// true
//{}
//[]

// const name = "Rashidul"
// let number= NaN;
// console.log(number)
// if(number){
//    console.log("Condition is True");
// }else{
//    console.log("Condition is False")
// }

// let arr = [2,5,5]
// console.log(arr[12])

// const first = 2;
// const second = "2";
// if(first === second){
//    console.log("condition is true")
// }else{
//    console.log("condition is false");
// }

// const number = [2,3,6,5,7];

// const finalOutput = []
// for(let i=0; i<number.length; i++){
//    const element = number[i];
//    const result = element * element;
//    finalOutput.push(result);
// }

// const finalOutput =  number.map(function(value){
//    const result = value * value;
//    return result;
// })

// const finalOutput = number.map(x =>{
//    return x * x
// });

// function add(num1, num2){
//    return num1 + num2;
// }

// const result = add(2,3);
// console.log(result)

// const finalOutput = function(num1, num2){
//    return num1 + num2;
// }

// const result = finalOutput(2,3);
// console.log(result);

// const finalOutput = function (num1, num2) {
//   return num1 + num2;
// };

// const finalOutput = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(finalOutput(12, 3));

// class Student{
//    constructor()
// }

const student = [
  {
    name: "Rashidul",
    id: 371,
    cgpa: 2.97,
  },
  {
    name: "Rased",
    id: 381,
    cgpa: 3.04,
  },
  {
    name: "Khan",
    id: 391,
    cgpa: 3.5,
  },
];

const idS = student.map(value => value.cgpa)
const bigestStudent = student.filter(s => s.cgpa> 3)
const findAStudent = student.find(s => s.id > 371)
console.log(findAStudent)
