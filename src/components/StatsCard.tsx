import { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string
  icon: LucideIcon
  trend?: {
    value: string
    isPositive: boolean
  }
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
}: StatsCardProps) {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon size={20} className="text-primary" />
        </div>
      </div>

      <h3 className="text-3xl font-bold text-text mb-2">{value}</h3>

      {trend && (
        <p
          className={`text-sm ${
            trend.isPositive ? 'text-accent' : 'text-red-500'
          }`}
        >
          {trend.isPositive ? '↑' : '↓'} {trend.value} from last month
        </p>
      )}
    </div>
  )
}
