import {useCallback} from "react"
import { AiOutlineClose } from 'react-icons/ai'

interface ModalProps{
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
}


const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled
}) => {
    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }
        onClose()
    }, [disabled, onClose])
    
    const handleSumbit = useCallback(() => {
        if (disabled) {
            return;
        }
        onSubmit();
    }, [disabled, onSubmit])
    
    if (!isOpen) {
        return null;
      }
    
      const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
      };
  return (
      <>
          <div onClick={handleClose} className="
          justify-center
          items-center
          flex
          overflow-x-hidden
          overflow-y-auto
          fixed
          inset-0
          z-50
          outline-none
          focus: oultine-none
          bg-neutral-800
          bg-opacity-70 
          backdrop-blur-sm 
          ">
              <div
                  onClick={stopPropagation}
                  className="
              relative
              w-full
              lg:w-1/3
              my-6
              mx-auto
              lg:max-w-xl
              h-full
              lg:h-auto
              dark:bg-neutral-800
              bg-white
              shadow-xl
              rounded-lg
              ">
                  {/* {content} */}
                  <div className="
                  h-full
                  lg:h-auto
                  border-0
                  rounded-lg
                  shadow-lg
                  relative
                  flex
                  flex-col
                  w-full
                  outline-none
                  focus:ouline-none
                  ">
                      {/* header */}
                      <div
                          className="
                      flex
                      items-center
                      justify-between
                      p-5
                      rounded-t">
                          <h3 className="text-3xl font-semibold dark:text-slate-300">{ title}</h3>
                          <button
                              onClick={handleClose}
                              className="
                          p-1
                          ml-auto
                          border-0
                        dark:text-white
                          hover:opacity-70
                          transition">
                              <AiOutlineClose size={20 } />
                          </button>
                      </div>
                      {/* body */}
                      <div className="relative p-5 flex-auto">
                          {body}
                      </div>
                      {/* footer */}
                      <div className="flex flex-col gap-2 p-5">
                          {footer}
                      </div>
                  </div>
              </div>
              
          </div>
      </>
  )
};

export default Modal;
