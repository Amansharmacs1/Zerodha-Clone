import { Resend } from "resend";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import handlebars from "handlebars";
import "dotenv/config";

const resend = new Resend(process.env.RESEND_API_KEY);

// Fix __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const verifyMail = async (token, email) => {
  try {
    console.log("📩 Sending email to:", email);
    console.log("🔑 TOKEN:", token);

    const templatePath = path.join(__dirname, "template.hbs");

    if (!fs.existsSync(templatePath)) {
      console.log("❌ Template not found:", templatePath);
      return false;
    }

    const source = fs.readFileSync(templatePath, "utf-8");
    const template = handlebars.compile(source);

    // ✅ PASS TOKEN (IMPORTANT)
    const htmlToSend = template({
      token,
    });

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Verify Your Email",
      html: htmlToSend,
      text: `Verify: http://localhost:5173/verify/${token}`,
    });

    console.log("✅ Email sent:", response);
    return true;

  } catch (error) {
    console.log("❌ Error:", error.message);
    return false;
  }
};