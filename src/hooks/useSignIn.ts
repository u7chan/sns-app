import { useContext } from 'react'
import { SignInForm } from '../types'
import { AuthContext } from '../auth/AuthProvider'

export default function useSignIn() {
  const auth = useContext(AuthContext)

  return function (value: SignInForm): Promise<void> {
    return auth.signIn(value)
  }
}
