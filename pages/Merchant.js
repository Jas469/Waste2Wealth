import React from 'react';
// import './inde';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
import Link  from "next/link";

import SidebarNGO from './SidebarNGO';
import { useState } from 'react';
// import { button } from 'react-bootstrap';

export default function Merchant() {
    const [statee, setStatee] = useState('Select State');
    const handleeve = (e) => {
        setStatee(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div className='flex'>
            <div className='w-[20%]'><SidebarNGO /></div>

            {/* <div className='w-full border-2 border-solid border-red-200'> */}
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

            <div className='w-full border-2 border-solid border-red-900 ml-5 flex'>
                {/* sidebar */}
                <div className='w-[45%] border-2 border-solid border-red-600 mr-5 '>
                    <div className="user-info mt-10">
                        <img className=" w-[125px] rounded-full border-2 border-solid border-red-600 m-auto mb-4" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                        <div className='text-xl text-center w-full'>Institution Name</div>
                        <div className='text-left mt-2 p-7 ml-8 space-y-4'>
                            <div className='flex'>
                                <div>Email address : </div>
                                <div className='ml-14'>
                                    <input type='email' placeholder='Enter your email' className=' border-2 border-solid border-gray-400 rounded-md pl-1' />
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    Contact :
                                </div>
                                <div className='ml-24'>
                                <input type='email' placeholder='Enter your email' className='w-full py-1 px-2 focus:outline-none focus:border-slate-500 hover:shadow border-2 border-solid border-gray-400 rounded-md pl-1' />
                                </div>

                            </div>
                            <div className='flex'>
                                <div>
                                    location :
                                </div>
                                <div className='ml-24'>
                                <input type='email' placeholder='Enter your email' className='w-full py-1 px-2 focus:outline-none focus:border-slate-500 hover:shadow border-2 border-solid border-gray-400 rounded-md pl-1' />

                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    State :
                                </div>
                                <div className="btn-group ml-20">
                                    <button type="button" className="btn btn-light dropdown-toggle w-48 shadow-none py-1 ml-10" data-bs-toggle="dropdown" aria-expanded="false">
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
                            <div className='flex'>
                                <div>
                                    Type of User :
                                </div>
                                <div className='ml-16'>
                                <input type='email' placeholder='Enter your email' className='w-full py-1 px-2 focus:outline-none focus:border-slate-500 hover:shadow border-2 border-solid border-gray-400 rounded-md pl-1' />

                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    Points:
                                </div>
                                <div className='ml-28'>
                                <input type='email' placeholder='Enter your email' className='w-full py-1 px-2 focus:outline-none focus:border-slate-500 hover:shadow border-2 border-solid border-gray-400 rounded-md pl-1' />

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
                </div >

            <div className='border-2 border-solid border-gray-600 w-[50%]'>
                <div>

                </div>
            </div>
            </div >


        </div >
    );
}