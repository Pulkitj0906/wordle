'use client'

import Image from "next/image";
import useSideModal from "./hooks/useSidebar";
import { AiOutlineClose } from "react-icons/ai";



const Sidebar = () => {
    const sidebar=useSideModal()

    if (!sidebar.isOpen) {
        return null
    }
    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
      };
    return (
        <div
            onClick={sidebar.OnClose}
            className="
            h-full
            fixed
            z-40
            inset-0
            ">
        <div
            onClick={stopPropagation}
          className={`
            fixed 
            top-16
            bg-neutral-800
            flex
            flex-col
            z-50
            shadow-lg
            w-80
            rounded-br-md
            `}>
                <div
                          className="
                      flex
                      items-center
                      justify-between
                      p-5
                      rounded-t">
                          <h3 className="text-3xl font-semibold text-slate-300">Also Visit</h3>
                          <button
                              onClick={sidebar.OnClose}
                              className="
                          p-1
                          ml-auto
                          border-0
                        text-white
                          hover:opacity-70
                          transition">
                              <AiOutlineClose size={20 } />
                          </button>
                      </div>
                <div className="p-3">
                <a href="https://www.nytimes.com/games/wordle/index.html" target="_blank" rel="noopener noreferrer">
                    <div className=" p-1 rounded-md hover:bg-neutral-700 hover:cursor-pointer flex flex-row items-center justify-between">
                        <Image alt='' className="h-4 w-4 ml-3" height={40} width={40} src='/images/wordlelogo.png' />
                        <p className="text-slate-200">Actual Wordle</p>
                    </div>
                </a>
                <hr className="opacity-40" />
            </div>
                <div className="p-3">
                <a href="https://messenger-three-bay.vercel.app/" target="_blank" rel="noopener norefferer">
                    <div className=" p-1 rounded-md hover:bg-neutral-700 hover:cursor-pointer flex flex-row items-center justify-between">
                        <Image alt='' className="h-6 w-6 ml-2" height={40} width={40} src='/images/text.png' />
                        <p className="text-slate-200">Slatexter(Messenger Clone)</p>
                    </div>
                </a>
                <hr className="opacity-40" />
            </div>
            <div className="p-3">
                <a href="https://twitterc-nu.vercel.app/" target="_blank" rel="noopener norefferer">
                    <div className=" p-1 rounded-md hover:bg-neutral-700 hover:cursor-pointer flex flex-row items-center justify-between">
                        <Image alt='' className="h-8 w-8 ml-1" height={140} width={140} src='/images/slater.png' />
                        <p className="text-slate-200">Slater(Twitter Clone)</p>
                    </div>
                </a>
                <hr className="opacity-40" />
            </div>
            <div className="p-3 pb-0">
                <a href="https://slatestay.onrender.com/" target="_blank" rel="noopener norefferer">
                    <div className=" p-1 rounded-md hover:bg-neutral-700 hover:cursor-pointer flex flex-row items-center justify-between">
                        <Image alt='' className="h-8 w-12" height={140} width={140} src='/images/slatestay.png' />
                        <p className="text-slate-200">SlateStay</p>
                    </div>
                </a>
                <hr className="opacity-40" />
            </div>
                <div className="p-2 flex top-1 justify-center flex-row relative text-slate-200">
                    <p className="">Created by: Pulkit Jain</p>
                    <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-transparent to-neutral-900"></div>
                </div>
            </div>
        </div>
  )
};

export default Sidebar;
