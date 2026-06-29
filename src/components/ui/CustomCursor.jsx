import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setVisible(true);

    const onMove = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onOver = (e) => {
      const target = e.target;
      if (!target) return;
      const clickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList?.contains("cursor-pointer");
      setHovered(Boolean(clickable));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed z-[100] pointer-events-none rounded-full border border-white/45 transition-all duration-150 ${
        hovered ? "h-10 w-10 border-white bg-white/10" : "h-5 w-5"
      } ${clicked ? "scale-75" : ""}`}
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
}
