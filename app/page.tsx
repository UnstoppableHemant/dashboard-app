import Image from 'next/image'
import Header from './components/common/header'
import SideNav from './components/common/sideNav'
import User from './components/userDetails/user'
import Dashboard from './components/dashUI/dashboard'

export default function Home() {
  return (
    <>
    <Header/>
    <div className='flex'>
      <div className='lg:border-x-2 lg:block hidden'><SideNav/></div>
      <User/>
      <Dashboard/>
    </div>
    </>
  )
}
