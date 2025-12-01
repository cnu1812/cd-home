import { useEffect, useState } from "react";

const useKonami = (action) => {
  const [input, setInput] = useState([]);
  const sequence = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", 
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", 
    "b", "a"
  ];

  useEffect(() => {
    const onKeyDown = (e) => {
      const newInput = [...input, e.key];
      // Keep only the last N keys, where N is sequence length
      if (newInput.length > sequence.length) {
        newInput.shift();
      }
      setInput(newInput);

      if (newInput.join("") === sequence.join("")) {
        action();
        setInput([]); // Reset
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [input, action, sequence]);
};

export default useKonami;