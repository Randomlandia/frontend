// utils/handleBeforeUnload.js
import { handleUpdateUser } from './updateUser';
import { handleLogout } from './logoutHandler';

export const handleBeforeUnload = async (event) => {
  const token = localStorage.getItem('token');
  const rememberMe = localStorage.getItem('rememberMe')
  if (token) {
    const isLogged = true;
    const updateSuccessful = await handleUpdateUser(isLogged);

    if (!rememberMe) {
      await handleLogout(isLogged);
    }

    if (updateSuccessful) {
      console.log("Usuario actualizado correctamente antes de cerrar la ventana.");
    } else {
      console.log("Error al actualizar el usuario antes de cerrar la ventana.");
    }
  }
  event.preventDefault();
  event.returnValue = '';
};

