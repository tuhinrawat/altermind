'use client';

import Link from 'next/link';

export default function AdminBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
        <Link
          href="/admin/blog/create"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Create New Post
        </Link>
      </div>
      {children}
    </div>
  );
} 