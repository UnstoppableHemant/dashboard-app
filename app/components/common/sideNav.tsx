import { AiOutlineRise } from '../../../node_modules/react-icons/ai'
import { BiSolidCompass, BiLogoMessenger, BiSolidStar, BiWorld, BiSolidPlusCircle } from '../../../node_modules/react-icons/bi'
import { MdLocationCity } from '../../../node_modules/react-icons/md'
import {BsFillCircleFill} from '../../../node_modules/react-icons/bs'
import Image from 'next/image'
import user1 from '../../assets/img/user-1.png';
import user2 from '../../assets/img/user-2.png';
import user4 from '../../assets/img/user-4.jpg';

const SideNav = () => {
    return (
        <div className='border-x-2 h-full p-5 pt-10 lg:block hidden'>
            <div>
                <div>
                    <BiSolidCompass className='w-10 h-10 p-2 rounded-full shadow-md' />
                </div>
                <div className='mt-3'>
                    <BiSolidStar className='w-10 h-10 p-2 rounded-full shadow-md' />
                </div>
                <div className='mt-3'>
                    <div className='relative'>
                        <BsFillCircleFill className='absolute right-1 text-blue-600 w-2 h-2'/>
                        <BiLogoMessenger className='w-10 h-10 p-2 rounded-full shadow-md' />
                    </div>
                </div>
                <div className='mt-3'>
                    <AiOutlineRise className='w-10 h-10 p-2 rounded-full shadow-md' />
                </div>
                <div className='mt-3'>
                    <BiWorld className='w-10 h-10 p-2 rounded-full shadow-md' />
                </div>
                <div className='mt-3'>
                    <MdLocationCity className='w-10 h-10 p-2 rounded-full shadow-md' />
                </div>
            </div>
            <div className='mt-24'> 
                <div className='mt-3'>
                    <div className='relative'>
                        <BsFillCircleFill className='absolute top-1 right-0 text-blue-600 w-2 h-2'/>
                        <Image src={user4} alt='User' className='w-10 h-10 rounded-full shadow-md' />
                    </div>
                </div>
                <div className='mt-3'>
                    <Image src={user2} alt='User' className='w-10 h-10 rounded-full shadow-md bg-purple-300' />
                </div>
                <div className='mt-3'>
                    <Image src={user1} alt='User' className='w-10 h-10 rounded-full shadow-md bg-yellow-400' />
                </div>
                <div className='mt-3'>
                    <BiSolidPlusCircle className='w-10 h-10 p-2 rounded-full shadow-md' />
                </div>
            </div>
        </div>
    )
}

export default SideNav