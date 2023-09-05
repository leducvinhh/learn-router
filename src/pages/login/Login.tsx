import { login } from '@/stores/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    dispatch(login())
    navigate('/')
  }

  return (
    <div className="w-[300px] h-[500px] shadow-lg mx-auto p-5">
      <form action="">
        <div className="bg-red border-[1px] border-solid">
          <label htmlFor="">Username</label>
          <input type="text" className="border-[1px] border-solid" />
        </div>
        <div className="bg-red border-[1px] border-solid">
          <label htmlFor="">Password</label>
          <input type="text" className="border-[1px] border-solid" />
        </div>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}
