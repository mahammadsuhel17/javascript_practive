
// function createUser(name,age,number){
//     const user=Object.create(createUser.prototype)
//     user.name=name;
//     user.age=age;
//     user.number=number;
//     return user;
// }
// createUser.prototype.about=function(){
//     return `user name is ${this.name} and age is ${this.age}`;
//  }
// const user1= createUser('suhel',25,9449085064);
// console.log(user1)
// console.log(user1.about());



/// using this and new keyword
function createUser(name, age, number) {

    this.name = name;
    this.age = age;
    this.number = number;
}
createUser.prototype.about = function () {
    return `user name is ${this.name} and age is ${this.age}`;
}
const user1 = new createUser('suhel', 26, 9449085064);
console.log(user1)
console.log(user1.name);