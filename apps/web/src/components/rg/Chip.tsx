import React from 'react'
export default function Chip({ children }: any) {
  return <span className='inline-flex items-center h-7 px-3 rounded-full text-sm font-medium bg-[color:var(--color-primary)/10] text-[color:var(--color-primary)]'>{children}</span>
}