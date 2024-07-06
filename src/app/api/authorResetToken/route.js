import ResetAuthorToken from "../../../../utils/resetAuthorToken";

export async function GET() {
  try {
    await ResetAuthorToken();

    return Response.json({ message: "author reset token success" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
