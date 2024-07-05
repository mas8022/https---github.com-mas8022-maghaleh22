const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
import { hashPassword } from "../../../../utils/authTools";
import authorModel from "../../../../models/author";
import CloudStoringFile from "../../../../utils/cloudStoringFile";

export async function POST(req, { params }) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const password = formData.get("password");
    const job = formData.get("job");
    const ruleImage = formData.get("ruleImage");

    if (!emailRegex.test(email)) {
      return Response.json(
        { message: "لطفا ایمیل صحیح وارد نمایید" },
        { status: 401 }
      );
    } else if (password.length > 15 || password.length < 8) {
      return Response.json(
        { message: "رمز عبور شما باید بین 8 تا 15 کاراکتر داشته باشد" },
        { status: 402 }
      );
    } else if (!ruleImage) {
      return Response.json(
        { message: "عکس قوانین تایید شده را بارگذاری کنید" },
        { status: 403 }
      );
    }

    const hashedPassword = await hashPassword(password);
    const fileAddress = await CloudStoringFile(ruleImage);

    await authorModel.create({
      name,
      email,
      phone,
      password: hashedPassword,
      ruleImage: fileAddress,
      job,
      bio: " ",
      profile: " ",
      permission: false,
    });

    return Response.json(
      { Message: "author signup successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ Message: "Internal Server Error" }, { status: 500 });
  }
}
