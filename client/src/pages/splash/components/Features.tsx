import { motion } from 'framer-motion'

import { SelectedPage } from '@/shared/types'
import Waves from '@/assets/wiwi.jpg'
import FeatureImage from '@/assets/goodNoBG.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Features = ({ setSelectedPage }: Props) => {
  return (
    <section
      id='praesentationem'
      className='gap-16 py-10 h-full w-full md:pb-0'
    >
      {/* MAIN HEADER */}
      <motion.div 
        className='bg-pink-logo z-40'
        onViewportEnter={() => setSelectedPage(SelectedPage.Praesentationem)}
      >
        <img className='mt-[-6rem] z-10' src={Waves}></img>
        <div className='flex justify-between items-center w-full '>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
              <img className='' src={FeatureImage} />
            </motion.div>
            <div className='h-screen w-full flex justify-center items-center'>
            <motion.div
              className='flex-col font-mynerve font-bold text-[35px] text-white'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                    <p className=''>How does it work ?</p><br/>
                    <p className=''>1. Enter an Integer</p>
                    <p className=''>2. Just wait for it ... </p>
                    <p className='text-sm ml-72 mt-12 text-blue-logo'>LX VI V "CAESAR APPROVED" V VI LX </p>
                </motion.div>
            </div>
        </div>
        </motion.div>
    </section>
  )
}

export default Features