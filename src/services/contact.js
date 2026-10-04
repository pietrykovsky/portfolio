import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';

// Server-only helper called from the API route after reCAPTCHA verification.
// Deliberately NOT a "use server" module: that would expose it as a Server Action
// callable directly, bypassing the reCAPTCHA check in the route.

const HTML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);
}

export default async function sendContactEmail(name, email, topic, message) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Read the email template
  const templatePath = path.join(process.cwd(), 'src', 'templates', 'contactEmail.html');
  let htmlTemplate = await fs.readFile(templatePath, 'utf-8');

  // Replace placeholders with escaped user input. Function replacers keep "$&"-style
  // sequences in the input from being interpreted as replacement patterns.
  const upperTopic = topic.toUpperCase();
  htmlTemplate = htmlTemplate.replace('{{name}}', () => escapeHtml(name))
                             .replace('{{email}}', () => escapeHtml(email))
                             .replaceAll('{{topic}}', () => escapeHtml(upperTopic))
                             .replace('{{message}}', () => escapeHtml(message).replace(/\n/g, '<br>'));

  try {
    await transporter.sendMail({
      from: `"Portfolio Website" <${process.env.EMAIL_FROM}>`,
      replyTo: email,
      to: process.env.EMAIL_TO,
      subject: `[${upperTopic}] New Contact Form Submission`,
      text: `
        Name: ${name}
        Email: ${email}

        Message: ${message}
      `,
      html: htmlTemplate,
    });
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Error sending email' };
  }
}
