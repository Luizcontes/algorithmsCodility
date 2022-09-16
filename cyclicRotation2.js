let A = [3, 8, 9, 7, 6]

function cyclic(A, K) {

    let arraySize = A.length
    list = []
    
    for (let i=0; i<arraySize; i++) {
        
        let finalIndex = (i + K) % arraySize
        list[finalIndex] = A[i]
    }
    return list

}

console.log(cyclic(A, 3))