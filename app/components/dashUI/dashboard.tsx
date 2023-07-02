import DashHeader from "./dashHeader"
import DashData from "./dashData"
import { AiFillFlag } from '../../../node_modules/react-icons/ai'
import {FiLink2} from "../../../node_modules/react-icons/fi"
import {BiMenu,BiSolidUser} from '../../../node_modules/react-icons/bi'
import {BsFillCircleFill,BsFillCloudFill} from '../../../node_modules/react-icons/bs'
import {IoMdArrowDroprightCircle} from '../../../node_modules/react-icons/io'
import { MdComment,MdClose,MdArrowForwardIos } from '../../../node_modules/react-icons/md'
import {PiArrowElbowDownRightDuotone} from '../../../node_modules/react-icons/pi'

const Dashboard = () => {
  return (
    <div className="py-6 px-4 w-full">
      <DashHeader />
      <DashData/>
      <div className="w-[400px] p-5 shadow-md border-2 rounded-lg relative bottom-[330px] right-[10px] ml-auto lg:block hidden">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center"><BsFillCircleFill/>
          <h3>Development Apps</h3>
          <FiLink2/>
          </div>
          <MdClose/>
        </div>
      <div className="grid grid-cols-2 p-8 text-sm gap-4">
        <div className="flex gap-4">
          <PiArrowElbowDownRightDuotone/>
          <h6>4 Subtasks</h6>
        </div>
        <div className="flex gap-4">
          <AiFillFlag/>
          <h6>Priority Enabled</h6>
        </div>
        <div className="flex gap-4">
          <BsFillCloudFill/>
          <h6>3 Files</h6>
        </div>
        <div className="flex gap-4">
          <MdComment/>
          <h6>7 Comments</h6>
        </div>
        <div className="flex gap-4">
          <BiSolidUser/>
          <h6>Tyler Norman</h6>
        </div>
      </div>
        <hr className="border-6 p-0"/>
        <div className="flex text-xs p-8 justify-between">
          <div className="flex items-center gap-2">
            <div><h3>Start Date</h3><p>Sep 3, 9:00 pm</p></div>
            <div><MdArrowForwardIos/></div>
            <div><h3>Due Date</h3><p>Sep 4, 9:00 pm</p></div>
          </div>
          <div className="flex gap-2 items-center">
            <IoMdArrowDroprightCircle className="w-7 h-7 text-green-500"/>
            <h3>0:00</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard