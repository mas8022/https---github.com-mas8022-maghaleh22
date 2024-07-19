import { cookies } from "next/headers";
import { verifyRefreshToken, generateToken, verifyToken } from "./authTools";
import { redirect } from "next/navigation";
import userModel from "../models/user";
import connectToDb from "@/configs/db";

async function resetToken() {
}

export default resetToken;
