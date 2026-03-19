import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import handlebars from "handlebars";
import "dotenv/config";

// Fix __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure transporter for Gmail
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // SSL
  secure: true, // true for 465, false for 587
  auth: {
    user: process.env.MAIL_USER,      // your Gmail
    pass: process.env.MAIL_PASS,      // Gmail App Password
  },
});

export const verifyMail = async (token, email) => {
  try {
    console.log("📩 Sending email to:", email);
    console.log("🔑 TOKEN:", token);

    // Read Handlebars template
    const templatePath = path.join(__dirname, "template.hbs");
    if (!fs.existsSync(templatePath)) {
      console.log("❌ Template not found:", templatePath);
      return false;
    }

    const source = fs.readFileSync(templatePath, "utf-8");
    const template = handlebars.compile(source);

    // Generate HTML with token
    const htmlToSend = template({ token });

    // Send email
    const info = await transporter.sendMail({
      from: process.env.MAIL_USER,                     // your email
      to: email,                                       // recipient email
      subject: "Verify Your Email",
      html: htmlToSend,
      text: `Verify: https://localhost:5173/verify/${token}`, // deployed frontend URL
    });

    console.log("✅ Email sent:", info.response);
    // console.log("MAIL_USER:", process.env.MAIL_USER);
// console.log("MAIL_PASS:", process.env.MAIL_PASS ? "Loaded" : "Not Loaded");
    return true;
  } catch (error) {
    console.log("❌ Error sending email:", error);
    // console.log("MAIL_USER:", process.env.MAIL_USER);
// console.log("MAIL_PASS:", process.env.MAIL_PASS ? "Loaded" : "Not Loaded");
    return false;
  }
};
