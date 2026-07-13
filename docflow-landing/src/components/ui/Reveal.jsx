import { memo } from "react";
import useReveal from "../../hooks/useReveal";

export default memo(function Reveal({ children, delay, className = "" }) {
  const [ref, show] = useReveal();
  return (
    <div ref={ref} className={`reveal ${delay ? `d${delay}` : ""} ${show ? "active" : ""} ${className}`}>
      {children}
    </div>
  );
});