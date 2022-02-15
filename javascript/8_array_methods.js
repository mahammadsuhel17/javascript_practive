
//for each method 
const numbers = [2, 5, 8, 9, 1, 3, 7];
function myfunc(number, index) {
    console.log(`index is ${index}, number is ${number}`);
}
numbers.forEach(myfunc);

const users = [
    { name: 'suhel', age: '25' },
    { name: 'aamir', age: '50' }
]


users.forEach(function (objfun) {   // with use of forEach (inline function) //
 console.log(objfun.name);
})



function objfun(user) {             //with using external function //
    console.log(user.name);
}
users.forEach(objfun);




// for(let user of users){          // with use of forOf loop//
//     console.log(user.name);
// }


// map function
const array1 = [2, 4, 6, 8];
const sqr = function(value) {           // external function//
    return value*value
}
const newarray1 = array1.map(sqr);
// console.log(newarray1);



const array1 = [2, 4, 6, 8];

const newarry1=array1.map(function(value){      // in line function //
    return value*value;
})
console.log(newarry1);



// const users = [
//         { name: 'suhel', age: '25' },
//         { name: 'aamir', age: '50' }
//     ]                                           

//     const newarray=users.map((value)=>{      //arow function//
//         return value.name;
//     })
//     console.log(newarray);





//** filter method  ***//

const numbers =  [2,3,8,9,7,4,6];

const evenN= function(number){
    return number%2===0;
}                                               // external function//
const evenNumbers = numbers.filter(evenN);
console.log(evenNumbers)

// const numbers = [2, 3, 8, 9, 7, 10, 6];
// const evenNumbers = numbers.filter(number => {
//     return number % 2 === 0;
// });
// console.log(evenNumbers);



//reduce method

const numbers=[2,5,8,4,6];

const sum =numbers.reduce((accumulator, currentValue)=>{
  return accumulator+currentValue;
});

console.log(sum);


// const userCart=[
//     {productId:1, productName : "mobile", price:15000},
//     {productId:2, productName : "tv", price:16000},
//     {productId:3, productName : "laptop", price:35000},

// ];

// const totalAmount=userCart.reduce((initialPrice, nextItemPrice)=>{
//     return initialPrice+nextItemPrice.price;
// }, 0)
// console.log(totalAmount);

// userCart.forEach((user)=>{
//     console.log(user.productName)
// })




// find method 
// const userCart=[

//     {productId:1, productName : "mobile", price:15000},
//     {productId:2, productName : "laptop", price:35000},
//     {productId:3, productName : "tv", price:16000},


// ];

// const myproduct = userCart.find((product)=> product.productId===3);
// console.log(myproduct)


// //fill method
// //filling the value 0 in place of 9,6,3
// const array1 = [2, 5, 8, 9, 6, 3, 4, 5];
// array1.fill(0, 3, 6);     //0 is value to be fill , 3 is the index value of starting index of replacing element
// console.log(array1)       // 6 is  the index value of last index of replacing element


//splice method
//deleting item
// const array1 =['item1','item2','item3']
// array1.splice(1,2);   // 1 is starting position of spicing operation , 
// console.log(array1)   //2 is number of value deleting from the starting podition

//inserting item
const array1 =['item1','item2','item3']
array1.splice(1,0, 'inserted item');   // 1 is starting position of spicing operation , 
console.log(array1)   //0 is number of value deleting from the starting podition