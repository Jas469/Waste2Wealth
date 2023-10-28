// import Header from './Header';
import {MdDomainVerification , MdOutlineUploadFile, MdOutlineCreateNewFolder} from 'react-icons/md';
import {BsPersonCircle} from 'react-icons/bs';
import {RiLogoutCircleRLine} from 'react-icons/ri';
import Link  from "next/link";

// import { Link } from "react-router-dom";
// import NgoPage from "./NgoPage";


export default function SidebarNGO(props) {
    const showresult=(e)=>{
        e.preventDefault()
        // data.map((curr)=>{
       
            let temp=data1.filter((currelem)=>{
              return currelem.category==e.target.value;
            })
          
            setdata(temp)
          }
        
        
        
   return (<>
 {/* <option value="electronics">Electronics</option>
                                <option value="footwear">Footwears</option>
                                <option value="jewellery">Jewellery</option>
                                <option value="papers">Papers</option>
                                <option value="plastic">Plastic</option>
                                <option value="metallic">Metallic</option>
                                <option value="wood">Wood</option>
                                <option value="glass">Glass</option> */}
       
       <div className='h-[579px] w-[210px] flex-col space-y-3 border-2 bg-slate-800  border-solid border-white '>
                <div className="flex justify-center text-center  rounded-xl  mt-4 mb-3 text-white" >
                    
                        <button value="" onClick={showresult} className="h-10 text-white text-2xl w-full bg-fixed uppercase font-bold "><div className="flex "><div className='mt-1'><MdDomainVerification size={30} /></div><div className="  ml-4">Items</div></div>
                        </button>
                  
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    
                        <button value="" onClick={showresult} className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><button value="electronics" onClick={showresult} className=" hover:text-black ml-4">Electronics</button></div>
                        </button>
                  
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    
                        <button value="" onClick={showresult} className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><button value="clothes" onClick={showresult} className=" hover:text-black ml-4">Clothes</button></div>
                        </button>
                  
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    
                        <button value="" onClick={showresult} className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><button value="jewellery" onClick={showresult} className=" hover:text-black ml-4">Jewellery </button></div>
                        </button>
                  
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    
                        <button value="" onClick={showresult} className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><button value="footwears" onClick={showresult} className=" hover:text-black ml-4">Footwears</button></div>
                        </button>
                  
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    
                        <button value="" onClick={showresult} className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><button value="papers" onClick={showresult} className=" hover:text-black ml-4">Papers</button></div>
                        </button>
                  
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    
                        <button value="" onClick={showresult} className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><button value="plastic" onClick={showresult} className=" hover:text-black ml-4">Plastic</button></div>
                        </button>
                  
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    
                        <button value="wood" onClick={showresult} className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><button value="" onClick={showresult} className=" hover:text-black ml-4">Wood</button></div>
                        </button>
                  
                </div>
                <div className="flex text-left hover:bg-green-600 hover:text-black rounded-xl" >
                    
                        <button value="glass" onClick={showresult} className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><div className=" ml-4">Glass</div></div>
                        </button>
                  
                </div>
                
            </div>

   </>)
}