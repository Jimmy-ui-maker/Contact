import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";


// POST Method
export async function POST(req) {
  const { fullname, email, message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ fullname, email, message });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Check your network connection."] });
    }
  }
}
// get method
export async function GET(req) {

  try {
    await connectDB();
    const contacts = await Contact.find()
    return NextResponse.json({msg: [contacts],success: true,});
  } catch (error) {
    return NextResponse.json({msg: ["An error occured"],success: true,})
  }
}