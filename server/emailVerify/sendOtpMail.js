import nodemailer from "nodemailer";
import "dotenv/config";

// Configure Nodemailer transporter (Gmail example)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // SSL
  secure: true,
  auth: {
    user: process.env.MAIL_USER, // your Gmail
    pass: process.env.MAIL_PASS, // Gmail App Password
  },
});

export const sendOtpMail = async (email, otp) => {
  try {
    console.log("📩 Sending OTP via Nodemailer to:", email);

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP is ${otp}. Valid for 10 minutes.`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Password Reset Request</h2>
          <p>Your OTP for password reset is:</p>
          <h1 style="letter-spacing: 5px;">${otp}</h1>
          <p>This OTP is valid for <b>10 minutes</b>.</p>
          <p>If you did not request this, please ignore this email.</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ OTP email sent:", info.response);

    return true;
  } catch (error) {
    console.error("❌ Nodemailer OTP error:", error);
    return false;
  }
};