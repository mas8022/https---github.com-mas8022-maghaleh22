import { compare, hash } from "bcryptjs";

const { sign, verify } = require("jsonwebtoken");

function generateToken(data) {
  const token = sign(data, process.env.privateKey, {
    expiresIn: "60s",
  });
  return token;
}

async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

function verifyToken(token) {
  try {
    const validationToken = verify(token, process.env.privateKey);
    return validationToken;
  } catch (error) {
    return false;
  }
}
async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}

export { generateToken, hashPassword, verifyToken, verifyPassword };
