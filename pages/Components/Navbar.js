import React from 'react'

function Navbar() {
    return (
        <div>
            <div className="  h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <nav className="px-1 py-2 bg-transparent bg-black rounded sm:px-4 ">
                <div className="container flex flex-wrap justify-between mx-auto">
                    <a href="/" className="flex ">
                      

                        <span className="hidden text-xl font-extrabold float:left sm:block whitespace-nowrap dark:text-white">SG</span>
                        <span className="visible mt-3 ml-3 text-xl font-extrabold sm:hidden whitespace-nowrap dark:text-gray-50">SG</span>

                    </a>



                    <div className="mt-1 " id="mobile-menu-4">
                        <ul className="flex md:flex-row md:space-x-8 md:text-sm md:font-medium">
                            <li>
                                <a href="/" className="block py-2 pl-3 pr-4 font-extrabold text-gray-100 rounded-sm font-Mono md:bg-transparent md:p-0 dark:text-gray-400 hover:text-white">Home</a>
                            </li>
                            <li>
                                <a href="/About"   className="block py-2 pl-3 pr-4 font-extrabold text-gray-100 border-gray-100 rounded-sm font-Mono hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">About</a>
                            </li>
                            <li>
                                <a href="/Tools" className="block py-2 pl-3 pr-4 font-extrabold text-gray-100 border-gray-100 rounded-sm font-Mono hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent active:text-white dark:border-gray-700 " aria-current="page">Tools</a>
                            </li>
                            <li>
                                <a href="/Projects" className="block py-2 pl-3 pr-4 font-extrabold text-gray-100 border-gray-100 rounded-sm font-Mono hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
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