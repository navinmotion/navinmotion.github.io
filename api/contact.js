import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "Please fill out all fields correctly." });
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "navinkrworks@gmail.com",
            pass: "irdixikwflbdplho"
        }
    });

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: "navinkrworks@gmail.com",
        subject: `🚀 New Inquiry: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: "Email sent successfully!" });
    } 
    catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Failed to send email. Please try again later." });
    }
}
