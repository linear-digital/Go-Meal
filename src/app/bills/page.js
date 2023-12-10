import React from 'react'
import Topbar from '../Components/Topbar'
import Sidebar from '../Components/Sidebar'
import Image from 'next/image'
import RowOrder from '../Components/RowOrder'
import RowBills from './RowBills'

const page = () => {
    return (
        <section className="w-full flex justify-between ">
            <div className="container-1 md:hidden lg:block">
                <Sidebar />
            </div>
            <div className="container-2 px-5 h-screen overflow-y-auto">
                <Topbar headLine={"Bills"} />
                <div className="flex w-full">
                    <div className="w-[100%] h-screen overflow-y-auto pr-2">
                        <div className="flex justify-between">
                            <div className='w-[300px] h-[40px] relative'>
                                <Image src={'/Images/magnifier.png'} height={20} width={20}
                                    className='absolute top-2 bottom-0 left-2'
                                    alt='This is Image' />
                                <input className='w-full h-full  pl-8 pr-3 rounded-lg focus:outline bg-white text-[#726980]' type="text" name="" id="" placeholder='Search Bills' />
                            </div>
                            <button className="flex items-center">
                                <div className="text-zinc-800 text-lg font-normal ">Recently</div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                        </div>
                        {/* Stop  */}
                        <div className="overflow-x-auto mt-10 h-[70vh] overflow-y-auto bg-white">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>
                                            <div className="form-control">
                                                <label className="cursor-pointer label">
                                                    <input type="checkbox" className="checkbox checkbox-warning" />
                                                </label>
                                            </div>
                                        </th>
                                        <th>Menu</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                        <th>Adress</th>
                                        <th>Total</th>
                                        <th>Payment Method</th>
                                        <th></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <RowBills />
                                   

                                </tbody>
                                {/* foot */}
                            </table>
                        </div>
                    </div>

                </div>

            </div>


        </section>
    )
}

export default page