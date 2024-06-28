const jwt = require("jsonwebtoken");

const {sign} = jwt

function jwtD() {
  const secretK = "randy_love"; // Asegúrate de usar la misma clave secreta en ambos pasos

  const payloadT = {
    _id: "667ce34a8da81dbfbd668721",
    email: "angie123@mymail.com"
  };
  console.log(typeof payloadT)
  console.log(secretK)

  // Generar el token con una caducidad de 1 día
  function signToken(payload, secret) {
    return jwt.sign(payload, secret);
  }

  const tokenGen = signToken(payloadT, secretK)
  console.log("Generated token:", tokenGen);

  try {
    // Verificar el token utilizando el mismo secreto
    const decoded = jwt.verify(tokenGen, secretK);
    console.log('Decoded token:', decoded);
    return decoded; // Retorna el token decodificado si es necesario
  } catch (err) {
    console.error("Error decoding token:", err.message);
    throw new Error("Failed to decode token");
  }
}

// Exportar la función jwtD
module.exports = jwtD;
