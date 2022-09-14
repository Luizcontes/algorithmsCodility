const prompt = require('prompt-sync')({ sigint: true })

const arr = [9, 3, 9, 3, 9, 7, 9, 7, 4, 4, 5]

function getOdd(a) {

    let list = [[a[0]]]
    for (let i = 1; i < a.length; i++) {
        
        let include = true
        for (let j = 0; j < list.length; j++) {
            if (list[j].includes(a[i])) {
                list[j].push(a[i])
                include = false
                break
            }
        }
        if (include) {
            list.push([a[i]])
        }
        
    }
    console.log(list)
    for (let z = 0; z < list.length; z++) {
        if (list[z].length % 2 !== 0) {
            return (list[z][0])
        }
    }
}

console.log(getOdd(arr))