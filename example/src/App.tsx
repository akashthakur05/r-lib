import React from 'react'
import {useTextCrypt} from 'r-lib'
const values = ["useDencrypt"];

export const App = () => {
  const [result, setResult] = useTextCrypt();

  React.useEffect(() => {
    let i = 0;
    let run = true;

    const loop = async () => {
      while (run) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await setResult(values[0]);
        run = false
        i = i === values.length - 1 ? 0 : i + 1;
      }
    };

    if (setResult) {
      loop();
    }

    return () => {
      run = false;
    };
  }, [setResult]);

  return (
    <div
      style={{ fontFamily: "monospace", fontSize: "4rem", minHeight: "4rem" }}
    >
      {result}
    </div>
  );
};



export default App
