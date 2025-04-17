"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { signOut } from "@/lib/supabaseClient"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Dashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()
  
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])
  
  const handleSignOut = async () => {
    await signOut()
    router.push("/login")
  }
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }
  
  if (!user) {
    return null
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-6 border-b">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm">{user.email}</span>
          <ThemeToggle />
        </div>
      </header>
      
      <main className="flex-grow p-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Welcome to your dashboard</h2>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-4">Your Account</h3>
            <p className="mb-4">Logged in as: <strong>{user.email}</strong></p>
            
            <Button 
              variant="outline" 
              onClick={handleSignOut}
            >
              Sign out
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}