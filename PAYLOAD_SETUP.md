# Payload CMS setup guide

Follow these steps to set up Payload and load your current site content so you can edit everything from the admin.

---

## 1. Prerequisites

- **MongoDB** running (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).
- **`.env`** in the project root with:

```env
PAYLOAD_SECRET=your-secret-key-at-least-32-chars
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
DATABASE_URI=mongodb://localhost:27017/ororemit
```

For Atlas, use a connection string like:

```env
DATABASE_URI=mongodb+srv://USER:PASSWORD@cluster.xxxxx.mongodb.net/ororemit?retryWrites=true&w=majority
```

Generate a secret:

```bash
openssl rand -base64 32
```

---

## 2. Start the app and create the first admin user

```bash
pnpm dev
```

1. Open **http://localhost:3000/admin**
2. Create your first user (email + password). This is your Payload admin login.

---

## 3. Seed Payload with current site content

So that the site looks the same but content comes from Payload, run the seed script **once** (after the admin user exists):

```bash
pnpm run seed
```

This will create:

| Collection           | What’s seeded |
|----------------------|----------------|
| **Hero**             | Welcome text, title, description, button (same as current homepage) |
| **Key Features**     | Subtitle, title, description, Security & Quick & Easy copy |
| **FAQs**             | All 5 current questions and answers |
| **Why Choose**       | Subtitle, title, description, Zero Fees, Fast Delivery, Regulated copy |
| **Opportunities**    | Subtitle, title, description, “Money transfers built on trust” block and button |
| **Supported Countries** | Philippines (PHP), Australia (AUD), Pakistan (PKR) with flag paths |

If a collection already has documents, that collection is skipped (no duplicates).

---

## 4. Check that the site uses Payload

- Open **http://localhost:3000**
- The homepage should look the same as before; content is now coming from the database.
- Edit something in **http://localhost:3000/admin** (e.g. Hero title) and refresh the homepage to see the change.

---

## 5. Where to edit what

| What you see on the site        | Where to edit in Payload        |
|---------------------------------|----------------------------------|
| Hero (welcome, headline, CTA)   | **Hero** → open the document    |
| “Key Features” section         | **Key Features**                 |
| FAQ accordion                   | **FAQs** (add/remove/reorder)   |
| “Why Choose Oro Remit?” blocks  | **Why Choose**                   |
| “What does Oro Remit unlock?”   | **Opportunities**                |
| Countries & currencies         | **Supported Countries**          |
| Contact form submissions       | **Contact Submissions**          |
| Images (e.g. security, flags)   | **Media** (upload), then link in the relevant collection |

---

## 6. After seeding: replacing with Payload data

- The **frontend already uses Payload**: the home page loads data from the API and renders it. Defaults in the code are only used when Payload returns no data.
- So once you’ve run **Step 3**, the site is effectively “replaced” with Payload data; you can remove or change content only in the admin and it will update on the site.
- To add new FAQs, countries, or copy, use the admin. To change images, use **Media** and then the relevant collection (e.g. Key Features, Why Choose, Supported Countries).

---

## Troubleshooting

- **“Module not found” or config errors when running `pnpm run seed`**  
  Run from the project root and ensure `.env` is there and `pnpm install` has been run.

- **Seed fails with database/connection errors**  
  Check that MongoDB is running and `DATABASE_URI` in `.env` is correct (and that Atlas IP allowlist includes your IP if you use Atlas).

- **Homepage still shows old/default content**  
  Make sure you ran `pnpm run seed` and that you’re not seeing a cached version (hard refresh or restart `pnpm dev`).

- **Admin shows 404 or doesn’t load**  
  Confirm the dev server is running and you’re opening `http://localhost:3000/admin` (not `/api/admin`).
