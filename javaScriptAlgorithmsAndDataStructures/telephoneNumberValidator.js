function telephoneCheck(str) {
    var regArr = [/^(1\s)?(\d{3})(\s\d{3}\s|-\d{3}-)(\d{4})$/,
    /1?((\(\d{3}\))\s?(\d{3})-(5{4}))$/, 
    /5{10}/]
    // console.log(regArr[0].test(str))
  // console.log(regArr.some((reg)=>{return reg.test(str)}));
    return regArr.some((reg)=>{return reg.test(str)});
  }
  
  telephoneCheck("(555-555-5555");