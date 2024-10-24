export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold">
            Next.js 15 Features Demo
          </h1>
          <p className="text-lg text-neutral-600">
            Explore the latest features and improvements in Next.js 15
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            New Features
          </h2>
          
          <div className="grid gap-4">
            <div className="group rounded-lg border p-4 hover:border-neutral-400">
              <h3 className="font-medium">Enhanced Form Component</h3>
              <p className="text-sm text-neutral-600">
                Automatic prefetching and improved form handling capabilities
              </p>
            </div>

            <div className="group rounded-lg border p-4 hover:border-neutral-400">
              <h3 className="font-medium">Async Request APIs</h3>
              <p className="text-sm text-neutral-600">
                Better optimization for data fetching and API requests
              </p>
            </div>

            <div className="group rounded-lg border p-4 hover:border-neutral-400">
              <h3 className="font-medium">Partial Pre-rendering (PPR)</h3>
              <p className="text-sm text-neutral-600">
                Improved performance with partial page pre-rendering
              </p>
            </div>

            <div className="group rounded-lg border p-4 hover:border-neutral-400">
              <h3 className="font-medium">after() API</h3>
              <p className="text-sm text-neutral-600">
                Efficient handling of post-response tasks
              </p>
            </div>

            <div className="group rounded-lg border p-4 hover:border-neutral-400">
              <h3 className="font-medium">React 19 Support</h3>
              <p className="text-sm text-neutral-600">
                Full compatibility with React 19 and improved hydration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}