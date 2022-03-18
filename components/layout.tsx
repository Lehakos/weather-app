import React from 'react'
import { Header } from './header'

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />

      <main className="container grow self-center py-5 px-6">{children}</main>
    </div>
  )
}
