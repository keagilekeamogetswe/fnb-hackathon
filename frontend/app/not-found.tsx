// app/not-found.tsx
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white px-6">
      <h1 className="text-5xl font-bold mb-4 text-orange-400">404</h1>
      <p className="text-lg mb-6 text-gray-300">Oops! The page you're looking for doesn't exist.</p>
      <Link
        href="/"
        className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
}
