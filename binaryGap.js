// check it out prompt-sync
const prompt = require('prompt-sync')({ sigint: true });

while (true) {
    const numero = prompt("Entre um numero decimal: ");

    let int = parseInt(numero)
    const bin = int.toString(2)

    console.log()
    console.log("To string: " + bin.toString(2))
    console.log()

    let str = ""
    while (int > 0) {
        str = int % 2 + str
        int = parseInt(int / 2)
    }

    console.log("Manually: " + str)

    let count = 0;
    let begin = 0
    let end = 0
    for (let i = 0; i < str.length; i++) {
        
        if (parseInt(str[i])) {
            begin = end
            end = i
        }
        
        if (end > begin) {
            // console.log('aqui')
            if ((end - begin) > count) {
                count = end - begin - 1
            }
        }

        // console.log(`Begin: ${begin} and End: ${end}`)
        // prompt()
    }
    console.log(count)

    prompt()
    console.clear()
}

