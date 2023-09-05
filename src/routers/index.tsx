import HomePage from '@/pages/home/HomePage'
import About from '@/pages/about/About'
import Help from '@/pages/help/Help'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import PublicLayout from '@/layout/PublicLayout'
import PrivateLayout from '@/layout/PrivateLayout'
import Login from '@/pages/login/Login'
import Register from '@/pages/register/Register'
import { useSelector } from 'react-redux'
import { RootState } from '@/stores'

const createRouter = (isLogin: boolean) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      isLogin ? (
        <Route path="/" element={<PrivateLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="help" element={<Help />} />
        </Route>
      ) : (
        <Route path="/" element={<PublicLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      )
    )
  )

  return router
}

const AppRouter = () => {
  const auth = useSelector((state: RootState) => state.auth.isLogin)

  const router = createRouter(auth)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default AppRouter
