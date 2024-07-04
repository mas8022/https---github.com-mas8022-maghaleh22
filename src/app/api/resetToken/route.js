import { isMe } from "../../../../utils/me";
import resetToken from "../../../../utils/resetToken"

export async function GET() {
  try {
    await resetToken();

    const valid = await isMe();
    return Response.json(valid);
  } catch (error) {
    console.log(error);
    return Response.json({ Message: "Internal Server Error" }, { status: 500 });
  }
}
