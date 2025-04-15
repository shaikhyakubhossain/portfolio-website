"use server";
import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    "use server";
    const code = request.headers.get("code") as string;
    if (code !== process.env.ACCESS_CODE) return NextResponse.json({ error: "Access Denied" });

    const { name, email, message } = await request.json();
    console.log(name, email, message, code);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.TEMP_USER_EMAIL,
            pass: process.env.APP_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.TEMP_USER_EMAIL,
        to: process.env.TEST_USER_EMAIL,
        subject: "Portfolio Website Contact Form",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
    try{
        const info = await transporter.sendMail(mailOptions)
        return NextResponse.json({ message: "Email sent successfully" });
    }
    catch(err){
        return NextResponse.json({ error: "Server Error" });
    }
}