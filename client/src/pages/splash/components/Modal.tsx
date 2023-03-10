import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

import AnchorLink from './AnchorLink'
import ActionButton from '@/components/ActionButton'

import { SelectedPage } from '@/shared/types'

import '@/layout/linkStyle.css'

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void,
    isOpen: Boolean
}

const variants = {
    open: { opacity: 1, x: 0},
    closed: { opacity: 0, x: "-100%" },
}

const Modal = ({ selectedPage, setSelectedPage, isOpen }: Props) => {
  return (
        <motion.div
            key="modal"
            className='fixed z-40 w-full drop-shadow-2x1 bg-white'
            initial={{ y: "-100vh", opacity: 1}}
            animate={{y: "20%", opacity: 1}}
            exit={{y: "-100vh", opacity: 1, transition: {duration: 0.4}}}
            transition={{duration: 0.4, ease: "easeOut"}}
        >
            <div className="flex-col px-8 py-4 text-xl">
                {/* LINKS DIV */}
                <div className="flex-col py-2">
                    <div className='py-2'>
                        <AnchorLink
                            page="Accolligere"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                    <div className='py-2'>
                        <AnchorLink
                            page="Praesentationem"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                    <div className='py-2'>
                        <AnchorLink
                            page="Cogitatio"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                    <div className='py-2'>
                        <AnchorLink
                            page="Contactus"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            
                <div>
                    <Link to='/register'>
                        <div className='py-4'>
                            <button className='link-width'>Sign Up</button>
                        </div>
                    </Link>
                    <div>
                        <Link to='/login'><ActionButton>Sign In</ActionButton></Link>
                    </div>
                </div>
            </div>
        </motion.div>
  )
}

export default Modal