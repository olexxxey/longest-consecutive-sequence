module.exports = function longestConsecutiveLength(array) {
    let maxLength = array.length ? 1 : 0;
    let length = 1;
    let sortedArr = array.sort((a, b) => parseInt(a) - parseInt(b));

    sortedArr.reduce((prevNumber, number) => {
        if (prevNumber !== number) {
            if (prevNumber === number - 1) {
                length++;
            } else if (length > maxLength) {
                maxLength = length;
                length = 1;
            } else {
                length = 1;
            }
        }
        return number;
    }, sortedArr[0]);

    return maxLength;
}
