'use client'

import { useState, createContext, Dispatch, SetStateAction } from "react";
import Keyboard from "./Keyboard";
import Table from "./Table";
import { boardDefault } from "./Words";

type BoardType = string[][]; // Define the type of your board

interface AppContextProps {
  board: BoardType;
  setBoard: Dispatch<SetStateAction<BoardType>>;
}

// Providing a default value for AppContext
export const AppContext = createContext<AppContextProps>({
  board: boardDefault,
  setBoard: () => {},
});

export default function Home() {
  const Body = () => {
    const [board, setBoard] = useState<BoardType>(boardDefault);

    return (
      <div className="
              bg-neutral-900
              h-auto
              flex-grow
              flex
              flex-col
              justify-center
              items-center
              gap-5
              ">
        <AppContext.Provider value={{ board, setBoard }}>
          <Table />
          <Keyboard />
        </AppContext.Provider>
      </div>
    );
  };

  return <Body />;
}
