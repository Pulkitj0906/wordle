import { MdOutlineRefresh } from "react-icons/md";


const GameOver = () => {
  const handleRefresh = () => {
    window.location.reload(); 
  };
  return (
    <div className="dark:text-white flex justify-center items-center h-9 w-9 z-10">
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
