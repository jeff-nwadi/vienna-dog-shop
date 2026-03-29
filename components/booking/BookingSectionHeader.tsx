'use client'

import React from 'react'

interface BookingSectionHeaderProps {
  number: number
  title: string
}

export const BookingSectionHeader = ({ number, title }: BookingSectionHeaderProps) => {
  return (
    <div className="mb-8 flex items-center gap-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-dark text-white text-[14px] font-bold">
        {number}
      </div>
      <h2 className="font-heading text-xl font-bold tracking-tight text-brand-dark">
        {title}
      </h2>
    </div>
  )
}
