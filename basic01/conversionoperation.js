let score="33"

console.log(typeof score)
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof (valueInNumber))

// "33"=> number 33
// "33abc"=> NaN
// true = 1, false = 0

let loggedIn = 1
console.log(typeof loggedIn)
console.log(loggedIn)

let booleanLoggedIn = Boolean(loggedIn)
console.log(booleanLoggedIn)

// conversion in boolean
// 1 => true;  0 => false 
// "" => false 
// "notch" => true

let number = 44
let stringNumber = String(number)
console.log(stringNumber)
console.log(typeof stringNumber)


//      *************************************************operation**************************************************************

let value = 5
let NegValue = -value
console.log(NegValue)

console.log(2+2);  // addition
console.log(2-2);  // subtraction
console.log(2*2) // multiplication  
console.log(2**3) // 2 to the power 2

console.log("1"+2)
console.log(1+"2")
console.log("1"+2+3)
console.log(1+2+"3")


 console.log(true)
 console.log(+true)
 console.log(+"")

let num1, num2, num3
num1=num2=num3= 2+2
console.log(num1)


let gamecounter = 100
gamecounter++;
++gamecounter;
console.log(gamecounter);