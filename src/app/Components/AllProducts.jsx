import React from 'react'

function AllProducts() {
    return (
        <>
            <div className='w-[653px] h-[159px] px-[15px] py-[11px] bg-darkBlue rounded-[12px] mt-4 flex flex-col justify-between text-white'>
                <div className="flex justify-between">
                    <div className='cursor-pointer bg-lightBlue p-[8px] rounded-[8px]'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8491 13.1101C17.8491 16.0917 16.0916 17.8492 13.1099 17.8492H6.62491C3.63574 17.8492 1.87491 16.0917 1.87491 13.1101V6.61008C1.87491 3.63258 2.96991 1.87508 5.95241 1.87508H7.61908C8.21741 1.87591 8.78074 2.15674 9.13908 2.63591L9.89991 3.64758C10.2599 4.12591 10.8232 4.40758 11.4216 4.40841H13.7799C16.7691 4.40841 17.8724 5.93008 17.8724 8.97258L17.8491 13.1101Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.23416 12.0525H13.5133" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                </div>

                <div className='flex gap-[32px] items-start'>
                    <div className='flex flex-col gap-[8px] w-[295.5px] h-[55px]'>
                        <p className='text-[14px]'>All Products</p>
                        <p className='text-[20px]'>45</p>
                    </div>

                    <div className='flex flex-col gap-[8px] w-[295.5px] h-[55px]'>
                        <p className='text-[14px]'>Active</p>
                        <div className='flex gap-2 items-start'>
                            <p className='text-[20px] text-white'>32</p>
                            <p className='text-slate-300 text-[12px] mt-2'>+24%</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllProducts
