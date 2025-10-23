import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export default async function InvoicesPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-text">Invoices</h1>
        <Link href="/invoices/new" className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          Create Invoice
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="card text-center">
          <p className="text-sm text-gray-600 mb-2">Total Invoices</p>
          <p className="text-2xl font-bold text-text">0</p>
        </div>
        <div className="card text-center">
          <p className="text-sm text-gray-600 mb-2">Paid</p>
          <p className="text-2xl font-bold text-accent">0</p>
        </div>
        <div className="card text-center">
          <p className="text-sm text-gray-600 mb-2">Pending</p>
          <p className="text-2xl font-bold text-orange-500">0</p>
        </div>
      </div>

      <div className="card">
        <div className="mb-6 flex gap-4">
          <input
            type="text"
            placeholder="Search invoices..."
            className="input-field flex-1"
          />
          <select className="input-field w-48">
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">
                  Invoice #
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">
                  Client
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">
                  Issue Date
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">
                  Due Date
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">
                  Amount
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7} className="text-center py-12 text-gray-500">
                  No invoices found. Create your first invoice to get started!
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
