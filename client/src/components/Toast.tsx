import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

type Props = {
}

const Toast = ( props: Props) => {
  const [isOpen, setIsOpen] = useState<Boolean>(true)
  const closeToast = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    { isOpen ? (
      <AnimatePresence>
      <motion.div 
        initial={{
          opacity: 1,
          x: "20vh",
        }}
        animate={{
            opacity: 1,
            x: 0
        }}
        exit={{x: "20vh", opacity: 1, transition: {duration: 0.5}}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="h-12 w-[250px] text-center flex justify-between items-center z-40 bg-gray-50 rounded-lg text-green-300 absolute bottom-0 right-0 mb-8 mr-12">
        <div className='flex justify-between items-center px-4 gap-4'>
          <CheckCircleIcon className='h-6 w-6'/>
          <p>Login Success</p>
        </div>
        <button className='mr-2 '
          onClick={closeToast}
        >
          <XCircleIcon className='h-6 w-6 fill-black hover:fill-pink-logo'/>
        </button>
      </motion.div>
      </AnimatePresence>
    )
      : (
        null
      )
    }
  </>
  )
}

export default Toast