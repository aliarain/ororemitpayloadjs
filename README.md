# OroRemit Website with Payload CMS

A modern, fully editable website for OroRemit built with Next.js 16 and Payload CMS.

## Features

- ✅ Fully editable content through Payload CMS admin panel
- ✅ Contact form integrated with Payload CMS
- ✅ All sections editable: Hero, Features, FAQs, Why Choose, Opportunities, Supported Countries
- ✅ Modern, responsive design
- ✅ TypeScript support

## Setup Instructions

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Environment Variables

Create a `.env` file in the root directory:

```env
# Payload CMS
PAYLOAD_SECRET=your-secret-key-here-change-in-production
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000

# MongoDB
DATABASE_URI=mongodb://localhost:27017/ororemit
# Or use MongoDB Atlas:
# DATABASE_URI=mongodb+srv://username:password@cluster.mongodb.net/ororemit
```

**Important:** Generate a secure random string for `PAYLOAD_SECRET`. You can use:
```bash
openssl rand -base64 32
```

### 3. Database (required)

The app uses **MongoDB** via `@payloadcms/db-mongodb` (already installed). You need a MongoDB instance and `DATABASE_URI` in your `.env`.

**Option A – Local MongoDB**

1. Install MongoDB: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community) (or `brew install mongodb-community` on macOS).
2. Start MongoDB (e.g. `brew services start mongodb-community` or run `mongod`).
3. In `.env` set:
   ```env
   DATABASE_URI=mongodb://localhost:27017/ororemit
   ```

**Option B – MongoDB Atlas (cloud, no local install)**

1. Create a free cluster at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
2. Create a database user and get the connection string.
3. In Atlas: Network Access → Add your IP (or `0.0.0.0` for dev).
4. In `.env` set:
   ```env
   DATABASE_URI=mongodb+srv://USER:PASSWORD@cluster.xxxxx.mongodb.net/ororemit?retryWrites=true&w=majority
   ```
   (Replace `USER`, `PASSWORD`, and cluster host with your values.)

### 4. Run Development Server

```bash
pnpm dev
```

The application will be available at:
- **Website:** http://localhost:3000
- **Payload Admin:** http://localhost:3000/admin

### 5. Create Admin User

On first visit to `/admin`, you'll be prompted to create an admin user account.

## Payload CMS Collections

The following collections are available for content management:

- **Hero** - Main hero section content
- **Key Features** - Features section with security and quick & easy content
- **FAQs** - Frequently asked questions (orderable)
- **Why Choose** - Why choose OroRemit section
- **Opportunities** - Opportunities section content
- **Supported Countries** - List of supported countries and currencies
- **Contact Submissions** - Contact form submissions
- **Media** - Image and file uploads
- **Users** - Admin users

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── [...payload]/     # Payload API routes
│   │   └── contact/           # Contact form API
│   ├── admin/                 # Payload admin panel
│   ├── contact/               # Contact page
│   └── page.tsx               # Home page
├── collections/               # Payload CMS collections
├── components/                # React components
└── lib/
    ├── api.ts                 # API utilities for fetching Payload data
    └── payload.ts             # Payload client
```

## Editing Content

1. Navigate to `/admin` and log in
2. Select the collection you want to edit (Hero, FAQs, etc.)
3. Create or edit entries
4. Changes will appear on the website immediately

## Contact Form

The contact form at `/contact` submits data to Payload CMS. All submissions are stored in the "Contact Submissions" collection and can be viewed in the admin panel.

## Deployment

### Deploy to Vercel – Environment Variables

In **Vercel** → your project → **Settings** → **Environment Variables**, add these. Use **Production** (and optionally Preview) for each.

| Variable | Required | Value for production |
|----------|----------|------------------------|
| `PAYLOAD_SECRET` | **Yes** | A long random string (e.g. from `openssl rand -base64 32`). **Use a new value for production.** |
| `PAYLOAD_PUBLIC_SERVER_URL` | **Yes** | Your live site URL, e.g. `https://your-app.vercel.app` or `https://ororemit.com`. **Must match the URL you use to open the site.** |
| `DATABASE_URI` | **Yes** | Your MongoDB connection string (e.g. MongoDB Atlas). Must be reachable from Vercel (Atlas: allow access from anywhere or add Vercel IPs). |
| `EMAIL_FROM_ADDRESS` | No | Sender email (e.g. `noreply@ororemit.com`). Defaults to `noreply@ororemit.com` if unset. |
| `EMAIL_FROM_NAME` | No | Sender name (e.g. `Oro Remit`). Defaults to `Oro Remit` if unset. |
| `SMTP_HOST` | No | SMTP server host (e.g. for Resend, SendGrid, or your provider). If unset, emails are not sent (password reset etc. will log to console). |
| `SMTP_PORT` | No | Usually `587` (TLS) or `465` (SSL). |
| `SMTP_USER` | No | SMTP username (if your provider uses auth). |
| `SMTP_PASS` | No | SMTP password or API key. |

**What to change from local:**

1. **`PAYLOAD_PUBLIC_SERVER_URL`** – Set to your production URL, e.g. `https://ororemit.vercel.app` or your custom domain. Do not use `http://localhost:3000`.
2. **`PAYLOAD_SECRET`** – Generate a new secret for production; do not reuse your local one.
3. **`DATABASE_URI`** – Use a production MongoDB (e.g. Atlas). Ensure the cluster allows connections from the internet (or Vercel’s IPs if you restrict).

After saving env vars, redeploy (or trigger a new deployment) so the build uses them.

### Build

```bash
pnpm build
pnpm start
```

## Technologies Used

- Next.js 16 (App Router)
- Payload CMS 3.x
- MongoDB
- TypeScript
- Tailwind CSS
- React Hook Form