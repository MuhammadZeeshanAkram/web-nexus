"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase, getUser } from '@/lib/supabaseClient'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for the current user
    const fetchUser = async () => {
      const { user, error } = await getUser()
      setUser(user || null)
      setLoading(false)
    }

    fetchUser()

    // Set up auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user || null)
        setLoading(false)
      }
    )

    return () => {
      authListener?.subscription?.unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)