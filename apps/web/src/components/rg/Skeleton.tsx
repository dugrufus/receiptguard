import React from 'react'
export default function Skeleton({ count=3 }: any) {
  return <div className='space-y-3'>{Array.from({length:count}).map((_,i)=>(<div key={i} className='h-4 bg-gray-200 rounded w-full animate-pulse'/>))}</div>
}