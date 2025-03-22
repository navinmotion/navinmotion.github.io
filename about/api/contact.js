const nodemailer = require("nodemailer");

export default async function handler(req, res) {
    console.log("Incoming request method:", req.method);
   
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "Please fill out all fields correctly." });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "navinkrworks@gmail.com",
            pass: "irdixikwflbdplho"
        }
    });

    const mailOptions = {
        from: email,
        to: "navinkrworks@gmail.com",
        subject: "🚀 New Project Inquiry from Website",
        text: `📛 Name: ${name}\n📧 Email: ${email}\n📞 Subject: ${subject}\n📝 Message: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Failed to send email. Please try again later." });
    }
}
