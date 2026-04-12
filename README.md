This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact Forms Email Setup (Nodemailer + Vercel)

This project sends contact and nomination form submissions using Nodemailer through Next.js Route Handlers:

- `POST /api/contact`
- `POST /api/nomination`

Both routes run on the Node.js runtime, which is compatible with Vercel Serverless Functions.

### 1) Configure environment variables

Copy `.env.example` to `.env.local` for local development.

```bash
cp .env.example .env.local
```

Set these values:

- `SMTP_HOST` SMTP server host (example: `smtp.gmail.com`)
- `SMTP_PORT` SMTP server port (usually `587` or `465`)
- `SMTP_SECURE` `true` for TLS (port `465`), otherwise `false`
- `SMTP_USER` SMTP username
- `SMTP_PASS` SMTP password or app password
- `MAIL_FROM` sender address shown in outgoing emails
- `MAIL_TO` destination inbox for form submissions

### 2) Add variables in Vercel

In Vercel dashboard:

1. Open your project.
2. Go to Settings > Environment Variables.
3. Add all variables from `.env.example`.
4. Redeploy the project.

### 3) Test submission flow

1. Submit the contact form and verify an email arrives at `MAIL_TO`.
2. Submit the nomination form and verify an email arrives at `MAIL_TO`.
3. If it fails, check Vercel Function logs for `/api/contact` or `/api/nomination`.
