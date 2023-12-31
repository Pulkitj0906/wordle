'use client'

import useEditModal from "@/app/components/hooks/useEditModal";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Modal from "./Modal";
import useKeyboard from "./hooks/useKeyboard";
import Toggle from "./Toggle";
import { KeyObject } from "crypto";

const EditModal = () => {
    const EditModal = useEditModal();
    const keyboard=useKeyboard()
    const [ isLoading, setIsLoading ]= useState(false);
    const toggleKeyboard = useCallback(() => {
        keyboard.isOpen ? keyboard.OnClose() : keyboard.OnOpen();
      }, [keyboard]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <div className="text-slate-300 flex justify-between items-center">
                <div className="flex flex-col gap-0 w-4/5">
                    <h1 className="font-semibold">Onscreen Keyboard Input Only</h1>
                    <p className="font-thin text-xs">Ignore key input except from the onscreen keyboard. Most helpful for users using speech recognition or other assistive devices.</p>
                </div>
                <Toggle isOpened={keyboard.isOpen} onClick={toggleKeyboard} />
            </div>
            <hr className="opacity-40" />
            <div className="text-slate-300 flex justify-between">
                <h1 className="font-semibold">Feedback</h1>
                <a href="mailto:support@example.com" className="underline">
                    Email
                </a>
            </div>
            <hr className="opacity-40" />
            <div className="text-slate-300 flex justify-between">
                <h1 className="font-semibold">Report a bug</h1>
                <a href="mailto:support@example.com" className="underline">
                    Email
                </a>
            </div>
            <hr className="opacity-40" />
            <div className="text-slate-300 flex justify-between">
                <h1 className="font-semibold">Community</h1>
                <a href="https://www.nytimes.com/spotlight/wordle-review" target="_blank" rel="noopener noreferrer" className="underline">
                    Wordle Review
                </a>
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

  return (
      <Modal
        disabled={isLoading}
        isOpen={EditModal.isOpen}
        title="Settings"
        actionLabel="Save"
        onClose={EditModal.OnClose}
        onSubmit={()=>{}}
        body={bodyContent}
      />
  )
};

export default EditModal;
