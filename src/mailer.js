import nodemailer from 'nodemailer';

const from = '"Registration" <registrations@test.com>';

function setup() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
}

export function sendConfirmationEmail(user) {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: "Welcome to Test",
    text: `
    Welcome to Bookworm. Please, confirm your email.

    ${user.generateConfirmationUrl()}
    `
  }
  transport.sendMail(email);
}
