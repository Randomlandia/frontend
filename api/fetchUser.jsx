import React from "react";

export default function Login() {
  const handleLogin = async () => {
    try {
      const email = "angie@mymail.com";
      const password = "angie123";

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful. User data:", data.data);
      } else {
        console.error("Error during login:", data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };


  handleLogin();

  return null; 
}

