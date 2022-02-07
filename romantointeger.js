s = "MCMXCIV"

let roman = new Map([
    ["I", 1],
    ["II", 2],
    ["III", 3],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000]
])

const arr = s.split('');

let numb = 0
let convert = []

for (let i = 0; i < arr.length;) {

    value1 = arr[i]
    value2 = arr[i + 1]
    special = value1 + value2

    if ((special) === ("IV")) {
        i += 2
        console.log(special)
        convert.push(special)

    } else if ((special) === ("IX")) {
        i += 2
        console.log(special)
        convert.push(special)

    } else if ((special) === ("XL")) {
        i += 2
        console.log(special)
        convert.push(special)

    } else if ((special) === ("XC")) {
        i += 2
        console.log(special)
        convert.push(special)

    } else if ((special) === ("CD")) {
        i += 2
        console.log(special)
        convert.push(special)

    } else if ((special) === ("CM")) {
        i += 2
        console.log(special)
        convert.push(special)

    } else {
        i++
        console.log(value1)
        convert.push(value1)
    }
}

for (let j = 0; j < convert.length;) {

    numb += roman.get(convert[j])
    console.log(numb)
    j++
}


console.log(convert)