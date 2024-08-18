const API = {
  async getRanking() {
    try {
      const r = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}users/top/ranking`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!r.ok) return { error: "Los rankings no están disponibles" };

      const response = await r.json();

      return response.ranking;
    } catch (error) {
      return { error };
    }
  },
};
export default API;
