import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Download } from 'lucide-react'

export default async function ReportsPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-text">Reports</h1>
        <button className="btn-primary flex items-center gap-2">
          <Download size={20} />
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Financial Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Total Revenue</span>
              <span className="font-semibold">PLN 0.00</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Total Expenses</span>
              <span className="font-semibold">PLN 0.00</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Net Profit</span>
              <span className="font-semibold text-accent">PLN 0.00</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">VAT Collected</span>
              <span className="font-semibold">PLN 0.00</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Total Transactions</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Active Listings</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Avg. Profit Margin</span>
              <span className="font-semibold">0%</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Avg. Sale Time</span>
              <span className="font-semibold">0 days</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Tax Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-700 mb-3">VAT Transactions</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Count</span>
                <span className="font-semibold">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total VAT</span>
                <span className="font-semibold">PLN 0.00</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-3">Marża Transactions</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Count</span>
                <span className="font-semibold">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Profit</span>
                <span className="font-semibold">PLN 0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
