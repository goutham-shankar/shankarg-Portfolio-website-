import React from 'react'
import Head from 'next/head'
function Projects() {
    return (<>        <Head>
        <title>Projects - Shankar</title>
    </Head>
        <div className='mt-12 ml-7 sm:ml-24 sm:mr-36'>
            <p className='box-content ml-2 space-x-10 font-semibold text-gray-500 bg-transparent h-auhref sm:mr-20 font-Rampart'>{"<h2>"}</p>
            <h2 className='box-content inline-block w-auto h-auto mx-auto space-x-10 text-5xl font-extrabold text-white bg-transparent sm:ml-2 font-Mono sm:text-6xl'>Projects</h2>
            <p className='box-content inline-block ml-2 space-x-10 font-semibold text-gray-500 bg-transparent h-auhref sm:mr-20 font-Rampart'>{"</h2>"}</p>
            <p className='box-content mt-4 ml-2 space-x-10 font-semibold text-gray-500 bg-transparent h-auhref sm:mr-20 font-Rampart'>{"<p>"}</p>
            <h2 className='container font-bold text-gray-400 sm:ml-2 font-Mono'>Some of my best Projects</h2>
            <p className='box-content ml-2 space-x-10 font-semibold text-gray-500 bg-transparent h-auhref sm:mr-20 font-Rampart'>{"</p>"}</p>
        </div>
        <div className="h-50  ml-5  sm:ml-20 grid-cols-1   sm:grid-col-3   sm:flex gap-2 content-start ...">

            <div className="max-w-sm mt-5 border border-gray-200 rounded-lg shadow-md dark:border-gray-300">
                <a href="https://netflix-clone-shankar.web.app/">
                    <img className="rounded-t-lg" src="https://cdn.vox-cdn.com/thumbor/Yq1Vd39jCBGpTUKHUhEx5FfxvmM=/39x0:3111x2048/1200x800/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" alt="" />
                </a>
                <div className=''></div>
                <div className="p-5">
                    <a href="https://netflix-clone-shankar.web.app/">
                        <h5 className="mb-2 ml-20 text-2xl font-bold tracking-tight text-gray-900 font-Mono dark:text-white">Netflix Clone</h5>
                    </a>
                    <p className="mb-3 font-bold text-center text-gray-400 font-Mono dark:text-gray-400">Netflix Clone is an online video entertainment website similar to Netflix,
                    </p>
                    <p className='font-semibold text-Mono dark:text-gray-400'>Credentials:</p>

                    <p className='font-semibold text-Mono dark:text-gray-400'>user@example.com <br /> 1234567890</p>

                </div>
            </div>


            <div className="max-w-sm mt-5 border border-gray-200 rounded-lg shadow-md dark:border-gray-300">
                <a href="https://netflix-clone-shankar.web.app/">
                    <img className="rounded-t-lg" src="https://cdn.vox-cdn.com/thumbor/Yq1Vd39jCBGpTUKHUhEx5FfxvmM=/39x0:3111x2048/1200x800/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" alt="" />
                </a>
                <div className=''></div>
                <div className="p-5">
                    <a href="https://netflix-clone-shankar.web.app/">
                        <h5 className="mb-2 ml-20 text-2xl font-bold tracking-tight text-gray-900 font-Mono dark:text-white">Netflix Clone</h5>
                    </a>
                    <p className="mb-3 font-bold text-center text-gray-400 font-Mono dark:text-gray-400">Netflix Clone is an online video entertainment website similar to Netflix,
                    </p>
                    <p className='font-semibold text-Mono dark:text-gray-400'>Credentials:</p>

                    <p className='font-semibold text-Mono dark:text-gray-400'>user@example.com <br /> 1234567890</p>

                </div>
            </div>



        </div>

    </>

    )
}

export default Projects