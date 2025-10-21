import React from 'react'
export default function Button({ children, variant='primary', ...props }: any) {
  const base = 'inline-flex items-center justify-center rounded-xl font-semibold'
  const size = 'h-12 px-4'
  const variantClass = variant === 'primary' ? 'bg-[color:var(--color-primary)] text-white' : variant === 'destructive' ? 'bg-[color:var(--color-error)] text-white' : 'border border-[color:var(--color-primary)]'
  return <button className={\\ \ \\} {...props}>{children}</button>
}