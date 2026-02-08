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

### Deploy to cPanel

cPanel often has **“Setup Node.js App”** (or “Node.js Selector”). Use that to run this Next.js app.

**1. Requirements**

- Node.js **18+** (or 20+) on the server.
- **MongoDB**: cPanel shared hosting does not run MongoDB. Use **MongoDB Atlas** (or another cloud MongoDB) and set `DATABASE_URI` to your connection string. In Atlas, allow access from anywhere (`0.0.0.0/0`) or add your server IP.

**2. Upload the project**

- Upload the project (e.g. via Git clone, or zip and extract) into a folder **outside** `public_html`, e.g. `ororemit` or `nodeapps/ororemit`, so that `.env` and source files are not web-accessible.

**3. Environment variables**

Set these for the Node.js app. In cPanel “Setup Node.js App” you can usually add **Environment Variables** in the app settings. Otherwise create a **`.env`** file in the app root (same folder as `package.json`).

| Variable | Required | Value on cPanel |
|----------|----------|------------------|
| `PAYLOAD_SECRET` | **Yes** | New random string for production (e.g. `openssl rand -base64 32`). |
| `PAYLOAD_PUBLIC_SERVER_URL` | **Yes** | Your live URL: `https://yourdomain.com` (or `https://www.yourdomain.com`). **No trailing slash.** Must match the URL you use to open the site. |
| `DATABASE_URI` | **Yes** | MongoDB Atlas (or other cloud) connection string. Must be reachable from your cPanel server. |
| `EMAIL_FROM_ADDRESS` | No | e.g. `noreply@yourdomain.com` |
| `EMAIL_FROM_NAME` | No | e.g. `Oro Remit` |
| `SMTP_*` | No | If your cPanel host provides SMTP, use their host/port/user/pass so Payload can send email. |

**4. Install, build, and start**

In the app directory (SSH or cPanel “Run NPM Install” / script):

```bash
npm install
# or: pnpm install
npm run build
# Start (cPanel often runs this for you after “Run NPM Install”):
npm run start
# or: node .next/standalone/server.js (if using output: 'standalone' in next.config)
```

**5. cPanel Node.js app settings**

- **Application root**: folder that contains `package.json`.
- **Application URL**: your domain or subdomain (e.g. `yourdomain.com`).
- **Application startup file**: often `server.js` or the command that runs `npm run start` / `node .next/standalone/server.js` (see below).

If your host expects a single **start script**, you can add to `package.json`:

```json
"scripts": {
  "start": "next start",
  ...
}
```

Then the startup command is `npm run start` (or `pnpm start`). Some cPanel setups use **Passenger** or a **reverse proxy**; the doc for “Setup Node.js App” will say how to point your domain at the Node app and which port it uses.

**6. Optional: standalone output (for easier cPanel deploy)**

To run a single folder without `node_modules` on the server, you can use Next.js standalone output. In `next.config.mjs`:

```js
const nextConfig = {
  output: 'standalone',
  // ... rest of config
}
```

Then build locally or on the server, and run:

```bash
node .next/standalone/server.js
```

(You may need to copy `.next/static` into `.next/standalone/.next/static` if static files are missing; see [Next.js standalone docs](https://nextjs.org/docs/app/building-your-application/deploying#standalone).)

**Summary – what to change for cPanel**

1. **`PAYLOAD_PUBLIC_SERVER_URL`** → `https://yourdomain.com` (your real cPanel domain).
2. **`PAYLOAD_SECRET`** → new production secret.
3. **`DATABASE_URI`** → MongoDB Atlas (or other cloud MongoDB) connection string; server must be allowed to connect.

### Include all env in the build and upload

If you want to **upload one folder** (e.g. to cPanel) and not set environment variables on the server, you can bundle a `.env.production` file with your build. Next.js loads `.env.production` when you run `next start` in production.

**1. Put production values in `.env`** (or create it from `.env.example`). Set at least:

- `PAYLOAD_SECRET` (new secret for production)
- `PAYLOAD_PUBLIC_SERVER_URL` (e.g. `https://yourdomain.com`)
- `DATABASE_URI` (e.g. MongoDB Atlas)

**2. Create `.env.production` from `.env`:**

```bash
pnpm run env:for-upload
```

This runs `scripts/prepare-deploy-env.js`, which copies `.env` → `.env.production`. **Review `.env.production`** and change any value to production (especially the URL and secret).

**3. Build:**

```bash
pnpm build
```

**4. Upload this folder** (to cPanel or your server):

- `.next`
- `node_modules` (or use standalone output and upload the standalone folder)
- `package.json`, `pnpm-lock.yaml` (or `package-lock.json` / `yarn.lock`)
- `next.config.mjs`, `payload.config.ts`
- `app/`, `collections/`, `lib/`, `public/`, `components/`, etc.
- **`.env.production`** (so the server has all env when it runs)

**5. On the server**, from the same directory run:

```bash
pnpm install --prod
pnpm start
```

Next.js will read `.env.production` when `NODE_ENV=production` (default for `next start`).

**Security:** `.env.production` contains secrets. It is in `.gitignore` — do not commit it. Upload it only to a **non‑public** directory (e.g. not inside `public_html`). The web server should only serve your app; it must not serve the project root where `.env.production` lives.

### Build (local or CI)

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