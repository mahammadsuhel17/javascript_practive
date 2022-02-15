// function myfunc() {
//     console.log('hello');
// }

// myfunc();



//passing arguments
//example adding two numbers 

// function add(a, b) {    // a and b are parameters 
//     return a + b;
// }
// console.log(add(2, 5));   //2 and 5 are arguments 


//arrow function
// const add =(a, b)=>{
//     return a+b;
// }
// console.log(add(5, 5));

// default parameter in function
// const add =(a, b=1)=>{
//     return a+b;
// }
// console.log(add(5,));


// rest operator in function
// function numbers(a, b, ...c) {
//     console.log({ a })
//     console.log({ b })
//     console.log({ c })
// }
// numbers(1, 2, 5, 8, 9, 5, 6);



//function callback
function func1(){
        console.log("in side func1")
    }

    function func2(a){
        a();
    }

    func1(func2);