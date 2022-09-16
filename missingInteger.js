let A = [1, -3, -6, 4, -1, -2]

function inteiro(A) {

    let list = [0]

    for (let i = 0; i < A.length; i++) {
        if (!(A[i] < 0)) {
            list[A[i]] = A[i]
        }
    }

    let j = 0
    for (j = 0; j < list.length; j++) {
        if (list[j] === undefined) {
            return j
        }
    }

    return j
}

console.log(inteiro(A))