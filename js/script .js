// vowels.

function noOfVowels(string) {
    var listOfVowels = 'aAeEiIoOuU';
    var vowelsCount = 0;
    for(var i = 0; i < string.length ; i++) {
       if (listOfVowels.indexOf(string[i]) !== -1) {
          vowelsCount += 1;
      }
    }
 return vowelsCount;
 }
 document.write(noOfVowels("Tutorix is one of the best e-platforms"));

// num to string.

var num = 565;
var reverse = 0; 
console.log(num);

while(num != 0) {
    reverse = (reverse*10) + (num%10);
    num = parseInt(num / 10)
}

while (reverse != 0) {
    switch(reverse % 10) {
        case 0:
            console.log("Zero");
            break;
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        case 3:
            console.log("Three");
            break;
        case 4:
            console.log("Four");
            break;
        case 5:
            console.log("Five");
            break;
        case 6:
            console.log("Six");
            break;
        case 7:
            console.log("Seven");
            break;
        case 8:
            console.log("Eight");
            break;
        case 9:
            console.log("Nine");
            break;
    }
    reverse = parseInt(reverse/10);
}
