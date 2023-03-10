import { AuthContext } from '@/context/AuthContext'
import Login from '@/features/auth/Login'
import DashConverter from '@/features/converter/DashConverter'
import DashLayout from '@/layout/DashLayout'
import React, { useContext } from 'react'

type Props = {
}

const RequiredAuth = (props: Props) => {
    const {username, setUsername} = useContext(AuthContext)

    console.log("trying to navigate, username = ", username)
  return (
    <div>
        { username === null ? (
                <Login />
            ) : (
                <DashLayout />
            )
        }
        </div>
  )
}

export default RequiredAuth