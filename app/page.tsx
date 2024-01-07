'use client'

import Navbar from './components/Navbar'
import Body from './components/Body'
import EditModal from './components/EditModal'
import QuestionModal from './components/QuestionModal'
import Sidebar from './components/Sidebar'
import useDarkMode from './components/hooks/useDarkMode'

export default function Home() {
  const isDark = useDarkMode()
    return (
    <>
      <div className={`h-screen w-full flex flex-col flex-wrap ${isDark.isOpen?'dark':''}`}>
        <Sidebar/>
        <EditModal />
        <QuestionModal/>
        <Navbar />
        <Body />
      </div>
    </>
  )
}
