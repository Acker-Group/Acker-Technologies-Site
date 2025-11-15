'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 dark:text-red-400">Error</h1>
        <h2 className="text-3xl font-bold mt-4 text-silver-900 dark:text-silver-50">
          Something went wrong!
        </h2>
        <p className="text-lg text-silver-600 dark:text-silver-400 mt-4 mb-8">
          We apologize for the inconvenience. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
