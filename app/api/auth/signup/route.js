import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { dbConnect } from "@/utils/dbConnect";
import User from "@/models/User";

export async function POST(request) {
  try {
    await dbConnect();
    const { email, password } = await request.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    return NextResponse.json({ message: "Signup successful", user: { email: newUser.email } }, { status: 201 });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
