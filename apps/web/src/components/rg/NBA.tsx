'use client'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function NBA({ orderId, title, daysLeft, dueDate }: any) {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(()=>{
    if (!ref.current) return
    const el = ref.current
    // IntersectionObserver to trigger prefetch when >=50% visible
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if (e.isIntersecting && e.intersectionRatio >= 0.5) {
          // data-prefetch hint: router can use this. Also call fetch to warm server (best-effort).
          fetch(/api/purchase//prefetch).catch(()=>{})
        }
      })
    }, { threshold: [0.5] })
    io.observe(el)
    return ()=> io.disconnect()
  }, [orderId])

  return (
    <div ref={ref} className='rounded-xl p-3 shadow-e1 border flex items-center justify-between'>
      <div>
        <div className='text-sm font-semibold'>{title}</div>
        <div className='text-xs text-muted'>{daysLeft} days left · Return by {dueDate}</div>
      </div>
      <div>
        <Link href={/purchases/} prefetch={true}><button className='h-12 rounded-xl px-4 bg-[color:var(--color-primary)] text-white'>Start return</button></Link>
      </div>
    </div>
  )
}