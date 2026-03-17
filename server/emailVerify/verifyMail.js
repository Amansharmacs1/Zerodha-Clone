import { Resend } from "resend";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import handlebars from "handlebars";
import "dotenv/config";

const resend = new Resend(process.env.RESEND_API_KEY);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const verifyMail = async (token, email) => {
  try {
    console.log("📩 Sending email via Resend to:", email);

    // ✅ Safe template path
    const templatePath = path.join(__dirname, "template.hbs");

    if (!fs.existsSync(templatePath)) {
      console.log("❌ Template file not found");
      return false;
    }

    const emailTemplateSource = fs.readFileSync(templatePath, "utf-8");

    const template = handlebars.compile(emailTemplateSource);

    // ✅ Centralized frontend URL (VERY IMPORTANT)
    const verifyUrl = `${process.env.FRONTEND_URL}/verify/${encodeURIComponent(token)}`;

    const htmlToSend = template({
      verifyUrl, // 👈 pass full URL instead of just token
    });

    const response = await resend.emails.send({
      from: "Zerodha Clone <onboarding@resend.dev>", // ✅ better sender name
      to: email,
      subject: "Verify Your Email",
      html: htmlToSend,
      text: `Verify your email: ${verifyUrl}`, // ✅ dynamic link
    });

    console.log("✅ Email sent:", response?.id);

    return true;

  } catch (error) {
    console.log("❌ Resend error:", error?.message);
    return false;
  }
};