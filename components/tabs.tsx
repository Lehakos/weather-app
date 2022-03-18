import React from 'react'
import { Tab, Props as TabProps } from './tab'

export type TabData = Pick<TabProps, 'ariaControls' | 'href'> & {
  text: React.ReactNode
}

export type Props = {
  items: TabData[]
  /** index of the selected tab */
  selected: number
}

export const Tabs: React.FC<Props> = ({ items, selected }) => {
  return (
    <ul className="flex w-full border-b px-3" role="tablist">
      {items.map((item, index) => (
        <li className="-mb-px flex" key={index}>
          <Tab
            selected={selected === index}
            href={item.href}
            ariaControls={item.ariaControls}
          >
            {item.text}
          </Tab>
        </li>
      ))}
    </ul>
  )
}
