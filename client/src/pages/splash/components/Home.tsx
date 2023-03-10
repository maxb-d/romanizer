import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'
import BlobRight from '@/assets/blob.svg'
import BlobLeft from '@/assets/blob_left.svg'
import Gladiator from '@/assets/good3NoBG.png'

import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"

import './linkStyleBlack.css'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    
  return (
    <section
      id='accolligere'
      className='flex justify-center items-center mt-8 gap-16 h-full w-full md:pb-0'
    >
    {/* MAIN HEADER */}
      <motion.div 
        className='ml-8 flex justify-between items-center mx-auto mt-0'
        onViewportEnter={() => setSelectedPage(SelectedPage.Accolligere)}
      >
        {/* MAIN TEXT */}
        <motion.div 
            initial={{
                opacity: 0,
                y: "10vh",
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='ml-12 flex justify-center items-start w-full md:mt-0 xs:mt-0 sm:mt-0 md:text-[50px] sm:text-[45px] xs:text-[45px] font-bold font-mynerve flex-col'
        >
            <div className='relative'>
                <div className='z-40 relative'>
                    <div>Convert <span className="text-pink-logo">Numbers</span> The </div> 
                    <div><span className="text-pink-logo">Roman</span> Way, <span className="text-pink-logo">With</span> Elegance <span className="text-pink-logo">And </span> 
                        Beauty, <span className="text-pink-logo">Not</span> Just <span className="text-pink-logo">Brute</span> Force.</div>
                </div>
                <img className='absolute top-[-6rem] left-[-13rem]' src={BlobLeft} />
            </div>
        </motion.div>
        
        {/* MAIN IMAGE */}
        { isAboveMediumScreens && (
          <motion.div 
          initial={{
            opacity: 0,
            x: "100vh"
        }}
        animate={{
            opacity: 1,
            x: 0
        }}
        transition={{ duration: 1, delay: 0.5 }}
          >
            <div className='relative flex justify-center items-center'>
                <img className='relative z-10 w-screen' alt="main-image" src={BlobRight}/>
                <img className='absolute mr-52 z-10 h-96 w-52' alt="galdiator" src={Gladiator} />
                <div className='absolute ml-48 mt-44 z-40 flex font-bold'>
                    <Link to='/login'><div className='flex'>
                        <button className='link-width-black'>Try it Now</button>
                        <ArrowSmallRightIcon className='h-6 w-6 ml-2'></ArrowSmallRightIcon>
                    </div>
                    </Link>
                    
                </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

export default Home