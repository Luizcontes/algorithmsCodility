const prompt = require('prompt-sync')({ sigint: true })

const arr = [9, 3, 9, 3, 9, 7, 155855, 9, 7, 4, 4, 5, 8, 5, 8]
// let list = []

function getOdd(a) {

    let list = []

    // let number = []
    
    for (let i = 0; i < a.length; i++) {
        if (!list[a[i]]) {
            list[a[i]] = a[i]
        } else {
            delete list[a[i]]
        }
    }

    console.log(list)

    // console.log(list)

    // for (let z = 0; z < list.length; z++) {
    //     // console.log(z)
    //     if (list[z]) {
    //         if (list[z] % 2 !== 0) {
    //             return list.indexOf(list[z])
    //         }
    //     }
    // }


    // list.push(9)
    // list.push(7)
    // list.indexOf(3)

    // return list
}

console.log(getOdd(arr))

// function solution(A) {
//     let list = []
//     let number = []

//     for (let i=0; i<A.length; i++) {
//         if(!list[A[i]]) {
//             list[A[i]] = 1
//         } else {
//             list[A[i]] += 1
//         }

//         if(list[A[i]]%2 !==0) {
//             number[A[i]] = 1
//         }
//         if(list[A[i]]%2 === 0) {
//             number[A[i]] = 0
//         }
//     }
//     return number.indexOf(1)
// }