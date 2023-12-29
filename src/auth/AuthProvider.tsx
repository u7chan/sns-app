import { PropsWithChildren, createContext, useState, useEffect } from 'react'

type Auth = {
  isAuthenticated: () => boolean
  signIn: (params: { email: string; password: string }) => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<Auth>({} as Auth)

export function AuthProvider({ children }: PropsWithChildren) {
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem('token'),
  )

  const handleIsAuthenticated = (): boolean => {
    return !!accessToken
  }

  const handleSignIn = async (params: { email: string; password: string }) => {
    const dummyToken = '4AgaMTehwB2gjG9IDo8JieKQXlcTtOvitZaCC6fpbYQ='
    localStorage.setItem('token', dummyToken)
    setAccessToken(dummyToken)
  }

  const handleSignOut = async () => {
    localStorage.clear()
    setAccessToken(null)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: handleIsAuthenticated,
        signIn: handleSignIn,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
