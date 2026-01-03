import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Subscribe from "@/models/Subscribe";

export async function POST(req) {
  try {
    await connectDB();
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { status: 400,
           error: "Email is required" },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const existingEmail = await Subscribe.findOne({ email });

    if (existingEmail) {
      return NextResponse.json(
        { status: 200,
           message: "You are already subscribed." },
        { status: 200 }
      );
    }

    const subscriber = await Subscribe.create({ email });

    return NextResponse.json(
      {  status: 201,
        message: "Thank you for subscribing to our newsletter!",
        data: subscriber,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {  status: 500,
        error: error.message },
      { status: 500 }
    );
  }
}


// get api

export async function GET() {
  try {
    await connectDB();
    const subscribers = await Subscribe.find().sort({ createdAt: -1 });

    return NextResponse.json(
      {  status: 200,
        message: "Subscribers fetched successfully",
        data: subscribers,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {  status: 500,
        error: error.message },
      { status: 500 }
    );
  }
}
