let A = [0, 0, 0, 1, 1, 0, 0, 1, 1]


function passing(A) {

    let list = [0]
    let counter = 0
    let sum = 0

    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0) {
            list[A.length - i] = 0
            counter++
        }
        else {
            list[A.length - i] = counter
        }
    }
    
    for (let j = 0; j < list.length; j++) {
        sum += list[j]
    }

    if (sum > 1000000000) {
        return -1
    } else {
        return sum
    }
}


console.log(passing(A))