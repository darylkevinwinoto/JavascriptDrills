let array = [1, 2, 3, 4, 5]

const addAll = (a) => {
    let sum = 0

    array.forEach((a) => {
        sum += a
    })

    return sum
}

console.log(addAll(array))