// let name = "rashidul ilsma"
// name = "rased"
// console.log(name)


// function add(num1, num2 = 50){
//    // num2 = num2 || 10
//  var result = num1 + num2;
//  return result;
// }
// const sum = add(3);
// console.log(sum)


// const firstName = "Rashiud";
// const lastName = "Islam";
// const fullName = firstName +" "+ lastName;
// const fullName2 = `${firstName} ${lastName} Rased`;

// const multiLine = "I love you\n"
// + "I miss you\n"
// + "I need you\n"

// const multiLine2 = `I love you
// I miss you
// I need you
// Baily road a dorkar nai`

// console.log(multiLine2);

// const name = "Rased"
// const age = 20;
// const name2 = "Rashidul"
// const age2 = 10;

// const allInformation = `${name} : ${age}
// ${name2} : ${age2}
// all information collacted done`
// console.log(allInformation)

// function doubleIt(num){
//    return num*2;
// }

// const doubleIt = function(num){
//  return num * num
// }

// const doubleIt = (num) =>{
//    const mul = num * 5;
//    const sum = mul + num;
//    const sub = sum - num;
//    const div = sub / num;
//    return div;
// }

// const result = doubleIt(10);
// console.log(result)


const arr1 = [12,34,56,76,]
const arr2 = [14,16,67,63,]
const arr3 = [11,10, 47, 80,]
// const allArrays = arr1.concat(arr2).concat(arr3)
const allArrays = [...arr1, ...arr2, ...arr3]
console.log(allArrays);

const business = 123;
const sochib = 345;
const ministar = 454;

// if(business> sochib && business > ministar){
//    console.log(business, "is big man");
// } else if( sochib > business && sochib > ministar){
//    console.log(sochib, "is big man");
// }else{
//    console.log(ministar , "is big man")
// }

const bigMan = Math.max(business, sochib, ministar);
const takaPoisha = [342, 221, 232]
const bigMan2 = Math.max(...takaPoisha);
console.log(bigMan2)