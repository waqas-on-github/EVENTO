'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {


  const router = useRouter()

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='flex items-center justify-center gap-4   flex-col mt-[20%]' >
      <h2>Something went wrong!</h2>
      <button className='p-2 bg-green-800 text-white/70 rounded-lg hover:bg-green-500 hover:text-white ' 
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => router.push('/')
        }
      >
        Back to Home 
      </button>
    </div>
  )
}