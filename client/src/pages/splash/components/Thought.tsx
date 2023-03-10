import { motion } from 'framer-motion'

import { SelectedPage } from '@/shared/types'

import BlobRight from '@/assets/blob.svg'
import BlobLeft from '@/assets/blob_left.svg'
import Fiat from '@/assets/fiat.png'
import Creme from '@/assets/creme.png'
import Nikes from '@/assets/nike.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Thought = ({ setSelectedPage }: Props) => {
  return (
    <section
        id="cogitatio"
        className='flex-col justify-center items-center gap-16 py-10 h-full w-full md:pb-0 bg-white font-mynerve'
    >
        <motion.div 
            onViewportEnter={() => setSelectedPage(SelectedPage.Accolligere)}
        >
            <motion.div
              className='flex justify-center items-center font-mynerve font-bold text-[40px] text-pink-logo'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div>Just some Random Thought On Romans...</div>
            </motion.div>

            <motion.div
              className='mt-6 flex justify-start items-center pl-24 text-[25px]'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <div>What if Romans had Trainers ?</div>
                <div className='relative ml-12'>
                <img src={BlobRight} className='absolute h-44 w-44'></img>
                <img src={Nikes} alt="trainers" className='h-48 w-56 relative z-10'/>
                </div>
            </motion.div>

            <motion.div
                className='flex justify-end items-center pr-24 text-[25px]'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <div className='relative ml-28'>
                <img src={BlobRight} className='absolute h-44 w-44'></img>
                <img src={Creme} alt="trainers" className='h-48 w-56 relative z-10'/>
                </div>
                <div>Did Romans Hydrate their Skin ?</div>
            </motion.div>

            <motion.div
                className='flex justify-start items-center pl-24 text-[25px]'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <div>What if Romans had Fiats ?</div>
                <div className='relative ml-12'>
                <img src={BlobRight} className='absolute h-44 w-44'></img>
                <img src={Fiat} alt="trainers" className='h-48 w-56 relative z-10'/>
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Thought