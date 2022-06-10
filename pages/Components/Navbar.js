
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div>
            <div className="  h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <nav className="px-1 py-2 bg-transparent bg-black rounded sm:px-4 ">
                <div className="container flex flex-wrap justify-between mx-auto">
                    <div className="flex ">
                      

                        <span className="hidden text-xl font-extrabold float:left sm:block whitespace-nowrap dark:text-white">SG</span>
                        <span className="visible mt-3 ml-3 text-xl font-extrabold sm:hidden whitespace-nowrap dark:text-gray-50">SG</span>

                    </div>



                    <div className="mt-1 " id="mobile-menu-4">
                        <ul className="flex md:flex-row md:space-x-8 md:text-sm md:font-medium">
                            <li>
                                <Link href="/"><span className='block py-2 pl-3 pr-4 font-extrabold text-gray-100 rounded-sm hover:cursor-pointer font-Mono md:bg-transparent md:p-0 dark:text-gray-400 hover:text-white'>Home</span></Link>
                            </li>
                            <li>
                            <Link href="/About"><span className='block py-2 pl-3 pr-4 font-extrabold text-gray-100 rounded-sm hover:cursor-pointer font-Mono md:bg-transparent md:p-0 dark:text-gray-400 hover:text-white'>About</span></Link>
                            </li>
                            <li>
                            <Link href="/Tools" ><span className='block py-2 pl-3 pr-4 font-extrabold text-gray-100 rounded-sm hover:cursor-pointer font-Mono md:bg-transparent md:p-0 dark:text-gray-400 hover:text-white'>Tools</span></Link>
                            </li>
                            <li>
                            <Link href="/Projects" ><span className='block py-2 pl-3 pr-4 font-extrabold text-gray-100 rounded-sm hover:cursor-pointer font-Mono md:bg-transparent md:p-0 dark:text-gray-400 hover:text-white'>Projects</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="  h-0.5  opacity-20 bg-gray-100"></div>


        </div>
    )
}

export default Navbar