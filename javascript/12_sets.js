//set

// const newSet = new Set();
// //addinmg elements into the set
// newSet.add(1);
// newSet.add(2);
// newSet.add([5,9,7,6,5,])
// console.log(newSet);

//checking element is present or not
// if(newSet.has(1)){
//     console.log("present")
// }else{
//     console.log("not present")
// }

//itrating set using for of loop

// for(let elements of newSet){
//     console.log(elements)
// }

//extracting unique elements from array using set
const numbers =[5,8,6,8,7,4,2,3,6,9,41,25,25];
const uniqueNumbers= new Set(numbers)
console.log(numbers)
console.log(uniqueNumbers);
console.log(numbers.length)
