import Logo from '@/assets/logo.png'
import { useState, useContext } from 'react'
import ActionButton from '@/components/ActionButton'
import { Link } from 'react-router-dom'
import API from '../../lib/axiosApi'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/context/AuthContext'


type Props = {}

const Login = (props: Props) => {
  const {username, setUsername} = useContext(AuthContext)
  const navigate = useNavigate()

  const [user, setUser] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleLogin = async () => {
    const res = await API.post('/auth/signin', 
      { 
        username: user, 
        password 
      },
      {
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      },
      )

    console.log('res = ', res)
    
    if(res.status === 201)
    {
      console.log("success")
      setUser(user)
      setUsername(user)
      console.log("set username to = ", user)
      navigate('/dash')

    }
    else{
      navigate('/login')
    }
    
  }
  return (
    <div className="bg-pink-logo h-screen w-screen flex justify-center items-center">
      <div className="bg-white rounded-lg w-1/3 h-4/6 drop-shadow-xl">
        {/* HEADER */}
        <div className='flex justify-center items-center w-full py-4'>
          <div>
            <img src={Logo} className='rounded-lg h-16'/>
            <div className='w-full border-gray-400 pt-2 border-b-2'></div>
          </div>
        </div>
        {/* CONTENT */}
        <div className='h-4/6 w-full rounded-lg flex-col justify-center items-center p-4'>
          <div className='flex justify-center items-center text-bold font-mynerve font-bold text-xl mb-4 text-pink-logo'>
            <h1>Login</h1>
          </div>
          <div className='flex justify-center items-center'>
            <input
              placeholder='*Username'
              type='text'
              className=' border-b border-gray-300 text-center'
              value={user}
              onChange={e => setUser(e.target.value)}
            />
          </div>
          <div className='flex justify-center items-center mt-6'>
            <input
              placeholder='*Password'
              type='password'
              className=' border-b border-gray-300 text-center'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className='flex justify-center items-center gap-8 mt-8'>
            <Link to='/register'>
              <div className='link-width'>
                  <button>Sign Up</button>
              </div>
            </Link>
            <div
              onClick={handleLogin}
            >
              <ActionButton>Sign In</ActionButton>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Login