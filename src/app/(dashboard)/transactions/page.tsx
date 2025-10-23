import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export default async function TransactionsPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-text">Transactions</h1>
        <Link href="/transactions/new" className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          Add Transaction
        </Link>
      </div>

      <div className="card">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search transactions..."
            className="input-field"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">
                  Vehicle
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">
                  Purchase Price
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">
                  Selling Price
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">
                  Profit
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">
                  Tax Type
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
                  No transactions found. Add your first transaction to get started!
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
