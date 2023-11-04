import { NextResponse } from "next/server";
const nodemailer = require("nodemailer")

export const GET = async () => {
  return NextResponse.json("users");
};

export const POST = async (req) => {
  const {userEmail} = await req.json()
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASS,
    }

  })

  try { 
    await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: userEmail,
      subject: "prueba",
      html: "<p>hola</p>"
    });
      return NextResponse.json({ message: "email sended" });

  } catch (error) {
    console.log("error", error)
    return NextResponse.json("no se pudo enviar")
  }
}



