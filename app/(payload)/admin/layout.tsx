import '@payloadcms/next/css'
import { RootLayout } from '@payloadcms/next/layouts'
import { handleServerFunctions } from '@payloadcms/next/layouts'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const config = await configPromise
  const payload = await getPayload({ config })
  const importMap = payload.config.importMap

  async function serverFunction(args: { name: string; args: Record<string, unknown> }) {
    'use server'
    const payloadInner = await getPayload({ config: await configPromise })
    return handleServerFunctions({
      name: args.name,
      args: args.args,
      config: configPromise,
      importMap: payloadInner.config.importMap,
    })
  }

  return (
    <RootLayout
      config={configPromise}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  )
}
