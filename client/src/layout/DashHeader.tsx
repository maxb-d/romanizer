import Logo from '@/assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import Profile from '@/assets/profile.png'
import ActionButton from '@/components/ActionButton'

import { useContext } from 'react'

import { AuthContext } from '@/context/AuthContext'
import API from '@/lib/axiosApi'

type Props = { }

const DashHeader = (props: Props) => {
    const {username, setUsername} = useContext(AuthContext)
    const navigate = useNavigate()
    
    const handleLogout = async () => {
        const res = await API.get('/auth/signout')
        setUsername(null)
        navigate('/')
    }

  return (
    <header>
        <div className='flex justify-between items-center px-8 py-4'>
            <Link
                to='/dash'
            >
                <img className='w-40' alt="logo" src={Logo} />
            </Link>
            {/* PROFILE PIC AND SELECT */}
            <motion.div 
            
                className='h-14 w-14 flex items-center justify-center gap-6 mr-12'
            >
                <div
                    onClick={handleLogout}
                >
                    <ActionButton>Logout</ActionButton>
                </div>
                <img src={Profile} className='h-12 w-12 bg-pink-logo rounded-full  border-black border-2'/>
            </motion.div>
        </div>
    </header>
  )
}

export default DashHeader