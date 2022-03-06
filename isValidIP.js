/* Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string */

function isValidIP(str) {
  
  let stringArr = str.split('.');
  const hasElemStartingWith0 = stringArr.some( elem => elem.length>1 && elem.startsWith('0') );
  const numberOfElems = stringArr.length;
  const regex = /[a-zA-Z]/;

  const containsAlphabets = stringArr.some( elem => regex.test(elem) );
  
  if (hasElemStartingWith0 === true || stringArr.length !== 4 || containsAlphabets === true) {
    return false;
  } else {
     // turn every elem of the array to a number
    const numbersArr = stringArr.map(str => {
      return Number(str)
  });
  
  // for each number, check if is between 1 and 255
  const isValid = (elem) => {
    if (elem>=0 && elem<= 255) {
      return true;
    }
  }
  
  // finally, if all the numbers are valid, it will return true or false
  return numbersArr.every( isValid )

  }

}
