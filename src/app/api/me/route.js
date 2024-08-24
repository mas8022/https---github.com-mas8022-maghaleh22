import { Me } from "../../../../utils/me";

export async function GET() {
  try {
    const me = await Me();
    if (me) {
      return Response.json(me);
    }

    return Response.json(null);
  } catch (error) {
    return Response.json(
      { message: "اینترنت خود را چک کنید" },
      { status: 500 }
    );
  }
}
