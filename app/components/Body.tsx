'use client'

import { useState, createContext, Dispatch, SetStateAction, useEffect } from 'react';
import Keyboard from './Keyboard';
import Table from './Table';
import { boardDefault, generateWordSet } from './Words';
import GameOver from './GameOver';
import GameEndModal from './GameEndModal';
import ConfettiModal from './ConfettiModal';

type BoardType = string[][];

interface AppContextProps {
  board: BoardType;
  setBoard: Dispatch<SetStateAction<BoardType>>;
  currAttempt: { attempt: number; letterPos: number };
  setCurrAttempt: Dispatch<SetStateAction<{ attempt: number; letterPos: number }>>;
  OnSelectLetter: (keyVal: string) => void;
  OnDelete: () => void;
  onEnter: () => void;
  correctWord: string;
  disabledLetters: string[];
  setDisabledLetters: Dispatch<SetStateAction<string[]>>
  gameOver: { gameOver: boolean; guessedWord: boolean };
  setGameOver: Dispatch<SetStateAction<{ gameOver: boolean; guessedWord: boolean }>>;
}

export const AppContext = createContext<AppContextProps>({
  board: boardDefault,
  setBoard: () => {},
  currAttempt: { attempt: 0, letterPos: 0 },
  setCurrAttempt: () => {},
  OnSelectLetter: () => {},
  OnDelete: () => {},
  onEnter: () => {},
  correctWord: '',
  disabledLetters: [],
  setDisabledLetters: () => { },
  gameOver: { gameOver: false, guessedWord: false },
  setGameOver: () => {},
});

export default function Home() {
  const Body = () => {
    const [board, setBoard] = useState<BoardType>(boardDefault);
    const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
    const [wordset, setWordSet] = useState<Set<string> | null>(null);
    const [disabledLetters,setDisabledLetters]=useState<string[]>([])
    const [gameOver,setGameOver]=useState({gameOver:false,guessedWord: false})
    const [correctWord,setCorrectWord]=useState<string>('')
    
    useEffect(() => {
      generateWordSet().then((words) => {
        if (words.wordSet instanceof Set) {
          setWordSet(words.wordSet as Set<string>);
          if (words.todaysWord !== null) {
            setCorrectWord(words.todaysWord);
            console.log(words.todaysWord)
          }
        }
      });
    }, []);

    const OnSelectLetter = (keyVal: string) => {
      if (currAttempt.letterPos > 4) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
    };

    const OnDelete = () => {
      if (currAttempt.letterPos === 0) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = '';
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
    };

    const onEnter = () => {
      if (currAttempt.letterPos !== 5 || !wordset) return;
      let currWord = '';
      for (let i = 0; i < 5; i++) {
        currWord += board[currAttempt.attempt][i];
      }

      if (wordset.has(currWord.toLowerCase())) {
        setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
      } else {
        alert('Word not found');
      }

      if (currWord === correctWord.toUpperCase()) {
        setGameOver({gameOver:true,guessedWord:true})
      }
      if (currAttempt.attempt === 5) {
        setGameOver({gameOver:true,guessedWord:false})
      }
    };

    return (
      <div className="
              dark:bg-neutral-900
              h-auto
              flex-grow
              flex
              flex-col
              justify-center
              items-center
              gap-5
              ">
        <AppContext.Provider
          value={{
            board,
            setBoard,
            currAttempt,
            setCurrAttempt,
            OnSelectLetter,
            OnDelete,
            onEnter,
            correctWord,
            disabledLetters,
            setDisabledLetters,
            gameOver,
            setGameOver,
          }}
        >
          <Table />
          {gameOver.gameOver?<><GameEndModal/> <GameOver/></>:<Keyboard />}
          {gameOver.guessedWord?<ConfettiModal/>:''}
        </AppContext.Provider>
      </div>
    );
  };

  return <Body />;
}
