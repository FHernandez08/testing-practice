function analyzeArray(arr) {
    let sortedArr = arr.sort((a, b) => a - b);

    let sum = sortedArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    let average = sum / sortedArr.length;
    let min = sortedArr[0];
    let max = sortedArr[sortedArr.length - 1];
    let length = sortedArr.length;

    return {
        average,
        min,
        max,
        length,
    }
}

module.exports = analyzeArray;