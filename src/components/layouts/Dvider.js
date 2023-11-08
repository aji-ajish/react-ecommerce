import React from 'react'

export default function Dvider({ title }) {
  return (
    <div className="relative mt-12 mb-5">
      {/* divider */}
      <div className="absolute inset-0 flex items-center">
        <div className="border border-slate-400 dark:border-slate-100 w-11/12 mx-auto"></div>
      </div>
      {/* text */}
      <div className="flex justify-center over relative">
        <div className="font-poppins text-4xl text-slate-600 dark:text-slate-100 px-4 bg-slate-50 dark:bg-slate-900">
          {title}
        </div>
      </div>
    </div>
  )
}
