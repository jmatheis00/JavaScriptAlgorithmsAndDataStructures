function palindrome(str) {
    let reverse_str = "";
  
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    for(let i = str.length - 1; i >= 0; i--)
        reverse_str += str[i];
  
    return str == reverse_str;
}

// TESTS
console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));