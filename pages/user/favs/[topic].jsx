import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { Navbar } from "@/components/Navbar"

export default function Favoritas() {
  // const 
  const router = useRouter()
  let topic = router.query.topic

  // useEffect(() => {
  //   if (topic) {
  //     fetch(`http://localhost:3005/sandias/topic/${topic}`)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok")
  //         }
  //         return response.json()
  //       })
  //       .then((json) => {
  //         setSandiasByTopic(json)
  //         setLoading(false)
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error)
  //         setLoading(false)
  //       })
  //   }
  // }, [topic])

  return (
    <>
      <p>Sandias favoritas desde local</p>
    </>
  )
}
