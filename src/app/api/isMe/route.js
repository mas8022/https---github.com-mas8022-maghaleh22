import { isMe } from "../../../../utils/me";

export async function GET() {
  try {
    const haveMe = await isMe();
    if (haveMe) {
      return Response.json(haveMe);
    }

    return Response.json(null);
  } catch (error) {
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
