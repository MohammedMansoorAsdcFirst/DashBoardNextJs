import React from 'react'
import { Poppins } from 'next/font/google';

function Header() {
    return (
        <>
            <div className='w-[1624px] h-[60px] bg-white flex items-center justify-between px-[21px] py-[14px]'>
                <div className='text-[20px] font-Poppins text-black cursor-pointer'>
                    <p>Dashboard</p>
                </div>
                <div className='flex gap-[20px] justify-center text-black'>
                    <div className=''>
                        <select className='h-[32px] px-[12px] py-[5px] bg-lightPink gap-[0px] flex justify-center items-center rounded-[8px] text-[14px] cursor-pointer'>
                            <option>Jublee Hill Store</option>
                            <option>Shahalibanda Store</option>
                        </select>
                    </div>
                    <div className='mt-2 cursor-pointer'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4746 9.70444C15.8659 8.99357 15.5892 8.37753 15.5892 7.33095V6.9751C15.5892 5.61127 15.2754 4.73254 14.5929 3.85382C13.5411 2.48915 11.7703 1.66666 10.0369 1.66666H9.96317C8.26615 1.66666 6.55091 2.45138 5.48085 3.76066C4.76113 4.65701 4.41079 5.5735 4.41079 6.9751V7.33095C4.41079 8.37753 4.15239 8.99357 3.52543 9.70444C3.06411 10.2281 2.91669 10.9012 2.91669 11.6297C2.91669 12.3591 3.15604 13.0498 3.63641 13.6113C4.26337 14.2844 5.14873 14.7141 6.05315 14.7888C7.36256 14.9382 8.67197 14.9944 10.0004 14.9944C11.3281 14.9944 12.6375 14.9004 13.9477 14.7888C14.8513 14.7141 15.7367 14.2844 16.3636 13.6113C16.8432 13.0498 17.0834 12.3591 17.0834 11.6297C17.0834 10.9012 16.9359 10.2281 16.4746 9.70444Z" fill="#5570F1" />
                            <path opacity="0.4" d="M11.6739 16.0236C11.2573 15.9347 8.71882 15.9347 8.30223 16.0236C7.9461 16.1059 7.56097 16.2972 7.56097 16.7169C7.58168 17.1172 7.81607 17.4706 8.14073 17.6946L8.1399 17.6955C8.5598 18.0228 9.05259 18.2309 9.56857 18.3056C9.84354 18.3434 10.1235 18.3417 10.4084 18.3056C10.9235 18.2309 11.4163 18.0228 11.8362 17.6955L11.8354 17.6946C12.1601 17.4706 12.3945 17.1172 12.4152 16.7169C12.4152 16.2972 12.03 16.1059 11.6739 16.0236Z" fill="#5570F1" />
                        </svg>
                    </div>
                    <div className='cursor-pointer'>
                        <img className='w-[32px] h-[32px]' src="/profile.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
