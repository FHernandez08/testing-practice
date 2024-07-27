function caesarCipher(str, key) {
    let cipher = '';
    const strChars = str.split('');

    strChars.forEach((char) => {
        let charCode = char.charCodeAt();

        // check for capital letters
        if (charCode >= 65 && charCode <= 90) {
            cipher += shiftUpperCase(charCode, key);
        }
        else if (charCode >= 97 && charCode <= 122) {
            cipher += shiftLowerCase(charCode, key);
        }
        else {
            cipher += char;
        }
    });

    return cipher;
}

function shiftUpperCase(charCode, key) {
    return String.fromCharCode(65 + ((charCode - 65 + key) % 26));
}

function shiftLowerCase(charCode, key) {
    return String.fromCharCode(97 + ((charCode - 97 + key) % 26));
}

module.exports = caesarCipher;