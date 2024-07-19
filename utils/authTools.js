import { compare, hash } from "bcryptjs";
import toast from "react-hot-toast";
const { sign, verify } = require("jsonwebtoken");

function generateToken(data, processEnvKey) {
  const token = sign(data, processEnvKey, {
    expiresIn: "30m",
  });
  return token;
}

function generateRefreshToken(data, processEnvRefreshKey) {
  const refreshToken = sign(data, processEnvRefreshKey, {
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
  })
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      if (result.status === 200) {
        toast.success(result.message);
        setTimeout(() => {
          location.pathname = "/"
        }, 2000);
      } else {
        toast.error(result.message);
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
