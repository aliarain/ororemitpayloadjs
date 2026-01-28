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

### 3. Start MongoDB

Make sure MongoDB is running locally, or use MongoDB Atlas for cloud hosting.

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

### Environment Variables for Production

Make sure to set these environment variables in your hosting platform:

- `PAYLOAD_SECRET` - A secure random string
- `PAYLOAD_PUBLIC_SERVER_URL` - Your production URL (e.g., https://yourdomain.com)
- `DATABASE_URI` - Your MongoDB connection string

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