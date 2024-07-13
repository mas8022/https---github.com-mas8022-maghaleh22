import connectToDb from "../../../../configs/db";
import ContactUsMessageModel from "../../../../models/contactUsMessage";

export async function POST(req, { params }) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const group = formData.get("group");
    const phone = formData.get("phone");
    const message = formData.get("message");

    console.log(phone);

    connectToDb();
    await ContactUsMessageModel.create({
      name,
      email,
      group,
      phone,
      message,
      isAnswer: false,
    });

    return Response.json({
      message:
        "پیامتان فرستاده شد پاسخ پیام نهایتا تا فردا از طریق پیامک به شما داده خواهد شد با تشکر",
      status: 201,
    });
  } catch (error) {
    console.log("========>", error);
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
