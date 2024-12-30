'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!session || session.user?.role !== 'admin') {
    redirect('/auth/signin');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
} 