import Image from 'next/image'
import React from 'react'

const RowBills = () => {
    return (
        <tr>
            <th>
                <div className="form-control">
                    <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-warning" />
                    </label>
                </div>
            </th>
            <td>
                <div className="w-24 text-zinc-800 text-lg font-medium font-['Poppins']">Order #1</div>
            </td>
            <td>
                <button className="w-40 h-12 px-6 py-4 bg-lime-400 bg-opacity-30 rounded-2xl border border-lime-400 justify-center items-center gap-2 inline-flex">
                    <div className="text-lime-400 text-sm font-semibold ">Completed</div>
                </button>
            </td>
            {/* Location  */}
            <td>
                <p className='opacity-70'>
                    June 1,2020, 10:44 AM
                </p>
            </td>
            {/* Location  */}
            <td>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#F8B602] mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>

                    <h5 className="text-zinc-800 text-lg font-semibold ">Elm Street, 23 Yogyakarta</h5>
                </div>
            </td>
            <td>
                <h3><span className="text-yellow-500 text-lg font-semibold ">$ </span><span className="text-zinc-800 text-lg font-semibold ">5.59</span></h3>
            </td>
            <td>
                <h5 className='text-black'> Cash</h5>
            </td>
            <td>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </td>

        </tr>
    )
}

export default RowBills