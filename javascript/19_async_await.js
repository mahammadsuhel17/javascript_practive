let myFunction = async()=>{
    return 'hello'

}
myFunction().then((result)=>{
    console.log(result);
});



//await
async function myFunction(){
    return  (await fetch('json/user.json')).json()

}
myFunction().then((result)=>{
    console.log(result)

})
