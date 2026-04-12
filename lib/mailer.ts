import "server-only";
import nodemailer from "nodemailer";

type WebsiteEmailPayload = {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

let cachedTransporter: nodemailer.Transporter | null = null;

const getRequiredEnv = (name: string) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
};

const parseSecure = (port: number) => {
  if (typeof process.env.SMTP_SECURE === "string") {
    return process.env.SMTP_SECURE.toLowerCase() === "true";
  }
  return port === 465;
};

const getTransporter = () => {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  const host = getRequiredEnv("SMTP_HOST");
  const user = getRequiredEnv("SMTP_USER");
  const pass = getRequiredEnv("SMTP_PASS");
  const port = Number(process.env.SMTP_PORT ?? "587");

  if (Number.isNaN(port)) {
    throw new Error("SMTP_PORT must be a number");
  }

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure: parseSecure(port),
    auth: {
      user,
      pass,
    },
  });

  return cachedTransporter;
};

const getMailFrom = () => process.env.MAIL_FROM ?? getRequiredEnv("SMTP_USER");
const getMailTo = () => process.env.MAIL_TO ?? getRequiredEnv("SMTP_USER");

export const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");

export async function sendWebsiteEmail(payload: WebsiteEmailPayload) {
  const transporter = getTransporter();

  await transporter.sendMail({
    from: getMailFrom(),
    to: getMailTo(),
    subject: payload.subject,
    text: payload.text,
    html: payload.html,
    replyTo: payload.replyTo,
  });
}
