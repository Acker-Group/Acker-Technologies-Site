import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400">404</h1>
        <h2 className="text-4xl font-bold mt-4 text-silver-900 dark:text-silver-50">
          Page Not Found
        </h2>
        <p className="text-xl text-silver-600 dark:text-silver-400 mt-4 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
