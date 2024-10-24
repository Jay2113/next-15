// app/form-demo/page.tsx
'use client'
import { submitForm } from '@/app/actions/demo'
import { useFormStatus } from 'react-dom'
import { useState } from 'react'

function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  )
}

export default function FormDemoPage() {
  const [message, setMessage] = useState<string>('')

  async function handleSubmit(formData: FormData) {
    try {
      await submitForm(formData)
      setMessage('Form submitted successfully!')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessage('Error submitting form:')
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-12">Form Demo</h1>

      <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
        <form action={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-neutral-200 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 bg-black/50 rounded-lg border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-neutral-200 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 bg-black/50 rounded-lg border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <SubmitButton />
        </form>

        {message && (
          <div className="mt-4 p-4 rounded-lg bg-neutral-800/50 text-sm">
            {message}
          </div>
        )}
      </div>

      <div className="mt-6 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
        <h2 className="text-xl font-medium mb-2">How it works</h2>
        <p className="text-neutral-400">
          This form demonstrates Server Actions with the after() API. When submitted:
          1. Form data is processed immediately
          2. Background tasks run after the response
          3. The page is revalidated
          4. Check the console for background processing logs
        </p>
      </div>
    </div>
  )
}