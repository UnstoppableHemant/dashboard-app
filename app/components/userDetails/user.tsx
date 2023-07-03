import {BiSolidUser,BiSolidDashboard,BiLogoTelegram} from '../../../node_modules/react-icons/bi'
import {BsThreeDots,BsFillCircleFill,BsFillCloudFill,BsWhatsapp} from '../../../node_modules/react-icons/bs'
import {MdPlaylistAddCheck,MdEmail} from '../../../node_modules/react-icons/md'
import {FaUserGroup} from '../../../node_modules/react-icons/fa6'
import {IoMdCalendar,IoMdCall} from '../../../node_modules/react-icons/io'
import {TbTool} from '../../../node_modules/react-icons/tb'
import {PiNotebookDuotone} from '../../../node_modules/react-icons/pi'
import Image from 'next/image'
import user1 from '../../assets/img/user-1.png'

const User = () => {
  return (
    <div className='py-8 px-10 w-[400px] lg:block hidden'>
        <div className='mt-3 flex justify-between'>
            <BiSolidUser className='w-10 h-10 p-2 rounded-full shadow-md bg-white' />
            <BsThreeDots className='w-10 h-10 p-2 rounded-full shadow-md bg-white' />
        </div>
        <div className='flex'>
            <div className='ms-auto me-auto p-3 rounded-full border-2 border-y-blue-300 arc'>
                 <div className='relative'>
                    <div className='ml-2 bg-blue-600 px-3 py-1.5 text-white z-10 rounded-full'>2 </div>
                    <Image src={user1} alt='User Image' className='w-32 h-32 rounded-full shadow-md bg-yellow-200 m-0' />
                </div>
            </div>
        </div>
        <div className='text-center mt-8 font-bold'>
            <div className='mt-2'>
                <h3 className='text-md text-[#4D5E80]'>Hello Alfred Bryant</h3>
            </div>
            <div className='mt-2'>
                <h3 className='text-sm'>adrain.nader@yahoo.com</h3>
            </div>
        </div>
        <div className='grid grid-cols-2 mt-10 text-center font-bold'>
            <div className='border p-3 rounded-tl-xl dashUser-effect'>
                <BiSolidDashboard className='mx-auto my-6 w-8 h-8'/>
                <h6>Dashboard</h6>
            </div>
            <div className='border p-3 rounded-tr-xl dashUser-effect'>
                <MdPlaylistAddCheck className='mx-auto my-6 w-8 h-8'/>
                <h6>Notes</h6>
            </div>
            <div className='border p-3 dashUser-effect'>
                <MdPlaylistAddCheck className='mx-auto my-6 w-8 h-8'/>
                <h6>Tasks</h6>
            </div>
            <div className='border p-3 dashUser-effect'>
                <BsFillCloudFill className='mx-auto my-6 w-8 h-8'/>
                <h6>Files</h6>
            </div>
            <div className='border p-3 dashUser-effect'>
                <MdEmail className='mx-auto my-6 w-8 h-8'/>
                <h6>Emails</h6>
            </div>
            <div className='border p-3 dashUser-effect'>
                <FaUserGroup className='mx-auto my-6 w-8 h-8'/>
                <h6>Clients</h6>
            </div>
            <div className='border p-3 rounded-bl-xl dashUser-effect'>
                <IoMdCalendar className='mx-auto my-6 w-8 h-8'/>
                <h6>Calendars</h6>
            </div>
            <div className='border p-3 rounded-br-xl dashUser-effect'>
                <TbTool className='mx-auto my-6 w-8 h-8'/>
                <h6>Settings</h6>
            </div>
        </div>
        <div className='mt-24 text-lg rounded-full border-2 flex py-4 px-6 justify-between'>
            <IoMdCall className='text-orange-600'/>
            <MdEmail className='text-green-400'/>
            <PiNotebookDuotone className='text-violet-600'/>
            <BiLogoTelegram className='text-blue-400'/>
            <BsWhatsapp className='text-green-700'/>
        </div>
    </div>
  )
}

export default User