import { UIProvider } from '@yamada-ui/react'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './auth/AuthProvider'
import router from './router'

function App() {
  return (
    <UIProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </UIProvider>
  )
}

export default App
