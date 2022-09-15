// const A = [3, 1, 2, 4, 3]
const A = [1, 1]

function tape(A) {

    let index = A.length - 1
    let left = [A[0]]
    let right = []

    right[index] = A[index]

    // ao executar o loop FOR, enquanto faco a ordenacao do array,
    // usando o indice para armazenar os respectivos valores, aproveito
    // para ja os posicionar e fazer a soma e em seguida por cada soma uso
    // a variavel diferenca para armazenar a o resultado da menor subtracao
    // do valor absoluto de cada fator.

    let menor
    for (let i = 1, j = A.length - 2; i < A.length; i++, j--) {

        left[i] = left[i - 1] + A[i]
        right[j] = right[j+1] + A[j]

        if (i >= j) {

            if(menor === undefined) {
                menor = Math.abs(left[i-1] - right[i])
            } 
            else if (Math.abs(left[i-1] - right[i]) < menor) {
                menor = Math.abs(left[i-1] - right[i])
            }
            else if (Math.abs(left[j] - right[j+1]) < menor) {
                menor = Math.abs(left[j] - right[j+1])
            }
        }
    }
    return menor
}

console.log(tape(A))