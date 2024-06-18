import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectToDb from "../../configs/db";
import userModel from '../../models/user'
import { verifyPassword } from "../../utils/authTools";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        let user = null;
        connectToDb();
        user = await userModel.findOne({ email });
        if (!user) {
          throw new Error("email not found");
        }

        const isValidPassword = verifyPassword(password, user.password);
        if (!isValidPassword) {
          throw new Error("password not found");
        }

        return { email: user.email };
      },
    }),
  ],
});
