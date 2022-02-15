//method 
//function in object 

// const person={
//     name:'mahammad',
//     age:'25',
//     about:function(){
//         console.log(`person ${person.name} and his age is ${person.age}`)
//     }
// }

// person.about();

//using this keyword
// const person = {
//     name: 'mahammad',
//     age: '25',
//     about: function () {
//         console.log(`person ${this.name} and his age is ${this.age}`)
//     }
// }
// person.about();



//printing diffrent objects using one function
// function personInfo(){
//     console.log(`person mane is ${this.name} and his age is ${this.age}`)
// }
// const person1 = {
//     name: 'mahammad',
//     age: '25',
//     about: personInfo
// }

// const person2 = {
//     name: 'suhel',
//     age: '26',
//     about: personInfo
// }

// const person3 = {
//     name: 'aamir',
//     age: '50',
//     about: personInfo
// }

// person1.about();
// person2.about();
// person3.about();



//call keyword
function about(){
    console.log(`person mane is ${this.name} and his age is ${this.age}`)
}
const person1 = {
    name: 'mahammad',
    age: '25',
    
}

const person2 = {
    name: 'suhel',
    age: '26',
   
}

about.call(person1);    // output= person name is mahammad and his age is 25
about.call(person2);    // output= person name is suhel and his age is 26
