"use server";

import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';

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

  // Replace placeholders with actual content
  htmlTemplate = htmlTemplate.replace('{{name}}', name)
                             .replace('{{email}}', email)
                             .replace('{{topic}}', topic)
                             .replace('{{message}}', message.replace(/\n/g, '<br>'));

  try {
    await transporter.sendMail({
      from: `"Portfolio Website" <${process.env.EMAIL_FROM}>`,
      replyTo: email,
      to: process.env.EMAIL_TO,
      subject: `[${topic.toUpperCase()}] New Contact Form Submission`,
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