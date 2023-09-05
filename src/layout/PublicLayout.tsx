import { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

export default function PublicLayout() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/login')
  }, [navigate])

  return (
    <>
      <header className="h-[80px] bg-teal-700 flex justify-end px-10">
        <nav className="flex justify-center items-center gap-5 text-white">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>this is footer public router</footer>
    </>
  )
}
