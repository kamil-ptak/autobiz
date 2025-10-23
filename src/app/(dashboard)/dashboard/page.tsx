import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import StatsCard from '@/components/StatsCard'
import { DollarSign, TrendingUp, Car, Receipt } from 'lucide-react'

export default async function DashboardPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  // TODO: Fetch real data from database
  const stats = {
    totalRevenue: '125,430',
    totalProfit: '43,250',
    activeCars: '12',
    totalTransactions: '47',
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-text mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Revenue"
          value={`PLN ${stats.totalRevenue}`}
          icon={DollarSign}
          trend={{ value: '12.5%', isPositive: true }}
        />
        <StatsCard
          title="Total Profit"
          value={`PLN ${stats.totalProfit}`}
          icon={TrendingUp}
          trend={{ value: '8.2%', isPositive: true }}
        />
        <StatsCard
          title="Active Cars"
          value={stats.activeCars}
          icon={Car}
        />
        <StatsCard
          title="Transactions"
          value={stats.totalTransactions}
          icon={Receipt}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
          <p className="text-gray-500 text-center py-8">
            No transactions yet. Add your first vehicle transaction!
          </p>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Recent Expenses</h3>
          <p className="text-gray-500 text-center py-8">
            No expenses recorded. Start tracking your expenses!
          </p>
        </div>
      </div>
    </div>
  )
}
