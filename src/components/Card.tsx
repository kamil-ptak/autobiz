import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: 'none' | 'sm' | 'md' | 'lg'
}

export default function Card({
  children,
  className,
  padding = 'md',
  shadow = 'md'
}: CardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg'
  }
  
  return (
    <div
      className={clsx(
        'bg-white rounded-lg border border-gray-200',
        paddingStyles[padding],
        shadowStyles[shadow],
        className
      )}
    >
      {children}
    </div>
  )
}
