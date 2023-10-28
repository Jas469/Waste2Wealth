{/* import Header from './Header';
 import {GoOrganization} from 'react-icons/go'; */}
import { MdDomainVerification, MdOutlineUploadFile, MdOutlineCreateNewFolder } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { TiLocation } from 'react-icons/ti';
import { SiCountingworkspro } from 'react-icons/si';
import {GiWeight} from 'react-icons/gi';

import { RiContactsBook2Fill } from 'react-icons/ri'
import Link from "next/link";

export default function VendorBuy() {
    return (<>


        {/* <Header/> */}
        <div className=" mt-2 p-2 flex flex-row w-full h-auto overflow-y-hidden ">
            <div className='h-[579px] w-[300px] flex-col space-y-3 border-2 bg-slate-800  border-solid border-white '>
                <div className="flex justify-center text-center  rounded-xl  mt-4 text-white" >
                    <a><Link href='/'>
                        <button className="h-10 text-white text-3xl w-full bg-fixed uppercase "><div className="flex "><div className='mt-1'><MdDomainVerification size={30} /></div><div className="  ml-4">Items</div></div>
                        </button>
                    </Link></a>
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    <a><Link href='/'>
                        <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><div className=" hover:text-black ml-4">Wood</div></div>
                        </button>
                    </Link></a>
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    <a><Link href='/'>
                        <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><div className=" hover:text-black ml-4">Toothbrushes </div></div>
                        </button>
                    </Link></a>
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    <a><Link href='/'>
                        <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><div className=" hover:text-black ml-4">Polythene</div></div>
                        </button>
                    </Link></a>
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    <a><Link href='/'>
                        <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><div className=" hover:text-black ml-4">Used Boxes</div></div>
                        </button>
                    </Link></a>
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    <a><Link href='/'>
                        <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><div className=" hover:text-black ml-4">Steel</div></div>
                        </button>
                    </Link></a>
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    <a><Link href='/'>
                        <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><div className=" hover:text-black ml-4">Paper</div></div>
                        </button>
                    </Link></a>
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    <a><Link href='/'>
                        <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><div className=" ml-4">Tin Cans</div></div>
                        </button>
                    </Link></a>
                </div>
                
            </div>

            {/* <div className=" py-3 px-3 flex-col h-[100vh] w-full border-l-2 border-black scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-slate-400 bg-slate-800 text-black  overflow-y-scroll overflow-x-auto xsm:hidden"> */}

            {/* <div className=" w-full mt-2  h-8 items-center">
    <div className=" text-3xl text-center font-bold text-white">Select Organisation</div>
</div> */}



            {/* <div className=" w-full mt-8 h-8 items-center">
    <div className=" text-3xl text-center font-bold text-white">Filter Locations</div>
</div>

<div className=' mt-8 '>
<div className='flex-col space-y-2'>

 <div className=' text-white flex-col w-full space-y-3'> 
  <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 hover:bg-violet-200 hover:text-black bg-fixed text-xl font-medium ">Mohali</button> </div></div>
  <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 hover:bg-violet-200 hover:text-black text-xl font-medium ">Kharar</button> </div></div>
  <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 hover:bg-violet-200 hover:text-black text-xl font-medium ">Chandigarh</button> </div></div>
  <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 hover:bg-violet-200 hover:text-black text-xl font-medium ">Panchkula</button> </div></div>
  <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 hover:bg-violet-200 hover:text-black text-xl font-medium ">Zirakpur</button> </div></div>
  <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 hover:bg-violet-200 hover:text-black text-xl font-medium ">Kurali</button> </div></div>
  <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 hover:bg-violet-200 hover:text-black text-xl font-medium ">Ropar</button> </div></div> 
  <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 hover:bg-violet-200 hover:text-black text-xl font-medium ">Dera Bassi</button> </div></div> 


    </div>
    </div>

   </div>

</div> */}

            <div className="  w-[90%]  bg-zinc-100 border-b-4 ">
                <div className=" pt-12 text-center text-4xl font-serif font-semibold mb-3">Buy Now </div>

                {/* <div className=" mt-10 px-4 flex flex-row justify-center space-x-10"> */}
                {/* <div className="flex-col h-[340px] w-[300px] rounded-lg mb-5 shadow-2xl hover:scale-95 transition duration-300 ease-in ">

    <div className=" flex justify-center"><img className=" w-55 h-60 mt-2" src="work.png" alt="" /></div>
    <div className="px-1 mt-1 text-xs text-left font-bold">Category </div>

                    <div className="px-1 text-sm">We are an organisation which is working for the well-being of the society and its people.</div>
                    <button className='bg-green-600 w-[90%] mt-4 rounded-md p-1 flex justify-center ml-2 text-white'>
                        View 
                    </button>
    </div> */}
                {/* <div className="flex-col h-[400px] w-[350px] rounded-lg mb-5 shadow-2xl hover:scale-95 transition duration-300 ease-in bg-slate-400 ">
                    <div className=" flex justify-center"><img className=" w-52 h-48 mt-2" src="work1.jpg" alt="" /></div>
                    <div className="px-1 mt-4 text-lg font-bold">NGO NAME</div>
                    <div className="px-1 text-sm">We are an organisation which is working for the well-being of the society and its people.</div>
                    <button className='bg-green-600 w-[90%] mt-5 rounded-md p-1'>
                        View 
                    </button>
    </div> */}





                <div className='w-[100%] '>
                    <div className='flex justify-evenly'>
                        <div className="flex-col h-[390px] border-2 w-[300px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                            <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="work.png" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-green-600 text-black px-1 mt-1 text-sm py-1 rounded-tr rounded-br">Category</div>
                                <div className=" flex bg-green-600  mt-1 text-sm px-1 rounded-tl rounded-bl">
                                    <div className='p-1'><TiLocation /></div>

                                    <div>Rupnagar, Punjab</div>
                                </div>
                            </div>
                        
                                <div className=" mt-3 text-base px-1 rounded-tl rounded-bl flex justify-between">
                                    <div className='flex'>
                                        <div className='p-1'>
                                            <RiContactsBook2Fill/>
                                        </div>
                                        <div>
                                            Contact
                                        </div>
                                    </div>

                                    <div className='pr-16'>465868898 </div>
                                </div>

                                <div className=" mt-0 text-base px-1 rounded-tl rounded-bl flex justify-between">
                                    <div className='flex'>
                                        <div className='p-1'>
                                            <SiCountingworkspro/>
                                        </div>
                                        <div>
                                            Count
                                        </div>
                                    </div>

                                    <div className='pr-24'>4658 </div>
                                </div>
                                <div className=" mt-0 text-base px-1 rounded-tl rounded-bl flex justify-between">
                                    <div className='flex'>
                                        <div className='p-1'>
                                            <GiWeight/>
                                        </div>
                                        <div>
                                           Weight
                                        </div>
                                    </div>

                                    <div className='pr-24'>4658 </div>
                                </div>

                                
                            <div><button className='flex justify-center ml-3 mt-3 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md bg-green-600 hover:text-white'>Pay now</button></div>
                        </div>

                        <div className="flex-col h-[390px] border-2 w-[300px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                            <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="work.png" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-green-600 text-black px-1 mt-1 text-sm py-1 rounded-tr rounded-br">Category</div>
                                <div className=" flex bg-green-600  mt-1 text-sm px-1 rounded-tl rounded-bl">
                                    <div className='p-1'><TiLocation /></div>

                                    <div>Rupnagar, Punjab</div>
                                </div>
                            </div>
                        
                                <div className=" mt-3 text-base px-1 rounded-tl rounded-bl flex justify-between">
                                    <div className='flex'>
                                        <div className='p-1'>
                                            <RiContactsBook2Fill/>
                                        </div>
                                        <div>
                                            Contact
                                        </div>
                                    </div>

                                    <div className='pr-16'>465868898 </div>
                                </div>

                                <div className=" mt-0 text-base px-1 rounded-tl rounded-bl flex justify-between">
                                    <div className='flex'>
                                        <div className='p-1'>
                                            <SiCountingworkspro/>
                                        </div>
                                        <div>
                                            Count
                                        </div>
                                    </div>

                                    <div className='pr-24'>4658 </div>
                                </div>
                                <div className=" mt-0 text-base px-1 rounded-tl rounded-bl flex justify-between">
                                    <div className='flex'>
                                        <div className='p-1'>
                                            <GiWeight/>
                                        </div>
                                        <div>
                                           Weight
                                        </div>
                                    </div>

                                    <div className='pr-24'>4658 </div>
                                </div>

                                
                            <div><button className='flex justify-center ml-3 mt-3 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md bg-green-600 hover:text-white'>Pay now</button></div>
                        </div>

                        <div className="flex-col h-[390px] border-2 w-[300px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                            <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="work.png" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-green-600 text-black px-1 mt-1 text-sm py-1 rounded-tr rounded-br">Category</div>
                                <div className=" flex bg-green-600  mt-1 text-sm px-1 rounded-tl rounded-bl">
                                    <div className='p-1'><TiLocation /></div>

                                    <div>Rupnagar, Punjab</div>
                                </div>
                            </div>
                        
                                <div className=" mt-3 text-base px-1 rounded-tl rounded-bl flex justify-between">
                                    <div className='flex'>
                                        <div className='p-1'>
                                            <RiContactsBook2Fill/>
                                        </div>
                                        <div>
                                            Contact
                                        </div>
                                    </div>

                                    <div className='pr-16'>465868898 </div>
                                </div>

                                <div className=" mt-0 text-base px-1 rounded-tl rounded-bl flex justify-between">
                                    <div className='flex'>
                                        <div className='p-1'>
                                            <SiCountingworkspro/>
                                        </div>
                                        <div>
                                            Count
                                        </div>
                                    </div>

                                    <div className='pr-24'>4658 </div>
                                </div>
                                <div className=" mt-0 text-base px-1 rounded-tl rounded-bl flex justify-between">
                                    <div className='flex'>
                                        <div className='p-1'>
                                            <GiWeight/>
                                        </div>
                                        <div>
                                           Weight
                                        </div>
                                    </div>

                                    <div className='pr-24'>4658 </div>
                                </div>

                                
                            <div><button className='flex justify-center ml-3 mt-3 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md bg-green-600 hover:text-white'>Pay now</button></div>
                        </div>
                    </div>
                    {/* <div className='flex justify-evenly'>
                        <div className="flex-col h-[400px] border-2 w-[390px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                            <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="img1.png" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bgimg bg-no-repeat text-black px-1 mt-1 text-xs py-1 rounded-tr rounded-br">Event Name</div>
                                <div className="bgimg  mt-1 text-xs px-1 py-1 rounded-tl rounded-bl">Date</div>
                            </div>
                            <div className="px-1 mt-1 font-bold text-center xsm:text-sm">Title</div>
                            <div className="px-2 xsm:text-xs mt-1 text-justify text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio sit cum fuga consequuntur ex fugit hic, consequatur ut, labore beatae. Officiis magni, corrupti autmpora distinctio sit cum fuga consequuntur ex mpora distinctio sit </div>
                            <div><button className='mt-1 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md hover:bg-red-600 hover:text-white'>Donate Now</button></div>
                        </div>

                    </div> */}

                </div>


            </div>
        </div>
        {/* </div> */}


    </>)
}