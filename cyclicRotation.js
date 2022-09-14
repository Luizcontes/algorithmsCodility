let arr = [3, 8, 9, 7, 6]
let k = 3

function solution(a, k) {

    let final = a
    for (let j = 0; j < k; j++) {
        let temp = []
        for (let i = final.length - 1; i < final.length * 2 - 1; i++) {
            temp.push(final[i % final.length])
        }
        final = temp
        temp = []
    }
    return final
}

console.log(solution(arr, k))