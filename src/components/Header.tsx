'use client'

import { UserButton } from '@clerk/nextjs'
import { Bell } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-text">Welcome back!</h2>
          <p className="text-sm text-gray-500">
            Here's what's happening with your business today
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
          </button>

          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </div>
    </header>
  )
}
