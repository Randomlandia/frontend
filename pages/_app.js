import React from "react";
import "@/styles/globals.css";
import { sandiasData } from "@/utils/sandiaData";
import { checkTokenExpiry } from "@/utils/checkTokenExpiry";
import { useEffect } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { handleBeforeUnload } from "@/utils/beforeUnloadHandler";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    sandiasData();
    checkTokenExpiry();
    const interval = setInterval(() => {
      const exp = checkTokenExpiry();
      if (exp) return;
    }, 3600000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onBeforeUnload = (event) => {
      handleBeforeUnload(event);
    };

    window.addEventListener('beforeunload', onBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  }, [router]);

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      {...pageProps}
    >
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
