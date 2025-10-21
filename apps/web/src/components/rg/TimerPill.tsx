import React from 'react'
export default function TimerPill({ daysLeft, dueDate }: any) {
  return (
    <div className='inline-flex flex-col items-start p-2 rounded-md bg-[color:var(--surface-subtle)]'>
      <span className='text-sm font-semibold'>{daysLeft} days left</span>
      <span className='text-xs text-muted'>Return by {dueDate}</span>
    </div>
  )
}