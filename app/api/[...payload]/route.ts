import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { NextRequest } from 'next/server'

const handler = async (req: NextRequest) => {
  const payload = await getPayload({ config: await configPromise })
  return payload.handler(req)
}

export const GET = handler
export const POST = handler
export const PUT = handler
export const PATCH = handler
export const DELETE = handler
