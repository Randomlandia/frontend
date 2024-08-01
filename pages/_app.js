import React from "react";
import "@/styles/globals.css";
import { sandiasData } from "@/utils/sandiaData";
import { checkTokenExpiry } from "@/utils/checkTokenExpiry";
import { useEffect, useState } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { handleBeforeUnload } from "@/utils/beforeUnloadHandler";
import { useRouter } from "next/router";
import { handleLogout } from "@/utils/logoutHandler";
import { MusicProvider } from "@/components/home/musicContex";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading]=useState(null)
  useEffect(() => {
    sandiasData();
    checkTokenExpiry();
    const interval = setInterval(() => {
      const exp = checkTokenExpiry();
      if (exp) return;
    }, 3600000);
    return () => clearInterval(interval);
}, [router]);

  useEffect(() => {
    const rm = localStorage.getItem("rememberMe");
    const onBeforeUnload = (event) => {
      if (rm == "false") {
        localStorage.removeItem("rememberMe");
        handleLogout()
      }
      handleBeforeUnload(event);
      event.returnValue = "Ya te vas?";
    };
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, [router]);

  useEffect(() => {
    const rm = localStorage.getItem("rememberMe");
    if (!rm) {
      setIsLoading(true)
      handleLogout();
    }
    setIsLoading(false)
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      {...pageProps}
    >
      <MusicProvider>
        <Component {...pageProps} />
      </MusicProvider>
    </ClerkProvider>
  );
}
