import React from 'react'

function AbandonedCart() {
    return (
        <>
            <div className='w-[653px] h-[159px] px-[15px] py-[11px] bg-white rounded-[12px] mt-4 flex flex-col justify-between'>
                <div className="flex justify-between">
                    <div className='cursor-pointer bg-superPink p-[8px] rounded-[8px]'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_13_468)">
                                <path d="M16.6667 18.3333C17.1269 18.3333 17.5 17.9602 17.5 17.5C17.5 17.0398 17.1269 16.6667 16.6667 16.6667C16.2064 16.6667 15.8333 17.0398 15.8333 17.5C15.8333 17.9602 16.2064 18.3333 16.6667 18.3333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.49999 18.3333C7.96023 18.3333 8.33332 17.9602 8.33332 17.5C8.33332 17.0398 7.96023 16.6667 7.49999 16.6667C7.03975 16.6667 6.66666 17.0398 6.66666 17.5C6.66666 17.9602 7.03975 18.3333 7.49999 18.3333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M0.833344 0.833332H4.16668L6.40001 11.9917C6.47621 12.3753 6.68493 12.72 6.98963 12.9652C7.29433 13.2105 7.67559 13.3408 8.06668 13.3333H16.1667C16.5578 13.3408 16.939 13.2105 17.2437 12.9652C17.5484 12.72 17.7571 12.3753 17.8333 11.9917L19.1667 5H5.00001" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_13_468">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
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
                    <div className='flex flex-col gap-[8px] w-[295.5px] h-[55px]'>
                        <p className='text-lightRed text-[14px]'>Abandoned Cart</p>
                        <div className='flex gap-2 items-start'>
                            <p className='text-[20px]'>20%</p>
                            <p className='text-darkGreen text-[12px] mt-2'>+0.00%</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[8px] w-[295.5px] h-[55px]'>
                        <p className='text-lightGray text-[14px]'>Customers</p>
                        <div className='flex gap-2 items-start'>
                            <p className='text-[20px]'>30</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AbandonedCart
