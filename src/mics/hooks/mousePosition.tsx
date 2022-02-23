import  { useState, useEffect } from "react";
import * as _ from "underscore";

export interface MousePosition { 
    mouseX:number|null,
    mouseY:number|null,
}

const useMousePosition = (throttle:number = 50):MousePosition => {

  const [mousePosition, setMousePosition] = useState<MousePosition>({
    mouseX: null,
    mouseY: null
  });

  const updateMousePosition = (ev:MouseEvent) => {
    setMousePosition({ mouseX: ev.clientX, mouseY: ev.clientY });
  };

  useEffect(() => {
    
    window.addEventListener("mousemove", _.throttle(updateMousePosition, throttle));

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export { useMousePosition };