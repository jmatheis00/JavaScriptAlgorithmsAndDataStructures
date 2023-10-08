function rot13(str) {
    let finalstr = "";
    const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
    for(let i=0; i < str.length; i++)
    {
      if(/[A-Z]/.test(str[i]))
        finalstr += alpha[((alpha.indexOf(str[i]) + 13) % 26)];
      else
        finalstr += str[i];
    }
  
    return finalstr;
}

console.log(rot13("SERR PBQR PNZC"));