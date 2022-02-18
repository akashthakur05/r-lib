export const defaultOptions = {
    chars: [
      "-",
      ".",
      "/",
      "^",
      "*",
      "!",
      "}",
      "<",
      "~",
      "$",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f"
    ],
    interval: 50
  };
  /*
  Math.random() - pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)  
                  
  this function will always return a value less than the size of array of char provided in options 

 To generate a number in  a range 
  return Math.floor(
    Math.random() * (max - min) + min
  )
  */
export const getRandomChar = (chars: string[]) =>
  chars[Math.floor(Math.random() * chars.length)];


  export const getChar = (
    i: number,
    j: number,
    maxLength: number,
    oldValue: string,
    newValue: string,
    chars: string[]
  ) => {
    console.log(i, j, maxLength,oldValue.length,oldValue, newValue)
    if (j > i) {
      return oldValue[j];
    }
  
    if (i >= maxLength && j < i - maxLength) {
      return newValue[j];
    }
  
    return getRandomChar(chars);
  };