import { useState } from "react";

interface ToggleProps{
    isOpened?: boolean;
    onClick: () => void;
}

const Toggle:React.FC<ToggleProps> = ({isOpened,onClick}) => {
  return (
      <div
          onClick={onClick}
          className={`
          border
          flex
        border-black
            h-6
            w-10
            transition
            duration-500
            rounded-full
            ${isOpened?'bg-white':'bg-black'}
            `}>
          <div
              
              className={` 
              h-4
              self-center
              rounded-full
              w-4
              transition
              duration-500
              ${isOpened ? 'bg-black translate-x-1' : 'bg-white translate-x-5'}
              `}>
      </div>
      
    </div>
  )
};

export default Toggle;
