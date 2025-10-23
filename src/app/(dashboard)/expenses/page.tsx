import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export default async function ExpensesPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-text">Expenses</h1>
        <Link href="/expenses/new" className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          Add Expense
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="card text-center">
          <p className="text-sm text-gray-600 mb-2">Total Expenses</p>
          <p className="text-2xl font-bold text-text">PLN 0.00</p>
        </div>
        <div className="card text-center">
          <p className="text-sm text-gray-600 mb-2">Fuel</p>
          <p className="text-2xl font-bold text-text">PLN 0.00</p>
        </div>
        <div className="card text-center">
          <p className="text-sm text-gray-600 mb-2">Maintenance</p>
          <p className="text-2xl font-bold text-text">PLN 0.00</p>
        </div>
        <div className="card text-center">
          <p className="text-sm text-gray-600 mb-2">Other</p>
          <p className="text-2xl font-bold text-text">PLN 0.00</p>
        </div>
      </div>

      <div className="card">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search expenses..."
            className="input-field"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">
                  Date
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">
                  Description
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">
                  Category
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">
                  Amount
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="text-center py-12 text-gray-500">
                  No expenses found. Add your first expense to get started!
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
