import React from 'react';
// import './inde';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
import Link  from "next/link";
import { useEffect } from "react"
import { FaEdit } from 'react-icons/fa'
import { FiSave } from 'react-icons/fi'

import SidebarNGO from './SidebarNGO';
import { useState } from 'react';
// import { button } from 'react-bootstrap';

export default function Merchant() {
    
  const [disable, setdisable] = useState(true);
  
  const [point, setpoint] = useState('opacity-40 cursor-not-allowed');
    const [statee, setStatee] = useState('Select State');
    const handleeve = (e) => {
        setStatee(e.target.value);
        console.log(e.target.value);
    }

    const edit = (e) => {
        e.preventDefault()
        setread(false)
        setdisable(false)
        setpoint('cursor-pointer')
      }
      const save = async (e) => {
        // console.log(personaldata);
        e.preventDefault()
        setread(true)
        setdisable(true)
        setpoint('opacity-40 cursor-not-allowed')
        // let {}
        let phone = personaldata.phone;
        let email = personaldata.email;
        let linkedin = personaldata.linkedin;
        // {phone,}
        let data = { phone, email, linkedin }
        // const res = await fetch('http://localhost:3000/api/facultypersonaldata', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(data),
        // })
        // let response = await res.json();
    
      }

    return (
        <div className='flex'>
            <div className='w-[20%]'><SidebarNGO /></div>

            {/* <div className='w-full'> */}
            <div to="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            {/* 
                <div className="container">
                    <div className="view-account">
                            <div className="module-inner">
                                <div className="side-bar  border-red-900 border-solid border-2 w-[30%]">
                                    <div className="user-info">
                                        <img className="img-profile img-circle img-responsive center-block" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                        <ul className="meta list list-unstyled">
                                            <li className="name">Rebecca Sanders
                                                <label className="label label-info">UX Designer</label>
                                            </li>
                                            <li className="email">div href="#/">Rebecca.S@website.com</a></li>
                                            <li className="activity">Last logged in: Today at 2:18pm</li>
                                        </ul>
                                    </div>
                                    <nav className="side-menu">
                                        <ul className="nav">
                                            <li className="active">div href="#/"><span className="fa fa-user"></span> Profile</a></li>
                                            <li>div href="#/"><span className="fa fa-cog"></span> Settings</a></li>
                                            <li>div href="#/"><span className="fa fa-credit-card"></span> Billing</a></li>
                                            <li>div href="#/"><span className="fa fa-envelope"></span> Messages</a></li>

                                            <li>div href="user-drive.html"><span className="fa fa-th"></span> Drive</a></li>
                                            <li>div href="#/"><span className="fa fa-clock-o"></span> Reminders</a></li>
                                        </ul>
                                    </nav>
                                </div>


                                <div className="content-panel">
                                    <h2 className="title">Profile<span className="pro-label label label-warning">PRO</span></h2>
                                    <form className="form-horizontal">
                                        <fieldset className="fieldset">
                                            <h3 className="fieldset-title">Personal Info</h3>
                                            <div className="form-group avatar">
                                                <figure className="figure col-md-2 col-sm-3 col-xs-12">
                                                    <img className="img-rounded img-responsive" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                                </figure>
                                                <div className="form-inline col-md-10 col-sm-9 col-xs-12">
                                                    <input type="file" className="file-uploader pull-left" />
                                                    <button type="submit" className="btn btn-sm btn-default-alt pull-left">Update Image</button>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-2 col-sm-3 col-xs-12 control-label">User Name</label>
                                                <div className="col-md-10 col-sm-9 col-xs-12">
                                                    <input type="text" className="form-control" value="Rebecca" />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-md-2 col-sm-3 col-xs-12 control-label">First Name</label>
                                                <div className="col-md-10 col-sm-9 col-xs-12">
                                                    <input type="text" className="form-control" value="Rebecca" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-2 col-sm-3 col-xs-12 control-label">Last Name</label>
                                                <div className="col-md-10 col-sm-9 col-xs-12">
                                                    <input type="text" className="form-control" value="Sanders" />
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset className="fieldset">
                                            <h3 className="fieldset-title">Contact Info</h3>
                                            <div className="form-group">
                                                <label className="col-md-2  col-sm-3 col-xs-12 control-label">Email</label>
                                                <div className="col-md-10 col-sm-9 col-xs-12">
                                                    <input type="email" className="form-control" value="Rebecca@website.com" />
                                                    <p className="help-block">This is the email </p>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-2  col-sm-3 col-xs-12 control-label">Twitter</label>
                                                <div className="col-md-10 col-sm-9 col-xs-12">
                                                    <input type="text" className="form-control" value="SpeedyBecky" />
                                                    <p className="help-block">Your twitter username</p>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-2  col-sm-3 col-xs-12 control-label">divedin</label>
                                                <div className="col-md-10 col-sm-9 col-xs-12">
                                                    <input type="url" className="form-control" value="https://www.divedin.com/in/lorem" />
                                                    <p className="help-block">eg. https://www.divedin.com/in/yourname</p>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <hr />
                                        <div className="form-group">
                                            <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                                                <input className="btn btn-primary" type="submit" value="Update Profile" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                    </div>
                </div>
            </div> */}

            <div className='w-full ml-5 flex justify-center'>
                {/* sidebar */}
                <div className='w-[85%] mr-5 '>
                    <div className="user-info mt-10">
                        <img className=" w-[125px] rounded-full m-auto flex justify-center mb-4" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                        <div className='text-xl text-center w-full'>Institution Name</div>
                        <div className='text-left mt-2 p-7 ml-8 space-y-6'>
                            <div className='flex ml-20'>
                                <div>Email address : </div>
                                <div className='ml-14'>
                                <input type='email' placeholder='Enter your email' className=' py-1 w-96 px-2 focus:outline-none focus:border-slate-500 hover:shadow border-2 border-solid border-gray-400 rounded-md pl-1' />
                                </div>
                            </div>
                            <div className='flex ml-20'>
                                <div>
                                    Contact :
                                </div>
                                <div className='ml-24'>
                                <input type='email' placeholder='Enter your email' className=' py-1 w-96 px-2 focus:outline-none focus:border-slate-500 hover:shadow border-2 border-solid border-gray-400 rounded-md pl-1' />
                                </div>

                            </div>
                            <div className='flex ml-20'>
                                <div>
                                    location :
                                </div>
                                <div className='ml-24'>
                                <input type='email' placeholder='Enter your email' className=' py-1 w-96 px-2 focus:outline-none focus:border-slate-500 hover:shadow border-2 border-solid border-gray-400 rounded-md pl-1' />

                                </div>
                            </div>
                            <div className='flex ml-20'>
                                <div>
                                    State :
                                </div>
                                <div className="btn-group ml-20 w-96">
                                    <button type="button" className="btn btn-light dropdown-toggle w-48 shadow-none py-1 ml-10 text-sm" data-bs-toggle="dropdown" aria-expanded="false">
                                        {statee}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item py-0" value={'Assam'} onClick={handleeve}>Assam</button></li>
                                        {/* <li><hr className="dropdown-divider py-0" /></li> */}
                                        <li><button className="dropdown-item py-0" value={'Bihar'} onClick={handleeve}>Bihar</button></li>
                                        {/* <li><hr className="dropdown-divider py-0" /></li> */}
                                        <li><button className="dropdown-item py-0" value={'Chandigarh'} onClick={handleeve}>Chandigarh</button></li>
                                        {/* <li><hr className="dropdown-divider py-0" /></li> */}
                                        <li><button className="dropdown-item py-0" value={'Delhi'} onClick={handleeve}>Delhi</button></li>
                                        {/* <li><hr className="dropdown-divider py-0" /></li> */}
                                        <li><button className="dropdown-item py-0" value={'Daman & Diu'} onClick={handleeve}>Daman & Diu</button></li>
                                        {/* <li><hr className="dropdown-divider py-0" /></li> */}
                                        <li><button className="dropdown-item py-0" value={'Uttar Pradesh'} onClick={handleeve}>Uttar Pradesh</button></li>
                                        {/* <li><hr className="dropdown-divider py-0" /></li> */}
                                        <li><button className="dropdown-item py-0" value={'Punjab'} onClick={handleeve}>Punjab</button></li>
                                        {/* <li><hr className="dropdown-divider py-0" /></li> */}
                                        <li><button className="dropdown-item py-0" value={'Andhra Pradesh'} onClick={handleeve}>Chandigarh</button></li>
                                        {/* <li><hr className="dropdown-divider py-0" /></li> */}
                                        <li><button className="dropdown-item py-0" value={'Kerela'} onClick={handleeve}>Kerela</button></li>
                                        {/* <li><hr className="dropdown-divider py-0" /></li> */}
                                        <li><button className="dropdown-item py-0" value={'Tamil Nadu'} onClick={handleeve}>Tamil Nadu</button></li>
                                        {/* <li><hr className="dropdown-divider py-0" /></li> */}
                                        <li><button className="dropdown-item py-0" value={'Haryana'} onClick={handleeve}>Haryana</button></li>
                                        {/* <li><hr className="dropdown-divider py-0" /></li> */}
                                        <li><button className="dropdown-item py-0" value={'Goa'} onClick={handleeve}>Goa</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='flex ml-20'>
                                <div>
                                    Type of User :
                                </div>
                                <div className='ml-16'>
                                <input type='email' placeholder='Enter your email' className=' py-1 w-96 px-2 focus:outline-none focus:border-slate-500 hover:shadow border-2 border-solid border-gray-400 rounded-md pl-1' />

                                </div>
                            </div>
                            <div className='flex ml-20'>
                                <div>
                                    Points:
                                </div>
                                <div className='ml-28'>
                                <input type='email' placeholder='Enter your email' className=' py-1 w-96 px-2 focus:outline-none focus:border-slate-500 hover:shadow border-2 border-solid border-gray-400 rounded-md pl-1' />

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <nav className="side-menu">
                        <ul className="nav">
                            <li className="active"><a href="#/"><span className="fa fa-user"></span> Profile</a></li>
                            <li><a href="#/"><span className="fa fa-cog"></span> Settings</a></li>
                            <li><a href="#/"><span className="fa fa-credit-card"></span> Billing</a></li>
                            <li><a href="#/"><span className="fa fa-envelope"></span> Messages</a></li>

                            <li><a href="user-drive.html"><span className="fa fa-th"></span> Drive</a></li >
                            <li><a href="#/"><span className="fa fa-clock-o"></span> Reminders</a></li >
                        </ul >
                    </nav > */}
                <div className="flex">
                    <div className="mt-3 flex space-x-7">
                    <button type="submit" onClick={edit} className=" flex items-center space-x-1 bg-amber-800 rounded text-white px-2 py-1 cursor-pointer"><div>Edit</div> <FaEdit className="" /></button>
                    <button disabled={disable} onClick={save} className={`flex items-center space-x-1 bg-amber-800 rounded text-white px-2 py-1 ${point}`}><div>Save</div> <FiSave className="" /></button>

                    </div>
                  </div>
                </div >

            {/* <div className='border-2 border-solid border-gray-600 w-[50%]'>
                <div>

                </div>
            </div> */}
            </div >


        </div >
    );
}