import { AiOutlineRise } from '../../../node_modules/react-icons/ai'
import {BiSolidDashboard,BiMenu,BiMenuAltLeft} from '../../../node_modules/react-icons/bi'
import {BsSearch,BsCalendar4Event} from '../../../node_modules/react-icons/bs'
import {MdPlaylistAddCheck,MdNavigateNext,MdNavigateBefore} from '../../../node_modules/react-icons/md'

const DashHeader = () => {
    return (
        <div className="border-2 py-8 px-2 flex lg:gap-8 md:gap-8 gap-0 items-center text-xs rounded-t-lg justify-between">
            <div className='flex gap-2 items-center lg:hidden '>
                <MdNavigateBefore className='p-2 border-2 h-10 w-10 rounded-full' />
            </div>
            <div className='lg:flex gap-2 items-center md:flex hidden'>
                <MdPlaylistAddCheck />
                <h6>List Tasks</h6>
            </div>
            <div className='flex gap-2 items-center'>
                <BiSolidDashboard />
                <h6>Boards</h6>
            </div>
            <div className='lg:flex gap-2 items-center md:flex hidden'>
                <BsCalendar4Event />
                <h6>Calendar</h6>
            </div>
            <div className='lg:flex gap-2 items-center hidden'>
                <BiMenuAltLeft />
                <h6>Gantt</h6>
            </div>
            <div className='lg:flex gap-2 items-center hidden'>
                <BiMenu />
                <h6>Timeline</h6>
            </div>
            <div className='lg:flex gap-2 items-center hidden'>
                <AiOutlineRise />
                <h6>Activity</h6>
            </div>
            <div className='flex gap-2 items-center lg:hidden '>
                <MdNavigateNext className='p-2 border-2 h-10 w-10 rounded-full' />
            </div>
            <div className='border bg-white lg:py-3 lg:px-5 lg:flex flex p-3 items-center shadow-md rounded-full'>
                <BsSearch />
                <input type="search" className='lg:block outline-0 text-black text-xs w-24 pl-1.5 rounded-md hidden' placeholder='Search Tasks' />
            </div>
        </div>
    )
}

export default DashHeader