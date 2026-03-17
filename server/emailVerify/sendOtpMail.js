import { Resend } from "resend";
import "dotenv/config";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendOtpMail = async (email, otp) => {
  try {
    console.log("📩 Sending OTP via Resend to:", email);

    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // ⚠️ keep this for now
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
    });

    console.log("✅ OTP email sent:", response);

    return true;
  } catch (error) {
    console.error("❌ Resend OTP error:", error);
    return false;
  }
};