import { createBrowserRouter } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import Timeline from '../pages/Timeline'

import Protected from './Protected'
import NonProtected from './NonProtected'
import Redirect from './Redirect'

const router = createBrowserRouter([
  {
    path: '*',
    element: <Redirect />,
  },
  {
    path: '/sign-in',
    element: (
      <NonProtected>
        <SignIn />
      </NonProtected>
    ),
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
