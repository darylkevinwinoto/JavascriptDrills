let array = [1, 2, 3, 4, 5];

const multiplyArray = ((a, n) => {
    return a.map((a) => a * n)
})

console.log(multiplyArray(array, 2))
