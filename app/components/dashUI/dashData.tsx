import { AiFillFlag } from '../../../node_modules/react-icons/ai'
import { BiSolidUser } from '../../../node_modules/react-icons/bi'
import { BsThreeDots, BsPlusLg } from '../../../node_modules/react-icons/bs'
import { TfiMenuAlt, TfiAlarmClock } from '../../../node_modules/react-icons/tfi'
import { MdOutlineAttachment,MdClose } from '../../../node_modules/react-icons/md'
import taskImage1 from '../../assets/img/task-image-1.jpeg'
import Image from "next/image"

const DashData = () => {
  return (
    
    <div className="flex py-8 px-4 border-2 rounded-b-lg gap-4 overflow-x-auto">
    <div>
      <div className="flex items-center gap-4 text-xs font-bold border-2 border-s-violet-900 p-3 shadow-md rounded-md">
        <h3>TO DO</h3>
        <h3 className="px-2 py-1 shadow-md border rounded-full">3</h3>
        <BsThreeDots className="ml-5" />
        <BsPlusLg />
      </div>
      <div className="mt-6 border-2 rounded-md">
        <Image src={taskImage1} alt="Task Image" className="h-36 w-48 rounded-t-md" />
        <div className="flex justify-between text-xs items-center px-2">
          <h6>Space Tasks 2</h6>
          <BiSolidUser className="rounded-full border w-7 h-7 p-1" />
        </div>
        <div className="text-xs p-2">
          <h4>Make Money Online Through</h4>
        </div>
        <div className="p-2 flex gap-2 text-xs items-center justify-between">
          <TfiMenuAlt />
          <h6>4</h6>
          <MdOutlineAttachment />
          <h6>2</h6>
          <TfiAlarmClock />
          <h6>6 Days Left</h6>
        </div>
      </div>
      <div className="mt-6 border-2 rounded-md">
        <div className="flex justify-between text-xs items-center p-2">
          <h6>Space Tasks 2</h6>
          <div className="flex ">
            <BiSolidUser className="rounded-full border w-7 h-7 p-1" />
            <BiSolidUser className="rounded-full border w-7 h-7 p-1 relative right-2" />
          </div>
        </div>
        <div className="text-xs p-2">
          <h4>Make Money Online Through</h4>
        </div>
      </div>
      <div className="mt-6 border-2 rounded-md">
        <div className="flex justify-between text-xs items-center p-2">
          <h6>Space Tasks 2</h6>
          <div className="flex ">
            <BiSolidUser className="rounded-full border w-7 h-7 p-1" />
            <BiSolidUser className="rounded-full border w-7 h-7 p-1 relative right-1" />
            <BiSolidUser className="rounded-full border w-7 h-7 p-1 relative right-2" />
          </div>
        </div>
        <div className="text-xs p-2">
          <h4>Search Engine Optimization...</h4>
        </div>
      </div>
      <div className="mt-6 border-2 rounded-md">
        <div className="flex justify-between text-xs items-center p-2">
          <h6>Space Tasks 2</h6>
          <div className="flex ">
            <BiSolidUser className="rounded-full border w-7 h-7 p-1" />
          </div>
        </div>
        <div className="text-xs p-2">
          <h4>Characteristics Of A Successfull</h4>
        </div>
      </div>
      <div className="mt-6 border-2 rounded-md">
        <div className="flex justify-between text-xs items-center p-2">
          <h6>Space Tasks 2</h6>
          <div className="flex ">
            <BiSolidUser className="rounded-full border w-7 h-7 p-1" />
          </div>
        </div>
        <div className="text-xs p-2">
          <h4>Greeting Free Publicity</h4>
        </div>
      </div>
      <div className="mt-6 border-2 rounded-md">
        <div className="flex justify-between text-xs items-center p-2">
          <h6>Space Tasks 2</h6>
          <div className="flex ">
            <BiSolidUser className="rounded-full border w-7 h-7 p-1" />
          </div>
        </div>
        <div className="text-xs p-2">
          <h4>Importance Of The Custom...</h4>
        </div>
      </div>
      <div className="mt-3">
        <div className="p-2"> + New Task</div>
      </div>
    </div><div>
      <div className="flex items-center gap-4 text-xs font-bold border-2 border-s-blue-600 p-3 shadow-md rounded-md">
        <h3>IN WORK</h3>
        <h3 className="px-2 py-1 shadow-md border rounded-full">5</h3>
        <BsThreeDots className="ml-5" />
        <BsPlusLg />
      </div>
      <div className="mt-6 border-2 rounded-md">
        <div className="flex justify-between text-xs items-center p-2">
          <h6>Space Tasks 3</h6>
          <div className="flex ">
            <BiSolidUser className="rounded-full border w-7 h-7 p-1" />
          </div>
        </div>
        <div className="text-xs p-2">
          <h4>Types Of Paper In Catalog</h4>
        </div>
      </div>
      <div className="mt-6 border-2 rounded-b-md">
        <Image src={taskImage1} alt="Task Image" className="h-36 w-48 rounded-t-md" />
        <div className="flex justify-between text-xs items-center px-2">
          <h6>Space Tasks 2</h6>
          <BiSolidUser className="rounded-full border w-7 h-7 p-1" />
        </div>
        <div className="text-xs p-2">
          <h4>Global Resorts Network</h4>
        </div>
        <div className="p-2 flex gap-2 text-xs items-center justify-between">
          <TfiMenuAlt />
          <h6>4</h6>
          <MdOutlineAttachment />
          <h6>2</h6>
          <TfiAlarmClock />
          <h6>6 Days Left</h6>
        </div>
      </div>
      <div className="mt-6 border-2 border-orange-500 rounded-md">
        <div className="flex justify-between text-xs items-center p-2">
          <h6>Space Tasks 2</h6>
          <div className="flex ">
            <BiSolidUser className="rounded-full border w-7 h-7 p-1" />
          </div>
        </div>
        <div className="text-xs p-2">
          <h4>Development Apps</h4>
        </div>
      </div>
      <div className="mt-6 border-2 rounded-md">
        <div className="flex justify-between text-xs items-center p-2">
          <h6>Space Tasks 2</h6>
          <div className="flex ">
            <BiSolidUser className="rounded-full border w-7 h-7 p-1" />
          </div>
        </div>
        <div className="text-xs p-2">
          <h4>Copper Canyon</h4>
        </div>
        <div className="p-2 flex gap-2 text-xs items-center justify-between">
          <TfiMenuAlt />
          <h6>4</h6>
          <MdOutlineAttachment />
          <h6>2</h6>
          <TfiAlarmClock className="text-red-600 font-bold"/>
          <h6 className="text-red-600 font-bold">1 Days Left</h6>
        </div>
      </div>
      <div className="mt-3">
        <div className="p-2"> + New Task</div>
      </div>
    </div><div>
      <div className="flex items-center gap-4 text-xs font-bold border-2 border-s-yellow-600 p-3 shadow-md rounded-md">
        <h3>REVIEW</h3>
        <h3 className="px-2 py-1 shadow-md border rounded-full">5</h3>
        <BsThreeDots className="ml-5" />
        <BsPlusLg />
      </div>
      <div className="mt-6 border-2 rounded-md">
        <div className="flex justify-between text-xs items-center p-2">
          <h6>Space Tasks 3</h6>
          <div className="flex ">
            <BiSolidUser className="rounded-full border w-7 h-7 p-1" />
            <BiSolidUser className="rounded-full border w-7 h-7 p-1 relative right-2" />
          </div>
        </div>
        <div className="text-xs p-2">
          <h4>Astronomy Or Astrology</h4>
        </div>
      </div>
      <div className="mt-6 border-2 rounded-md">
        <div className="flex justify-between text-xs items-center p-2">
          <h6>Space Tasks 1</h6>
          <div className="flex ">
            <BiSolidUser className="rounded-full border w-7 h-7 p-1" />
            <BiSolidUser className="rounded-full border w-7 h-7 p-1 relative right-1" />
            <BiSolidUser className="rounded-full border w-7 h-7 p-1 relative right-2" />
          </div>
        </div>
        <div className="text-xs p-2">
          <h4>Astronomy Binoculars A Great</h4>
        </div>
      </div>
      <div className="mt-6 border-2 rounded-md">
        <div className="flex justify-between text-xs items-center p-2">
          <div className="flex items-center gap-2">
            <MdClose className="rounded-full border w-7 h-7 p-1" />
            <h6>Task name or type</h6>
          </div>
          <div className="flex ">
            <BiSolidUser className="rounded-full border w-7 h-7 p-1" />
          </div>
        </div>
        <div className="p-3 flex text-xs items-center justify-between">
          <div className="flex gap-4">
            <AiFillFlag />
            <MdOutlineAttachment />
            <TfiAlarmClock />
          </div>
          <button className="p-2 bg-blue-700 text-white rounded-md">Save</button>
        </div>
      </div>
    </div><div>
      <div className="flex items-center gap-4 text-xs font-bold border-2 border-s-green-700 p-3 shadow-md rounded-md">
        <h3>DONE</h3>
        <h3 className="px-2 py-1 shadow-md border rounded-full">5</h3>
        <BsThreeDots className="ml-5" />
        <BsPlusLg />
      </div>
      <div className="mt-6 border-2 rounded-md">
        <div className="flex justify-between text-xs items-center p-2">
          <h6>Space Tasks 2</h6>
          <div className="flex ">
            <BiSolidUser className="rounded-full border w-7 h-7 p-1" />
          </div>
        </div>
        <div className="text-xs p-2">
          <h4>Copper Canyon</h4>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DashData