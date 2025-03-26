import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-sky-600 text-white py-4'>
        <div className="logo">
            <span className='font-bold text-xl mx-20'>iTASK</span>
        </div>
        <ul className="flex gap-20 mx-20">
            <li className='cursor-pointer hover:font-bold transition-all duration-50'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-50'>Task</li>
        </ul>
    </nav>
  )
}

export default Navbar
