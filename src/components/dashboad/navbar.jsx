import React from 'react'

const NavbarComponent = () => {
  return (
    <div className='bg-[#479597] fixed w-full z-50 py-5 px-10 flex justify-between'>
        <div className='text-[26px] font-bold'> <span className='text-[#ddbeaa]'>Game</span><span className='text-[#bbc6c8]'>Shop</span></div>
        <div>
            <input type="search" placeholder='Enter your keyword...' className='items-center w-[500px] py-2 px-5 '/>
        </div>
        <div className='bg-[#ffff] h-30 w-10 rounded-full'>
          
        </div>
    </div>
  )
}

export default NavbarComponent