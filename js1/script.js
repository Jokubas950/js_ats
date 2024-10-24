
function num(a) {
    let result;
    if (10 < a && a < 20) {
        result = "number is between 10 and 20"
    } else {
        result = "number is not between 10 and 20"
    }
    return result
}

console.log(num(15))
console.log(num(100))