import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import Key from "./Key";
import { AppContext } from "./Body";
import useKeyboard from "./hooks/useKeyboard";

const Keyboard = () => {
  const { onEnter, OnDelete, OnSelectLetter,disabledLetters } = useContext(AppContext);
  const KeyboardUse = useKeyboard();
  const keys1 = useMemo(()=>["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],[]) ;
  const keys2 = useMemo(()=>["A", "S", "D", "F", "G", "H", "J", "K", "L"],[]);
  const keys3 = useMemo(()=>["Z", "X", "C", "V", "B", "N", "M"],[]);

  const handleKeyboard = useCallback((event:KeyboardEvent) => {
    const key = event.key.toUpperCase();

    if (key === "ENTER") {
      onEnter();
    } else if (key === "BACKSPACE") {
      OnDelete();
    } else if (keys1.includes(key) || keys2.includes(key) || keys3.includes(key)) {
      OnSelectLetter(key);
    }
  }, [onEnter, OnDelete, OnSelectLetter, keys1, keys2, keys3]);

  useEffect(() => {
    if (KeyboardUse.isOpen) {
      const handleKeyDown = (event: KeyboardEvent) => {
        handleKeyboard(event);
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [handleKeyboard, KeyboardUse.isOpen]);

  return (
    <div className="flex flex-col gap-1 items-center justify-center">
      <div className="flex gap-1 flex-row">
        {keys1.map((key) => (
          <Key key={key} keyVal={key} disabled={disabledLetters.includes(key)} />
        ))}
      </div>
      <div className="flex gap-1 flex-row">
        {keys2.map((key) => (
          <Key key={key} keyVal={key} disabled={disabledLetters.includes(key)}/>
        ))}
      </div>
      <div className="flex gap-1 flex-row">
        <Key keyVal="ENT" />
        {keys3.map((key) => (
          <Key key={key} keyVal={key} disabled={disabledLetters.includes(key)}/>
        ))}
        <Key keyVal="DEL" />
      </div>
    </div>
  );
};

export default Keyboard;
