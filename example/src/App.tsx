import React from 'react'
import {useTextCrypt,useMousePosition,useWindowSizes} from 'r-lib'
const values = ["useDencrypt"];

export const App = () => {
  const [result, setResult] = useTextCrypt();
  const result1 = useMousePosition(0);
  const r2 = useWindowSizes();

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
      Laboris laborum fugiat dolore non sint esse sint amet minim. Minim dolor aliqua in incididunt cupidatat duis pariatur sunt consectetur. Adipisicing duis nisi minim ex excepteur mollit consectetur fugiat est ex amet.
      <p>
        Esse nulla in eiusmod magna ut anim officia. Duis qui est aute cillum consequat ex voluptate officia enim non et. Id laboris quis commodo id. Qui voluptate aliquip excepteur proident ea mollit reprehenderit amet veniam. Duis magna commodo dolore eu velit sit. Reprehenderit tempor ut elit qui ea dolore consectetur duis eu dolor. Aliqua Lorem amet veniam in ipsum ad anim non ea esse cupidatat culpa eiusmod.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias assumenda molestiae hic repellat dignissimos facere rem recusandae saepe, unde dolorum a illo expedita. Quam quos repudiandae quisquam odit possimus!

      </p>
      {result}
      {result1.mouseX}
      {r2.width}
    </div>
  );
};



export default App
