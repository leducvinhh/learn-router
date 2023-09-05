import { NavLink, Outlet } from 'react-router-dom'

export default function PrivateLayout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/help">Help</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>From Vin with love</p>
      </footer>
    </>
  )
}
