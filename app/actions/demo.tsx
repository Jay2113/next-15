'use server'

import { unstable_after as after } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function submitForm(formData: FormData): Promise<void> {
  // Process the form data
  const name = formData.get('name')
  const email = formData.get('email')
  
  // Primary task
  console.log('Processing:', { name, email })
  
  // Secondary task - runs after response is sent
  after(() => {
    console.log('Background processing started...')
    setTimeout(() => {
      console.log('Background processing completed')
    }, 5000)
  })

  // Revalidate the page
  revalidatePath('/form-demo')
}