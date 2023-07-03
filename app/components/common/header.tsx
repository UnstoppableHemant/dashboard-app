import {BiMenu,BiSolidUserCircle} from '../../../node_modules/react-icons/bi'
import {BsThreeDots,BsSearch,BsChevronRight,BsFillCircleFill} from '../../../node_modules/react-icons/bs'
import {IoIosNotifications,IoIosCloseCircle} from '../../../node_modules/react-icons/io'
const Header = () => {
  return (
    <div className='py-4 px-6 flex lg:gap-5 md:gap-1 items-center border-y-2 font-bold justify-between'>
        <div><BiMenu className='h-10 w-10 p-2 shadow-md bg-white rounded-full border'/></div>
        <div><h3 className='text-xl text-[#4D5E80]'>Constructor</h3></div>
        <div className='flex gap-6 text-xs pl-8'>
            <h6 className='lg:block md:block hidden'>Dashboard</h6>
            <h6 className='lg:block md:block hidden'>About Us</h6>
            <h6 className='lg:block md:hidden hidden'>News</h6>
            <h6 className='lg:block md:hidden hidden'>User Policy</h6>
            <h6 className='lg:block md:hidden hidden'>Contacts</h6>
            <p className='lg:block md:block hidden'><BsThreeDots className='w-5 h-5'/></p>
        </div>
        <div className='border bg-white lg:py-3 lg:px-5 lg:flex md:flex hidden p-3 items-center shadow-md rounded-full'>
            <BsSearch/>
            <input type="search" className='lg:block outline-0 text-black text-xs w-48 pl-1.5 rounded-md md:hidden' placeholder='Search Products, Orders and Clients'/>
            <BsChevronRight className='lg:block md:hidden'/>
        </div>
        <div className='flex items-center text-xs gap-3'>
            <BiSolidUserCircle className='lg:w-5 lg:h-5 lg:p-0 lg:shadow-none lg:rounded-none p-2 shadow-md w-10 h-10 rounded-full'/>
            <h6 className='lg:block hidden'>Clayton Santos</h6>
        </div>
        <div className='gap-2 lg:flex md:flex hidden'>
            <div className='relative'>
                <BsFillCircleFill className='absolute right-1 text-pink-600 w-2 h-2'/>
                <IoIosNotifications className='h-10 w-10 p-2 shadow-md bg-white rounded-full border'/>
            </div>
            <IoIosCloseCircle className='h-10 w-10 p-2 shadow-md bg-white rounded-full border'/>
        </div>
    </div>
  )
}

export default Header