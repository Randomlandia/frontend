import { handleUpdateUser } from "./updateUser";
export const handleLogout = async (isLogged, router, signOut) => {
  const keysToRemove = [
    "token",
    "username",
    "tested",
    "avatar",
    "score",
    "view",
    "favs",
    "achieve",
    "exp",
    "userID",
  ];
  try {
    const updateSuccess = await handleUpdateUser(isLogged);
    if (updateSuccess) {
      keysToRemove.forEach((key) => localStorage.removeItem(key));
      await signOut();
      router.push("/");
    } else {
      console.log("Failed to update user, logout aborted.");
    }
  } catch (error) {
    console.log("Error during logout:", error);
  }
};