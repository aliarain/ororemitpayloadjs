import { NotFoundPage } from '@payloadcms/next/views'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export default async function AdminNotFound() {
  const payload = await getPayload({ config: await configPromise })
  const importMap = payload.config.importMap
  return <NotFoundPage config={configPromise} importMap={importMap} />
}
