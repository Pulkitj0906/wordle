import { useContext, useEffect } from "react";
import { AppContext } from "./Body";

interface LetterProps {
  letterPos: number;
  attemptVal: number;
}

const Letter: React.FC<LetterProps> = ({ letterPos, attemptVal }) => {
  const { board, correctWord, currAttempt,setDisabledLetters } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  const correctcss = 'bg-thisgreen'; 
  const almostcss = 'bg-thisyellow'; 
  const fillcss = 'bg-neutral-800'; 

  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
  currAttempt.attempt > attemptVal &&
  (correct ? correctcss : almost ? almostcss : fillcss);


  useEffect(() => {
    if (letter !== '' && !correct && !almost && currAttempt.attempt > attemptVal) {
      setDisabledLetters((prev)=>[...prev,letter])
    }
  },[currAttempt.attempt,almost,correct,letter,setDisabledLetters,attemptVal])

  return (
    <div
      className={`
        border
        border-neutral-500
        rounded-md
        flex
        items-center
        justify-center
        h-14
        w-14
        text-white
        uppercase
        font-bold
        text-2xl
        z-10
        ${letterState}
      `}
    >
      {letter}
    </div>
  );
};

export default Letter;
