import { useContext } from "react";
import { AppContext } from "./Body";

interface LetterProps{
    letterPos: number,
    attemptVal: number,
}

const Letter: React.FC<LetterProps> = ({ letterPos, attemptVal }) => {
    const {board}=useContext(AppContext)
    const letter=board[attemptVal][letterPos]
  return (
    <div>
      {letter}
    </div>
  )
};

export default Letter;
