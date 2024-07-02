export const checkTokenExpiry = () => {
  const keys = ["user", "favs", "view", "achieve", "userID", "exp"]
  const exp = localStorage.getItem("exp")
  const now = new Date().getTime()

  if (now > exp) {
    localStorage.removeItem("token")
    console.log("Token has expired and has been removed")
    keys.forEach((key) => {
      localStorage.removeItem(key)
      return
    })
  }
}
