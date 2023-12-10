"use client"

import React from 'react'
import Topbar from '../Components/Topbar'
import Sidebar from '../Components/Sidebar'
import Image from 'next/image'


const page = () => {

    return (
        <section className="w-full flex justify-between ">
            <div className="container-1">
                <Sidebar />
            </div>
            <div className="container-2 px-5 h-screen overflow-y-auto">
                <Topbar headLine={"Notification"} />
                <div className="flex flex-col w-full px-5">
                    <div className="flex w-full  justify-between">
                        <div className="flex">
                            <button className="w-28 h-10 px-6 py-4 bg-yellow-500 rounded-tl-lg rounded-bl-lg justify-center items-center gap-3.5 inline-flex">
                                <span className="text-white text-sm font-normal ">Activity</span>
                            </button>
                            <button className="w-28 h-10 px-6 py-4 bg-neutral-100 rounded-tr-lg rounded-br-lg justify-center items-center gap-3.5 inline-flex">
                                <span className="text-zinc-400 text-sm font-normal ">Notifications</span>
                            </button>
                        </div>
                        <div className="flex">
                            <button className="flex items-center">
                                <div className="text-zinc-800 text-lg font-normal ">Recently</div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            <button className="mx-10">
                                <Image src={'/Images/icon/3-dot.svg'} width={20} height={10} />
                            </button>
                        </div>

                    </div>
                    <h1 className="text-zinc-800 text-2xl mt-10 font-bold">
                        Today
                    </h1>
                    <div className="mt-10 flex w-full justify-center items-center">
                        <h1 className='text-5xl'>No Notification</h1>
                    </div>
                </div>

            </div>


        </section>
    )
}

export default page