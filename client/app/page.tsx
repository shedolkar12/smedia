import React from "react"
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import {Inter} from "next/font/google"
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { CgCommunity } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";

const inter = Inter({ subsets: ['latin']})

interface TwitterSideBarButton {
  title: String,
  icon: React.ReactNode
}

const sideBarMenuItems: TwitterSideBarButton[] = [
  { 
    'title': 'Home',
    'icon': <MdHomeFilled/>
  },
  { 
    'title': 'Explore',
    'icon': <IoSearch />
  },
  { 
    'title': 'Notifications',
    'icon': <IoMdNotificationsOutline />
  },
  { 
    'title': 'Messages',
    'icon': <IoMailOutline />
  },
  { 
    'title': 'Bookmark',
    'icon': <IoBookmarkOutline />
  },
  { 
    'title': 'Profile',
    'icon': <CgProfile />
  },
  { 
    'title': 'Communities',
    'icon': <CgCommunity />
  },



];




export default function Home() {
  return (
    <div className={inter.className}>
    <div className="grid grid-cols-12 h-screen w-screen x-screen px-56 bg-black" >  
      <div className="col-span-3 pl-50 pt-8 px-4">
          <div className="h-fit fill-white text-4xl hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all ">
                  <BsTwitter className="fill-white" /> 
          </div>
          <div className="mt-2  text-2xl ">
          <ul>
            {sideBarMenuItems.map(
              (item) => (<li className="flex justify-start items-center gap-2 text-white hover:bg-gray-800 cursor-pointer transition-all rounded-full px-5  py-2 w-fit" key="{item.title}">
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                    </li>)
              )}
              </ul>
            
          </div>
          <button className="bg-sky-500 p-4 text-2xl rounded-full w-full mt-4">Tweet</button>
      </div>
      <div className="col-span-6 boredr border-l-[0.5px] border-r-[0.5px] border-r-slate-500 border-l-slate-500">
      
      </div>
      <div className="col-span-3"></div>
    </div>
  </div>
  );
} 
