import React from 'react'
import { LeftSidebar } from './_components/left-sidebar'
import { MainContent } from './_components/main-content'
import { RightSidebar } from './_components/right-sidebar'

const HomePage = () => {
  return (
    // <main className="min-h-screen w-full bg-gray-200 dark:bg-slate-600 overflow-auto no-scrollbar">
    //   <div className="max-w-[1400px] mx-auto flex">
    <main className="min-h-screen w-full bg-gray-200 dark:bg-slate-600 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex h-screen">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </main>
  )
}

export default HomePage
