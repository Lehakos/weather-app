import React from 'react'
import { StatRow, Data } from './stat-row'

export type StatsItem = Data

export type Props = {
  items: StatsItem[]
}

export const Stats: React.FC<Props> = ({ items }) => {
  return (
    <dl>
      {items.map((item) => (
        <StatRow
          key={item.name}
          {...item}
          className="border-b py-1 first:pt-0 last:border-b-0 last:pb-0"
        />
      ))}
    </dl>
  )
}
