import React from 'react'
import Head from 'next/head'
import { getPosts } from '../Services/index'

function Projects({ posts }) {
    return (<>
        <Head>
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
        <div className="h-50   ml-5  sm:ml-20 grid-cols-1   sm:grid-col-3   sm:flex gap-2 content-start ...">
            {posts.map((post) => (
                <div key={post.projectLink} className="max-w-sm mt-5 border border-gray-200 rounded-lg shadow-md dark:border-gray-300">
                    <a href={post.projectLink} >
                        <img className="rounded-t-lg" src={post.photo.url} alt="" />
                    </a>
                    <div className="p-5">
                        <a href={post.projectLink}>
                            <h5 className="mb-2 ml-20 text-2xl font-bold tracking-tight text-gray-900 font-Mono dark:text-white">{post.title}</h5>
                        </a>
                        <p className="mb-3 font-bold text-center text-gray-400 font-Mono dark:text-gray-400">{post.excerpt}
                        </p>
                        <p className='font-semibold text-Mono dark:text-gray-400'>{post.content.text}</p>

                    </div>
                </div>

            ))}




        </div>

    </>

    )
}

export default Projects 


export async function getStaticProps() {
    const posts = (await getPosts()) || [];

    return {
        props: { posts },
        revalidate: 5,
      
    }
}