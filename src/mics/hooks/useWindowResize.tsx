import { useState, useLayoutEffect } from "react";

export interface WindowSize{
    width:number,
    height:number
}
/**
 * A hook that executes when the window is resized 
 * 
 * 
 */
const useWindowSizes = ():WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({ width: 0, height: 0 });

  const updateWindowSize = ():void => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    updateWindowSize();
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);



  return windowSize;
};

export { useWindowSizes };