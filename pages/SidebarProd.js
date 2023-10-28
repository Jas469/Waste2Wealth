// import Header from './Header';
import {MdDomainVerification , MdOutlineUploadFile, MdOutlineCreateNewFolder} from 'react-icons/md';
import {BsPersonCircle} from 'react-icons/bs';
import {RiLogoutCircleRLine} from 'react-icons/ri';
import Link  from "next/link";

// import { Link } from "react-router-dom";
// import NgoPage from "./NgoPage";


export default function SidebarNGO() {
   return (<>
       {/* <Header/> */}
       <div className='h-[579px] w-[300px] flex-col space-y-3 border-2 bg-slate-800  border-solid border-white '>
                <div className="flex justify-center text-center  rounded-xl  mt-4 mb-3 text-white" >
                    <a><Link href='/'>
                        <button className="h-10 text-white text-2xl w-full bg-fixed uppercase font-bold "><div className="flex "><div className='mt-1'><MdDomainVerification size={30} /></div><div className="  ml-4">Categories</div></div>
                        </button>
                    </Link></a>
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    <a><Link href='/'>
                        <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><div className=" hover:text-black ml-4">Clothes</div></div>
                        </button>
                    </Link></a>
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    <a><Link href='/'>
                        <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><div className=" hover:text-black ml-4">Jewelery </div></div>
                        </button>
                    </Link></a>
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    <a><Link href='/'>
                        <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><div className=" hover:text-black ml-4">Sneakers</div></div>
                        </button>
                    </Link></a>
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    <a><Link href='/'>
                        <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><div className=" hover:text-black ml-4">Utencils</div></div>
                        </button>
                    </Link></a>
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    <a><Link href='/'>
                        <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><div className=" hover:text-black ml-4">Home Decor</div></div>
                        </button>
                    </Link></a>
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    <a><Link href='/'>
                        <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><div className=" hover:text-black ml-4">Stationary</div></div>
                        </button>
                    </Link></a>
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    <a><Link href='/'>
                        <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><div className=" ml-4">Grocery</div></div>
                        </button>
                    </Link></a>
                </div>
                
            </div>

   </>)
}