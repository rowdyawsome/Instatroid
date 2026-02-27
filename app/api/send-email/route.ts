import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { welcomeTemplate } from "@/lib/emailTemplates";

export async function POST(req: Request) {
  try {
    const { name, email, template } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { status: "error", message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (template !== "welcome") {
      return NextResponse.json(
        { status: "error", message: "Invalid template selected" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Instatroid Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to Instatroid 🎉",
      html: welcomeTemplate(name),
    });

    return NextResponse.json({
      status: "success",
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to send email" },
      { status: 500 }
    );
  }
}