function maskify(input) {
    // only apply the mask to strings with a length > 4
    if (input.length > 4) {
        //reverse the string
        let reversed = reverse(input);
        let maskedString = '';
        for (let i = 0; i < reversed.length; i++) {
            // if i < 4, reveal the last four numbers in the output
            if (i < 4) {
                maskedString += reversed[i];
            } else {
                //otherwise, hide it
                maskedString += '#';
            }
        }
        //return the reversal of the string to revert it back to the original
        return reverse(maskedString);
    } else {
        return input;
    }
}

function reverse(str) {
    return str.split("").reverse().join("");
}

console.log(maskify(0000000))