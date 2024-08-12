const API = {
  async validateEmailAccount(encoded) {
    try {
      const decoded = atob(encoded);
      const r = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}users/email/validate-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${decoded}`,
          },
        }
      );

      const response = await r.json();

      return response.success;
    } catch (error) {
      console.log(error);
      return { error };
    }
  },
  async verifyValidateEmail(id) {
    try {
      const r = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}users/verify-email/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const response = await r.json();

      return response.success;
    } catch (error) {
      console.log(error);
      return { error };
    }
  },
  async resendEmail(token) {
    try {
      const r = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}users/email/resend`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const response = await r.json();

      return response.success;
    } catch (error) {
      console.log(error);
      return { error };
    }
  },
};
export default API;
