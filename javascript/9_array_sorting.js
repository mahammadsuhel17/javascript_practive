//sorting

//accending order
// const numbers=[2,8,9,4,5,7,6];

// numbers.sort((a,b)=>a-b)            //writing return function within the function 
// console.log(numbers);

//deccending order
// const numbers=[2,8,9,4,5,7,6];

// numbers.sort((a,b)=>b-a)            //writing return function within the function 
// console.log(numbers);


//sorting product price from low to high

// const userCart=[

//     {productId:1, productName : "mobile", price:15000},
//     {productId:2, productName : "laptop", price:35000},
//     {productId:3, productName : "tv", price:16000},


// ];
//  userCart.sort((price1, price2)=> price1.price-price2.price)
//  console.log(userCart)


//sorting product price from high to low

const userCart1 = [

    { productId: 1, productName: "mobile", price: 15000 },
    { productId: 2, productName: "laptop", price: 35000 },
    { productId: 3, productName: "tv", price: 16000 },


];
userCart1.sort((price1, price2) => price2.price - price1.price)
console.log(userCart1)