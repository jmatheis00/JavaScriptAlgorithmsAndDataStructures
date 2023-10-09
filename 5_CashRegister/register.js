function checkCashRegister(price, cash, cid) {
    const currency = {"ONE HUNDRED": 100, "TWENTY": 20, "TEN": 10, "FIVE": 5, "ONE": 1, "QUARTER": 0.25, "DIME": 0.1, "NICKEL": 0.05, "PENNY": 0.01};
    //how much to give to customer
    let give = (cash - price).toFixed(2);
    //sum of cid
    let available = (cid.reduce((sum, elem) => sum + elem[1], 0)).toFixed(2);
    // same price and cash
    if(available == give)
      return({status: "CLOSED", change: cid});
  
    let newArr = {status: "OPEN", change: []};
    for(const curr in currency)
    {
      let howManyOfOneCurr = parseInt(give / currency[curr]);
      const cid_curr = cid.find(currency => currency[0] === curr);
      if(howManyOfOneCurr > 0)
      {
        let absVal = (howManyOfOneCurr * currency[curr]).toFixed(2);
        // not enough currency units in cid
        if(cid_curr[1] < absVal)
        {
          howManyOfOneCurr = cid_curr[1] / currency[curr];
          absVal = (howManyOfOneCurr * currency[curr]).toFixed(2);
        }
        // add to new array, update give
        if(cid_curr[1] >= absVal) {
          newArr.change.push([cid_curr[0], Math.abs(absVal)]);
          give = (give - absVal).toFixed(2);
        }
      }
    }
    if(give != 0)
      return({status: "INSUFFICIENT_FUNDS", change: []});
    return newArr;
}

//   TESTS
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));