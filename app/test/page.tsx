'use client'
import { useAuth } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'
export default function Example() {
  const { isLoaded, userId, sessionId, getToken } = useAuth()

  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return null
  }
  else {
    console.log("use Auth", useAuth())
    console.log("use User" , useUser());
    
  }

  return (
    <div>
      Hello, {useUser().user?.fullName} your current active session is {sessionId}
    </div>
  )
}