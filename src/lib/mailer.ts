import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

type Transporter = nodemailer.Transporter<SMTPTransport.SentMessageInfo>;

const globalForMailer = globalThis as typeof globalThis & {
  __arenaNextJsMailer?: Transporter;
};

function getTransporter(): Transporter {
  if (globalForMailer.__arenaNextJsMailer) {
    return globalForMailer.__arenaNextJsMailer;
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  if (!host || !user || !pass) {
    throw new Error("SMTP_HOST, SMTP_USER and SMTP_PASSWORD are required");
  }

  const options: SMTPTransport.Options = {
    host,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  };
  const transporter = nodemailer.createTransport(options);

  if (process.env.NODE_ENV !== "production") {
    globalForMailer.__arenaNextJsMailer = transporter;
  }
  return transporter;
}

export function adminEmail(): string {
  const email = process.env.ADMIN_EMAIL;
  if (!email) {
    throw new Error("ADMIN_EMAIL is required");
  }
  return email;
}

export async function sendMail(options: {
  to: string | string[];
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}) {
  const fromEmail = process.env.SMTP_FROM_EMAIL ?? process.env.SMTP_USER;
  const fromName = process.env.SMTP_FROM_NAME ?? "Grain Hub Australia Website";

  await getTransporter().sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: options.to,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    html: options.html,
  });
}
