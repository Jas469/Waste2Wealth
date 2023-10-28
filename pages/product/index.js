import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { TbCurrencyRupee} from 'react-icons/tb'
import {MdDomainVerification , MdOutlineUploadFile, MdOutlineCreateNewFolder} from 'react-icons/md';
import {BsPersonCircle} from 'react-icons/bs';
import {RiLogoutCircleRLine} from 'react-icons/ri';
// import Link  from "next/link";
import SidebarProd from "../SidebarProd";
const Product = () => {
  const [alldata, setalldata] = useState([])

  const showresult=(e)=>{
    e.preventDefault()
    // data.map((curr)=>{
   
        let temp=data.filter((currelem)=>{
          return currelem.category==e.target.value;
        })
      
        setdata(temp)
      }
      useEffect(() => {
        const url = "http://localhost:3000/api/allproducts";
        const fetchData = async () => {
          try {
            // setspin('')
            // setopac('opacity-50')
            let response = await fetch(url);
            let json = await response.json();
            setdata(json)
          } catch (error) {
           
            console.log("error", error);
          }
        };
      
        fetchData();
      }, []);
  return (
<div className='flex'>
  {/* <SidebarProd/> */}
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

<section className=" h-[90vh]  overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-400 mt-3 flex justify-center ">
<div className='flex max-w-[1410px]  flex-wrap justify-evenly w-[95%] bg-slate-50 rounded-xl'>

{alldata.map((element)=>{
 return ( 
  <Link passHref={true} key={element._id} href={`product/${element._id}`}><div className=' w-[55vh] h-[100vh] bg-white flex-col hover:scale-95 transition duration-150 ease-in-out max-h-screen mt-3 shadow-2xl rounded-xl cursor-pointer' key={element._id}>
<div className='h-1/2 w-full justify-center flex rounded-lg'><img className='w-fit h-full' src={element.image} alt="" /></div>
<div className='mt-2 font-bold text-lg p-2 h-auto'>{element.title}</div>
<div className="flex p-2 ">
      <span className="flex items-center ">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
          <path className='text-orange-500' d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
          <path className='text-orange-500' d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
          <path className='text-orange-500' d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
          <path className='text-orange-500' d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
          <path className='text-orange-500' d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
        <span className="text-gray-600 ml-3 ">33 Reviews</span>
      </span>
      </div>
      <div className='flex text-2xl text-orange-900'><TbCurrencyRupee /><span className='text-xl inline-flex font-semibold'>{element.price}</span> <span className='flex mt-2'><TbCurrencyRupee className='text-sm mt-2'/> <s className='text-sm font-semibold pt-1'>{element.oldprice}</s> </span>
      </div>
      </div>
      
      </Link>
      )
  })}
</div>
</section>
</div>
    )
}

export default Product
// export async function getServerSideProps(context) {
//   const type=context.query.type;
//   const category=context.query.category;
//   const q=context.query.q;
// let res='';
//   if(category && !type){
//     const data=await fetch(`http://localhost:3000/api/allproducts?category=${category}`);
//      res=await data.json();
//   }
//  else if(!category && type){
//   const data=await fetch(`http://localhost:3000/api/allproducts?type=${type}`);
//    res=await data.json();
//   }
//  else if(category && type){
//   const data=await fetch(`http://localhost:3000/api/allproducts?category=${category}&type=${type}`);
//    res=await data.json();
//   }
//  else if(q){
//   const data=await fetch(`http://localhost:3000/api/search?q=${q}`);
//    res=await data.json();
//   }
// else{
//   const data=await fetch(`http://localhost:3000/api/allproducts`);
//    res=await data.json();
//   }
 
//   return {
//     props: {res}, // will be passed to the page component as props
//   }
// }