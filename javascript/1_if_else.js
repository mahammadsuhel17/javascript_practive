//finding leep year

var year = 2020;
if(year%4===0){
    console.log('it is a leap year');
}else{
    console.log("it is not a leap year");
}

//checking odd number or not

var num = 15;
if (num % 2 == 0) {
    console.log('it is an even number');
} else {
    console.log('it is odd number');
}


//simple game of guessing number

var winnigNumber = 19;
var usseGuess= prompt('guess a number');

if (usseGuess==winnigNumber){
    console.log('you are right');
}else{
    if(usseGuess>winnigNumber){
    console.log('too high');
}else{
    console.log('too low')
}
}
