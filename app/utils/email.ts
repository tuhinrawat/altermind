import nodemailer from 'nodemailer';

interface DemoRequestData {
  name: string;
  email: string;
  company: string;
  role: string;
  phone?: string;
  purpose: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

export const sendEmail = async (subject: string, content: string) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'support@altermind.in',
      subject: subject,
      html: content
    });
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

export const formatDemoRequestEmail = (data: DemoRequestData) => {
  return `
    <h2>New Demo Request</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Company:</strong> ${data.company}</p>
    <p><strong>Role:</strong> ${data.role}</p>
    <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
    <p><strong>Purpose:</strong> ${data.purpose}</p>
  `;
};

export const formatContactEmail = (data: ContactFormData) => {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Message:</strong> ${data.message}</p>
  `;
}; 