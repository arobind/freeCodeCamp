function rot13(str) { // LBH QVQ VG!
    var rot13 = "NOPQRSTUVWXYZABCDEFGHIJKLM";
    var outStr = "";
    str = str.toUpperCase()
    for(var i = 0; i<str.length; i++){
      if (str.charCodeAt(i)>= 65 && str.charCodeAt(i)<= 90){
        outStr += rot13[str.charCodeAt(i)- 65]
      }
      else{outStr += str[i]
       }}
    console.log(outStr)
    return outStr;
    
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");