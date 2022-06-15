
function somarNumeros(arr) {
    return arr.reduce(function (prev, current) {
        console.log({ prev })
        console.log({ current })
        return prev + current
    });
}

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr = [1, 2]
console.log(somarNumeros(array2))

