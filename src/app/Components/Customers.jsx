import React from 'react'

function Customers() {
    return (
        <>
            <div className='w-[512px] h-[145px] px-[15px] py-[11px] bg-white rounded-[12px] mt-4 ml-3 flex flex-col justify-between'>
                <div className="flex justify-between">
                    <div className='cursor-pointer bg-superPink p-[8px] rounded-[8px]'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.59151 13.2068C11.2805 13.2068 14.4335 13.7658 14.4335 15.9988C14.4335 18.2318 11.3015 18.8068 7.59151 18.8068C3.90151 18.8068 0.749512 18.2528 0.749512 16.0188C0.749512 13.7848 3.88051 13.2068 7.59151 13.2068Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.59151 10.0198C5.16951 10.0198 3.20551 8.0568 3.20551 5.6348C3.20551 3.2128 5.16951 1.2498 7.59151 1.2498C10.0125 1.2498 11.9765 3.2128 11.9765 5.6348C11.9855 8.0478 10.0355 10.0108 7.62251 10.0198H7.59151Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.4831 8.8816C16.0841 8.6566 17.3171 7.2826 17.3201 5.6196C17.3201 3.9806 16.1251 2.6206 14.5581 2.3636" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.5954 12.7322C18.1464 12.9632 19.2294 13.5072 19.2294 14.6272C19.2294 15.3982 18.7194 15.8982 17.8954 16.2112" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <select className='bg-transparent text-superGray text-[12px] cursor-pointer'>
                            <option value="">This Week</option>
                            <option value="">This Month</option>
                            <option value="">This Year</option>
                        </select>
                    </div>
                </div>

                <div className='flex gap-[32px] items-start'>
                    <div className='flex flex-col gap-[8px] w-[197px] h-[55px]'>
                        <p className='text-lightGray text-[14px]'>Customers</p>
                        <div className='flex gap-2 items-start'>
                            <p className='text-[20px]'>1,250</p>
                            <p className='text-darkGreen text-[12px] mt-2'>+15.80%</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[8px] w-[197px] h-[55px]'>
                        <p className='text-lightGray text-[14px]'>Active</p>
                        <div className='flex gap-2 items-start'>
                            <p className='text-[20px]'>1,180</p>
                            <p className='text-darkGreen text-[12px] mt-2'>+85%</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Customers
