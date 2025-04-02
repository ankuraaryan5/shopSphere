import React from 'react'

function Header() {
  return (
    <div className='flex w-full h-16 md:flex-row flex-col bg-gray-900 text-white px-16 py-4 flex justify-between items-center'>
        <p className='text-sm'>Free shipping on your first order</p>
        <div className='flex gap-4 '>
            <select name="" id="" className='text-sm mr-4 '>
                <option value="" className='text-black'>Select Store</option>
                <option value="delhi" className='text-black'>Delhi</option>
                <option value="patna" className='text-black'>Patna</option>
                <option value="mumbai" className='text-black'>Mumbai</option>
            </select>
            <select name="" id="" className='text-sm mr-4'>
                <option value="english" className='text-black'>English</option>
                <option value="hindi" className='text-black'>Hindi</option>
            </select>
            <select name="" id="" className='text-sm ml-4'>
                <option value="INR" className='text-black'>INR</option>
                <option value="USD" className='text-black'>USD</option>
            </select>
        </div>
    </div>
  )
}

export default Header