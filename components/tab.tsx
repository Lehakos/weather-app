import React from 'react'
import Link from 'next/link'
import { UrlObject } from 'url'
import cn from 'classnames'

export type Props = {
  href: string | UrlObject
  /** id of element which is linked to this tab */
  ariaControls: string
  selected: boolean
}

export const Tab: React.FC<Props> = ({
  href,
  children,
  ariaControls,
  selected,
}) => {
  return (
    <Link href={href}>
      <a
        aria-selected={selected}
        aria-controls={ariaControls}
        role="tab"
        className={cn(
          'block rounded-t border py-1 px-2 text-black focus:relative focus:z-10 focus:outline focus:outline-blue-300',
          selected
            ? 'border-b-transparent bg-white'
            : 'bg-slate-100 hover:bg-slate-200'
        )}
        tabIndex={selected ? undefined : -1}
      >
        {children}
      </a>
    </Link>
  )
}
