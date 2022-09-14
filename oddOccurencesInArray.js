const prompt = require('prompt-sync')({ sigint: true })

const arr = [9, 3, 9, 3, 9, 7, 9, 7, 4, 4, 4]

function getOdd(a) {

    let list = []
    for (let i = 0; i < a.length; i++) {
        if (list.length === 0) {
            list.push([a[i]])
        } else {
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
    }
    for (let z=0; z<list.length; z++) {
        if (list[z].length%2 !== 0) {
            return (list[z][0])
        }
    }
}

console.log(getOdd(arr))