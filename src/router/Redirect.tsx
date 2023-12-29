import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/AuthProvider'

export default function Redirect() {
  const navigate = useNavigate()
  const { isAuthenticated } = useContext(AuthContext)
  const loggedIn = isAuthenticated()

  useEffect(() => {
    if (loggedIn) {
      navigate('/')
    } else {
      navigate('/sign-in')
    }
  }, [loggedIn])

  return <></>
}
