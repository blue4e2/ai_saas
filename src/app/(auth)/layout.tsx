import React, { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <main className='auth'>{children}</main>
  )
}

export default Layout