function telephoneCheck(str) {
    const regex10 = /[(]?\d{3}[)-\s]?\d{3}[-\s]?\d{4}$/;
    const regex11 = /^1\s?\(?\d{3}[)-]?\s?\d{3}[-\s]?\d{4}$/;
    let countNum = str.match(/[\d]/g).length;
  
    if(((/[^\d-()" "]/g).test(str) || countNum < 10 || countNum > 11)
          || (str.indexOf('(') < 0 && str.indexOf(')') >= 0)
          || (str.indexOf('(') >= 0 && str.indexOf(')') < 0)
          || (countNum === 10 && regex10.test(str) == false)
          || (countNum === 11 && regex11.test(str) == false))
      return false;
    return true;
}

// TESTS
console.log(telephoneCheck("555-555-5555"));