'use client'

import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

interface NavbarProps {
  title?: string
}

const getPageTitle = (pathname: string): string => {
  if (pathname === '/dashboard') return 'Dashboard'
  if (pathname === '/transactions') return 'Transactions'
  if (pathname === '/expenses') return 'Expenses'
  if (pathname === '/invoices') return 'Invoices'
  if (pathname === '/reports') return 'Reports'
  return 'AutoBiz'
}

export default function Navbar({ title }: NavbarProps) {
  const pathname = usePathname()
  const pageTitle = title || getPageTitle(pathname)
  
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AB</span>
            </div>
            <span className="text-xl font-semibold text-text">AutoBiz</span>
          </div>
          <div className="hidden md:block">
            <span className="text-gray-400">|</span>
            <span className="ml-4 text-lg font-medium text-text">{pageTitle}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <UserButton 
            appearance={{
              elements: {
                avatarBox: "w-8 h-8"
              }
            }}
          />
        </div>
      </div>
    </nav>
  )
}
