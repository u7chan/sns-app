import { PropsWithChildren, useContext, useEffect } from 'react'
import { AuthContext } from '../auth/AuthProvider'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children }: PropsWithChildren) {
  const navigate = useNavigate()
  const auth = useContext(AuthContext)

  useEffect(() => {
    if (!auth?.user) {
      navigate('/sign-in')
    }
  }, [auth?.user])

  return <>{auth?.user && children}</>
}
