import  { useState, useEffect } from "react";

export interface MousePosition { 
    mouseX:number|null,
    mouseY:number|null,
}

const useMousePosition = ():MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    mouseX: null,
    mouseY: null
  });

  const updateMousePosition = (ev:MouseEvent) => {
    setMousePosition({ mouseX: ev.clientX, mouseY: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export { useMousePosition };