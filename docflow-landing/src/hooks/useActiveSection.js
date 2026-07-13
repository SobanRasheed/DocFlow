import { useState, useEffect } from "react";

export default function useActiveSection(ids) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const fn = () => {
      let cur = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, [ids]);

  return active;
}