import Image from 'next/image'
import Navbar from './components/Navbar'
import Body from './components/Body'
import { boardDefault } from './components/Words'
import EditModal from './components/EditModal'
import QuestionModal from './components/QuestionModal'
import Sidebar from './components/Sidebar'
import GameEndModal from './components/GameEndModal'

export default function Home() {
  
  return (
    <>
      <div className="h-screen w-full flex flex-col flex-wrap">
        <Sidebar/>
        <EditModal />
        <QuestionModal/>
        <Navbar />
        <Body />
      </div>
    </>
  )
}
