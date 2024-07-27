function capitalize(str) {
    let capLetter = str.charAt(0).toUpperCase();
    let remainingLetters = str.slice(1);

    let newStr = capLetter + remainingLetters;

    return newStr;
}

module.exports = capitalize;