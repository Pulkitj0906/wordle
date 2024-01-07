interface KeyProps{
    keyVal: string
    disabled?: boolean
    keytype?:string
}

const FakeKey: React.FC<KeyProps> = ({ keyVal ,disabled,keytype}) => {
   
  return (
      <div
          className={` border
          border-neutral-500
          rounded-md
          flex
          items-center
          justify-center
          h-12
          w-12
          dark:text-white
          uppercase
          font-bold
          text-2xl
          ${keytype==='correct'&& 'bg-thisgreen text-white'}
          ${keytype==='almost'&& 'bg-thisyellow text-white'}
          ${keytype==='fill'&& 'bg-neutral-700 text-white'}
          `}>
      {keyVal}
    </div>
  )
};

export default FakeKey;
