//creating new map

// const myMap = new Map()
// //adding elements in map
// myMap.set('name', 'suhel');
// myMap.set('age', '25')
// console.log(myMap);
// console.log(myMap.get('age'));

// //printing all keys
// console.log(myMap.keys());

// //by using foe of loop
// for (let key of myMap.keys()) {
//     console.log(key);
// }

//inserting additional key value pairs in object using map

const obj={
    name:'suhel',
    age:'25'
}
console.log(obj)

const myMap = new Map();
myMap.set(obj, {gender:'male'})
console.log(myMap)