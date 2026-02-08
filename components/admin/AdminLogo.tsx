import React from 'react'

/**
 * Full logo shown on the Payload admin login page and other large contexts.
 * Uses the Oro Remit logo from public/ororemit-logo.png.
 */
export default function AdminLogo() {
  return (
    <img
      src="/ororemit-logo.png"
      alt="Oro Remit"
      style={{ maxHeight: '40px', width: 'auto', objectFit: 'contain' }}
    />
  )
}
