import { motion } from 'framer-motion'

type Props = {
    children: React.ReactNode
}

const ActionButton = ({ children }: Props) => {
  return (
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="drop-shadow-lg rounded-md bg-pink-logo transition duration-400 text-white font-bold py-2 px-4">
          {children}
      </motion.button>
  )
}

export default ActionButton