// app/api/auth/login/route.js

import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { dbConnect } from "@/utils/dbConnect";
import User from "@/models/User";

export async function POST(request) {
  try {
    await dbConnect();

    const { email, password } = await request.json();

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    // If needed, generate a token or session here
    // e.g., using JWT (optional)
    // const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    return NextResponse.json(
      { message: "Login successful", user: { email: existingUser.email } },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
