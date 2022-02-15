/* Return the output array, and ignore all non-op characters
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]

*/


function parse( data )
{
  // initial value
  let value = 0;
  let storingArray = [];
  
  for (var i=0; i<data.length; i++) {
    
    // if charac is equal to 'i' then add +1 to current value
    if (data.charAt(i) === 'i') {
      value++;
    }
    // if charac is 'd' then remove 1 from current value
    else if (data.charAt(i) === 'd') {
        value--;
    }
    
    // if charac is 's' multiply the value by itself
    else if (data.charAt(i) === 's') {
      value = value*value;
    }
    //if charac is 'o' push the value to the array 
    else if (data.charAt(i) === 'o') {
      storingArray.push(value);
    }
  }
  
  return storingArray;
  
}
