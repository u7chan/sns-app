import { PropsWithChildren, useContext, useEffect } from 'react'
import { AuthContext } from '../auth/AuthProvider'
import { useNavigate } from 'react-router-dom'

export default function NonProtected({ children }: PropsWithChildren) {
  const navigate = useNavigate()
  const { isAuthenticated } = useContext(AuthContext)
  const loggedIn = isAuthenticated()

  useEffect(() => {
    if (loggedIn) {
      navigate('/')
    }
  }, [loggedIn])

  return <>{!loggedIn && children}</>
}
