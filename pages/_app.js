import "@/styles/globals.css"

import { useEffect } from "react"

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs"

import { checkTokenExpiry } from "@/utils/checkTokenExpiry"

export default function App({ Component, pageProps }) {
  useEffect(() => {
    checkTokenExpiry()
    const interval = setInterval(() => {
      checkTokenExpiry()
    }, 3600000)
    return () => clearInterval(interval)
  }, [])

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      {...pageProps}
    >
      <Component {...pageProps} />
    </ClerkProvider>
  )
}
