s = "LVIII"

let roman = new Map([
    [1, "I"],
    ["II", 2],
    ["III", 3],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["LC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["DM", 900],
    ["M", 1000]
])

const arr = s.split('');

let number = 0

for (let i = 0; i < arr.length) {

    value1 = arr[i]
    value2 = arr[i + 1]

    if value1 + value2 === IV || IX || XL || XC || LC || CD || CM {
        i += 2

    }
    else i++
}




console.log(arr);
console.log(arr.length)