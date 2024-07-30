import { handleUpdateUser } from "./updateUser";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/router";

export const handleLogout = async (isLogged, setIsLogged) => {
  const router = useRouter();
  const { signOut } = useClerk();
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
      setIsLogged(false);
      router.push("/");
    } else {
      console.log("Failed to update user, logout aborted.");
    }
  } catch (error) {
    console.log("Error during logout:", error);
  }
};