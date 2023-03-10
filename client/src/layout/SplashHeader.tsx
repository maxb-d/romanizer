import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

import Logo from '@/assets/logo.png'
import ActionButton from '@/components/ActionButton'
import AnchorLink from '@/pages/splash/components/AnchorLink'
import Modal from '@/pages/splash/components/Modal'

import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'

import './linkStyle.css'

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const SplashHeader = ( { selectedPage, setSelectedPage }: Props) => {
    const flexString = 'flex items-center justify-between'
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    const [isMenuToggled, setIsMenuToggled] = useState(false) 

    const handleClickOutside = (e: any) => {
        e.stopPropagation()
        setIsMenuToggled(!isMenuToggled)
    }

  return (
    <header>
        {/* HEADER DIV */}
        <div 
            className={`${flexString} fixed top-0 z-30 h-24 w-full py-6 bg-white`}
            onClick={() => setIsMenuToggled(false)}    
        >
            {/* INSIDE HEADER DIV */}
            <div className={`${flexString} mx-auto px-6 w-full`}>
                {/* LOGO DIV */}
                <motion.div
                    initial={{ 
                        opacity: 0, 
                        x: "-30vw",
                    }}
                    animate={{
                        opacity: 1,
                        x: "0",
                    }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        damping: 25,
                        stiffness: 500,
                    }}
                >
                    <img className='w-40' alt="logo" src={Logo} />
                </motion.div>
                <div className={`${flexString}`}>
                    { isAboveMediumScreens ? (
                            <div className={`${flexString} gap-24`}>
                                {/* LINKS DIV */}
                                <motion.div 
                                    initial={{
                                        opacity: 0,
                                        y: "-5vh"
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className={`${flexString} gap-12 `}>
                                    <AnchorLink
                                        page="Accolligere"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <AnchorLink
                                        page="Praesentationem"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <AnchorLink
                                        page="Cogitatio"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link to='/dash'
                                        className='transition duration-500 hover:text-pink-logo'
                                    >
                                        Convertus
                                    </Link>
                                </motion.div>
                            
                                <motion.div 
                                    initial={{
                                        opacity: 0
                                    }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    transition={{ duration: 1.2, delay: 0.3}}
                                    className={`${flexString} gap-6`}>
                                    <Link to='/register'>
                                        <div className='link-width'>
                                            <button>Sign Up</button>
                                        </div>
                                    </Link>
                                    <div>
                                        <Link to='/login'><ActionButton>Sign In</ActionButton></Link>
                                    </div>
                                </motion.div>
                            </div>
                        ) : (
                            <div className={`${flexString} w-full`}>
                                <button
                                    className='rounded-full p-2'
                                    onClick={(e) => handleClickOutside(e)}
                                >
                                    { !isMenuToggled ? <Bars3BottomRightIcon className='h-6 w-6 fill-black' /> : <XMarkIcon className='h-6 w-6 fill-black' />}
                                    
                                </button>
                            </div>  
                        )
                    }
                </div>
            </div>
        </div>

        {/* MOBILE MENU MODAL */}
        <AnimatePresence>
            { !isAboveMediumScreens && isMenuToggled && (
                <Modal 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    isOpen={isMenuToggled}
                />
            )}
        </AnimatePresence>
    </header>
  )
}

export default SplashHeader