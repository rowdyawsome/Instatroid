import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { welcomeTemplate, downloadTemplate } from "@/lib/emailTemplates";

export async function POST(req: Request) {
  try {
    const { name, email, template } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { status: "error", message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!["welcome", "download"].includes(template)) {
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

    // Derives base URL from the request itself — no env variable needed
    const host = req.headers.get("host") ?? "localhost:3000";
    const protocol = host.startsWith("localhost") ? "http" : "https";
    const baseUrl = `${protocol}://${host}`;
    const downloadPageUrl = `${baseUrl}/download`;

    const mailOptions =
      template === "download"
        ? {
            from: `"Instatroid Team" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "📲 Your Instatroid Download Link",
            html: downloadTemplate(name, downloadPageUrl),
          }
        : {
            from: `"Instatroid Team" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Welcome to Instatroid 🎉",
            html: welcomeTemplate(name),
          };

    await transporter.sendMail(mailOptions);

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