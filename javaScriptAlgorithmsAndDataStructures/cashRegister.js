function double_round(num){
return Math.round(num*100)/100;
}
function checkCashRegister(price, cash, cid) {
  var change = [];
  // Here is your change, ma'am.
  var denoObj = {
    "PENNY":0.01,"NICKEL":0.05,"DIME":0.1,"QUARTER":0.25,"ONE":1,"FIVE":5,"TEN":10,
    "TWENTY":20,"ONE HUNDRED": 100
    }

  var res = {
    status:"",
    change: []
  }
  var total_cost =  cid.reduce((tc,el) => {tc += el[1];return tc;}, 0) * 100 / 100;
    if (cash - price > total_cost){
      res.status = "INSUFFICIENT_FUNDS";
    }
    else if (cash - price == total_cost){
      res.status = "CLOSED";
      res.change = cid;
    }
    else{
    var change_amount = cash - price;
    cid = cid.filter(el=>el[1] > 0).reverse();
    var res_change = [];
    for(var i = 0; i<cid.length; i++){
      if(change_amount == 0){break;}
      //To check if change amount is less than the denomination; if true proceed, else skip
      if(denoObj[cid[i][0]] <= change_amount){
          
          if(change_amount>= cid[i][1]){
            change_amount -= cid[i][1];
            change_amount = double_round(change_amount);
            res_change.push(cid[i]);
          }
          else{
            var s = denoObj[cid[i][0]] * Math.floor(change_amount/denoObj[cid[i][0]]);
            change_amount -= s;
            change_amount = double_round(change_amount);
            res_change.push([cid[i][0],s]);
          
          }
      }

      }
      if (change_amount == 0){
        res.status = "OPEN";
        res.change = res_change;
      }
      else{
        res.status = "INSUFFICIENT_FUNDS";
      }
    }
    
  return res;
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
