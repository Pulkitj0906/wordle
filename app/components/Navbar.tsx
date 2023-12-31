'use client'
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import useEditModal from "./hooks/useEditModal";
import useQuestionModal from "./hooks/useQuestionModal";
import useSideModal from "./hooks/useSidebar";

const Navbar = () => {
    const editModal = useEditModal();
    const questionModal = useQuestionModal();
    const sidebar=useSideModal()
    return (
    <>
        <div className="
                bg-neutral-900
                inset-0 
                h-16
                text-white
                border-b-[1px]
                border-neutral-500
                flex
                justify-between
                items-center                
                font-mono
                font-extrabold
                ">
            <div className="p-4 " >
            <IoReorderThreeSharp className='cursor-pointer' onClick={sidebar.OnOpen} size={40} />
            </div>
            <div className="">
                <h1 className=" text-3xl">Wordle</h1>
            </div>
            <div className="p-4 flex flex-row gap-2">
                    <HiOutlineQuestionMarkCircle onClick={questionModal.OnOpen} size={32} />
                    <IoSettingsOutline onClick={editModal.OnOpen} size={30} />
            </div>
                
        </div>
    </>
  )
};

export default Navbar;
