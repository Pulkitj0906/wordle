'use client'


import Modal from "./Modal";
import useQuestionModal from "./hooks/useQuestionModal";
import FakeKey from "./FakeKey";

const QuestionModal = () => {
    const QuestionModal = useQuestionModal();

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <h2 className="text-sl dark:text-slate-200">Guess the Wordle in 6 tries.</h2>
                
                <li className="dark:text-white text-xs">Each guess must be a valid 5-letter word.</li>
                <li className="dark:text-white text-xs">The color of the tiles will change to show how close your guess was to the word.</li>
                <br />
                <h2 className="text-sl dark:text-slate-200">Examples:</h2>
                <div className="flex gap-1">
                    <FakeKey keyVal="R" keytype="correct"/>
                    <FakeKey keyVal="i"/>
                    <FakeKey keyVal="g"/>
                    <FakeKey keyVal="h"/>
                    <FakeKey keyVal="t"/>
                </div>
                <h2 className="text-xs mt-1 dark:text-slate-200"><span className="font-bold">R</span> is in the word and in the correct spot.</h2>
                <div className="flex gap-1 mt-3">
                    <FakeKey keyVal="c" />
                    <FakeKey keyVal="o" keytype="almost"/>
                    <FakeKey keyVal="v"/>
                    <FakeKey keyVal="e"/>
                    <FakeKey keyVal="r"/>
                </div>
                <h2 className="text-xs mt-1 dark:text-slate-200"><span className="font-bold">O</span>  is in the word but in the wrong spot.</h2>
                <div className="flex gap-1 mt-3">
                    <FakeKey keyVal="w" />
                    <FakeKey keyVal="a"/>
                    <FakeKey keyVal="t" keytype="fill"/>
                    <FakeKey keyVal="e"/>
                    <FakeKey keyVal="r"/>
                </div>
                <h2 className="text-xs mt-1 dark:text-slate-200"><span className="font-bold">T</span> is not in the word in any spot.</h2>
            </div>
            <hr className="dark:opacity-40"/>
        </div>
    )
    const footerContent = (
        <div className="dark:text-slate-200">
            A new puzzle is created at refresh.
        </div>
    )

  return (
      <Modal
        isOpen={QuestionModal.isOpen}
        title="How To Play?"
        actionLabel="Save"
        onClose={QuestionModal.OnClose}
        onSubmit={()=>{}}
        body={bodyContent}
        footer={footerContent}
      />
  )
};

export default QuestionModal;
