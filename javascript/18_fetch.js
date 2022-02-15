

//using text document
// fetch('content/text.txt').then((response) => {
//     return response.text()
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })


//using fake json data
fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((result) => {
    console.log(result)
    for (let x in result) {
        document.write(`${result[x].name} <br>`)
    }
}).catch((error) => {
    console.log(error)
})