import { useEffect, useState } from "react";
import { defaultOptions, getChar } from "./util";

export const useTextCrypt = (options?: Partial<typeof defaultOptions>) => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const { chars, interval } = { ...defaultOptions, ...options };

  useEffect(() => {
    let i = 0;

    const crypting = setInterval(() => {
      setResult(oldValue => {
        if (oldValue === value) {
          clearInterval(crypting);
          return value;
        }

        const oldLength = oldValue ? oldValue.length : 0;
        const newLength = value.length;
        const maxLength = Math.max(oldLength, newLength);
        debugger
        return [...new Array(maxLength)]
          .map((_, j) => getChar(i, j, maxLength, oldValue, value, chars))
          .join("");

      });

      i++;
    }, interval);

    return () => clearInterval(crypting);
  }, [value, chars, interval]);

  return {
    result,
    decode: setValue
  };
};

export default useTextCrypt;