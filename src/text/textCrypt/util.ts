export const defaultOptions = {
  chars: '-./^*!}<~$012345abcdef',
  interval: 50,
};

export type DencryptInitialOptions = {
  initialValue?: string;
  callback: (value: string) => void;
};
export type DencryptDefaultOptions = Partial<typeof defaultOptions>;

  /*
  Math.random() - pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)  
                  
  this function will always return a value less than the size of array of char provided in options 

 To generate a number in  a range 
  return Math.floor(
    Math.random() * (max - min) + min
  )
  */
export const getRandomChar = (chars: string) =>
  chars[Math.floor(Math.random() * chars.length)];

/* 


*/
  export const getChar = (
    iteration: number,
    currentIndex: number,
    maxLength: number,
    oldValue: string,
    newValue: string,
    chars: string
  ) => {

    if (currentIndex > iteration) {
      return oldValue[currentIndex];
    }
  
    if (iteration >= maxLength && currentIndex < iteration - maxLength) {
      return newValue[currentIndex];
    }
  
    return getRandomChar(chars);
  };

  export const dencrypt = (
    options: DencryptInitialOptions & DencryptDefaultOptions
  ) => {
    const { chars, interval, callback, initialValue } = {
      ...defaultOptions,
      ...options,
    };
  
    let lastValue: string;
    let isCrypting: NodeJS.Timeout;
  
    if (initialValue) {
      lastValue = initialValue;
      callback(lastValue);
    }
  
    function* calculateValues(nextValue: string, prevValue = "") {
      const nextLength = nextValue.length;
      const prevLength = prevValue.length;
      const maxLength = Math.max(nextLength, prevLength);
      const iterations = 2 * maxLength;
  
      let i = 0;
      yield prevValue;
  
      while (i < iterations) {
        yield [...new Array(maxLength)]
          .map((_, j) => getChar(i, j, maxLength, prevValue, nextValue, chars))
          .join("");
  
        i++;
      }
      yield nextValue;
    }
  
    const setValue:any  = (value: string) => {
      clearInterval(isCrypting);
      const values = calculateValues(value, lastValue);
  
      return new Promise<string>((resolve) => {
        isCrypting = setInterval(() => {
          var next = values.next();
  
          if (next.done) {
            clearInterval(isCrypting);
            resolve(lastValue);
          } else {
            lastValue = next.value;
            callback(lastValue);
          }
        }, interval);
      });
    };
  
    return setValue;
  };