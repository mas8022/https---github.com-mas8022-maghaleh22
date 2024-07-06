import { compare, hash } from "bcryptjs";
import toast from "react-hot-toast";
const { sign, verify } = require("jsonwebtoken");

function generateToken(data) {
  const token = sign(data, process.env.privateKey, {
    expiresIn: "60s",
  });
  return token;
}

function generateRefreshToken(data) {
  const refreshToken = sign(data, process.env.refreshPrivateKey, {
    expiresIn: "15d",
  });
  return refreshToken;
}

async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

function verifyToken(token, processEnvKey) {
  try {
    const validationToken = verify(token, processEnvKey);
    return validationToken;
  } catch (error) {
    return false;
  }
}


function verifyRefreshToken(refreshToken, processEnvKey) {
  try {
    const validationToken = verify(refreshToken, processEnvKey);
    return validationToken;
  } catch (error) {
    return false;
  }
}

async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}

function logoutHandler() {
  fetch("/api/logout", {
    method: "POST",
  }).then((res) => {
    if (res.ok) {
      toast.success("با موفقیت از حسابتان خارخ شدید");
    } else {
      toast.success("عملیات ناموفق بود مجددا امتحان کنید");
    }
  });
}

export {
  generateToken,
  generateRefreshToken,
  hashPassword,
  verifyToken,
  verifyRefreshToken,
  verifyPassword,
  logoutHandler,
};
