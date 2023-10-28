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
        <div className='h-[579px] w-[240px] flex-col space-y-3 border-2 bg-slate-800  border-solid border-white '>
            {/* <div className="flex text-left hover:bg-cyan-100 hover:text-black rounded-xl  mt-4 text-white" >
                <a><Link href='/'>
                    <button className="h-10 text-white text-left w-full bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdDomainVerification size={25}/></div><div className=" hover:text-black ml-4">Dashboard</div></div>
                    </button>
                </Link></a>
            </div> */}
            <div className="flex text-left hover:bg-cyan-100 hover:text-black rounded-xl" >
                <a><Link href='/Merchant'>
                    <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><BsPersonCircle size={23}/></div><div className=" hover:text-black ml-4">Profile</div></div>
                    </button>
                </Link></a>
            </div>
            <div className="flex text-left hover:bg-cyan-100 hover:text-black rounded-xl" >
                <a><Link href='/sell'className="text-white hover:text-black">
                    <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineUploadFile size={25}/></div><div className=" hover:text-black ml-4">Sell</div></div>
                    </button>
                </Link></a> 
            </div>
            <div className="flex text-left hover:bg-cyan-100 hover:text-black rounded-xl" >
                <a><Link href='./Product'>
                    <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><div className=" hover:text-black ml-4">Buy</div></div>
                    </button>
                </Link></a>
            </div>
            <div className="flex text-left hover:bg-cyan-100 hover:text-black rounded-xl" >
                <a><Link href='/'>
                    <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><RiLogoutCircleRLine size={25}></RiLogoutCircleRLine></div><div className=" hover:text-black ml-4">Logout</div></div>
                    </button>
                </Link></a>
            </div>
        </div>

    </>)
}