const A = [4, 1, 3, 2, 5]


// permutation is a sequence containing each element only once

// is array A a permutation

// if a check every element, will then be a sequence of digits
// one after another happening just once ?

// if the array is a permutation it should return 1

// if the array is not a permutation it should return 0

// The array elements range from 1 to 100 000

// Each element can be a number from 1 to 1 000 000 000

function permutation(A) {

    let arraySize = A.length

    let sumPermutI = 0
    let sumPermutList = 0

    let list = []

    for (let i = 0; i < A.length; i++) {

        let nSeqToI = A[i] - 1

        if (!(typeof list[nSeqToI] === 'number')) {
            list[nSeqToI] = A[i]
            sumPermutList += A[i]
        } else {
            list[nSeqToI] = ''
            sumPermutList -= A[i]
        }

        sumPermutI += arraySize - i
    }

    if (sumPermutI === sumPermutList) {
        return 1
    } else {
        return 0
    }
}

console.log(permutation(A))