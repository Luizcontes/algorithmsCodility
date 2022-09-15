const prompt = require('prompt-sync')({ sigint: true })

const arr = [9, 3, 9, 3, 9, 7, 9, 7, 4, 4, 5]

function getOdd(A) {

    let list = []
    let number = 0
    for (let i = 0; i < A.length; i++) {

        if (list[A[i]] !== A[i]) {
            list[A[i]] = A[i]
            number += A[i]
        } else {
            number -= A[i]
            list[A[i]] = ''
        }
    }

    return number
}
console.log(getOdd(arr))