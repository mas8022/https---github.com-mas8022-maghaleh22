import { compare, hash } from "bcryptjs";
// import { cookies } from "next/headers";
import toast from "react-hot-toast";
import userModel from "../models/user";
import { redirect } from "next/dist/server/api-utils";
import connectToDb from "../configs/db";
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

function verifyToken(token) {
  try {
    const validationToken = verify(token, process.env.privateKey);
    return validationToken;
  } catch (error) {
    return false;
  }
}

function verifyRefreshToken(refreshToken) {
  try {
    const validationToken = verify(refreshToken, process.env.refreshPrivateKey);
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

// async function resetToken() {
//   const token = cookies().get("token")?.value;
//   if (token) {
//     return false;
//   }
//   const refreshToken = cookies().get("refresh-token")?.value;
//   const refreshTokenPayLoad = verifyRefreshToken(refreshToken);

//   if (!refreshTokenPayLoad) {
//     return redirect("/login");
//   }

//   connectToDb();
//   const userEmail = await userModel.findOne({ refreshToken }, "email");

//   if (!userEmail) {
//     return redirect("/login");
//   }

//   const newToken = sign({ ...userEmail }, process.env.privateKey, {
//     expiresIn: "60s",
//   });

//   return Response.json(
//     { message: "reset the token" },
//     {
//       status: 200,
//       headers: {
//         "Set-Cookie": `token=${newToken};path=/;httpOnly=true;`,
//       },
//     }
//   );
// }

export {
  generateToken,
  generateRefreshToken,
  hashPassword,
  verifyToken,
  verifyRefreshToken,
  verifyPassword,
  logoutHandler,
  // resetToken,
};
