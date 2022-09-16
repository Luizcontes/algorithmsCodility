let A = [1, 3, 1, 4, 2, 5, 4, 3,]
// let A = [1]

function river(X, A) {

    let list = []
    let counter = 0
    let ref = 0
    for (let i = 0; i < A.length; i++) {

        let iToSeq = i + 1
        let seqToI = A[i] - 1
        
        if (i < X) {
            ref += iToSeq
        }

        if (seqToI <= X) {
            if (!(typeof list[seqToI] === 'number')) {
                list[seqToI] = A[i]
                counter += A[i]
            }
            if ((iToSeq >= X) && (counter === ref)) {
                return i
            }
        }
    }

    return -1
}

console.log(river(1, A))