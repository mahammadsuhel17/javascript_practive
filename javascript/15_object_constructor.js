// function createUser (name,age,email,number){
//     const user={};
//     user.name=name;
//     user.age=age;
//     user.email=email;
//     user.number=number;
//     return user;
// }

// const user1=createUser('mahammad',25,'mahammadsuhel17@gmail.com', 9449085064);
// console.log(user1);


//object methods in constructor
// const aboutMethod ={
//     about:function(){
//        return `user name is ${this.name} and age is ${this.age}`;
//     }
// }

// function createUser(name,age,number){
//     const user={}
//     user.name=name;
//     user.age=age;
//     user.number=number;
//     user.about=aboutMethod.about;
//     return user;
// }

// const user1= createUser('suhel',25,9449085064);
// console.log(user1)
// console.log(user1.about());


//creating proto
// const aboutMethod ={
//         about:function(){
//            return `user name is ${this.name} and age is ${this.age}`;
//         }
//     }
    
//     function createUser(name,age,number){
//         const user=Object.create(aboutMethod)
//         user.name=name;
//         user.age=age;
//         user.number=number;
//         return user;
//     }
    
//     const user1= createUser('suhel',25,9449085064);
//     console.log(user1)
//     console.log(user1.about());


