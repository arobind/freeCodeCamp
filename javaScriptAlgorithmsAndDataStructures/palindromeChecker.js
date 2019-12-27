function palindrome(str) {
    // Good luck!
    var outStr = ""
    str = str.toUpperCase()
    for(var i = 0; i<str.length;i++){
      if (str.charCodeAt(i)>= 65 && str.charCodeAt(i)< 90 ||
      str.charCodeAt(i)>= 48 && str.charCodeAt(i)< 57){
        outStr += str[i]
      }
    }
    console.log(outStr)
    return outStr == outStr.split('').reverse().join('');
  }
  
  
  
  palindrome("1 eye for of 1 eye.");