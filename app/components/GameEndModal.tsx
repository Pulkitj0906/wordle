'use client'

import { useContext, useState } from "react";
import Modal from "./Modal";
import useGameEndModal from "./hooks/useGameEndModal";
import { AppContext } from "./Body";

const GameEndModal = () => {
    const GameEnd = useGameEndModal();
    const { correctWord, gameOver,currAttempt } = useContext(AppContext)
    const [isLoading, setIsLoading] = useState(false);
    const stats=Math.floor(Math.random()*10+90)

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <div className="text-slate-300 flex justify-between items-center">
                <div className="flex flex-col gap-0">
                    <h1 className="m-4 font-semibold">Correct Word: <span className="font-extrabold">{correctWord.toUpperCase()}</span></h1>
                    <h1 className="m-4">Do not worry only <span className="font-bold">{100-stats}% </span> people could solve this puzzle.</h1>
                    <h1 className="m-4">Give it another try!</h1>
                </div>
            </div>
            <hr className="opacity-40" />
            <div className="text-slate-300 flex justify-between">
                <h1 className="font-semibold">Questions?</h1>
                <a href="https://help.nytimes.com/hc/en-us/articles/360029050872-Word-Games-and-Logic-Puzzles#h_01FVGCB2Z00ZQMDMCYWBPWJNXB" target="_blank" rel="noopener noreferrer" className="underline">
                    FAQ
                </a>
            </div>
            <hr className="opacity-40" />
        </div>
    )
    const bodyContent2 = (
        <div className="flex flex-col gap-4">
            <div className="text-slate-300 flex justify-between items-center">
                <div className="flex flex-col gap-0">
                    <h1 className="m-4 font-semibold">You guessed the correct word: <span className="font-extrabold">{correctWord.toUpperCase()}</span> in {currAttempt.attempt} { currAttempt.attempt>1?'attempts':'attempt'}.</h1>
                    <h1 className="m-4">You beat <span className="font-bold">{stats}% </span> people who could not solve this puzzle.</h1>
                    <h1 className="m-4">Give the next puzzle a try!</h1>
                </div>
            </div>
            <hr className="opacity-40" />
            <div className="text-slate-300 flex justify-between">
                <h1 className="font-semibold">Questions?</h1>
                <a href="https://help.nytimes.com/hc/en-us/articles/360029050872-Word-Games-and-Logic-Puzzles#h_01FVGCB2Z00ZQMDMCYWBPWJNXB" target="_blank" rel="noopener noreferrer" className="underline">
                    FAQ
                </a>
            </div>
            <hr className="opacity-40" />
        </div>
    )
    const footercontent = (
        <div className="text-slate-300 flex justify-between">
                <h1 className="font-semibold">After this, a new puzzle will be created. Happy Wordling!</h1>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={GameEnd.isOpen}
            title={gameOver.guessedWord===true? "Congratulations!👏":'Nice Try!👍'}
            actionLabel="Save"
            onClose={GameEnd.OnClose}
            onSubmit={()=>{}}
            body={gameOver.guessedWord===true? bodyContent2:bodyContent}
            footer={footercontent}
      />
  )
};

export default GameEndModal;
