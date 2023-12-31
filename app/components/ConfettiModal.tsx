import Confetti from 'react-confetti'
import useWindowSize from 'react'

const ConfettiModal = () => {
    const width =window.innerWidth
  return (
      <div
          className="
          fixed
          inset-0
          top-16
          ">
      <Confetti width={width}/>
    </div>
  )
};

export default ConfettiModal;
