import Image from 'next/image'
import Navbar from './components/Navbar'
import Body from './components/Body'
import { boardDefault } from './components/Words'

export default function Home() {
  
  return (
    <>
      <div className="h-screen w-full flex flex-col flex-wrap">
        <Navbar/>
        <Body />
      </div>
    </>
  )
}
