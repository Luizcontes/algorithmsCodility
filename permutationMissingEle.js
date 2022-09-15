const a = [2, 3, 4, 1, 5]

function getEle(a) {

    let temp = [0]
    for (let i = 0; i < a.length; i++) {
        temp[a[i]] = a[i]
    }

    for (let i = 0; i < a.length; i++) {
        if (((temp[i + 1] - temp[i]) !== 1)) {
            return i + 1
        }
    }
    return a.length + 1
}

console.log(getEle(a))