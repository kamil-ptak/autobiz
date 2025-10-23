import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'AutoBiz - Financial Management for Car Dealers',
  description: 'Track transactions, profits, expenses, and invoices for your car dealership',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body className="h-full bg-background font-sans antialiased">
          <div className="flex h-full">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Navbar />
              <main className="flex-1 overflow-auto">
                <div className="max-w-7xl mx-auto p-6">
                  <div className="bg-white rounded-lg shadow-md p-6 min-h-[calc(100vh-12rem)]">
                    {children}
                  </div>
                </div>
              </main>
              <footer className="bg-white border-t border-gray-200 px-6 py-4">
                <div className="max-w-7xl mx-auto">
                  <p className="text-sm text-gray-500 text-center">
                    © AutoBiz 2025. All rights reserved.
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
