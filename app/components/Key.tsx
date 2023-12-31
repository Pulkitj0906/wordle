import { useContext } from "react";
import { AppContext } from "./Body";


interface KeyProps{
    keyVal: string
    disabled?:boolean
}

const Key: React.FC<KeyProps> = ({ keyVal ,disabled}) => {
    const {
        OnSelectLetter,
        OnDelete,
        onEnter
    } = useContext(AppContext)
    const selectLetter = () => {
        if (keyVal === 'ENT') {
            onEnter();
        } else if (keyVal==='DEL') { 
            OnDelete();
        } else{
            OnSelectLetter(keyVal)
        }
    }
  return (
      <div
          onClick={selectLetter}
          className={`h-14 rounded-sm font-bold flex justify-center text-white items-center  w-auto p-4 ${disabled?'bg-neutral-700':'bg-neutral-500'}`}>
      {keyVal}
    </div>
  )
};

export default Key;
