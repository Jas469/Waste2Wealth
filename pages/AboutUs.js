// import React from "react";
// import Header from "./Header";


export default function About_us() {
    return (<>
        <div>
            {/* <Header/> */}
            <div className=" h-30 w-full p-5 mt-3  ">
                <div className=' text-left text-4xl font-BlinkMacSystemFont font-extrabold text-green-700'>ABOUT US</div>
            </div>

            <div className="flex pl-2 h-auto justify-between flex-row mt-3 mx-1 ml-2 border-1 rounded-md flex-wrap ">
                <div className="bgimg bg-no-repeat bg-cover  h-[68vh] pl-3 flex justify-center border-solid w-[56%] rounded-md  ">
                    <img className="  shadow-lg shadow-blue-300 rounded-lg" src="1.jpg" alt='' />
                </div>

                <div className=" m-1 w-[42%] font-serif bg-gradient-to-r from-green-50 via-green-100 to-green-400">
                    <div className=" mt-32 ml-8 text-3xl text-left font-bold text-blue-900 animate-bounce"> Waste2Wealth</div>
                 
                    <div className=" ml-12 text-2xl  pr-5 text-left font-normal text-blue-900 ">Your gateway to transforming waste into a valuable resource. At Waste2Wealth, we're on a mission to make a meaningful difference in the world by revolutionizing the way we handle waste materials, with a primary focus on waste plastics.
                    </div>
                </div>
            </div>

            <div className=" my-8 w-full h-[650px] bg-gray-900">
                <div className=" p-12 text-center text-white text-5xl font-BlinkMacSystemFont">WHAT WE DO </div>
                <div className=" pb-2 px-2 text-center text-white text-2xl font-serif">Fuelled with enthusiasm, Givify’s founders gave a shape to their dream. Over the last two years, Givify has evolved as a sustainable Indian social institution – committed to do real work on the ground, and make the society and businesses inclusive in the process of bringing change. </div>

                <div className="flex justify-center w-full">
                    <div className="flex flex-wrap w-full h-auto justify-center space-x-14  mt-8 max-w-[1250px] xsm:space-x-2 ">
                        <div className=" flex-col h-[400px] w-[350px] shadow-2xl">
                            <div className=""><img className="rounded-xl w-[350px] h-[45vh]" src="3.jpg" alt="" /></div>
                            <div className="px-1 mt-3 text-3xl uppercase font-medium font-sans text-green-500 text-center">Recycle</div>
                        </div>
                        <div className="flex-col h-[400px] w-[350px] shadow-2xl">
                            <div className=""><img className="rounded-xl w-[350px] h-[45vh] " src="earn.jpg" alt="" /></div>
                            <div className="px-1 mt-3 text-3xl uppercase font-sans font-medium text-green-500 text-center">Earn</div>
                            {/* <div className="px-1"></div> */}

                        </div>
                        <div className="flex-col h-[400px] w-[350px] shadow-2xl">
                            <div className=""><img className="rounded-xl w-[350px] h-[45vh]" src="repeat.jpg" alt="" /></div>
                            <div className="px-1 mt-3 text-3xl uppercase font-sans font-medium text-green-500 text-center">Repeat</div>
                        </div>

                    </div>
                </div>
            </div>

            <div className=" mt-19 w-full h-[90vh] ">
                <div className=" pt-1 px-28 text-center text-3xl text-blue-900 font-medium font-sans">We envision a world where waste materials, especially plastics, are recognized as valuable assets waiting to be repurposed. Together with our community of dedicated recyclers and environmentally conscious individuals, we are
                 committed to creating a circular economy where waste materials are given a second life. </div>
                <div className=" pt-6 pb-2 px-52 text-center  text-xl font-sans">We believe that education is both the means as well as the end to a better life: the means because it empowers an individual to earn his/her livelihood and the end because it increases one’s awareness on a range of issues – from healthcare to appropriate social behaviour to understanding
                    one’s rights – and in the process help him/her evolve as a better citizen. </div>

                <div className=" mt-8 flex justify-center w-full space-x-8">
                    <div className="h-48 w-48 "><img className="rounded-full" src="01.jpg" alt=" " /></div>
                    <div className="h-48 w-48 "><img className="rounded-full" src="02.jpg" alt=" " /></div>
                    <div className="h-48 w-48 "><img className="rounded-full" src="03.jpg" alt=" " /></div>
                    <div className="h-48 w-48 "><img className="rounded-full" src="04.jpg" alt=" " /></div>
                    <div className="h-48 w-48 "><img className="rounded-full" src="05.jpg" alt=" " /></div>

                </div>

            </div>

            <div className=" mt-10 w-full h-[90vh] bg-zinc-100 border-b-4">
                <div className=" pt-12 text-center text-3xl font-serif font-semibold">How we work </div>
                <div className=" pt-6 px-10 text-center text-lg font-sans">At Waste2Wealth, post your waste, connect with local recyclers, and turn trash into cash – all while making a positive environmental impact. Join us today and be a part of the solution to reduce plastic waste and protect our planet </div>

                <div className=" mt-10 px-4 flex justify-center space-x-10">
                    <div className="flex-col h-[350px] w-[300px] rounded-lg mb-5  ">
                        <div className=" flex justify-center"><img className=" w-52 h-52" src="project.jpeg" alt="" /></div>
                        <div className="px-1 mt-3 text-lg font-bold">We prove every project</div>
                        <div className="px-1">We track every dollar you raise and show the projects you helped fund with photos and GPS coordinates.</div>
                    </div>
                    <div className="flex-col h-[350px] w-[300px] rounded-lg mb-5  ">
                        <div className=" flex justify-center"><img className=" w-52 h-52" src="transparent.jpeg" alt="" /></div>
                        <div className="px-1 mt-3 text-lg font-bold">We’re an open book</div>
                        <div className="px-1">We’ve consistently received the highest grades available for accountability and transparency.</div>
                    </div>
                    <div className="flex-col h-[350px] w-[300px] rounded-lg mb-5 ">
                        <div className=" flex justify-center "><img className=" w-48 h-48" src="partner.jpeg" alt="" /></div>
                        <div className="px-1 pt-4 mt-3 text-lg font-bold">We work with local partnerships</div>
                        <div className="px-3">We partner with experienced local partners to build sustainable, community-owned water projects.</div>
                    </div>
                </div>
            </div>

        </div>
    </>
    )
}