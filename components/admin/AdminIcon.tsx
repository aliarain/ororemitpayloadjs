import React from 'react'

/**
 * Small icon shown in the Payload admin sidebar/nav.
 * Uses the Oro Remit logo from public/ororemit-logo.png.
 */
export default function AdminIcon() {
  return (
    <img
      src="/ororemit-logo.png"
      alt="Oro Remit"
      style={{ width: '32px', height: '32px', objectFit: 'contain' }}
    />
  )
}
