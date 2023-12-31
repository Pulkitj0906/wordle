import { useContext } from "react";
import { AppContext } from "./Body";
import { MdOutlineRefresh } from "react-icons/md";
import {  useRouter } from "next/router";

const GameOver = () => {
  const handleRefresh = () => {
    window.location.reload(); // Refresh the page
  };
  return (
    <div className="text-white flex justify-center items-center h-9 w-9">
      <a onClick={handleRefresh} className="cursor-pointer">
        <MdOutlineRefresh
          className="hover:scale-125 translate-all duration-500 ease-out hover:rotate-180"
          size={28}
        />
      </a>
    </div>
  )
};

export default GameOver;
