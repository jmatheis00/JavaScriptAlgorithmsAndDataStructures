//  string.replace('characterToReplace', '');
//  /[^a-zA-Z0-9]/g searches any character that is not between the brackets
function palindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '');
    let reverse_str = "";
    for(let i = str.length - 1; i >= 0; i--)
        reverse_str += str[i];
    return str.toUpperCase() == reverse_str.toUpperCase();
}

//TESTS
console.log(palindrome("eye_."));
console.log(palindrome("eye1"));