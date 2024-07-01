import { isMe } from "@/utils/me";
const { default: resetToken } = require("@/utils/resetToken");

export async function GET(params) {
  try {
    await resetToken();
    const valid = await isMe();
    return Response.json(valid);
  } catch (error) {
    return Response.json({ Message: "Internal Server Error" }, { status: 500 });
  }
}
