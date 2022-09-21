let s = 0

function solution(s) {
    var c = s[0]
    
    if (c >= 'A' && c <= 'Z') {
        return 'upper';
    } else if (c >= 'a' && c <= 'z') {
                return 'lower';
    } else if (c >= 0 && c <= 9) {
        return 'digit';
    } else {
        return "other";
    }
}

console.log(solution(s))
let n = '0'
let n2 = '9'

let l = 'a'
let l2 = 'z'

let L = 'A'
let L2 = 'Z'

