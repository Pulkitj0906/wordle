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
          text-white
          uppercase
          font-bold
          text-2xl
          ${keytype==='correct'&& 'bg-thisgreen'}
          ${keytype==='almost'&& 'bg-thisyellow'}
          ${keytype==='fill'&& 'bg-neutral-700'}
          `}>
      {keyVal}
    </div>
  )
};

export default FakeKey;
