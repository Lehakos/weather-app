import React from 'react'
import cn from 'classnames'

export type Data = {
  name: string
  value: string
}

export type Props = Data & {
  className?: string
}

export const StatRow: React.FC<Props> = ({ name, value, className }) => {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <dt>{name}</dt>
      <dd className="text-lg">{value}</dd>
    </div>
  )
}
