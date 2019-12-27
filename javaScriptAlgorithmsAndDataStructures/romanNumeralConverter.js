function convertToRoman(num) {
    var romanNum = ""
       var ones =["","I","II","III","IV","V","VI","VII","VIII","IX"];
       var tens =["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
       var hundreds = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]
       var thousands =["","M","MM","MMM"]
       if (num >999){
           romanNum += thousands[(num/1000)>> 0]
           num = num%1000
       }
       if (num > 99){
           romanNum += hundreds[(num/100)>> 0]
           num = num%100
       }
       if (num >9){
           romanNum += tens[(num/10)>> 0]
           num = num%10 
       }
       romanNum += ones[num]
    //  console.log(romanNum)
     return romanNum;
    }
    
    convertToRoman(360);