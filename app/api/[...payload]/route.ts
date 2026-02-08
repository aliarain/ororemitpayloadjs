import { handleEndpoints } from 'payload'
import configPromise from '@/payload.config'
import { NextRequest } from 'next/server'

const handler = async (req: NextRequest) => {
  try {
    return await handleEndpoints({
      config: configPromise,
      request: req,
    })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[Payload API] Error:', message)
    return new Response(
      JSON.stringify({ error: 'Payload API failed', message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}

export const GET = handler
export const POST = handler
export const PUT = handler
export const PATCH = handler
export const DELETE = handler
export const OPTIONS = handler
