// counter N all set to 0

// operations 'increase' - counter increases by 1
// 'max counter' - all counters are set to the maximmum value 

// Array A that represents consecutive operations

// N is the  array size of counters

// A is the array containing the indexes to increse the value. as long as it`s 
//  value is less then the array maximum index

let A = [3, 4, 4, 6, 1, 4, 4]
let N = 5

function max(N, A) {

    let arraySize = A.length
    let list = []
    for (let i = 0; i < N; i++) {
        list[i] = 0
    }

    let highestN = 0
    let high = []

    for (let i = 0; i < arraySize; i++) {

        // variable that holds he position in the array to be increased
        let indexToIncrease = A[i] - 1

        // represents the number to determine if  we increase or sum max all
        let position = A[i]

        if (position <= N) {
            list[indexToIncrease] += 1

            if (list[indexToIncrease] > highestN) {
                highestN = list[indexToIncrease]
            }
        }
        else {
            for (let i = 0; i < N; i++) {
                list[i] = highestN
            }
        }
    }
    return list
}

console.log(max(N, A))


