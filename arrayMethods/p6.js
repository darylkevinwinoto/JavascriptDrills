let array = [1, 2, 2, 3, 3, 3, 4];

const countOccurences = (a, n) => {
    let count = 0

    array.forEach((a) => {
        if (a === n) count += 1
    })

    return count
}

console.log(countOccurences(array, 3))