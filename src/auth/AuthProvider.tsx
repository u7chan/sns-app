import { PropsWithChildren, createContext, useState, useEffect } from 'react'
import { User } from '../types'

type Auth = {
  user: User | null
  signIn: (params: { email: string; password: string }) => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<Auth>({} as Auth)

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null)

  const handleSignIn = async (params: { email: string; password: string }) => {
    alert(`Auth: ${JSON.stringify(params)}`)
    setUser({ name: 'john doe' })
  }

  const handleSignOut = async () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn: handleSignIn,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
