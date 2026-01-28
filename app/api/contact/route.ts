import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const payload = await getPayload({ config: await configPromise })

    const submission = await payload.create({
      collection: 'contact-submissions',
      data: {
        name,
        email,
        phone: phone || '',
        subject,
        message,
        status: 'new',
      },
    })

    return NextResponse.json(
      { success: true, data: submission },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form', details: error.message },
      { status: 500 }
    )
  }
}
