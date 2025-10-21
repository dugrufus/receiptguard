import React from 'react'
export default function PolicyChip({ policy }: any) {
  return (
    <div className='rounded-xl p-3 border bg-white'>
      <div className='text-sm font-semibold'>Return window: {policy.window}</div>
      <div className='text-xs text-muted'>Return label: {policy.label} · Restocking fee: {policy.restocking}</div>
      <button className='mt-2 text-sm font-semibold'>View full policy</button>
    </div>
  )
}