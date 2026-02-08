#!/usr/bin/env node
/**
 * Creates .env.production from your .env so you can include it in the folder you upload.
 * Next.js loads .env.production when you run `next start` (NODE_ENV=production).
 *
 * Usage: node scripts/prepare-deploy-env.js
 * Or:    pnpm run env:for-upload
 *
 * IMPORTANT: Review .env.production before uploading. Use production values for:
 *   - PAYLOAD_PUBLIC_SERVER_URL (your live URL, e.g. https://yourdomain.com)
 *   - PAYLOAD_SECRET (generate a new one for production)
 *   - DATABASE_URI (production MongoDB, e.g. Atlas)
 */

const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const envPath = path.join(root, '.env')
const envProductionPath = path.join(root, '.env.production')

if (!fs.existsSync(envPath)) {
  console.error('No .env file found. Create .env first (see .env.example).')
  process.exit(1)
}

const content = fs.readFileSync(envPath, 'utf8')
fs.writeFileSync(envProductionPath, content, 'utf8')

console.log('Created .env.production from .env')
console.log('Review it and update production values (PAYLOAD_PUBLIC_SERVER_URL, PAYLOAD_SECRET, DATABASE_URI) before uploading.')
