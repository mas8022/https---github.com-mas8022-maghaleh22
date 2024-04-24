import connectToDb from "@/configs/db";

export async function POST() {
  try {












    return Response.json(
      { message: "refresh token successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
