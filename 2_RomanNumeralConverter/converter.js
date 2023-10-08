function convertToRoman(num) {
    let roman ="";
    let romanNums = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let normalNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
      for(let i = 0; i < 13; i++)
      {
        while(num >= normalNums[i])
        {
          num -= normalNums[i];
          roman += romanNums[i];
        }
      }
   return roman;
}

console.log(convertToRoman(36));