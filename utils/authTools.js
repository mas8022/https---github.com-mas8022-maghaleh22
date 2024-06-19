import { compare, hash } from "bcryptjs";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const { sign, verify } = require("jsonwebtoken");

function generateToken(data) {
  const token = sign(data, process.env.privateKey, {
    expiresIn: "24h",
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
  hashPassword,
  verifyToken,
  verifyPassword,
  logoutHandler,
};
