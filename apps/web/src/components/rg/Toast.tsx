import React from 'react'
export default function Toast({ message, undoLabel, onUndo }: any) {
  return (
    <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 rounded-xl p-3 shadow-e2 bg-white'>
      <div className='flex items-center gap-4'>
        <div className='text-sm'>{message}</div>
        {undoLabel ? <button onClick={onUndo} className='font-semibold'>{undoLabel}</button> : null}
      </div>
    </div>
  )
}