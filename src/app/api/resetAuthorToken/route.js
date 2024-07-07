import { isAuthor } from "../../../../utils/author";
import ResetAuthorToken from "../../../../utils/resetAuthorToken";

export async function GET() {
  try {
    await ResetAuthorToken();

    const author = await isAuthor();
    

    if (!author) {
      return Response.json({ message: "author not found", status: 404 });
    }

    return Response.json({
      message: "author reset token success",
      status: 200,
    });
  } catch (error) {
    return Response.json({ message: "Internal Server Error", status: 500 });
  }
}
