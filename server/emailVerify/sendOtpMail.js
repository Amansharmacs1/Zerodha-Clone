import nodemailer from "nodemailer";
import "dotenv/config";

export const sendOtpMail = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Password Reset OTP",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Password Reset Request</h2>
          <p>Your OTP for password reset is:</p>
          <h1 style="letter-spacing: 5px;">${otp}</h1>
          <p>This OTP is valid for <b>10 minutes</b>.</p>
          <p>If you did not request this, please ignore this email.</p>
        </div>`
    };

    await transporter.sendMail(mailOptions);

    console.log("OTP email sent successfully");
  } catch (error) {
    console.error("Error sending OTP mail:", error.message);
  }
};