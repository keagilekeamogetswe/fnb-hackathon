
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1D1D23] text-white px-10">
      <div className=' text-center bg-[rgba(217,217,217,0.05)] outline outline-[rgba(84,84,87,0.6)] rounded-[22px] shadow-md p-10'>
        <h1 className="text-4xl font-bold mb-4">
          Looks like <br />
          You’re lost
        </h1>
        <p className="text-xl mb-8">The page you want to access was not found</p>
        <Link href="/" className="text-lg px-6 py-3 bg-[#8EB02F] rounded-full text-[#1D1E21] font-semibold hover:bg-[#7DA92B] transition-colors duration-300">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
