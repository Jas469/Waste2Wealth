import React, { useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cookie from 'js-cookie'
import Router from 'next/router'
const Sell = () => {
    const [image, setimage] = useState('')
    const [category, setcategory] = useState('fd')
    const [product, setproduct] = useState('fd')
    const [count, setcount] = useState('fd')
    const [phone, setphone] = useState('fd')
    const [weight, setweight] = useState('fd')
    const [location, setlocation] = useState('fd')
    const [price, setprice] = useState('fd')
    const [city, setcity] = useState('fd')
    const [state, setstate] = useState('fd')
    const imageupload=async (e)=>{
        const formdata=new FormData()
        formdata.append("file",e.target.files[0]);
        formdata.append("upload_preset","mystore")
      const res= await fetch("https://api.cloudinary.com/v1_1/desiynbby/image/upload",{
        method:"POST",
        body:formdata,
      })
      const res2=await res.json();
      console.log(res2.url)
      setimage(res2.url)
//    return res2.url;
   
    }
    const handlesubmit=async (e)=>{
        e.preventDefault();    

    const data={image,category,product,weight,location,count,phone,city,state}
        if(category==""||product==""||weight==""||location==""||count==""||phone==""||city==""||state==""){
            toast.warning('Fill every input field', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                
                });
        }
        else{
            const res=await fetch('http://localhost:3000/api/sell', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body:JSON.stringify(data),
              })
              let response=await res.json();
              if(response.error){
                toast.warn('Unable to add details', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    
                    });
              }
              else{
                toast.success('Added successfully', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    
                    });
                    cookie.set('token',response.token);
                    setTimeout(() => {
                     Router.push('/');
                    }, 3000);
              }
              
        }
        
        }
  return ( <>
  <div>  <ToastContainer
    position="top-right"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    </div>

    <div className="max-w-md xsm:mx-2 justify-around mx-auto my-10 bg-white p-8 rounded-xl  shadow shadow-slate-300">
    <h1 className="text-4xl font-medium text-center font-s">Sell Now</h1>
    <p className="text-slate-500  font-semibold text-center mt-2 animate-pulse">Welcome to Waste2Wealth</p>
    <form action="/" method='POST' onSubmit={handlesubmit} className="my-4">
        <div className="flex flex-col space-y-4">
            <div className='flex  space-x-4 '>

            <label htmlFor="category">
            <p className="font-medium text-slate-700 pb-2">Category</p>
            <select value={category} onChange={(e) => { setcategory(e.target.value); }}  className ="form-select appearance-none block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition   ease-in-out   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option defaultValue>Choose item category</option>
                                <option value="electronics">Electronics</option>
                                <option value="footwear">Footwears</option>
                                <option value="jewellery">Jewellery</option>
                                <option value="papers">Papers</option>
                                <option value="plastic">Plastic</option>
                                <option value="metallic">Metallic</option>
                                <option value="wood">Wood</option>
                                <option value="glass">Glass</option>
                            </select>
            </label>
            <label htmlFor="image">
                <p className="font-medium text-slate-700 pb-2">Image</p>
                <input type='file' required={true} onChange={(evnt)=>(imageupload(evnt))} id="category" name="image"  className="w-28 py-1 border border-slate-200 rounded-lg  focus:outline-none /focus:border-slate-500 hover:shadow" />
            </label>
            </div>
            <div className='flex space-x-2'>
           
            <label htmlFor="count">
                <p className="font-medium text-slate-700 pb-2">Product</p>
                <input required={true} value={product} onChange={(e) => { setproduct(e.target.value); }} id="count" name="count" type="text" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter product title"/>
            </label>
            <label htmlFor="phone">
                <p className="font-medium text-slate-700 pb-2">Count</p>
                <input required={true} value={count} onChange={(e) => { setcount(e.target.value); }} id="count" name="count" type="text" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter count"/>
            </label>
            </div>
      <div className='flex space-x-2'>

      <label htmlFor="product">
                <p className="font-medium text-slate-700 pb-2">Location</p>
                <input required={true} value={location} onChange={(e) => { setlocation(e.target.value); }} id="location" name="product" type="text" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter location"/>
            </label>
            <label htmlFor="city">
                <p className="font-medium text-slate-700 pb-2">City</p>
                <input required={true} value={city} minLength="3"  onChange={(e) => { setcity(e.target.value); }} id="weight" name="weight" type="text" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter city"/>
            </label>
      </div>
        <div className='flex space-x-2'>
        <label htmlFor="state">
                <p className="font-medium text-slate-700 pb-2">State</p>
                <input required={true} minLength="3"  value={state} onChange={(e) => { setstate(e.target.value); }} id="state" name="state" type="text" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter state"/>
            </label>
        <label htmlFor="phone">
                <p className="font-medium text-slate-700 pb-2">Phone</p>
                <input required={true} minLength="3"  value={phone} onChange={(e) => { setphone(e.target.value); }} id="phone" name="phone" type="text" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter phone"/>
            </label>
        </div>
        <label htmlFor="weight">
                <p className="font-medium text-slate-700 pb-2">Weight</p>
                <input required={true} minLength="3"  value={weight} onChange={(e) => { setweight(e.target.value); }} id="weight" name="weight" type="location" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter weight"/>
            </label>
            <button className="w-full py-2 font-medium text-white bg-green-600 hover:bg-green-500 rounded-lg border-green-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      <span>Sell Now</span>
                </button>            
                {/* <p className="text-center">Have an account? <Link href="/login"><a className="text-green-600 font-medium inline-flex space-x-1 items-center ml-2"><span>Login now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg></span></a></Link></p> */}
        </div>
    </form>
</div> 
</>
)
}

export default Sell