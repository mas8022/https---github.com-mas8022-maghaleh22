import { cookies } from "next/headers";
import { generateToken, verifyRefreshToken, verifyToken } from "../../../../utils/authTools";
import { redirect } from "next/navigation";
import connectToDb from "../../../../configs/db";
import userModel from '../../../../models/user'

export async function GET() {
  try {
   
    const refreshToken = cookies().get("refresh-token")?.value;
    if (!refreshToken) {
      return redirect("/login");
    }
  
    const refreshTokenPayLoad = verifyRefreshToken(refreshToken, process.env.refreshPrivateKey);
    if (!refreshTokenPayLoad) {
      return redirect("/login");
    }




    const token = cookies().get("token")?.value;
    if (token) {
      const validationToken = verifyToken(token, process.env.privateKey);
      if (validationToken) {
        return true;
      }
    }
  
   
  
    await connectToDb();
    const email = await userModel.findOne({ refreshToken }, "email");
  
    if (!email) {
      return redirect("/login");
    }
  
    const newToken = generateToken({ email }, process.env.privateKey);
  
    await cookies().delete("token");
  
    cookies().set("token", newToken, {
      httpOnly: true,
      path: "/",
    });
  

    return Response.json({ message: "reset token success", status: 200 });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید" , status: 500 });
  }
}
