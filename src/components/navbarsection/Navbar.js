import { useState } from 'react'
import { NavbarContent } from './NavbarContent'

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState('top-[-100vh]')
  const handleClick =()=>{
    document.body.classList.toggle('overflow-hidden')
    mobileMenu === 'top-[-100vh]'? setMobileMenu('top-0'): setMobileMenu('top-[-100vh]')
  }
  return (
    <div className='w-full lg:px-[80px] 
    px-[30px]'>
    <nav className='text-white py-[20px] flex justify-between'>
      <div className='flex items-center '>
        <img className='h-[50px] w-[50px]' src={NavbarContent.logo.icon} alt="" />
        <h1 className='font-inter font-semibold text-xl'>{NavbarContent.logo.label}</h1>
      </div>
      <div className='hidden justify-between gap-[40px] text-[18px] items-center lg:flex'>
        <ul className='flex justify-between gap-[25px]'>
          {NavbarContent.links.map((l) => (
            <li key={l.id}>
              <a  className='hover:border-b hover:border-blue-500' href="#">{l.link}</a>
            </li>
          ))}
        </ul>
        <div className='flex gap-[25px]'>
          <a href="#"className='py-[14px]'>{NavbarContent.buttons.Login}</a>
          <span className='py-[14px]'>|</span>
          <a href="#" className='bg-[#3671E9] py-[14px] px-[32px] rounded-3xl'>{NavbarContent.buttons.Register}</a>
        </div>
      </div>
      <div className="space-y-2 cursor-pointer lg:hidden block" onClick={() => handleClick()}>
        <span className="block w-8 h-0.5 bg-[#ffff]"></span>
        <span className="block w-8 h-0.5 bg-[#ffff]"></span>
        <span className="block w-8 h-0.5 bg-[#ffff]"></span>
      </div>
    </nav>
    <nav className={`lg:hidden absolute h-screen w-screen ${mobileMenu} left-0  bg-[#0D0D2B] text-white justify-center z-30 transition-all duration-500 overflow-hidden`}>
      <div className=' gap-[32px] text-[18px] flex-col flex justify-center h-screen items-center relative'>
        <div className=" cursor-pointer block absolute top-[60px] right-[30px]" onClick={() => handleClick()}>
          <span className="block w-12 h-1 bg-[#ffff] rotate-45 translate-y-[10px] translate-x-[8px]"></span>
          <span className="block w-12 h-1 bg-[#ffff] -rotate-45 translate-y-[5px] translate-x-[8px]"></span>
        </div>
        <ul className='flex flex-col justify-between gap-[32px] justify-center items-center'>
          {NavbarContent.links.map((l) => (
            <li key={l.id}>
              <a  className='hover:border-b hover:border-blue-500' href="#" onClick={() => handleClick()}>{l.link}</a>
            </li>
          ))}
      
        </ul>
        <div className='flex gap-[32px]'>
          <a href="#"className='py-[14px]' onClick={() => handleClick()}>{NavbarContent.buttons.Login}</a>
          <span className='py-[14px]'>|</span>
          <a href="#" className='bg-[#3671E9] py-[14px] px-[32px] rounded-3xl' onClick={() => handleClick()}>{NavbarContent.buttons.Register}</a>
        </div>
      </div>
    </nav>
    </div>
  )
}