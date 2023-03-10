import { Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import Splash from './pages/splash/Splash'
import Login from './features/auth/Login'
import DashLayout from './layout/DashLayout'
import DashConverter from './features/converter/DashConverter'
import Register from './features/auth/Register'
import RequiredAuth from '@/components/RequiredAuth'

import { AuthContext } from './context/AuthContext'

import { useMemo, useState } from 'react'


const App = () => {
  const [username, setUsername] = useState<string | null>(null)

  const providerValue = useMemo(() => ({ username, setUsername }), [username, setUsername])
  
  return (
    <AuthContext.Provider value={providerValue}>
      <Routes>
        <Route path='/' element={<Layout />} >
        <Route index element={<Splash />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        
        
        <Route path='dash' element={<RequiredAuth/>} />
          <Route index element={<DashConverter />} />
        </Route>
          
      </Routes>
    </AuthContext.Provider>
  )
}

export default App