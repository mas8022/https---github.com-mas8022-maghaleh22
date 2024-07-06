import { isMe } from "../../../../utils/me";
import resetToken from "../../../../utils/resetToken";

export async function GET() {
  try {
    await resetToken();

    return Response.json({ message: "reset token success" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
