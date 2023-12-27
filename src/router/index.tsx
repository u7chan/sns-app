import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'
import { AuthContext } from '../auth/AuthProvider'
import NotFound from '../pages/NotFound'
import SignIn from '../pages/SignIn'
import Timeline from '../pages/Timeline'
import Protected from './Protected'

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/',
    element: (
      <Protected>
        <Timeline />
      </Protected>
    ),
  },
])

export default router
