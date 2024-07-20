let array = [1, 2, 3, 4, 5];

const findMinMax = ((a) => {
    let minMax = {"min": null, "max": null}

    minMax.min = Math.min(...array)
    minMax.max = Math.max(...array)

    return minMax
})

console.log(findMinMax(array))