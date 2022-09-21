let A = [3, 4, 4, 6, 1, 4, 4]
let N = 5

function max(N, A) {

    let arraySize = A.length
    let list = []
    for (let i = 0; i < N; i++) {
        list[i] = [0, 0]
    }

    let increased = 0

    let maxCounter = []
    let higherN = 0
    let higher = 0

    for (let i = 0; i < arraySize; i++) {

        // variable that holds he position in the array to be increased
        let indexToIncrease = A[i] - 1

        // represents the number to determine if  we increase or sum max all
        let position = A[i]

        if (position >= N) {
            maxCounter[i] = 1
        } else {
            maxCounter[i] = 0
        }
    }

    for (let j = 0; j < arraySize; j++) {

        // variable that holds he position in the array to be increased
        let indexToIncrease = A[j] - 1

        // represents the number to determine if  we increase or sum max all
        let position = A[j]

        if (maxCounter[j] === 1) {
            increased++
        }

        if (position <= N) {
            if ((list[indexToIncrease][1] < increased) && (list[indexToIncrease][0] < higherN)) {
                list[indexToIncrease][0] = higherN
                list[indexToIncrease][1] = increased
            } else {
                list[indexToIncrease][0] += 1
            }

            if (list[indexToIncrease][0] > higherN) {
                higherN = list[indexToIncrease][0]
            }
        } else {
            higher = higherN
        }
    }

    for (let z = 0; z < list.length; z++) {

        if (list[z][1] < increased) {
            list[z][0] = higher
        }
    }

    return list
}

console.log(max(N, A))