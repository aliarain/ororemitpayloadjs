import type { Metadata } from 'next'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export const dynamic = 'force-dynamic'

type Args = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({
    config: configPromise,
    params: params.then((p) => ({
      segments: p.segments?.[0] === 'index' ? [] : (p.segments ?? []),
    })),
    searchParams,
  })

export default async function AdminPage({ params, searchParams }: Args) {
  const payload = await getPayload({ config: await configPromise })
  const importMap = payload.config.importMap

  const segmentsPromise = params.then((p) => ({
    segments: p.segments?.[0] === 'index' ? [] : (p.segments ?? []),
  }))

  return (
    <RootPage
      config={configPromise}
      importMap={importMap}
      params={segmentsPromise}
      searchParams={searchParams}
    />
  )
}
