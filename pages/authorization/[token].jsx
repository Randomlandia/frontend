import { useEffect } from "react";
import Router from "next/router";

import API from "@/utils/api/account.api";

export default function Authorization() {
  const router = Router.useRouter();
  const token = router.query.token;

  useEffect(() => {
    const handlerValidateAccount = async (tk) => {
      const validate = await API.validateEmailAccount(tk);

      if (!validate.error) {
        Router.push({
          pathname: "/login",
          query: {
            success: "Cuenta validada",
          },
        });
      } else {
        Router.push({
          pathname: "/login",
          query: {
            error: "¡Error! Solicite un nuevo correo",
          },
        });
      }
    };

    if (token) handlerValidateAccount(token);
  }, [token]);

  return null;
}
