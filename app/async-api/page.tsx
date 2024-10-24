import { cookies, headers } from 'next/headers'

export default async function AsyncAPIDemo() {
  const cookieStore = await cookies()
  const headersList = await headers()

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold mb-12">Cookies API</h1>

        <div className="space-y-6">
          {/* Cookies Section */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="text-xl font-medium mb-4">Current Cookies</h2>
            <pre className="bg-black/50 rounded-lg p-4 overflow-auto text-sm text-neutral-200">
              {JSON.stringify(cookieStore.getAll(), null, 2)}
            </pre>
          </div>

          {/* Headers Section */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="text-xl font-medium mb-4">Request Headers</h2>
            <pre className="bg-black/50 rounded-lg p-4 overflow-auto text-sm text-neutral-200">
              {JSON.stringify(Object.fromEntries(headersList.entries()), null, 2)}
            </pre>
          </div>

          {/* Code Example Section */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="text-xl font-medium mb-4">Usage Example</h2>
            <div className="space-y-4">
              <div className="bg-black/50 rounded-lg p-4">
                <p className="text-sm text-neutral-400 mb-2">Before Next.js 15:</p>
                <code className="text-sm text-neutral-200">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  const token = cookies().get('token')
                </code>
              </div>
              <div className="bg-black/50 rounded-lg p-4">
                <p className="text-sm text-neutral-400 mb-2">After Next.js 15:</p>
                <code className="text-sm text-neutral-200">
                  const cookieStore = await cookies()<br/>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  const token = cookieStore.get('token')
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}