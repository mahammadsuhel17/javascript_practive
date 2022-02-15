// let complete = true;
// let myPromise = new Promise(function (resolve, reject) {
//     let a = 'please wait.........'
//     console.log(a);

//     setTimeout(() => {
//         if (complete) {
//             resolve('ok')
//         } else {
//             reject('fail');
//         }

//     }, 1500)

// })
// myPromise.then(() => {
//     console.log(myPromise)
// })


function myPromise(complete) {
    return new Promise(function (resolve, reject) {
        let a = 'please wait.........'
        console.log(a);

        setTimeout(() => {
            if (complete) {
                resolve('ok')
            } else {
                reject('fail');
            }

        }, 1500)
    })
}
myPromise(true).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})