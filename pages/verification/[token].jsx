import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ValidatePage from "@/components/ValidateEmail";

import API from "@/utils/api/account.api";

export default function Authorization() {
  const router = useRouter();
  const { token } = router.query;

  const [isValidate, setIsValidate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlerValidateAccount = async (tk) => {
      try {
        const validate = await API.validateEmailAccount(tk);

        if (validate === true) setIsValidate(true);
        else setIsValidate(false);
      } catch (error) {
        setIsValidate(false);
      } finally {
        setLoading(false);
      }
    };

    if (token) handlerValidateAccount(token);
  }, [token]);

  useEffect(() => {
    if (loading === false && isValidate !== null) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [loading, isValidate, router]);

  if (loading) {
    return <ValidatePage />;
  }

  if (isValidate) {
    return <ValidatePage status="¡Validación exitosa!" />;
  } else if (isValidate === false) {
    return <ValidatePage status="Error :(" />;
  }

  return null;
}
