'use client'

import React from 'react'
import { ChevronLeft, ChevronRight, Sun, CloudSun } from 'lucide-react'
import { useBookingStore } from '@/store/useBookingStore'

const morningSlots = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM']
const afternoonSlots = ['01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM']

export const DateTimePicker = () => {
  const { date, setDate, time, setTime } = useBookingStore()

  // October 2025 starts on a Wednesday
  const daysInMonth = 31
  const firstDayOfWeek = 3 // 0: Sun, 1: Mon, ... 3: Wed

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const blanks = Array.from({ length: firstDayOfWeek }, (_, i) => i)

  return (
    <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
      {/* Calendar */}
      <div className="flex-1 rounded-2xl bg-white p-6 shadow-sm border border-gray-50">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-[16px] font-bold text-brand-dark">October 2025</h3>
          <div className="flex gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-100 transition-colors hover:bg-gray-50">
              <ChevronLeft size={16} className="text-gray-400" />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-100 transition-colors hover:bg-gray-50">
              <ChevronRight size={16} className="text-gray-400" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-y-4 text-center">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
            <div key={d} className="text-[12px] font-bold text-gray-300 uppercase">
              {d}
            </div>
          ))}
          {blanks.map((b) => <div key={`b-${b}`} />)}
          {days.map((d) => {
            const dateStr = `2025-10-${d.toString().padStart(2, '0')}`
            const isSelected = date === dateStr
            const isToday = d === 14 // Mocking today as Oct 14

            return (
              <button
                key={d}
                onClick={() => setDate(dateStr)}
                className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-bold transition-all ${
                  isSelected 
                    ? 'bg-brand-dark text-white ring-2 ring-brand-dark ring-offset-2' 
                    : isToday 
                    ? 'bg-brand-green/10 text-brand-green' 
                    : 'text-brand-dark hover:bg-gray-100'
                }`}
              >
                {d}
              </button>
            )
          })}
        </div>
      </div>

      {/* Time Slots */}
      <div className="flex-1">
        <div className="mb-10">
          <div className="mb-6 flex items-center gap-2 text-gray-400">
            <Sun size={16} />
            <span className="text-[14px] font-bold uppercase tracking-wider">Morning</span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {morningSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setTime(slot)}
                className={`h-11 rounded-xl border text-[13px] font-bold transition-all ${
                  time === slot 
                    ? 'border-brand-dark bg-brand-dark text-white' 
                    : 'border-gray-100 bg-white text-brand-dark hover:border-brand-dark/30 hover:bg-gray-50'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6 flex items-center gap-2 text-gray-400">
            <CloudSun size={16} />
            <span className="text-[14px] font-bold uppercase tracking-wider">Afternoon</span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {afternoonSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setTime(slot)}
                className={`h-11 rounded-xl border text-[13px] font-bold transition-all ${
                  time === slot 
                    ? 'border-brand-dark bg-brand-dark text-white' 
                    : 'border-gray-100 bg-white text-brand-dark hover:border-brand-dark/30 hover:bg-gray-50'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
