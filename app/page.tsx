import Navbar from './components/Navbar'
import Body from './components/Body'
import EditModal from './components/EditModal'
import QuestionModal from './components/QuestionModal'
import Sidebar from './components/Sidebar'


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
